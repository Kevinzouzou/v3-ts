<template>
  <div>
    <div class="select-box">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="selectData.nikeName" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="selectData.role" class="m-2" placeholder="请选择">
            <el-option label="全部" :value="0" />
            <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName" :value="item.roleId" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="nikeName" label="姓名" width="180" />
      <el-table-column prop="role" label="角色">
        <template #default="scope">
          <el-button v-for="i in scope.row.role" :key="i.role" link type="primary" size="small">
            {{ i.roleName }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="editFun(scope.row)" link type="primary" size="small">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <el-dialog v-model="isShow" title="编辑">
    <el-form :model="active">
      <el-form-item label="姓名" label-width="50px">
        <el-input v-model="active.nikeName" autocomplete="off" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="角色" label-width="50px">
        <el-select multiple v-model="active.role" placeholder="Please select a zone">
          <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName" :value="item.roleId" />
        </el-select>
      </el-form-item>
    </el-form>
    <template v-slot:footer>
      <div class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="userChange">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>

</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { InitData, ListInt } from "../types/user"
import { getUserList, getRoleList } from "../http/api"

export default defineComponent({
  setup() {
    const data = reactive(new InitData())

    onMounted(() => {
      getUserList().then(res => {
        data.list = res.data
        data.listData = res.data
      })

      getRoleList().then(res => {
        data.roleList = res.data
      })

    })

    const onSubmit = () => {
      let arr: [ListInt][] = []
      if (data.selectData.nikeName || data.selectData.role) {
        if (data.selectData.nikeName) {
          arr = data.listData.filter((v: any) => v.nikeName.indexOf(data.selectData.nikeName) != -1)
        }
        if (data.selectData.role) {
          arr = (data.selectData.nikeName ? arr : data.listData).filter((v: any) => v.role.find((i: any) => i.role === data.selectData.role))

        }
      } else {
        arr = data.listData
      }
      data.list = arr
    }

    const editFun = (row: ListInt) => {
      data.active = {
        id: row.id,
        userName: row.userName,
        nikeName: row.nikeName,
        role: row.role.map((v: any) => v.role || v.roleId)
      }
      data.isShow = true
    }

    const userChange = () => {
      const obj: any = data.list.find((v: any) => v.id === data.active.id)
      obj.nikeName = data.active.nikeName
      obj.role = data.roleList.filter((v: any) => data.active.role.indexOf(v.roleId) !== -1)
      data.isShow = false
    }

    return {
      ...toRefs(data),
      onSubmit,
      editFun,
      userChange
    }
  }
})
</script>

<style scoped>
.m-2 {
  width: 167px;
}
</style>
<template>
  <el-container>
    <el-header height="80px">
      <el-row :gutter="20">
        <el-col :span="4">
          <img class="logo" src="../assets/logo.png" />
        </el-col>
        <el-col :span="16">
          <h2>后台系统</h2>
        </el-col>
        <el-col class="btn-text" :span="4">
          <el-button class="user" text>用户名</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
          default-active="1" text-color="#fff">
          <el-menu-item v-for="i in list" :key="i.path" :index="i.path">
            <!-- <el-icon><icon-menu /></el-icon> -->
            <span>{{ i.meta.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
  setup() {
    const router = useRouter()
    const list = router.getRoutes().filter(v => v.meta.isShow)
    return { list }
  }
});
</script>

<style lang="scss" scoped>
.logo {
  height: 80px;
}

h2 {
  text-align: center;
  color: #fff;
  height: 80px;
  line-height: 80px;
}

.user {
  text-align: right;
  height: 80px;
  line-height: 80px;
  color: #fff !important;
}

.user.is-text {
  &:hover {
    background: transparent !important;
    color: #7b2727 !important;
  }
}

.el-header {
  background: #545c64;
}

.el-aside {
  .el-menu {
    height: calc(100vh - 80px);
  }
}

.el-main {
  height: calc(100vh - 80px);
  overflow-y: auto;
}
</style>
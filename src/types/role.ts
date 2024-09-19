export interface ListInt {
  roleId: number,
  roleName: string,
  authority: number[]
}

interface SelectDataInt {
  roleName: string,
  roleId: number
}

export class InitData {
  selectData: SelectDataInt = {
    roleName: '',
    roleId: 0,
  }
  list: ListInt[] = []
  // dataList: [ListInt][] = []
  isAdd = false
}
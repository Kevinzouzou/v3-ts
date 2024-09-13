export interface ListInt {
  id: number,
  nikeName: string,
  userName: string,
  role: RoleInt[]
}

interface RoleInt {
  role: number,
  roleName: string,
}

interface SelectDataInt {
  nikeName: string,
  role: number
}

interface RoleListInt {
  roleName: string,
  roleId: number,
  suthorty: number[]
}

export class InitData {
  selectData: SelectDataInt = {
    nikeName: '',
    role: 0,
  }
  list: [ListInt][] = []
  listData: [ListInt][] = []
  roleList: RoleListInt[] = []
  active: ListInt = {
    id: 0,
    nikeName: '',
    userName: '',
    role: []
  }
}
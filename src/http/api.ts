import $http from "./index";

interface loginData {
  userName: string,
  password: string
}

// 登录
export const login = (data: loginData) => $http({
  url: '/login',
  method: 'post',
  data
})

// 订单列表
export const getList = (data: any) => $http({
  url: '/getList',
  method: 'get',
  data
})

// 用户列表
export const getUserList = () => $http({
  url: '/getUserList',
  method: 'get'
})

// 角色列表
export const getRoleList = () => $http({
  url: '/getRoleList',
  method: 'get'
})

// 权限列表
export const getAuthority = () => $http({
  url: '/getAuthority',
  method: 'get'
})

// 路由列表
export const getRouter = () => $http({
  url: '/getRouter',
  method: 'get'
})
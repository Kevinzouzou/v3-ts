import $http from "./index";

interface loginData {
  userName: string,
  password: string
}

export const login = (data: loginData) => $http({
  url: '/login',
  method: 'post',
  data
})
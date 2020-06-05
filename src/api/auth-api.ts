import {instance, APIResponseType} from "./api";

type AuthMeDataResType = {
        id: number,
        email: string,
        login: string
}

type LoginDataResType = {
        userId: number
}

type LogoutDataResType = {
        userId: number
}

export const authAPI = {
  authMe() {
    return instance.get<APIResponseType<AuthMeDataResType>>(`auth/me`).then(res => res.data);
  },
  authLogin(email: string, password: string, rememberMe=false) {
    return instance.post<APIResponseType<LoginDataResType>>(`auth/login`, {email, password, rememberMe}).then(res => res.data);
  },
  authLogout() {
    return instance.delete<APIResponseType<LogoutDataResType>>(`auth/login`).then(res => res.data);
  },
};

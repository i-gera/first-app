import { ProfileType } from "../../types/types"

export type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authUserId: number | null
    isAuth: boolean
}
export type MapDispatchPropsType = {
    getUsersProfile: (userId: number) => void
    getUsersStatus: (userId: number) => void
    updateUsersStatus: (status: string | null) => void
    savePhoto: (photoFile:any) => void
}
export type OwnPropsType = {
    
}
export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
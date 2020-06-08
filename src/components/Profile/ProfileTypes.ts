import { ProfileType } from "../../types/types"
import { ReactNode } from "react"
import { RouteComponentProps } from "react-router-dom"

export type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authUserId: number | null
    isAuth: boolean
    children?: ReactNode
}
export type MapDispatchPropsType = {
    getUsersProfile: (userId: number) => void
    getUsersStatus: (userId: number) => void
    updateUsersStatus: (status: string | null) => void
    savePhoto: (photoFile: File) => void
}
export type OwnPropsType = {
    
}
export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & RouteComponentProps<PathParamsType>

export type PathParamsType = {
    userId: string
}
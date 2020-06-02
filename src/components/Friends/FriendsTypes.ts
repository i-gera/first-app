import { UserType } from "../../types/types";

export type MapStatePropsType = {
    currentPage: number
    pageSize: number
    totalCount: number
    isFetching: boolean
    users: Array<UserType>
    followInProgress: Array<number>
}

export type MapDispatchPropsType = {
    getUsersThunk: (pageNumber: number, pageSize: number) => void
    unfollowThunk: (userId: number) => void
    followThunk: (userId: number) => void
}

export type OwnPropsType = {
    pageTitle: string
}

export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
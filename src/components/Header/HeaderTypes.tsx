export type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

export type MapDispatchPropsType = {
    logout: () => void
}

export type OwnPropsType = {

}

export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

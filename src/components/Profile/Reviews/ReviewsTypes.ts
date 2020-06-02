import { CommentsType } from "../../../types/types"

export type MapStatePropsType = {
    Comments: Array<CommentsType>
    newPostText: string
}
export type MapDispatchPropsType = {
    addPost: (newPostText:string) => void
}
export type OwnPropsType = {
}

export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
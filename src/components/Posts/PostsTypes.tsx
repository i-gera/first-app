import { DialogType, MessageType } from "../../types/types"

export type MapStatePropsType = {
    Dialogs: Array<DialogType>
    Messages: Array<MessageType>
}
export type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}
export type OwnPropsType = {
    
}

export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

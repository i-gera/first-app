import { DialogType, MessageType } from "../../types/types";
import { InferActionsTypes } from "../redux-store";

let initialState = {
  Dialogs: [
    { name: "Gera", id: 1 },
    { name: "Aibol", id: 2 },
    { name: "Arys", id: 3 },
    { name: "Arya", id: 4 },
  ] as Array<DialogType>,
  Messages: [
    { id: 1, message: "HI!" },
    { id: 2, message: "HI!!" },
    { id: 3, message: "HI!!!" },
    { id: 4, message: "HI!!!!" },
  ] as Array<MessageType>,
};
export type InitialStateType = typeof initialState;

export const PostsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "SEND_MESSAGE":
      let body = action.newMessageBody;
      return {
        ...state,
        Messages: [
          ...state.Messages,
          { id: 7, message: body }
        ],
      };

    default:
      return state;
  }
};

export type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    sendMessage : (newMessageBody: string) => ({ type: 'SEND_MESSAGE', newMessageBody } as const)
}


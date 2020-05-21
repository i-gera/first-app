const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
};

let initialState = {
  Dialogs: [
    {
      name: "Gera",
      id: 1,
    },
    {
      name: "Aibol",
      id: 2,
    },
    {
      name: "Arys",
      id: 3,
    },
    {
      name: "Arya",
      id: 4,
    },
  ] as Array<DialogType>,
  Messages: [
    {
      id: 1,
      message: "HI!",
    },
    {
      id: 2,
      message: "HI!!",
    },
    {
      id: 3,
      message: "HI!!!",
    },
    {
      id: 4,
      message: "HI!!!!",
    },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const PostsPageReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        Messages: [
          ...state.Messages,
          {
            id: 7,
            message: body,
          },
        ],
      };

    default:
      return state;
  }
};

type sendMessageActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessage = (newMessageBody: string): sendMessageActionType => {
  return {
    type: SEND_MESSAGE,
    newMessageBody,
  };
};

export default PostsPageReducer;

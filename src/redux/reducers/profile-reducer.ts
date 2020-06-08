import { profileAPI } from "../../api/profile-api";
import { CommentsType, ProfileType, PhotosType, ContactsType } from "../../types/types";
import { InferActionsTypes, BaseThunkType } from "../redux-store";

let initialState = {
  Comments: [
    {
      id: 1,
      comment: "Hi, how are you?",
      likes: 20
    },
    {
      id: 2,
      comment: "It's my first blog",
      likes: 25,
    },
    {
      id: 3,
      comment: "blablabla",
      likes: 30,
    },
  ] as Array<CommentsType>,
  newPostText: "",
  profile: null as ProfileType | null,
  status: "",
};

type InitialStateType = typeof initialState;

export const ProfileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "ADD_POST":
      let newPost = action.newPostText;
      return {
        ...state,
        Comments: [
          ...state.Comments,
          {
            id: 4,
            comment: newPost,
            likes: 1000,
          },
        ],
      };

    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile,
      };

    case 'SET_USER_STATUS':
      return {
        ...state,
        status: action.status,
      };

    case 'SET_PHOTO_SUCCESS':
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };

    default:
      return state;
  }
};

//action Creators
type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    addPost: (newPostText:string) => ({ type: 'ADD_POST' as const, newPostText } ),
    setUsersToProfile: (profile: ProfileType) => ({ type: 'SET_USER_PROFILE' as const, profile } ),
    setStatusToProfile: (status: string) => ({ type: 'SET_USER_STATUS' as const, status } ),
    setPhotoToProfile: (photos: PhotosType) => ({ type: 'SET_PHOTO_SUCCESS' as const, photos } )
}

//Thunk creators
type ThunkType = BaseThunkType<ActionsType>

export const getUsersProfile = (userId:number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(actions.setUsersToProfile(data));
};

export const getUsersStatus = (userId:number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(actions.setStatusToProfile(data));
};

export const updateUsersStatus = (status: string): ThunkType => async (dispatch) => {
  let data = await profileAPI.updateStatus(status);

  if (data.resultCode === 0) {
    dispatch(actions.setStatusToProfile(status));
  }
};

export const savePhoto = (photoFile: File): ThunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(photoFile);

  if (data.resultCode === 0) {
    dispatch(actions.setPhotoToProfile(data.data.photos));
  }
};

import { profileAPI } from "../../api/api";
import { CommentsType, ProfileType, PhotosType, ContactsType } from "../../types/types";

const ADD_POST = "it_samurai_ADD_POST";
const SET_USER_PROFILE = "it_samurai_SET_USER_PROFILE";
const SET_USER_STATUS = "it_samurai_SET_USER_STATUS";
const SET_PHOTO_SUCCESS = "it_samurai_SET_PHOTO_SUCCESS";

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

export type InitialStateType = typeof initialState;

const ProfilePageReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
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

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case SET_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };

    default:
      return state;
  }
};

export default ProfilePageReducer;

//action Creators
type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText:string): AddPostActionType => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

type SetUsersToProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const setUsersToProfile = (profile: ProfileType): SetUsersToProfileActionType => {
  return {
    type: SET_USER_PROFILE,
    profile
  };
};

type SetStatusToProfileActionType ={
    type: typeof SET_USER_STATUS
    status: string | null
}

export const setStatusToProfile = (status: string | null): SetStatusToProfileActionType => {
  return {
    type: SET_USER_STATUS,
    status,
  };
};

type SetPhotoToProfileActionType = {
    type: typeof SET_PHOTO_SUCCESS 
    photos: PhotosType
}

export const setPhotoToProfile = (photos: PhotosType): SetPhotoToProfileActionType => {
  return {
    type: SET_PHOTO_SUCCESS,
    photos,
  };
};

//Thunk creators
export const getUsersProfile = (userId:number) => async (dispatch:any) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUsersToProfile(response.data));
};

export const getUsersStatus = (userId:number) => async (dispatch:any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatusToProfile(response.data));
};

export const updateUsersStatus = (status: string | null) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatusToProfile(status));
  }
};

export const savePhoto = (photoFile:any) => async (dispatch:any) => {
  let response = await profileAPI.savePhoto(photoFile);

  if (response.data.resultCode === 0) {
    dispatch(setPhotoToProfile(response.data.data.photos));
  }
};

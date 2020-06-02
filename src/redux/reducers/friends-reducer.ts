
import { usersAPI } from '../../api/api';
import { UserType } from '../../types/types';
import { AppStateType } from '../redux-store';
import { ThunkAction } from 'redux-thunk';

const ADD_FRIEND = "ADD_FRIEND";
const DELETE_FRIEND = "DELETE_FRIEND";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followInProgress: [] as Array<number>,
}

type InitialStateActionType = typeof initialState;

const FriendsPageReducer = (state = initialState, action: ActionsTypes):InitialStateActionType => {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };

    case DELETE_FRIEND:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };

    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsersCount: action.count,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followInProgress: action.followInProgress
          ? [...state.followInProgress, action.userId]
          : state.followInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};


//action creators
type ActionsTypes = FollowUserActionType | UnfollowUserActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType | ToggleFollowingProgressActionType

type FollowUserActionType = {
    type: typeof ADD_FRIEND
    userId: number
}
export const followUser = (userId: number): FollowUserActionType => {
  return {
    type: ADD_FRIEND,
    userId
  }
}

type UnfollowUserActionType = {
    type: typeof DELETE_FRIEND
    userId: number
}
export const unfollowUser = (userId: number): UnfollowUserActionType => {
  return {
    type: DELETE_FRIEND,
    userId
  }
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
  return {
    type: SET_USERS,
    users
  }
}

type SetCurrentPageActionType = {
    type: typeof SET_PAGE
    pageNumber: number
}
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => {
  return {
    type: SET_PAGE,
    pageNumber
  }
}

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS
    count: number
}
export const setTotalUsersCount = (count: number): SetTotalUsersCountActionType => {
  return {
    type: SET_TOTAL_USERS,
    count
  }
}

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  }
}

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_PROGRESS
    followInProgress: boolean
    userId: number
}
export const toggleFollowingProgress = (followInProgress: boolean, userId: number): ToggleFollowingProgressActionType => {
  return {
    type: TOGGLE_FOLLOWING_PROGRESS,
    followInProgress,
    userId,
  }
}

//ThunkCreators
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
export const getUsersThunk = (pageNumber: number, pageSize: number): ThunkType => async (dispatch, getState) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));

    let response = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
    dispatch(toggleIsFetching(false));      
}

export const followThunk = (userId: number): ThunkType => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
      dispatch(followUser(userId));
      dispatch(toggleFollowingProgress(false, userId));
    }        
}

export const unfollowThunk = (userId: number): ThunkType => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
      dispatch(unfollowUser(userId));
      dispatch(toggleFollowingProgress(false, userId));
    }
}

export default FriendsPageReducer;

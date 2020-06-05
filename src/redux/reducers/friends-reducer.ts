import { usersAPI } from '../../api/users-api';
import { UserType } from '../../types/types';
import { InferActionsTypes, BaseThunkType } from '../redux-store';
import { ResultCodesEnum } from '../../api/api';

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followInProgress: [] as Array<number>,
}

type InitialStateActionType = typeof initialState;

export const FriendsReducer = (state = initialState, action: ActionsType):InitialStateActionType => {
  switch (action.type) {
    case 'ADD_FRIEND':
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

    case 'DELETE_FRIEND':
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

    case 'SET_USERS':
      return {
        ...state,
        users: action.users,
      };

    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.pageNumber,
      };

    case 'SET_TOTAL_USERS':
      return {
        ...state,
        totalUsersCount: action.count,
      };

    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case 'TOGGLE_FOLLOWING_PROGRESS':
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
type ActionsType = InferActionsTypes<typeof actions>
export const actions = {
    followUser: (userId: number) => ({ type: 'ADD_FRIEND', userId } as const),
    unfollowUser: (userId: number) => ({ type: 'DELETE_FRIEND', userId }  as const),
    setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: (pageNumber: number) => ({ type: 'SET_PAGE', pageNumber }  as const),
    setTotalUsersCount: (count: number) => ({ type: 'SET_TOTAL_USERS', count }  as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching }  as const),
    toggleFollowingProgress: (followInProgress: boolean, userId: number) => ({ type: 'TOGGLE_FOLLOWING_PROGRESS', 
        followInProgress, userId}  as const)
}

//ThunkCreators
type ThunkType = BaseThunkType<ActionsType>
export const getUsersThunk = (pageNumber: number, pageSize: number): ThunkType => async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(pageNumber));

    let data = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
    dispatch(actions.toggleIsFetching(false));      
}

export const followThunk = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await usersAPI.follow(userId);
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.followUser(userId));
      dispatch(actions.toggleFollowingProgress(false, userId));
    }        
}

export const unfollowThunk = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await usersAPI.unfollow(userId);
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.unfollowUser(userId));
      dispatch(actions.toggleFollowingProgress(false, userId));
    }
}


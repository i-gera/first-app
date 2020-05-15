
import { usersAPI } from './../../api/api';

const ADD_FRIEND = "ADD_FRIEND";
const DELETE_FRIEND = "DELETE_FRIEND";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followInProgress: [],
};

const FriendsPageReducer = (state = initialState, action) => {
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
export const followUser = (userId) => {
  return {
    type: ADD_FRIEND,
    userId,
  };
};

export const unfollowUser = (userId) => {
  return {
    type: DELETE_FRIEND,
    userId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_PAGE,
    pageNumber,
  };
};

export const setTotalUsersCount = (count) => {
  return {
    type: SET_TOTAL_USERS,
    count,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const toggleFollowingProgress = (followInProgress, userId) => {
  return {
    type: TOGGLE_FOLLOWING_PROGRESS,
    followInProgress,
    userId,
  };
};


//ThunkCreators
export const getUsersThunk = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));

    let response = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
    dispatch(toggleIsFetching(false));

      
}

export const followThunk = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
      dispatch(followUser(userId));
      dispatch(toggleFollowingProgress(false, userId));
    }        
}

export const unfollowThunk = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
      dispatch(unfollowUser(userId));
      dispatch(toggleFollowingProgress(false, userId));
    }
}


export default FriendsPageReducer;

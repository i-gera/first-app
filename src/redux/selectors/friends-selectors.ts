import {createSelector} from 'reselect';
import { AppStateType } from '../redux-store';

const getUsersSelector = (state: AppStateType) =>{
    return state.FriendsPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) =>{
   return users.filter(u=>true);
})

export const getPageSize = (state: AppStateType) =>{
    return state.FriendsPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) =>{
    return state.FriendsPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) =>{
    return state.FriendsPage.currentPage
}

export const getIsFetching = (state: AppStateType) =>{
    return state.FriendsPage.isFetching
}

export const getFollowInProgress = (state: AppStateType) =>{
    return state.FriendsPage.followInProgress
}
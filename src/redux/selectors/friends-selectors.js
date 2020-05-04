import {createSelector} from 'reselect';

const getUsersSelector = (state) =>{
    return state.FriendsPage.users
}

// export const getUsersSel = (state) =>{
//     return getUsers(state).filter(u=>true);
// }

export const getUsers = createSelector(getUsersSelector, (users) =>{
   return users.filter(u=>true);
})

export const getPageSize = (state) =>{
    return state.FriendsPage.pageSize
}

export const getTotalUsersCount = (state) =>{
    return state.FriendsPage.totalUsersCount
}

export const getCurrentPage = (state) =>{
    return state.FriendsPage.currentPage
}

export const getIsFetching = (state) =>{
    return state.FriendsPage.isFetching
}

export const getFollowInProgress = (state) =>{
    return state.FriendsPage.followInProgress
}
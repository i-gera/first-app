export const getUsers = (state) =>{
    return state.FriendsPage.users
}

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
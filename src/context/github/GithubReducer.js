const githubReducer = (state, action) => {
    switch(action.type){
        case 'GET_USERS':
            return{
                ...state,
                users: action.payload,
                loading: false
            }
        case 'SET_LAODING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default githubReducer
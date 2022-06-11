const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
    default:
      return { ...state, users: action.payload, loading: false }
  }
}

export default githubReducer

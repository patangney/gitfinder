import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GitHubContext = createContext()

const apiKey = process.env.REACT_APP_GITHUB_TOKEN
const apiURL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async text => {
    setLoading()
    const params = new URLSearchParams({
      q: text
    })
    const response = await fetch(`${apiURL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${apiKey}`
      }
    })

    const { items } = await response.json() //destructure from the items array that is returned in json

    dispatch({
      type: 'GET_USERS',
      payload: items
    })
  }
  //getSingleUser
  const getSingleUser = async login => {
    setLoading()

    const response = await fetch(`${apiURL}/users/${login}`, {
      headers: {
        Authorization: `token ${apiKey}`
      }
    })

    if (response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await response.json()
      dispatch({
        type: 'GET_USER',
        payload: data
      })
    }
  }
  //Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  //Clear users from state
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        getSingleUser,
        clearUsers
      }}
    >
      {children}
    </GitHubContext.Provider>
  )
}

export default GitHubContext

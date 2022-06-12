import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GitHubContext = createContext()

const apiKey = process.env.REACT_APP_GITHUB_TOKEN
const apiURL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  
  
  // Get User Repos
  const getUserRepos = async (login) => {
    setLoading()

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })
    
    const response = await fetch(`${apiURL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    })

    const data = await response.json() //destructure from the items array that is returned in json

    dispatch({
      type: 'GET_REPOS',
      payload: data
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
        ...state,
        dispatch,        
        getSingleUser,
        getUserRepos,
        clearUsers
      }}
    >
      {children}
    </GitHubContext.Provider>
  )
}

export default GitHubContext

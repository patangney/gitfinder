import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GitHubContext = createContext()

const apiKey = process.env.REACT_APP_GITHUB_TOKEN
const apiURL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const fetchUsers = async () => {
      setLoading()
    const response = await fetch(`${apiURL}/users`, {
      headers: {
        Authorization: `token ${apiKey}`
      }
    })

    const data = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  }
  //Set Loading
  const setLoading = () => dispatch({type: 'SET_LOADING'})

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers
      }}
    >
      {children}
    </GitHubContext.Provider>
  )
}

export default GitHubContext

import { createContext, useState } from 'react'

const GitHubContext = createContext()

const apiKey = process.env.REACT_APP_GITHUB_TOKEN
const apiURL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]) //fill this from the github api
  const [loading, setLoading] = useState(true) //spinner

  const fetchUsers = async () => {
    const response = await fetch(`${apiURL}/users`, {
      headers: {
        Authorization: `token ${apiKey}`
      }
    })

    const data = await response.json()

    setUsers(data)
    setLoading(false)
  }

  return (
    <GitHubContext.Provider
      value={{
        users,
        loading,
        fetchUsers
      }}
    >
      {children}
    </GitHubContext.Provider>
  )
}

export default GitHubContext

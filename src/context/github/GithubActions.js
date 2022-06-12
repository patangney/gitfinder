import axios from 'axios'
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

const gitHub = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` }
})

// Get Search Users
export const searchUsers = async text => {
  const params = new URLSearchParams({
    q: text
  })
  const response = await gitHub.get(`/search/users?${params}`)
  return response.data.items
}

export const getUserAndRepos = async login => {
  const [user, repos] = await Promise.all([
    gitHub.get(`/users/${login}`),
    gitHub.get(`/users/${login}/repos`)
  ])

  return { user: user.data, repos: repos.data }
}

const apiKey = process.env.REACT_APP_GITHUB_TOKEN
const apiURL = process.env.REACT_APP_GITHUB_URL

// Get Search Users
export const searchUsers = async text => {
  const params = new URLSearchParams({
    q: text
  })
  const response = await fetch(`${apiURL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${apiKey}`
    }
  })
  const { items } = await response.json() //destructure from the items array that is returned in json
  return items
}

//getSingleUser
export const getSingleUser = async login => {
  const response = await fetch(`${apiURL}/users/${login}`, {
    headers: {
      Authorization: `token ${apiKey}`
    }
  })
  if (response.status === 404) {
    window.location = '/notfound'
  } else {
    const data = await response.json()
    return data
  }
}

// Get User Repos
export const getUserRepos = async login => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10
  })
  const response = await fetch(`${apiURL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${apiKey}`
    }
  })
  const data = await response.json() //destructure from the items array that is returned in json
  return data
}

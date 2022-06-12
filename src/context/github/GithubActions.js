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

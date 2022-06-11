import { useEffect } from 'react'

function UserResults () {
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const apiKey = process.env.REACT_APP_GITHUB_TOKEN
    const apiURL = process.env.REACT_APP_GITHUB_URL
    console.log(apiKey);
    console.log(apiURL);
    const response = await fetch(`${apiURL}/users`,
    {
      headers: {
        Authorization: `token ${apiKey}`
      }
    })

    const data = await response.json()
    console.log(data)
  }

  return <div>UserResults</div>
}

export default UserResults

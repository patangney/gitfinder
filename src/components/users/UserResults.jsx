import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

function UserResults () {
  const [users, setUsers] = useState([]) //fill this from the github api
  const [loading, setLoading] = useState(true) //spinner

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const apiKey = process.env.REACT_APP_GITHUB_TOKEN
    const apiURL = process.env.REACT_APP_GITHUB_URL

    const response = await fetch(`${apiURL}/users`, {
      headers: {
        Authorization: `token ${apiKey}`
      }
    })

    const data = await response.json()
    
    setUsers(data)
    setLoading(false)
  }
 if(!loading) {
    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1'>
          {users.map(user => (
              <UserItem key={user.id} user={user} />
          ))}
        </div>
      )
 } else {
     return <Spinner />
 }
  
}

export default UserResults

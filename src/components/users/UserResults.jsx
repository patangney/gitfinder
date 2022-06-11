import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GitHubContext from '../../context/github/GithubContext'

function UserResults () { 
    //pull out what we need from useContext
    const {users, loading} = useContext(GitHubContext)

    // testing purposes for pulling back all users
//   useEffect(() => {
//     fetchUsers()
//   }, [])

 
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

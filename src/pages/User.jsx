import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GitHubContext from '../context/github/GithubContext'

function User () {
  const { getSingleUser, user, loading, getUserRepos, repos } = useContext(GitHubContext)
  const params = useParams()
  useEffect(() => {
    getSingleUser(params.login)
    // getUserRepos(params.login)
  }, [])
  return <div>User</div>
}

export default User

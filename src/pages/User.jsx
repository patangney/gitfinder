import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import GitHubContext from '../context/github/GithubContext'
import Spinner from './../components/layout/Spinner'

function User () {
  const { getSingleUser, user, loading, getUserRepos, repos } = useContext(
    GitHubContext
  )
  const params = useParams()
  useEffect(() => {
    getSingleUser(params.login)
    // getUserRepos(params.login)
  }, [])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className="mb-4">
          <Link to='/' className='btn btn-ghost' >Back To Search</Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:gap-8">
          
        </div>
      </div>
    </>
  )
}

export default User

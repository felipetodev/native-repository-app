import { useApolloClient } from '@apollo/client'
import { useEffect } from 'react'
import { useHistory } from 'react-router-native'
import authStorage from '../utils/authStorage'

export default function SignOut () {
  const apolloClient = useApolloClient()
  const history = useHistory()

  useEffect(() => {
    async function doSignOut () {
      await authStorage.removeAccessToken()
      await apolloClient.resetStore()
      history.push('/')
    }

    doSignOut()
  }, [])

  return null
}

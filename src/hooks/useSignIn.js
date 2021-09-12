import { useMutation, useApolloClient } from '@apollo/client'

import { SIGN_IN } from '../graphql/mutations'
import authStorage from '../utils/authStorage'

export const useSignIn = () => {
  const apolloClient = useApolloClient()
  const [signInMutation] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    const { data } = await signInMutation({
      variables: {
        username,
        password
      }
    })
    await authStorage.setAccessToken(data.authorize.accessToken)
    await apolloClient.resetStore()
  }
  return { signIn }
}

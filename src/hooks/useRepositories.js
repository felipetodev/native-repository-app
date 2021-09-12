import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

export const useRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })
  const { repositories = null } = data

  const repositoriesNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return { repositories: repositoriesNodes, loading, refetch }
}

import React from 'react'
import { View, StyleSheet } from 'react-native'
import RepositoryStats from './RepositoryStats'
import RepositoryItemHeader from './RepositoryItemHeader'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5
  }
})

const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  )
}

export default RepositoryItem

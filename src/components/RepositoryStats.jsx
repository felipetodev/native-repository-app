import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const RepositoryStats = (props) => {
  return (
    <View style={styles.container}>
      <View alignItems='center'>
        <StyledText fontWeight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
        <StyledText>Stars</StyledText>
      </View>
      <View alignItems='center'>
        <StyledText fontWeight='bold'>{parseThousands(props.forksCount)}</StyledText>
        <StyledText>Forks</StyledText>
      </View>
      <View alignItems='center'>
        <StyledText fontWeight='bold'>{props.reviewCount}</StyledText>
        <StyledText>Review</StyledText>
      </View>
      <View alignItems='center'>
        <StyledText fontWeight='bold'>{props.ratingAverage}</StyledText>
        <StyledText>Rating </StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats

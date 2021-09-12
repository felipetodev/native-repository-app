import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import theme from '../theme'

const styles = StyleSheet.create({
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start', // fix 100% of vw box
    borderRadius: 4, // border radius should have an overflow
    overflow: 'hidden',
    marginVertical: 4
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => {
  return (
    <View style={{
      flexDirection: 'row',
      paddingBottom: 2
    }}
    >
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight='bold'>{fullName}</StyledText>
        <StyledText color='secondary'>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}

export default RepositoryItemHeader

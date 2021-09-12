import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import StyledText from './StyledText'
import Constants from 'expo-constants'
import theme from '../theme'
import { Link, useLocation } from 'react-router-native'
import { useAuthorizedUser } from '../hooks/useAuthorized'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  scroll: {
    paddingBottom: 15
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const isActive = pathname === to

  const textStyles = [
    styles.text,
    isActive && styles.active
  ]

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const AppBar = () => {
  const { isAuthorized } = useAuthorizedUser()

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab active to='/'>Repositories</AppBarTab>
        {isAuthorized
          ? <AppBarTab to='/signout'>Sign Out</AppBarTab>
          : <AppBarTab to='/signin'>Sign In</AppBarTab>}
        {/* Examples for horizontal scroll bar only */}
        <AppBarTab to='/Blog'>Blog</AppBarTab>
        <AppBarTab to='/Portfolio'>Portfolio</AppBarTab>
        <AppBarTab to='/Logout'>Logout</AppBarTab>
        <AppBarTab to='/More'>More</AppBarTab>
        <AppBarTab to='/Subscribe'>Subscribe</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar

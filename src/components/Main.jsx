import React from 'react'
import { View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Switch, Route, Redirect } from 'react-router-native'
import LogInPage from '../pages/Login'
import SignOut from '../pages/SignOut'

/*
  const AppBar = Platform.select({
    ios: () => require('./IOSAppBar.jsx').default,
    default: () => require('./AppBar.jsx').default
  })()
*/

const Main = () => (
  <View style={{ flex: 1 }}>
    <AppBar />
    <Switch>
      <Route path='/' exact>
        <RepositoryList />
      </Route>
      <Route path='/signin' exact>
        <LogInPage />
      </Route>
      <Route path='/signout' exact>
        <SignOut />
      </Route>
      <Redirect to='/' />
    </Switch>
  </View>
)

export default Main

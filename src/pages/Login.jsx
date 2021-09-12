import React from 'react'
import { Formik, useField } from 'formik'
import { Button, View, StyleSheet } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../validationSchemas/login'
import { useSignIn } from '../hooks/useSignIn'
import { useHistory } from 'react-router-native'

const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 13,
    marginBottom: 20,
    marginTop: -5
  },
  form: {
    margin: 12
  }
})

const FORM_STATUS = {
  idle: 'idle',
  wrongCredentials: 'wrongCredentials'
}

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && (
        <StyledText style={styles.error}>{meta.error}</StyledText>
      )}
    </>
  )
}

export default function LogInPage () {
  const { signIn } = useSignIn()
  const history = useHistory()

  const handleFormikSubmit = async (values, actions) => {
    actions.setStatus(FORM_STATUS.idle)
    actions.setSubmitting(true)
    try {
      const { email, password } = values
      await signIn({ username: email, password: password })
      actions.setSubmitting(false)
      history.push('/')
    } catch (e) {
      actions.setStatus(FORM_STATUS.wrongCredentials)
    }
  }
  return (
    <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={handleFormikSubmit}>
      {({ handleSubmit, isSubmitting, status }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue autoCapitalize='none' placeholder='e-mail' name='email' />
            <FormikInputValue placeholder='Password' name='password' secureTextEntry />
            <Button disabled={isSubmitting} onPress={handleSubmit} title='Log In' />
            {status === FORM_STATUS.wrongCredentials
              ? <StyledText style={styles.error}>Wrong credentials</StyledText>
              : null}
          </View>
        )
      }}
    </Formik>
  )
}

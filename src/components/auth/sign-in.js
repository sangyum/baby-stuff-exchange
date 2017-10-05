import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import * as firebase from 'firebase'

class SignIn extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      isValidEmail: true,
      isValidPassword: true
    }
    this.submit = this.submit.bind(this)
    this.onChangeTextEmail = this.onChangeTextEmail.bind(this)
    this.onChangeTextPassword = this.onChangeTextPassword.bind(this)
  }

  submit () {
    if (this.state.email === '') {
      this.setState({ isValidEmail: false })
    } else {
      this.setState({ isValidEmail: true })
    }

    if (this.state.password === '') {
      this.setState({ isValidPassword: false })
    } else {
      this.setState({ isValidPassword: true })
    }

    if(this.state.email !== '' && this.state.password !== '') {
      // login user to feed posts page
      const email = this.state.email
      const password = this.state.password
      const promise = firebase.auth().signInWithEmailAndPassword(email, password)
      promise
        .then(() => { console.log('signed in!') })
        .catch(e => { console.log(e.message) })
    }
  }

  onChangeTextEmail (text) {
    if (text === '') {
      this.setState({
        isValidEmail: false
      })
    } else {
      this.setState({
        email: text,
        isValidEmail: true
      })
    }
  }

  onChangeTextPassword (text) {
    if (text === '') {
      this.setState({
        isValidPassword: false
      })
    } else {
      this.setState({
        password: text,
        isValidPassword: true
      })
    }
  }

  render () {
    let validationEmail = this.state.isValidEmail ? '' : 'This field is required'
    let validationPassword = this.state.isValidPassword ? '' : 'This field is required'
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Baby Stuff Exchange</Text>

        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={this.onChangeTextEmail} />
        <FormValidationMessage>{validationEmail}</FormValidationMessage>

        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry={true} onChangeText={this.onChangeTextPassword} />
        <FormValidationMessage>{validationPassword}</FormValidationMessage>

        <Button onPress={this.submit} title='SIGN IN' backgroundColor='#03a9f4' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  header: {
    textAlign: 'center',
    fontSize: 24
  }
})

module.exports = {
  SignIn
}

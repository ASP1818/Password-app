import React, {Component} from 'react';
import {
View,
Text, 
TouchableOpacity, 
TextInput, 
StyleSheet, 
KeyboardAvoidingView
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      anyOtherPassword: ""
    };
  }

handleName = (text) => {
  this.setState({ Password: text, anyOtherPassword: text})
}
    render() {
    const { email, password } = this.state;
    return (
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.upperContainer}>

    <View style = {styles.container}>
   <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={text => this.setState({ password: text })}
              placeholder={"Enter Password"}
              placeholderTextColor={"#FFFFFF"}
              multiline = {true}
              numberOfLines = {10} 
              autoFocus
            />
               <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => this.handleLogin(email, password)}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
    </View>
    </View>
    </KeyboardAvoidingView>
  )
}
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    justifyContent: "center",
    marginTop:20,
    backgroundColor: "blue",
  },
  textinput: {
    width: "75%",
    height: 55,
    padding: 10,
    borderColor: "#FFFFFF",
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold",
    backgroundColor: "#5653D4",
    justifyContent: "center",
    alignItems: "center",
    right: 70
  },
    buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold"
  }
});

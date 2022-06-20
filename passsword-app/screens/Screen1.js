import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import firebase from 'firebase';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      anyOtherPassword: '',
    };
  }

  handleLogin = (password) => {
    firebase
      .auth()
      .signInWithPassword(password)
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

    getBookDetails = password => {
    password = password.trim();
    db.collection("password")
      .where("password_id", "==", password)
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          this.setState({
            Password_id: doc.data().Password_id
          });
        });
      });
  };

  render() {
    const { password } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.backgroundImage}>
          <View style={styles.iconImage}>
            <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={(text) => this.setState({ password: text })}
              placeholder={'Enter Password'}
              placeholderTextColor={'#FFFFFF'}
              multiline={true}
              numberOfLines={10}
              autoFocus
            />
             <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => this.handleLogin(password)}
            >
              <Text style={styles.buttonText}>save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'lightblue',
  },
  textinput: {
    width: '75%',
    height: 55,
    padding: 10,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
    backgroundColor: '#5653D4',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
    marginLeft: 60,
  },
  iconImage: {
    position: 'center',
    height: 550,
    width: 265,
    resizeMode: 'cover',
    left: 75,
  },
});

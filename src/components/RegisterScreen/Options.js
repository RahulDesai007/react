import React, { Component } from 'react';
import { Text,
         View,
         StyleSheet, 
         ActivityIndicator, 
         Image, 
         ScrollView,
         KeyboardAvoidingView ,
         TouchableOpacity
        } from 'react-native';
import { NavigationActions } from 'react-navigation';
import customstyles from '../../../assets/styles/customstyles';
import customtext from '../../utils/customtext';
// import LoginForm from './LoginForm';
import colors from '../../utils/colors';
import { TextField } from 'react-native-material-textfield';
//import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RaisedTextButton } from 'react-native-material-buttons';
import Toast from 'react-native-simple-toast';
import environment from '../../utils/environment';
/*importing and using from const*/
const { 
        loginscreenLogoContainer,
        loginscreenLogo,
        loginTitle 
    } = customstyles;
const { login_welcome } = customtext;
const { username_label,
    password_label,
    login_label,
    create_account_text,
    create_account_link
 } = customtext;
const { loginscreenregisterInput,
    loginscreenregisterContainer,
    loginscreenCreateAccountWrapper,
    loginscreenCreateAccountText,
    loginscreenCreateAccountLinkText,
    loginscreenLoginContainer1
 } = customstyles;
const { white,
    black,
    electricBlue
 } = colors;
const { base_url } = environment;

export default class LoginScreen extends Component {
    constructor() {
        super();

        this.onFocus = this.onFocus.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitUserName = this.onSubmitUserName.bind(this);
        this.onSubmitPassword = this.onSubmitPassword.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onAccessoryPress = this.onAccessoryPress.bind(this);
        this.onRegistration = this.onRegistration.bind(this);
        
        this.usernameRef = this.updateRef.bind(this, 'username');
        this.passwordRef = this.updateRef.bind(this, 'password');
        this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);

        this.state = {
            username: '',
            password: '',
            secureTextEntry: true,
      };
    }
    
    validateEmail(value) {
        let regex = /\w[-._\w]*@[-._\w]*\w\.\w{2,5}/;
        if (regex.test(value) === true) {
            return true;
        } else {
            return false;
        }
    }

    onAccessoryPress() {
        this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
    }

    onSubmitUserName() {
        this.username.focus();
    }

    onSubmitPassword() {
        this.password.focus();
    }

    onBlur() {
        let errors = {};
        
        ['username', 'password']
        .forEach((name) => {
            let value = this[name].value();
            
            if (!value) {
                errors[name] = 'Should not be empty';
            } else {
                if (name === 'password' && value.length < 6) {
                    errors[name] = 'Too short';
                }
                if (name === 'username' && !this.validateEmail(value)) {
                    errors[name] = 'Invalid Email ID';
                }
            }
        });
        
        this.setState({ errors });
    }

    onFocus() {
        let { errors = {} } = this.state;

        for (let name in errors) {
            let ref = this[name];

            if (ref && ref.isFocused()) {
                delete errors[name];
            }
        }

        this.setState({ errors });
    }

    onChangeText(text) {
        ['username', 'password']
        .map((name) => ({ name, ref: this[name] }))
        .forEach(({ name, ref }) => {
            if (ref.isFocused()) {
                this.setState({ [name]: text });
            }
        });
    }

    onSubmitLogin() {
    //    var token;
       
    //     let errors = {};

    //     ['username', 'password']
    //     .forEach((name) => {
    //         let value = this[name].value();

    //         if (!value) {
    //             errors[name] = 'Should not be empty';
    //         } else {
    //             if ('password' === name && value.length < 6) {
    //                 errors[name] = 'Too short';
    //             }
    //           //  if ('username' === name && !validateEmail.test(value)) {
    //             //    errors[name] = 'Invalid Email ID';
    //             //}
    //         }
    //     });
        
        if  (this.state.username === "pat@123.com" ){
        this.props.navigation.navigate('HomePage');
        } else if (this.state.username === "doc@123.com") {
            this.props.navigation.navigate('DocHomePage');
        } else {
            Toast.show("Password is Incorrect")
        }
    //    this.setState({ errors });
//         return fetch(base_url + '/login', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ 
// Email: this.state.username,
// Password:  this.state.password
//  })
// })
// .then((response) => response.json())
//       .then((responseJson) => {
//         token = responseJson.token;
//         var message = responseJson.message;
//         var user = responseJson.user;
//         console.log("message"+responseJson.message);
//         console.log("user"+responseJson.user);
//         if (message === 'User Not Found !' || message === ' Email or Password wrong!' || message === 'Register Please!') {
//                  Toast.show(message); 
//                   } else  {
//                 (message === 'undefined')
//                  console.log("Homepage");
//                  console.log('token'+token);
//                  this.props.navigation.navigate('HomePage',{token: token,user:user});
//             }
       
//       })
//       .catch((error) => {
//         console.error(error);
//       });
        

    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    renderPasswordAccessory() {
        let { secureTextEntry } = this.state;

        let name = secureTextEntry?
            'visibility':
            'visibility-off';

   /*     return (
            <MaterialIcon
                size={24}
                name={name}
                color={TextField.defaultProps.baseColor}
                onPress={this.onAccessoryPress}
                suppressHighlighting
            />
        );*/
    }

    onRegistration(){
        console.log("Registerpage");
        this.props.navigation.navigate('RegisterPage');
    }
    
    static navigationOptions = {
        title: 'HOME',
        headerStyle: { backgroundColor: 'black',
                        height: 1 },
        headerTitleStyle: { color:'black',alignSelf:'center' },
    }
    
    render() {
        let { errors = {}, secureTextEntry, ...data } = this.state;
        let { username = 'username' } = data;
        let { password = 'password' } = data;
        

        return (
            <KeyboardAvoidingView behavior="padding" style={loginscreenregisterContainer}>
            <ScrollView>
                <View style={loginscreenLogoContainer}>
                    
                    <Image
                    
                        style={loginscreenLogo}
                        source={require('../../../assets/images/fuegologo.jpg')}
                    />

                    <Text style={loginTitle}>{login_welcome}</Text>
                </View>
                
                <View style={loginscreenregisterInput}>
                    <ScrollView>
                   

                  
                    <View style={{width: 50, height: 150}}>
                        <RaisedTextButton 
                            onPress={this.onSubmitLogin} 
                            title={login_label} 
                            color={electricBlue} 
                            titleColor={white} 
                        />
                    </View>
                    
                    </ScrollView>
                </View>
                </ScrollView>
                { /* Due to parent child relation of (this.props.navigation.navigate)
                 page is not navigating from LoginScreen to RegisterScreen */}
                {/* <LoginForm /> */}
            </KeyboardAvoidingView>
        );
    }
}
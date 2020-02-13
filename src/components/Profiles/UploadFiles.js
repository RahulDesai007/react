import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, KeyboardAvoidingView } from 'react-native';
import {DocumentPicker, ImagePicker} from 'expo';
import { NavigationActions } from 'react-navigation';
import customstyles from '../../../assets/styles/customstyles';
import customtext from '../../utils/customtext';
// import LoginForm from './LoginForm';
import colors from '../../utils/colors';
import { TextField } from 'react-native-material-textfield';
//import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RaisedTextButton } from 'react-native-material-buttons';
import Toast from 'react-native-simple-toast';
import ImageSlider from 'react-native-image-slider';
import Drawer from 'react-native-drawer';
import environment from '../../utils/environment';
import { AppRegistry, Image } from 'react-native';


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
    update_profile,
    built_profile,
    view_profile,
    terms_profile,
    nearby_profile,
    create_account_text,
    create_account_link,
    myfamily_members
 } = customtext;
const { loginscreenInputContainer,
    loginscreenContainer,
    loginscreenCreateAccountWrapper,
    loginscreenCreateAccountText,
    loginscreenCreateAccountLinkText,
    homescreenalignmentMyaccount,
    homescreenalignmentMyappointment,
    homescreenalignmentNearbyhospital,
    homescreenLogo,
    headerStyle,
    loginscreenLoginContainer
 } = customstyles;
const { white,
    black,
    electricBlue
 } = colors;

 const { base_url } = environment;


export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      image: null,
    };
    
    this.pickDocument = this.pickDocument.bind(this);
    this.pickImage = this.pickImage.bind(this);
    this.postPicture = this.postPicture.bind(this);
    this.postDocument = this.postDocument.bind(this);
  }

  onHomeProfile(token){
    console.log('Home page');
     this.props.navigation.navigate('HomePage',{token:token});
}
  
  pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    console.log('result', result);
    if (!result.cancelled) {
      this.setState({
        image: result,
      });
    }
  }
pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true,
    });
if (!result.cancelled) {
      this.setState({
        image: result.uri,
      });
    }
  };
  postPicture() {
  //   const apiUrl = `${base_url}/UploadDocs`;
  //   const uri = this.state.image;
  //  // const uriParts = uri.split('.');
  //  // const fileType = uriParts[uriParts.length - 1];
  //   const formData = new FormData();
  //       formData.append('photo', {
  //         uri:'httpps://res.cloudinary.com/diyzkcsmp/image/upload/',
  //         name: `this.props.photo`,
  //         type: `image/jpg`,
  //       });
  //   const options = {
  //         method: 'POST',
  //         body: formData,
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       };
  //   return fetch(apiUrl, options);

  const apiUrl = `${base_url}/UploadDocs`;
  console.log("apiUrl=======>",apiUrl);
const uri = this.state.image;
console.log("uri=======>",uri);
const uriParts = uri.split('.');
console.log("uriParts=======>",uriParts);
const fileType = uriParts[uriParts.length - 1];
console.log("fileType=======>",fileType);

const formData = new FormData();
    formData.append('file', {
      uri,
      name: `file.${fileType}`,
      type: `image/${fileType}`,
    });
const options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwidXNlcnMiOnsic3RhdHVzIjpbXSwiZmFtaWx5TWVtYmVycyI6W10sIl9pZCI6IjViN2U1MjcwMzQxZGUxOWY1NGRmZDk2OSIsInJlZ2lzdGVyT2JqIjp7Im5hbWUiOiJzcmlsZWhhIiwiYWdlIjoiMjMiLCJkYXRlLm9mLmJpcnRoIjoiMTQuMTIuMTk5NSJ9LCJuZW1faWQiOnsibmFtZSI6InNyaWxlaGE5NUBnbWFpbC5jb20iLCJhY2NvdW50cyI6eyIwIjp7ImJyYWluIjp0cnVlLCJhbGdvIjoicGFzczpiaXAzMiIsImVuY3J5cHRlZCI6ImQ2ODUzZjYxOGQ5ZjllODRlZmVlODJiM2YxYWIwYzc2ODIzMTIyNmU1MWM0ZjhjYzlmODY4MzRkZWYwMmM5MzVkNWU1NTdhMDhhNjdiZjlmOWFmMWQwZDgxNDA1MzBhZiIsIml2IjoiOGUxMGI5MDA0OTc3ZTVlMjQ1NDEyNmMxMGMyZDQ3NWUiLCJhZGRyZXNzIjoiTUNLQlM3UlBUTjNETlNRN082Q0s3S1FMSEhJWDZOMkdFQ0NOQTVDTCIsImxhYmVsIjoiUHJpbWFyeSIsIm5ldHdvcmsiOjk2fX19LCJFbWFpbCI6InNyaWxlaGE5NUBnbWFpbC5jb20iLCJQYXNzd29yZCI6ImpaYWU3MjdLMDhLYU9tS1NnT2FHend3L1hWcUdyL1BLRWdJTWtqcmNiSkk9IiwiVHlwZSI6InVzZXIiLCJyYXBpZElEIjoiNzc3TW5Lc0V4azVOMnVHMitub2lIb0xqZFQycmptbTRDdkhpYVd6VWc5az0iLCJwcml2YXRlS2V5IjoiOTBmOGZmMGQyMTYzNjE2YjU4MjA4ZmNlOWFlYjU3YTQ0ZDgzNWNmOTY5NjkxNzVmYWRhYjcwMzA3MWNlZDgzNCIsIm90cCI6Mjg0MSwiZW5jb2RlZE1haWwiOiJjM0pwYkdWb1lUazFRR2R0WVdsc0xtTnZiUT09IiwiY3JlYXRlZF9hdCI6IlRodSBBdWcgMjMgMjAxOCAxMToyMTozNiBHTVQrMDUwMCAoKzA1KSIsIl9fdiI6MH0sImlhdCI6MTUzNTAwNTYzMSwiZXhwIjo2MTUzNTAwNTYzMX0.jZ5MBXLQziKVX_U4OkR1jZMGSHPSo9QbMB8Wit1gCvE'
      }
      
    
  };
return fetch(apiUrl, options);
      }
    

    postDocument() {
      const apiUrl = `${base_url}/UploadDocs`;
      console.log("apiUrl=======>",apiUrl);
    const uri = this.state.image;
    console.log("uri=======>",uri);
    const uriParts = uri.split('.');
    console.log("uriParts=======>",uriParts);
    const fileType = uriParts[uriParts.length - 1];
    console.log("fileType=======>",fileType);
    
    const formData = new FormData();
        formData.append('file', {
          uri,
          name: `file.${fileType}`,
          type: `docs/${fileType}`,
        });
    const options = {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwidXNlcnMiOnsic3RhdHVzIjpbXSwiZmFtaWx5TWVtYmVycyI6W10sIl9pZCI6IjViN2U1MjcwMzQxZGUxOWY1NGRmZDk2OSIsInJlZ2lzdGVyT2JqIjp7Im5hbWUiOiJzcmlsZWhhIiwiYWdlIjoiMjMiLCJkYXRlLm9mLmJpcnRoIjoiMTQuMTIuMTk5NSJ9LCJuZW1faWQiOnsibmFtZSI6InNyaWxlaGE5NUBnbWFpbC5jb20iLCJhY2NvdW50cyI6eyIwIjp7ImJyYWluIjp0cnVlLCJhbGdvIjoicGFzczpiaXAzMiIsImVuY3J5cHRlZCI6ImQ2ODUzZjYxOGQ5ZjllODRlZmVlODJiM2YxYWIwYzc2ODIzMTIyNmU1MWM0ZjhjYzlmODY4MzRkZWYwMmM5MzVkNWU1NTdhMDhhNjdiZjlmOWFmMWQwZDgxNDA1MzBhZiIsIml2IjoiOGUxMGI5MDA0OTc3ZTVlMjQ1NDEyNmMxMGMyZDQ3NWUiLCJhZGRyZXNzIjoiTUNLQlM3UlBUTjNETlNRN082Q0s3S1FMSEhJWDZOMkdFQ0NOQTVDTCIsImxhYmVsIjoiUHJpbWFyeSIsIm5ldHdvcmsiOjk2fX19LCJFbWFpbCI6InNyaWxlaGE5NUBnbWFpbC5jb20iLCJQYXNzd29yZCI6ImpaYWU3MjdLMDhLYU9tS1NnT2FHend3L1hWcUdyL1BLRWdJTWtqcmNiSkk9IiwiVHlwZSI6InVzZXIiLCJyYXBpZElEIjoiNzc3TW5Lc0V4azVOMnVHMitub2lIb0xqZFQycmptbTRDdkhpYVd6VWc5az0iLCJwcml2YXRlS2V5IjoiOTBmOGZmMGQyMTYzNjE2YjU4MjA4ZmNlOWFlYjU3YTQ0ZDgzNWNmOTY5NjkxNzVmYWRhYjcwMzA3MWNlZDgzNCIsIm90cCI6Mjg0MSwiZW5jb2RlZE1haWwiOiJjM0pwYkdWb1lUazFRR2R0WVdsc0xtTnZiUT09IiwiY3JlYXRlZF9hdCI6IlRodSBBdWcgMjMgMjAxOCAxMToyMTozNiBHTVQrMDUwMCAoKzA1KSIsIl9fdiI6MH0sImlhdCI6MTUzNTAwNTYzMSwiZXhwIjo2MTUzNTAwNTYzMX0.jZ5MBXLQziKVX_U4OkR1jZMGSHPSo9QbMB8Wit1gCvE'
          },
        };
    return fetch(apiUrl, options);
          }

   
 // _pickDocument = async () => {
	 //   let result = await DocumentPicker.getDocumentAsync({});
		 // alert(result.uri);
      //console.log(result);
	//}
  //  _pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //   });

  //   alert(result.uri);
  //   console.log(result)

  //   if (!result.cancelled) {
  //     this.setState({ image: result.uri });
  //   }
  // };


 static navigationOptions = {
  title: 'MY PROFILE',
  headerStyle: { backgroundColor: 'powderblue' },
  headerTitleStyle: { color:'Black',alignSelf:'center' },
}

  render() {
       var {params} = this.props.navigation.state;
      var token = params.token
         let { image } = this.state;
    return (
         <KeyboardAvoidingView behavior="padding" style={loginscreenContainer}>
              <View style={loginscreenLogoContainer}>
                    <Text style={loginTitle}>Please Upload Your Prescribed Document or Image</Text>
                </View>
      <View style={styles.container}>
           <View style={loginscreenInputContainer}>

                   
        <View style={homescreenalignmentMyaccount}>
        <RaisedTextButton
          title="Select MY Document"
           color={electricBlue} 
           titleColor={white} 
          onPress={this._pickDocument}
        />
         <View style={{ 'marginTop': 20}}>
        <RaisedTextButton
          title="Upload MY Image"
          color={electricBlue} 
          titleColor={white} 
          onPress={this.postDocument}
        />

      <View style={{ 'marginTop': 20}}>
        <RaisedTextButton
          title="Select MY Image"
          color={electricBlue} 
          titleColor={white} 
          onPress={this.pickImage}
        />
        <View style={{ 'marginTop': 20}}>
        <RaisedTextButton
          title="Upload MY Image"
          color={electricBlue} 
          titleColor={white} 
          onPress={this.postPicture}
        />
        <View style={{ 'marginTop': 20}}>
        <RaisedTextButton
          title="Go To Home"
          onPress={()=>this.onHomeProfile(token)} 
           color={electricBlue} 
           titleColor={white} 
         
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
      </View>
      </View>
      </View>
      </View>
      </View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




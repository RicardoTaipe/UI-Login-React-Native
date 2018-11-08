import * as React from 'react';
import { Text,TextInput,View, ImageBackground,StyleSheet } from 'react-native';
import { Icon,Button } from 'react-native-elements'

const imgFooter = require('../assets/hamburger-2253343_640.jpg');

export default class RegisterScreen extends React.Component {
  static navigationOptions ={
    header: null
  }

  render() {
    return (
          <View style={styles.container}>
            <View style={styles.containerTitle} >
              <Text style={styles.containerTitle.title}>
              REGISTER AND SIGN IN 
              </Text>
            </View>

            <View style={styles.containerRegister}>
              <View style={styles.containerUserName}>
              <Icon type="font-awesome" name="user" color="gray" containerStyle={styles.icon}/>
              <TextInput placeholder="Username" placeholderTextColor="gray"
              style={styles.textInput}/> 
              </View>

              <View style={styles.containerPassword}>
                <Icon type="entypo" name="key" color="gray" containerStyle={styles.icon}/>
                <TextInput placeholder="Password" placeholderTextColor="gray"
                style={styles.textInput} secureTextEntry={true}/> 
              </View>

              <View style={styles.containerSignIn}>
                <Button title='SIGN IN' backgroundColor='#ffa100'
                borderRadius={20}/>
              </View>

              <View style={styles.containerOR} >
                <Text style={{textAlign:'center'}}>OR</Text>
              </View>
            </View>
            
            
            <ImageBackground source={imgFooter} style={{flex:2}}
              resizeMode={"cover"}>
              <View style={styles.containerSocial}>
                <View style={styles.containerSocial.buttonsSocial}>
                  <Button title='FACEBOOK' backgroundColor='blue'
                  icon={{name: 'facebook-official', type: 'font-awesome'}}/>
                  <Button title='TWITTER' backgroundColor='#59c7ff'
                  icon={{name: 'twitter', type: 'font-awesome'}}/>
                </View>
              </View>           
            </ImageBackground>                        
            
            
          </View>        
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'stretch',
    backgroundColor:'#EBE6E3',
  },
  containerTitle:{
    flex:1,
    alignItems:'center',
    title:{
      color:'#4c4545',
      fontWeight: 'bold',
      fontSize: 18,
      paddingTop:'12%'
    }
  },
  containerRegister:{
    flex:2,
    marginLeft:'3%',
    marginRight:'3%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  containerSocial:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'##ECE7E3',
    buttonsSocial:{
      flexDirection:'row',
      justifyContent:'space-around',
      paddingBottom:'3%'
    }
  },
  containerSignIn:{
    height: 50,
    marginLeft:'12%',
    marginRight:'12%',
    marginTop:'9%'
  },
  containerUserName:{
    height: 50,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'white',
    marginLeft:'10%',
    marginRight:'10%',
    
  },
  containerPassword:{
    height: 50,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'white',
    marginLeft:'10%',
    marginRight:'10%',
    marginTop:'2%'
  },
  containerOR:{
    position: 'absolute',
    bottom:0,  
    alignSelf:'center',
    height:'12%',
    width:'12%',
  },
  icon:{
    flex:1
  },
  textInput:{
    backgroundColor:'transparent',
    flex:5,
    color:'black',
    paddingLeft:'25%'
  }
})
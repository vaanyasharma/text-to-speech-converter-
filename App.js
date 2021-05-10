import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {Header}from 'react-native-elements';
import * as Speech from 'expo-speech'; 

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:'' ,

    };
  }
  speak=() =>{
    var thingToSay = this.state.name;
    Speech.speak(thingToSay)
  };
  render(){
    return(
<View>
<Header backgroundColor={'cyan'} centerComponent={{
  text:'Text to Speech converter',
  style:{color:'black',fontSize:15,fontWeight:30}
}}/>

 <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.text}
        />

     <TouchableOpacity
          
          onPress={this.speak}>
          <Text style={styles.buttonText}>click to hear </Text>
        </TouchableOpacity>
</View>
   
 
    )
  }
}
const styles = StyleSheet.create({
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  buttonText:{
    width:200,
    height:50,
    marginTop:200,
    marginLeft:70,
    backgroundColor:'cyan',
    fontWeight:20,
    fontColor:'white',
    fontSize:23,
    borderRadius:25,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center'

  }
})
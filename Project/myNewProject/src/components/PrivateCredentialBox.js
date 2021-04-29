import * as React from 'react';
import { View, TextInput } from 'react-native';


export default function CredentialBox(props) {
    const [value, onChangeText] = React.useState("");
    return (
    	<View style ={{
            width: props.width,
            height: props.height,
            backgroundColor: "rgba(255,255,255,1)",
            marginLeft: props.marginLeft}}>
	        <TextInput 
	            style={{ fontFamily:'Avenir', height: 50, borderRadius:6, backgroundColor: 'white', borderColor: '#40484a', borderWidth: 2, paddingLeft: "3%",shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.5,
      shadowRadius: 4.00,}}
	            placeholder= {props.placeholder}
	            placeholderTextColor={'#37a3c4'}
	            onChangeText={text => onChangeText(text)}
	            value={value}
	        />
        </View>
    )


}


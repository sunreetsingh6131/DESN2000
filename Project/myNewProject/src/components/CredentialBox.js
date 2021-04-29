import * as React from 'react';
import { View, TextInput } from 'react-native';


export default function CredentialBox(props) {
    const [value, onChangeText] = React.useState("");

    const checkTextChange = () => {
        if (props.savedDetails === "") {
            return value
        } else {
            props.checkFilled(props.savedDetails);
            return props.savedDetails
        }
    }
    
    return (
    	<TextInput 
            style={{ height: props.height, marginLeft: props.marginLeft, width: props.width, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, paddingLeft: "2%"}}
            placeholder= {props.placeholder}
            onChangeText={text => {onChangeText(text); props.checkFilled(text)} }
            value={checkTextChange()}
            secureTextEntry={props.isPassword}
        />

    )


}


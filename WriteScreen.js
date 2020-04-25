import * as React from 'react';
import {
    View,
    TouchableOpacity,
    Stylesheet,  
    Text,
    TextInput,
} from 'react-native';
export default class WriteScreen extends React.Component {
    render(){
        return(
            <View>
            <Text style = {styles.writeStories}>Write Stories</Text>
            <TextInput
            style = {{
                height : 100,
                borderWidth  : 2,
                borderColor : '#E57F84',
                width : 80,
            }}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            </View>
        );
   }
}
var styles = Stylesheet.create({
    writeStories : {
        fontSize : 20,
        fontWeight : "bold",
        color : '#4297A0'
    },
})
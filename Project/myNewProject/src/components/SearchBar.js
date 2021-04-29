import React from 'react';
import { View, StyleSheet, Picker } from 'react-native';
 
export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        const items = this.props.options
            .map(stop => <Picker.Item key={stop} label={stop} value={stop} />);

        return (
            <View style={styles.container}>
              <Picker
                selectedValue={this.state.selectedValue || ''}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => { this.props.onValueChange(itemValue); this.setState({ selectedValue: itemValue }) }}
              >
                <Picker.Item value='' label={this.props.placeholder} />
                {items}
              </Picker>
            </View>
        );
    }
    
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        alignItems: "center"
    },
    picker: {
        height: 50,
        width: 300,
        color: "white"
    }
});
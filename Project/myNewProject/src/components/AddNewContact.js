import React, { Component } from 'react'


export default class AddNewContact extends Component {

  constructor(props) {
    super(props);
    this.addcontact = this.addcontact.bind(this);
}

  addcontact(email, name, phone) {    
    this.props.updateContacts(name, email, phone);
  }

  render() {
    return (
      // {...}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={this.addcontact} >                   >
          <Text style={styles.textStyle}>Log In</Text>
      </TouchableOpacity>
    )
  }
}
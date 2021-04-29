import React from 'react';

import {
  Text,
  Body,
  Header,
  Left,
  Icon,
  Right,
  Button,
  ActionSheet,
} from 'native-base';

function SelectionListHeader(props) {
  const onPressSelectionActions = () => {
    ActionSheet.show(
      {
        options: props.selectActions.map(action => action.name),
        cancelButtonIndex: props.selectActions.length - 1,
      },
      buttonIndex => {
        onExecuteAction(buttonIndex);
      },
    );
  };

  const onExecuteAction = index => {
    if (props.selectActions[index].method) {
      props.selectActions[index].method.apply();
    }
  };

  return (
    <Header style={{backgroundColor: '#696969'}}>
      {props.selectionMode ? (
        <Left>
          <Button transparent onPress={props.clearSelection}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      ) : (
        <></>
      )}

      <Body>
        <Text style={{color: 'white'}}>
          Create Trip
        </Text>
      </Body>
      <Right>
      </Right>
    </Header>
  );
}

export default SelectionListHeader;
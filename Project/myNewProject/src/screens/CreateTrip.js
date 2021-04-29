import React, {useState, useEffect} from 'react';
import { Button, TouchableOpacity } from 'react-native'
import {
  List,
  ListItem,
  Text,
  Body,
  Container,
  Root,
  Content,
} from 'native-base';
import {StyleSheet} from 'react-native';
import SelectionListHeader from '../components/SelectionListHeader';

const mockItems = [
    { email:'sunreetsingh6131@gmail.com',
      phone:'0406892896',
      name:'Sunreet Singh'
    },
    { email:'JohnCitizen123@gmail.com',
      phone:'0412345678',
      name:'John Citizen'
    },
    { email:'Achilles007@gmail.com',
      phone:'0414123123',
      name:'Achilles'
    },
    { email:'Guiseppe111@gmail.com',
      phone:'0418888171',
      name:'Guiseppe'
    },
    { email:'Timthacker@gmail.com',
      phone:'0409012992',
      name:'Timothy'
    }
];

function useSelectionChange(items) {
  const [selectionMode, setSelectionMode] = useState(null);
  useEffect(() => {
    if (items.filter(i => i.selected).length >= 0) {
      setSelectionMode(true);
    } else {
      setSelectionMode(false);
    }
  });
  return selectionMode;
}

function CreateTrip(props) {
  const [items, setItems] = useState(mockItems);
  const selectionMode = useSelectionChange(items);

  const toggleSelect = item => {
    setItems(
      items.map(i => {
        if (item === i) {
          i.selected = !i.selected;
        }
        return i;
      }),
    );
  };

  const clearSelection = () => {
    setItems(
      items.map(i => {
      i.selected = false;
      return i;
      }),
    );
  };

  const onPress = item => {
    if (selectionMode) {
      toggleSelect(item);
    } else {
      pressItem(item);
    }
  };

  const onLongPress = item => {
    if (selectionMode === false) {
      toggleSelect(item);
    }
  };

  const pressItem = item => {
    console.log(JSON.stringify(item) + " pressed");
  };

  const renderItem = item => {
    return (
      <ListItem
        onPress={() => onPress(item)}
        onLongPress={() => onLongPress(item)}
        key={item.email}
        style={[item.selected ? styles.selected : styles.normal]}>
        <Body>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 33}}>{item.name}</Text>
        </Body>
      </ListItem>
    );
  };

  return (
    <>
      <Root>
        <Container style={{backgroundColor: '#696969'}}>
          <SelectionListHeader
            selectionMode={selectionMode}
            title="Friends"
            selectedItemsCount={items.filter(i => i.selected).length}
            clearSelection={clearSelection}
          />
          <Content>
            <List>
              {items.map(item => {
                return renderItem(item);
              })}
            </List>
          </Content>
          
          <Container style={styles.normal}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('CreateTripScreen')}>
                <Text style={styles.buttonText}> Next </Text>
              </TouchableOpacity>
          </Container>
        </Container>
      </Root>
    </>
  );
}

export default CreateTrip;

const styles = StyleSheet.create({
  selected: {
    backgroundColor: '#37a3c4',
    marginLeft: 0,
    paddingLeft: 18,
  },
  button: {
    width: 175,
    height: 40,
    borderRadius: 20,
    marginTop: 75,
    marginLeft: 101,
    borderColor: '#3382FF',
    backgroundColor: '#3382FF',
  },
  normal: {
    backgroundColor: '#696969',
  },
  buttonText: {
    paddingTop: 4,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});
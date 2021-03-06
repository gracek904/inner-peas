import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { Container, Content } from 'native-base';
//Styles
import styles from './styles';
import BackButton from '../../components/reusable/BackButton';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      id: '',
      name: '',
      menuList: []
    };
    this.state = { id: this.props.navigation.state.params.id };
    this.getMenu();
  }

  getMenu = async () => {
    const menu = [];
    let docRef = await global.db
      .collection('restaurants')
      .doc(this.state.id)
      .collection('Menu');

    await docRef
      // this is where user's preference goes
      .where('info', '==', [true, true])
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(async function(doc) {
          let temp = await doc.data();
          Object.entries(temp).map(([key, value]) => {
            menu.push({ [key]: value });
          });
        });
      });
    this.setState({ menuList: menu });
  };

  render() {
    const { menuList } = this.state;
    return (
      <Container style={styles.container2}>
        <Content>
          {menuList && menuList.length > 0 && (
            <FlatList
              data={menuList}
              // *Fix*
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  {item.name && (
                    <ListItem
                      title={
                        <View style={styles.rowDirection}>
                          <Text>{item.name}</Text>
                          <Text>Recommended</Text>
                        </View>
                      }
                      bottomDivider
                    />
                  )}
                </TouchableOpacity>
              )}
            />
          )}
        </Content>
        <BackButton
          goBack={() => {
            // declare as const later
            this.props.navigation.navigate('CategoryMap');
          }}
        />
      </Container>
    );
  }
}

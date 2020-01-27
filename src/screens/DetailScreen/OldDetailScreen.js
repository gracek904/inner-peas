import React, { Component } from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { Container, Content } from 'native-base';

//Styles
import styles from './styles';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    //Initial State
    this.state = {
      id: '',
      name: '',
      menuList: []
    };
    // console.log(this.props)
    this.state = { id: this.props.navigation.state.params.id };
  }

  componentWillMount() {
    this.getMenu().then(r => console.log('success'));
  }

  getMenu = async () => {
    const menu = [];
    let docRef = await global.db.collection('restaurants').doc(this.state.id);
    await docRef
      .get()
      .then(async function(doc) {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
          let temp = await doc.data().menu;
          console.log(temp);
          Object.entries(temp).map(([key, value]) => {
            menu.push({ id: key, nutrition: value });
          });
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch(function(error) {
        // console.log("Error getting document:", error);
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
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <ListItem
                    key={item.id}
                    title={
                      <View style={styles.rowDirection}>
                        <Text>{item.nutrition}</Text>
                        <Text>Recommended</Text>
                      </View>
                    }
                    bottomDivider
                  />
                </TouchableOpacity>
              )}
            />
          )}
        </Content>
      </Container>
    );
  }
}

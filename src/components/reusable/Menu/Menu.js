import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

class Menu extends Component {
  /**
     *  @param {String} name Icon name
     *  @param {String} text place name
     *  @param {Number} size Icon size
     *  @param {String} color Icon color
     *  @param {String} type Icon type
     *  @param {String} placeType Place type to look up

     */
  getItem = (name, text, size, color, type, placeType) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate('CategoryMap', {
          placeType: placeType,
          placeName: text
        })
      }
    >
      <View style={styles.iconStyle}>
        <Icon
          name={name}
          size={size}
          reverse
          color={color}
          type={type}
          raised
        />
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          {this.getItem(
            'coffee',
            'Coffee',
            40,
            '#bb9175',
            'font-awesome',
            'cafe'
          )}
        </View>
      </View>
    );
  }
}

export default Menu;

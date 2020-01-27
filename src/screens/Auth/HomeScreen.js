import React, { memo } from 'react';
import Background from '../../components/old/Background';
import Logo from '../../components/old/Logo';
import Header from '../../components/old/Header';
import Button from '../../components/old/Button';
import Paragraph from '../../components/old/Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Inner Peas</Header>

    <Paragraph>Inner Peas Demo App</Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);

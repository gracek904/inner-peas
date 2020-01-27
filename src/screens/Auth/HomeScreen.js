import React, { memo } from 'react';
import Background from '../../components/reusable/Background';
import Logo from '../../components/reusable/Logo';
import Header from '../../components/reusable/Header';
import Button from '../../components/reusable/Button';
import Paragraph from '../../components/reusable/Paragraph';

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

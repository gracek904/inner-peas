import React, {memo} from 'react';
import Background from '../../components/reusable/Background';
import Logo from '../../components/reusable/Logo';
import Header from '../../components/reusable/Header';
import Paragraph from '../../components/reusable/Paragraph';
import Button from '../../components/reusable/Button';
import {logoutUser} from '../../api/auth-api';

const Dashboard = ({navigation}) => (
    <Background>
        <Logo/>
        <Header>Let’s start</Header>
        <Paragraph>Innear Peas Demo App</Paragraph>
        <Button mode="outlined" onPress={() => logoutUser()}>
            Logout
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('MapScreen')}>
            Map
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('Category')}>
            Category
        </Button>
    </Background>
);

export default memo(Dashboard);

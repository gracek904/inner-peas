import React, { memo } from "react";
import Background from "../components/old/Background";
import Logo from "../components/old/Logo";
import Header from "../components/old/Header";
import Paragraph from "../components/old/Paragraph";
import Button from "../components/old/Button";
import { logoutUser } from "../api/auth-api";

const Dashboard = ({ navigation }) => (
	<Background>
		<Logo />
		<Header>Let’s start</Header>
		<Paragraph>
			Your amazing app starts here. Open you favourite code editor and start editing this project.
		</Paragraph>
		<Button mode="outlined" onPress={() => logoutUser()}>
			Logout
		</Button>
		<Button mode="outlined" onPress={() => navigation.navigate("MapScreen")}>
			Map
		</Button>
		<Button mode="outlined" onPress={() => navigation.navigate("Category")}>
			Category
		</Button>
	</Background>
);

export default memo(Dashboard);

import React, { Component } from "react";
import { FlatList, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { ListItem, Text } from "react-native-elements";
import { Container, Content } from "native-base";

//Styles
import styles from "./styles";

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
        //Initial State
        this.state = {
            name: "",
            menuList: []
        };
        this.getMenu().then(r => console.log("success"))
    }

    getMenu = async () => {
        const { id } = this.props;
        const menuList = [];
        let docRef = global.db.collection("restaurants").doc(id);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data().menu);
                let temp = doc.data().menu;
                temp.map((element, index) => {
                    console.log(element)
                    menuList.push(element)
                })
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

    };

    render() {

        return (
            <Container style={styles.container2}>
                <Content>
                    {places.length <= 0 && (
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator size="large" />
                        </View>
                    )}

                    {places.length > 0 && (
                        <FlatList
                            data={places}
                            renderItem={({ item }) => (
                                <TouchableOpacity>
                                    <ListItem
                                        key={item.id}
                                        title={
                                            <View style={styles.rowDirection}>
                                                <Text>{item.name}</Text>
                                                <Text>1.4km</Text>
                                            </View>
                                        }
                                        subtitle={
                                            item.rating && (
                                                <View>
                                                    <View style={styles.startReviewsContainer}>
                                                        <RenderStarReview stars={item.rating} />
                                                        <Text>{item.rating.toFixed(1)}</Text>
                                                    </View>
                                                    <View>
                                                        <Text>{item.vicinity}</Text>
                                                    </View>
                                                </View>
                                            )
                                        }
                                        leftAvatar={{
                                            rounded: false,
                                            size: "large",
                                            source: item.photos && {
                                                uri:
                                                    item.photos.length > 0
                                                        ? `https://maps.googleapis.com/maps/api/place/photo?photoreference=${item.photos[0].photo_reference}&sensor=false&maxheight=${item.photos[0].height}&maxwidth=${item.photos[0].width}&key=${GOOGLE_API_KEY}`
                                                        : baseImage,
                                            },
                                        }}
                                        bottomDivider
                                        chevron={{ color: "#006699", size: 30 }}
                                    />
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    )}
                </Content>
            </Container>
        );
    }
}

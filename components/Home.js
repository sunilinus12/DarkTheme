import { StyleSheet, Text, View, Appearance, Button, Image, ScrollView, Switch, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveDarkMode } from '../redux/reducers/Logic';


export default function Home() {
    const colorscheme = Appearance.getColorScheme();
    const [isEnabled, setIsEnabled] = useState(false);
    const theme = useSelector((s) => s.Darkmode.value);


    const dispatch = useDispatch();
    const toggleSwitch = () => {

        if (isEnabled) {
            setIsEnabled(false);
            dispatch(ActiveDarkMode(false));
        }
        else {
            setIsEnabled(true);
            dispatch(ActiveDarkMode(true));
        }
    };
    useEffect(() => {
        if (theme) {
            setIsEnabled(true);
        }
        else {
            setIsEnabled(false);
        }
    }, [theme]);




    Appearance.addChangeListener(e => {
        console.log(e);

        if (e.colorScheme === 'dark') {
            dispatch(ActiveDarkMode(true));
        }
        else {
            dispatch(ActiveDarkMode(false));
        }


    });


    const Card = () => {

        const navigation = useNavigation();


        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {

                    navigation.navigate("detail");
                }}
            >
                <View style={styles.cardOverlay}


                >

                    <Image
                        source={{ uri: "https://cars.tatamotors.com/images/tiago/color/tiago-plum-wine-desktop.jpg" }}
                        style={{ flex: 0.3 }}


                    />
                    <View style={styles.content}>
                        <Text style={{
                            fontSize: 16,
                            color: "gray"
                        }}>Business</Text>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: "600",
                            marginTop: 7,
                            color: theme ? 'black' : 'black'
                        }}>How netflix brings safer & faster streaming...</Text>
                        <Text style={{
                            fontSize: 14,
                            marginVertical: 5,
                            fontWeight: "400",
                            color: theme ? 'black' : 'black'
                        }}>Kevin Peter</Text>
                        <Text style={{
                            fontSize: 13,
                            color: "gray"
                        }}>22 Octo 2022  : 5m read</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={[styles.center, { backgroundColor: theme ? 'black' : 'white', }]}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                height: 50,

            }}>

                <Text style={{
                    fontSize: 20,
                    fontWeight: "900",
                    marginTop: 10,
                    color: theme ? 'white' : 'black'
                }}>Ned Stark {theme ? "true" : "false"} </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "whitesmoke" }}
                    thumbColor={isEnabled ? "white" : "black"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    width={60}
                />
            </View>


            <Text style={{
                fontSize: 13, marginVertical: 10,
                color: theme ? 'whitesmoke' : 'black'
            }}>Your daily news:</Text>

            {
                Array(10).fill("").map((item, key) => (
                    <Card key={key} />
                ))
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 15,


    },
    cardOverlay: {
        width: "100%",
        height: 130,
        backgroundColor: "white",
        flexDirection: "row",
        marginVertical: 10
    },
    content: {
        flex: 0.7,
        backgroundColor: "white",
        paddingVertical: 2,
        paddingHorizontal: 5
    }
});

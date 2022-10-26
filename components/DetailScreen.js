import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function DetailScreen() {
    const theme = useSelector(e => e.Darkmode.value);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}>
            <View style={[styles.container, { backgroundColor: theme ? "black" : "white" }]}>
                <Text style={[styles.text, { color: theme ? "white" : "black" }]}>
                    New York won't return to normal life soon,
                    though it has reduced 42% of its air pollution
                </Text>

                <Text style={[styles.content, { color: "gray" }]}>
                    Lorem Ipsum Dolor Sit Amet, consecte Tur Adipiscing Elit , Sed Do Elusmod Tem Por Incididunt Ut Labore et Dolor Magma Aliqua. Ut Enim Ad Minim Veniam ...
                </Text>
                <View style={styles.buttonoverlay}>
                    <View style={styles.btn}>
                        <Text
                            style={{
                                fontSize: 14,
                                color: theme ? "white" : "black"

                            }}>Continue ...</Text>
                    </View>
                    <View style={styles.btn}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: "400",
                                color: theme ? "white" : "black"
                            }}>Related Posts</Text>
                    </View>




                </View>
                {
                    Array(4).fill("").map((item, key) => {
                        return (
                            <ImageBackground
                                key={key}
                                style={styles.imgoverlay}
                                resizeMode="cover"
                                source={{ uri: "https://static.vecteezy.com/system/resources/previews/002/071/772/original/abstract-hexagon-pattern-background-medical-and-science-concept-and-structure-molecule-and-communication-free-vector.jpg" }}
                            >
                                <View style={styles.textContainer}>
                                    <Text style={{
                                        fontSize: 15,
                                        color: "whitesmoke",
                                        opacity: 0.7


                                    }}>Science</Text>
                                    <Text style={styles.textcontent}>Coronavirus: learn to </Text>
                                    <Text style={styles.textcontent}>boost immune system</Text>
                                </View>

                            </ImageBackground>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingVertical: "5%",
        paddingHorizontal: "8%"
    },
    text: {
        fontSize: 20,
        lineHeight: 30,
        color: 'black',
        fontWeight: "600",
    },
    content: {

        marginVertical: "7%",
        lineHeight: 24,
        fontFamily: "sans-serif",
        fontWeight: "400"
    },
    buttonoverlay: {
        flexDirection: "row",
        justifyContent: "space-between"

    },
    btn: {
        borderWidth: 0.5,
        borderColor: 'gray',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 3
    },
    imgoverlay: {
        height: 150,
        width: "100%",
        marginVertical: 25

    },
    textContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 10

    },
    textcontent: {
        fontSize: 15,
        color: "white",
        marginVertical: 1

    }

})
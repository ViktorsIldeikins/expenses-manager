import { Text, View, Dimensions, StyleSheet } from 'react-native';
import React from "react";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export const MainView = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const entries = [
        {name: 'food', amount: 12},
        {name: 'bils', amount: 56},
        {name: 'events', amount: 35}
    ];

    console.log('hello');

    return <View style={{width: screenWidth}}>
        <Text>This is first view</Text>

        {entries.map(value => (
            <Card wrapperStyle={styles.cardWrapper} key={value.name}
                  containerStyle={styles.cardContainer}
                onPress={(evn)=> console.log('clicked')}>
                <View>
                    <Text>{value.name}</Text>
                </View>

                <View>
                    <Text>$ {value.amount}</Text>
                </View>
            </Card>
        ))}
    </View>;
};

const styles = StyleSheet.create({
   cardWrapper: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       flex: 1
   },
    cardContainer: {
        paddingBottom: 30,
        paddingTop:10
    }
});

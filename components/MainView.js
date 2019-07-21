import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from "react";
import { Card } from 'react-native-elements';
import Group from "./Group";

export const MainView = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const all = new Group('all');
    const foodDrinks = new Group('foodDrinks');
    foodDrinks.setParent(all);
    foodDrinks.addEntry({name: 'chocko', amount: 10});
    foodDrinks.addEntry({name: 'potato', amount:5});
    foodDrinks.addEntry( {name: 'meat', amount: 20});
    all.addSubGroup(foodDrinks);
    const events = new Group('events');
    events.setParent(all);
    events.addEntry({name: 'gdansk', amount: 150});
    events.addEntry({name: 'labaDaba', amount: 50});
    all.addSubGroup(events);
    const bills = new Group('bills');
    bills.setParent(all);
    bills.addEntry({name: 'apartment', amount: 20});
    bills.addEntry({name: 'phone', amount: 5});
    bills.addEntry({name: 'electricity', amount: 10});
    all.addSubGroup(bills);
    all.addEntry({name: 'other', amount: 7});

    const [selected, select] = useState(all);
    const parent = selected.getParent();

    return <View style={{width: screenWidth}}>
        <Text>This is first view</Text>

        <Card wrapperStyle={styles.cardWrapper} key={'mainCard'}
              containerStyle={styles.cardContainer}>
            <View>
                <Text>{selected.getName()}</Text>
            </View>
            <View>
                <Text>$ {selected.getTotal()}</Text>
            </View>
        </Card>

        {selected.getSubGroups().map(subGroup => (
            <TouchableOpacity onPress={() => select(subGroup)}>
                <Card wrapperStyle={styles.cardWrapper} key={subGroup.name}
                      containerStyle={styles.cardContainer}>
                    <View>
                        <Text>{subGroup.getName()}</Text>
                    </View>

                    <View>
                        <Text>$ {subGroup.getTotal()}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        ))}

        {selected.getEntries().map(value => (
            <Card wrapperStyle={styles.cardWrapper} key={value.name}
                  containerStyle={styles.cardContainer}>
                <View>
                    <Text>{value.name}</Text>
                </View>

                <View>
                    <Text>$ {value.amount}</Text>
                </View>
            </Card>
        ))}

        {parent &&
        <TouchableOpacity onPress={() => {
            select(parent);
        }}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Back</Text>
            </View>
        </TouchableOpacity>}

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

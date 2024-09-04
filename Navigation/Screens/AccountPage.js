import * as React from 'react';
import { View, Text } from "react-native-web";

export default function AccountScreen(Navigation) {
    return (
        <View style={{alignItems: 'center', justifyContent: 'conter'}}>
            <Text onPress={() => navigation.navigate('Home')}
            styles={{ fontSize: 34, fontWeight:'bold'}}>Accounts Screen</Text>
        </View>
    );
};

import * as React from 'react';
import { View, Text } from "react-native-web";

export default function HomeScreen(Navigation) {
    return (
        <View style={{alignItems: 'center', justifyContent: 'conter'}}>
            <Text onPress={() => alert('Blank text Home screen')}
            styles={{ fontSize: 34, fontWeight:'bold'}}>HomeScreen</Text>
        </View>
    );
};

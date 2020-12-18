import React from 'react';
import { View, Text, Button } from 'react-native';

class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
                <Text>推しApp</Text>
            </View>
        );
    }
}

export default Home;
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {RootTabScreenProps} from '../types';

export default function OverviewScreen(navProps: RootTabScreenProps<'OverviewScreen'>) {

    let props = navProps.route.params;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navProps.navigation.navigate("SleepModal", {});
                }}
            >
                <Text>Sleep</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
});

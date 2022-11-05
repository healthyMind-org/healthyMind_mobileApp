import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {RootTabScreenProps} from '../types';

export default function OverviewScreen(navProps: RootTabScreenProps<'OverviewScreen'>) {

    let props = navProps.route.params;

    return (
        <View style={styles.container}>
            <View style={styles.item}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navProps.navigation.navigate("SleepModal", {});
                }}
            >
                <Text>Sleep</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navProps.navigation.navigate("SleepModal", {});
                }}
            >
                <Text>Diet</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navProps.navigation.navigate("SleepModal", {});
                }}
            >
                <Text>Activities</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.item}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navProps.navigation.navigate("EmotionsModal", {});
                }}
            >
                <Text>Emotions</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navProps.navigation.navigate("SleepModal", {});
                }}
            >
                <Text>Exposure</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navProps.navigation.navigate("SleepModal", {});
                }}
            >
                <Text>Interactions</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.statusButton}
                onPress={() => {
                    navProps.navigation.navigate("SleepModal", {});
                }}
            >
                <Text>Status</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        alignItems: 'center',
        width: '50%',
        paddingTop: 20
    },
    text: {

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
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '75%',
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: "#DDDDDD",
    },
    statusButton: {
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '88%',
        paddingVertical: 20,
        marginTop: 20,
        marginHorizontal: 25,
        backgroundColor: "#DDDDDD",
    }
});

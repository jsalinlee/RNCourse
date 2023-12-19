import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

function confirmStart(data) {}

function HomePage() {
    return (
        <View style={styles.homeContainer}>
            <StatusBar style='light' />
            <View style={styles.title}>
                <Text style={styles.titleText}>Guess My Number</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Enter a Number</Text>
                <TextInput style={styles.inputField}></TextInput>
                <View style={styles.buttonContainer}>
                    <Button title='Reset' />
                    <Button title='Confirm' onPress={confirmStart} />
                </View>
            </View>
        </View>
    );
}

export default HomePage;

styles = StyleSheet.create({
    homeContainer: {
        paddingTop: 130,
        backgroundColor: '#a3a2f3',
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        borderWidth: 1,
        padding: 20,
        alignItems: 'center',
        width: '60%',
        borderRadius: 3,
    },
    titleText: {
        color: 'white',
    },
    inputContainer: {
        padding: 20,
        marginVertical: 40,
        backgroundColor: '#fff',
        width: '90%',
        alignItems: 'center',
        backgroundColor: '#f3a2f3',
        borderRadius: 8,
        height: '20%',
    },
    inputTitle: {
        flex: 1,
    },
    inputField: {
        color: '#000',
        width: '20%',
        backgroundColor: '#fff',
        flex: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
});

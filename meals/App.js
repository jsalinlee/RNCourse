import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: '#351401' },
                        contentStyle: { backgroundColor: '#3f2f25' },
                        headerTintColor: 'white',
                    }}
                >
                    <Stack.Screen
                        name='MealsCategories'
                        component={CategoriesScreen}
                        options={{
                            title: 'All Categories',
                        }}
                    />
                    <Stack.Screen
                        name='MealsOverview'
                        component={MealsOverviewScreen}
                        // options={({ route, navigation }) => {
                        //     const catId = route.params.categoryId;
                        //     return {
                        //         title: catId,
                        //     };
                        // }}
                    />
                    <Stack.Screen name='MealDetailsScreen' component={MealDetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});

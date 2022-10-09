import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home';


const Stack = createNativeStackNavigator();

export default function App() {
	const [fonts] = useFonts({
		'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
		'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
	});

	if(!(fonts)) {
		return null;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name='Home' component={Home}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

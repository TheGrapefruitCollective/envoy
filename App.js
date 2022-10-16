import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home';
import { CreateAccountStepOne, CreateAccountStepTwo } from './src/screens/Auth/CreateAccount';
import DataPrivacy from './src/screens/Auth/DataPrivacy';
import LogIn from './src/screens/Auth/LogIn';
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
				<Stack.Screen
					options={{ headerShown: false }}
					name='Home'
					component={Home}
				/>

				<Stack.Screen
					name='CreateAccountStepOne'
					options={
						{
							title: null,
							headerShadowVisible: false
						}
					}
					component={CreateAccountStepOne}
				/>

				<Stack.Screen
					name='CreateAccountStepTwo'
					options={
						{
							title: null,
							headerShadowVisible: false
						}
					}
					component={CreateAccountStepTwo}
				/>

				<Stack.Screen
					name='DataPrivacy'
					options={{
						title: null,
						headerShadowVisible: false,
					}}
					component={DataPrivacy}
				/>

				<Stack.Screen
					name='LogIn'
					options={{
						title: null,
						headerShadowVisible: false,
					}}
					component={LogIn}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

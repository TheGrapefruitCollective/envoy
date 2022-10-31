import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home';
import { CreateAccountStepOne, CreateAccountStepTwo } from './src/screens/Auth/CreateAccount';
import LogIn from './src/screens/Auth/LogIn';
import Colours from './src/components/Colours';


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
							title: 'Create account',
							headerShadowVisible: false,
							headerTintColor: Colours.colour5,
							headerStyle: {
								backgroundColor: Colours.colour0,
							}
						}
					}
					component={CreateAccountStepOne}
				/>

				<Stack.Screen
					name='CreateAccountStepTwo'
					options={
						{
							title: 'Create account',
							headerShadowVisible: false,
							headerTintColor: Colours.colour5,
							headerStyle: {
								backgroundColor: Colours.colour0,
							}
						}
					}
					component={CreateAccountStepTwo}
				/>

				<Stack.Screen
					name='LogIn'
					options={
						{
							title: 'Login account',
							headerShadowVisible: false,
							headerTintColor: Colours.colour5,
								headerStyle: {
									backgroundColor: Colours.colour0,
								}
						}
					}
					component={LogIn}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

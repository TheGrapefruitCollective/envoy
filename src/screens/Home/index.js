import { View } from 'react-native';
import styles from './styles';
import { ButtonWhite } from '../../components/Button';
import Logo from '../../components/Logo';


function Home(props) {
	return (
		<View style={styles.container}>
			<Logo />

			<ButtonWhite
				title='Create Account'
				onPress={() => { props.navigation.navigate('CreateAccountStepOne'); } } />

			<ButtonWhite
				title='Login'
				onPress={() => { props.navigation.navigate('LogIn'); } } />
		</View>
	);
}


export default Home;
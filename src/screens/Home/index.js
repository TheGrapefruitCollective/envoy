import { View } from 'react-native';
import styles from './styles';
import { ButtonColoured, ButtonMono } from '../../components/Button';
import Logo from '../../components/Logo';


const Home = (props) => {
	return(
		<View style={styles.container}>
			<Logo/>
			<ButtonColoured
				title='Create Account'
				onPress={ () => {props.navigation.navigate('CreateAccountStepOne')} }
			/>

			<ButtonMono title='Login'
				onPress={ () => {props.navigation.navigate('LogIn')} }
			/>
		</View>
	);
}


export default Home;
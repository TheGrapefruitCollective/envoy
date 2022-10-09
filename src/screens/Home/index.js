import { View } from 'react-native';
import styles from './styles';
import { ButtonColoured, ButtonMono } from '../../components/Button';
import Logo from '../../components/Logo';


const Home = () => {
	return(
		<View style={styles.container}>
			<Logo/>
			<ButtonColoured title='Create an account'/>
			<ButtonMono title='Login'/>
		</View>
	);
}


export default Home;
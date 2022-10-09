import { Text, View } from 'react-native';
import styles from './styles';


const Logo = () => {
	return(
		<View style={styles.container}>
			<Text style={styles.logoLight}>pocket</Text>
		</View>
	);
}


export default Logo;
import { Image, View } from 'react-native';
import envoy from '../../../assets/envoy.png';
import styles from './styles';


function Logo() {
	return (
		<View style={styles.container}>
			<Image style={styles.logo}
				source={envoy}
			/>
		</View>
	);
}


export default Logo;
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';


export const ButtonColoured = (props) => {
	console.log(props.style);
	return(
		<TouchableOpacity
			style={styles.buttonColoured}
			onPress={props.onPress}
		>
			<Text style={styles.textLight}>{props.title}</Text>
		</TouchableOpacity>
	);
}


export const ButtonMono = (props) => {
	return(
		<TouchableOpacity
			style={styles.buttonMono}
			onPress={props.onPress}
		>
			<Text style={styles.textDark}>{props.title}</Text>
		</TouchableOpacity>
	);
}
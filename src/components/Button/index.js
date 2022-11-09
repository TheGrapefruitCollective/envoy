import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';


export function ButtonWhite(props) {
	return (
		<TouchableOpacity
			style={styles.buttonWhite}
			onPress={props.onPress}
			disabled={props.disabled}
		>
			<Text style={styles.textLight}>{props.title}</Text>
		</TouchableOpacity>
	);
}


export function ButtonMono(props) {
	return (
		<TouchableOpacity
			style={styles.buttonMono}
			onPress={props.onPress}
			disabled={props.disabled}
		>
			<Text style={styles.textDark}>{props.title}</Text>
		</TouchableOpacity>
	);
}


export const ButtonSmall = (props) => {
	return(
		<TouchableOpacity
			style={styles.buttonSmall}
			onPress={props.onPress}
		>
			<Text style={styles.textDark}>{props.title}</Text>
		</TouchableOpacity>
	);
}
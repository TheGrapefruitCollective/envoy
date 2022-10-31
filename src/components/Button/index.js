import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';


export const ButtonColoured = (props) => {
	return(
		<TouchableOpacity
			style={styles.buttonColoured}
			onPress={props.onPress}
			disabled={props.disabled}
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
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';


export function ButtonBlack(props) {
	return (
		<TouchableOpacity
			style={styles.buttonBlack}
			onPress={props.onPress}
			disabled={props.disabled}
		>
			<Text style={styles.buttonText}>{props.title}</Text>
		</TouchableOpacity>
	);
}

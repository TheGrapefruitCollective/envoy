import { View, Text, Linking } from 'react-native';
import styles from './styles';


export const TextBold = (props) => {
	return(
		<View style={styles.container}>
			<Text style={styles.bold}>
				{props.title}
			</Text>
		</View>
	);
}


export const TextRegular = (props) => {
	return(
		<View style={styles.container}>
			<Text style={styles.regular}>
				{props.title}
			</Text>
		</View>
	);
}

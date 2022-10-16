import { Text, TextInput, View } from 'react-native';
import styles from './styles';


const InputField = (props) => {
	return(
		<View style={styles.container}>
			<Text style={styles.inputLabel}>{props.label}</Text>
			<TextInput
				style={styles.inputField}
				placeholder={props.placeholder}
				secureTextEntry={props.secureTextEntry}
				onChangeText={props.onChangeText}
			/>
			<Text style={styles.result}>{props.result}</Text>
		</View>
	);
}


export default InputField;
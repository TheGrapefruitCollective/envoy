import { Text, TextInput, View } from 'react-native';
import Colours from '../Colours';
import styles from './styles';


const InputField = (props) => {
	return(
		<View style={styles.container}>
			<TextInput
				style={styles.inputField}
				placeholder={props.placeholder}
				placeholderTextColor={Colours.colour4}
				secureTextEntry={props.secureTextEntry}
				onChangeText={props.onChangeText}
			/>
			<Text style={styles.result}>{props.result}</Text>
		</View>
	);
}


export default InputField;
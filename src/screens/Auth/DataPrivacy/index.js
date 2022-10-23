import { View } from 'react-native';
import { ButtonColoured, ButtonMono } from '../../../components/Button';
import { TitleText, ParagraphText } from '../../../components/Text';
import styles from './styles';


const CreateAccount = () => {
	return(
		<View style={styles.container}>
			<TitleText text='Data privacy'/>

			<View style={styles.contents}>
				<ParagraphText text='Before you can use Pocket, please make sure to read our Terms of Service and Privacy Policy below.'/>
				<ButtonMono title='Terms of Service'/>
				<ButtonMono title='Privacy Policy'/>
			</View>

			<View style={styles.buttonContainer}>
				<ParagraphText text='By clicking Create an account, I consent to the Terms of Service and Privacy Policy above.'/>
				<ButtonColoured title='Create an account'/>
			</View>
		</View>
	);
}


export default CreateAccount;
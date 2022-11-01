import { View, ScrollView } from 'react-native';
import { TextBold, TextRegular } from '../../../components/Text';
import styles from './styles';


export function TermsOfService(props) {
	return (
		<View style={styles.container}>
			<ScrollView>
				<TextBold title='Terms of Service' />
				<TextRegular title='Terms of Service' />
			</ScrollView>
		</View>
	);
}


export function PrivacyPolicy(props) {
	return (
		<View style={styles.container}>
			<ScrollView>
				<TextBold size={24} title='Privacy Policy' />
				<TextRegular title='Privacy Policy' />
			</ScrollView>
		</View>
	);
}


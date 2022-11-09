import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, ScrollView, Platform } from 'react-native';
import InputField from '../../../components/InputField';
import { ButtonWhite, ButtonSmall } from '../../../components/Button';
import { validateEmail, validatePassword, validateCollege, validateConfirmPassword } from './script';
import styles from './styles';


export function CreateAccountStepOne(props) {
	const [fullName, setFullName] = useState('');
	const [college, setCollege] = useState('');
	const [email, setEmail] = useState('');

	return (
		<>
			<KeyboardAvoidingView
				enabled
				behavior={Platform.OS === 'ios' ? 'padding' : null}
				style={styles.container}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<>
						<View style={styles.inputFieldContainer}>
							<ScrollView
								showsVerticalScrollIndicator={false}
								contentContainerStyle={{ paddingVertical: 12 }}
								keyboardShouldPersistTaps='always'
							>
								<InputField
									placeholder='Enter your first name'
									onChangeText={(fullName) => {
										setFullName(fullName);
									} } />
								<InputField
									placeholder='Enter your college department'
									onChangeText={(college) => {
										setCollege(college);
										//validateCollege(college)
									} }
									result={validateCollege(college) === true ? null : 'Invalid college department.'} />
								<InputField
									placeholder='Enter your email address'
									onChangeText={(email) => {
										setEmail(email);
									} }
									result={validateEmail(email) === true ? null : 'Invalid email address.'} />
							</ScrollView>
						</View>
					</>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
			<View>
				<View style={styles.buttonContainer}>
					<ButtonWhite
						title='Continue'
						disabled={
							//((fullName && college) !== '') ? false : true
							//(fullName !== '' && validateCollege(college) === true) ? false : true
							((email !== '' && fullName !== '' && college !== '') && (validateCollege(college) === true) && (validateEmail(email))) ? false : true}
						onPress={() => props.navigation.navigate('CreateAccountStepTwo')} />
				</View>
			</View>
		</>
	);
}


export const CreateAccountStepTwo = (props) => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return(
		<>
			<KeyboardAvoidingView
				enabled
				behavior={ Platform.OS === 'ios' ? 'padding' : null }
				style={styles.container}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<>
						<View style={styles.inputFieldContainer}>
							<ScrollView
								showsVerticalScrollIndicator={false}
								contentContainerStyle={{paddingVertical: 12}}
								keyboardShouldPersistTaps='always'
							>
								<InputField
									label='Password'
									placeholder='Enter your password'
									secureTextEntry={true}
									 onChangeText={
										(password) => {
											setPassword(password)
										}
									}
									result={validatePassword(password) === true ? null : 'Password must be case-sensitive alphanumeric and contain special characters.'}
								/>

								<InputField
									label='Confirm Password'
									placeholder='Confirm password'
									secureTextEntry={true}
									onChangeText={
										(confirmPassword) => {
											setConfirmPassword(confirmPassword)
										}
									}
									result={validateConfirmPassword(password, confirmPassword) === true ? null : 'Password does not match.'}
								/>

								<View style={{ flex: 1, flexDirection: 'row' }}>
								</View>

							</ScrollView>
						</View>
					</>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
			<View>
				<View style={styles.buttonContainer}>
					<ButtonWhite
						title='Create account'
						disabled={
							((password !== '' && confirmPassword !== '') && (validatePassword(password) === true) && (validateConfirmPassword(password, confirmPassword) === true)) ? false : true
						}
						// onPress={
						// 	() => props.navigation.navigate('DataPrivacy')
						// }
					/>
				</View>
			</View>
		</>
	);
}

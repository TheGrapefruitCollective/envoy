import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, ScrollView, Platform, Text } from 'react-native';
import InputField from '../../../components/InputField';
import { ButtonColoured } from '../../../components/Button';
import { TitleText } from '../../../components/Text';
import styles from './styles';
import { validateEmail, validatePassword, validateCollege, validateConfirmPassword } from './script';


export const CreateAccountStepOne = (props) => {
	const [fullName, setFullName] = useState('');
	const [college, setCollege] = useState('');

	return(
		<>
			<KeyboardAvoidingView
				enabled
				behavior={ Platform.OS === 'ios' ? 'padding' : null }
				style={styles.container}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<>
						<TitleText text='Create an'/>
						<TitleText text='account' style='red'/>

						<View style={styles.inputFieldContainer}>
							<ScrollView
								showsVerticalScrollIndicator={false}
								contentContainerStyle={{paddingVertical: 12}}
								keyboardShouldPersistTaps='always'
							>
								<InputField
									label='Full Name'
									placeholder='Enter your first name'
									onChangeText={
										(fullName) => {
											setFullName(fullName)
										}
									}
								/>
								<InputField
									label='College Department'
									placeholder='Enter your college department'
									onChangeText = {
										(college) => {
											setCollege(college)
											//validateCollege(college)
										}
									}
									result={validateCollege(college) === true ? null : 'Invalid college department.'}
								/>
							</ScrollView>
						</View>
					</>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
			<View>
				<View style={styles.buttonContainer}>
					<ButtonColoured
						title='Continue'
						disabled={
							//((fullName && college) !== '') ? false : true
							//(fullName !== '' && validateCollege(college) === true) ? false : true
							((fullName !== '' && college !== '') && (validateCollege(college) === true)) ? false : true
						}
						onPress={
							() => props.navigation.navigate('CreateAccountStepTwo')
						}
					/>
				</View>
			</View>
		</>
	);
}


export const CreateAccountStepTwo = (props) => {
	const [email, setEmail] = useState('');
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
						<TitleText text='Create an'/>
						<TitleText text='account' style='red'/>

						<View style={styles.inputFieldContainer}>
							<ScrollView
								showsVerticalScrollIndicator={false}
								contentContainerStyle={{paddingVertical: 12}}
								keyboardShouldPersistTaps='always'
							>
								<InputField
									label='Email Address'
									placeholder='Enter your email address'
									onChangeText={
										(email) => {
											setEmail(email)
											//validateEmail(email)
										}
									}
								result={validateEmail(email) === true ? null : 'Invalid email address.'}
								/>

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
							</ScrollView>
						</View>
					</>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
			<View>
				<View style={styles.buttonContainer}>
					<ButtonColoured
						title='Continue'
						disabled={
							((email !== '' && password !== '' && confirmPassword !== '') && (validatePassword(password) === true) && (validateConfirmPassword(password, confirmPassword) === true)) ? false : true
						}
						onPress={
							() => props.navigation.navigate('DataPrivacy')
						}
					/>
				</View>
			</View>
		</>
	);
}

import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, ScrollView, Platform, Text } from 'react-native';
import Logo from '../../../components/Logo';
import InputField from '../../../components/InputField';
import { LinkText } from '../../../components/Text';
import { ButtonColoured } from '../../../components/Button';
import styles from './styles';


const LogIn = () => {
	return(
		<>
			<KeyboardAvoidingView
				enabled
				behavior={ Platform.OS === 'ios' ? 'padding' : null }
				style={styles.container}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<>

					<Logo/>

					<View style={styles.inputFieldContainer}>
						<ScrollView
							showsVerticalScrollIndicator={false}
							contentContainerStyle={{paddingVertical: 12}}
							keyboardShouldPersistTaps='always'
						>

							<InputField
								label='Email address'
								placeholder='Enter your email address'
							/>

							<InputField
								label='Password'
								placeholder='Enter your password'
								secureTextEntry={true}
							/>

							<LinkText
								title='Forgot password?'
							/>

						</ScrollView>
					</View>
					</>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>

			<View>
				<View style={styles.buttonContainer}>
					<ButtonColoured
						title='Log in'
					/>
				</View>
			</View>
		</>
	);
}


export default LogIn;
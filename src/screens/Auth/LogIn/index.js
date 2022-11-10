import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import Logo from '../../../components/Logo';
import InputField from '../../../components/InputField';
import { ButtonBlack } from '../../../components/Button';
import styles from './styles';

function LogIn(props) {
  return (
    <>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <Logo />

            <View style={styles.inputFieldContainer}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 12 }}
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
              </ScrollView>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <View>
        <View style={styles.buttonContainer}>
          <ButtonBlack
            title='Log in'
            onPress={() => props.navigation.navigate('AnnouncementUniversity')}
          />
        </View>
      </View>
    </>
  );
}

export default LogIn;

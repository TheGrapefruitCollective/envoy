import { View } from 'react-native';
import Logo from '../../components/Logo';
import { ButtonBlack } from '../../components/Button';

import styles from './styles';

function Home(props) {
  return (
    <View style={styles.container}>
      <Logo />

      <ButtonBlack
        title='Create Account'
        onPress={() => {
          props.navigation.navigate('CreateAccountStepOne');
        }}
      />

      <ButtonBlack
        title='Login'
        onPress={() => {
          props.navigation.navigate('LogIn');
        }}
      />
    </View>
  );
}

export default Home;

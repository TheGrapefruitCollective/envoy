import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';

const logOutAccount = ({ navigation }) => {
  signOut(auth)
    .then(() => {
      console.log('Logged out.');
      navigation.navigate('Home');
    })
    .catch((error) => {
      console.error(`Error logging out: ${error}`);
    });
};

export default logOutAccount;

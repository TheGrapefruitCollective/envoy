import { StyleSheet } from 'react-native';
import Colours from '../../../components/Colours';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Colours.colour0,
	},

	inputFieldContainer: {
		flex: 1,
		flexDirection: 'column',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	buttonContainer: {
		backgroundColor: Colours.colour0,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
});


export default styles;
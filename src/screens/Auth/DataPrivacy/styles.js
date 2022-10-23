import { StyleSheet } from 'react-native';
import Colours from '../../../components/Colours';


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	contents: {
		flex: 1,
		backgroundColor: Colours.colour0,
		textAlign: 'left',
		alignItems: 'center',
		justifyContent: 'center',
	},

	buttonContainer: {
		backgroundColor: Colours.colour0,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
});


export default styles;
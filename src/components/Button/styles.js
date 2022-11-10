import { StyleSheet } from 'react-native';
import Colours from '../Colours';


const styles = StyleSheet.create({
	buttonBlack: {
		backgroundColor: Colours.black,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: Colours.black,
		borderRadius: 12,
		width: 320,
		height: 48,
		margin: 12,
	},

	buttonRed: {
		backgroundColor: Colours.white,
	},

	buttonText: {
		color: Colours.white,
		fontFamily: 'Ubuntu-Bold',
	},
});


export default styles;
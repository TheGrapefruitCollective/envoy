import { StyleSheet } from 'react-native';
import Colours from '../Colours';


const styles = StyleSheet.create({
	buttonColoured: {
		backgroundColor: Colours.colour2,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		width: 320,
		height: 48,
		margin: 12 / 2,
	},

	buttonMono: {
		backgroundColor: Colours.colour6,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		width: 320,
		height: 48,
		margin: 12 / 2,
	},

	textLight: {
		color: Colours.colour6,
		fontFamily: 'Ubuntu-Bold',
	},

	textDark: {
		color: Colours.colour0,
		fontFamily: 'Ubuntu-Bold',
	}
});


export default styles;
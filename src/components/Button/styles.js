import { StyleSheet } from 'react-native';
import Colours from '../Colours';


const styles = StyleSheet.create({
	buttonColoured: {
		backgroundColor: Colours.colour1,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12 / 6,
		width: 320,
		height: 48,
		margin: 12 / 2,
	},

	buttonMono: {
		backgroundColor: Colours.grey0,
		borderColor: Colours.colour1,
		borderWidth: 1,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12 / 6,
		width: 320,
		height: 48,
		margin: 12 / 2,
	},

	textLight: {
		color: Colours.colour5,
		fontFamily: 'Ubuntu-Bold',
	},

	textDark: {
		color: Colours.colour5,
		fontFamily: 'Ubuntu-Bold',
	}
});


export default styles;
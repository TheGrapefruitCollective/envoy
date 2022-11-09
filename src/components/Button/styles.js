import { StyleSheet } from 'react-native';
import Colours from '../Colours';


const styles = StyleSheet.create({
	buttonWhite: {
		backgroundColor: Colours.white,
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

	buttonMono: {
		backgroundColor: Colours.colour6,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		width: 320,
		height: 48,
		margin: 12,
	},

	buttonSmall: {
		backgroundColor: Colours.colour6,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		width: 148,
		height: 48,
		marginLeft: 6,
		marginRight: 6,
		borderRadius: 12,
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
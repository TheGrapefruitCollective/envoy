import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
	buttonColoured: {
		backgroundColor: "#CC4D46",
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12 / 6,
		width: 320,
		height: 64,
		margin: 12 / 2,
	},

	buttonMono: {
		backgroundColor: '#EBECEF',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12 / 6,
		width: 320,
		height: 64,
		margin: 12 / 2,
	},

	textLight: {
		color: '#FFFFFF',
		fontFamily: 'Ubuntu-Bold',
	},

	textDark: {
		color: '#1E1E1E',
		fontFamily: 'Ubuntu-Bold',
	}
});


export default styles;
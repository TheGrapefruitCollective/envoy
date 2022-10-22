import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	inputField: {
		color: '#959595',
		textAlign: 'left',
		fontSize: 12,
		width: 320,
		height: 48,
		paddingLeft: 12,
		borderWidth: 1,
		borderRadius: 12 / 6,
		fontFamily: 'Ubuntu-Regular',
		fontSize: 16,
	},

	// inputLabel: {
	// 	color: '#CC4D46',
	// 	top: 24,
	// 	left: 12,
	// 	fontFamily: 'Ubuntu-Bold',
	// },

	result: {
		width: 288,
		flex: 1,
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		color: '#CC4D46',
		fontSize: 12,
		paddingLeft: 12,
		justifyContent: 'center',
		fontFamily: 'Ubuntu-Regular',
	}
});


export default styles;
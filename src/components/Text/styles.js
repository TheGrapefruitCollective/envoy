import { StyleSheet } from 'react-native';
import Colours from '../Colours';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		textAlign: 'center',
		alignContent: 'center',
		margin: 12,
		backgroundColor: Colours.colour0,
	},

	regular: {
		color: Colours.colour6,
		fontFamily: 'Ubuntu-Regular',
		fontSize: 12,
	},

	bold: {
		color: Colours.colour6,
		fontFamily: 'Ubuntu-Bold',
		fontSize: 24,
	}

})


export default styles;
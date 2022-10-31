import { StyleSheet } from 'react-native';
import Colours from '../Colours';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colours.colour0,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},

	logoLight: {
		color: Colours.colour6,
		fontSize: 64,
		fontFamily: 'Ubuntu-Bold',
	}
});


export default styles;
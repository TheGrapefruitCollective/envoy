import { StyleSheet } from 'react-native';
import Colours from '../Colours';


const styles = StyleSheet.create({
	marginLeft: 32,

	container: {
		backgroundColor: Colours.grey0,
	},

	title: {
		fontFamily: 'Ubuntu-Bold',
		fontSize: 48,
	},

	black: {
		color: '#1E1E1E',
	},

	red: {
		color: Colours.colour1,
	},

	paragraph: {
		marginLeft: 34,
		marginRight: 34,
		fontSize: 16,
	},

	link: {
		textAlign: 'center',
		color: Colours.colour1,
		justifyContent: 'space-around',
		margin: 12,
	}
})


export default styles;
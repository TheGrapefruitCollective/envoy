import { StyleSheet } from 'react-native';
import Colours from '../../components/Colours';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colours.colour0,
	},

	card: {
		backgroundColor: Colours.colour8,
		borderRadius: 12,
		margin: 12,
		width: 320,
	},

	text: {
		color: Colours.colour6,
	}
});


export default styles;
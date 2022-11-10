import { StyleSheet } from "react-native";
import Colours from "../Colours";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	inputField: {
		color: Colours.colour5,
		backgroundColor: Colours.white,
		textAlign: "left",
		fontSize: 12,
		width: 320,
		height: 48,
		paddingLeft: 12,
		borderWidth: 1,
		borderRadius: 12,
		borderColor: Colours.black,
		fontFamily: "Ubuntu-Regular",
		fontSize: 12,
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
		flexWrap: "wrap",
		alignItems: "flex-start",
		color: Colours.red,
		fontSize: 12,
		justifyContent: "center",
		fontFamily: "Ubuntu-Regular",
	},
});

export default styles;

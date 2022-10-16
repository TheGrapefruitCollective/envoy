import { View, Text } from 'react-native';
import styles from './styles';


export const TitleText = (props) => {
	return(
		<View style={styles.container}>
			<Text style={[
					styles,
					styles.title,
					(
						props.style == null ?
						styles.black :
						styles.red
					)
				]}
			>
				{props.text}
			</Text>
		</View>
	);
}


export const ParagraphText = (props) => {
	return(
		<View style={styles.container}>
			<Text style={[
					styles,
					styles.paragraph,
					(
						props.style == null ?
						{fontFamily: 'Ubuntu-Regular'} :
						{fontFamily: 'Ubuntu-Bold'}
					)
				]}
			>
				{props.text}
			</Text>
		</View>
	);
}
import { View } from 'react-native';
import { Card, Title ,Paragraph } from 'react-native-paper';
import styles from './styles';


export const Announcement = (props) => {
	return(
		<View style={styles.container}>
			<Card style={styles.card}>
				<Card.Content>
					<Title style={styles.text}>{props.title}</Title>
				</Card.Content>
				<Card.Content>
					<Paragraph style={styles.text}>
						{props.description}
					</Paragraph>
				</Card.Content>
			</Card>
		</View>
	);
}
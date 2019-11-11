import {StyleSheet} from 'react-native';
import * as Colors from './Colors';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  panel: {
    backgroundColor: Colors.LightBackground,
    padding: 10,
  },
  content: {
    padding: 10,
  },
  h1: {
    color: Colors.DarkText,
    fontWeight: 'bold',
    fontSize: 30,
  },
  h2: {
    color: Colors.DarkText,
    fontSize: 24,
  },
  subheading: {
    color: Colors.LightText,
    fontSize: 20,
    fontStyle: 'italic',
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.LightText,
  },
  link: {
    color: Colors.Brand,
    textDecorationLine: 'underline',
  },
  contentHeading: {
    marginVertical: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});

export default AppStyles;

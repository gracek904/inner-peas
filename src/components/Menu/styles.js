import { StyleSheet } from 'react-native';
import {theme} from "../../core/theme";
const FONT_SIZE = 18;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  iconStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5
  },
  textStyle: {
    fontSize: FONT_SIZE,
    fontWeight: 'bold',
    color: "#7d573e"
  }
});

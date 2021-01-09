import { makeStyles } from '@material-ui/core'
import { COLORS } from '../../../global/colors';

export const useStyles = makeStyles({
  button: {
    width: 45,
    height: 45,
    marginLeft: 15,
  },
  delivery: {
    color: COLORS.PRIMARY,
    marginLeft: 12,
  },
  bgSecondary: {
    background: COLORS.SECONDARY
  }
});

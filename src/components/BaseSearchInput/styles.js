import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../global/colors';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 14px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
    background: COLORS.SECONDARY,
    color: COLORS.TEXT,
    borderRadius: 40
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 0,
    color: COLORS.BORDER
  },
}));

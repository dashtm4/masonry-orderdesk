import { makeStyles } from '@material-ui/core/styles'

import { COLORS } from '../../global/colors'

export const useStyles = makeStyles({
  primary: {
    background: COLORS.PRIMARY,
    border: 0,
    borderRadius: 8,
    color: 'white',
    minWidth: 'unset',
  },
  secondary: {
    background: COLORS.SECONDARY,
    border: 0,
    borderRadius: 8,
    color: 'white',
    minWidth: 'unset'
  }
});

import { makeStyles } from '@material-ui/core'
import { COLORS } from '../../global/colors';

export const useStyles = makeStyles({
  materialWrapper: {
    fontSize: 14,
    lineHeight: 1.5,
    textAlign: 'right',
  },
  btnViewDetails: {
    padding: 12,
    width: '100%',
  },
  floatRight: {
    float: 'right',
  },
  emptyWrapper: {
    minHeight: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab: {
    textTransform: 'capitalize',
    textAlign: 'center',
    padding: 30,
    cursor: 'pointer'
  },
  paper: {
    padding: 20,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  category: {
    color: COLORS.DESCRIPTION,
    fontSize: 13,
  },
  brand: {
    color: COLORS.LABEL,
    fontSize: 17,
    margin: '16px 0',
  },
  name: {
    color: COLORS.PRIMARY,
    fontSize: 21,
    fontWeight: 600,
    marginBottom: 20,
  },
  freeSampleWrapper: {
    display: 'flex',
    alignItems: 'center',
    color: COLORS.PRIMARY,
    fontSize: 13,
  },
  freeButton: {
    width: 48,
    height: 48,
    marginLeft: 10,
  },
  price: {
    color: COLORS.GREEN,
    textAlign: 'right',
  },
  totalPrice: {
    color: COLORS.GREEN,
    fontSize: 25,
    textAlign: 'right',
  },
  totalBricks: {
    color: COLORS.LABEL,
    textAlign: 'right',
  },
  totalPriceWrapper: {
    marginTop: 20,
    marginBottom: 30,
    padding: '20px 0',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: 'solid',
    borderColor: COLORS.BORDER
  },
  btnAddToCart: {
    padding: 12,
    width: '100%'
  },
});



import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function HalfRating() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="size-large" defaultValue={2} size="large" classes='MuiRating-sizeLarge'/>
    </div>
  );
}

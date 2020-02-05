//Board 데이터를 화면에 렌더링하는 컴포넌트
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 40,
  },
  title: {
    fontSize: 14,
  },
  test: {
    width: 50
  }
});

const BoardItem = (props) => {
  const classes = useStyles();

  return (
    <span>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.index}
          </Typography>
        </CardContent>
      </Card>
    </span>
  );
};

export default BoardItem;
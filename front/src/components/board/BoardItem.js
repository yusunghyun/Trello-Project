//Board 데이터를 화면에 렌더링하는 컴포넌트
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    display: 'inline-block'
  },
  title: {
    fontSize: 14,
  },
  test: {
    backgroundColor: 'red'
  }
});

const BoardItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BoardItem;
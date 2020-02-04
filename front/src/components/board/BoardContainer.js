import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#cfe8fc',
    height: '100%',
    maxWidth: '100%',
    position: 'fixed',
    paddingLeft: 0,
    paddingRight: 0
  },
  appBar: {
    width: '100%'
  },
  appBarTitle: {
    position: 'absolute',
    left: '50%'
  },
  appBarRightMenu: {
    position: 'absolute',
    right: 0
  },
  board: {
    position: 'relative',
    marginTop: '65px'
  }
})

const BoardContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.board}>
      여기부터 시작
    </div>
  );
};

export default BoardContainer;
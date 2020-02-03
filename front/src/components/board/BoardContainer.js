import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#cfe8fc',
    height: '100vh'
  }
})

const BoardContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
    {/* React.Fragment, CssBaseline이 있어야 공백 없이 Container가 채워지는데 왜 그러는지는 모르겠음 */}
      <CssBaseline />
      <Container className={classes.container}>
        
      </Container>
    </React.Fragment>
  );
};

export default BoardContainer;
import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#cfe8fc',
    height: '100vh'
  },
  appBarTitle: {
    textAlign: "center"
  },
  appBarRightMenu: {
    position: "absolute",
    right: 0
  }
})

const BoardContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
    {/* React.Fragment, CssBaseline이 있어야 공백 없이 Container가 채워지는데 왜 그러는지는 모르겠음 */}
      <CssBaseline />
      <Container className={classes.container}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                News
              </Typography>
              <Button className={classes.appBarRightMenu} color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default BoardContainer;
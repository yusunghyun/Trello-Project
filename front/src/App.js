import React from 'react';
import BoardContainer from './components/board/BoardContainer';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Route, Switch, Link } from 'react-router-dom';
import ListContainer from './components/board/ListContainer';
import CommonCss from './css/CommonCss';
import Board from './components/lists/Board'

const useStyles = makeStyles(theme => ({
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
  board: CommonCss.commonContainerCss,
  nonTextDeco: CommonCss.nonTextDeco
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
    {/* React.Fragment, CssBaseline이 있어야 공백 없이 Container가 채워지는데 왜 그러는지는 모르겠음 */}
      <CssBaseline />
      <Container className={classes.container}>
        
          {/* 최상단 헤더 */}
          <AppBar  className={classes.appBar}>
            <Toolbar>
                <Typography className={classes.appBarTitle} variant='h6'>
                  <Link to="/" className={classes.nonTextDeco} style={{color: "white"}}>
                      Trello
                  </Link>
                </Typography>
              <Button className={classes.appBarRightMenu} color='inherit'>Login</Button>
            </Toolbar>
          </AppBar>

          {/* 여기 부터 Routing 시작 */}
          <Switch>
            <Route path="/" component={BoardContainer} exact></Route>
            <Route path="/list" component={Board}></Route>
          </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;

//Board 데이터를 화면에 렌더링하는 컴포넌트
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import CommonCss from '../../css/CommonCss'
import BoardItem from './BoardItem';

const useStyles = makeStyles({
  nonTextDeco: CommonCss.nonTextDeco
});

const BoardLinkItem = (props) => {
  const classes = useStyles();

  return (
    <Link to={{
      pathname: "/list/:boardId"
      }}
      className={classes.nonTextDeco}
    >
      <BoardItem key={props.i} boardid={props.boardid}></BoardItem>
    </Link>
  );
};

export default BoardLinkItem;
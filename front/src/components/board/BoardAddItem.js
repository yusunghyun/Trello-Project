//Board 데이터를 화면에 렌더링하는 컴포넌트
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CommonCss from '../../css/CommonCss'
import BoardItem from './BoardItem';

const useStyles = makeStyles({
  nonTextDeco: CommonCss.nonTextDeco
});

const BoardAddItem = (props) => {
  return (
    <BoardItem key={props.i} boardid={props.boardid}></BoardItem>
  );
};

export default BoardAddItem;
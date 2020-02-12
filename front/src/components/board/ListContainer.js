//리스트 개발 완료전 까지 임시로 붙여 놓은 리스트 컨테이너
import React from 'react';
import CommonCss from '../../css/CommonCss';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  board: CommonCss.commonContainerCss
})

const ListContainer = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.board}>
      <h1>임시 리스트 페이지 입니다.</h1>
    </div>
  );
};

export default ListContainer;
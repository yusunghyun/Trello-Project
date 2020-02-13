//Board에 메인 컨테이너. 보드와 관련된 컴포넌트는 모두 여기서 시작된다.
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CommonCss from '../../css/CommonCss';
import BoardAddItem from './BoardAddItem';
import BoardLinkItem from './BoardLinkItem';
import * as api from '../../api/index';

const useStyles = makeStyles({
  board: CommonCss.commonContainerCss,
});

/**
 * 페이지 용도
 *  - 처음 시작 됐을 때 화면
 */
const BoardContainer = () => {
  const classes = useStyles();
  
  //유저의 board 데이터를 관리하는 state
  let [board, setBoard] = React.useState([]);
  
  React.useEffect(() => {
    //board data를 가져오는 ajax.
    function makeBoardData() {
      api.board.fetch().then(
        data => {
          setBoard(data.list);
          console.log(board)
        }
      );
    }

    makeBoardData();
  }, [123]);
  console.log(board)
  return (
    <div className={[classes.board].join(' ')}>
      {/*board의 기본 경로*/}

        {
          board.map((v, i)=>(
            <BoardLinkItem key={v.id} id={v.id} title={v.title}/>
          ))
        }
      <BoardAddItem setBoard={setBoard} title={"추가"}></BoardAddItem>
    </div>
  );
};

export default BoardContainer;
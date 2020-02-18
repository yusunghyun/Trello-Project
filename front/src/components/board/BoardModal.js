import React from 'react';
import Modal from '@material-ui/core/Modal';

const BoardModal = () => {

    //보드 추가 모달창 열기
    const boardAddOpen = () => {
      console.log("board를 추가 합니다.");
      setOpen(true);
    };
  
    //보드 추가 모달창 닫기
    const boardAddClose = () => {
      console.log("board를 추가 modal을 닫습니다.");
      setOpen(false);
    };

  return (
    <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={boardAddClose}
      >12311111111111111111111111111111
    </Modal>
  );
};

export default BoardModal;
import React, { useEffect, useRef } from "react";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

import { Modal, ModalShare } from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleShare } from "../../singleMovieSlice";

const ShareModal = () => {
  const { isShare } = useAppSelector((store) => store.singleMovie);
  const dispatch = useAppDispatch();
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
  }, []);

  const clickOutside = (e: MouseEvent) => {
    if (!shareRef.current?.contains(e.target as Node)) {
      dispatch(toggleShare(false));
    } else {
      dispatch(toggleShare(true));
    }
  };

  return (
    <Modal isShare={isShare} isReview={false} isLists={false}>
      <ModalShare ref={shareRef}>
        <RxCross1 onClick={() => dispatch(toggleShare(false))} />
        <div>
          <p>https://Moviexd.com/movie/id</p>
          <HiOutlineClipboardCopy />
        </div>
        <BsTwitter />
        <BsFacebook />
        <BsInstagram />
        <BsSnapchat />
      </ModalShare>
    </Modal>
  );
};

export default ShareModal;
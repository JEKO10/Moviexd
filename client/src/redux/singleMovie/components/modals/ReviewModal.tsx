import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";

import {
  Modal,
  ModalReview,
  SaveButton,
} from "../../../../assets/style/Modals.styled";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { toggleReview } from "../../singleMovieSlice";

const ReviewModal = () => {
  const [isDate, setIsDate] = useState(true);
  const [isRewatch, setIsRewatch] = useState(false);
  const [isSpoiler, setIsSpoiler] = useState(false);

  const { movieInfo, isReview } = useAppSelector((store) => store.singleMovie);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w300/";
  const reviewRef = useRef<HTMLDivElement>(null);
  const date = new Date();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (reviewRef.current && !reviewRef.current.contains(e.target as Node)) {
        dispatch(toggleReview(false));
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Modal isShare={false} isReview={isReview} isLists={false}>
      <ModalReview ref={reviewRef}>
        <RxCross1 onClick={() => dispatch(toggleReview(false))} />
        <img src={posterUrl + movieInfo.poster_path} alt="POSTER" />
        <div>
          <h2>
            {movieInfo.title}
            <span>{movieInfo.release_date.slice(0, 4)}</span>
          </h2>
          <div>
            <label>
              <input
                type="checkbox"
                checked={isDate}
                onChange={() => setIsDate(!isDate)}
              />
              Watched on {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
              .
            </label>
            <label>
              <input
                type="checkbox"
                checked={isRewatch}
                onChange={() => setIsRewatch(!isRewatch)}
              />
              I`ve watched this film before
            </label>
          </div>
          <textarea placeholder="Add a review..." cols={65} rows={5} />
          <div>
            <label>
              <input
                type="checkbox"
                checked={isSpoiler}
                onChange={() => setIsSpoiler(!isSpoiler)}
              />
              Contains spoilers
            </label>
            <SaveButton onClick={() => dispatch(toggleReview(false))}>
              Save
            </SaveButton>
          </div>
        </div>
      </ModalReview>
    </Modal>
  );
};

export default ReviewModal;

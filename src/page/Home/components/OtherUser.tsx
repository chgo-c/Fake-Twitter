import { ReactComponent as Message } from "../../../img/otherUser/message.svg";
import { ReactComponent as Transfer } from "../../../img/otherUser/transfer.svg";
import { ReactComponent as View } from "../../../img/otherUser/view.svg";
import { ReactComponent as Like } from "../../../img/otherUser/like.svg";
import { ReactComponent as LikeActive } from "../../../img/otherUser/likeActive.svg";
import { useSelector, useDispatch } from "react-redux";
import * as Styles from "../styles";
import { RootState } from "../../../reducers";
import { useEffect, useState } from "react";
import { AddOtherUserDataLike } from "../../../reducers/otherUserData";
import { GlobalClientImg } from "../../../styles/GlobalStyle";
import InfiniteScroll from "react-infinite-scroll-component";
import ReactLoading from "react-loading";

interface otherUserDataProps {
  id: string;
  userName: string;
  userSerialNumber: string;
  postingTime: string;
  text: string;
  image?: string;
  message: number;
  transfer: number;
  view: number;
  like: { number: number; userClick: boolean };
}

const OtherUser = () => {
  const dispatch = useDispatch();
  const otherUserData = useSelector(
    (state: RootState) => state.otherUserDataSliceReducer.otherUserData
  );

  const [sortIdOtherUserData, setSortIdOtherUserData] = useState<
    otherUserDataProps[]
  >([]);

  const [dataPageNumber, setDataPageNumber] = useState<number>(4);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMoreData = () => {
    // mock APi call
    if (sortIdOtherUserData.length < otherUserData.length) {
      setTimeout(() => {
        setDataPageNumber(dataPageNumber + 2);
      }, 1500);
    } else {
      setHasMore(false);
    }
  };

  useEffect(() => {
    setSortIdOtherUserData(
      otherUserData.slice(0, dataPageNumber)
      // .sort((a: otherUserDataProps, b: otherUserDataProps) => {
      //   return Number(b.id) - Number(a.id);
      // })
    );
  }, [otherUserData, dataPageNumber]);

  return (
    <Styles.OtherUser>
      <InfiniteScroll
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "12px 0 0 0",
            }}
          >
            <ReactLoading
              type={"spokes"}
              color="#1d9bf0"
              width="25px"
              height="25px"
            />
          </div>
        }
        dataLength={sortIdOtherUserData.length}
        style={{ overflow: "hidden" }}
      >
        {sortIdOtherUserData?.map((item) => {
          return (
            <div className="other-user-content" key={item.id}>
              <GlobalClientImg
                src="https://picsum.photos/50/50?grayscale"
                alt=""
                className="client-data-img"
                Location={"otherUser"}
              />
              <div className="other-data-container">
                <div className="other-user-block">
                  <div className="other-user-name">{item.userName}</div>
                  <div className="other-user-account">
                    {item.userSerialNumber}
                  </div>
                  ??<div className="other-user-date">31m</div>
                </div>

                <div className="other-user-text">{item.text}</div>
                <div className="other-user-image">
                  <img
                    src={`https://picsum.photos/500/370/?blur=${item.id}`}
                    alt=""
                  ></img>
                </div>
                <div className="other-user-icon">
                  <div className="other-user-icon-item">
                    <Message />
                    {item.message}
                  </div>
                  <div className="other-user-icon-item transfer">
                    <Transfer /> {item.transfer}
                  </div>
                  <div className="other-user-icon-item">
                    <View />
                    {item.view}
                  </div>
                  <div
                    className={`other-user-icon-item like ${
                      item.like.userClick ? "active" : ""
                    }`}
                    onClick={() => {
                      dispatch(AddOtherUserDataLike(item.id));
                    }}
                  >
                    {item.like.userClick ? <LikeActive /> : <Like />}
                    {item.like.number}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </Styles.OtherUser>
  );
};

export default OtherUser;

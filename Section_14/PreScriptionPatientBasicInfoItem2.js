import Icon from "../../fixture/icon/Icon";
import React from "react";
import { useIsOverflow } from "./hook";
import { containerClasses } from "@mui/system";

const PreScriptionPatientBasicInfoItem2 = (props) => {
  const ref = React.useRef();
  const isOverflow = useIsOverflow(ref, (isOverflowFromCallback) => {});
  const [showMore, setShowMore] = React.useState(false);
  const onClickMore = () => {
    setShowMore(!showMore);
  };
  const clickHandler = () => {
    props.onClickHandler();
  };
  return (
    <li>
      <div className="prescription-list__box">
        <div className="prescription-item" onClick={clickHandler}>
          <img src={Icon.IconPrescription01} alt="" />
        </div>
        <div className="prescription-info">
          <div
            className={showMore ? "pre-text__show_more" : "pre-text"}
            ref={ref}
          >
            <ul>
              <li className="pre-blue">
                <div className="pre-text__label">
                  <span className="pre-name">既往歴</span>
                </div>
                <div className="pre-text__cmt">
                  <p className="pre-element">高血圧</p>
                  <p className="pre-element">糖尿病</p>
                  <p className="pre-element">消化性潰瘍</p>
                  <p className="pre-element">高血圧</p>
                </div>
              </li>
              <li className="pre-blue">
                <div className="pre-text__label">
                  <span className="pre-name">他の医療機関</span>
                </div>
                <div className="pre-text__w100 pre-text__w100--pl">
                  <p className="pre-element">A病院</p>
                  <p className="pre-element">Bクリニック</p>
                  <p className="pre-element">C歯科</p>
                  <p className="pre-element">A病院</p>
                  <p className="pre-element">Bクリニック</p>
                  <p className="pre-element">C歯科</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="prescription-info">
          {isOverflow && (
            <div className="pre-more">
              <button className="btn" onClick={onClickMore}>
                <img src={Icon.IconMore} alt="" />
              </button>
            </div>
          )}
          {!isOverflow && showMore && (
            <div className="pre-more">
              <button className="btn" onClick={onClickMore}>
                <img src={Icon.IconDoubleUp} alt="" />
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default PreScriptionPatientBasicInfoItem2;

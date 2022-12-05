import Icon from "../../fixture/icon/Icon";
import React from "react";
import { useIsOverflow } from "./hook";
import { containerClasses } from "@mui/system";

const PreScriptionPatientBasicInfoItem1 = (props) => {
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
					<img src={Icon.IconPrescription} alt="" />
				</div>
				<div className="prescription-info">
					<div
						className={
							showMore ? "pre-text__show_more" : "pre-text"
						}
						ref={ref}
					>
						<ul>
							<li className="pre-blue">
								<div className="pre-text__label">
									<span className="pre-name">妊娠・授乳</span>
								</div>
								<div className="pre-text__cmt">
									<p className="pre-element">なし</p>
								</div>
							</li>
							<li className="pre-blue pre-blue--has">
								<div className="pre-text__label">
									<span className="pre-name">副作用歴</span>
								</div>
								<div className="pre-text__cmt">
									<p className="pre-element">ペニシリン</p>
									<p className="pre-element">ペニシリン</p>
								</div>
							</li>
							<li className="pre-orange pre-blue--has">
								<div className="pre-text__label">
									<span className="pre-name">
										アレルギー歴
									</span>
								</div>
								<div className="pre-text__cmt">
									<p className="pre-element">卵</p>
								</div>
							</li>
							<li className="pre-blue">
								<div className="pre-text__label">
									<span className="pre-name">体質</span>
								</div>
								<div className="pre-text__cmt">
									<p className="pre-element">便秘しやすい</p>
									<p className="pre-element">便秘しやすい</p>
								</div>
							</li>
							<li className="pre-blue">
								<div className="pre-text__label">
									<span className="pre-name">家族歴</span>
								</div>
								<div className="pre-text__cmt">
									<p className="pre-element">脳卒中（父）</p>
									<p className="pre-element">脳卒中（父）</p>
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
						<div className="pre-up">
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

export default PreScriptionPatientBasicInfoItem1;

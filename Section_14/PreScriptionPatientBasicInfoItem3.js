import Icon from "../../fixture/icon/Icon";
import React from "react";
import { useIsOverflow } from "./hook";
import { containerClasses } from "@mui/system";

const PreScriptionPatientBasicInfoItem3 = (props) => {
	const ref = React.useRef();
	const isOverflow = useIsOverflow(ref, (isOverflowFromCallback) => {});
	const [showMore, setShowMore] = React.useState(false);
	const onClickMore = () => {
		setShowMore(!showMore);
	};
	return (
		<li>
			<div className="prescription-list__box">
				<div className="prescription-item">
					<img src={Icon.IconPrescription02} alt="" />
				</div>
				<div className="prescription-info">
					<div className="pre-text" ref={ref}>
						<ul>
							<li className="pre-blue">
								<div className="pre-text__label">
									<span className="pre-name">併用薬</span>
								</div>
								<div className="pre-text__w100 pre-text__w100--fs10">
									<p className="pre-element">
										・ロキソプロフェン（Bクリニック）
									</p>
									<p className="pre-element">
										・レバミピド（Bクリニック）
									</p>
									<p className="pre-element">
										・モーラステープ（Bクリニック）
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="prescription-info">
					<div className="pre-more">
						<button className="btn">
							<img src={Icon.IconMore} alt="" />
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default PreScriptionPatientBasicInfoItem3;

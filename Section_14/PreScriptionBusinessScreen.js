import React, { useState } from "react";
import Icon from "../../fixture/icon/Icon";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Scrollbars from "react-custom-scrollbars-2";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AuditResult from "./prescription-business-tabs/AuditResult";
import TestResult from "./prescription-business-tabs/TestResult";
import QuestionInquiry from "./prescription-business-tabs/QuestionInquiry";
import MedicationRecord from "./prescription-business-tabs/MedicationRecord";
import TracingReport from "./prescription-business-tabs/TracingReport";
import InquiryHistory from "./prescription-business-tabs/InquiryHistory";
import TestResult1 from "./prescription-business-tabs/TestResult1";
import LDatePicker from "../../component/common/LDatePicker";
import dayjs from "dayjs";
import DetailModal, {
	useMedicalHistoryDetailTable,
} from "./detail-modal/DetailModal";
import PreScriptionPatientBasicInfoItem1 from "./PreScriptionPatientBasicInfoItem1";
import PreScriptionPatientBasicInfoItem2 from "./PreScriptionPatientBasicInfoItem2";
import PreScriptionPatientBasicInfoItem3 from "./PreScriptionPatientBasicInfoItem3";

const PreScriptionBusinessScreen = () => {
	const [activedTabID, setActivedTabID] = useState("1");
	const onActiveTabChanged = (tabevent, newValue) => {
		setActivedTabID(newValue);
	};
	//
	const [activedTabIDTabs, setActivedTabIDTabs] = useState("1");
	const onActiveTabChangedTabs = (tabevent, newValue) => {
		setActivedTabIDTabs(newValue);
	};
	//
	const [status, setStatus] = useState("Blank");
	const onChangeStatus = (e) => [setStatus(e.target.value)];
	//
	const [value, setValue] = useState(dayjs("2022-04-07"));

	// TODO-ngoctq: move logic to hook
	const [isShowDetailModal, setIsShowDetailModal] = useState(false);

	const onClickOpenDetailModal = () => {
		setIsShowDetailModal((prevState) => !prevState);
	};

	return (
		<>
			{isShowDetailModal && (
				<DetailModal
					closeModal={onClickOpenDetailModal}
					tableHooks={[useMedicalHistoryDetailTable]}
				/>
			)}
			<div className="content-main">
				<div className="prescription-business">
					<div className="prescription__head">
						<div className="prescription-wrap">
							<div className="prescription-scroll">
								<div className="prescription-list">
									<ul>
										<PreScriptionPatientBasicInfoItem1
											onClickHandler={
												onClickOpenDetailModal
											}
										/>
										<PreScriptionPatientBasicInfoItem2
											onClickHandler={
												onClickOpenDetailModal
											}
										/>
										<PreScriptionPatientBasicInfoItem3
											onClickHandler={
												onClickOpenDetailModal
											}
										/>
										<li>
											<div className="prescription-list__box">
												<div className="prescription-item">
													<img
														src={
															Icon.IconPrescription03
														}
														alt=""
													/>
												</div>
												<div className="prescription-info">
													<div className="pre-text">
														<ul>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		OCT
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		カロナール
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		サプリメント
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		無
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		健康食品
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		セサミン/VC
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		飲酒
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		機会飲酒
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		嗜好品
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		グレープフルーツ
																	</p>
																</div>
															</li>
														</ul>
													</div>
													<div className="pre-more">
														<button className="btn">
															<img
																src={
																	Icon.IconMore
																}
																alt=""
															/>
														</button>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div className="prescription-list__box">
												<div className="prescription-item">
													<img
														src={
															Icon.IconPrescription04
														}
														alt=""
													/>
												</div>
												<div className="prescription-info">
													<div className="pre-text">
														<ul>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		危険作業
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		運転（買物）
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		喫煙
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		なし
																	</p>
																</div>
															</li>
															<li className="pre-blue pre-blue--has">
																<div className="pre-text__label">
																	<span className="pre-name">
																		生活習慣
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		データなし
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		患者メモ
																	</span>
																</div>
																<div className="pre-text__w100 pre-text__w100--pl">
																	<p className="pre-element">
																		患者メモがここに入ります
																	</p>
																</div>
															</li>
														</ul>
													</div>
													<div className="pre-more">
														<button className="btn">
															<img
																src={
																	Icon.IconMore
																}
																alt=""
															/>
														</button>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div className="prescription-list__box">
												<div className="prescription-info">
													<div className="pre-text">
														<ul>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		後発品希望
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		希望あり
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		お薬手帳
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		使用
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		身体的特性
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		視力低下/要介助
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		薬物治療希望
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		減薬
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		調剤の希望
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		一包化
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		かかりつけ薬剤師
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		中山花子
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		訪問管理
																	</span>
																</div>
																<div className="pre-text__cmt"></div>
															</li>
														</ul>
													</div>
													<div className="pre-more">
														<button className="btn">
															<img
																src={
																	Icon.IconMore
																}
																alt=""
															/>
														</button>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="prescription__content">
						<div className="prescription-row">
							<div className="prescription-row__col">
								<div className="tabs-wrap">
									<TabContext value={activedTabID}>
										<div className="tabs-nav">
											<TabList
												onChange={onActiveTabChanged}
												className="tabs-nav__tabs-list"
											>
												<Tab label="処方" value="1" />
												<Tab
													label="問い合わせ履歴"
													value="2"
												/>
												<Tab label="検査値" value="3" />
											</TabList>
										</div>
										<div className="content-tabs">
											<TabPanel
												className="content-tabs__pane"
												value="1"
											>
												<div className="group-main">
													<div className="group-main__info">
														<div className="group-row">
															<div className="group-row__col">
																<div className="pre-flex">
																	<div className="pre-flex__head">
																		<div className="box-time">
																			<div className="box-time__info">
																				<div className="slide-date">
																					<button className="btn btn--pre">
																						<img
																							src={
																								Icon.IconAngleLeft
																							}
																							alt=""
																						/>
																					</button>
																					<span className="date-time">
																						2022年5月12日
																						13:00{" "}
																					</span>
																					<button className="btn btn-next">
																						<img
																							src={
																								Icon.IconAngleLeft
																							}
																							alt=""
																						/>
																					</button>
																				</div>
																				<div className="item-filter">
																					<button className="btn">
																						<img
																							src={
																								Icon.IconFilter
																							}
																							alt=""
																						/>
																					</button>
																				</div>
																			</div>
																			<div className="box-time__hospital">
																				<button className="btn">
																					<img
																						src={
																							Icon.IconHospital
																						}
																						alt=""
																					/>
																				</button>
																			</div>
																		</div>
																	</div>
																	<div className="pre-flex__cmt">
																		<div className="bag">
																			<Scrollbars className="scrollBar-drug">
																				<div className="group-drug">
																					<div className="list-drug">
																						<ul>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												アムロジピンOD錠5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99錠
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												ランソブラゾールOD錠15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1錠
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										1
																									</div>
																									<p className="list-text">
																										1日1回
																										/
																										朝食後
																										/
																										28日分
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												アムロジピンOD錠5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99錠
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												ランソブラゾールOD錠15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1錠
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										2
																									</div>
																									<p className="list-text">
																										1日1回
																										/
																										朝食後
																										/
																										28日分
																									</p>
																								</div>
																							</li>
																						</ul>
																					</div>
																					<div className="result">
																						<ul>
																							<li>
																								<span className="result-label">
																									S
																								</span>
																								<div className="result-info">
																									<p>
																										症状は特にない。副作用に不安あり、症状はない。尿の色はふつう。
																									</p>
																								</div>
																							</li>
																							<li>
																								<span className="result-label">
																									O
																								</span>
																								<div className="result-info">
																									<p>
																										血圧(128/76)/腎機能:eGFR(66)　CK:140
																									</p>
																									<p>
																										T-CHO:160　TG:56
																										体重変わりなし
																									</p>
																								</div>
																							</li>
																							<li>
																								<span className="result-label">
																									S
																								</span>
																								<div className="result-info">
																									<p>
																										心不全増悪を疑う症状はない。血圧・脂質コントロール良好。CK高めで横紋筋誘拐賞への不安があるため、初期症状および症状発言時の対応について指導が必要。また、不安からコンプライアンス不良となっていないか確認必要。
																									</p>
																								</div>
																							</li>
																						</ul>
																					</div>
																				</div>
																			</Scrollbars>
																			<div className="btn-up">
																				<button className="btn">
																					<img
																						src={
																							Icon.IconDoubleDown
																						}
																						alt=""
																					/>
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="group-row__col">
																<div className="pre-flex">
																	<div className="pre-flex__head">
																		<div className="box-time box-time--change">
																			<div className="box-time__new">
																				<span className="span-title">
																					NEW
																				</span>
																				<span className="span-date">
																					2022年5月12日
																					13:00
																				</span>
																			</div>
																			<div className="box-time__hospital">
																				<button className="btn">
																					<img
																						src={
																							Icon.IconHospital
																						}
																						alt=""
																					/>
																				</button>
																			</div>
																		</div>
																	</div>
																	<div className="pre-flex__cmt">
																		<div className="bag">
																			<Scrollbars className="scrollBar-drug scrollBar-drug--change">
																				<div className="group-drug">
																					<div className="list-drug list-drug--new">
																						<ul>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												<span className="drug-link">
																													アムロジピンOD錠5mg
																												</span>
																											</div>
																											<div className="drug-wrap__tablets">
																												99錠
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												ランソブラゾールOD錠15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1錠
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										1
																									</div>
																									<p className="list-text">
																										1日1回
																										/
																										朝食後
																										/
																										28日分
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug drug--bg">
																										<div className="drug-wrap">
																											<div className="drug-wrap__item">
																												<span className="drug-exclamation">
																													！
																												</span>
																											</div>
																											<div className="drug-wrap__title">
																												アムロジピンOD錠5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99錠
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												ランソブラゾールOD錠15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1錠
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										2
																									</div>
																									<p className="list-text">
																										1日1回
																										/
																										朝食後
																										/
																										28日分
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug drug--color">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												アムロジピンOD錠5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99錠
																											</div>
																										</div>
																									</div>
																									<div className="drug drug--color">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												ランソブラゾールOD錠15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1錠
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										3
																									</div>
																									<p className="list-text">
																										1日1回
																										/
																										朝食後
																										/
																										28日分
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												アムロジピンOD錠5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99錠
																											</div>
																										</div>
																									</div>
																									<div className="drug drug--bg">
																										<div className="drug-wrap">
																											<div className="drug-wrap__item">
																												<span className="drug-alphabet font-furura">
																													H
																												</span>
																												<span className="drug-exclamation">
																													！
																												</span>
																											</div>
																											<div className="drug-wrap__title">
																												ランソブラゾールOD錠15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1錠
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										4
																									</div>
																									<p className="list-text">
																										1日1回
																										/
																										朝食後
																										/
																										28日分
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												アムロジピンOD錠5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99錠
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__item">
																												<span className="drug-alphabet font-furura">
																													H
																												</span>
																											</div>
																											<div className="drug-wrap__title">
																												ランソブラゾールOD錠15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1錠
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										5
																									</div>
																									<p className="list-text">
																										1日1回
																										/
																										朝食後
																										/
																										28日分
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												アムロジピンOD錠5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99錠
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												ランソブラゾールOD錠15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1錠
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										6
																									</div>
																									<p className="list-text">
																										1日1回
																										/
																										朝食後
																										/
																										28日分
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												アムロジピンOD錠5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99錠
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												ランソブラゾールOD錠15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1錠
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										7
																									</div>
																									<p className="list-text">
																										1日1回
																										/
																										朝食後
																										/
																										28日分
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												アムロジピンOD錠5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99錠
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												ランソブラゾールOD錠15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1錠
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										8
																									</div>
																									<p className="list-text">
																										1日1回
																										/
																										朝食後
																										/
																										28日分
																									</p>
																								</div>
																							</li>
																						</ul>
																					</div>
																				</div>
																			</Scrollbars>
																			<div className="btn-up">
																				<button className="btn">
																					<img
																						src={
																							Icon.IconDoubleDown
																						}
																						alt=""
																					/>
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</TabPanel>
											<TabPanel
												className="content-tabs__pane"
												value="2"
											>
												<InquiryHistory />
											</TabPanel>
											<TabPanel
												className="content-tabs__pane"
												value="3"
											>
												<TestResult1 />
											</TabPanel>
										</div>
									</TabContext>
								</div>
							</div>
							<div className="prescription-row__col">
								<div className="tabs-wrap">
									<TabContext value={activedTabIDTabs}>
										<div className="tabs-nav">
											<TabList
												onChange={
													onActiveTabChangedTabs
												}
												className="tabs-nav__tabs-list"
											>
												<Tab
													label="ヒアリング"
													value="1"
												/>
												<Tab label="検査値" value="2" />
												<Tab
													label="監査結果"
													value="3"
												/>
												<Tab
													label="疑義照会"
													value="4"
												/>
												<Tab
													label="薬歴記録"
													value="5"
												/>
												<Tab
													label="トレーシングレポート"
													value="6"
												/>
											</TabList>
										</div>
										<div className="content-tabs">
											<TabPanel
												className="content-tabs__pane"
												value="1"
											>
												{/* 5.処方業務＿ヒアリング＿内容セット */}
												{/* <div className="hearing-box">
                                                <div className="sum">
                                                    <div className="sum__content">
                                                        <Scrollbars className="scroll-sum">
                                                            <div className="hearing">
                                                                <div  className="hearing-title">
                                                                    <h2 className="title"><span>この先のヒアリング内容をセットします</span></h2>
                                                                </div>
                                                                <div className="hearing-note">
                                                                    <p className="hearing-note__text">処方薬から推測される疾患を下に表示しています。</p>
                                                                    <p className="hearing-note__text">患者さんの情報を評価するための症状を優先的に表示するため</p>
                                                                    <p className="hearing-note__text">推測されるものを全て選択して次に進んでください。（複数選択可）</p>
                                                                </div>
                                                                <div className="hearing-drug">
                                                                    <ul>
                                                                        <li><button className="btn btn--primary btn--hg32" type="button">生活習慣病</button></li>
                                                                        <li><button className="btn btn--primary btn--hg32" type="button">脳心血管疾患</button></li>
                                                                        <li><button className="btn btn--outline-primary btn--hg32" type="button">抗血栓薬</button></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="hearing-items">
                                                                    <p className="hearing-items__confir">ヒアリングで確認する項目</p>
                                                                    <div className="hearing-items__label">
                                                                        <ul>
                                                                            <li>むくみ</li>
                                                                            <li>動機</li>
                                                                            <li>めまい</li>
                                                                            <li>頭痛</li>
                                                                            <li>ふらつき</li>
                                                                        </ul>
                                                                    </div>
                                                                    <p className="hearing-items__confir">※実際のヒアリングでは、ここで選択されなかった症状も入力できます</p>
                                                                </div>
                                                            </div>
                                                        </Scrollbars>
                                                    </div>
                                                    <div className="sum__footer">
                                                        <div className="sum-btn">
                                                            <button className="btn btn--warning btn--hg32">次へ</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

												{/* 6.処方業務＿ヒアリング＿どなたが入力しますか */}
												{/* <div className="hearing-box">
                                                <div className="sum">
                                                    <div className="sum__content">
                                                        <Scrollbars className="scroll-sum">
                                                            <div className="hearing">
                                                                <div  className="hearing-title">
                                                                    <h2 className="title"><span>どなたがヒアリング入力しますか？</span></h2>
                                                                </div>
                                                                <div className="hearing-patient">
                                                                    <p className="entered">患者さんが入力する</p>
                                                                    <ul>
                                                                        <li>
                                                                            <div className="patient-title">
                                                                                <p className="patient-text"><span>QRコードで読み取る</span></p>
                                                                            </div>
                                                                            <div className="patient-btn">
                                                                                <button className="btn btn--primary btn--hg32" type="button">QRコードを表示する</button>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="patient-title">
                                                                                <p className="patient-text"><span>SMS送信する</span></p>
                                                                            </div>
                                                                            <div className="patient-control">
                                                                                <p className="patient-control__Please">電話番号を入力してください</p>
                                                                                <input className="form-control form-control--hg32" type="text" placeholder="080-0000-0000" />
                                                                                <button className="btn btn--primary btn--hg32" type="button">送信</button>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="typing">
                                                                    <ul>
                                                                        <li>
                                                                            <div className="typing-box typing-box--active">
                                                                                <div className="typing-content">
                                                                                    <div className="typing--item">
                                                                                        <span></span>
                                                                                        <span></span>
                                                                                        <span></span>
                                                                                    </div>
                                                                                    <p className="typing-text">入力中</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="typing-box">
                                                                                <div className="typing-content">
                                                                                    <p className="typing-ok">OK!</p>
                                                                                    <p className="typing-text">入力完了</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="please-proceed">薬剤師が入力する場合、次へ進んでください。</div>
                                                            </div>
                                                        </Scrollbars>
                                                    </div>
                                                    <div className="sum__footer">
                                                        <div className="sum-btn">
                                                            <div className="sum-back">
                                                                <span><img src={Icon.IconAngleLeft01} alt="" /></span>戻る
                                                            </div>
                                                            <button className="btn btn--warning btn--hg32">次へ</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

												{/* 8.処方業務＿ヒアリング＿入力画面 */}
												<div className="hearing-box">
													<div className="sum">
														<div className="sum__content">
															<Scrollbars className="scroll-sum">
																{/* 37.在宅業務＿ヒアリング＿入力画面 */}
																<div className="report">
																	<div className="report-group">
																		<div className="report-writing">
																			<div className="report-picker">
																				<label className="report-picker__label">
																					訪問日時
																				</label>
																				<div className="report-picker__date">
																					<LDatePicker
																						value={
																							value
																						}
																						onChange={
																							setValue
																						}
																					/>
																					{/* <input className="form-control form-control--hg22" type="text" placeholder="2022/06/20 15:00" />
                                                                                <span className="report-item"><img src={Icon.IconCalendar} alt="" /></span> */}
																				</div>
																			</div>
																			<div className="report-btn">
																				<button
																					className="btn btn--primary btn--hg32"
																					type="button"
																					disabled
																				>
																					報告書作成
																				</button>
																			</div>
																		</div>
																		<div className="report-radio">
																			<ul>
																				<li>
																					<label className="custom-control custom-radio">
																						<input
																							name="radio-report"
																							className="custom-control-input"
																							type="radio"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							予定訪問
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-radio">
																						<input
																							name="radio-report"
																							className="custom-control-input"
																							type="radio"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							緊急時訪問
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-radio">
																						<input
																							name="radio-report"
																							className="custom-control-input"
																							type="radio"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							緊急時オンライン
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-radio">
																						<input
																							name="radio-report"
																							className="custom-control-input"
																							type="radio"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							緊急時共同
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-radio">
																						<input
																							name="radio-report"
																							className="custom-control-input"
																							type="radio"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							退院時共同
																						</span>
																					</label>
																				</li>
																				<li>
																					（
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							オンライン
																						</span>
																					</label>{" "}
																					）
																				</li>
																			</ul>
																		</div>
																		<div className="report-part">
																			<label className="report-part__label">
																				共同指導・カンファレンス参加者
																			</label>
																			<div className="report-part__control">
																				<ul>
																					<li>
																						<div className="report-input">
																							<input
																								className="form-control form-control--hg22"
																								type="text"
																								placeholder="鈴木　たくや"
																								value="鈴木　たくや"
																							/>
																						</div>
																						<div className="report-select">
																							<Select
																								className="form-select form-select--bgGray form-select--hg22"
																								value={
																									status
																								}
																								onChange={
																									onChangeStatus
																								}
																							>
																								<MenuItem
																									className="menu-item menu-item--fs12"
																									value={
																										1
																									}
																								>
																									医師
																								</MenuItem>
																							</Select>
																						</div>
																					</li>
																					<li>
																						<div className="report-input">
																							<input
																								className="form-control form-control--hg22"
																								type="text"
																								placeholder="鈴木　たくや"
																								value="鈴木　たくや"
																							/>
																						</div>
																						<div className="report-select">
																							<Select
																								className="form-select form-select--bgGray form-select--hg22"
																								value={
																									status
																								}
																								onChange={
																									onChangeStatus
																								}
																							>
																								<MenuItem
																									className="menu-item menu-item--fs12"
																									value={
																										1
																									}
																								>
																									医師
																								</MenuItem>
																							</Select>
																						</div>
																					</li>
																					<li>
																						<div className="report-input">
																							<input
																								className="form-control form-control--hg22"
																								type="text"
																								placeholder="氏名"
																							/>
																						</div>
																						<div className="report-select">
																							<Select
																								className="form-select form-select--bgGray form-select--hg22"
																								value={
																									status
																								}
																								onChange={
																									onChangeStatus
																								}
																							>
																								<MenuItem
																									className="menu-item menu-item--fs12"
																									value={
																										1
																									}
																								>
																									職種
																								</MenuItem>
																							</Select>
																						</div>
																					</li>
																					<li>
																						<div className="report-add">
																							<button className="btn btn--primary btn--hg22">
																								＋　参加者を追加する
																							</button>
																						</div>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																	<div className="institution">
																		<div className="institution-form">
																			<ul>
																				<li>
																					<label className="institution-form__label">
																						医療機関
																					</label>
																					<div className="institution-form__control">
																						<input
																							className="form-control form-control--hg22"
																							type="text"
																							placeholder="医療機関名"
																						/>
																					</div>
																				</li>
																				<li>
																					<label className="institution-form__label">
																						医師名
																					</label>
																					<div className="institution-form__control">
																						<input
																							className="form-control form-control--hg22"
																							type="text"
																							placeholder="医師名"
																						/>
																					</div>
																				</li>
																				<li>
																					<label className="institution-form__label">
																						ケアマネージャー
																					</label>
																					<div className="institution-form__control">
																						<input
																							className="form-control form-control--hg22"
																							type="text"
																							placeholder="山田 花子"
																						/>
																					</div>
																				</li>
																			</ul>
																		</div>
																		<div className="institution-text">
																			<ul>
																				<li>
																					介護度：要介護3
																				</li>
																				<li>
																					医師からの情報：利尿剤を調整中です
																				</li>
																				<li>
																					目　標：正確な内服管理を行い、心不全の増悪を起こさない
																				</li>
																				<li>
																					問題点：内服忘れあり
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
																{/*  */}
																<div className="question">
																	<div className="question-list">
																		<div className="question-title">
																			<h2 className="question-text">
																				<span>
																					Q1.次に該当するものがあれば教えてください。
																				</span>
																			</h2>
																		</div>
																		<div className="question-form">
																			<p className="question-multiple">
																				複数選択可
																			</p>
																			<ul>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							小さい文字が読みづらい
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							小さな声が聴きにくい
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							手が震えて文字が書きにくい
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							小さな袋や包装などを開けにくい
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							錠剤がのみづらい又は飲めない
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							粉薬が飲みづらい
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							移動に介助が必要
																						</span>
																					</label>
																				</li>
																				<li className="question-other">
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							その他
																						</span>
																					</label>
																					<div className="question-control">
																						<input
																							className="form-control"
																							type="text"
																						/>
																					</div>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="question-list">
																		<div className="question-title">
																			<h2 className="question-text">
																				<span>
																					Q2.お薬を飲む上でご希望があればお教えください。
																				</span>
																			</h2>
																		</div>
																		<div className="question-title question-title--green">
																			<span className="question-item">
																				<img
																					src={
																						Icon.IconUnion
																					}
																					alt=""
																				/>
																			</span>
																			<h2 className="question-text">
																				<span>
																					Q2.お薬を飲む上でご希望があればお教えください。
																				</span>
																			</h2>
																		</div>
																		<div className="question-form">
																			<ul>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							薬物治療への希望
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							お薬を飲む上でご希望があればお教えください。
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							特にない
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							薬の数は極力減らしたい
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							出来れば薬は飲みたくない
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							飲む回数を減らしたい
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							早く症状を和らげたい
																						</span>
																					</label>
																				</li>
																				<li className="question-other">
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							その他
																						</span>
																					</label>
																					<div className="question-control">
																						<input
																							className="form-control"
																							type="text"
																						/>
																					</div>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="question-list">
																		<div className="question-title">
																			<h2 className="question-text">
																				<span>
																					Q3.調剤についてのご希望があればお教えください。
																				</span>
																			</h2>
																		</div>
																		<div className="question-title question-title--orange">
																			<span className="question-item">
																				<img
																					src={
																						Icon.IconAlert
																					}
																					alt=""
																				/>
																			</span>
																			<h2 className="question-text">
																				<span>
																					Q3.調剤についてのご希望があればお教えください。
																				</span>
																			</h2>
																		</div>
																		<div className="question-form">
																			<ul>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							錠剤の場合は粉砕または粉や水の薬を希望
																						</span>
																					</label>
																				</li>
																				<li>
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							一包化（1回に飲む薬をまとめて包装）
																						</span>
																					</label>
																				</li>
																				<li className="question-other">
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							その他
																						</span>
																					</label>
																					<div className="question-control">
																						<input
																							className="form-control"
																							type="text"
																						/>
																					</div>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="question-list">
																		<div className="question-title">
																			<h2 className="question-text">
																				<span>
																					Q4.現在症状はございますか？
																				</span>
																			</h2>
																		</div>
																		<div className="question-choose">
																			<div className="choose-list choose-list--change">
																				<div className="choose-list__check">
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							特になし
																						</span>
																					</label>
																				</div>
																			</div>
																			<div className="choose-list">
																				<div className="choose-list__check">
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							むくみ
																						</span>
																					</label>
																				</div>
																				<div className="choose-list__control">
																					<ul>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											数日前
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									から
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											昼夜関係なく
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									に
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											ずっと
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									続く
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<span className="choose-form__label">
																									頻度
																								</span>
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											毎日
																										</MenuItem>
																									</Select>
																								</div>
																							</div>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div className="choose-list">
																				<div className="choose-list__check">
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							動悸
																						</span>
																					</label>
																				</div>
																				<div className="choose-list__control">
																					<ul>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											数日前
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									から
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											昼夜関係なく
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									に
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											ずっと
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									続く
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<span className="choose-form__label">
																									頻度
																								</span>
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											毎日
																										</MenuItem>
																									</Select>
																								</div>
																							</div>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div className="choose-list">
																				<div className="choose-list__check">
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							めまい
																						</span>
																					</label>
																				</div>
																				<div className="choose-list__control">
																					<ul>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											数日前
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									から
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											昼夜関係なく
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									に
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											ずっと
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									続く
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<span className="choose-form__label">
																									頻度
																								</span>
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											毎日
																										</MenuItem>
																									</Select>
																								</div>
																							</div>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div className="choose-list">
																				<div className="choose-list__check">
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							ふらつき
																						</span>
																					</label>
																				</div>
																				<div className="choose-list__control">
																					<ul>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											数日前
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									から
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											昼夜関係なく
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									に
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											ずっと
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									続く
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<span className="choose-form__label">
																									頻度
																								</span>
																								<div className="choose-form__select">
																									<Select
																										className="form-select form-select--bgGray form-select--hg16"
																										value={
																											status
																										}
																										onChange={
																											onChangeStatus
																										}
																									>
																										<MenuItem
																											className="menu-item menu-item--fs12"
																											value={
																												10
																											}
																										>
																											毎日
																										</MenuItem>
																									</Select>
																								</div>
																							</div>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div className="add-symptoms">
																				<button
																					className="btn btn--primary btn--hg32"
																					type="button"
																				>
																					＋　症状を追加する
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
															</Scrollbars>
														</div>
														<div className="sum__footer">
															<div className="sum-btn">
																<div className="sum-back">
																	<span>
																		<img
																			src={
																				Icon.IconAngleLeft01
																			}
																			alt=""
																		/>
																	</span>
																	戻る
																</div>
																<div className="unentered-data">
																	<span>
																		<img
																			src={
																				Icon.IconAlert
																			}
																			alt=""
																		/>
																	</span>
																	未入力の項目があります
																</div>
																<button className="btn btn--warning btn--hg32">
																	登録
																</button>
															</div>
														</div>
													</div>
												</div>
											</TabPanel>
											<TabPanel
												className="content-tabs__pane"
												value="2"
											>
												<TestResult />
											</TabPanel>
											<TabPanel
												className="content-tabs__pane"
												value="3"
											>
												<AuditResult />
											</TabPanel>
											<TabPanel
												className="content-tabs__pane"
												value="4"
											>
												<QuestionInquiry />
											</TabPanel>
											<TabPanel
												className="content-tabs__pane"
												value="5"
											>
												<MedicationRecord />
											</TabPanel>
											<TabPanel
												className="content-tabs__pane"
												value="6"
											>
												<TracingReport />
											</TabPanel>
										</div>
									</TabContext>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PreScriptionBusinessScreen;

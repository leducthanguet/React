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
																		???????????????
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		??????????????????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		???
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		????????????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		????????????/VC
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		??????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		????????????
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		?????????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		????????????????????????
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
																		????????????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		??????????????????
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		??????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		??????
																	</p>
																</div>
															</li>
															<li className="pre-blue pre-blue--has">
																<div className="pre-text__label">
																	<span className="pre-name">
																		????????????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		???????????????
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		????????????
																	</span>
																</div>
																<div className="pre-text__w100 pre-text__w100--pl">
																	<p className="pre-element">
																		????????????????????????????????????
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
																		???????????????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		????????????
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		????????????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		??????
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		???????????????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		????????????/?????????
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		??????????????????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		??????
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		???????????????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		?????????
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		????????????????????????
																	</span>
																</div>
																<div className="pre-text__cmt">
																	<p className="pre-element">
																		????????????
																	</p>
																</div>
															</li>
															<li className="pre-blue">
																<div className="pre-text__label">
																	<span className="pre-name">
																		????????????
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
												<Tab label="??????" value="1" />
												<Tab
													label="?????????????????????"
													value="2"
												/>
												<Tab label="?????????" value="3" />
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
																						2022???5???12???
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
																												??????????????????OD???5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99???
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												????????????????????????OD???15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1???
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										1
																									</div>
																									<p className="list-text">
																										1???1???
																										/
																										?????????
																										/
																										28??????
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												??????????????????OD???5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99???
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												????????????????????????OD???15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1???
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										2
																									</div>
																									<p className="list-text">
																										1???1???
																										/
																										?????????
																										/
																										28??????
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
																										?????????????????????????????????????????????????????????????????????????????????????????????
																									</p>
																								</div>
																							</li>
																							<li>
																								<span className="result-label">
																									O
																								</span>
																								<div className="result-info">
																									<p>
																										??????(128/76)/?????????:eGFR(66)???CK:140
																									</p>
																									<p>
																										T-CHO:160???TG:56
																										?????????????????????
																									</p>
																								</div>
																							</li>
																							<li>
																								<span className="result-label">
																									S
																								</span>
																								<div className="result-info">
																									<p>
																										????????????????????????????????????????????????????????????????????????????????????CK??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
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
																					2022???5???12???
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
																													??????????????????OD???5mg
																												</span>
																											</div>
																											<div className="drug-wrap__tablets">
																												99???
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												????????????????????????OD???15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1???
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										1
																									</div>
																									<p className="list-text">
																										1???1???
																										/
																										?????????
																										/
																										28??????
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug drug--bg">
																										<div className="drug-wrap">
																											<div className="drug-wrap__item">
																												<span className="drug-exclamation">
																													???
																												</span>
																											</div>
																											<div className="drug-wrap__title">
																												??????????????????OD???5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99???
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												????????????????????????OD???15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1???
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										2
																									</div>
																									<p className="list-text">
																										1???1???
																										/
																										?????????
																										/
																										28??????
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug drug--color">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												??????????????????OD???5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99???
																											</div>
																										</div>
																									</div>
																									<div className="drug drug--color">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												????????????????????????OD???15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1???
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										3
																									</div>
																									<p className="list-text">
																										1???1???
																										/
																										?????????
																										/
																										28??????
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												??????????????????OD???5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99???
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
																													???
																												</span>
																											</div>
																											<div className="drug-wrap__title">
																												????????????????????????OD???15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1???
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										4
																									</div>
																									<p className="list-text">
																										1???1???
																										/
																										?????????
																										/
																										28??????
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												??????????????????OD???5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99???
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
																												????????????????????????OD???15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1???
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										5
																									</div>
																									<p className="list-text">
																										1???1???
																										/
																										?????????
																										/
																										28??????
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												??????????????????OD???5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99???
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												????????????????????????OD???15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1???
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										6
																									</div>
																									<p className="list-text">
																										1???1???
																										/
																										?????????
																										/
																										28??????
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												??????????????????OD???5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99???
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												????????????????????????OD???15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1???
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										7
																									</div>
																									<p className="list-text">
																										1???1???
																										/
																										?????????
																										/
																										28??????
																									</p>
																								</div>
																							</li>
																							<li>
																								<div className="list-drug__info">
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												??????????????????OD???5mg
																											</div>
																											<div className="drug-wrap__tablets">
																												99???
																											</div>
																										</div>
																									</div>
																									<div className="drug">
																										<div className="drug-wrap">
																											<div className="drug-wrap__title">
																												????????????????????????OD???15mg
																											</div>
																											<div className="drug-wrap__tablets">
																												1???
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="list-drug__mask">
																									<div className="list-number font-Roboto">
																										8
																									</div>
																									<p className="list-text">
																										1???1???
																										/
																										?????????
																										/
																										28??????
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
													label="???????????????"
													value="1"
												/>
												<Tab label="?????????" value="2" />
												<Tab
													label="????????????"
													value="3"
												/>
												<Tab
													label="????????????"
													value="4"
												/>
												<Tab
													label="????????????"
													value="5"
												/>
												<Tab
													label="??????????????????????????????"
													value="6"
												/>
											</TabList>
										</div>
										<div className="content-tabs">
											<TabPanel
												className="content-tabs__pane"
												value="1"
											>
												{/* 5.???????????????????????????????????????????????? */}
												{/* <div className="hearing-box">
                                                <div className="sum">
                                                    <div className="sum__content">
                                                        <Scrollbars className="scroll-sum">
                                                            <div className="hearing">
                                                                <div  className="hearing-title">
                                                                    <h2 className="title"><span>??????????????????????????????????????????????????????</span></h2>
                                                                </div>
                                                                <div className="hearing-note">
                                                                    <p className="hearing-note__text">?????????????????????????????????????????????????????????????????????</p>
                                                                    <p className="hearing-note__text">????????????????????????????????????????????????????????????????????????????????????</p>
                                                                    <p className="hearing-note__text">?????????????????????????????????????????????????????????????????????????????????????????????</p>
                                                                </div>
                                                                <div className="hearing-drug">
                                                                    <ul>
                                                                        <li><button className="btn btn--primary btn--hg32" type="button">???????????????</button></li>
                                                                        <li><button className="btn btn--primary btn--hg32" type="button">??????????????????</button></li>
                                                                        <li><button className="btn btn--outline-primary btn--hg32" type="button">????????????</button></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="hearing-items">
                                                                    <p className="hearing-items__confir">????????????????????????????????????</p>
                                                                    <div className="hearing-items__label">
                                                                        <ul>
                                                                            <li>?????????</li>
                                                                            <li>??????</li>
                                                                            <li>?????????</li>
                                                                            <li>??????</li>
                                                                            <li>????????????</li>
                                                                        </ul>
                                                                    </div>
                                                                    <p className="hearing-items__confir">????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                                                </div>
                                                            </div>
                                                        </Scrollbars>
                                                    </div>
                                                    <div className="sum__footer">
                                                        <div className="sum-btn">
                                                            <button className="btn btn--warning btn--hg32">??????</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

												{/* 6.??????????????????????????????????????????????????????????????? */}
												{/* <div className="hearing-box">
                                                <div className="sum">
                                                    <div className="sum__content">
                                                        <Scrollbars className="scroll-sum">
                                                            <div className="hearing">
                                                                <div  className="hearing-title">
                                                                    <h2 className="title"><span>????????????????????????????????????????????????</span></h2>
                                                                </div>
                                                                <div className="hearing-patient">
                                                                    <p className="entered">???????????????????????????</p>
                                                                    <ul>
                                                                        <li>
                                                                            <div className="patient-title">
                                                                                <p className="patient-text"><span>QR????????????????????????</span></p>
                                                                            </div>
                                                                            <div className="patient-btn">
                                                                                <button className="btn btn--primary btn--hg32" type="button">QR????????????????????????</button>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="patient-title">
                                                                                <p className="patient-text"><span>SMS????????????</span></p>
                                                                            </div>
                                                                            <div className="patient-control">
                                                                                <p className="patient-control__Please">???????????????????????????????????????</p>
                                                                                <input className="form-control form-control--hg32" type="text" placeholder="080-0000-0000" />
                                                                                <button className="btn btn--primary btn--hg32" type="button">??????</button>
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
                                                                                    <p className="typing-text">?????????</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="typing-box">
                                                                                <div className="typing-content">
                                                                                    <p className="typing-ok">OK!</p>
                                                                                    <p className="typing-text">????????????</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="please-proceed">???????????????????????????????????????????????????????????????</div>
                                                            </div>
                                                        </Scrollbars>
                                                    </div>
                                                    <div className="sum__footer">
                                                        <div className="sum-btn">
                                                            <div className="sum-back">
                                                                <span><img src={Icon.IconAngleLeft01} alt="" /></span>??????
                                                            </div>
                                                            <button className="btn btn--warning btn--hg32">??????</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

												{/* 8.????????????????????????????????????????????? */}
												<div className="hearing-box">
													<div className="sum">
														<div className="sum__content">
															<Scrollbars className="scroll-sum">
																{/* 37.????????????????????????????????????????????? */}
																<div className="report">
																	<div className="report-group">
																		<div className="report-writing">
																			<div className="report-picker">
																				<label className="report-picker__label">
																					????????????
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
																					???????????????
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
																							????????????
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
																							???????????????
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
																							????????????????????????
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
																							???????????????
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
																							???????????????
																						</span>
																					</label>
																				</li>
																				<li>
																					???
																					<label className="custom-control custom-checkbox">
																						<input
																							className="custom-control-input"
																							type="checkbox"
																						/>
																						<span className="custom-control-indicator"></span>
																						<span className="custom-control-description">
																							???????????????
																						</span>
																					</label>{" "}
																					???
																				</li>
																			</ul>
																		</div>
																		<div className="report-part">
																			<label className="report-part__label">
																				?????????????????????????????????????????????
																			</label>
																			<div className="report-part__control">
																				<ul>
																					<li>
																						<div className="report-input">
																							<input
																								className="form-control form-control--hg22"
																								type="text"
																								placeholder="??????????????????"
																								value="??????????????????"
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
																									??????
																								</MenuItem>
																							</Select>
																						</div>
																					</li>
																					<li>
																						<div className="report-input">
																							<input
																								className="form-control form-control--hg22"
																								type="text"
																								placeholder="??????????????????"
																								value="??????????????????"
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
																									??????
																								</MenuItem>
																							</Select>
																						</div>
																					</li>
																					<li>
																						<div className="report-input">
																							<input
																								className="form-control form-control--hg22"
																								type="text"
																								placeholder="??????"
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
																									??????
																								</MenuItem>
																							</Select>
																						</div>
																					</li>
																					<li>
																						<div className="report-add">
																							<button className="btn btn--primary btn--hg22">
																								??????????????????????????????
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
																						????????????
																					</label>
																					<div className="institution-form__control">
																						<input
																							className="form-control form-control--hg22"
																							type="text"
																							placeholder="???????????????"
																						/>
																					</div>
																				</li>
																				<li>
																					<label className="institution-form__label">
																						?????????
																					</label>
																					<div className="institution-form__control">
																						<input
																							className="form-control form-control--hg22"
																							type="text"
																							placeholder="?????????"
																						/>
																					</div>
																				</li>
																				<li>
																					<label className="institution-form__label">
																						????????????????????????
																					</label>
																					<div className="institution-form__control">
																						<input
																							className="form-control form-control--hg22"
																							type="text"
																							placeholder="?????? ??????"
																						/>
																					</div>
																				</li>
																			</ul>
																		</div>
																		<div className="institution-text">
																			<ul>
																				<li>
																					?????????????????????3
																				</li>
																				<li>
																					???????????????????????????????????????????????????
																				</li>
																				<li>
																					?????????????????????????????????????????????????????????????????????????????????
																				</li>
																				<li>
																					??????????????????????????????
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
																					Q1.????????????????????????????????????????????????????????????
																				</span>
																			</h2>
																		</div>
																		<div className="question-form">
																			<p className="question-multiple">
																				???????????????
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
																							?????????????????????????????????
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
																							??????????????????????????????
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
																							???????????????????????????????????????
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
																							?????????????????????????????????????????????
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
																							??????????????????????????????????????????
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
																							????????????????????????
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
																							????????????????????????
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
																							?????????
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
																					Q2.??????????????????????????????????????????????????????????????????
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
																					Q2.??????????????????????????????????????????????????????????????????
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
																							????????????????????????
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
																							??????????????????????????????????????????????????????????????????
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
																							????????????
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
																							?????????????????????????????????
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
																							????????????????????????????????????
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
																							??????????????????????????????
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
																							??????????????????????????????
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
																							?????????
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
																					Q3.??????????????????????????????????????????????????????????????????
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
																					Q3.??????????????????????????????????????????????????????????????????
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
																							?????????????????????????????????????????????????????????
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
																							????????????1???????????????????????????????????????
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
																							?????????
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
																					Q4.????????????????????????????????????
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
																							????????????
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
																							?????????
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
																											?????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									??????
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
																											??????????????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									???
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
																											?????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									??????
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<span className="choose-form__label">
																									??????
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
																											??????
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
																							??????
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
																											?????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									??????
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
																											??????????????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									???
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
																											?????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									??????
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<span className="choose-form__label">
																									??????
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
																											??????
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
																							?????????
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
																											?????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									??????
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
																											??????????????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									???
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
																											?????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									??????
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<span className="choose-form__label">
																									??????
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
																											??????
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
																							????????????
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
																											?????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									??????
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
																											??????????????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									???
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
																											?????????
																										</MenuItem>
																									</Select>
																								</div>
																								<span className="choose-form__label">
																									??????
																								</span>
																							</div>
																						</li>
																						<li>
																							<div className="choose-form">
																								<span className="choose-form__label">
																									??????
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
																											??????
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
																					???????????????????????????
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
																	??????
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
																	?????????????????????????????????
																</div>
																<button className="btn btn--warning btn--hg32">
																	??????
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

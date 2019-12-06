//@flow
import React from 'react';
import styled from 'styled-components';
import Countup from 'react-countup';
import Makestartext from './makestartext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons"; 
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";

const CountupStyled = styled.div`
    .count-wrapper{
        display:flex;
        flex-direction: row;
        align-items:center;
        // justify-content:center;
        justify-content: space-around;
        background-color:white;
        padding: 50px 375px;
        padding-bottom:200px;
    }
    .count-title{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        text-align:center;
        background-color:white;
        padding-left:25px;
        border-top:1px solid #f2f2f2;
        padding-top: 200px;
    }
    .count-box{
        text-align:center;
    }

    .count-box:first-child{
        margin-left:0;
    }
    .count-box h1{
        font-size:45px;
    }
    .icon{
        color: orange;
    }
`;

const Count = () => (
        <CountupStyled>

            <div className="count-title">
                <h1>숫자로 보는 <Makestartext/></h1>
                <small>2018.06.21 기준</small>
            </div>
            <div className="count-wrapper">
                    <div className="count-box">
                        <h1><Countup 
                            end={2015.12}
                            duration={2}
                            decimals={2}></Countup></h1>
                        <p>Service launch</p>
                        <FontAwesomeIcon icon={faCamera} size="4x" className="icon"/>
                    </div>
                    <div className="count-box">
                        <h1><Countup 
                            end={202}
                            duration={2}></Countup></h1>
                        <p>방문 국가</p>
                       <FontAwesomeIcon icon={faGlobeAmericas} size="4x" className="icon"></FontAwesomeIcon>
                    </div>
                    <div className="count-box">
                        <h1><Countup 
                            end={92}
                            duration={2}></Countup></h1>
                        <p>구매 국가</p>
                        <FontAwesomeIcon icon={faMoneyBill} size="4x" className="icon"></FontAwesomeIcon>
                    </div>
                    <div className="count-box">
                        <h1><Countup 
                            end={328}
                            duration={2}
                            suffix="%"></Countup></h1>
                        <p>평균 프로젝트 달성률</p> 
                        <FontAwesomeIcon icon={faChartLine} size="4x" className="icon"></FontAwesomeIcon>
                    </div>
                    <div className="count-box">
                        <h1><Countup 
                            end={331}
                            duration={2}></Countup></h1>
                        <p>참여 스타</p>
                        <FontAwesomeIcon icon={faStar} size="4x" className="icon"></FontAwesomeIcon>
                    </div>
                </div>
        </CountupStyled>
);
export default Count;
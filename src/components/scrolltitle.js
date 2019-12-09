// @flow
import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';


const TitleStyled = styled.div`

    .section {
        height: 20vh;
        position:absoulte;
    }
    .title-wrap{
        position:relative;
        height: 69vh;
        margin-left:-15px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .devs{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        align-items: center;
        height:250px;                
        & li {
            font-size:300px;
            list-style:none;
            opacity: 1;
            font-weight:bold;
            
        }
        
    }
    .Controller-box{
        position:absolute;
        top: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        animation: makestarText 1.5s ;
        animation-fill-mode: both;
        // animation-delay: 1.4s;
        
    }
    @keyframes makestarText {
        from{
            transform: translateY(0%);
        }
        to{
            transform: translateY(-200%);
        }
    }


@media(max-width:1440px){
  .devs li{
      font-size:240px;
  }

  .Controller-box{
    top:80%;
  }
}

@media(max-width:1024px){
    .devs li{
        font-size:160px;
    }

    .Controller-box{
        top:95%;
    }
  }

  @media(max-width:768px){
    .devs li{
        font-size:120px;
    }

    .Controller-box{
        top:110%;
    }
  }
`;


const Scrolltitle = () => (
    
            <TitleStyled>
                <div className="title-wrap">
                    <div className="Controller-box">
                    <Controller>
                        <Scene
                            duration='100%'
                            offset={100}
                            indicators="1"
                            triggerHook="onLeave"
                        >
                            <Tween
                                wrapper={<ul className="devs" />}
                                staggerFrom={{
                                    y: '100%'
                                }}
                                staggerTo={{
                                    y: '-100%'
                                }}
                                stagger={0.05}
                                
                            >
                                <li><font color="#e8351d">M</font></li>
                            </Tween>
                            </Scene>
                            <Scene
                            duration='100%'
                            offset={152}
                            indicators="1"
                            triggerHook="onLeave"
                            
                           
                        >
                            <Tween
                                wrapper={<ul className="devs" />}
                                staggerFrom={{
                                    y: '100%'
                                }}
                                staggerTo={{
                                    y: '-100%'
                                }}
                                stagger={0.05}
                            >
                                <li><font color="#e17d37">A</font></li>
                            </Tween>
                            </Scene>
                            <Scene
                           duration='100%'
                           offset={204}
                           indicators="1"
                           triggerHook="onLeave"
                           
                           
                        >
                            <Tween
                                wrapper={<ul className="devs" />}
                                staggerFrom={{
                                    y: '100%'
                                }}
                                staggerTo={{
                                    y: '-100%'
                                }}
                                stagger={0.05}
                            >
                                <li><font color="#00a49d">K</font></li>
                            </Tween>
                            </Scene>
                            <Scene
                            duration='100%'
                            offset={256}
                            indicators="1"
                            triggerHook="onLeave"
                            
                           
                        >
                            <Tween
                                wrapper={<ul className="devs" />}
                                staggerFrom={{
                                    y: '100%'
                                }}
                                staggerTo={{
                                    y: '-100%'
                                }}
                                stagger={0.05}
                            >
                                <li><font color="#006a8b">E</font></li>
                            </Tween>
                            </Scene>
                            <Scene
                            duration='100%'
                            offset={308}
                            indicators="1"
                            triggerHook="onLeave"
                            
                           
                        >
                            <Tween
                                wrapper={<ul className="devs" />}
                                staggerFrom={{
                                    y: '100%'
                                }}
                                staggerTo={{
                                    y: '-100%'
                                }}
                                stagger={0.05}
                            >
                                <li><font color="#e8351d">S</font></li>
                            </Tween>
                            </Scene>
                            <Scene
                            duration='100%'
                            offset={360}
                            indicators="1"
                            triggerHook="onLeave"
                            
                           
                        >
                            <Tween
                                wrapper={<ul className="devs" />}
                                staggerFrom={{
                                    y: '100%'
                                }}
                                staggerTo={{
                                    y: '-100%'
                                }}
                                stagger={0.05}
                            >
                                <li><font color="#e8351d">T</font></li>
                            </Tween>
                            </Scene>
                            <Scene
                            duration='100%'
                            offset={412}
                            indicators="1"
                            triggerHook="onLeave"
                            
                           
                        >
                            <Tween
                                wrapper={<ul className="devs" />}
                                staggerFrom={{
                                    y: '100%'
                                }}
                                staggerTo={{
                                    y: '-100%'
                                }}
                                stagger={0.05}
                            >
                                <li><font color="#e8351d">A</font></li>
                            </Tween>
                            </Scene>
                            <Scene
                            duration='100%'
                            offset={464}
                            indicators="1"
                            triggerHook="onLeave"
                            
                           
                        >
                            <Tween
                                wrapper={<ul className="devs" />}
                                staggerFrom={{
                                    y: '100%'
                                }}
                                staggerTo={{
                                    y: '-100%'
                                }}
                                stagger={0.05}
                            >
                                <li><font color="#e8351d">R</font></li>
                            </Tween>
                            </Scene>
                        </Controller>
                    </div>
                    </div>
                    <div className="section" />
                    <div className="section" />  
                                
                                
                                
                                
                                
                                
                                
                                
            </TitleStyled>
        );

export default Scrolltitle;
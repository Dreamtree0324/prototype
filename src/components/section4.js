import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

function FourthSection() {
    return (
        <div id="section4" className="section4">
            <div id="color-text" className="color-text">
            <p id="counter">안녕하세요<br></br>테스트입니다.</p>
            <Controller>
                <Scene classToggle="text-visible"
                       pin="#section4" 
                       offset={0}
                       duration={500}
                       triggerElement="#section4"
                       triggerHook="onLeave" >
                    
                    {(progress, event) => (
                        <p className="text-4 hidden">테스트내용1</p>
                    )}
                </Scene>

                <Scene classToggle="text-visible"
                       pin="#section4"
                       duration={500}
                       offset={500}
                       triggerElement="#section4"
                       triggerHook="onLeave" >

                    {(progress, event) => (
                        <p className="text-4 hidden">테스트내용2</p>
                    )}
                </Scene>

                <Scene classToggle="text-visible"
                       pin="#section4"
                       duration={500}
                       offset={1000}
                       triggerElement="#section4"
                       triggerHook="onLeave" >

                    {(progress, event) => (
                        <p className="text-4 hidden">테스트내용3</p>
                    )}
                </Scene>

                <Scene classToggle="text-visible"
                       pin="#section4"
                       duration={500}
                       offset={1500}
                       triggerElement="#section4"
                       triggerHook="onLeave" >

                    {(progress, event) => (
                        <p className="text-4 hidden">테스트내용4</p>
                    )}
                </Scene>

                <Scene classToggle="text-visible"
                       pin="#section4"
                       duration={500}
                       offset={2000}
                       triggerElement="#section4"
                       triggerHook="onLeave" >

                    {(progress, event) => (
                        <p className="text-4 hidden">테스트내용5</p>
                    )}
                </Scene>

                <Scene classToggle="text-visible"
                       offset={2500}
                       triggerElement="#section4"
                       triggerHook="onLeave" >

                    {(progress, event) => (
                        <p className="text-4 hidden">테스트내용6</p>
                    )}
                </Scene>
            </Controller>
            </div>
            <div id="space"></div>
        </div>
    )
}

export default FourthSection
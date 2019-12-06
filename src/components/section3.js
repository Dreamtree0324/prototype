import React from 'react';
import Card from './card';

function ThirdSection(){
    return(
        <div id="section3">
            <div id="itemList">
                <div data-aos="fade-left" data-aos-duration="1000">
                    <Card cardTitle="Hello?1"/>
                    <Card cardTitle="Hello?2"/>
                    <Card cardTitle="Hello?3"/>
                    <Card cardTitle="Hello?4"/>
                </div>
                
                <div data-aos="fade-right" data-aos-duration="1000">
                    <Card cardLink="https://www.naver.com"/>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default ThirdSection;
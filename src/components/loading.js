// @flow
import React from 'react';
import styled from 'styled-components';

const LoadingStyled = styled.div`
.loading{
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 100%;
    z-index: 1000;
}
.loading i{
    display: block;
    position: absolute;
    animation: loading 1s ;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.loading i:first-child{
    background: #8f38ff;
    z-index: 1;
    animation-delay: 0.3s;
}
.loading i:nth-child(2){
    background: #ff4c38;
    z-index: 2;
    animation-delay: 0.6s;
}
.loading i:nth-child(3){
    background: #ffd229;;
    z-index: 3;
    animation-delay: 0.4s;
}
@keyframes loading{
    from{
        transform: translateY(0%);
    }
    to{
        transform: translateY(-200%);
    }
}
`;



const Loading = ({onAnimationEnd}) => {
    return (<LoadingStyled onAnimationEnd={ onAnimationEnd}>
        <div className="loading">
            <i></i>
            <i></i>
            <i></i>
        </div>
    </LoadingStyled>)
}
export default Loading;


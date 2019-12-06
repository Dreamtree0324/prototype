import React, {Component} from 'react';
import Scrolltitle from './components/scrolltitle';
import Loading from './components/loading';
import Count from './components/countup';
import FirstSection from './components/section1';
import SecondSection from './components/section2';
import ThirdSection from './components/section3';
import FourthSection from './components/section4';
import FifthSection from './components/section5';
import './components/cursor';
import './App.css';
import './script';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      isAnimationEnd:false
    }
  }

  onAnimationEnd =  () => {
    this.setState({
      isAnimationEnd:true
    });
  }

render(){
  if( !this.state.isAnimationEnd ){
    return <Loading onAnimationEnd={this.onAnimationEnd}/>
  }

    return (
      <div>
         <Scrolltitle/>
         <Count/>
         <FirstSection/>
         <SecondSection/>
         <ThirdSection/>
         <FourthSection/>
         <FifthSection/>
       </div>)

}


  
}

export default App;

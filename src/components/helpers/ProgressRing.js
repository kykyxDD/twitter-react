import React, { Component } from 'react';

export default class ProgressRing extends Component {
  constructor(props) {
    super(props);
    
    const { radius, stroke } = this.props;
    
    this.normalizedRadius = radius - stroke;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
    this.state = {
      style: this.getStyle(props)
    }
  }

  getStyle (props) {
    const { progress } = props;
    return { strokeDashoffset: this.circumference - progress / 100 * this.circumference}
  }

  componentDidUpdate (props, state) {
    if(props !== this.props){
      this.setState({style: this.getStyle(props)})
    }
  }
  
  render() {
    const { radius, stroke, colorStroke  } = this.props;
  
    return (
      <svg
        height={radius * 2}
        width={radius * 2}
       >
       <circle
          stroke="#ccd6dd"
          fill="transparent"
          strokeWidth={ 1 }
          // strokeDasharray={ this.circumference + ' ' + this.circumference }
          // style={ { strokeDashoffset } }
          // strokeWidth={ stroke }
          r={ radius-2 }
          cx={ radius }
          cy={ radius }
         />
        <circle
          stroke={colorStroke }
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ this.circumference + ' ' + this.circumference }
          style={ this.state.style } 
          // strokeWidth={ stroke }
          r={ this.normalizedRadius }
          cx={ radius }
          cy={ radius }
         />
         
      </svg>
    );
  }
}

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       progress: 0
//     };
//   }
  
//   componentDidMount() {
//     // emulating progress
//     const interval = setInterval(() => {
//       this.setState({ progress: this.state.progress + 10 });
//       if (this.state.progress === 100)
//         clearInterval(interval);
//     }, 1000);
//   }
  
//   render() {
//     return (
//       <ProgressRing
//         radius={ 60 }
//         stroke={ 4 }
//         progress={ this.state.progress }
//       />
//     );
//   }
// }
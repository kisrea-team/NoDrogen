'use client'
import React from 'react';
// const style = {
//    time: {
//       backgroundColor: 'rgba(255,255,255,0.2)',
//       color: 'var(--width)',
//       borderRadius: 10,
//       width: 'fit-content',
//       padding: '0 10px',
//       textAlign: 'right',
//    }
// }
class GreetingMessage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         message: ''
      }
   }

   componentDidMount() {
      this.updateGreetingMessage();
      // 每隔一分钟检查一次时间并更新消息
      this.interval = setInterval(this.updateGreetingMessage, 60000);
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }

   updateGreetingMessage = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      let message = '';

      if (currentHour >= 0 && currentHour < 8) {
         message = '早上好！';
      } else if (currentHour >= 8 && currentHour < 12) {
         message = '上午好！';
      }
      else if (currentHour >= 12 && currentHour < 18) {
         message = '下午好！';
      } else if (currentHour >= 18 && currentHour < 23) {
         message = '晚上好！';
      } else {
         message = '晚安！';
      }

      // 在 render() 函数中更新 this.state
      this.setState({ message });
   };

   render() {
      return (
         <div>
            <p className='time'>{this.state.message}</p>
         </div>
      );
   }
}

export default GreetingMessage;

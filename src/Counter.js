/** @format */

import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//     this.reset = this.reset.bind(this);
//   }

//   increment() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   decrement() {
//     this.setState({ count: this.state.count - 1 });
//   }

//   reset() {
//     this.setState({ count: 0 });
//   }

//   render() {
//     const { count } = this.state;
//     return (
//       <div className="Counter">
//         <p className="count">{count}</p>
//         <section className="controls">
//           <button onClick={this.increment}>Increment</button>
//           <button onClick={this.decrement}>Decrement</button>
//           <button onClick={this.reset}>Reset</button>
//         </section>
//       </div>
//     );
//   }
// }

// export default Counter;

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.increment = this.increment.bind(this);
//   }

//   increment() {
//     this.setState({ count: this.state.count + 1 });
//     this.setState({ count: this.state.count + 1 });
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     const { count } = this.state;
//     return (
//       <div className="Counter">
//         <p className="count">{count}</p>
//         <section className="controls">
//           <button onClick={this.increment}>Increment</button>
//         </section>
//       </div>
//     );
//   }
// }

// //Why the answer is coming 1? Because we are effectively queuing upstate changes,as we set it three times,set it is 0 plus 1,set it is 0 plus 1,set it is 0 plus 1,
// //React will batch them up, figure out the result and then efficiently make that change.
// //It's like whatever happens last, wins

// export default Counter;

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.increment = this.increment.bind(this);
//   }

//   increment() {
//     this.setState((state) => {
//       if (state.count >= 5) return;
//       return { count: state.count + 1 };
//     });

//     //We can pass a function to in this.setState
//   }

//   render() {
//     const { count } = this.state;
//     return (
//       <div className="Counter">
//         <p className="count">{count}</p>
//         <section className="controls">
//           <button onClick={this.increment}>Increment</button>
//         </section>
//       </div>
//     );
//   }
// }

// export default Counter;

// const increment = (state, props) => {
//     const { max, step } = props;
//     if (state.count >= max) return;
//     return { count: state.count + step };
// };

// //We can make an external object and pass it to setState
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.increment = this.increment.bind(this);
//   }

//   increment() {
//     this.setState(increment);
//   }

//   render() {
//     const { count } = this.state;
//     return (
//       <div className="Counter">
//         <p className="count">{count}</p>
//         <section className="controls">
//           <button onClick={this.increment}>Increment</button>
//         </section>
//       </div>
//     );
//   }
// }

// export default Counter;

// //CallBack Function
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.increment = this.increment.bind(this);
//   }

//   increment() {
//     this.setState(
//       (state, props) => {
//         const { max, step } = props;
//         if (state.count >= max) return;
//         return { count: state.count + step };
//       },
//       () => {
//         console.log("After!", this.state);
//       }
//     );
//   }

//   render() {
//     const { count } = this.state;
//     return (
//       <div className="Counter">
//         <p className="count">{count}</p>
//         <section className="controls">
//           <button onClick={this.increment}>Increment</button>
//         </section>
//       </div>
//     );
//   }
// }

// export default Counter;

//SetState and Helper Function
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(
      (state, props) => {
        const { max, step } = props;
        if (state.count >= max) return;
        return { count: state.count + step };
      },
      () => {
        console.log("After!", this.state);
      }
    );
  }

  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
        </section>
      </div>
    );
  }
}

export default Counter;

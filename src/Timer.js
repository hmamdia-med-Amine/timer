import React, { useState, useEffect } from "react";
import Datetime from "react-datetime";
import Times from "./Times";
import "./App.css";
import "react-datetime/css/react-datetime.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Timer() {
  const [numero, setNumero] = useState("****************");
  const [date, setDate] = useState([]);
  const [name, setName] = useState("");

  // const [clock, setClock] = useState({ timeMs: 0, inter: false });
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     clock.inter && setClock({ ...clock, timeMs: clock.timeMs + 1000 });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [{ clock }]);
  // //   setInterval(() => {
  // //     clock.inter && setClock({ ...clock, timeMs: clock.timeMs + 1000 });
  // //   }, 1000);
  // const start = () => {
  //   if (!clock.inter) {
  //     setClock({ ...clock, inter: true });
  //   } else {
  //     setClock({ ...clock, inter: false });
  //   }
  // };
  // const reset = () => {
  //   setClock({ timeMs: 0, inter: false });
  // };
  return (
    <div className="App-header">
      <div className="display">
        <p>{numero}</p>
        <p>{date}</p>
        <p>{name}</p>
      </div>
      <div className="inputet">
        {" "}
        <input
          type="password"
          placeholder="Enter your Number"
          onChange={(e) => {
            setNumero(e.target.value);
          }}
        ></input>
        <input
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <Calendar onChange={(e) => console.log(e)} />
        {/* <Datetime
          dateFormat="MM-YY"
          timeFormat={false}
         onChange={(e)=>{setDate(e)}}
        /> */}
        {/* <input
          type="week"
          placeholder="Enter the validity date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input> */}
      </div>

      {/* <div className="buttons">
        <Times ms={clock.timeMs} />
        <input
          type="button"
          value={clock.inter ? "Pause" : "Start"}
          className="startButton"
          onClick={() => start()}
        />
        <input
          type="button"
          value="Reset"
          className="resetButton"
          onClick={() => reset()}
        />
      </div> */}
    </div>
  );
}
//class Timer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       timeMs: 0,
//       inter: false,
//     };
//     setInterval(() => {
//       this.state.inter &&
//         this.setState({
//           timeMs: this.state.timeMs + 1000,
//         });
//     }, 1000);
//   }
//   start = () => {
//     if (!this.state.inter) {
//       this.setState({
//         inter: true,
//       });
//     } else {
//       this.setState({ inter: false });
//     }
//   };
//   reset = () => {
//     this.setState({ timeMs: 0, inter: false });
//   };
// render() {
//     return (
//       <div className="App-header">
//         <div className="buttons">
//           <Times ms={this.state.timeMs} />
//           <input
//             type="button"
//             value={this.state.inter ? "Pause" : "Start"}
//             className="startButton"
//             onClick={this.start}
//           />
//           <input
//             type="button"
//             value="Reset"
//             className="resetButton"
//             onClick={this.reset}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default Timer;

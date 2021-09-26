import React from "react";
import styles from "./Timer.module.css";

function formatTimeNumber(timeNumber) {
  return timeNumber < 10 ? `0${timeNumber}` : timeNumber;
}

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
    };
  }

  onClickStart = () => {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.secondPlus(), 1);
  };
  secondPlus() {
    this.setState({
      second: ++this.state.second,
    });
    if (this.state.second === 60) {
      this.setState({ second: 0, minute: this.state.minute + 1 });
    }
    if (this.state.minute === 60) {
      this.setState({ minute: 0, hour: this.state.hour + 1 });
    }
    if (this.state.hour === 24) {
      this.setState({ second: 0, minute: 0, hour: 0 });
    }
  }

  onClickStop = () => {
    clearInterval(this.timerID);
  };

  onClickReset = () => {
    clearInterval(this.timerID);
    this.setState({ second: 0, minute: 0, hour: 0 });
  };

  render() {
    return (
      <div className={styles.counter}>
        <p className={styles.counter_number}>
          {formatTimeNumber(this.state.hour)}:
          {formatTimeNumber(this.state.minute)}:
          {formatTimeNumber(this.state.second)}
        </p>
        <div className={styles.all_button}>
          <button className={styles.button__plus} onClick={this.onClickStart}>
            start
          </button>
          <button className={styles.button__res} onClick={this.onClickReset}>
            <p className={styles.res}>reset</p>
          </button>
          <button className={styles.button__minus} onClick={this.onClickStop}>
            stop
          </button>
        </div>
      </div>
    );
  }
}

/*<button onClick={this.onClickMinus}>-</button>
        <p style={{ fontSize: "10" }}>{this.state.count}</p>

        {this.state.count !== 10 ? (
          <button onClick={this.onClickPlus}>+</button>
        ) : null}
/*&#8635;
        {this.state.count === 10 ? <p>достаточно</p> : null}*/

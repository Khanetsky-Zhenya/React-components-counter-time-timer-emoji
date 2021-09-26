import React from "react";
import styles from "./Counter.module.css";
export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  onClickPlus = () => {
    this.setState({ count: ++this.state.count });
  };
  onClickMinus = () => {
    this.setState({ count: --this.state.count });
  };
  onClickReset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div className={styles.counter}>
        <p className={styles.counter_number}>{this.state.count}</p>
        <div className={styles.all_button}>
          <button className={styles.button__plus} onClick={this.onClickPlus}>
            +
          </button>
          <button className={styles.button__res} onClick={this.onClickReset}>
            <p className={styles.res}>&#8635;</p>
          </button>
          <button className={styles.button__minus} onClick={this.onClickMinus}>
            –
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

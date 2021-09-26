import React from "react";
import "./App.css";

import { Counter } from "./components/Counter";
import { Time } from "./components/Time";
import { EmojiList } from "./components/EmojiList";
import Emoji from "./components/EmojiList/Emoji.json";
import { Timer } from "./components/Timer";

function App() {
  return (
    <div className="App">
      <div
        className="counter"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Counter />
        <Counter />
        <Counter />
      </div>
      <div>
        <Time />
      </div>
      <div
        className="timer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Timer />
      </div>
      <div className="emojiList">
        <EmojiList dataEmoji={Emoji} />
      </div>
    </div>
  );
}

export default App;

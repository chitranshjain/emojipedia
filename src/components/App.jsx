import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

function createEmojiCard(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      title={emoji.name}
      detail={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmojiCard)}</dl>
    </div>
  );
}

export default App;

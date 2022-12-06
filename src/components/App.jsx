import React from "react";
import Header from "./Header";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function createEntry(emojiterms) {
  return (
    <Entry
      key={emojiterms.id}
      emoji={emojiterms.emoji}
      name={emojiterms.name}
      description={emojiterms.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;

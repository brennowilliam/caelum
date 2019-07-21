import * as React from "react";

import "./App.css";

// Components
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  return (
    <div className="ui container">
      <SearchBar />
    </div>
  );
};

export default App;

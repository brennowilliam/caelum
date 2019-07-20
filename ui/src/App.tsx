import * as React from "react";

import "./App.css";

// Styles
import colors from "./styles/colors";
const styles = {
  mainText: {
    color: colors.DARK_BLUE
  }
};

const App: React.FC = () => {
  return (
    <div style={styles.mainText} className="App">
      Caelum - Weather App
    </div>
  );
};

export default App;

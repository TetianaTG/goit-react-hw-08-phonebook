import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import ThemeContext from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContext>
        <App />
      </ThemeContext>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

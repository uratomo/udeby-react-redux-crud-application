import React from "react";
import ReactDOM from "react-dom";
// storeの作成
import { createStore } from "redux";
// storeを全コンポーネントに渡す
import { Provider } from "react-redux";
import reducer from "./reducers";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

// storeはここでだけ作成される
const store = createStore(reducer);

//  全コンポーネントにstoreを渡す=> propsをどんどんバケツリレーする必要がなくなる

ReactDOM.render(
  <React.StrictMode>
    {/* ここで全てのコンポーネントにstoreを渡すことができるようになった */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

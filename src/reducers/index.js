// 実際にここで、actionsで定義したアクションで具体的な処理を決める
import { combineReducers } from "redux";
import count from "./count";

export default combineReducers({ count });

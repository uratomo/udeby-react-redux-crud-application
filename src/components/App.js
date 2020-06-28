import React from "react";
// storeの関連付けを行う。重要
import { connect } from "react-redux";
// actionをimport
import { increment, decrement } from "../actions";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { count: 0 }; <= storeに置き換わる
  // }

  // reducerによる管理となる
  // handlePlusButton = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  // handleMinusButton = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };

  render() {
    //  storeからの値を受け取る
    const props = this.props;
    return (
      <React.Fragment>
        <div>count: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ value: state.count.value });
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment),
//   decrement: () => dispatch(decrement),
// });

const mapDispatchToProps = { increment, decrement };

//  超重要 connect でactionの値をpropsに入れる方法
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);

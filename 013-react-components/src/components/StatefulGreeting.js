import React from "react";

export default class StatefulGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      nameColor: "red"
    };
  }

  render() {
    return (
      <div className="greeting">
        <h1>
          Hello
          <span style={{ color: this.state.nameColor }}>
            {" "}
            {this.props.name}
          </span>
          , I'm a stateful component!
        </h1>
        <h2>It is currently {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
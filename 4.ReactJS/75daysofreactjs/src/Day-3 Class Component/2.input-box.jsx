import { Component } from "react";

class InputBox extends Component {
  state = {
    uName: "Anika(Google)",
    uCity: "Mumbai",
    uState: "Maharashtra",
    uCountry: "Bharat",
  };

  render() {
    const { uCountry } = this.state;
    return (
      <div>
        <div>
          <input type="text" value={this.state.uName} />
        </div>

        <h1>
          Hello{" "}
          <span>
            {this.state.uName} from {uCountry}
          </span>
        </h1>
        <h1>
          Welcome <span>{this.state.uName}</span>
        </h1>
        <h1>
          Hi <span>{this.state.uName}</span>
        </h1>
        <h1>
          Hi <span>{this.state.uName}</span>
        </h1>
        <h1>
          Hi <span>{this.state.uName}</span>
        </h1>
        <h4>{this.state.uName}</h4>
      </div>
    );
  }
}

export default InputBox;

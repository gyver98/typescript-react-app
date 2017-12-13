import * as React from 'react';
import * as ReactDom from 'react-dom';

type AppProps = {
  message: string,
}

type AppState = {
  count: number
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div onClick={this.increment}>{this.props.message} {this.state.count}</div>
    )
  }
}

ReactDom.render(
<App message={"hello typescript"}/>,
document.getElementById('root'));
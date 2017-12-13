import * as React from 'react';
import * as ReactDom from 'react-dom';

type AppProps = { message: string };

const App: React.SFC<AppProps> = ({ message }) => <div>{message}</div>;

ReactDom.render(
<App message="Hello typescript"/>,
document.getElementById('root'));
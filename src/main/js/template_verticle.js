import 'babel-polyfill';

import { Counter } from './components/Counter.jsx'
import ReactDOM from 'react-dom/server';

var server = vertx.createHttpServer()

server.requestHandler((context) => context.response().end(ReactDOM.renderToString(<Counter />))).listen(8080)
import React from 'react'
import * as ReactDOM from 'react-dom';
import { App } from './App';
import {configureFakeBackend} from "./utils/fake-backend/fake-backend";

configureFakeBackend();

ReactDOM.render(<App/>, document.getElementById('app'));
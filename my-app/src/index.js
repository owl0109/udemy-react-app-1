import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import { composeWithDevTools} from 'redux-devtools-extension';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show'
import reportWebVitals from './reportWebVitals';


const enhancer = process.env.NODE_ENV === 'development' ?
 composeWithDevTools(applyMiddleware(thunk)):applyMiddleware(thunk)
const store = createStore(reducer,enhancer)

ReactDOM.render(
  <MuiThemeProvider>
    <React.StrictMode>
      <Provider store = {store}>
        <BrowserRouter>
          <Switch>
            <Route  path = "/events/:id" component = {EventsShow}/>
            <Route  path = "/event/new" component = {EventsNew}/>
            <Route exact path = "/" component = {EventsIndex}/>
            <Route exact path = "/events" component = {EventsIndex}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

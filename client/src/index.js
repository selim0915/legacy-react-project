import React from 'react';
import * as ReactDOM from 'react-dom/client';
// import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
// import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <BrowserRouter>
         <App />
       </BrowserRouter>
    </Provider>,
);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  // serviceWorker.unregister();

// const CallMiddleware = store => nextMiddle => action => {
//     console.log('1. reducer 전');
//     console.log('2. action.type:' + action.type+', store str: '+store.getState().data.str);

//     let result = nextMiddle(action);
//     console.log('3. reducer 후');
//     console.log('4. action.typr: '+action.type+', store str: '+store.getState().data.str);

//     return result;
// }

// const store = createStore(reducers, applyMiddleware(CallMiddleware));

// const listener = () => {
//     ReactDOM.render(
//         <Provider store={store}>
//             <App indexProp="react"/>
//         </Provider>,
//         document.getElementById('root')
//     );
// };

// store.subscribe(listener);
// listener();
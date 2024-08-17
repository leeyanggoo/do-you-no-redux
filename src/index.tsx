import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import TodoApp from './components/TodoApp';
import TodoAppContainer from './redux/containers/TodoAppContainer';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<h1>기다리셈</h1>}
      >
        {/* <TodoAppContainer /> */}
        <TodoApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

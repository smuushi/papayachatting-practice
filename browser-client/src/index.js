import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ActionCableProvider} from 'react-actioncable-provider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ActionCableProvider url={'ws://localhost:3003/cable'}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ActionCableProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

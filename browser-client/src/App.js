import logo from './logo.svg';
import './App.css';
// import message from './components/messages';

import MessagesContainer from './components/messagesContainer';
import { ActionCableConsumer } from 'react-actioncable-provider';


function App() {

  console.log(ActionCableConsumer);
  console.log("hi")

  

  return (
    <div className="App">
      <h1>Hi from App</h1>
      <MessagesContainer />
    </div>
  );
}

export default App;

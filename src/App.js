import logo from './logo.svg';
import './App.css';
import SignInButton from './signInButton'
import TypeName from './typeName'
import TypePassword from './typePassword'

function App() {
  return (
    <div className="App">
      <div>
        { TypeName() }
      </div>
      <div>
        { TypePassword() }
      </div>
      <div>
        { SignInButton() }
      </div>
    </div>
  );
}

export default App;

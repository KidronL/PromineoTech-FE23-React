import './App.css';
import Login from './components/login';
import Navbar from './components/navbar';

//Code to hold the components to be rendered into the HTML file.
function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;

import './App.css';
import React, {useState, useEffect} from 'react';
import Loading from './components/Loading';
import Main from './components/Main';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2150);
  })


  return (
    
    <div className="App">
      <div>
      {isLoading===true?
        <Loading/>:
        <Main/>

      }
      </div>
    </div>
  );
}

export default App;

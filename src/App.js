import { useState,useEffect}  from 'react';
import './App.css';
import Details from './components/details';
import { getDetails } from './service';


function App() {

  const [results,setResults] = useState([]);
  const getDetailsHandler = async()=>{
    const data = await getDetails();
    if(data){
      setResults(data.results);
    }
  } 
  useEffect(()=>{ 
    getDetailsHandler();
  },[])
  
  console.log(results);
  return (
    <div className="App">
      <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
          {results.map((result, i)=>{
            return(
              <>
              <Details result={result} />
              </>
            )
          })}
        </div>
    </div>
  );
}

export default App;

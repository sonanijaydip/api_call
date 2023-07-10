import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  const [val, setval] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setval(response.data.results)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  })
  return (
    <>
      {
        val.map((item, index) => {
          return (
           <>
              
           </>
          )

        })
  
      }


    </>
  );
}

export default App;

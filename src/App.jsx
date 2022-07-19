
import React, {useState, useEffect} from "react";




import Search  from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";


let api = `https://rickandmortyapi.com/api/character/?page=1`


function App() {

  const [fetchedData, setFetchedData] = useState([]);
  let {info, results} = fetchedData;

  // when api change, will fresh new data
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      setFetchedData(data);
    })()
  }, [api]);


  return (
  <div className="App">
    <h1 className="text-center mb-3">
      Characters
    </h1>
    <div className="container">
      <div className="row">
        Filter component will be placed here
        <div className="col-lg-8 col-12">
          <div className="row">
              Card component will be placed here
              <Card results={results} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default App

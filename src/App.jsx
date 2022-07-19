
import React, {useState, useEffect} from "react";




import Search  from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";


// let api = `https://rickandmortyapi.com/api/character/?page=1`


function App() {

  const [fetchedData, setFetchedData] = useState([]);
  let {info, results} = fetchedData;
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, SetSearch] = useState('');

  let [status, updateStatus] = useState('');
  let [gender, updateGender] = useState('');
  let [species, updateSpecies] = useState('')
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

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
    <Search setSearch={SetSearch} updatePageNumber={updatePageNumber} />
    <div className="container">
      <div className="row">
        <Filter pageNumber={pageNumber} status={status} updateStatus={updateStatus} updateGender={updateGender} updateSpecies={updateSpecies} updatePageNumber={updatePageNumber} />
        <div className="col-lg-8 col-12">
          <div className="row">
              <Card results={results} />
              <Pagination info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default App

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './components/Search/Search'
import Card from './components/Card/Card'
import CardDetails from './components/Card/CardDetails'
import Pagination from './components/Pagination/Pagination'
import Filter from './components/Filter/Filter'
import Navbar from './components/Navbar/Navbar'
import Episodes from './pages/Episodes'
import Location from './pages/Location'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  const [fetchedData, setFetchedData] = useState([])
  let { info, results } = fetchedData
  let [pageNumber, updatePageNumber] = useState(1)
  let [search, SetSearch] = useState('')

  let [status, updateStatus] = useState('')
  let [gender, updateGender] = useState('')
  let [species, updateSpecies] = useState('')
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  // when api change, will fresh new data
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setFetchedData(data)
      console.log('====================================')
      console.log(`now, request uri is: ${api}`)
      console.log('====================================')
    })()
  }, [api])
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search
        search={search}
        setSearch={SetSearch}
        updatePageNumber={updatePageNumber}
      />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
              <Pagination
                info={info}
                pageNumber={pageNumber}
                updatePageNumber={updatePageNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

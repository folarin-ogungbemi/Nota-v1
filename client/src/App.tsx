import React from 'react'
import SearchBar from './components/SearchBar'


const App: React.FC = () => {

  return (
    <div className='container'>
      <h1 className="text-3xl font-bold text-center m-5">
        Nota
      </h1>
      <SearchBar />
    </div>
  )
}

export default App

import React from 'react'

const SearchBar = () => {
  return (
    <form action="">
        <label className="relative block w-[50%] mx-auto">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input 
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-slate-500 focus:ring-slate-500 focus:ring-1 sm:text-sm" 
            placeholder="Search for anything..." 
            type="text" 
            name="search"/>
            <input 
            className='absolute inset-y-0 right-0 border bg-slate-700 text-white rounded-full px-2 sm:text-sm'
            value='search'

            type="submit" />
        </label>
    </form>
  )
}

export default SearchBar
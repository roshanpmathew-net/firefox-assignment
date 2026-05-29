import './App.css'
import Header from './ui-components/Header'
import Shortcuts from './ui-components/Shortcuts'
import NewsGrid from './ui-components/NewsGrid'
import Footer from './ui-components/Footer'
import { useState } from 'react'


function App() {

  const [searchItem, setSearch] = useState('')
  const [count, setCount] = useState<number>(() => {
    return Number(localStorage.getItem("shortcutRows")) || 1;
  });

  return (
    <div className='flex flex-col align-middle justify-center'>
      <div className='flex flex-col gap-10'>

      <Header searchTerm={searchItem} setSearchTerm={setSearch}/>
      <Shortcuts count={count}/>

      </div>
      <div className='w-full px-15'>

      <NewsGrid searchItem={searchItem}/>


      </div>
      <Footer setCount={setCount} />

     
     
    </div>
  )
}

export default App
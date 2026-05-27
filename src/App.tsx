import './App.css'
import Header from './ui-components/Header'
import Shortcuts from './ui-components/Shortcuts'
import NewsGrid from './ui-components/NewsGrid'
import Footer from './ui-components/Footer'


function App() {

  return (
    <div className='flex flex-col align-middle justify-center'>
      <div className='flex flex-col gap-10'>

      <Header/>
      <Shortcuts/>

      </div>
      <div className='w-full px-15'>

      <NewsGrid/>


      </div>
      <Footer/>

     
     
    </div>
  )
}

export default App
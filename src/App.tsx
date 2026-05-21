import './App.css'
import Header from './ui-components/Header'
import Shortcuts from './ui-components/Shortcuts'


function App() {

  return (
    <div className=' flex flex-col align-middle justify-center'>
      <div className='flex flex-col gap-10'>

      <Header/>
      <Shortcuts/>

      </div>
     
     
    </div>
  )
}

export default App
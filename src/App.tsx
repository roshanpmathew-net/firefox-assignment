
import './App.css'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <h1>FireFox</h1>
      <Input/>
      <Button 
      size="lg" 
      variant="default" 
      value="Search" 
    >
      Search
    </Button>
    </>
  )
}

export default App

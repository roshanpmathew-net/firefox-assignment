import data from '../data.json'
import Shortcut_card from './Shortcut_card'

const Shortcuts = () => {
  return (
    <div className='mt-10  flex align-middle justify-center'>
        <div className='flex gap-10'>
            {
                data.map((item)=>(
                    <Shortcut_card item={item}/>
                ))
            }
        </div>

    </div>
  )
}

export default Shortcuts
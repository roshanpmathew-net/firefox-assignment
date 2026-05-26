import data from '../data.json'
import Shortcut_card from './Shortcut_card'

const Shortcuts = () => {
  return (
    <div className="mt-10 flex justify-center px-4">

  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-7xl">

    {data.map((item) => (
      <Shortcut_card item={item} />
    ))}

  </div>

</div>
  )
}

export default Shortcuts
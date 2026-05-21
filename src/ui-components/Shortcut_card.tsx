interface ShortcutItem {
  name: string
  url: string
  image: string
}

const Shortcut_card = ({ item }: { item: ShortcutItem }) => {
  return <div className="flex flex-col items-center gap-2">
  
  <a
    href={item.url}
    target="_blank"
    rel="noreferrer"
    className="
      w-16 h-16
      bg-gray-700/60
      rounded-2xl
      flex items-center justify-center
      hover:bg-gray-600
      transition
    "
  >
    <img
      className="w-9 h-9 object-contain"
      src={item.image}
      alt={item.name}
    />
  </a>

  <p className="text-white text-xs font-light text-center">
    {item.name}
  </p>

</div>
}
export default Shortcut_card
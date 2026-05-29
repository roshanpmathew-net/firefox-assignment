import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import { CustomizeDrawer } from './CustomzeDrawer'

interface FooterProps{
  
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Footer = ({setCount}: FooterProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="default"
        size="icon"
        className="
          group
          h-12
          w-12
          hover:w-40
          rounded-full
          overflow-hidden
          cursor-pointer
          transition-all
          duration-300
          ease-in-out
          flex
          items-center
          justify-center
          hover:justify-between
          px-4
        "
      >
        <span
          className="
            max-w-0
            opacity-0
            whitespace-nowrap
            transition-all
            duration-300
            ease-in-out
            group-hover:max-w-30
            group-hover:opacity-100
          "
        >
          <CustomizeDrawer setCount={setCount}/>
        </span>

        <Pencil size={18} className="shrink-0" />
      </Button>
    </div>
  )
}

export default Footer
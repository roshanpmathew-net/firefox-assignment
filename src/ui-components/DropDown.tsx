import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



interface DropDownProps{
  onRemove: () => void
  onEdit: () => void
}

const DropDown = ({onRemove, onEdit}: DropDownProps) => {
  
  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
        className="
          h-7 w-7
          rounded-full
          flex items-center justify-center
          bg-gray-300/80
          hover:bg-transparent
          cursor-pointer
        "
      >
        ⋯
      </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="right"
        align="start"
        sideOffset={8}
        className="w-64"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem>Pin</DropdownMenuItem>
          <DropdownMenuItem onClick={onEdit}>Edit</DropdownMenuItem>

        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            Open in a New Window
          </DropdownMenuItem>

          <DropdownMenuItem>
            Open in a Private Window
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onRemove} className="text-red-500">
          Dismiss
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

export default DropDown
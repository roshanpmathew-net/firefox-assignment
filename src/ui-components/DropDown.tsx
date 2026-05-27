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
        <Button
          variant="ghost"
          className="
            h-7 w-7
            rounded-full
            p-0
            bg-gray-300/80
            hover:bg-gray-300
            border-0
            cursor-pointer

        
          "
        >
          ⋯
        </Button>
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
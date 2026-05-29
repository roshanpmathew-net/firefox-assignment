import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Shortcut_item {
    id: number;
    name: string;
    url: string;
    pinned: boolean;
    image: string | null;
    
}


interface DropDownProps{
  item: Shortcut_item;
  onRemove: () => void
  onEdit: () => void
  onPintoggle: () => void
}

const DropDown = ({item, onRemove, onEdit, onPintoggle}: DropDownProps) => {
  
  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
        className="
          h-7 w-7
          rounded-full
          flex items-center justify-center
          bg-transparent
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
          <DropdownMenuItem onClick={onPintoggle}>
            {item.pinned ? "Unpin" : "Pin"}
          </DropdownMenuItem>
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
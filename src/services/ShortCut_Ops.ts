interface Shortcut_item {
    id: number;
    name: string;
    url: string;
    pinned: boolean;
    image: string | null;
    
}

async function AddShortcut(newItem: Omit<Shortcut_item, "id">){
    const stored = localStorage.getItem('shortcuts')

    const shortcuts: Shortcut_item[] = stored ? JSON.parse(stored) : []

    const newshortcut: Shortcut_item = {
        id: shortcuts?.length + 1,
        ...newItem,
    }
    
    const updated = [...shortcuts, newshortcut]

    localStorage.setItem("shortcuts", JSON.stringify(updated))

    return updated
}

async function RemoveShortcut(id: number) {
    const stored = localStorage.getItem('shortcuts')
    const shortcuts: Shortcut_item[] = stored ? JSON.parse(stored) : []

    const filtered_shortcuts = shortcuts.filter((item) => item.id !== id)

    localStorage.setItem("shortcuts", JSON.stringify(filtered_shortcuts))

    return filtered_shortcuts
    
}

async function EditShortcut(id: number, updated_data : Partial<Omit<Shortcut_item, "id">>) {
    const stored = localStorage.getItem('shortcuts')
    const shortcuts: Shortcut_item[] = stored ? JSON.parse(stored) : []

    const updated_shortcuts = shortcuts.map((item)=>{
        if(item.id === id ){
            return{
                ...item,
                ...updated_data
            }
        }
        return item
    })

    localStorage.setItem("shortcuts", JSON.stringify(updated_shortcuts))

    return updated_shortcuts
    
}

async function TogglePin(id: number){
    const stored = localStorage.getItem('shortcuts')
    const shortcuts: Shortcut_item[] = stored ? JSON.parse(stored) : []

    const updated_shortcuts = shortcuts.map((item)=>{
        if(item.id === id ){
            return{
                ...item,
                pinned: !item.pinned
            }
        }
        return item
    })

    localStorage.setItem("shortcuts", JSON.stringify(updated_shortcuts))

    return updated_shortcuts
}

export {
  AddShortcut,
  EditShortcut,
  RemoveShortcut,
  TogglePin
}
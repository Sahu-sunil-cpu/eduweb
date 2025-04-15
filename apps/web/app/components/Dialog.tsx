import {X} from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface DialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
}

export default function Dialog({open, setOpen, children}: DialogProps) {


     

    return (
        <>
       
            {open && 
                   <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40">
                     <span 
         className=" absolute top-2 right-2 border border-black rounded cursor-pointer"
         onClick={() => setOpen(false)}> <X className="h-5 w-5" /></span>
          <div className="flex  items-center justify-center absolute top-32 right-150">
        {  children }
        </div>
          </div>}
      
       
        </>
    )
}
import { useState } from "react"
import Dialog from "./Dialog";


export default function Note() {
    const [openNote, setOpenNote] = useState(false);
    return (
        <>
        <Dialog children={<NotePage/>} open={openNote} setOpen={setOpenNote}  />
        <div className="px-6 pb-10 pt-10">
        <div className="bg-slate-100 rounded-xl  mx-auto max-w-5xl p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Capture Key Insights Instantly</h2>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 text-lg font-medium cursor-pointer"
          onClick={() => setOpenNote(true)}
          >
            Start Taking Notes
          </button>
        </div>
      </div>
        </>
    )
}

function NotePage() {

    return <div>
         <div className="mx-auto bg-gray-100 mt-10 rounded-lg p-2">
        <textarea name="note" id="" cols={100} rows={20} contentEditable  placeholder="write your notes here ..."></textarea>
      </div>
      <div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 text-lg font-medium cursor-pointer mt-4"
         
          >
           Save
          </button>
      </div>
       
    </div>
 
   
}
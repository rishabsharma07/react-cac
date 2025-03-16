import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
  <div className="w-full h-screen duration-200" 
  style={{backgroundColor : color}}>
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-3 py-2 shadow-lg">
      <button onClick={()=>setColor("red")} className=" shadow-lg text-white rounded-full outline-none px-4 py-2 cursor-pointer" style={{backgroundColor:"red"}}>
        Red
      </button>
      <button onClick={()=>setColor("green")} className=" shadow-lg text-white rounded-full outline-none px-4 py-2 cursor-pointer" style={{backgroundColor:"green"}}>
        Green
      </button>
      <button onClick={()=>setColor("blue")} className=" shadow-lg text-white rounded-full outline-none px-4 py-2 cursor-pointer" style={{backgroundColor:"blue"}}>
        Blue
      </button>
      <button onClick={()=>setColor("olive")} className=" shadow-lg text-white rounded-full outline-none px-4 py-2 cursor-pointer" style={{backgroundColor:"olive"}}>
        Olive
      </button>
      <button onClick={()=>setColor("gray")} className=" shadow-lg text-white rounded-full outline-none px-4 py-2 cursor-pointer" style={{backgroundColor:"gray"}}>
        Gray
      </button>
      <button onClick={()=>setColor("yellow")} className=" shadow-lg text-white rounded-full outline-none px-4 py-2 cursor-pointer" style={{backgroundColor:"yellow"}}>
        Yellow
      </button>
      <button onClick={()=>setColor("pink")} className=" shadow-lg text-white rounded-full outline-none px-4 py-2 cursor-pointer" style={{backgroundColor:"pink"}}>
        Pink
      </button>
      <button onClick={()=>setColor("purple")} className=" shadow-lg text-white rounded-full outline-none px-4 py-2 cursor-pointer" style={{backgroundColor:"purple"}}>
        Purple
      </button>

       
    </div>
   </div>

  </div>
  )
}

export default App

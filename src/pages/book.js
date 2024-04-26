import { useEffect, useState } from "react"
import { useRouter } from "next/router";

const Book = () => {


   
    const [date , setDate] = useState(26)
    const [time , setTime] = useState("")
    const [seat , setSeat] = useState("")
    const [toggle , setToggle] = useState(false)
    
    const router = useRouter()


    const handleConform = () => {
        if(time == "")
        {
            alert("pleae select time")
            return  
        }

        if(seat  == 0)
        {
            alert("pleae select seat")
            return  
        }
        setToggle(true)
        if(seat  > 100)
        {
            alert("all seats are full")
            return  
        }
        setToggle(true)

    }
  
  

    return ( <div className="p-10">

<button onClick={()=> router.push("/")} className="mt-10 bg-blue-400 h-10 w-20  border rounded-lg mb-4">Back</button>

        <div className="flex gap-10 overflow-auto">
          <div onClick={()=>setDate(26)} className={`font-semibold text-lg h-24 w-20 flex justify-center items-center rounded-xl ${date == 26 ? 'bg-red-400 text-white' : ""}`}>
            <div>
             <div>FRI</div>
             <div>26</div>
             <div>APR</div>
             </div>
          </div>
          <div onClick={()=>setDate(27)} className={`font-semibold text-lg h-24 w-20 flex justify-center items-center rounded-xl ${date == 27 ? 'bg-red-400 text-white' : ""}`}>
            <div>
             <div>SAT</div>
             <div>27</div>
             <div>APR</div>
             </div>
          </div>
          <div onClick={()=>setDate(28)} className={`font-semibold text-lg h-24 w-20 flex justify-center items-center rounded-xl ${date == 28 ? 'bg-red-400 text-white' : ""}`}>
            <div>
             <div>SUN</div>
             <div>28</div>
             <div>APR</div>
             </div>
          </div>
          <div onClick={()=>setDate(29)} className={`font-semibold text-lg h-24 w-20 flex justify-center items-center rounded-xl ${date == 29 ? 'bg-red-400 text-white' : ""}`}>
            <div>
             <div>MON</div>
             <div>29</div>
             <div>APR</div>
             </div>
          </div>
          <div onClick={()=>setDate(30)} className={`font-semibold text-lg h-24 w-20 flex justify-center items-center rounded-xl ${date == 30 ? 'bg-red-400 text-white' : ""}`}>
            <div>
             <div>TUE</div>
             <div>30</div>
             <div>APR</div>
             </div>
          </div>
        </div>

        <div className="space-y-2">
         
         <div className="flex gap-4 items-center pb-4 border-b border-gray-200 pt-4">
            <div className="w-[400px]"> Cinepolis: Fun Republic Mall, Andheri</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-green-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">9:45 AM</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-green-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">2:45 PM</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-green-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">5:45 PM</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-orange-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">9:45 PM</div>
            
         </div>
         <div className="flex gap-4 items-center pb-4 border-b border-gray-200 pt-4">
            <div  className="w-[400px]"> G7 Multiplex: Bandra (W)</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-green-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">8:45</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-orange-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">2:45 PM</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-green-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">5:45 PM</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-green-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">9:45 PM</div>
            
         </div>
         <div className="flex gap-4 items-center pb-4 border-b border-gray-200 pt-4">
            <div  className="w-[400px]"> Gold Cinema: Malad Malvani</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-green-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">8:45 AM</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-orange-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">2:45 PM</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-orange-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">5:45 PM</div>
            <div onClick={()=>setTime({name :  "Cinepolis: Fun Republic Mall, Andheri" , time : "2:45" })} className="h-10 w-20 rounded-lg text-green-400 py-1 px-2 border border-gray-400 flex justify-center items-center cursor-pointer">9:45 PM</div>
            
        
         </div>
        </div>

        <div className="mt-4">No. of Seats <input type="number" className="w-20 h-10 border border-gray-400 rounded-lg px-2" onChange={(e) => setSeat(e.target.value)} max={100}/></div>

        <button onClick={handleConform} className="mt-10 bg-green-400 h-10 w-20  border rounded-lg text-white">Conform</button>


        {toggle && <div className="mt-12">
            <div> {date}</div>
            <div> {time.name}</div>
            <div> {time.time}</div>
            <div> {seat}</div>

           
            
        
            
            </div>}
        
    </div> );
}
 
export default Book;
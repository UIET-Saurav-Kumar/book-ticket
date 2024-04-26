import { useEffect, useState } from "react"
import { useRouter } from "next/router";



const Details = () => {

    const [data , setData] = useState(null)

    const router = useRouter()

    console.log("data" , data)
    useEffect(()=>{
  
  
      fetch('https://freetestapi.com/api/v1/movies')
      .then(response => response.json())
      .then(json => setData(json[0]))
  
    },[])

    if(data == null) return  "loading..."


    return (<div className="p-10">

        <button onClick={()=> router.push("/")} className="mt-10 bg-blue-400 h-10 w-20  border rounded-lg mb-4">Back</button>

        <div className="flex gap-10">
     
          <img src={data?.poster} className="h-[300px] w-[300px]" />
          <div className="p-2">
              <div className="mt-2"> Name :{data?.title}</div>
              <div className="mt-2"> Language :  {data?.language}</div>
              <div className="mt-2">Runtime : {data?.runtime}</div>
              <div className="mt-2">Rating : {data?.rating}</div>
              <div className="mt-2">Genre : {data?.genre[0]}</div>
              <div className="mt-2">Production : {data?.production}</div>
    
           </div>

        </div>

        <div className="mt-10">
            <h3>Description </h3>
            <div className="mt-4">
            The Pirates of the Caribbean franchise launched Johnny Depp into megastardom and put pirates back on the cultural treasure map, all beginning with 2003’s The Curse of the Black Pearl. If you want to watch the Pirates of the Caribbean movies in order, set sail with Captain Jack Sparrow and his two lovely assistants Elizabeth Swann and Will Turner (Keira Knightley, Orlando Bloom) towards Dead Man’s Chest and At Worlds End.

With that trilogy closed, the series continued on with the further adventures of Jack with On Stranger Tides and Dead Men Tell No Tales. In the years since, a sixth film remains in the works, while in June 2020, Disney announced a spin-off to star Margot Robbie. For now, see our guide on how to watch the Pirates of the Caribbean movies in order. —Alex Vo
            </div>

        </div>


        
    
          
            
        </div> );
}
 
export default Details;
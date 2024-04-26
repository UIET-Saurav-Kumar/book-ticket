import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// const inter = Inter({ subsets: ["latin"] });



export default function Home() {

  const [data , setData] = useState([])
  const router = useRouter()

console.log("data" , data)
  useEffect(()=>{


    fetch('https://freetestapi.com/api/v1/movies')
    .then(response => response.json())
    .then(json => setData(json))

  },[])


if(data.length == 0) return  "loading..."


  return (
    <main
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 min-h-screen   p-24 `}
    >
     { data?.map((item , index)=>{
      
      return (
        <div key={index} className="h-[400px] border borde-black w-[250px]">
          
        <img src={item?.poster} className="h-[200px] w-full" />
        <div className="p-2">
            <div className="mt-2">{item?.title}</div>
            <div className="mt-2">{item?.language}</div>
            <div className="mt-2">{item?.runtime}</div>
            <div className="mt-2">{item?.rating}</div>
            <div className="flex justify-between"> 
              <div onClick={() => router.push("/details")} className="rounded p-1 bg-blue-400 h-10 border">Details</div>
              <div onClick={() => router.push("/book")} className="rounded p-1 bg-blue-400 h-10 border">Book</div>
                
            </div>

        </div>
      </div>
      )
     })}
      
   
    </main>
  );
}

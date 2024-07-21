"use client"
import { useEffect } from "react";
import BarCharts from "./BarChart";
import Pies from "./PieChart";
import SalesData from "./SalesData";
import { useRouter } from "next/navigation";
const Charts = () =>{
  const router = useRouter();
  useEffect(()=>{
    const key=localStorage.getItem('API-KEY');
    if(!key){
      router.push('/login'); 
    }
  },[router]);

    return(
        <>
        <section>
        <div className="flex m-4 gap-2">
        <SalesData/>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row my-4 px-4 gap-3 w-full">
        <div className="w-full lg:w-1/2 h-[300px] bg-gray-700 rounded"><BarCharts/></div>
        <div className="w-full lg:w-1/2 h-[300px] bg-gray-700 rounded"><Pies/></div>
      </section>
     </>
    )
}

export default Charts;
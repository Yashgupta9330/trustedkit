"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Bar, BarChart,ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
const BarCharts = () =>{
   const [data,setData] = useState([]);
   
   useEffect(()=>{
    const fetch = async () =>{
    try {
      const response = await axios.get("http://127.0.0.1:8000/dashboard/weekly-sales",{
        headers: {
            'API-KEY': localStorage.getItem('API-KEY'),
        }});

      if (response.status === 200) {
        setData(response.data)
        console.log("response",response);
      }
      
    } 
    catch (error) {
      console.error("Server error", error);
      toast.error("api key is not valid.");
    }
   }
   fetch();
   },[]);

  return(
        <ResponsiveContainer width="100%" height="100%">
        <BarChart 
           width={730} 
           height={300}
           data={data} 
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#FA8072">
          </Bar>
        </BarChart>
     </ResponsiveContainer>
    )
}

export default BarCharts;
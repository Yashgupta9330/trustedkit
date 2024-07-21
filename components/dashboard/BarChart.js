"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const BarCharts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const key = localStorage.getItem('API-KEY');

  useEffect(() => {
    const fetch = async () => {
      setLoading(true); 
      try {
        const response = await axios.get("http://127.0.0.1:8000/dashboard/weekly-sales", {
          headers: {
            'API-KEY': key,
          }
        });

        if (response.status === 200) {
          setData(response.data);
          setError(null); // Clear any previous errors
        } else {
          throw new Error("Failed to fetch data");
        }
      } 
      catch (error) {
        console.error("Server error", error);
        setError("Failed to fetch data. Please check your API key or try again later.");
        toast.error("API key is not valid or there's an issue with the server.");
      } 
      finally {
        setLoading(false); 
      }
    };

    fetch();
  }, [key]);

  if (loading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-full text-red-500">{error}</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={730} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#FA8072" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;

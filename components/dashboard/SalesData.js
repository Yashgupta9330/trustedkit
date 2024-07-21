import axios from "axios";
import { useEffect, useState } from "react";

const SalesData = () => {
  const [sales, setSales] = useState(null);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/dashboard/metrics", {
          headers: {
            'API-KEY': localStorage.getItem('API-KEY'),
          }
        });

        console.log("res", response);
        if (response.status === 200) {
          console.log("response", response.data);
          setSales(response.data.total_sales);
          setOrders(response.data.number_of_orders);
        }
      } catch (error) {
        console.error("Server error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-[300px] flex-1 px-4 py-6 justify-center bg-gray-700 shadow rounded h-300px text-white">
        <div>
          <p className="text-gray-300 font-bold">Total orders</p>
          <p className="py-4 font-bold">{orders !== null ? orders : "Loading..."}</p>
          <p className="text-green-300">+34.5%</p>
        </div>
      </div>
      <div className="w-[300px] flex-1 px-4 py-6 justify-center bg-gray-700 shadow rounded h-300px text-white">
        <div>
          <p className="text-gray-300 font-bold">Total sales</p>
          <p className="py-4 font-bold">{sales !== null ? `$${sales}` : "Loading..."}</p>
          <p className="text-green-300">+34.5%</p>
        </div>
      </div>
    </div>
  );
};

export default SalesData;

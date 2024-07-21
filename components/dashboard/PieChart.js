"use client"
import  { colors, piechartdata } from "@/utils/data"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const Pies = () =>{
    return(
        <>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={730} height={250}>
            <Pie
              data={piechartdata}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill="#8884d8"
              label
            >
              {piechartdata.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </>
    )
}

export default Pies;
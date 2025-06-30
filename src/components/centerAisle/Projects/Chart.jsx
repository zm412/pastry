import { observer } from "mobx-react-lite";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {name: 'Page AAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAaa', uv: 400, pv: 400, amt: 400}, 
    {name: 'Page DDDDDDDDDDDDDDDDDDDd DDDDDDDDddd', uv: 500, pv: 600, amt: 600}, 
    {name: 'Page cCCCCCCccccc CCCCCCCCCCCCCCCCCCCccc', uv: 600, pv: 700, amt: 800}, 
    {name: 'Page eDDDDDDDDDDDDDDDDDDDDDDDDd DDDDDddd', uv: 700, pv: 800, amt: 100}, 
    {name: 'Page fFFFFFFFFFFFFFFFFFFf FFFFFFFFFFFFFFFFFFFFFFFF', uv: 800, pv: 400, amt: 400}, 
]


const Chart = observer(() => {
    return (
        <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
});


export default Chart;

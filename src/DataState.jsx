// import React, { useState } from 'react'

function DataState() {
    const [data,setData] = useState([]);

    const addData = (newData) =>{
        setData([...data,newData]);
    };
    // const updateData = (index,newData)=>{
    //     const updateData = [...data];
    //     updateData[index] = newData;
    //     setData(updateData);
    // }
    const deleteData = (index)=>{
        const updateData = [...data];
        updateData.splice(index,1);
        setData(updateData);
    }
  return (
    <div>
      {data.map((item,index)=>(
        <div key={index}>
            {item}
            <button onClick={()=> deleteData(index)}>Delete</button>

        </div>
      ))}
      <button onClick={()=>addData('New Data')}>Add Data</button>
    </div>
  )
}

export default DataState
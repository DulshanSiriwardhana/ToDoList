import React, { useEffect, useState } from 'react'
import axios from 'axios'

function List() {
  const [task, setTask] = useState(null);
  const getTask = async()=>{
    try{
      const response = await axios.get('http://localhost/task/');
      setTask(response);
    } catch{
      console.log('task retrieving error');
    }
  };
  useEffect(()=>{
    getTask();
  },[]);
  return (
    <div>
      {task?(task.map((obj)=>{
        <p>{obj.data}</p>
      })):<p>No items</p>}
    </div>
  )
}

export default List
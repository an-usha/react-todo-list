import React, { useState } from 'react'

function TodoList() {
    const [activity,setActivity]= useState("");
    const [listData, setListData] = useState([]);
    function addActivity(){
        setListData((listData)=>{
            const updatedList = [...listData,activity]
            setActivity('');
            return updatedList;
        })
    }
    function removeActivity(index){
        const updatedListData = listData.filter((elements, id)=>{
            return index!==id;
        })
        setListData(updatedListData);

    }
  return (
    <div className='Container'>
        <div className='Header'>TODO LIST</div>
            <input type="text" placeholder='Enter Here...' value={activity} 
            onChange={(event)=>setActivity(event.target.value)}/>
            <button onClick={addActivity}>Add</button>  

            {listData.length>0 &&
            <p className='List-Heading'>Here is the todo lists</p>
            }
    
            {listData!==[] && listData.map((data, index)=>{
                return(
                    <p key={index}>
                        <div className='ListData'>{data}</div>
                        <button className='Btn-Position' onClick={()=>removeActivity(index)}>Remove</button>
                    </p>
                )
            })}
    </div>
  );
};

export default TodoList;

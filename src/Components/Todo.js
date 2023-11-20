import React, { useState } from 'react'


const Todo = (props) => {
 const [decor, setdecor] = useState('');
   const textdecor=()=>{
if(decor===''){
    setdecor('checkbox')
}else{
    setdecor('')
}
   }

    return (<>
    <div id="todo-holder">
    {/* onClick={textDecor} */}
<input onClick={textdecor} type="checkbox" />
<h2 id= "todo-textHolder"  className={`${decor}`}>{props.item1}</h2>
<i onClick={()=>{
    props.onSelect(props.id)
}} className="fa-solid fa-trash-can" id="icon"></i> 
</div>
</>
)
}

export default Todo

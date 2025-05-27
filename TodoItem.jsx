import React from 'react'
import Tick from './tick.png'
import NotTick from './not_tick.png'
import Delete from './delete.png'
import './index.css'
const TodoItem = ({text,del,mark,isComplete,id}) => {
return (
<div>
<div className='list'>
<img  className='tick' key={isComplete?"tick":"not-tick"} src={isComplete?Tick:NotTick} onClick={()=>mark(id)}/>
<h3 style={{textDecoration:isComplete?"line-through":"none"}}>{text}</h3>
<img src={Delete} onClick={()=>del(id)} className='delete' />
</div>
</div>
)
}
export default TodoItem
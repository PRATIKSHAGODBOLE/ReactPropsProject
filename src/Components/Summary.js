import React from 'react'

export default function Summary(props) {
  return (
    <>
{/* we rendering date in td formate */}
<td>{props.index+1}</td>
<td>{props.name}</td>
<td>{props.name.length}</td>

<td>
  {/* recerse button event function */}
<button className='btn btn-primary btn-sm' onClick={props.callback}>Reverse</button>
</td>

<td>
  {/* permote button event function */}
<button className='btn btn-success btn-sm' onClick={()=>props.Promotecallback(props.name)}>Promote</button>
</td>

    </>
  )
}

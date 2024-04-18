import { Button } from 'antd'
import React from 'react'

const Main = ({issues, deleteIssue}) => {
  return (
    <div>
      <h3 style={{ padding: "0.5rem 2rem" }}>All Tasks</h3>

       <div style={{padding:"1rem 0"}}>
        {
          issues.map((item) => (
            <ul>
              <li>
              {item.title} -
              <Button style={{margin:"0.5rem"}}type='primary'>Edit</Button>
              
              <Button type='primary' onClickCapture={()=>deleteIssue[item.id]}>Delete</Button>
              </li>
             
            </ul>
          ))
        }
      </div>
    </div>
  )
}

export default Main

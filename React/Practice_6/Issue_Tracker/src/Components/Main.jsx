import React from 'react'
const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ]
const Main = () => {
    return (
        <div>
            <h3 style={{ padding: "0.5rem 2rem" }}>All Tasks</h3>

<div style={{padding:"1rem 0"}}>
            {
                data.map((item) => {
                    <ul>{item.title}</ul>
                })
            }
            </div>
        </div>
    )
}

export default Main

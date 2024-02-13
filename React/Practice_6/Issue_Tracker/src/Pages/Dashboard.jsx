import React from 'react'
import { Layout } from 'antd'




const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#030637',
};




const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#030637',
};

const layoutStyle = {
  borderRadius: 0,
  width: '100vw',
};

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

const Dashboard = () => {
  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        

        <hr />
<h3 style={{padding:"0.5rem 2rem"}}>All Tasks</h3>
        
        {
          data.map((item)=>{
            <ul>{item.title}</ul>
          })
        }

        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  )
}

export default Dashboard

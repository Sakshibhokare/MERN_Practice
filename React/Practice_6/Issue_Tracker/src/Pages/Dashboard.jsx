import React from 'react'
import { Layout } from 'antd'
import Forms from '../Components/Forms';
import Main from '../Components/Main';


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



const Dashboard = () => {
  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
          
          <Forms></Forms>

        <hr />
          <Main></Main>

         

        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  )
}

export default Dashboard

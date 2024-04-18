import React from 'react'
import { Layout } from 'antd'
import Forms from '../Components/Forms';
import Main from '../Components/Main';
import { useState } from 'react';


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
  const [title, setTitle]=useState("");
  const [issues, setIssues] = useState([
    {
      id:Date.now(),
    title:'dummy issue'
    }
]);
  // const [status, setStatus]=useState("");

  const deleteIssue=()=>{
    console.log('id that we have received', id)
    const updatedIssues =issues.filter((issue)=>{
      return issue.id!= id
    })
    setIssues(updatedIssues)
  }
  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
          
          <Forms title={title} setTitle={setTitle} setIssues={setIssues} issues={issues}></Forms>

        
          <Main issues={issues} deleteIssue={deleteIssue}></Main>

         

        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  )
}

export default Dashboard

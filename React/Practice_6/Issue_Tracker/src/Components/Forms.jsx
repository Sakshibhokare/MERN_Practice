import React from 'react'
import { Button, Form, Input, Avatar, List, Skeleton } from 'antd';
const Forms = ({title, setTitle, setIssues, issues}) => {

    const submitHandler=(e)=>{
        e.preventDefault();
        //append that issues array using setIssues method
        setIssues([...issues,{id:Date.now(),title}])
        console.log('form is submitting')
    }
    return (
        <div>
            <Form
                name="wrap"
                labelCol={{ flex: '110px' }}
                labelAlign="left"
                labelWrap
                wrapperCol={{ flex: 1 }}
                colon={false}
                style={{ maxWidth: 600, padding: "4rem" }}
                onSubmitCapture={submitHandler}
            >
                <Form.Item label="Title" name="username" rules={[{ required: true }]}>
                    <Input onChange={(e)=>setTitle(e.target.value)}/>
                </Form.Item>
{/* 
                <Form.Item label="Status" name="password" rules={[{ required: true }]}>
                    <Input />
                </Form.Item> */}

                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Forms

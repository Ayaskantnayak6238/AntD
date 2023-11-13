import React, { useState } from 'react'
import "./App.css"; 
import { Cascader } from 'antd'; 
//import { PageHeader } from 'antd'; 
//import { Menu } from 'antd'; 
import { Layout } from 'antd'; 
import { Form, Button, Input } from 'antd'; 
//import { Calendar } from 'antd'; 
import { DatePicker } from 'antd'; 

  
  
const { Header, Footer, Sider, Content } = Layout; 
  


export default function App() { 



return ( 
	<div style={{ display: 'block',  width: 1000, padding: 30 }}> 
 
	
  
      <h4>Enter your details !!!!</h4> 
      <> 
        <Layout> 
          <Sider style={{ backgroundColor: 'lightblue' }} > 
           
            <Form 
                name="basicform"
                onFinishFailed={() => alert('Failed to submit')} 
                onFinish={() => alert('Form Submitted')} 
                initialValues={{ remember: true }} 
            > 
             <Form.Item 
              label="Enter yorrname"
              name="Username"
              rules={[{ required: true, message: 'Please enter username' }]} 
             > 
             
              <Input /> 
             </Form.Item> 
             <Form.Item 
              label="Enter yourcollegename"
              name="Username2"
              rules={[{ required: true, message: 'Please enter username' }]} 
             > 
             
              <Input /> 
             </Form.Item> 
             <Form.Item> 
              <Button type="success" htmlType="submit"> 
               Submit  
              </Button> 
             </Form.Item> 
            </Form> 
          </Sider> 
          <Layout style={{ backgroundColor: 'babypink' }}> 
            <Header style={{ backgroundColor: 'red' }}> 
               
              <> 
              <DatePicker onChange={(date) => console.log(date)} 
               placeholder="DOB"/>, 
              </> 
              </Header> 
             
            <Footer style={{ backgroundColor: 'green' }}
           > 
             
      <> 
        <Cascader 
          options={[ 
            { 
              value: 'Madhya Pradesh', 
              label: 'Madhya Pradesh', 
              children: [ 
                { 
                  value: 'Indore', 
                  label: 'Indore', 
                  children: [ 
                    { 
                      value: 'Vijay Nagar', 
                      label: 'Vijay Nagar', 
                    }, { 
                      value: 'Bhawarkuwa', 
                      label: 'Bhawarkuwa', 
                    }, 
                    { 
                      value: 'MR10', 
                      label: 'MR10', 
                    }, 
                  ], 
                }, 
              ], 
            }, 
            { 
              value: 'Odisha', 
              label: 'Odisha', 
              children: [ 
                { 
                  value: 'Bbsr', 
                  label: 'Bbsr', 
                  children: [ 
                    { 
                      value: 'Jagamohan Nagar', 
                      label: 'Jagamohan Nagar', 
                    }, { 
                      value: 'Satyanagar', 
                      label: 'Satyanagar', 
                    }, 
                    { 
                      value: 'Patia', 
                      label: 'Patia', 
                    }, 
                  ], 
                }, 
              ], 
            }, 
          ]} 
          onChange={(data) => { console.log(data) }} 
          placeholder="Select your location" /> 
      </>  
            </Footer> 
          </Layout> 
        </Layout> 
      </> 
	</div> 
); 
}

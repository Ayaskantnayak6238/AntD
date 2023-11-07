import React, { useState } from 'react'
import "./App.css"; 
import { AutoComplete } from 'antd'; 
import { Cascader } from 'antd'; 


export default function App() { 

const [currentValue, setCurrentValue] = useState('') 
const options = [ 
	{label: '1', value: '1'}, 
	{label: '2', value: '2'}, 
	{label: '3', value: '3'}, 
	{label: '4', value: '4'}, 
	{label: '5', value: '5'},
  {lable: 'Fresher', value:'Fresher'},
  {lable:'>5', value:'>5'} 
] 

return ( 
	<div style={{ display: 'block',  width: 700, padding: 30 }}> 
	<h4>Enter your work exprience in year </h4> 
	<AutoComplete 
		options={options} 
		style={{ width: 200 }} 
		onSelect={(value)=> { 
			setCurrentValue(value) 
		}} 
		placeholder="Enter your text"
	/> <br /> 

	<p>Selected Value {`${currentValue}`} </p> 

  <h4>Select your current location</h4> 
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
          placeholder="Select destination" /> 
      </> 
	</div> 
); 
}

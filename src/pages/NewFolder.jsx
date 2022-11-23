import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../component/Button';
import { postFolder } from '../features/folderStructure/folderSlice';

const NewFolder = () => {
  const navigate = useNavigate();
  const {id : parent} = useParams();

  const getIDName = parent.split("&");
  // console.log(getIDName);
  const [fName,setName] = useState('');
  const dispatch = useDispatch();
  
  const inputChange = (e)=>{
     setName(e.target.value);
  }
  const submitData = ()=>{
    dispatch(postFolder({parent:getIDName[0],fName}))
    navigate('/')
  }
  const Cancel = ()=>{
    navigate('/');
  }
 
  
  return (
    <div className='NF'>
        <div className='NewFolder'>
        <label
            className='label'
        >Add Folder in `{getIDName[1]}`</label>
        <br/>
        <input 
            className='inputStyle'
            type='text'
            value={fName}
            onChange={inputChange}
            placeholder='Folder Name'
        />
        <br/>
        <div className='btnSet'>
            <Button Submit={Cancel} btnClass={'btnNeg'} txt='Cancel'/>
            <Button 
            Submit={submitData}
            btnClass={'btnPos'} txt='Create'/>
        </div>
        

    </div>
    </div>
    
  )
}

export default NewFolder
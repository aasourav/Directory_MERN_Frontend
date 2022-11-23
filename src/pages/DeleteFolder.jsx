import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../component/Button';
import { dltFolder } from '../features/folderStructure/folderSlice';

const DeleteFolder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id : parent} = useParams();
  const getIDName = parent.split("&");
  // console.log(parent)
  // console.log("HELLO delete",getIDName)
  const deleteData = ()=>{
    dispatch(dltFolder(`${getIDName[0]}&${getIDName[2]}`))
    navigate('/')
  }
  const Cancel = ()=>{
    navigate('/');
  }
  return (
    <div className='NF'>
        <div className='DltFolder'>
            <label
                className='label'
            >Delete {getIDName[1]} ?</label>
            <br/>
            <div className='btnSet'>
                <Button Submit={Cancel} btnClass={'btnPos'} txt='Cancel'/>
                <Button Submit={deleteData} btnClass={'btnNeg'} txt='Delete'/>
            </div>
         </div>
    </div>
  )
}

export default DeleteFolder
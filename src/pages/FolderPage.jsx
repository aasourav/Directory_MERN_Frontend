import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FolderTree from '../component/FolderTree';
import { fetchFolders } from '../features/folderStructure/folderSlice';

const FolderPage = () => {
    const navigate = useNavigate();
    const [rootFolderOpen, setRootOpen] = useState(true)
    const folders = useSelector(state => state.folder)
    

    const openClose =()=>{
        setRootOpen(prev => !prev);
    }
    const Create = ()=>{
        navigate(`/new/${folders.folders['root'].parent}&root`)
    }
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchFolders())
    },[dispatch])


  return (
    <div className='folderPage'>
        {folders.loading? "Loading...." : 
            <div className='folderWrapper'>
                <div className={`bg-blue-200 flex w-full justify-between items-center px-2 py-1 pl-${2}`}>
                    <h3 >
                        {rootFolderOpen ?
                            <i onClick={openClose} className="fa-sharp fa-solid fa-caret-right dirDir"></i>
                            :
                            <i onClick={openClose} className="fa-sharp fa-solid fa-caret-down dirDir"></i>
                        }
                        Root
                    </h3>
                    <i onClick={Create} className="fa-solid fa-plus"></i>
            
                </div>
                {!rootFolderOpen && folders.folders['root']  ? 
                        folders.folders['root'].child.length<1 ?
                            <p className='ml-4'>- Empty Foler</p>
                            :
                            folders.folders['root'].child.map((data,i)=>
                            (<div key={i} className='flex flex-col'>
                                <FolderTree  data={data}
                                padding={1}
                                paretnTrackforDelete={folders.folders['root'].parent}
                                />
                            </div>))
                    :
                  null
                }            
            </div>
        }
    </div>
  )
}
export default FolderPage
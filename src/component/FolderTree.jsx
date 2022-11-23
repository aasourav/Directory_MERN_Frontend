import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FolderTree = ({padding,data,paretnTrackforDelete}) => {
    const navigate = useNavigate();
    const [FolderOpen,setFolderOpen] = useState(true);

    const deletePage = ()=>{
      navigate(`/delete/${folders.folders[data._id].parent+"&"+data.folderName+"&"+paretnTrackforDelete}`);
    }
    const createPage = ()=>{
      navigate(`/new/${folders.folders[data._id].parent+"&"+data.folderName}`)
    }
    const openClose = ()=>{
        setFolderOpen(prev=> !prev)
    }
    const folders = useSelector(state => state.folder)
  return (
    <div>
        <div className='border-t-2'>

            <div className={`bg-blue-200 flex w-full justify-between items-center px-2 py-1 pl-${padding*4}`}>
                  <div className='flex items-center'>
                      <h3 className='pr-4'>
                          {FolderOpen ?
                              <i onClick={openClose} className="fa-sharp fa-solid fa-caret-right dirDir"></i>
                              :
                              <i onClick={openClose} className="fa-sharp fa-solid fa-caret-down dirDir"></i>
                          }
                          {data.folderName}
                      </h3>
                      <i onClick={deletePage} className="fa-regular fa-circle-xmark"></i>
                  </div>
                  <i onClick={createPage} className="fa-solid fa-plus"></i>
            </div>


            {!FolderOpen && folders.folders[data._id]  ? 
                folders.folders[data._id].child.length < 1 ?
                  <p className={`pl-${(1+padding)*4}`}>- Empty Folder</p>
                  :
                folders.folders[data._id].child.map((data,i)=>
                    (<div key={i} className='flex flex-col'>
                        <FolderTree  data={data}
                        padding={padding+1}
                        paretnTrackforDelete={data._id}
                        />
                    </div>))

              :
             null
          }            
        </div>
    </div>
  )
}

export default FolderTree
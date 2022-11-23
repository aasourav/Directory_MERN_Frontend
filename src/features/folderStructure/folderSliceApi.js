import axiosInstance from '../../utils/axios';

export const getFolders = async ()=>{
    
    const response = await axiosInstance.get(`/getFolder/`)
    return response.data;
}

export const addFolders = async(data)=>{
    const response = await axiosInstance.post(`/addFolder/${data.parent}`,{
        name: data.fName,
    })
    return response.data
}

export const deleteFolder = async(data)=>{
    const response = await axiosInstance.delete(`/deleteFolder/${data}`)
    return response.data;
}
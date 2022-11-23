import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addFolders, deleteFolder, getFolders } from "./folderSliceApi";

const initialState = {
    loading:false,
    folders:{},
    isError:false,
    error:''
}
export const fetchFolders = createAsyncThunk("folder/fetchFolder",async ()=>{
    // console.log(parent)
    const Folders = await getFolders();
    return Folders;
})

export const postFolder = createAsyncThunk("folder/postFolder",async(data)=>{
    const Folders = await addFolders(data);
    return Folders
})

export const dltFolder = createAsyncThunk("folder/dltFolder",async (data)=>{
    const Folders = await deleteFolder(data);
    return Folders;
})

const folderSlice = createSlice({
    name:'folder',
    initialState,

    extraReducers: (builder)=>{
        builder
        .addCase(fetchFolders.pending,(state)=>{
            state.isError = false;
            state.loading = true;
            state.error = '';
        })
        .addCase(fetchFolders.fulfilled,(state,action)=>{
            state.loading = false;
            state.folders = action.payload;
            state.error = '';
        })
        .addCase(fetchFolders.rejected,(state,action)=>{
            state.loading = false;
            state.isError = true;
            state.error = action.error?.message;
        })

        .addCase(postFolder.pending,(state)=>{
            state.isError = false;
            state.loading = true;
            state.error = '';
        })
        .addCase(postFolder.fulfilled,(state,action)=>{
            state.loading = false;
            state.folders = action.payload;
            state.error = '';
        })
        .addCase(postFolder.rejected,(state,action)=>{
            state.loading = false;
            state.isError = true;
            state.error = action.error?.message;
        })

        .addCase(dltFolder.pending,(state)=>{
            state.isError = false;
            state.loading = true;
            state.error = '';
        })
        .addCase(dltFolder.fulfilled,(state,action)=>{
            state.loading = false;
            state.folders = action.payload;
            state.error = '';
        })
        .addCase(dltFolder.rejected,(state,action)=>{
            state.loading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.error = '';
        })
    }

})

export default folderSlice;

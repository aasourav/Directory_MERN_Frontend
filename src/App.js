import React from 'react'
import FolderPage from './pages/FolderPage'
// import Button from './component/Button'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DeleteFolder from './pages/DeleteFolder'
import NewFolder from './pages/NewFolder'
const App = () => (
  // <i class="fa-sharp fa-solid fa-caret-down"></i>
  <div>
    {/* <Button/> */}
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<FolderPage/>}/>
          <Route path='/new/:id' element={<NewFolder/>}/>
          <Route path='/delete/:id' element={<DeleteFolder/>}/>
      </Routes>
    </BrowserRouter>

  </div>
)

export default App
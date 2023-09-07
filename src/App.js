
import React from 'react'
import Form from './Form/Form'
import store from './Store/Store'
import {Provider} from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from './Table/Table';
 

const App = () => {

      
   return (
      <div>
         <Provider store ={store}>
         <BrowserRouter>
        <Routes>
           <Route path = '/' element = {<Form />}/>
           <Route path = '/table' element= {<Table/>}/>
        </Routes>
        </BrowserRouter>
         </Provider>
      </div>
  )

  

}

export default App
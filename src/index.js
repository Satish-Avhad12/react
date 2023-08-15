import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from "./Home";
import { Contact } from "./Contact"; 
import { ListEmp } from "./ListEmp";
import { Nopage } from "./Nopage";
import Employee from "./Employee";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Employeeedit} from "./Employeeedit";
import { Employeedel } from "./Employeedel";
import { Employeecreate } from "./Employeecreate";
import { ListProduct } from "./ListProduct";
import { Product } from "./Product";
import { ProductEdit } from "./ProductEdit";
import { Productdel } from "./Productdel";
import { Productcreate } from "./ProductCreate";
import { Listcustomer } from "./ListCustomer";
import Customer from "./Customer";
import  Customeradd  from "./Customeradd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/Home" element={<Home />} />
          <Route path="/Contactus" element={<Contact />} />
          <Route path="/ListEmployee" element={<ListEmp />} />
          <Route path="/emp/:id" element ={<Employee/>}/>
          <Route path="/empedit/:id" element={<Employeeedit />} />
          <Route path ="/empdel/:id" element={<Employeedel/>}/>
          <Route path="/empadd" element={<Employeecreate/>}/>
          <Route path="/ListProduct" element={<ListProduct/>}/>
          <Route path="/prd/:id" element ={<Product/>}/>
          <Route path="/prdadd" element={<Productcreate/>}/>
          <Route path="prdedit/:id" element={<ProductEdit/>} ></Route>
          <Route path="prddel/:id" element={<Productdel/>}/>
          <Route path="/ListCustomer" element={<Listcustomer/>}/>
          <Route path="/cust/:id" element ={<Customer/>}/>
          <Route path="/custadd" element ={<Customeradd/>}/>
          <Route path="*" element={<Nopage />} />
       </Route>=
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

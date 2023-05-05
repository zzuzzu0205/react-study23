import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Link, Route, Routes, NavLink ,useParams} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}
const content = [
  {id:1, title:"HTML",des:"HTML is..."},
  {id:2, title:"CSS",des:"CSS is..."},
  {id:3, title:"JS",des:"JS is..."}
]
function Topics() {
 

  return (
    <div>
      <h2>Topics</h2>
      {
        content.map((a,i)=>{
          return(
            <ul key={content[i].id}>
              <li><NavLink  to={"/topics/" + content[i].id}>{content[i].title}</NavLink></li>
            </ul>
          )})
      }
      
      
    </div>
  );
}
function Topic(){
  let {topic_id} = useParams();
  
  
  return(
    <div>
      <Topics/>
      <h3>Topic</h3>
      <p>{content[topic_id -1].des}</p>
    </div>
  )
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        
        <Route path="/topics/:topic_id" element={<Topic/>}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<div>없는 페이지입니다</div>} />
        
      </Routes>
    </div>
  );
}

export default App;

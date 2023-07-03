import React from 'react';
import './App.css';
import HomeComponent from './components/home-component';
import AllArticlesComponent from './components/all-articles-component';
import AllReportsComponent from './components/all-reports-component';
import ReportByIdComponent from './components/report-by-id';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/* In React Router Dom, a "Link" tag is use to change the "route", a route is a predefined URL in your website's domain that renders a specific view. A view is essentially an arrangement of components to create an HTML page. New routes should be set up using "Route" tags, our Route tags are located in the App.tsx file in the src folder. Once there, you can see there that several routes defined inside of the "Routes" tag; note that the Routes tag must be define in the "BrowserRouter" tag, we happened to wrap our entire application in the BrowserRouter tag, you can see that in the index.tsx file. */}

      <a><Link to="/">Home</Link></a>
      <a><Link to="/path/articles">Articles</Link></a>
      <a><Link to="/path/reports">Reports</Link></a>
      <a><Link to="/path/idreport">Report By Id</Link></a>


      <div className="section-Scontainer">
        {/* The "path" define the URL that triggers this route. The "element" defines which component displays for this route. */}
        <Routes>
          <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
          <Route path="/path/articles" element={<AllArticlesComponent></AllArticlesComponent>}></Route>
          <Route path="/path/reports" element={<AllReportsComponent></AllReportsComponent>}></Route>
          <Route path="/path/idreport" element={<ReportByIdComponent></ReportByIdComponent>}></Route>
        </Routes>
      </div>

      <div>
        <a href="https://www.npmjs.com/package/axios">https://www.npmjs.com/package/axios</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, try creating a component that creates an axios request for a different api, set up the component yoruself.
      
        You can find another open api here: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/*/}
    </div>
  );
}

export default App;

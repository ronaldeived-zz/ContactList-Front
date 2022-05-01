import React from "react";
import { Router, Route } from "react-router-dom";
import PersonList from "./personList";
import AddPerson from "../pages/addPerson";

const Main = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Router>
            <Route exact path='/' element={<PersonList />} />
            <Route exact path='/addPerson' element={<AddPerson />} />
        </Router>
      </div>
    </div>
  );
};

export default Main;

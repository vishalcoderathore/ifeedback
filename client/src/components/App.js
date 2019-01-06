import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <Route component={Header} />
          <Route path="/" component={Landing} exact />
          <Route path="/surveys" component={Dashboard} />
          <Route path="/dashboard" component={SurveyNew} exact={true} />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
};

export default App;

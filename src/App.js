import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Headernav';
import Home from './Home';
import AddNewCourse from './AddNewCourse';
import AddNewTraining from './AddNewTraining';
import AddNewTrainingOnline from './AddNewTrainingOnline';
import AddNewCertificate from './AddNewCertificate';
import ManageCertificate from './ManageCertificate';
import ManageBlog from './ManageBlog';
import AddNewBlog from './AddNewBlog';

import styles from './style.css';


const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/addonlinecourse" component={AddNewCourse} />
                    <Route path="/addnewtraining" component={AddNewTraining} />
                    <Route path="/addnewtrainingonline" component={AddNewTrainingOnline} />
                    <Route path="/addnewcertificate" component={AddNewCertificate} />
                    <Route path="/managecertificate" component={ManageCertificate} />
                    <Route path="/manageblog" component={ManageBlog} />
                    <Route path="/addnewblog" component={AddNewBlog} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
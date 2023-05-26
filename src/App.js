import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Dashboard} from './pages/Dashboard';
import { EmpAdd, EmpModify, EmpView, Card1} from './pages/employee';
import {DesigAdd, DesigModify, DesigView, Card} from './pages/designation';
import {AllRecords} from './pages/AllRecords'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
      <Route path='/records' exact component={AllRecords} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/emp/Add' exact component={EmpAdd} />
        <Route path='/emp/Modify' exact component={EmpModify} />
        <Route path='/employee' exact component={EmpView} />
        <Route path='/employee' exact component={Card1} />
        <Route path='/Product/Add' exact component={DesigAdd} />
        <Route path='/Product/Modify' exact component={DesigModify} />
        <Route path='/designation' exact component={DesigView} />
        <Route path='/Shop/View' exact component={Card} />
      
      
      </Switch>
    </Router>
  );
} 

export default App;

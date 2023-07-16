import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import AddStu from './components/AddStu';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Student and Course Registration
           </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>

       <Switch>
        <Route exact path='/addstudent' component={AddStu} />
        <Route exact path='/' component={Semester} />
        <Route path='/schedule' component={SchedList} />
        <Route exact path='/student' component={AddStu} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
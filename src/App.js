import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Course Registration
           </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path='/' component={AddStu} />
      </Switch>
      <BrowserRouter>

      <Toolbar>
           <Typography variant="h6" color="inherit">
            Course Registration
           </Typography>

        </Toolbar>

       <Switch>
        <Route exact path='/' component={Semester} />
        <Route path='/schedule' component={SchedList} />
        <Route exact path='/students' component={AddStu} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
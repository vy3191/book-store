import { Route, NavLink, Switch } from 'react-router-dom';
import DashBoardHandler from './Dashboard/DashBoardHandler';

const BaseApp = () => {
  return (   
    <div>
    <NavLink exact 
    to="/dashboard">DashBoard</NavLink>
    <Switch>
      <Route exact path="/" render={() => (<div>Book store:</div>)} />
      <Route path="/dashboard" render={() => <DashBoardHandler/>} />
      <Route render={() => (<div>Miss</div>)} />
    </Switch> 
    </div>  
  )
}

export default BaseApp;

import { Route, Switch } from 'react-router';



const BaseApp = () => {
  return (     
    <Switch>
      <Route exact path="/" render={() => (<div>Book store</div>)} />
      <Route render={() => (<div>Miss</div>)} />
    </Switch> 
  )
}

export default BaseApp;

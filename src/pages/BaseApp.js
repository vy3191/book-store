import { Route, Switch, Redirect } from 'react-router-dom';
import DashBoardHandler from './BookStore/BookStoreHandler';
import { Header, Footer } from 'components';

const BaseApp = () => {
  return (   
    <div>
      <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" render={ () => <h1>Home goes here</h1> } />
          <Route path="/book-store" render={ () => <h1>Book store goes here</h1> } />
          <Route path="/contact" render={ () => <h1>Contact goes here</h1> } />
        </Switch> 
      <Footer />
    </div>  
  )
}

export default BaseApp;

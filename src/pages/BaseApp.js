import { Route, Switch, Redirect } from 'react-router-dom';
import BookStoreHandler from './BookStore/BookStoreHandler';
import { Header, Footer } from 'components';

const BaseApp = () => {
  return (   
    <>
      <section className="client-content">
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" render={ () => <h1>Home goes here</h1> } />
          <Route path="/book-store" render={ () => <BookStoreHandler /> } />
          <Route path="/contact" render={ () => <h1>Contact goes here</h1> } />
        </Switch> 
      </section>
      <Footer />
    </>  
  )
}

export default BaseApp;

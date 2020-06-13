import React from "react";
import { Route, Link} from 'react-router-dom';
import { Button, Navbar, Card, CardImg } from 'reactstrap';
import OrderForm from './component/Form'


const App = () => {
 return (

    <>
    <Navbar color='info'>
      <h1>Lambda Eats</h1>
      <Link to={'/'}>
        <Button>
          Home
        </Button>
      </Link>
    </Navbar>
    <Route exact path='/'>
      <Card>
        <CardImg src={require('./component/Pizza.jpg')}/>
        <Link to={'/pizza'}>
        <Button color='info' style={{position: 'absolute', left: '50%', top: '50%'}}>
        Pizza!
        </Button>
        </Link>
      </Card>
    </Route>
    <Route path='/pizza'>
      <OrderForm/>
    </Route>
    </>
  );
};

export default App;

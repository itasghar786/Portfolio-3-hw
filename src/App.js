import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { Home } from './Home';
import { Projects } from './Projects';
import { Contact } from './Contact';
//import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';


class App extends Component {
  render() {
    return (
      //<React.Fragment>
      <div>
        <Router>
          
          <NavigationBar />
          <Jumbotron />
          
          <Layout>
            <Switch>
            
              <Route exact path="/" component={Home} />
              <Route path="/Projects" component={Projects} />
              <Route path="/Contact" component={Contact} />
              
              
            </Switch>
          </Layout>
        </Router>
    
    </div>
    //</React.Fragment>
      
    );
  }
}

export default App;

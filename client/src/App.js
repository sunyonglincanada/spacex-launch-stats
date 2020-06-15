import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import logo from './logo.png';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <img
            src={logo}
            alt='SpaceX'
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <Route path='/' component={Launches} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

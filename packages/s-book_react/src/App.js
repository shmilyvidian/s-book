import Book from './components/Book';
import {ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
       <ApolloProvider client={client}>
          <Book />
        </ApolloProvider>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';
import "./App.css";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Signup from "./components/Signup";
import Trainers from "./components/Trainers";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App background">
        <StoreProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Trainers" element={<Trainers />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
        <Footer />
      </StoreProvider>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;

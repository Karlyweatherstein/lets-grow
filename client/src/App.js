import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";
import "./App.css";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Signup from "./components/Signup";
import Trainers from "./components/Trainers";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
// import Fitness from "./components/Trainers/Fitness";
// import Nutrition from "./components/Trainers/Nutrition";
// import TheArts from "./components/Trainers/TheArts";
// import School from "./components/Trainers/School";
// import Marketing from "./components/Trainers/Marketing";
// import Crafts from "./components/Trainers/Crafts";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/shop" element={<Shop />} />
              {/* <Route path="/fitness" element={<Fitness />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/theArts" element={<TheArts />} />
              <Route path="/school" element={<School />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/crafts" element={<Crafts />} /> */}
            </Routes>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

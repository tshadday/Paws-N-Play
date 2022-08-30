import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Login from './pages/Login';
import ChatHome from './pages/ChatHome';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            {/* Home page with profile cards */}
            <Route 
              path="/" 
              element={<Home />}
            />
            {/* Login page */}
            <Route 
              path="/login" 
              element={<Login />}
            />
            {/* Shows all chats with user's matches */}
            <Route 
              path="/chats"
              element={<ChatHome />}
            />
            {/* Specific chats with other users */}
            <Route 
              path="/chat/:ownerid" 
              element={<Chat />}
            />
            {/* User's profile. Can update info here */}
            <Route 
              path="/profile/:ownerId" 
              element={<Profile />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

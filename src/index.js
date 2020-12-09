import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserContext from "./UserContext";
import Nav from "./Components/Nav";
import Layout from "./Components/Layout";

class App extends React.Component {
    state = {
        currentUser: 'Gerbert'
    }

    changeName = (newName) => {
        this.setState({
            currentUser: newName
        })
    }

    render() {
        return(
            <UserContext.Provider value={{
                user: this.state.currentUser,
                changeName: this.changeName
            }}>
                {/* Any components nested inside of this provider will have access to the state via a consumer */}
                <Nav />
                <Layout />
            </UserContext.Provider>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

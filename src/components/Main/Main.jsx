import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import MessagesContainer from '../Messages/MessagesContainer';
import Startpage from '../Startpage/Startpage';

const Main = () => {
  return (
    <BrowserRouter>
      <main className="main">
        <div className="main__container">
          <div className="main__sidebar">
            <Sidebar />
          </div>
          <div className="main__content">
            <Route exact path="/" component={Startpage} />
            <Route path="/:chat" component={MessagesContainer} />
          </div>
        </div>
      </main>
    </BrowserRouter>
    )
}

export default Main;
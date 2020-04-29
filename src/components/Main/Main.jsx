import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import MessagesContainer from '../Messages/MessagesContainer';
import Startpage from '../Startpage/Startpage';

const Main = () => {
  return (
    <HashRouter>
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
    </HashRouter>
    )
}

export default Main;
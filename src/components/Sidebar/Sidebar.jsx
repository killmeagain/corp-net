import React from 'react';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/common" activeClassName="navigation__link_active">Общий чат</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/work" activeClassName="navigation__link_active">Рабочий чат</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar;

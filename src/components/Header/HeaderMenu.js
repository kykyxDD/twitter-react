import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class HeaderMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menu: [
        {
          key: "home",
          classIcon: "fas fa-home",
          link: '',
          text: 'Главная'
        },
        {
          key: "bell",
          classIcon: "far fa-bell",
          link: '',
          text: 'Уведомления'
        },
        {
          key: "envelope",
          classIcon: "far fa-envelope",
          link: '',
          text: 'Сообщения'
        }
      ]
    }
  }
  render () {
    return (
      <ul className="header--menu menu-hover">
        {this.state.menu.map(obj => {
          return (<li key={obj.key}>
            <Link to={obj.link} className="px-3">
              <i className={obj.classIcon}></i>
              <span className="pl-2 d-md-inline-block d-none">{obj.text}</span>
            </Link>
          </li>)
        })}
      </ul>
    )
  }
}

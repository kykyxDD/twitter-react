import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HeaderTwitter extends Component {
  constructor (props) {
    super(props);
    this.class_text = 'pl-2 d-md-inline-block d-none'
  }
  render () {
    return (
      <div className="header">
        <div className="header--container">
          <div className="d-flex justify-content-between">
            <ul className="header--menu">
              <li >
                <Link to="" className="px-3">
                  <i className="fas fa-home"></i>
                  <span className={this.class_text}>Главная</span>
                </Link>
              </li>
              <li >
                <Link to="" className="px-3">
                  <i className="far fa-bell"></i>
                  <span className={this.class_text}>Уведомления</span>
                </Link>
              </li>
              <li >
                <Link to="" className="px-3">
                  <i className="far fa-envelope"></i>
                  <span className={this.class_text}>Сообщения</span>
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center pr-2">
              <div>
              </div>
              <Button className="btn btn-primary btn-radius font-weight-bold">
                Твитнуть
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getProfile: name => {
//       dispatch(profilePage.getProfilePage(name))
//     }
//   }
// }

export default withRouter(connect(mapStateToProps)(HeaderTwitter));

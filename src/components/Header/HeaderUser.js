import React, { Component } from 'react';
import UserAvatarAuth from './../helpers/UserAvatarAuth';
import UserInfoAuth from './../helpers/UserInfoAuth';
import { Dropdown, DropdownMenu, DropdownToggle, Tooltip } from 'reactstrap';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HeaderUser extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      dropdownOpen: false,
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      tooltipOpen: false
    });
  }
  toggleTooltip() {
    // console.log('toggleTooltip')
    if(!this.state.dropdownOpen){
      this.setState({
        tooltipOpen:  !this.state.tooltipOpen 
      });
    }
  }
  render () {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
        >
          <div className="user-avatar mx-2 cursor-pointer" id="tooltip-userSetting">
              <UserAvatarAuth  photo={this.props.user.profile_image_url}/>
              <Tooltip placement="bottom" autohide={false} isOpen={this.state.tooltipOpen} toggle={this.toggleTooltip} target="tooltip-userSetting">
                Профиль и настройки
              </Tooltip>
          </div>
          
        </DropdownToggle>
        <DropdownMenu right className="dropdown-userSetting-menu">
          <div className="dropdown-caret">
            <span className="caret-outer"></span>
            <span className="caret-inner"></span>
          </div>
          <div className="border-bottom pb-1">
            <UserInfoAuth user={this.props.user} />
          </div>
          <div className="border-bottom py-2 d-flex flex-column">
            <Link to="" className="dropdown-userSetting-item px-3"><i className="far fa-user mr-2"></i>Профиль</Link>
            <Link to="" className="dropdown-userSetting-item px-3"><i className="far fa-file-alt mr-2 ml-1"></i>Список</Link>
            <Link to="" className="dropdown-userSetting-item px-3"><i className="fas fa-bolt mr-2 ml-1"></i>Моменты</Link>
          </div>
          <div className="border-bottom py-2 d-flex flex-column">
            <Link to="" className="dropdown-userSetting-item px-3"><i className="far fa-copyright mr-2 ml-1"></i>Реклама</Link>
            <Link to="" className="dropdown-userSetting-item px-3"><i className="far fa-chart-bar mr-2 ml-1"></i>Аналитика</Link>
          </div>
          <div className="border-bottom py-2 d-flex flex-column">
            <Link to="" className="dropdown-userSetting-item px-3">Настройки и конфиденциальность</Link>
            <Link to="" className="dropdown-userSetting-item px-3">Справочный центр</Link>
            <Link to="" className="dropdown-userSetting-item px-3">Горячие клавиши</Link>
            <Link to="" className="dropdown-userSetting-item px-3">Выйти</Link>
          </div>
          <div className="pt-2 d-flex flex-column">
            <Link to="" className="dropdown-userSetting-item px-3 d-flex justify-content-between">
              Ночной режим <i className="far fa-moon ml-auto text-primary my-auto"></i>
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
      
    )
  }
}
const mapStateToProps = state => {
  console.log(state.user)
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

export default connect(mapStateToProps)(HeaderUser);
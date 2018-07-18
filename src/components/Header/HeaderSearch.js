import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

export default class HeaderUser extends Component {
  constructor (props){
    super(props)
    this.state = {
      dropdownOpen: false,
      listSearch: ['yandex', 'nasa', 'record']
    }
    this.toggle = this.toggle.bind(this)
  }
  isOpenDropdownSearch (val) {
    this.setState({
      dropdownOpen: val
    })
  }
  focusFormSearch () { 
    if(this.state.listSearch.length) this.isOpenDropdownSearch(true)
  }
  blurFormSearch () {
    this.isOpenDropdownSearch(false)
  }
  clearListSearch () {
    this.setState({
      listSearch: []
    })
    this.isOpenDropdownSearch(false)
  }
  delItemSearch (key) {
    this.state.listSearch.splice(key, 1)
    this.setState({
      listSearch: this.state.listSearch
    })
  }
  getLinkSeach (text) {
    return `/search?q=${text}`
  }
  toggle(){
    return
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
          <div className="form-search">
            <label className="w-100">
              <input type="seach" className="w-100" placeholder="Поиск в Твиттере" onFocus={this.focusFormSearch.bind(this)} />
              <span className="position-absolute icon-search">
                <i className="fas fa-search fa-lg"></i>
              </span>
            </label>
          </div>          
        </DropdownToggle>
        <DropdownMenu right className="dropdown-userSetting-menu">
          <div className="dropdown-caret">
            <span className="caret-outer"></span>
            <span className="caret-inner"></span>
          </div>
          <div className="d-flex justify-content-between pb-2 pt-1 px-2">
            <div className="white-space-nowrap pr-3" >
              Недавние запросы
            </div>
            <div className="text-primary cursor-pointer" onClick={this.clearListSearch.bind(this)} >
              Очистить
            </div>
          </div>
          <div className="list_search">
            {this.state.listSearch.map((obj, index)=> {
              return (<div key={'list_search--'+index} className="list_search--item cursor-pointer px-2 py-2 d-flex justify-content-between align-items-center">
                <Link to={this.getLinkSeach(obj)} className="text">{obj}</Link>
                <div className="" onClick={this.delItemSearch.bind(this, index)}><i className="fas fa-times"></i></div>
              </div>)
            })}
          </div>
        </DropdownMenu>
      </Dropdown>
     
    )
  }
}
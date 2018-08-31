
import React, {Component} from 'react';
import {month} from "./../../../data/configConst";

class InfoAccount extends Component {

  get profile() {
    return this.props.profile
  }
  get dateCreatedAt(){
    const date = new Date(this.profile.created_at)

    return `${month[date.getMonth()]} ${date.getFullYear()} г.`
  }

  get urls () {
    return this.profile && 
    this.profile.entities.url && 
    this.profile.entities.url.urls ? 
      this.profile.entities.url.urls : 
      []
  }

  render () {
    return (
      <div className="py-3 font-size-12px pl-2" >
        <div className="font-weight-bold h5 mb-0  ">
          {this.profile.name} 
          {this.profile.verified ? 
          <i className="fas fa-user-check pl-2 text-primary"></i>
          : ''}
        </div>
        <div className="text-secondary">@{this.profile.screen_name}</div>
        <div className="py-2">{this.profile.description}</div>
        <div className="text-secondary">
          <div className="pb-2"><i className="fas fa-map-marker-alt pr-2"></i> {this.profile.location}</div>
          <div className="pb-2">
            { this.urls ? 
              this.urls.map((item, index)=>{
                return (<div key={`url_${index}`}>
                  <a href={item.url} className="text-secondary"><i className="fas fa-link pr-2"></i>{item.display_url}</a>
                </div>)
              }) :''}
          </div>
          <div className="pb-2">
            <i className="far fa-calendar-alt pr-2"></i> Дата регистрации: {this.dateCreatedAt}
          </div>
        </div>
        

        
      </div>
    )
  }
}


export default InfoAccount
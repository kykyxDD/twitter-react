import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {reduction} from "../../helpers/ReductionNumber";

class UserPageHeaderNavPage extends Component {
  constructor (props) {
    super(props);
    console.log(props)
    this.state = {
      menu: [
        {
          key: "twitStatuses",
          link: '',
          text: 'Твиты',
          val: props.profile ? reduction(props.profile.statuses_count) : 0
        },
        {
          key: "twitFriends",
          link: '',
          text: 'Читаемые',
          val: props.profile ? reduction(props.profile.friends_count) :  0
        },
        {
          key: "twitFollowers",
          link: '',
          text: 'Читатели',
          val: props.profile ? reduction(props.profile.followers_count) :  0
        },
        {
          key: "twitFavourites",
          link: '',
          text: 'Нравится',
          val: props.profile ? reduction(props.profile.favourites_count) :  0
        }
      ]
    }
  }
  
  render() {
    return (      
      <div className=" menu-hover d-flex">
        {this.state.menu.map(obj => {
          return (
            <Link to={obj.link} key={obj.key} className="px-3 h-100 d-flex">
              <div className="my-auto text-center context">
                <span className="">{obj.text}</span><br />
                <span className="font-weight-bold">{obj.val}</span>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default UserPageHeaderNavPage;
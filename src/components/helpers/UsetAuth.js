import React from 'react';
import UserAvatarAuth from './UserAvatarAuth';
import UserInfoAuth from './UserInfoAuth';

export default function UsetAuth (props) {
  return (
    <div className="d-flex pt-4">
      <UserAvatarAuth photo={props.user.photo}/>
      <UserInfoAuth user={props.user}/>
    </div>
  )
}
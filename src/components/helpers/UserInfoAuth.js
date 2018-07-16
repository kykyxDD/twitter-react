import React from 'react';

export default function UserInfoAuth (props) {
  return (
  <div className="pl-3 info_searched_user">
    <div className="font-weight-bold">{props.user.name}</div>
    <div className="text-muted">@{props.user.login}</div>
  </div>)
}
import React from 'react';
import defaultProfile from 'images/default_profile_normal.png';

export default function UserAvatarAuth (props) {
  const getImagePhoto = props.photo || defaultProfile;  
  const getStyle = { backgroundImage: `url(${getImagePhoto})`}

  return <div className="icon user-avatar" style={getStyle} />
}
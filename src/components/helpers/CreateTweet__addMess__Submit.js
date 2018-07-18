import React from 'react';
import { Button } from 'reactstrap';

export default function CreateTweetAddMessSubmit (props){
    console.log(props.addMess)
    const btnAdd = props.addMess && <Button outline color="primary" className="btn-radius" onClick={props.onAddMess}>+</Button> 
    return (
      <div>
        { btnAdd }
        <Button color="primary" className="btn-radius ml-3" onClick={props.onSublitNewTweet}>{props.text}</Button>
      </div>
    )

}
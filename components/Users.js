import React from 'react';

const User = (props) => (
    <div key={props.course.id}>
        <p>{`${props.user.name}, ${props.user.age}`}</p>
        <p>{`${props.user.location}`}</p>
        <img src={props.user.img} />
        <p>{`${props.user.job}`}</p>
        <p>{`${props.user.bio}`}</p>
    </div>
);
export default User;
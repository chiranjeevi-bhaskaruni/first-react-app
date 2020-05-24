import React from 'react';
import { Member } from './member/member.component';

export const MemberList = (props) => {
    console.log("MemberList Props: ", props);
    return (
        <div>
                Child elements appear here: {props.children}
                {
                    props.members.map((member, index) => <Member key={index} member={member}></Member>)
                }
        </div>
    );
}
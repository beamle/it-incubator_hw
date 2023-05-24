import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

type FriendMessagePropsType = {
    message: MessageType
}

const FriendMessage = (props: FriendMessagePropsType) => {

    const { id, user, message } = props.message

    return (
        <div
            id={'hw1-friend-message-' + id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img id={'hw1-friend-avatar-' + id} src={user.avatar}/>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + id}
                        className={s.friendName}
                    >
                        {user.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + id}
                        className={s.friendMessageText}
                    >
                        {message.text}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + id}
                className={s.friendTime}
            >
                {message.time}
            </div>
        </div>
    )
}

export default FriendMessage

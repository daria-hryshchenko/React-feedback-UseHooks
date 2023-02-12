import React from "react";
import PropTypes from "prop-types";
import { NotificationWrapper } from "./NotificationStyle";

const Notification = ({ message }) => {
    return (
        <NotificationWrapper>
            {message}
        </NotificationWrapper>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}


export default Notification;
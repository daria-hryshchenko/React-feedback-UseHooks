import React from "react";
import { FeedbackOptionWrapper, Button } from "./FeedbackStyle";
import PropTypes from "prop-types";


const FeedbackOption = ({ options, onLeaveFeedback }) => ( 
    <FeedbackOptionWrapper>
        {options.map(option => {
            return (
                <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{ option}</Button>
            )
        })}
    </FeedbackOptionWrapper>
);

export default FeedbackOption;

FeedbackOption.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
import React from "react";
import PropTypes from "prop-types";
import { StatisticsWrapper, Good, Neutral, Bad, Total, PositivePercentage } from "./StatisticsStyle";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatisticsWrapper>
            <Good>Good: { good}</Good>
            <Neutral>Neutral: { neutral}</Neutral>
            <Bad>Bad: {bad} </Bad>
            <Total>Total: {total}</Total>
            <PositivePercentage>Positive feedback: { positivePercentage}%</PositivePercentage>
        </StatisticsWrapper>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}





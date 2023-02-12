import React from 'react';
import { SectionWrapper, Title } from "./SectionStyle";
import PropTypes from "prop-types";

const Section = ({title, children}) => {
    return (
        <SectionWrapper>
            <Title>{title}</Title>
            {children}
        </SectionWrapper>
    )
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element
}

export default Section;


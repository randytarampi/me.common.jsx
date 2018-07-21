import React from "react";
import PropTypes from "prop-types";
import {Row} from "react-materialize";

const RowBlock = ({name, className, ...props}) =>
	<Row id={name} name={name} {...props} className={["block", className].join(" ").trim()}/>;

RowBlock.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string
};

RowBlock.defaultProps = {
	className: ""
};

export default RowBlock;

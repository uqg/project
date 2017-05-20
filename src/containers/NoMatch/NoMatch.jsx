import React from "react";
import styles from "./NoMatch.scss";

class NoMatch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.error}>
				No Match
			</div>
		);
	}
}



export default NoMatch;

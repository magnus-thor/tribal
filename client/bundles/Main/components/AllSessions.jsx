import React from "react";

const AllSessions = props => {
	let sessionlist = props.sessionlist;

	let sessions = sessionlist.map(session => {

		return (
			<div>
				<h1>{session.title}</h1>
				<h4>{new Date(session.start_date).toLocaleString('en-GB', { h12: false })}</h4>
				<h4>{new Date(session.end_date).toLocaleString('en-GB', { h12: false })}</h4>
			</div>
		);
	});
	return <div>{sessions}</div>;
};

export default AllSessions;

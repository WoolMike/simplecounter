import React from "react";
import Card from "./Card";
//include images into your bundle


//create your first component
const Home = (props) => {
	return <>
		<div className=" d-flex justify-content-center align-items-center" >
			<Card icon />
			<Card num={Math.floor((props.seconds % 1000000) / 100000)} />
			<Card num={Math.floor((props.seconds % 100000) / 10000)} />
			<Card num={Math.floor((props.seconds % 10000) / 1000)} />
			<Card num={Math.floor((props.seconds % 1000) / 100)} />
			<Card num={Math.floor((props.seconds % 100) / 10)} />
			<Card num={props.seconds % 10} />
		</div>

	</>


};

export default Home;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';





function Card(props) {
    return <>
        <div className="container bg-dark p-2 ">
            <div className=" d-flex flex-column justify-content-center" style={{ width: "40px" }}>
                <div class="card ">
                    <div class="card-body bg-dark p-2 d-flex justify-content-center" >
                        <h1 className="text-light" >{props.icon ? <FontAwesomeIcon icon={faClock} /> : props.num}</h1>
                    </div>
                </div>
            </div>
        </div>
    </>


}

export default Card;
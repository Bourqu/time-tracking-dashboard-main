import { useState } from "react";

export default function Card({ category, backgroundColor }) {
    const [hours, setHours] = useState(0)

    const cardStyle = { backgroundColor: backgroundColor }


    return (
        <div className="Card" style={cardStyle}>
            <img className= "icon" src={"./src/assets/icon-" + category.toLowerCase() + ".svg"} />
            <div className="inner-card">
                <div>
                    <p>{category}</p>
                    <img src="./src/assets/icon-ellipsis.svg" alt="" />
                </div>
                <h1>{hours}hrs</h1>
            </div>
        </div >)



}
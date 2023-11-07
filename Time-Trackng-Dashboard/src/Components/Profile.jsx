import { useState } from "react";



export default function Profile() {
    const [option, setOption] = useState("daily")

    return (
        <div className="profile">
            <div className="upper">
                <img src="./src/assets/image-jeremy.png" alt="" />
                <br />
                <p>Report for</p>
                <h1>Jeremy<br></br>Robson</h1>
            </div>
            <div className="lower">
                <p><a href="">Daily</a></p>
                <p><a href="">Weekly</a></p>
                <p><a href="`">Monthly</a></p>
            </div>
            {/**<Cardgrid />**/}

        </div>


    )
}
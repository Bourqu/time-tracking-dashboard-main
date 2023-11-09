import { useState } from "react";



export default function Profile() {
    const [option, setOption] = useState("daily")

    const handleLinkClick = (selectedOption) => {setOption(selectedOption)}



    return (
        <div className="profile">
            <div className="upper">
                <img src="./src/assets/image-jeremy.png" alt="" />
                <br />
                <p>Report for</p>
                <h1>Jeremy<br></br>Robson</h1>
            </div>
            <div className="lower">
              <p>
          <a
            href="#"
            style={{
              color: option === "daily" ? "white" : "inherit"
            }}
            onClick={() => handleLinkClick("daily")}
          >
            Daily
          </a>
        </p>
        <p>
          <a
            href="#"
            style={{
              color: option === "weekly" ? "white" : "inherit"
            }}
            onClick={() => handleLinkClick("weekly")}
          >
            Weekly
          </a>
        </p>
        <p>
          <a
            href="#"
            style={{
              color: option === "monthly" ? "white" : "inherit"
            }}
            onClick={() => handleLinkClick("monthly")}
          >
            Monthly
          </a>
        </p>
      </div>
    </div>
  );

}
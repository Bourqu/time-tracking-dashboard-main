import React from "react";

export default function Profile({ selectedStatus, onStatusChange }) {
    const statusOptions = ["daily", "weekly", "monthly"];
    
    return (
        <div className="profile">
            <div className="upper">
                <img src="./src/assets/image-jeremy.png" alt="" />
                <br />
                <p>Report for</p>
                <h1>Jeremy<br></br>Robson</h1>
            </div>
            <div className="lower">
                {statusOptions.map((status) => (
                    <p key={status}>
                        <a
                            href="#"
                            onClick={() => onStatusChange(status)}
                            className={selectedStatus === status ? "selected" : ""}
                        >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </a>
                    </p>
                ))}
            </div>
        </div>
    );
}
import React, { useState, useEffect } from "react";

export default function Card({ category, backgroundColor, data, selectedStatus }) {
    const [hours, setHours] = useState(0);
    const [previous, setPrevious] = useState(0)
    const cardStyle = { backgroundColor: backgroundColor };

    // Use the useEffect hook to update hours when selectedStatus changes
    useEffect(() => {
        if (selectedStatus.selectedStatus) {
            setHours(data.timeframes[selectedStatus.selectedStatus].current);
            setPrevious(data.timeframes[selectedStatus.selectedStatus].previous)
        }
    }, [selectedStatus, data]);

    return (
        <div className="Card" style={cardStyle}>
            <img className="icon" src={`../public/icon-${category.toLowerCase()}.svg`} />
            <div className="inner-card">
                <div>
                    <p>{category}</p>
                    <img src="./icon-ellipsis.svg" alt="" />
                </div>
                <h1>{hours} hrs</h1>
                <p>Previous Period: {previous}</p>

            </div>
        </div>
    );
}
import { useState } from "react";
import Card from "./Card"

export default function CardGrid() {

    const categories = ["Work", "Play", "Study", "Exercise", "Social", "Self-Care"]



    return (
        <div className="Cardgrid">

            {categories.map((category) => (

                <Card key={category} category={category} backgroundColor={"var(--" + category + ")"} />))}

        </div>


    )


}
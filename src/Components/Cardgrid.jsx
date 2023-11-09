import { useState } from "react";
import Card from "./Card"
import data from '../assets/data.json'

export default function CardGrid(selectedStatus) {

   


    return (
        <div className="Cardgrid">

            {data.map((category) => (


                <Card key={category.title} category={category.title} backgroundColor={"var(--" + category.title + ")"} data={category} selectedStatus={selectedStatus} />))}

        </div>


    )


}
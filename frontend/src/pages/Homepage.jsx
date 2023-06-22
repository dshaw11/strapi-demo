import React from "react";
import useFetch from "../hooks/useFetch";
// import { Link } from "react-router-dom";

import Card from "../components/Card/Card";

export default function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:3001/api/reviews');


    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }
    if (error) return <p>Error :(</p>


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 ">
            {data.data.map(review => (

                <Card key={review.id}
                    title={review.attributes.title}
                    rating={review.attributes.rating}
                    // body={review.attributes.body}
                    published={review.attributes.publishedAt}
                    id={review.id}
                 />
            ))}
        </div>
    )
}
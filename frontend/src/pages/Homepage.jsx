import React from "react";
import useFetch from "../hooks/useFetch";
// import { Link } from "react-router-dom";

import Card from "../components/Card/Card";

export default function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:3001/api/reviews');


    console.log(data.data);

    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }
    if (error) return <p>Error :(</p>


    return (
        <div>
            {data.data.map(review => (

                <Card key={review.id}
                    title={review.attributes.title}
                    rating={review.attributes.rating}
                    body={review.attributes.body}
                    published={review.attributes.publishedAt}
                    id={review.id}
                 />
            ))}
        </div>
    )
}
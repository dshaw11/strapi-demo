import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card/Card";

export default function ReviewDetails() {
    const { id } = useParams();
    const { loading, error, data } = useFetch('http://localhost:3001/api/reviews/' + id);


    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }
    if (error) return <p>Error :(</p>

    console.log(data)
    return (
        <div className="grid grid-cols-1 ">
            <Card key={data.data.id}
                    title={data.data.attributes.title}
                    rating={data.data.attributes.rating}
                    body={data.data.attributes.body}
                    published={data.data.attributes.publishedAt}
                    id={data.data.id}
                    className='justify-center items-center items-center'
                 />
        </div>
    )
}
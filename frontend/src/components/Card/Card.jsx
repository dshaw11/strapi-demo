import React from "react";
import { Link } from "react-router-dom";
import './Card.css';


export default function Card(review) {
    const { id, title, rating, body, published } = review
    // console.log(review);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-3 review-card" id={id}>
            <div class="h-15 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l rating">{rating}/10</div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="font-bold text-xl mb-2 utk-orange">{title}</div>
                    <p className="text-gray-700 text-base">{body}...</p>
                </div>
                <div className="flex items-center">
                    
                    <div className="text-sm">
                        {/* <p className="text-gray-900 leading-none "></p> */}
                        <p className="text-900 ">Published: {published}</p>
                        <Link to={`/details/${id}` } className="utk-orange">Click Here to Read More </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
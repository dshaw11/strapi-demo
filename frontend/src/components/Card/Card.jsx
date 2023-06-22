import React from "react";
import { Link } from "react-router-dom";


export default function Card(review) {
    const { id, title, rating, body, published } = review
    // console.log(review);
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-3" id={id}>
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <div class="text-gray-900 font-bold text-xl mb-2">{title}</div>
                    <p class="text-gray-700 text-base">{body}</p>
                </div>
                <div class="flex items-center">
                    
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none">Rating {rating}/10</p>
                        <p class="text-gray-600">Published: {published}</p>
                        <Link to={`/details/${id}`}>Read More </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
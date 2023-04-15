import React from "react";

const Card = ({ results }) => {
    let display;

    if (results) {
        display = results.map((char) => {
            let { id, image, name, status, location } = char;

            return (
                <div key={id} className="text-center p-3">
                    <div class="relative inline-block">
                        <img className="rounded-t-lg" src={image}></img>
                        {status === "Alive" ? (
                            <span class="absolute top-3 right-5 inline-block bg-gradient-to-r from-green-300 to-green-500 border-2 border-black rounded-xl p-1">
                                {status}
                            </span>
                        ) : status === "Dead" ? (
                            <span class="absolute top-3 right-5 inline-block bg-gradient-to-r from-red-300 to-red-500 border-2 border-black rounded-xl p-1">
                                {status}
                            </span>
                        ) : (
                            <span class="absolute top-3 right-5 inline-block bg-gradient-to-r from-gray-300 to-gray-500 border-2 border-black rounded-xl p-1">
                                {status}
                            </span>
                        )}
                        <div className="border-2 rounded-b-lg">
                            <div className="font-bold text-xl"> {name}</div>
                            <div>Last Location:</div>
                            <div className="font-semibold">{location.name}</div>
                        </div>
                    </div>
                </div>
            );
        });
    } else {
        display = "No Characters Found :/";
    }

    return <>{display}</>;
};

export default Card;

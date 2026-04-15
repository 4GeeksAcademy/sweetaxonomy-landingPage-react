import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export const Card = () => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100 text-center">
                <img src={rigoImage} className="card-img-top" alt="rigo-baby" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Card title</h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
                    </p>
                </div>
                <div className="card-footer bg-white">
                    <button className="btn btn-primary">
                        Find Out More!
                    </button>
                </div>
            </div>
        </div>
    );
};
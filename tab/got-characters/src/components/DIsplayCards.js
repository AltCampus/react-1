import React from "react";
export default function DisplayCards({ name, image, description }) {
  return (
    <>
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={image} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{name}</p>
              </div>
            </div>

            <div className="content">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
}

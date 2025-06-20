import React from "react";

export default function Header() {
    return (
        <div className="header">
          <div className="headerContainer d-flex flex-wrap justify-content-between container p-3 rounded-bottom ">
            <span className="fs-4">DevDeck</span>
            <ul className="nav gap-3 me-5">
                <li className="nav-item mt-2">Home</li>
                <button className="btn">Get Started</button>
            </ul>
          </div>
        </div>
    );
}

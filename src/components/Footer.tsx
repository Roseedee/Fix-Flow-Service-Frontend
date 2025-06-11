import React from "react";
import "@styles/components/Footer.css"

import appIcon from '@assets/icons/app.png';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <img src={appIcon} alt="" />
                <h3>FIX FLOW SERVICE</h3>
            </div>
            <div className="footer-content">
                <a href="/">Home</a>
                <a>About</a>
                <a>Contact</a>
            </div>
        </div>
    )
}
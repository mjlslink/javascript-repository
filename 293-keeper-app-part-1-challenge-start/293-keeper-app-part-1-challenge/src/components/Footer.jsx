import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return <footer>Copyright {year} Michael Larsen</footer>
}

export default Footer;
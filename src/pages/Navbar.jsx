import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/dustfreehublogo.png";
import { useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();

    return(
        <>
            <div className={styles.navbar}>
                <div className={styles.logoHolder}><img src={logo} alt="Dust Free Hub Logo" className={styles.dustLogo}/></div>
                    <div className={styles.navHolder}>
                        <span onClick={() => navigate("/")}>HOME</span>
                        <span onClick={() => navigate("/services")}>SERVICES</span>
                        <span onClick={() => navigate("/")}>CONTACT</span>
                        <span onClick={() => navigate("/")}>ABOUT US</span>
                    </div>
                {/* <div className={styles.otherHolder}></div> */}
            </div>
        </>
    );
}
export default Navbar;
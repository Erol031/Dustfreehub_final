import React from "react";
import Navbar from "./Navbar";
import styles from "../pages/Home.module.css";
import image1 from "../assets/1.png"; // Import the image
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";

function Home() {
    return (
        <>
            <div className={styles.container}>
                <div
                    className={styles.slides}
                    style={{ backgroundImage: `url(${image1})` }} // Use template literals for image import
                >
                    <Navbar />
                </div>
                <div 
                    className={styles.slides}
                    style={{ backgroundImage: `url(${image2})` }}
                >

                </div>
                <div
                    className={styles.slides}
                    style={{ backgroundImage: `url(${image3})` }} // Use template literals for image import
                >
                </div>
                <div 
                    className={styles.slides}
                    style={{ backgroundImage: `url(${image4})` }}
                >

                </div>
                <div
                    className={styles.slides}
                    style={{ backgroundImage: `url(${image5})` }} // Use template literals for image import
                >
                </div>
            </div>
        </>
    );
}

export default Home;

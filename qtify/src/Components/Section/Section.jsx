import React, {useState} from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css"
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel"

export default function Section({title, data, type}){
    const [carouselData, setCarouselData] = useState(false);
    // console.log(type)

    const handleToggle = () => {
        setCarouselData(prevState => !prevState)
    }

    return (
        <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselData ? "Collapse All" : "Show All"}</h4>
        </div>
        {/* {console.log(data)} */}
       {data.length === 0? (
            <CircularProgress />
        ) : (
            <div className={styles.cardWrapper}>
                {!carouselData ? 
                    (
                    <div className={styles.wrapper}>
                        {data.map((ele) => <Card data={ele} type={type} />)}
                    </div>
                    ) 
                    :
                    (
                        <Carousel 
                            data={data}
                            renderedComponent={(data) => <Card data={data} type={type} />}
                        />
                    )
                }            
            </div>
        )} 
        </div>
    )
}

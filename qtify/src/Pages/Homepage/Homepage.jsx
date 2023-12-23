import React from "react";
import styles from "./Homepage.module.css"
import { useOutletContext } from "react-router-dom";
import Hero from "../../Components/Hero/Hero"
import Section from "../../Components/Section/Section";

function Homepage(){
    const {data} = useOutletContext();
    // console.log(data);
    const { topAlbums, newAlbums, songs } = data;
    // console.log(topAlbums);

    return (
        <>
        <Hero />
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album"/>
            
            <Section title="New Albums" data={newAlbums} type="album"/>
            {/* <Section title="Songs" data={topAlbums} type="song"/> */}
        </div>
        </>
    )

}

export default Homepage;
import React from 'react'
import styles from './card.module.css'


const Card = ({data, smileIndex, onDecreement, onIncreement}) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.rating}>
                    <button onClick={onDecreement} className={styles.ratingBtn}> - </button>
                    <span className={styles.count}>{data.vote}</span>
                    <button onClick={onIncreement} className={styles.ratingBtn}> + </button>
                </div>
                <p className={styles.smileDescription}>{data.joke}</p>
                <div className={styles.smile}>{smileIndex} </div>
            </div>
        </>
    )
}

export default Card
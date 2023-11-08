import React from 'react'
import styles from './content.module.css'

const LeftSide = () => {
    
    return (
        <div className={styles.leftSide}>
            <h1 className={styles.title}>DAD JOKES</h1>
            <div className={styles.imgBox}>
                <img className={styles.smileImg} src='https://www.pngall.com/wp-content/uploads/1/Smile-Transparent.png' alt='smile' />
            </div>
            <button className={styles.smileBtn}>NEW JOKES</button>
        </div>
    )
}

export default LeftSide
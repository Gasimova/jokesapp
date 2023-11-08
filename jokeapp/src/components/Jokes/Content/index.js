import LeftSide from './LeftSide'
import RightSide from './RightSide'
import styles from './content.module.css'
import React from 'react'

const Content = ({jokes, onIncreement, onDecreement}) => {




  
  return (
    <div className={styles.content}>
      <div className={styles.box}>
        <LeftSide />
        <RightSide jokes={jokes} onDecreement={onDecreement} onIncreement={onIncreement} />
      </div>
    </div>
  )
}

export default Content
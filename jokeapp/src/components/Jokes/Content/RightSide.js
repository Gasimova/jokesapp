import React from 'react'
import styles from './content.module.css'
import Card from '../Card'
import { smiles } from '../../../constant/smiles'

const RightSide = ({jokes, onIncreement,onDecreement}) => {

    const handleSmiles =(index)=>{
        let smile;
    
        if (index < 2) {
          smile = smiles.smile1
        }else if (index < 4  && index >=2) {
          smile = smiles.smile2
        }
        else if (index < 6  && index >=4) {
          smile = smiles.smile2
        }
        else if (index < 8  && index >=6) {
          smile = smiles.smile3
        }
        else if (index < 10  && index >=8) {
          smile = smiles.smile4
        }
        else if (index < 12  && index >=10) {
          smile = smiles.smile5
        }
        else if (index < 14  && index >=12) {
          smile = smiles.smile6
        }
        else if (index >=14) {
          smile = smiles.smile7
        }
    
        return smile
      }

  return (
    <div className={styles.rightSide}>
        {
            
            jokes.length && 
            jokes?.map((joke, index)=>{
                const smileIndex= handleSmiles(index)
               return <Card data={joke} key={index} smileIndex={smileIndex} onIncreement={()=>onIncreement(index)} onDecreement={()=>onDecreement(index)} />
            })
        }
    </div>
  )
}

export default RightSide
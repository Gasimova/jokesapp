import React, { useEffect, useState } from 'react'
import Content from '../../components/Jokes/Content'
import { getJokes } from '../../service'

const JokesPage = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    handleData()
  }, [])

  const handleData = async () => {

    const result = await getJokes()
    const newData = result.data.results.map((joke) => ({ ...joke, vote: 0 }))

    setJokes(newData)

  }

  const onDecreement = (index) => {
    let newJokesArr = [...jokes]

    newJokesArr[index] = {
      ...newJokesArr[index], vote: newJokesArr[index].vote > 0 ? newJokesArr[index].vote - 1 : 0
    }
    newJokesArr.sort((first, last)=> last.vote - first.vote)
    setJokes(newJokesArr)
  }

  const onIncreement = (index) => {
    let newJokesArr = [...jokes]

    newJokesArr[index] = {
      ...newJokesArr[index], vote: newJokesArr[index].vote + 1
    }
    newJokesArr.sort((first, last)=> last.vote - first.vote)
    setJokes(newJokesArr)
  }


  return (
    <>
      <Content jokes={jokes} onIncreement={onIncreement} onDecreement={onDecreement} />
    </>
  )
}

export default JokesPage
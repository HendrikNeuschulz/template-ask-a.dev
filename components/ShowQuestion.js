import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../helpers/api'
import { hostname } from '../helpers/api'

const apiQuestion = '/api/questions'
function ShowQuestion() {
  const { data, error } = useSWR(apiQuestion, fetcher)

  console.log(data)

  if (error) {
    return 'ERROR!!!'
  }

  return (
    <>
      <ul>
        {data.map((question) => {
          return (
            <>
              <li>{question.question}</li>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default ShowQuestion

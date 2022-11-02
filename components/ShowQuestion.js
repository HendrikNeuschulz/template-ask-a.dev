import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../helpers/api'
import Link from 'next/link'

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
        {data?.map((question) => {
          return (
            <>
              <li>
                <Link
                  key={question.id}
                  href={`/questions/${question.id}`}
                >
                  {question.question}
                </Link>
              </li>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default ShowQuestion

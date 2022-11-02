import { useRouter } from 'next/router'
import { fetcher } from '../../../helpers/api.js'
import useSWR from 'swr'
import Link from 'next/link'

const urlForId = '/api/questions/'

function QuestionItem() {
  const router = useRouter()
  const { questionsId } = router.query

  const test = urlForId + questionsId
  console.log(test)
  const { data, error } = useSWR(test, fetcher)

  console.log(data)
  return (
    <>
      <h2>{data?.question}</h2>

      {data?.answers.map((answer) => {
        return <p key={answer.id}>{answer.answer}</p>
      })}

      <Link href="/">go back</Link>
    </>
  )
}

export default QuestionItem

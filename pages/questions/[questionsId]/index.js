import { useRouter } from 'next/router'
import { fetcher } from '../../../helpers/api.js'
import useSWR from 'swr'
import Link from 'next/link'
import AddQuestionOrAnswer from '../../../components/AddQuestionOrAnswer'
import { sendAnswer } from '../../../helpers/api'

const urlForId = '/api/questions/'

function QuestionItem() {
  const router = useRouter()
  const { questionsId } = router.query
  const { data, mutate, error } = useSWR(urlForId + questionsId, fetcher)
  return (
    <>
      <h2>{data?.question}</h2>

      {data?.answers.map((answer) => {
        return <p key={answer.id}>{answer.answer}</p>
      })}
      <AddQuestionOrAnswer
        onAdd={onAdd}
        buttonText="Add Answer"
      />
      <Link href="/">go back</Link>
    </>
  )

  async function onAdd(answerText) {
    await sendAnswer(questionsId, answerText)
    mutate()
  }
}

export default QuestionItem

import { useState } from 'react'

const maxInputLength = 100
const minInputLength = 4

function AddQuestionOrAnswer({ onAdd, buttonText = 'Send.' }) {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [questionInput, setQuestionInput] = useState('')
  const [inputCounter, setInputCounter] = useState(maxInputLength)

  return (
    <div>
      {isAddOpen ? (
        <>
          <button
            aria-label="close submission form"
            onClick={() => setIsAddOpen(false)}
          >
            x
          </button>
          <form
            onSubmit={(event) => {
              event.preventDefault()

              onAdd(questionInput)

              setQuestionInput('')
              setIsAddOpen(false)
            }}
          >
            <label htmlFor="post">Write your post here:</label>
            <br></br>
            <textarea
              id="post"
              value={questionInput}
              minLength={minInputLength}
              maxLength={maxInputLength}
              onChange={(event) => {
                setInputCounter(maxInputLength - event.target.value.length)
                setQuestionInput(event.target.value)
              }}
            />
            <br></br>
            <span>
              {questionInput.length}/{maxInputLength} - {inputCounter} left
            </span>
            <br></br>
            <button type="submit">{buttonText}</button>
          </form>
        </>
      ) : (
        <button
          aria-label="expand submission form"
          onClick={() => setIsAddOpen(true)}
        >
          +
        </button>
      )}
    </div>
  )
}

export default AddQuestionOrAnswer

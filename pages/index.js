import Head from 'next/head'
import AddQuestionOrAnswer from '../components/AddQuestionOrAnswer'
import ShowQuestion from '../components/ShowQuestion'

function LandingPage() {
  return (
    <>
      <Head>
        <title>Ask away!</title>
      </Head>
      <section>
        <h1>Ask a dev!</h1>
        <p>
          Feel free to browse or ask any question while your identity stays
          stealthy and hidden.
        </p>
        <aside className="ninja">{"Like a freakin' ninja!"}</aside>
        <AddQuestionOrAnswer />
        <ShowQuestion />
      </section>
    </>
  )
}

export default LandingPage

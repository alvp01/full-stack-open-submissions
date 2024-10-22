import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const initialState = {
    selected: 0,
    votes: Array(anecdotes.length).fill(0),
    maxVoteIndex: -1
  }

  const [anecdotesState, setAnecdotesState] = useState(initialState)


  const nextAnecdote = () => {
    var randomNumber = Math.floor(Math.random() * 7)
    while (randomNumber === anecdotesState.selected) {
      randomNumber = Math.floor(Math.random() * 7)
    }
    setAnecdotesState({ ...anecdotesState, selected: randomNumber })
  }

  const voteAnecdote = () => {
    setAnecdotesState(prevState => ({ ...prevState, votes: prevState.votes.map((v, i) => i === anecdotesState.selected ? v + 1 : v) }))
  }

  const updateMaxVoteIndex = () => {
    setAnecdotesState(prevState => (
      { ...prevState, maxVoteIndex: prevState.maxVoteIndex < 0 ? prevState.selected : (prevState.votes[prevState.selected] > prevState.votes[prevState.maxVoteIndex] ? prevState.selected : prevState.maxVoteIndex) })
    )
  }

  const handleVote = () => {
    voteAnecdote()
    updateMaxVoteIndex()
    console.log(anecdotesState.votes)
    console.log(anecdotesState.maxVoteIndex)
  }

  return (
    <div>
      <p>
        {anecdotes[anecdotesState.selected]}
      </p>
      <p>
        has {anecdotesState.votes[anecdotesState.selected]} votes
      </p>
      <button onClick={nextAnecdote}>next anecdote</button>
      <button onClick={handleVote}>vote</button>
      {
        anecdotesState.maxVoteIndex !== -1 && <p>anecdote with most votes: {anecdotes[anecdotesState.maxVoteIndex]}</p>
      }
    </div>
  )
}

export default App

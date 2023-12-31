import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState({});

  const onSelect = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
    console.log(random);
  };

  const onVote = () => {
    setVote((prev) => ({
      ...prev,
      [selected]: (prev[selected] || 0) + 1,
    }));
  };

  const mostVoted = () => {
    let maxVotes = -1;
    let mostVotedAnecdote = "";

    for (const key in vote) {
      if (vote[key] > maxVotes) {
        maxVotes = vote[key];
        mostVotedAnecdote = anecdotes[key];
      }
    }

    return mostVotedAnecdote;
  };

  return (
    <div>
      <h3>Anecdotes of the Day</h3>
      <h5>
        {anecdotes[selected]} has {!vote[selected] ? "0" : vote[selected]}{" "}
        vote
      </h5>
      <button onClick={onSelect}>Next anecdotes</button>
      <button onClick={() => onVote()}>Vote</button>

      <div>
        <h3>Anecdotes with most Vote</h3>
        {mostVoted()}
      </div>
    </div>
  );
};

export default App;

import  { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = ({ target }) => {
    const { value } = target.dataset;
    if (value === "good") setGood((prevGood) => prevGood + 1);
    if (value === "neutral") setNeutral((prevNeutral) => prevNeutral + 1);
    if (value === "bad") setBad((prevBad) => prevBad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  
    return (
      <>
        <Section title="Please leave feedback">
         
        
          <FeedbackOptions options={["good","neutral","bad"]} onLeaveFeedback={onLeaveFeedback} />

        </Section>
        <Section title="Statistics">

          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
          

        </Section>
      </>
    
  )
  }

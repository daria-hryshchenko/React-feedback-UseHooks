import { useState } from 'react';
import styled from 'styled-components';
import Statistics from './Statistics/Statistics';
import FeedbackOption from './FeedbackOption/FeedbackOption';
import Notification from './Notification/Notification';
import Section from './Section/Section';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = feedback => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedback]: prevFeedback[feedback] + 1,
    }));
  };

  const handleTotal = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const handlePositivePercentage = () => {
    return Math.round((feedback.good / handleTotal()) * 100);
  };

  const options = Object.keys(feedback);
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOption onLeaveFeedback={handleIncrement} options={options} />
      </Section>
      <Section title="Statistics">
        {handleTotal() > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={handleTotal()}
            positivePercentage={handlePositivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}

export default App;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0;
`;

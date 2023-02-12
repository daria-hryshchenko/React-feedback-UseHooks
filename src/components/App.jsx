import React from "react";
import styled from "styled-components";
import Statistics from './Statistics/Statistics';
import FeedbackOption from './FeedbackOption/FeedbackOption';
import Notification from "./Notification/Notification";
import Section from "./Section/Section";

export class App extends React.Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }


  handleIncrement = (state) => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  }

  handleTotal() { 
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  handlePositivePercentage() {
    const { good } = this.state;
    return Math.round((good / this.handleTotal()) * 100);

  }

  
  render() {
    const options = Object.keys(this.state);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOption onLeaveFeedback={this.handleIncrement} options={ options} />
        </Section>
        <Section title="Statistics">
          {this.handleTotal() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.handleTotal()}
            positivePercentage={this.handlePositivePercentage()} />
            
        
          ) : (
              <Notification message="There is no feedback" />
          )}

        </Section>
    </Container>
  )
  }
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0;
`





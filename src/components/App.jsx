import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return(
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions/>
        </Section>
        <Section title="Statistics">
            <Statistics
            good="0"
            neutral="0"
            bad="0"
            total="0"
            positivePercentage= "0"
            />
        </Section>
      </>
    )
  }
};

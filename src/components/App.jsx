import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import StatisticsLayout from './StatisticsLayout';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClick = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  positiveReviews = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = total === 0 ? 0 : Math.round((good / total) * 100);
    return percentage;
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions feedback={this.state} onClick={this.onClick} />
        <StatisticsLayout title="Statistics">
          {this.totalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              options={this.state}
              totalCount={this.totalFeedback()}
              positiveReviews={this.positiveReviews()}
            />
          )}
        </StatisticsLayout>
      </Section>
    );
  }
}

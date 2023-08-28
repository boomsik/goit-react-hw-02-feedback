import React, { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import StatisticsLayout from './StatisticsLayout/StatisticsLayout';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good: {
      count: good,
      setCount: setGood,
    },
    neutral: {
      count: neutral,
      setCount: setNeutral,
    },
    bad: {
      count: bad,
      setCount: setBad,
    },
  };
  const totalCount = good + neutral + bad;
  const positiveReviews =
    totalCount === 0 ? 0 : Math.round((good / totalCount) * 100);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} />
      <StatisticsLayout title="Statistics">
        {totalCount !== 0 && (
          <Statistics
            options={options}
            totalCount={totalCount}
            positiveReviews={positiveReviews}
          />
        )}
        {totalCount === 0 && <Notification message="No feedback given" />}
      </StatisticsLayout>
    </Section>
  );
};

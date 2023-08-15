import PropTypes from 'prop-types';

import { Box, Grid, ResultWrapper } from './Statistics.styled';
import StatisticsLayout from '../StatisticsLayout';
import Notification from '../Notification';

const Statistics = ({ feedbackOptions }) => {
  const { good, neutral, bad } = feedbackOptions;
  const optionsKey = Object.keys(feedbackOptions);

  const Feedback = good + neutral + bad;
  const positiveReviews =
    Feedback === 0 ? 0 : Math.round((good / Feedback) * 100);

  return (
    <StatisticsLayout title="Statistics">
      {Feedback === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Box>
          <Grid>
            {optionsKey.map(key => {
              return (
                <div className="option-wrapper" key={key}>
                  <p className="option-name">{key}</p>
                  <p className="option-count">{feedbackOptions[key]}</p>
                </div>
              );
            })}
          </Grid>
          <ResultWrapper>
            <p>Total: {Feedback}</p>
          </ResultWrapper>
          <ResultWrapper>
            <p>Positive feedback: {positiveReviews}%</p>
          </ResultWrapper>
        </Box>
      )}
    </StatisticsLayout>
  );
};

export default Statistics;

Statistics.propTypes = {
  feedbackOptions: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

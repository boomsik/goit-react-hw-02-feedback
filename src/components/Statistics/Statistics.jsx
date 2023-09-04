import PropTypes from 'prop-types';

import { Box, Grid, ResultWrapper } from './Statistics.styled';

const Statistics = ({ options, totalCount, positiveReviews }) => {
  const { good, neutral, bad } = options;
  return (
    <Box>
      <Grid>
        <div className="option-wrapper">
          <span>Good:{good}</span>
          <span>Neutral:{neutral}</span>
          <span>Bad:{bad}</span>
        </div>
      </Grid>
      <ResultWrapper>
        <p>Total: {totalCount}</p>
      </ResultWrapper>
      <ResultWrapper>
        <p>Positive feedback: {positiveReviews}%</p>
      </ResultWrapper>
    </Box>
  );
};

Statistics.propTypes = {
  totalCount: PropTypes.number.isRequired,
  positiveReviews: PropTypes.number.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

export default Statistics;

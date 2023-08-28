import PropTypes from 'prop-types';

import { Box, Grid, ResultWrapper } from './Statistics.styled';

const Statistics = ({ options, totalCount, positiveReviews }) => {
  return (
    <Box>
      <Grid>
        {Object.keys(options).map(key => {
          const option = options[key];
          return (
            <div className="option-wrapper" key={key}>
              <p className="option-name">{key}</p>
              <p className="option-count">{option.count}</p>
            </div>
          );
        })}
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

export default Statistics;

Statistics.propTypes = {
  feedbackOptions: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

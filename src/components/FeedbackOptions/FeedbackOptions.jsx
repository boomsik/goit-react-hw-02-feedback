import PropTypes from 'prop-types';

import { OptionsWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onClick, feedbackOptions }) => {
  return (
    <OptionsWrapper>
      {Object.keys(feedbackOptions).map(key => {
        return (
          <button
            className="optionButton"
            key={key}
            onClick={() => onClick(key)}
            color={key}
            size="large"
            variant="contained"
          >
            {key}
          </button>
        );
      })}
    </OptionsWrapper>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  feedbackOptions: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

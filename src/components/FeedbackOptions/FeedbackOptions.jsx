import PropTypes from 'prop-types';

import { OptionsWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onClick, feedback }) => {
  return (
    <OptionsWrapper>
      {Object.keys(feedback).map(key => {
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
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

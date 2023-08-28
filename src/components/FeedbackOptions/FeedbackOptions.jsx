import PropTypes from 'prop-types';

import { OptionsWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options }) => {
  return (
    <OptionsWrapper>
      {Object.keys(options).map(key => {
        const option = options[key];
        return (
          <button
            className="optionButton"
            key={key}
            onClick={() => option.setCount(option.count + 1)}
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

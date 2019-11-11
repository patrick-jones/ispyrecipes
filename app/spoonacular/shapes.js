import PropTypes from 'prop-types';

const RecipeSummary = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  readyInMinutes: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

const Step = {
  number: PropTypes.number.isRequired,
  step: PropTypes.string.isRequired,
};

const Section = {
  name: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape(Step)).isRequired,
};

const Recipe = {
  ...RecipeSummary,
  dishTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.shape(Section)).isRequired,
};

export {RecipeSummary, Section, Step, Recipe};

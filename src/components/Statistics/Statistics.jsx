import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  total,
  bad,
  positive,
}) => {
  return (
    <ul className={css.statlist}>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{total}</span>
      </li>
      <li>
        Positive Feedback:
        <span>{positive}%</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positive: PropTypes.func.isRequired,
};


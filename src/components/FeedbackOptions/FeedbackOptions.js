import PropTypes from 'prop-types';
import css from './Feedback.module.css'

export const FeedbackOptions = ({
  options, onButtonClick
}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}><button className={css.button} type="button" name='good'>good</button></li>
      <li className={css.item}><button className={css.button} type="button" name='neutral'>neutral</button></li>
      <li className={css.item}><button className={css.button} type="button" name='bad'>bad</button></li>
    </ul>
  )
}

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

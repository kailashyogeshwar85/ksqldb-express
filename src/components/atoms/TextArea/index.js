import PropTypes from 'prop-types';
import './stye.less';
function TextArea(props) {
  const classes = `ke_textarea_${props.theme}`;
  return (
    <textarea
      className= {classes}
      name = {props.name}
      rows= {props.rows}
      cols = {props.cols}
      maxLength = {props.maxChars || 10000 }
      placeholder = {props.placeholder || 'Textrea'}
    />
  );
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  maxChars: PropTypes.number,
  placeholder: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark'])
};

export default TextArea;

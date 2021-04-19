import PropTypes from 'prop-types';
import { Spin } from 'antd';
import './style.less';

const Loading = (props) => {
  return (
    <div className="loading-spinner">
      <Spin
        spinning={props.loading}
        tip={props.text || 'Loading'}
        size={props.size || 'middle'}
        indicator = {props.icon}
      />
    </div>
  )
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  icon: PropTypes.node
}

export default Loading;

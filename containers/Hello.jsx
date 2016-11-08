import { connect } from 'react-redux';

import Hello from '../components/Hello.jsx';

const mapStateToProps = state => ({
  time: state
});

const mapDispatchToProps = dispatch => ({
  changeTime(time) {
    dispatch({ type: time });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);


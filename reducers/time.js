const time = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return action.time;
    case 'afternoon':
      return '下午好';
    case 'night':
      return '晚安';
    default:
      return 'Couldn\'t determine the time';
  }
};

export default time;


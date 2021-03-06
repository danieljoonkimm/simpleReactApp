// stockItem
const stockItem = (state = null, action) => {
  switch (action.type) {
    case 'REMOVE_STOCK_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(
        {},
        state,
        {
          count: state.count - action.count,
        }
      );
    default:
      return state;
  }
};

export default stockItem;
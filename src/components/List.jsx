const List = ({ listData, renderItems }) => {
  return <>{listData.map(renderItems)}</>;
};
export default List;

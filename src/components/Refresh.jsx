import "./Refresh.css";
const Refresh = ({ onRefresh, isLoading }) => {
  return (
    <>
      <button
        className="refresh-button"
        onClick={onRefresh}
        disabled={isLoading}
      >
        {isLoading ? "불러오는 중..." : <span className="icon-text">⟳</span>}
      </button>
    </>
  );
};
export default Refresh;

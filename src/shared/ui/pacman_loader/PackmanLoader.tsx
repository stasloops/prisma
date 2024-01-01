import "./packman_loader.css";

export const PackmanLoader = () => {
  return (
    <div className="loader-wrapper">
      <div className="packman"></div>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

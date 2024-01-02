import "./packman_loader.css";
import crystal from "shared/assets/Gelatin_Crystal.png";

export const PackmanLoader = () => {
  return (
    <div className="loader-wrapper">
      <div className="packman"></div>
      <div className="dots">
        <div className="dot">
          <img src={crystal} />
        </div>
        <div className="dot">
          <img src={crystal} />
        </div>
        <div className="dot">
          <img src={crystal} />
        </div>
        <div className="dot">
          <img src={crystal} />
        </div>
      </div>
    </div>
  );
};

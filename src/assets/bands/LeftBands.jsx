import "./Bands.css"

const LeftBands = () => {
  return (
    <div>
      <div className="left-band1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="382"
          height="117"
          viewBox="0 0 382 117"
          fill="none"
        >
          <path d="M-38 52.517L382 0V64L-38 116.517V52.517Z" fill="#CCE7E0" />
        </svg>
      </div>
      <div className="left-band2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="230"
          height="116"
          viewBox="0 0 230 116"
          fill="none"
        >
          <path
            d="M-190 53.5062L230 0.989258V64.9893L-190 117.506V53.5062Z"
            fill="#EDF9F1"
          />
        </svg>
      </div>
    </div>
  );
};

export default LeftBands;

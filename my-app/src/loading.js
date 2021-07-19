const Loading = () => {
  return (
    <div className="flex h-full items-center">
      <div className="loading-container mx-auto">
        <svg className="circular-loader" viewBox="25 25 50 50">
          <circle
            className="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#70c542"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;

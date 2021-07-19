const Select = (props) => {
  const { options, selectFunction, loading } = props;

  return (
    <select
      className="w-10 appearance-none text-center text-primary  bg-white bg-expand bg-no-repeat bg-right"
      disabled={loading}
      onChange={(e) => selectFunction(e)}
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;

const CardInfo = ({ title, value }) => {
  return (
    <div className="h-[68px] w-[84px] border border-black-100 rounded p-4 mr-4">
      <p className="font-bold text-subtitle text-center leading-subtitle text-black-500">
        {title}
      </p>
      <h3 className="font-black text-sm text-center text-primary pt-1">
        {value}
      </h3>
    </div>
  );
};

export default CardInfo;

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className={`bg-white w-52 h-32 mx-auto flex flex-col items-center justify-center rounded-xl shadow-lg transition-all duration-300`}
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p className="text-lg font-semibold">{colorValue || "Empty Value"}</p>
      {hexValue && <p className="text-sm opacity-80">{hexValue}</p>}
    </section>
  );
};

Square.defaultProps = { colorValue: "Empty Color Value" };

export default Square;

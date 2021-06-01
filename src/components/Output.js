const Output = () => {
  return (
    <div className="wrapper-output">
      <div>
        <h3>Morse Code</h3>
      </div>
      <textarea
        placeholder="Converted text to Morse Code..."
        readOnly
      ></textarea>
    </div>
  );
};
export default Output;

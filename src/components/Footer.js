const Footer = () => {
  // var to get the full year
  const year = new Date().getFullYear();

  return (
    <div className="wrapper-footer">
      Copyright<sup>©</sup> <span className="year">{year}</span>
    </div>
  );
};
export default Footer;

const Footer = () => {
  // to get the full year
  const year = new Date().getFullYear();
  document.querySelector(".year").innerHTML = year;

  return (
    <div className="wrapper-footer">
      Copyright<sup>©</sup> <span className="year"></span>
    </div>
  );
};
export default Footer;

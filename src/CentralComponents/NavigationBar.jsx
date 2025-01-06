import Icon from '../assets/Icon.svg';
import calendar from '../assets/calendar.svg';

function NavigationBar({ changeDisplay }) {
  const navigationBarStyle = {
    borderRight: "1px solid black",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    borderRadius: "0px 40px 40px 0px",
    position: "fixed",
    height: "30vh",
    width: "8vh",
    top: "30%",
    display: "grid",
    gridTemplateColumns: "1fr",
    alignItems: "center",
    justifyItems: "center",
  };

  const svgStyle = {
    cursor: "pointer",
  };

  return (
    <div style={navigationBarStyle}>
      <img onClick={() => changeDisplay(true)} style={svgStyle} src={Icon} alt="icon" />
      <img onClick={() => changeDisplay(false)} style={svgStyle} src={calendar} alt="calendar" />
    </div>
  );
}

export default NavigationBar;

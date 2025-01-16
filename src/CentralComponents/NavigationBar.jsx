import Icon from '../Assets/Icon';
import Calendar from '../Assets/Calendar';

function NavigationBar({ changeDisplay }) {
  const navigationBarStyle = {
    borderRight: "1px solid #750D37",
    borderTop: "1px solid #750D37",
    borderBottom: "1px solid #750D37",
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
      <Icon onClick={() => changeDisplay(true)} />
      <Calendar onClick={() => changeDisplay(false)} />
    </div>
  );
}

export default NavigationBar;

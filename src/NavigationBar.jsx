import Icon from './assets/Icon.svg';
import calendar from './assets/calendar.svg'

function NavigationBar() {

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
        justifyItems: "center"
    }

    return (
        <div style={navigationBarStyle}>
            <img src={Icon} alt="icon" />
            <img src={calendar} alt="icon" />
        </div>
    )
}

export default NavigationBar
import Profile from "./Profile"
import ImageAdding from "./ImageAdding"

function ProfilePage() {
    const profilePageStyles = {
        padding: "0px",
        margin: "0px",
        width: "100vh",
        height: "100vh",
        position: "relative",
        left: "30%",
        display: "flex",
    }

    return (
        <div style={profilePageStyles}>
            <ImageAdding/>
            <Profile />
        </div>
    )
}

export default ProfilePage
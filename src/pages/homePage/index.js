import { Box } from "@mui/system";
import Navbar from "pages/navbar";
import "./homepage.css"

const HomePage = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <div>
            <Navbar user={user} />
            <div className="homepage-parent-div">
                <div className="homepage-user-card">User Card</div>
                <div className="homepage-post-feed">
                    <div>Post</div>
                    <div>Feed</div>
                </div>
                <div className="homepage-friends">Friends</div>
            </div>
        </div>
    );
};

export default HomePage;

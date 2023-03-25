import "./Components.css";
import Sidebar from "./Sidebar";

function Profile() {




    return (
        <>
            <div class="profile-main">

                <div class = "profile-Sidebar">
                    <Sidebar/>
                </div>

                <div class="profile">

                    <div class="profile-header">
                        <div class="profile-image">
                            <img src="data:image/jpeg;base64,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" alt="profile" />
                        </div>
                        <div class="profile-info">
                            <h1 class="profile-username">sneha_rajpurkar_  <button>Edit Profile</button></h1>
                            <div class="profile-stats">
                                <div class="profile-stat">
                                    <span class="profile-stat-count">100</span> posts
                                </div>
                                <div class="profile-stat">
                                    <span class="profile-stat-count">300</span> followers
                                </div>
                                <div class="profile-stat">
                                    <span class="profile-stat-count">400</span> following
                                </div>
                            </div>
                            <div class="profile-bio">Bio<br />
                                Sneha Sachin Rajpurkar🌸
                            </div>
                        </div>
                    </div>
                    <div class="profile-posts">

                    </div>
                </div>
            </div>
        </>
    )

}
export default Profile;
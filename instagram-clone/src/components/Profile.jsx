import "./Components.css";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

function Profile() {
    const [user, setUser] = useState();
    const [userPosts, setUserPost] = useState();
    const route = useNavigate();

    useEffect(() => {
        displayPost();
    }, []);

    // console.log(userPosts);

    function displayPost() {
        var currentUser = JSON.parse(localStorage.getItem("CurrentUserIn"));

        if (currentUser) {
            var dataFromLs = JSON.parse(localStorage.getItem("userDataIn"));
            for (var i = 0; i < dataFromLs.length; i++) {
                if (
                    dataFromLs[i].email === currentUser.currentEmail &&
                    dataFromLs[i].posts
                ) {
                    setUserPost(dataFromLs[i].posts);
                    setUser(dataFromLs[i].username);
                }
            }
        } else {
            route("/login");
            toast.error("Login to your Profile");
        }
    }

    return (
        <>
            <div class="profile-main">

                <div class="profile-Sidebar">
                    <div>
                        <Sidebar />
                    </div>
                </div>

                <div class="profile">

                    <div class="profile-header">
                        <div class="profile-image">
                            <img src="data:image/jpeg;base64,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" alt="profile" />
                        </div>
                        <div class="profile-info">
                            <h3 class="profile-username">{user} <button>Edit Profile</button> <i class="fa-solid fa-gear"></i></h3>
                            <div class="profile-stats">
                                <div class="profile-stat">
                                    <span class="profile-stat-count">24</span> posts
                                </div>
                                <div class="profile-stat">
                                    <span class="profile-stat-count">278</span> followers
                                </div>
                                <div class="profile-stat">
                                    <span class="profile-stat-count">297</span> following
                                </div>
                            </div>
                            <div class="profile-bio">
                                Sneha Sachin Rajpurkar<br />
                                🌸
                            </div>
                        </div>
                    </div>
                    <div class="profile-heightlight">
                        <div>
                            <img src="data:image/png;base64,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" alt="img" />
                            <p>Family</p>
                        </div>
                        <div>
                            <img src="data:image/png;base64,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" alt="img" />
                            <p>Me</p>
                        </div>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814084_1280.png" alt="img" />
                            <p>New</p> 
                        </div>
                    </div>
                    <div class="profile-name">
                        <div></div>
                        <div>
                            <div>
                                <i class="fa-solid fa-table-cells"></i>
                                <p>POSTS</p>
                            </div>
                            <div>
                                <i class="fa-regular fa-bookmark"></i>
                                <p>SAVED</p>
                            </div>
                            <div>
                                <i class="fa-regular fa-circle-user"></i>
                                <p>TAGGED</p>
                            </div>
                        </div>
                    </div>
                    <div class="profile-posts">
                        {userPosts &&
                            userPosts.map((e, i) => (
                                <div key={i}>
                                    <img src={e.image} alt="posts" />
                                    <div></div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )

}
export default Profile;
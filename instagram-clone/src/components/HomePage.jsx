import "./Components.css";
import Sidebar from "./Sidebar";

function Homepage() {
  return (
    <div id="homePage">
      <Sidebar />
      <div className="home-content">
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="home-add-content"></div>
      </div>
      <div className="home-suggestions">
        <div className="home-suggestions-top"></div>
        <div className="home-suggestions-mid">
          <div>
            <p>Suggestions for you</p>
            <p>See All</p>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>divyanshu22 07</h5>
              <p>Followed by bhagyashri_808 + 10 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>vinod.j.kadam</h5>
              <p>Followed by singh_prathmesh85+ 1 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>anita_singh1210</h5>
              <p>Followed by singh_prathmesh85</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>nitinshinde7712</h5>
              <p>Followed by manishasutar626</p>
            </div>
            <div>Follow</div>
          </div>
        </div>
        <div className="home-suggestions-bot">
          <div>
            <p>About</p>
            <p>Help</p>
            <p>Press</p>
            <p>API</p> 
            <p>Jobs</p> 
            <p>Privacy</p>
            <p>Terms</p>
            <p>Locations</p> 
            <p>Language</p>
            <p>English</p> 
            <p>Meta</p> 
            <p>Verified</p> 
          </div>
          <div>
          © 2023 INSTAGRAM FROM META
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

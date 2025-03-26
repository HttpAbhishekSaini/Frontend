import React from "react";
import "./home.css"; 

function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">
          Open a free demat and trading account online
        </h1>
        <h4 className="text-center text-muted" style={{ fontSize: "19px" }}>
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </h4>
        <div className="row">
            <div className="col-6">
                <img className="mt-5 p-3 mb-3" style={{ width: "85%", marginLeft: "25%"  }} src="Media/Images/account_open.svg" alt="account open" />
            </div>
            <div className="col-6 ">
            <div className="p-3 mb-3" style={{  marginTop: "12%", marginLeft: "8%"  }} class="containerss">
        <div class="form-containerss">
            <div class="form-box login-box">
                <h2>Login</h2>
                <form>
                    <div class="input-group">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div class="input-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit">Login</button>
                    <p>Don't have an account? <a href="#" id="toggle-signup">Sign up</a></p>
                </form>
            </div>

            <div class="form-box signup-box">
                <h2>Sign Up</h2>
                <form>
                    <div class="input-group">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div class="input-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div class="input-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div class="input-group">
                        <input type="password" placeholder="Confirm Password" required />
                    </div>
                    <button type="submit">Sign Up</button>
                    <p>Already have an account? <a href="#" id="toggle-login">Login</a></p>
                </form>
            </div>
        </div>
    </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;

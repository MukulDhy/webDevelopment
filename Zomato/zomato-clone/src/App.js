import "./app.css"
function App() {
  return (
    <div className="main-Container">
        <div className="navbar">
          <ul>
            <li>Get the App</li>
            <li>Investor Relations</li>
            <li>Add restaurant </li>
            <li>Log In </li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="banner">
          <div className="banner-cont">
          <h2>ZomaTo</h2>
          <p>Discover the best food & drinks in Delhi NCR</p>
          <div className="search-bar">
            <input type="search" name="" id="" placeholder="Location" />
            <input type="search" name="" id="" placeholder="search restaurant and dish" />
          </div>
          </div>
        </div>
      <div className="margin">
        <div className="card">
            <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="" />
            <div className="text-content">
              <strong>Order Online</strong>
              <small>Stay Home</small>
            </div>
        </div>
      </div>


    </div>
  );
}

export default App;

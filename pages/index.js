import Heade from "../components/Heade";
const Home = () => {
  return (
    <div>
      <Heade />
      <main>
        <section className="mb-5">
          <div className="d-flex justify-content-end d-flex hero-responsive-class">
            <div className="d-flex flex-column resp-class">
              <h1 className=" position-absolute hero-text">
                Expand your Provider network <span>anywhere</span> in the
                country.
              </h1>
              <p className="position-absolute hero-small-text">
                Or lease just the network locations you need. With MagnaCare
                Access, the choice is yours.
              </p>
              <div className="input-group mb-3 position-absolute hero-input-filed">
                <input
                  type="text"
                  className="form-control inputfield"
                  placeholder="Email Address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />

                <button
                  className="btn input-btn d-flex justify-content-center"
                  type="button"
                  id="button-addon2"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div>
              <img
                src={"/topimg.jpg"}
                alt="Research"
                className="hero-responsive-img"
              />
            </div>
          </div>
        </section>

        <section className="design-class">
          <div>
            <img src={"./design.png"}></img>
          </div>
        </section>

        <section className="col-reverse">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12 justify-content-start responsiv-bottom-img">
              <img src={"./botimg.jpg"} />
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12 text-start lastSec">
              <h2 className="text-top">
                Need to offer <span>nationwide</span> access to health care
                providers?
              </h2>
              <p>
                MagnaCare has an extensive PPO network that includes all 50
                states and Puerto Rico, with top-rated doctors and hospitals, as
                well as inpatient and outpatient services such as rehab centers,
                urgent care centers and ambulatory surgery centers.
              </p>
              <p>Want to lease just a portion of our network?</p>
              <p>
                {" "}
                We’ll build you a network according to ZIP codes, provider types
                or any other criteria that fits your client’s needs. You decide
                what to include and we’ll build your network accordingly. Don’t
                want chiropractors? No problem. Need a custom network just for
                Indiana? Done. You can opt for a physician-only or hospital-only
                network. It’s your choice!
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

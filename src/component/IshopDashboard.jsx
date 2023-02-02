import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IshopDashboard = () => {
  const [burger, setBurger] = useState(0);
  let navigate = useNavigate();
  function BookOrder() {
    navigate("/thankyou");
  }
  return (
    <>
      <h2 className="bg-primary text-center text-white">
        User Menu : -
       
        <span className="bi bi-cart">{burger}</span>
      </h2>
      <div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img
                  width="100"
                  src="https://img.freepik.com/premium-photo/cheese-burger-with-onion-tomato-lettuce-bacon-white-background_499484-1161.jpg?w=2000"
                  alt=""
                />
              </div>
              <div className="card-footer">
                <div id="burger">
                  <p>Burger</p>
                  <p>&#8377; 200/-</p>
                  <button onClick={() => setBurger(burger + 1)}>+</button>
                  <button
                    onClick={() => {
                      if (burger > 0) {
                        setBurger(burger - 1);
                      } else {
                        setBurger("");
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img
                  width="100"
                  src="https://5.imimg.com/data5/QZ/UY/SL/SELLER-3541922/coke-can-1000x1000.jpg"
                  alt=""
                />
              </div>
              <div className="card-footer">
                <div id="coke">
                  <p>COKE</p>
                  <p>&#8377; 120/-</p>
                  <button onClick={() => setBurger(burger + 1)}>+</button>
                  <button
                    onClick={() => {
                      if (burger > 0) {
                        setBurger(burger - 1);
                      } else {
                        setBurger("");
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img
                  width="100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxNAwYgbpOcuOGtLISZ9drGjdx1jHklfOtqYoCSCH4w&s"
                  alt=""
                />
              </div>
              <div className="card-footer">
                <div id="fries">
                  <p>Fries</p>
                  <p>&#8377; 80/-</p>
                  <button onClick={() => setBurger(burger + 1)}>+</button>
                  <button
                    onClick={() => {
                      if (burger > 0) {
                        setBurger(burger - 1);
                      } else {
                        setBurger("");
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img
                  width="70"
                  src="https://www.shutterstock.com/image-photo/konotop-ukraine-march-13-2016-260nw-389825848.jpg"
                  alt=""
                />
              </div>
              <div className="card-footer">
                <div id="pepsi">
                  <p>Pepsi</p>
                  <p>&#8377; 100/-</p>
                  <button onClick={() => setBurger(burger + 1)}>+</button>
                  <button
                    onClick={() => {
                      if (burger > 0) {
                        setBurger(burger - 1);
                      } else {
                        setBurger("");
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-3">
          <button
            class="btn btn-dark w-30 "
            data-bs-target="#BillSummary"
            data-bs-toggle="modal"
            onClick={BookOrder}
          >
            {" "}
            Order
          </button>
          <div class="modal fade" id="BillSummary">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h2>Your Bill Summary</h2>
                  <button class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                  <dl class="row">
                    <dt class="col-6">Burger:</dt>
                    <dd class="col-6" id="burger"></dd>

                    <dt class="col-6">Coke:</dt>
                    <dd class="col-6" id="coke"></dd>
                    <dt class="col-6">Pepsi:</dt>
                    <dd class="col-6" id="pepsi"></dd>
                    <dt class="col-6">Fries:</dt>
                    <dd class="col-6" id="fries"></dd>
                    <dt class="col-6">Total:</dt>
                    <dd class="col-6" id="lblTotal"></dd>
                  </dl>
                </div>
                <div class="modal-footer">
                  <button class="btn btn-primary" data-bs-dismiss="modal">
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IshopDashboard;

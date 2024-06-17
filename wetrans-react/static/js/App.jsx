import React from "react";
import "./App.scss";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const sliderRef = React.useRef(null);
  const toggleSlider = () => {
    sliderRef.current.classList.toggle("show");
  };
  const fileList = [
    // {
    //   name: "Company_introduction.ZIP",
    //   info: "21 MB - zip",
    // },
    // {
    //   name: "6 Files",
    //   info: "",
    // },
    {
      name: "Purchase_order.PDF",
      info: "18 MB",
    },
    {
      name: "IMG_0289.JPG",
      info: "2 MB",
    },
    {
      name: "IMG_0210.JPG",
      info: "2 MB",
    },
    {
      name: "Specifications.PDF",
      info: "12 MB",
    },
    {
      name: "Test.MP4",
      info: "43 MB",
    },
    {
      name: "Scan_documents.ZIP",
      info: "13 MB",
    },
    {
      name: "Sample_product-based business.qbw",
      info: "27 MB",
    },
  ];
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="./logo__.png" alt="" />
        </div>
        <div className="right-nav">
          <ul className="list">
            <li>Pricing</li>
            <li>Company</li>
            <li>Help</li>
            <li>Sign up</li>
            <li>Log in</li>
          </ul>
        </div>
      </div>
      <div className="wt_content">
        <div className="files-list">
          <div className="f-header">
            <div className="d-icon">
              <svg viewBox="0 0 170 170">
                <g fill="#d4d7d9" fillRule="evenodd">
                  <path d="M145.104 24.896c33.195 33.194 33.195 87.014 0 120.208-33.194 33.195-87.014 33.195-120.208 0C-8.3 111.91-8.3 58.09 24.896 24.896 58.09-8.3 111.91-8.3 145.104 24.896zm-7.071 7.071c-29.29-29.29-76.777-29.29-106.066 0-29.29 29.29-29.29 76.777 0 106.066 29.29 29.29 76.777 29.29 106.066 0 29.29-29.29 29.29-76.777 0-106.066z"></path>
                  <path d="M82 100.843V59.007A4.006 4.006 0 0 1 86 55c2.21 0 4 1.794 4 4.007v41.777l15.956-15.956a4.003 4.003 0 0 1 5.657 0 4.004 4.004 0 0 1 0 5.657l-22.628 22.628a3.99 3.99 0 0 1-3.017 1.166 3.992 3.992 0 0 1-3.012-1.166L60.328 90.485a4.003 4.003 0 0 1 0-5.657 4.004 4.004 0 0 1 5.657 0L82 100.843z"></path>
                </g>
              </svg>
            </div>
            <div className="title">Ready when you are</div>
            <div className="info">Transfer expires in 7 days</div>
          </div>
          <div className="f-files">
            <div className="file">
              <div className="l">
                <p className="title">{fileList.length} files</p>
                <p className="info">130 MB</p>
              </div>
              <div className="r">
                <button className="button" onClick={toggleSlider}>
                  Preview
                </button>
              </div>
            </div>
          </div>
          <div className="f-footer">
            <button className="button" onClick={toggleSlider}>
              View Files
            </button>
          </div>
        </div>
        <div className="wt__notice">
          <h1>Even more peace of mind with Plus</h1>
          <p>Password protect your transfers</p>
          <button>Get Wetransfer Plus</button>
        </div>
      </div>
      <div className="login-slider" ref={sliderRef}>
        <div className="l-header">
          <div className="cls-btn" onClick={toggleSlider}>
            &times;
          </div>
        </div>
        <div className="l-download">
          <div className="l">
            <div className="title">Items in this transfer</div>
            <div className="detail">
              {fileList.length} files, 130 MB・Transfer expires in 7 days
            </div>
          </div>
          <div className="r">
            <button onClick={() => setShowModal(true)}>Download all</button>
          </div>
        </div>
        <div className="l-list">
          {fileList.map((f) => (
            <div
              className="card"
              key={f.name}
              onClick={() => setShowModal(true)}
            >
              <div className="l">
                <div className="title">{f.name}</div>
                <div className="size">{f.info}</div>
              </div>
              <div className="r">
                <svg viewBox="0 0 170 170">
                  <g fillRule="evenodd">
                    <path d="M145.104 24.896c33.195 33.194 33.195 87.014 0 120.208-33.194 33.195-87.014 33.195-120.208 0C-8.3 111.91-8.3 58.09 24.896 24.896 58.09-8.3 111.91-8.3 145.104 24.896zm-7.071 7.071c-29.29-29.29-76.777-29.29-106.066 0-29.29 29.29-29.29 76.777 0 106.066 29.29 29.29 76.777 29.29 106.066 0 29.29-29.29 29.29-76.777 0-106.066z"></path>
                    <path d="M82 100.843V59.007A4.006 4.006 0 0 1 86 55c2.21 0 4 1.794 4 4.007v41.777l15.956-15.956a4.003 4.003 0 0 1 5.657 0 4.004 4.004 0 0 1 0 5.657l-22.628 22.628a3.99 3.99 0 0 1-3.017 1.166 3.992 3.992 0 0 1-3.012-1.166L60.328 90.485a4.003 4.003 0 0 1 0-5.657 4.004 4.004 0 0 1 5.657 0L82 100.843z"></path>
                  </g>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showModal} onClose={toggleModal} />
    </>
  );
}

export default App;

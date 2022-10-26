import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center  pb-5">
          <div className="col-md-6 justify-content-between">
            <p className="mb-3 mb-md-0">copyright ©️ abayneh asaye{" "}
            </p>
            <a className="text-dark fs-4" href="https://github.com/abayasaye" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a className="text-dark fs-4" href="https://github.com/abayasaye" target="_blank" rel="noreferrer">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a className="text-dark fs-4" href="https://github.com/abayasaye" target="_blank" rel="noreferrer">
            <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

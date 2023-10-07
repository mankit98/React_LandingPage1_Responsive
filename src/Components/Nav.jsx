import React, { useState } from "react";

const Nav = () => {
  const [inpu, setinpu] = useState("");
  const inpufunc = (e) => {
    e.preventDefault();
    console.log(inpu);
    setinpu("");
  };
  return (
    <>
      <div className="nav">
        <h2>
          <img
            src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-free-demo-banner-design-vector-png-image_6695393.png"
            alt="Logo_Image"
            id="brandlogo"
          />
        </h2>
        <div className="searchbar">
          <form onSubmit={inpufunc}>
            <input
              onChange={(inp) => {
                setinpu(inp.target.value);
              }}
              type="text"
              placeholder="Search Anything You Think..."
              value={inpu}
            />
          </form>
          <i className="ri-search-line"></i>
        </div>
        <div className="nav-part2">
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Contact</h4>
          <h4>Services</h4>
          <h4>Carrers</h4>
          <i className="ri-menu-3-fill" id="hamburger"></i>
        </div>
      </div>
    </>
  );
};

export default Nav;

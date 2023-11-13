import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import { UserContext } from "../Data";
import "../App.css";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";

const Home = () => {
  const { selectedNo } = useContext(UserContext);
  return (
    <>
      <BrowserRouter>
        <Navbar sticky="top" className="bg-body-tertiary bg-primary ">
          <Container>
            <Navbar.Brand href="/" className="navbarBrand text-white">
              <img
                alt=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8zMzPMzMwsLCwpKSl9fX04ODgcHBzk5OS9vb0hISH19fU1NTVhYWFqamolJSWjo6Oqqqp2dnafn59KSkplZWXT09MAAABxcXHDw8OXl5dZWVkVFRXe3t7IyMhQUFCPj49BQUGCgoKKioru7u63t7cRERE/6hO8AAACKklEQVR4nO3ca1PiMBSAYUsqgTRLuSOLghf0///EhV1dBEvCDI3ntL7PV9KZ804KpQxwcwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwPfr3yY07kvn7QytyZOxQ+m8nWGZpVNqKByVnkIKKRT2gwqNdRGHV13nwotN5vUVmrtlP2KUvwd2I0uXY6NwD/Pf0aU9+1EYWznJFRaWk+jSnvX+wsJS4VmaTX8FzYqjPZyvZoG1U69wD3fPxJDcHBd27kOrdb6WRviTQpcFjvt4qOGFF6DwW1BIof7CycLZsz69Fz1bGDjcLuJvI9J76Kw7AUsTLjSr0PHrB+m8uCKPFA6kJ7wWhRTqRyGF+lFIoX4UUqgfhRTqRyGF+lFIoX4UUqgfhRTqRyGF+lFIoX4UUqgfhc0v3JahQp+ZmfSEVxsYHyj0diQ94NV6eegsNRvp+WowsYFC14CvdcVtzP4r+pWF5aP0cLWYv53bQ/NUSA9Xj+eyutDbtfRoNSm61YX5WHqy2vRdZaFryTm6NzBfCm3mmn8pPNg686XQrKSnqtXQdk8L23EpPNhkJ4WLR+mRajZ3J4VGeqLavWyPCpca/g+iXsXxHm6l50ni8l/JNtVPKPStL3zfw0x6kmSm/34E1ZK7wirz+7+FT9JzJPSc7+8KO9JjJFTs7jHKW+kpknp1mWnnxf6/2dur9AiJ9dp1V1ilRZ9cAAAAAAAAAAAAAAAAAAAAAAAAAAAAKPUHmkw4LEE8gjsAAAAASUVORK5CYII="
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              TeeRex
            </Navbar.Brand>

            <Link
              to={"/checkout"}
              style={{ textDecoration: "none", display: "flex" }}
            >
              <dotlottie-player
                src="https://lottie.host/2c35f18e-0138-4b3e-930c-1ed22ba2e693/yODGvACapB.json"
                background="transparent"
                speed="1"
                style={{ width: "auto", height: "50px" }}
                direction="1"
                mode="normal"
                loop
                autoplay
                hover
              >
                {" "}
              </dotlottie-player>{" "}
              <span className="cartNumber">{selectedNo}</span>
            </Link>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;

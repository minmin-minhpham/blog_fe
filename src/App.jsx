import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeProvider from "./providers/ThemeProvider";
import Routes from "./routes";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Routes>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                <Outlet />
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </Routes> */}
      <Routes />
    </div>
  );
}

export default App;

import ReactDOM from "react-dom/client";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: Products</div>
    <div>Framework: react-19</div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);

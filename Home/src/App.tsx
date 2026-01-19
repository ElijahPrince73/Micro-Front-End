import ReactDOM from "react-dom/client";
import Footer from "./Footer";
import Header from "./Header";
import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: Home</div>
    <div>Framework: react-19</div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);

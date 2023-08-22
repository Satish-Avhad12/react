import { Outlet, Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
function App() {
  return (
    <div>
      <Header/>
       < Outlet />
      <Footer></Footer>
    </div>
  );
}
export default App;
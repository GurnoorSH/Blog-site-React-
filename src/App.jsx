import { useContext , useEffect } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";

function App() {
  const {fetchBlogs} = useContext(AppContext)

  useEffect(() => {
    fetchBlogs();
  }, [])
  
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}

export default App;

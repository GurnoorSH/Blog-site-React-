import { useState,createContext } from "react";
import { baseUrl } from "../BaseUrl";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  const [page, setpage] = useState(1);
  const [Totalpages, setTotalpages] = useState(null);

  async function fetchBlogs(page = 1) {
    setloading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setpage(data.page);
      setposts(data.posts);
      setTotalpages(data.totalPages);
    } catch (error) {
      console.log("Fetch error");
      setpage(1);
      setposts([]);
      setTotalpages(null);
    }
    setloading(false);
    console.log(posts)
  }
  function handlePageChange(page) {
    setpage(page);
    fetchBlogs(page);
  }
  const value = {
    loading,
    posts,
    setloading,
    setposts,
    page,               
    setpage,
    Totalpages,
    setTotalpages,
    fetchBlogs,
    handlePageChange,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

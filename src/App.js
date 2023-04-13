import { useContext , useEffect} from "react"
import { AppContext } from "./Context/AppContext"
import { Route , Routes , useSearchParams , useLocation } from "react-router-dom"
import TagPage from "./Pages/TagPage"
import CategoryPage from "./Pages/CategoryPage"
import Home from "./Pages/Home"
import BlogsPage from "./Pages/BlogsPage"

export default function App() {

  const {fetchBlogposts } = useContext(AppContext)
  const location = useLocation()
  const [searchParams , setSearchParams] = useSearchParams()

  useEffect(()=>{

    const  page = searchParams.get('page') ?? 1;

    if(location.pathname.includes('tags')){
      const tag = location.pathname.split('/').at(-1).replaceAll('-' , ' ');
      fetchBlogposts(Number(page) , tag)

    }

    else if(location.pathname.includes('categories')){
      const category = location.pathname.split('/').at(-1).replaceAll('-' , ' ');
      fetchBlogposts(Number(page) , null , category)
    }

    else{

      fetchBlogposts(Number(page))
    }
} ,[location.pathname , location.search])

  return (
    <div className="relative " >

      {/* <Header>
      </Header>
      <BlogsContainer>
      </BlogsContainer>
      <Pagination></Pagination>
 */}

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/blog/:blogId' element={<BlogsPage></BlogsPage>} ></Route>
        <Route path='/tags/:tag' element={<TagPage></TagPage>} ></Route>
        <Route path='/categories/:category' element={<CategoryPage></CategoryPage>} ></Route>

      </Routes>
    </div>
  )
}

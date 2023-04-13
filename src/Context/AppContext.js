import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl' 
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

// const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";


export function AppContextProvider({children}){
    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);
    const navigate = useNavigate()
    

    

    async function fetchBlogposts(page , tag=null , category){

        let url = `${baseUrl}?page=${page}`

        if(tag){
            url +=`&tag=${tag}`
        }

        if(category){
            url += `&category=${category}`
        }

        setLoading(true)
        console.log('inside  the fetchBlogPosts function')
        try{
            console.log('inside  the fetchBlogPosts try function')

            const data = await axios.get(url, {responseType : 'json'});
            setPage(data.data.page);
            console.log(data.data.page)
            setPosts(data.data.posts)
            setTotalPages(data.data.totalPages)
            console.log(data.data)
        }

        catch(error){
            console.log("Error ocurred in calling API")
            console.log(error)
            setPage(1)
            setTotalPages(null)
            setPosts([])
        }
        setLoading(false)

    }

    const value = {
        posts , setPosts , loading , setLoading , page, setPage , totalPages , setTotalPages , handlePageChange , fetchBlogposts
    } 
    
    return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>

    function handlePageChange(page){
        
        navigate({search: `?page=${page}`})
        console.log('page number : ' ,page)
        setPage(page);


        // fetchBlogposts(page)
    }
}



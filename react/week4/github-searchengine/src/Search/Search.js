import React, {useState, useEffect} from 'react'
import User from '../User/User';

const Search = ()=> {
    const [users, setUsers] = useState(['']);
    const [search, setSearch] = useState('');
    const [query,setQuery] = useState('');
    

    const getUsers = async() =>{
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        const data = await response.json();
        console.log(data)
        setUsers(data.items);
        ;
       
    }
   
    useEffect(()=>{
        getUsers();
    },[query]);
    
     const updateSearch = e =>{
         setSearch(e.target.value);
     }

     const getSearch = e=>{
         e.preventDefault();
         setQuery(search);
         setSearch('')

     }
     
    return (
              
        <div>
            <h1>Github Search</h1>
            <form className= "search-form" onSubmit = {getSearch}>
                <input className = "search-bar" type="text" value = {search} onChange = {updateSearch} />
                <button type = "submit">Search</button>
            </form>
            
           {users.map(user =>(<User 
           login ={user.login} 
           url = {user.repos_url}/>))}
        </div>
    )
}

export default Search

import react, {useState} from "react";
import Card from "./Card";
import axios from "axios";

const Main=()=> {
    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCCMfRxuPz2owvpqRb6SjTs46VBTEI80D0'+'&maxResults=40')
                .then(res=>setData(res.data.items))
                .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without book is like<br/> a body without soul. </h1>
                </div>
                <div className="row2">
                    <h2>Find your Book.</h2>
                    <div className="search">
                        <input type="search" placeholder="Enter the name of the book."
                               value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        {/*<button><i className="fa-solid fa-magnifying-glass"></i></button>*/}
                    </div>
                    <img src="./images/image_1.jpg" alt="" />
                </div>
            </div>

            <div className="container">
                {
                    <Card book = {bookData}/>
                }
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}

export default Main;
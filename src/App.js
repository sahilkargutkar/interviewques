import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import PopupWindow from './components/Popup';

function App() {
  const [languages,setLanguages] = useState([])
  const [moviesList,setMoviesList] = useState([])
  const [dropdown,setDropdown] = useState(false)
  const [selectedLangs,setSelectedLangs] = useState([])
  const [popup,setPopup] =useState("")


  useEffect(() =>{
    getData();
  },[])

  const getData = async () => {
    const response = await axios.get("https://in.bmscdn.com/m6/static/interview-mock/data.json")
    const movieLangs = response.data.languageList
    const movies = Object.values(response?.data?.moviesData)
    setLanguages(movieLangs)
    setMoviesList(movies)
  }


  const handleCheckbox =(e,lang,id) =>{
    let arr = [...selectedLangs]
    const isAvailable = selectedLangs.some((language,idx) => idx == id)

    console.log("checkLangById",isAvailable)
   if(isAvailable){
    arr.filter((language,idx) => idx !==id )
    
  }else{
    arr.push({id:id,language:lang})
   }

   console.log("arr",arr)
  // setMoviesList(())
  setSelectedLangs(arr)

  }


  const handleFilteredLang =() =>{
    // setMoviesList(())
    // const 

  }

  const handlePopup =(e,id,url) =>{
    setPopup({id:id,url: url})
  }


  return (
    <div className="App">
      <div>
        <div>Movies List</div> <div><button onClick={() => {
        setDropdown(!dropdown)
      }}>Filter </button>
        {dropdown ?<div className='dropdown'>
          {languages.length > 0 ? languages.map((lang, index) => <span key={index} className='dropspan' >
           <input type='checkbox'   onChange={(e) =>{handleCheckbox(e,lang,index)}}/> <div className='langdrop'>{lang}</div>

          </span>) : null}
        </div>:null }
    
    </div>
    
    <button onClick={handleFilteredLang}>Submit</button>
    </div>


      <div className='container'>
      {
        moviesList.length > 0 ? moviesList.map((data,index) => {
          return (
            <Card key={index} id={index} movies={data} handlePopup={handlePopup} />
          )
        }
        ) : null}

        {popup ? <PopupWindow videoUrl={popup} /> : null}         

        </div>
    </div>
  );
}

export default App;

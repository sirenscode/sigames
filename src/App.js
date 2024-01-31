import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify-icon/react';


const ItemList = ({items}) =>{
  const displayItemInfo = (item) =>{
    document.getElementById('image-info').style.backgroundImage=`url("${item.image}")`;
    document.getElementById('info').style.display='flex';
    document.getElementById('title').innerText=item.title;
    document.getElementById('released-date').innerHTML=`<strong>Release Date: </strong><span>${item.released_date}</span>`;
    document.getElementById('genre').innerHTML=`<strong>Genres: </strong><span>${item.genres}</span>`;
    document.getElementById('developer').innerHTML=`<strong>Developed by: </strong><span>${item.developer}</span>`;
    document.getElementById('rating').innerText=item.rating;
    document.getElementById('os').innerHTML=`<strong>Operating System: </strong><span>${item.minimum_requirements.os}</span>`;
    document.getElementById('processor').innerHTML=`<strong>Processor: </strong><span>${item.minimum_requirements.processor}</span>`;
    document.getElementById('ram').innerHTML=`<strong>RAM: </strong><span>${item.minimum_requirements.ram}</span>`
    document.getElementById('video-card').innerHTML=`<strong>Video card: </strong><span>${item.minimum_requirements.video_card}</span>`;
    document.getElementById('directx').innerHTML=`<strong>DirectX: </strong><span>${item.minimum_requirements.direX}</span>`
    document.getElementById('space').innerHTML=`<strong>HDD Space: </strong><span>${item.minimum_requirements.hdd_space}</span>`
    document.getElementById('description').innerText=item.description;
    const screenshootDiv = document.getElementById('screenshoot');
    screenshootDiv.innerHTML="";
    for(let i=0;i<=item.screenshots.length;i++){
      console.log("DATA",item.screenshots[i]);
      document.getElementById('screenshoot').innerHTML+=`<img class='sreenshoot-img' src='${item.screenshots[i]}'/>`
    }



  }
  function hello(item){
    console.log(item);
  }
  return(
    <div className='cards'>
      {items.map((item)=>(
        <div className='item-card' onClick={()=>displayItemInfo(item)}>
          <div className='item-image' style={{backgroundImage: `url("${item.image}"`, backgroundPosition: 'center',backgroundSize:'cover'}}>
          </div>
          <h3 className='item-title'>{item.title}</h3>
        </div>
      ))}
      </div>
    )
  }
  

function App() {
  const [mainBg, setMainBg] = useState("");
  const [headertitle, setHeaderTitle] = useState("");
  const [headerDescr, setHeaderDescr] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [items, setItems] = useState([]);

  const getData = async() =>{
    fetch('https://collinsdawns.github.io/data-api/anim.json').then(response=>response.json()).then(data=>{
      setHeaderTitle(data.latest_games[0].title);
      setHeaderDescr(data.latest_games[0].description);
      setMainBg(data.latest_games[0].image);
      setGenre(data.latest_games[0].genres);
      setRating(data.latest_games[0].rating);
      setReleaseDate(data.latest_games[0].released_date);
      setItems(data.games);
      console.log(mainBg);

      document.getElementById('home').style.backgroundImage=`url("${mainBg}")`;
      

    });
  }
  useEffect(()=>{
    getData();
  },[]);

  function hide(){
    document.getElementById('info').style.display='none';
  }
  return (
    <div className="App">
      <div className='nav-bar'>
        <div className='nav-links'>
          <a href='#'><Icon icon={"teenyicons:home-solid"} width={'20px'} height={'20px'} style={{color: '#f05623'}}></Icon><span>Home</span></a>
          <a href='#'><Icon icon={"fluent-mdl2:flame-solid"} width={'20px'} height={'20px'} style={{color: '#f05623'}}></Icon><span>Latest</span></a>
        </div>
        <div className='right'>

        </div>
      </div>
      <div className='content'>
        <div className='latest-wrapper' id="home">
          <div className='latest-details'>
            <div className='latest-container'>
              <span className='release-date'>{releaseDate}</span>
              <h1 className='latest-title'>{headertitle}</h1>
              <p className='latest-descr'>{headerDescr}</p>
              <span className='genre'>{genre}</span>
              <span className='rating'>{rating}</span>
              <div className='latest-btn'>
                <button className='latest-trailer-btn'><Icon icon="teenyicons:play-circle-solid" style={{color: '#f05623'}} height="30px" width="30px"></Icon></button>
                <button className='latest-cart-btn'><Icon icon="simple-line-icons:basket" style={{color: '#f05623'}} height={'30px'} width={'30px'}></Icon></button>
              </div>
            </div>
          </div>
          
          
        </div>
        <div className='releases'>
          <h2 className='release-title'>Latest releases</h2>
          <div className='collection'>
            <ItemList items={items}/>
          </div>

        </div>
        <div className='info' id='info'>
          <div className='item-info'>
            <div className='image-info' id='image-info'>
            </div>
            <div className='item-details'>
              <button className='close-btn' onClick={hide}><iconify-icon icon="carbon:close-filled" height="40px" width="40px"></iconify-icon></button>
              <div className='details'>
                <h2 className='item-card-title' id='title'>{}</h2>
                <div className='production'>
                  <span className='released-date' id='released-date'>{}</span>
                  <p className='developer' id='developer'></p>
                  <p className='genre' id='genre'>{}</p>
                  <p className='ratring' id='rating'>{}</p>
                </div>
                
                <p className='description' id='description'>{}</p>
                <div className='requirements' id='require'>
                  <h2 className='require-title'>Minimum requirements</h2>
                  <div className='inner-require'>
                    <p className='os' id='os'>{}</p>
                    <p className='item-processor' id='processor'>{}</p>
                    <p className='item-ram' id='ram'>{}</p>
                    <p className='item-vcard' id='video-card'>{}</p>
                    <p className='directx' id='directx'>{}</p>
                    <p className='space' id='space'>{}</p>
                  </div>
                </div>
                <div className='screenshoots'>
                  <h3 className='screenshot'>screenshoots</h3>
                  <div className='inner-screenshoots' id='screenshoot'>

                  </div>

                </div>
              </div>
              
              
            </div>
            
          </div>
        </div>
      </div>
    </div>

      
  );
}

export default App;

import React,  { useEffect, useState }  from 'react';
import './Style.css'
import { Link } from 'react-router-dom';
import HeaderCompnent from './HeaderCompnent';
import axios from 'axios';


const bookLists = {
    status: "OK",
    code: 200,
    total: 1,
    data: [
      {
        id: 1,
        title: "Caterpillar.",
        author: "Kevon Russel",
        genre: "Ut",
        description:
          "ARE a simpleton.' Alice did not seem to be\"--or if you'd rather not.' 'We indeed!' cried the Gryphon, before Alice could only see her. She is such a puzzled expression that she might as well as I.",
        isbn: "9791357844522",
        image: "https://picsum.photos/640/360",
        published: "2000-07-22",
        publisher: "Sed Minima",
      },
    ],
};
  
  
const product ={
    "status": "OK",
    "code": 200,
    "total": 1,
    "data": [
    {
    "id": 1,
    "name": "Aut et in explicabo eveniet.",
    "description": "Sed eum id sed repellat eligendi porro. Ex ut cum et repellat eaque similique. Debitis culpa sunt quod itaque in ut. Quo molestiae non dolores corporis accusantium.",
    "ean": "3850285659267",
    "upc": "062675320747",
    "image": "https://picsum.photos/640/360",
    "images": [
    {
    "title": "Optio qui quis quia quis.",
    "description": "Dignissimos itaque reiciendis dolores qui doloribus natus. Quo autem et ut sunt. Saepe ratione sapiente nihil dignissimos facere.",
    "url": "https://picsum.photos/640/360"
    },
    {
    "title": "Neque quia officia magnam.",
    "description": "Aut modi aut et qui sequi maiores. Id tenetur laborum sit magnam soluta adipisci libero. Omnis quaerat occaecati deserunt veritatis. Sint quia optio sint qui eos.",
    "url": "https://picsum.photos/640/360"
    },
    {
    "title": "Eos amet rerum repellendus.",
    "description": "Dolor ut earum dolor placeat quos totam omnis. Ab ab molestias animi dolor. Sequi omnis distinctio porro quaerat. Sunt facilis optio fugiat vero. Iste labore molestias et similique illum ut.",
    "url": "https://picsum.photos/640/360"
    }
    ],
    "net_price": 2.19,
    "taxes": "12",
    "price": "2.45",
    "categories": [
    "4f2c0a11-aeba-33ca-8edf-7e2cf5c61aa8"
    ],
    "tags": [
    "et",
    "vitae",
    "atque",
    "qui"
    ]
    }
    ]
}
  

const Home = () => {
    const[userEmail, setUserEmail]=useState({})
    const [bookList,setBootList]=useState(bookLists)
    const [products, setProducts]=useState(product)
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
       
        const storedData = localStorage.getItem("userData");
        console.log(storedData,'storedData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setUserEmail(parsedData);
        }

        const fetchImages = async () => {
          try {
            const response = await axios.get(
              'https://picsum.photos/v2/list?page=1&limit=4'
            );
            setImageData(response.data);
          } catch (error) {
            console.error('Error fetching images:', error);
          }
        };
    
        fetchImages();


        
      }, []);
     
    
  return (
    <div>
      <header>
        <div  className="head">
          <h3>{userEmail.email}</h3>
           <HeaderCompnent/>
        </div>
      </header>
      <section>
        <div>
          <h3>Random Images </h3>
          <div className="image-grid">
      {imageData.map((imageInfo) => (
        <div key={imageInfo.id} className="image-item">
          <img
            src={`https://picsum.photos/640/360?image=${imageInfo.id}`}
            alt={`Random Image ${imageInfo.id}`}
          />
        </div>
      ))}
    </div>
        </div>
        <hr /> 
        <div>
          <h3>List of Books</h3>
          {bookList.data.map((item) => {
            return (
              <div key={item.id} className="card p-1 " style={{ width: "18rem" }}>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div>
          <h3>Product</h3>
          {
            products.data.map((item)=><div key={item.id} className="d-flex ">
              {
                item.images.map((items)=>{
                  return(
                    <div key={items.id} className="card ms-2 " style={{ width: "18rem" }}>
                    <img src={items.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{items.title}</h5>
                    </div>
                  </div>
                  )
                })
              }
            </div>)
          }
        </div>
      </section>
    </div>
  )
}

export default Home

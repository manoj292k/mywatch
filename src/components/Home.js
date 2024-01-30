import React from 'react';
import productsData from '../data/productsData'; // Add a file with your product data




// Updated import statement
const selectedProducts = productsData.slice(0, 10);

function Home() {
  
  return (
    <>
    <div id="demo" className="carousel slide" data-bs-ride="carousel">


<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div className="carousel-inner">
  <div className="carousel-item active">
  <img src="https://zimsonwatches.com/cdn/shop/files/2000x886-rado.jpg?v=1689237466&width=1500" alt="External Example" className="d-block" style={{ width: '100%' }} />  </div>
  <div className="carousel-item">
  <img src="https://zimsonwatches.com/cdn/shop/files/1800x682_RBA_EN_FF_DESKTOP_Sky-Dweller_M336239-0002_STATIC-JPEG.jpg?v=1702371451&width=1500" alt="External Example"className="d-block" style={{ width: '100%' }} />  </div>
  <div className="carousel-item">
  <img src="https://zimsonwatches.com/cdn/shop/files/2000x886px_LE23.jpg?v=1689245966&width=1500" alt="External Example"className="d-block" style={{ width: '100%' }} />  </div>
</div>


<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>
<h1 className='marqu'> <marquee>FREE DELIVERY     ----    SHOP TISSOT WATCHES   ----   BOOK YOUR WATCH FOR SERVICE   ----   FREE DELIVERY   ----   SHOP TISSOT WATCHES   ----   BOOK YOUR WATCH FOR SERVICE   ----   FREE DELIVERY   ----   SHOP TISSOT WATCHES   ----   BOOK YOUR WATCH FOR SERVICE   ----   FREE DELIVERY   ----   SHOP TISSOT WATCHES   ----   BOOK YOUR WATCH FOR SERVICE   ----   FREE DELIVERY   ----   SHOP TISSOT WATCHES   ----   BOOK YOUR WATCH FOR SERVICE   ----   FREE DELIVERY

</marquee> </h1>

<h3>Shop by category</h3>
<div className='category'>
  <div> <span>Mens</span><img src='data:image/jpeg;base64,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' alt='mensimg' /> </div>
  <div> <span>Womens</span> <img src='data:image/jpeg;base64,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' alt='womensimg' />  </div>
  <div><span>Kids</span>  <img   src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebgzH-7Dz1je-Z0TZk6On2mU4-BNfa2Pgkg&usqp=CAU' alt='kidsimg'  /> </div>
</div>
<h3>Luxury Swiss Brands</h3>
<div className='Brand'>
  <div className='Brandimg'>
    <img alt='jbveh' src='https://zimsonwatches.com/cdn/shop/files/Omega_e5b8dfac-35e4-4715-9a81-cee84e816f85.png?v=1701405775&width=330'/>
    <h5>Omega </h5>
  </div>
  <div className='Brandimg'>
    <img alt='ehjb' src='https://zimsonwatches.com/cdn/shop/files/Chopard_47246bf2-226b-4d22-8828-d91ec59cb782.png?v=1701405775&width=330'/>
    <h5>Chopard</h5>
  </div>
  <div className='Brandimg'>
    <img alt='hejrcve' src='https://zimsonwatches.com/cdn/shop/files/reguet_e383cbc6-cdce-4998-b518-88c9c07f2956.png?v=1701408045&width=330'/>
    <h5>Reguet</h5>
  </div>
  <div className='Brandimg'>
    <img alt='imagecd' src='https://zimsonwatches.com/cdn/shop/files/Breitling_1fc6ad6c-8f03-4d38-a34e-4c5731200448.png?v=1701407039&width=330'/>
    <h5>Breitling</h5>
  </div>
  <div className='Brandimg'>
    <img alt='imagedf' src='https://zimsonwatches.com/cdn/shop/files/Bvlgari_97954ce9-06f2-42e5-bedb-bb47230cd0d3.png?v=1701409805&width=330'/>
    <h5>Bvlgari</h5>
  </div>
  <div className='Brandimg'>
    <img alt='imagegfr' src='https://zimsonwatches.com/cdn/shop/files/Rado_ee387cbf-dc8d-45af-8be3-b4f41d34a046.png?v=1701406903&width=330'/>
    <h5>Rado</h5>
  </div>
  <div className='Brandimg'>
    <img alt='imagefgrv ' src='https://zimsonwatches.com/cdn/shop/files/Blancpain_49b0cee4-fc47-4228-9cba-6719c1624fa8.png?v=1701405776&width=330'/>
    <h5>Blancpain</h5>
  </div>
  <div className='Brandimg'>
    <img alt='imager gr' src='https://zimsonwatches.com/cdn/shop/files/Tissot-1.png?v=1701408044&width=330'/>
    <h5>Tissot</h5>
  </div>
</div>

<h3>Explore The Collection</h3>
<div className='Box-pro'>
<div className='Box-pro'>
        {selectedProducts.map((product) => (
          <div className='product' key={product.id}>
            <div>
              <img className='pro-img' src={product.image} alt={product.name} />
            </div>
            <h5>{product.brand}</h5>
            <h6>{product.name} <span className='gender'>{product.gender}</span></h6>
            <p>₹{product.price}</p>
          
          </div>
        ))}
        <button>Load more watches</button>
      </div>
</div>
<h3> </h3>
<div className='service-box'>
  <div className='service'><img alt='produc' src='https://zimsonwatches.com/cdn/shop/files/2_1_41961880-58d9-48ed-bfaf-28681b4d4630.jpg?v=1688456394' /> </div>
  <div className='service'><h4 >WATCH SERVICE</h4>  <p>Get your watch service at our authorized service center</p> <br></br> <h5>Service request</h5></div>
  <div className='service'><h4 >SHOWROOMS</h4>  <p>Would you like to visit us? Locate the Timezone boutique that is closest to you. We are looking forward to welcoming you.</p> <br></br> <h5>FIND A SHOWROOM</h5> </div>
  <div className='service'><img src='https://ad.kapoorwatch.com/content/images/store/South-Ex-I-S.jpg' alt='imae'/> </div>
</div>
<h2 className='whyheading'>WHY SHOP WITH US?</h2>
<div className='whyshop'>
  <div > 
    <h5>#1 Fair Pricing</h5>
    <p>We have a direct relationship with the distributors of each brand, making it possible for us avoid traditional mark-ups and bring these brands to you at the best market rates.</p>
  </div>
  <div >
     <h5>#2 Untouched Watches</h5>
     <p>Being a 100% online store ensures that every item bought reaches you in pristine condition, not touched or tried on by customers, as it would be in a traditional retail outlet.</p>
     </div>
  <div > 
    <h5>#3 Pan-India Delivery</h5>
  <p>Quick dispatch of orders and delivery all over India within 3-4 days of purchase.</p>
  </div>
  <div >
    <h5> #4 Authentic & International Warranty</h5>
    <p>We are the authorised retailers for all the brands in our website, and every watch we sell comes with a minimum of 2 years international warranty.</p>
    </div>
</div>
<div className='emmailbox'>
  <h4>Exclusive E-Mail Content</h4>
  <p>Receive our weekly written content, exclusively for our email subscribers.</p>
  <div><input placeholder='Enter Your Email' type='email'></input><button> subscriber</button> </div>

</div>

    </>
      

  );
}





export default Home;

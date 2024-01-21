import React from 'react';

function Contact() {
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
  <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/smart-watch-1.jpg?v=1688630209" alt="External Example" className="d-block" style={{ width: '100%' }} />  </div>
  <div className="carousel-item">
  <img src="https://img.beatxp.com/prod/category/37/desktop/banner/CategoryPage_Smartwatch_Rahul_Desktop_1.webp" alt="External Example"className="d-block" style={{ width: '100%' }} />  </div>
  <div className="carousel-item">
  <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_copy_a214f5f2-e3cb-4f0a-b46b-fdc5e06a7be1_1759x.jpg?v=1705038034" alt="External Example"className="d-block" style={{ width: '100%' }} />  </div>
</div>


<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>

    </>
  )
}

export default Contact;

import React from 'react'

import './footer.css'

function Footer() {
  return (
    
    <footer class="footer-distributed" style={{marginTop:"10px"}}>

      <div class="footer-right">

        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>
        <p></p>

      </div>

      <div class="footer-left">

        <p class="footer-links">
          <a class="link-1" href="#">Home</a>

          {/* <a href="#">Blog</a> */}

          

          <a href="#">About</a>

          

          <a href="#">Contact</a>
        </p>

        <p>M/s Maiti Mercantile &copy; 2023</p>
        <p>Phone/Whatsapp Numbers - 9564144396</p>
      </div>

    </footer>
  )
}

export default Footer
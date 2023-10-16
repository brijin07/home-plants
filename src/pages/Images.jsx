import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'


function Images() {
  return (
    <div className='imgaagesss'>

     <div className='tag'>
      <marquee loop="10" behavior="" direction="">
      <div className='mark'>
      <div className='nature'>RECONNECT TO NATURE</div>
      <div className='nature'>RECONNECT TO NATURE</div>
      <div className='nature'>RECONNECT TO NATURE</div>
      <div className='nature'>RECONNECT TO NATURE</div>
      <div className='nature'>RECONNECT TO NATURE</div>
      <div className='nature'>RECONNECT TO NATURE</div>
      <div className='nature'>RECONNECT TO NATURE</div>
      <div className='nature'>RECONNECT TO NATURE</div>
      <div className='nature'>RECONNECT TO NATURE</div>
      <div className='nature'>RECONNECT TO NATURE</div>
      </div>
      </marquee ></div>


        <Row className='img-flex'>
          <Col md={6}>
          <div id='gall1' class="image-gallery">
          <div  className="image">
          <img id='img1'  />
          </div>
          <div className="image">
          <img id='img2'   />
          </div>
        
        </div>

        <div id='two' class="image-gallery">
          <div  className="image">
          <img id='img1' src="https://www.conserve-energy-future.com/wp-content/uploads/2016/05/Janet-Craig-Dracaena.jpg" alt="" />
          </div>
          <div className="image">
          <img src="https://hips.hearstapps.com/hmg-prod/images/man-watering-houseplants-royalty-free-image-1678736179.jpg?crop=1.00xw:0.752xh;0,0.108xh&resize=640:*" alt="" />
          </div>
          
        </div>
          </Col>

          <Col md={6}><div className="collage-txt">

            <h1>Disconnect <span>+</span> <br />Decompress</h1>

            <p>Grounded was created to help you disconnect and decompress through the appreciation of plants in the spaces we occupy.

                Our selection of plants has a plethora of benefits designed to elicit a sense of tranquility and mindfulness.</p>

                <div style={{width:"100%"}}>  <Button className='img-btn' variant="light">Shop Our New Arrivals</Button>{' '}</div>
                
            </div></Col>

        </Row>



        

    </div>
   
  )
}

export default Images
import Carousel from 'react-bootstrap/Carousel';
const Home=()=>{
    return(
        <>
         <Carousel>
      <Carousel.Item>
        <a href='#'><img src="images/a1.jpg" height="650px" width="1500px"/></a>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='#'><img src="images/a2.jpg" height="650px" width="1500px"/></a>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='#'><img src="images/a3.jpg" height="650px" width="1500px" /></a>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Home;
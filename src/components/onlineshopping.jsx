import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ontainer from 'react-bootstrap/Container';
import oppo from './oppo.png'
import vivo from './vivo.png'
import redmni from './redmi.png'
import Pagination from 'react-bootstrap/Pagination';


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}
const Onlineshopping = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-primary">
                <Container fluid>
                    <Navbar.Brand href="#">Online Shopping</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <Nav.Link href="#action2">aboute</Nav.Link>
                            <Nav.Link href="#action2">setting</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='m-5'>
                <Row>
                    <Col xs={6} md={4}>
                        <div className='bg-primary' id='color'>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6ok_ry9AasGT9hpg7_Y6kTwBe3nU3lGs0w&s" fluid width={'600px'} />
                            <div class="card-body">
                                <h5 class="text-center text-black card-title">Redmi note 13 pro</h5>
                                <h5 class="text-center text-black card-title">Ram|Rom : 8GB|256 GB</h5>
                                <h5 class="text-center text-black card-title">Processor : 7s Gen </h5>
                                <h5 class="text-center text-black card-title">Read camera : 200Mp</h5>
                                <h5 class="text-centertext-black card-title">Front camera : 16Mp</h5>
                                <h5 class="text-center text-black card-title">Battery : 5100mAh</h5>
                                <p class="text-center text-black card-text bg-warning"><del>$30000</del> - $20000</p>
                                <center><a href="#" class="btn btn-success text-center">Add to Cart</a></center>
                            </div>
                        </div>

                    </Col>

                    <Col xs={6} md={4}>
                        <div className='bg-primary' id='color'>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTUTxMLCed9Vcqla4SY64BvllfhOcVyxmdw&s" fluid width={'1000px'} />
                            <div class="card-body">
                                <h5 class="text-center text-black card-title">Vivo V50</h5>
                                <h5 class="text-center text-black card-title">Ram|Rom : 8GB|256 GB</h5>
                                <h5 class="text-centertext-black card-title">Processor : 7s Gen </h5>
                                <h5 class="text-center text-black card-title">Read camera : 200Mp</h5>
                                <h5 class="text-center text-black card-title">Front camera : 16Mp</h5>
                                <h5 class="text-center text-black card-title">Battery : 5100mAh</h5>
                                <p class="text-center text-black card-text bg-warning"><del>$40000</del> - $36000</p>
                                <center><a href="#" class="btn btn-success text-center">Add to Cart</a></center>
                            </div>
                        </div>

                    </Col>
                    <Col xs={6} md={4}>
                        <div className='bg-primary' id='color'>
                            <div class="card-body">
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAGnkxyijEIO_7CRWqkz2X_FfsmJc3Qv9Ew&s" fluid width={'1000px'} />
                                <h5 classn="text-center text-black card-title">Oppo A78</h5>
                                <h5 class="text-center text-black card-title">Ram|Rom : 8GB|256 GB</h5>
                                <h5 class="text-center text-black card-title">Processor : 7s Gen </h5>
                                <h5 class="text-center text-black card-title">Read camera : 200Mp</h5>
                                <h5 class="text-center text-black card-title">Front camera : 16Mp</h5>
                                <h5 class="text-center text-black card-title">Battery : 5100mAh</h5>
                                <p class="text-centertext-black card-text bg-warning"><del>$40000</del> - $35000</p>
                                <center><a href="#" class="btn btn-success text-center">Add to Cart</a></center>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>  
            <div>
                <center><Pagination size="lg ">{items}</Pagination></center>
            </div>

        </>
    )
}

export default Onlineshopping
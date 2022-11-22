import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Route, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '../features/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const Dashboard = (prop) => {
    const navigate = useNavigate() 
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    const [loggedUser, setLoggedUser] = useState({})

    console.log(loggedUser)
    
    // console.log(user);
    var userid = localStorage.getItem('email')
    console.log(userid);
    var token = localStorage.getItem('Token')
    console.log(token);

             axios.get(`http://localhost:8081/users/${userid}` )
             .then(response => 
                
                setLoggedUser(response.data) )
                
                .catch(error => console.log(error))
        
    // }
    




    const Logout = () => {

        navigate('/')
        alert("You have been Logout")
        localStorage.clear()
        dispatch(logout(
            {
                id: "",
                username: "",
                loginStatus: false,
                component: <Route path='/dashboard' element={<Dashboard />} />
            }
        ))
    }

    return (
        <div>
            <div className='container-well'>
                {/* Nav bar Starts here */}
                <Navbar collapseOnSelect bg="light" expand="lg" variant="light">
                    <Container >
                        <Navbar.Brand>
                            <img
                                src="https://media.istockphoto.com/vectors/online-wallet-with-dollar-banknotes-and-coins-finance-bank-concepts-vector-id1168671572?k=20&m=1168671572&s=612x612&w=0&h=TaPayQsjXHB-OHsyhV1f7f7U75SRJfOSE1CAE3UjIT4="
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Brand >Wallet-Pay</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-5 me-auto">
                                <Nav.Link>My Profile</Nav.Link>
                                <Nav.Link>My Payment History</Nav.Link>
                                <Nav.Link>Wallet Balance</Nav.Link>
                                <NavDropdown title="Services" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Medicines</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Cinema</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Malls</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Food & Beverages</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">More...</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>Signed in as: {loggedUser.email} </Navbar.Text>
                            {/* <Navbar.Text>Signed in as: {Mark Otto} </Navbar.Text> */}
                            <Button variant="outline-secondary" size="sm" className="ms-3" onClick={Logout} >Logout</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* User Greetings */}
                <h4 className="mt-5 text-center">Welcome, {loggedUser.name} </h4>

                <h3 className="mt-3 ms-5 mb-3" >Quick Links</h3>
                {/* Quick Links */}
                <Container>

                    <Row sm={6} md={6} lg={10}>
                        <Col className='mt-3' >
                            <Button variant="outline-primary">Invoices</Button>
                        </Col>
                        <Col className='mt-3' >
                            <Button variant="outline-primary">Balance</Button>
                        </Col>
                        <Col className='mt-3' >
                            <Button variant="outline-primary">Recharge</Button>
                        </Col>
                        <Col className='mt-3' >
                            <Button variant="outline-primary">Transactions</Button>
                        </Col>
                        <Col className='mt-3' >
                            <Button variant="outline-primary">Cashbacks</Button>
                        </Col>
                    </Row>
                </Container>
                {/* Your Favorie Services */}
                <h4 className="ms-5 mt-5" > Your Favorie Services </h4>

                <Container>
                    <Row sm={4} md={10} lg={6}>
                        <Col className='m-3' >
                            <Card style={{ width: '15rem' }} >
                                <Card.Img variant="top" src="https://st2.depositphotos.com/3265223/9662/v/450/depositphotos_96625120-stock-illustration-currency-line-icons-forex-trading.jpg" />
                                <Card.Body>
                                    <Card.Title>Forex</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='m-3' >
                            <Card style={{ width: '15rem' }} >
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/university-student-cap-mortar-board-diploma_3446-334.jpg?w=826&t=st=1663825701~exp=1663826301~hmac=a2d6046bb5e73c3c2c407cf7cb348b649e93f24834a003aa453df5e2340ebd0d" />
                                <Card.Body>
                                    <Card.Title>Education</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>

                {/* Recommendation */}
                <h4 className="ms-5 mt-5">Recommended</h4>
                <Container>
                    <Row sm={4} md={10} lg={6}>
                        <Col className='m-3' >
                            <Card style={{ width: '15rem' }} >
                                <Card.Img variant="top" src="https://as2.ftcdn.net/v2/jpg/01/82/20/45/1000_F_182204502_vuPdUaX0Cxm5EEB4PkOVz98s4rKucUyN.jpg" />
                                <Card.Body>
                                    <Card.Title>Entertainment</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='m-3' >
                            <Card style={{ width: '15rem' }} >
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/money-transfer-abstract-concept-illustration_335657-2227.jpg?w=826&t=st=1663825818~exp=1663826418~hmac=30967b63abfb670936140eda3180993d1c1150ba946b430ff989353260f548a3" />
                                <Card.Body>
                                    <Card.Title>Fund Transfer</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='m-3' >
                            <Card style={{ width: '15rem' }} >
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/increasing-stocks-graphic-icon-increasing-stocks-graphic-graph-161498500.jpg" />
                                <Card.Body>
                                    <Card.Title>Stocks</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>

                <h4 className="ms-5 mt-5" > All Services </h4>
                <Container>
                    <Row sm={4} md={10} lg={6}>
                        <Col className='m-3' >
                            <Card style={{ width: '15rem' }} >
                                <Card.Img variant="top" src="https://media.istockphoto.com/vectors/vector-flat-insurance-banner-template-illustration-family-person-vector-id1194346462?k=20&m=1194346462&s=170667a&w=0&h=V_liLbC8BEKmcSqjQoycILUthuGeeGCU9KJi92Eaz_4=" />
                                <Card.Body>
                                    <Card.Title>Insurance</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='m-3' >
                            <Card style={{ width: '15rem' }} >
                                <Card.Img variant="top" src="https://media.istockphoto.com/vectors/airplane-flying-above-tourists-luggage-suitcase-passport-tickets-vector-id1311890911?k=20&m=1311890911&s=612x612&w=0&h=qqltAb4wI3lfG9uVrLme9cHBDH8cDnFVrls_KzT8wtg=" />
                                <Card.Body>
                                    <Card.Title>Travel</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='m-3' >
                            <Card style={{ width: '15rem' }} >
                                <Card.Img variant="top" src="https://media.istockphoto.com/vectors/many-bank-cards-in-one-hand-vector-id1128868969?k=20&m=1128868969&s=612x612&w=0&h=Faxjl8SsDLzAgCFiIodnqigborUKgKLlYzPKCvkkTJ4=" />
                                <Card.Body>
                                    <Card.Title>Cards</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='m-3' >
                            <Card style={{ width: '15rem' }} >
                                <Card.Img variant="top" src="https://img.freepik.com/premium-vector/fast-food-cartoon-color-illustration_7243-196.jpg?w=2000" />
                                <Card.Body>
                                    <Card.Title>Food</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='m-3' >
                            <Card style={{ width: '15rem' }} >
                                <Card.Img variant="top" src="https://media.istockphoto.com/vectors/file-illustration-vector-id1093457270?k=20&m=1093457270&s=612x612&w=0&h=hawRhOdws36tZa4AV3KsuBBPEL9LdySlknX5-NSRvZU=" />
                                <Card.Body>
                                    <Card.Title>And Many More...</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laboriosam.
                                    </Card.Text>
                                    <Button variant="primary">Explore</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>

                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">

                        </a>
                        <p className="text-muted">© Wallet-Pay 2022</p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <h5>Personal</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 nav-link p-0 text-muted">Loans</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">Fund Management</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">Trade</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">Demat</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">Know more</li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Business</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 nav-link p-0 text-muted">Home</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">Features</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">Pricing</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">FAQs</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">About</li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Enterprise</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 nav-link p-0 text-muted">Home</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">Features</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">Pricing</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">FAQs</li>
                            <li className="nav-item mb-2 nav-link p-0 text-muted">About</li>
                        </ul>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Dashboard
import Link from "next/link";

export default function Header() {

    
    return <>
      {/* header area start  */}
      
        <header>
            <div className="header-area">
                <div className="header__top header__top-3 d-none d-md-block box-105">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-8">
                                <div className="header__top-left">
                                    <div className=" logo-3">
                                        <Link href="/">
                                        <h1>Rainbow Consultancy</h1>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6 col-4">
                                <div className="header__top-right d-flex justify-content-end">
                                    <div className="header__info d-none d-lg-flex">
                                        <div className="header__info-icon">
                                            <span className="icon flaticon-history"></span>
                                        </div>
                                        <div className="header__info-text">
                                            <span>opening:</span>
                                            <span> Monday to Friday</span>
                                        </div>
                                    </div>
                                    <div className="header__info d-none d-md-flex">
                                        <div className="header__info-icon">
                                            <span className="icon flaticon-24-hours-support"></span>
                                        </div>
                                        <div className="header__info-text">
                                            <span>Call us:</span>
                                            <span>+91 94231 01607</span>
                                        </div>
                                    </div>
                                    <div className="header__info d-none d-md-flex">
                                        <div className="header__info-icon">
                                            <span className="icon flaticon-envelope"></span>
                                        </div>
                                        <div className="header__info-text">
                                            <span>e-mail:</span>
                                            <span>info@rainbowconsultancy.in</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className="header__bottom-3 box-105">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-8 col-md-10 col-sm-6 col-8">
                                <div className="main-menu main-menu-2 main-menu-3 d-none d-md-block">
                                    <nav>
                                        <ul>
                                            <li><Link href="/">home</Link>
                                            
                                            </li>
                                            <li><Link href="/about-us">about</Link>
                                               
                                            </li>
                                            <li><Link href="/clients">Our Clients</Link>
                                                <ul className="submenu">
                                                    <li><Link href="">India</Link></li>
                                                    <li><Link href="">Nepal</Link></li>
                                                    <li><Link href="">Overseas</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/our-team">Resource Persons</Link>
                                              
                                            </li>
                                            <li><Link href="/testimonials">Testimonials</Link>
                                           
                                            </li>
                                            <li><Link href="#">Links</Link>
                                                <ul className="submenu">
                                                    <li><Link href="#">link1</Link></li>
                                                    <li><Link href="#">link2</Link></li>
                                                    <li><Link href="#">link3</Link></li>
                                                    <li><Link href="#">link4</Link></li>
                                                    <li><Link href="#">link5</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/photo-gallery">Photo Gallery</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className=" logo-3 text-center d-md-none">
                                    <Link href="/"><h1>Rainbow Consultancy</h1></Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-2 col-sm-6 col-4">
                                <div className="header__bottom-3-right d-flex justify-content-end align-items-center">
                                    <div className="social social-border d-none d-xl-block">
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="header__btn ml-35 d-none d-lg-block">
                                        <Link href="/contact" className="s-btn s-btn__square">Contact Us Now</Link>
                                    </div>
                                    <div className="header-bar header-bar-2 info-toggle-btn f-right d-md-block d-lg-none">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     {/* header area start  */}
    
    </>;
  }
  
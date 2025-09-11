import Link from "next/link";

export default function Footer(){
    return<>
         <footer>
        <div className="footer__area pt-130 footer-bg box-105">
            <div className="container-fluid">
                <div className="footer__bottom pb-50">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-50">
                            <div className="footer__widget">
                                <div className="footer__widget-title mb-30">
                                    <div className="logo">
                                        <Link href="index.html"><h1 className="text-white">Rainbow Consultancy</h1></Link> 
                                    </div>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__logo-area">
                                        <p>Rainbow Consultancy, Nagpur offers NGO-focused services: project documentation, research, evaluations, training, strategic planning, OD programs & legal support.</p>
    
                                        <div className="social">
                                            <h4>Follow us</h4>
                                            <ul>
                                            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link> </li>
                                                <li><Link href="#"><i className="fab fa-facebook-f"></i></Link> </li>
                                                <li><Link href="#"><i className="fab fa-instagram"></i></Link> </li>
                                                <li><Link href="#"><i className="fab fa-twitter"></i></Link> </li>
                                                <li><Link href="#"><i className="fab fa-youtube"></i></Link> </li>
                                                
                                      
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-50">
                            <div className="footer__widget">
                                <div className="footer__widget-title mb-25">
                                    <h2>Services</h2>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__services">
                                        <ul>
                                            <li><Link href="services-details.html">Documentation</Link> </li>
                                            <li><Link href="services-details.html">Research & Evaluation</Link> </li>
                                            <li><Link href="services-details.html">Need-based / Tailored Trainings</Link> </li>
                                            <li><Link href="services-details.html">Organizational Development (OD) Programs</Link> </li>
                                            <li><Link href="services-details.html">Assessment Tools / Organizational Studies</Link> </li>
                                            <li><Link href="services-details.html">Strategic Planning / Monitoring</Link> </li>
                                            <li><Link href="services-details.html">Legal Advice / Support</Link> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-50">
                            <div className="footer__widget">
                                <div className="footer__widget-title mb-25">
                                    <h2>Contact Info</h2>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__contact-info">
                                        <ul>
                                            <li>
                                                <div className="footer__contact-address">
                                                    <span>Plot No. 12, Rainbow House, Ayyappa Nagar, Gorewada, Jafar Nagar, Nagpur, Maharashtra ‒ 440013</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer__contact-item">
                                                    <h6>Email:</h6>
                                                    <p>rainbow4us@gmail.com</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer__contact-item">
                                                    <h6>Support:</h6>
                                                    <p>+91 94231 01607</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer__contact-item">
                                                    <h6>Website:</h6>
                                                    <p>www.rainbowconsultancy.in</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-50">
                            <div className="footer__widget">
                                <div className="footer__widget-title mb-25">
                                    <h2>Stay in Touch</h2>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__subscribe">
                                        <p>Fruitful and herb the seasons of fish saying likeness face beast cattle.</p>
                                        <div className="footer__subscribe-form footer__subscribe-form-2">
                                            <form action="#">
                                                <input type="email" placeholder="Email Address"/>
                                                <button className="s-btn s-btn__square-2" type="submit"><i className="fal fa-paper-plane"></i> subscribe now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="footer__copyright-text">
                                <p>Copyright © 2025 <Link href="/" target="_blank"> Rainbow Consultancy</Link> . All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">

                        <div className="footer__copyright-text">
                                <p style={{textAlign:"right"}}>Developed and Maintained by <Link href="https://www.dilipmaurya.in/" target="_blank"> Dilip</Link>  </p>
                            </div>
                            {/* <div className="footer__policy ">
                                <Link href="#">Terms & Condition</Link> 
                                <Link href="#"> Privacy</Link> 
                                <Link href="#">Support</Link> 
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer></>
   
  
    
}
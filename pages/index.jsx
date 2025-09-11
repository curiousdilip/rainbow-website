import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
    return <>
    <Header/>
    <section className="hero">
   
            <div className="slider-area p-relative" data-background="assets/img/slider-bg.jpg">
           
                <div className="container-fluid p-0">
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center">
                            <div className="row align-items-center gx-0 mt-40">
                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                    <div className="slider-content">
                                        <span data-animation="fadeInUp" data-delay=".2s">Every depression solution</span>
                                        <h2 data-animation="fadeInUp" data-delay=".4s">Best therapy
                                        makes Excellent
                                        yours family</h2>
                                        <div className="slider-btn" data-animation="fadeInUp" data-delay=".6s">
                                            <a href="contact.html" className="s-btn s-btn__white">Contact Us now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-7 d-none d-md-inline-block">
                                    <div className="slider-thumb text-end" data-animation="fadeInRight" data-delay=".8s">
                                        <img src="/" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                     
                    </div>
                </div>
            </div>
           
    </section>
    <section style={{height:"200vh"}}></section>



    <Footer/>
    </>;
  }
  
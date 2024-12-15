<template>
<footer class="footer-area">
        <div class="footer-widget">
            <div class="container">
                <div class="row footer-widget-wrapper">
                    <div class="col-md-6 col-lg-4">
                        <div class="footer-widget-box about-us">
                            <a href="#" class="footer-logo">
                              <h4  class="footer-widget-title"> KIDS CASTLE PRE SCHOOL</h4>
                            </a>
                            <p class="mb-4">
                                We are many variations of passages available but the majority have suffered alteration
                                in some form by injected humour words believable.
                            </p>
                            <ul class="footer-contact">
                                <li><a href="tel:+923226817977"><i class="far fa-phone"></i>+92322-6817977</a></li>
                                <li><i class="far fa-map-marker-alt"></i>Plot Number 204, Gulshan Raza Town Burewala, Vehari, Punjab 61010</li>
                                <li><a href="mailto:hamzasaood9@gmail.com"><i
                                            class="far fa-envelope"></i><span class="__cf_email__">hamzasaood9@gmail.com</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-2">
                        <div class="footer-widget-box list">
                            <h4 class="footer-widget-title">Quick Links</h4>
                            <ul class="footer-list">
                                <li><RouterLink to="/About-us"><i class="far fa-circle-dot"></i> About Us</RouterLink></li>
                                <li><RouterLink to="/Classes"><i class="far fa-circle-dot"></i> Our Classes</RouterLink></li>
                                <li><RouterLink to="#"><i class="far fa-circle-dot"></i> Terms Of Service</RouterLink></li>
                                <li><RouterLink to="#"><i class="far fa-circle-dot"></i> Privacy policy</RouterLink></li>
                                <li><RouterLink to="/Our-Gallery"><i class="far fa-circle-dot"></i> Our Gallery</RouterLink></li>
                                <li><RouterLink to="/Contact-us"><i class="far fa-circle-dot"></i> Contact Us</RouterLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="footer-widget-box list">
                            <h4 class="footer-widget-title">Our Program</h4>
                            <ul class="footer-list">
                                <li><a href="#"><i class="far fa-circle-dot"></i> Reception</a></li>
                                <li><a href="#"><i class="far fa-circle-dot"></i> Class One</a></li>
                                <li><a href="#"><i class="far fa-circle-dot"></i> Class Two</a></li>
                                <li><a href="#"><i class="far fa-circle-dot"></i> Class Three</a></li>
                                <li><a href="#"><i class="far fa-circle-dot"></i> Class Four</a></li>
                                <li><a href="#"><i class="far fa-circle-dot"></i> Class Five</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="footer-widget-box list">
                            <h4 class="footer-widget-title">Newsletter</h4>
                            <div class="footer-newsletter">
                                <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                                <div class="subscribe-form">
                                    <form action="#">
                                        <input type="email" class="form-control" placeholder="Your Email">
                                        <button class="theme-btn" type="submit">
                                            Subscribe Now <i class="far fa-paper-plane"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 align-self-center">
                        <p class="copyright-text">
                            &copy; Copyright <span id="date"></span> <a href="https://itify.website"> ITify(SMC Private)Limited </a> All Rights Reserved.
                        </p>
                    </div>
                    <div class="col-md-6 align-self-center">
                        <ul class="footer-social">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
       </template>
       <style>
       .footer-contact li {
   
    margin-bottom: 18px !important;
}
       </style>
       <script>
       export default {
         name: 'FooterPage',
       };
       </script>

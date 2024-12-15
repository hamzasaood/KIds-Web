<template>
 <main class="main">

<!-- breadcrumb -->
<div class="site-breadcrumb" style="background: url(assets/img/breadcrumb/01.jpg)">
    <div class="container">
        <h2 class="breadcrumb-title">Contact Us</h2>
        <ul class="breadcrumb-menu">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li class="active">Contact Us</li>
        </ul>
    </div>
    <div class="hero-shape">
        <img class="hero-shape-1" src="assets/img/shape/01.png" alt="">
    </div>
</div>
<!-- breadcrumb end -->



<!-- contact area -->
<div class="contact-area py-120">
    <div class="container">
        <div class="contact-content">
            <div class="row">
                <div class="col-md-3">
                    <div class="contact-info contact-color-1">
                        <div class="contact-info-icon">
                            <i class="fal fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-info-content">
                            <h5>Office Address</h5>
                            <p>Plot Number 204, Gulshan Raza Town Burewala, Vehari, Punjab 61010</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="contact-info contact-color-2">
                        <div class="contact-info-icon">
                            <i class="fal fa-phone"></i>
                        </div>
                        <div class="contact-info-content">
                            <h5>Call Us</h5>
                            <p>+92322-6817977</p>
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="contact-info contact-color-3">
                        <div class="contact-info-icon">
                            <i class="fal fa-envelope"></i>
                        </div>
                        <div class="contact-info-content">
                            <h5>Email Us</h5>
                            <p><a href="mailto:hamzasaood9@gmail.com" class="__cf_email__" data-cfemail="96fff8f0f9d6f3eef7fbe6faf3b8f5f9fb">hamzasaood9@gmail.com</a></p>
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="contact-info contact-color-4">
                        <div class="contact-info-icon">
                            <i class="fal fa-clock"></i>
                        </div>
                        <div class="contact-info-content">
                            <h5>Open Time</h5>
                            <p>Mon - Sat (08.00AM - 02.00PM)</p>
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-wrapper">
            <div class="row">
                <div class="col-lg-6 align-self-center">
                    <div class="contact-img">
                        <img src="assets/img/contact/01.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6 align-self-center">
                    <div class="contact-form">
                        <div class="contact-form-header">
                            <h2>Get In Touch</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable
                                content of a page randomised words which don't look even slightly when looking at its layout. </p>
                        </div>
                        <form method="post" action="#" id="contact-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="name"
                                            placeholder="Your Name" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email"
                                            placeholder="Your Email" required>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="subject"
                                    placeholder="Your Subject" required>
                            </div>
                            <div class="form-group">
                                <textarea name="message" cols="30" rows="5" class="form-control"
                                    placeholder="Write Your Message"></textarea>
                            </div>
                            <button type="submit" class="theme-btn">Send
                                Message <i class="far fa-paper-plane"></i></button>
                            <div class="col-md-12 mt-3">
                                <div class="form-messege text-success"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end contact area -->

<!-- map -->
<div class="contact-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13799.675026431143!2d72.6699413!3d30.1537387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393cdff46de79aa7%3A0x52f4cb1b2d580228!2sKids%20Castle%20Preschool!5e0!3m2!1sen!2s!4v1733237244196!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>


</main>

    
    
    </template>
    <style>
    
    
    
    
    
    .hero-content .hero-sub-title {
        display: inline-block !important; 
        background: #92278F;
        color: #fff;
        padding: 8px 20px;
        font-size: 20px;
        border-radius: 50px;
        position: relative;
        text-transform: uppercase;
    }
    
    .hero-single {
        display: none ;
    
    
    }
    #partnerCarousel img {
        max-width: 150px; /* Adjust size */
        height: auto;
    }
    
    
    </style>
    <script>
    
    
    
    export default {
      name: "ContactPage",
      
    };
    </script>
    
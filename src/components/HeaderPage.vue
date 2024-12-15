<template>

<header class="header">
        <!-- top header -->
        <div class="header-top">
            <div class="container">
                <div class="header-top-wrapper">
                    <div class="header-top-left">
                        <div class="header-top-contact">
                            <ul>
                                <li>
                                    <div class="header-top-contact-icon">
                                        <i class="far fa-location-dot"></i>
                                    </div>
                                    <div class="header-top-contact-info">
                                        <a href="#">Plot Number 204, Gulshan Raza Town Burewala</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="header-top-contact-icon">
                                        <i class="far fa-envelopes"></i>
                                    </div>
                                    <div class="header-top-contact-info">
                                        <a href="mailto:hamzasaood9@gmail.com"><span class="__cf_email__" data-cfemail="442d2a222b04213c25293428216a272b29">hamzasaood9@gmail.com</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="header-top-contact-icon">
                                        <i class="far fa-clock"></i>
                                    </div>
                                    <div class="header-top-contact-info">
                                        <a href="#">Mon - Sat (08.00AM - 02.00PM)</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="header-top-right">
                        <div class="header-top-social">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-navigation">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <RouterLink class="navbar-brand" to="/">
                        <img src="assets/img/logo/logo.png" style="width: 100px;" alt="logo">
                    </RouterLink>
                    <div class="mobile-menu-right">
                        <div class="mobile-menu-list">
                            <a href="#" class="mobile-menu-link search-box-outer"><i class="far fa-search"></i></a>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"><i class="far fa-stream"></i></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="main_nav">
                        <ul class="navbar-nav">
                            <li class="nav-item"><RouterLink class="nav-link" to="/" active-class="active" exact-active-class="active" >Home</RouterLink></li>
                            <li class="nav-item"><RouterLink class="nav-link" to="/Classes" active-class="active" exact-active-class="active" >Our Classes</RouterLink></li>
                            <li class="nav-item"><RouterLink class="nav-link" to="/Our-Gallery" active-class="active" exact-active-class="active" >Our Gallery</RouterLink></li>

                            <li class="nav-item"><RouterLink class="nav-link" to="/About-us" active-class="active" exact-active-class="active" >About us</RouterLink></li>
                            
                            
                            
                           
                            <li class="nav-item"><RouterLink class="nav-link" to="/Contact-us" active-class="active" exact-active-class="active" >Contact us</RouterLink></li>
                        </ul>
                        <div class="header-nav-right">
                            <div class="header-nav-search">
                                <a href="#" class="header-nav-link search-box-outer"><i class="far fa-search"></i></a>
                            </div>
                            <div class="header-btn">
                                <RouterLink to="/Contact-us" class="theme-btn mt-2">Get Started <i class="far fa-arrow-right"></i></RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <!-- header area end -->

</template>
<style>
#main_nav{
    justify-content: space-evenly;
}
</style>
<script>
//import axios from 'axios';
//import { authState } from '../Auth';

export default {
  name: 'HeaderPage',
      
};
</script>
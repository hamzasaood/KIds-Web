<template>
<main class="main">

<!-- breadcrumb -->
<div class="site-breadcrumb" style="background: url(assets/img/breadcrumb/01.jpg)">
    <div class="container">
        <h2 class="breadcrumb-title">Our Gallery</h2>
        <ul class="breadcrumb-menu">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li class="active">Our Gallery</li>
        </ul>
    </div>
    <div class="hero-shape">
        <img class="hero-shape-1" src="assets/img/shape/01.png" alt="">
    </div>
</div>
<!-- breadcrumb end -->



<!-- gallery-area -->
<div class="gallery-area py-120">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <div class="site-heading text-center">
                    <span class="site-title-tagline">Photo Gallery</span>
                    <h2 class="site-title">Explore Our Awesome <span>Photo</span> Gallery</h2>
                </div>
            </div>
        </div>
        <div class="row popup-gallery">
            <div class="col-md-6 col-lg-4">
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/01.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/01.jpg"><i
                                class="far fa-plus"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/02.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/01.jpg"><i
                                class="far fa-plus"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/03.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/01.jpg"><i
                                class="far fa-plus"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/04.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/01.jpg"><i
                                class="far fa-plus"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/05.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/05.jpg"><i
                                class="far fa-plus"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="assets/img/gallery/06.jpg" alt="">
                    </div>
                    <div class="gallery-content">
                        <a class="popup-img gallery-link" href="assets/img/gallery/06.jpg"><i
                                class="far fa-plus"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- gallery-area end -->


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
  name: "GalleryPage",
  
};
</script>

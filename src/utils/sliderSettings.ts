const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
};

export default sliderSettings;
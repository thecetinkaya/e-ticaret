import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ProductSlider = ({ campaigns }) => {
  return (
    <div className="w-full px-4 my-8">
      <h2 className="text-2xl font-bold mb-4">Kampanyalar</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // 3 saniyede bir geçiş yapacak
          disableOnInteraction: false, // Kullanıcı etkileşimi olsa bile otomatik geçiş devam etsin
        }}
        loop={true} // Loop özelliği
        spaceBetween={16} // Resimler arasındaki boşluk
        slidesPerView={1} // Yalnızca bir resim görüntülenir
        centeredSlides={true} // Ortalanmış slaytlar
        loopAdditionalSlides={1} // Döngüde bir ek slayt daha ekler, böylece geçiş daha doğal olur
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
        }}
      >
        {campaigns.map((campaign) => (
          <SwiperSlide key={campaign.id}>
            <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="h-60 object-contain mb-4" // Resim boyutunu büyütüyoruz
              />
              <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                {campaign.title}
              </h3>
              <p className="text-gray-700">{campaign.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;

# E-Ticaret Uygulaması

Bu proje, **React**, **Tailwind CSS** ve **Context API** kullanılarak geliştirilmiş bir e-ticaret uygulamasıdır. Kullanıcılar, ürünleri inceleyebilir, sepete ekleyebilir ve ödeme işlemi yapabilirler. Uygulama, dinamik arama, filtreleme ve ürün yönetimi gibi özellikler sunmaktadır.

## Teknolojiler

- **React**: Kullanıcı arayüzünü oluşturmak için kullanıldı.
- **Tailwind CSS**: Sayfa tasarımı ve responsive özellikler için kullanıldı.
- **Context API**: Global state yönetimi için kullanıldı.
- **Swiper**: Ürünleri göstermek için slider işlevi sağladı.

## Home Sayfası

Home sayfası, kullanıcıların alışverişe başlamasını sağlayan ana sayfadır. Sayfada şunlar bulunur:

1. **Swiper Slider**:

   - **Swiper** kütüphanesi kullanılarak, kampanyalar ve promosyonlar için dinamik bir slider eklenmiştir. Kullanıcılar, bu slider aracılığıyla kampanyaları kolayca görüntüleyebilir.
   - Slider otomatik geçiş yapar ve her kaydırmada yeni bir kampanya görseli sunar.

2. **Ürün Filtreleme ve Arama**:

   - Kullanıcılar, **dropdown** menüsü ile ürün kategorilerini seçebilir ve **search bar** ile arama yaparak ürünleri filtreleyebilirler.
   - Bu özellik, ürünlerin kolayca bulunmasını sağlar.

3. **Ürün Listeleme**:
   - Seçilen kategori ve arama filtresine göre ürünler liste halinde görüntülenir.

## Ürün Detay Sayfası

Ürün detay sayfası, her bir ürünün ayrıntılarını gösterir. Bu sayfada:

- **Ürün adı, fiyatı, açıklaması ve görselleri** yer alır.
- Kullanıcılar ürünü sepete ekleyebilirler.

## Sepet Sayfası

Sepet sayfasında, kullanıcının sepete eklediği ürünler görüntülenir. Bu sayfada şunlar yapılabilir:

1. **Ürün Sayısını Arttırma veya Azaltma**:
   - Sepetteki ürünlerin miktarını değiştirebilirsiniz.
2. **Ürün Silme**:

   - Sepetteki istenmeyen ürünler silinebilir.

3. **Sepeti Onaylama**:
   - Kullanıcılar, sepetteki ürünleri onayladığında checkout sayfasına yönlendirilir.

## Checkout Sayfası

Checkout sayfasında, kullanıcılar ödeme işlemini gerçekleştirebilir. Bu sayfa, ürünlerin ve toplam tutarın görüntülendiği bir ödeme sayfasıdır.

- Kullanıcı ödeme bilgilerini girerek, satın alma işlemini tamamlar.
- Ödeme işlemi başarılı olduğunda kullanıcıya onay mesajı gösterilir.

## Proje Kurulumu

Bu projeyi yerel olarak çalıştırmak için şu adımları izleyebilirsiniz:

1. Projeyi klonlayın:

   ```bash
   git clone https://github.com/thecetinkaya/e-ticaret.git

   ```

2. Proje dizinine gidin:

   ```bash
   cd e-ticaret

   ```

3. Bağımlılıkları yükleyin:

   ```bash
   npm install

   ```

4. Uygulamayı başlatın:
   ```bash
   npm run dev
   ```

## Katkı

Herhangi bir katkıda bulunmak isterseniz, lütfen bir pull request oluşturun.

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Detaylar için LICENSE dosyasına bakabilirsiniz.

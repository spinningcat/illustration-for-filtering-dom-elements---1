# illustration-for-filtering-dom-elements---1

###**English Explanation**

#####*Functionality Overview*

It is really simple to work with that program I suppose. Just click the button and see what will happen. That filter the table according to the color of lines.

If you click “All” you shall see all records.

[Working demo] (https://jsfiddle.net/hellyeah/my3dd968/) -> it is just simple demo, needs to be modified.

(it will be hosted on actual domain soon.)

Semantic Overview

In this piece of code, we aim to filter table according to the color of the line. So when you click the button “any colour you want” you will see the only filtered records.

Actually, this development is part of monitoring software. Each colour has its own meaning. Let summarise it below.

Red -> Failure. When the request is not completed and we don’t get a clear response. Green -> Success. When the request is done and we get a proper response with necessary information that you can see on the table. Orange -> Performance Problem

I set some cases in my backend design for the performance problem.

Compare the last time difference column with other time difference columns by taking average of them. Time differences are calculated with the operation described below. Request time (actual time) - Response Time (Actual Time) = Time Difference

I hold all information in the definition table. Thanks to those data, I do request. Also, each URL has its own threshold. If request time - response time is bigger than a threshold. It signifies that performance problem occurred. In my design, the threshold is the limit that we set for measuring and ensuring our response time is decent.

Blue -> it means precisely “we are not doing any request at that moment” So it is not controlled.

The mechanism of “inactive” record is like below.

In definition table, there is a specific column called “inactive” which is bit value 1 or 0. When you do “0” records seem blue “inactive”

Gray -> Concisely if the colour of record is grey. That means there is a serious problem in the system. Because there is no new record/records. Comparing the last request time and actually time would be enough to determine this problem.

In my design, there are two columns in definition table that are SleepTime and Timeout. The working environment of this app. is multithreaded. SleepTime is just a time approximately 1000ms for taking thread into “sleep state”. Whereas Timeout is a duration time that how to time the request last.

The calculation for emphasising the record is out of date is mentioned below.
**__Current Time - Last request time > (timeout + sleep time) * 5--**. **The record is out of date.**

###**Türkçe açıklaması - Turkish Explanation**

#####*Fonksiyonel İşleyiş*

Programın çalışma mekanizması oldukça basittir. Sadece butona basın ve ne olacağını görün. Tabloyu satırın rengine göre filtreleyecektir.

“All” butonuna basarsanız bütün kayıtlar gözükecektir.

[Çalışan Örnek] (https://jsfiddle.net/hellyeah/my3dd968/) modifiye edilmesi gerekmektedir.

(Bir süre sonra, domain de hos edilecektir.)

Anlamsal açıklama

Bu kod parçasında ki amacımız, tablodaki kayıtları renklerine göre filtrelemetir. Bir butona bastığında, her hangibir renk olabilir tablo filtrelenecektir.

Aslında bu tasarım, görüntüleme yazılımının bir parçasıdır. Her rengin kendine has bir anlamı olmaktadır. Özel olarak açıklamak gerekirse.

Kırmızı -> Başarısız. Eğer yaptığımız request başarısız olur ve temiz bir geri dönüş alamazsak. Yeşil -> Başarılı. Yaptığımız request başarılı olarak tamamlanır ve gereken geri dönüşü, serverden talep ettiğimiz bilgilerle alabilirsek, gerçekleşen durumdur. Turuncu -> Performans problemi

Sistem de performans probleminin olup olmadığını, arka planda oluşturduğum mekanizmalarla kontrol etmekteyim.

TimeDifference diye bir kolonumuz var. Son timedifference kolonuyla, diğerler timedifference kolonlarının averajıyla karşılaştırdığımda, eğer en son rimedifference kolonundaki zaman, averajdan büyük çıkarsa bir performans problemi vardır. Timedifference kolonu şu şekilde hesaplanmaktadır. Request time (actual time) - Response Time (Actual Time) = Time Difference

Bütün bilgileri tanım tablosunda tutmaktayım. Bu veriler sayesinde request yapıyorum. Çok önemli bir veri olarak threshhold bilgimiz var her bir URL için. Eğer timedifference, threshhold dan büyükse, bunun anlamı bir performans probleminin olduğudur. O zaman kaydın rengini turuncu yaparız.

Benim tasarımımda, threshhold, gelen zaman farkı (time differencenin) kabul edilebilir bir rakam olduğunu ölçmek ve anlamak içindir.

Mavi -> Özet olarak “Bu zaman zarfında herhangibir request yapmıyoruz” demektir.

Kaydın kontrol edilip, edilmemesi tamamen bizim kontrolümüzdedir. Ve mekanizma şöyledir.

Tanım tablosunda “inactive” diye bir kolon tutmaktayız. Bit değeri olarak 0 ile 1 i alır. Bu kolonun değerini 0 yaptığımız zaman o url kontrol edilmemektedir.

Gri -> Özet olarak kaydın rengi gri ise, ciddi bir problemle karşı karşıyayız demektir. Kaydın eski olduğu belirtilmektedir. son request zamanı ile şu anki saatin karşılaştırılmasıyla, bu kolayca saptanabilir.

Benim kendi tasarımımda, tanım tablosunda 2 tane kolon vardır. Bunlardan biri SleepTime diğeri Timeout tur.

Kısaca bu 2 kolonun ne ifade ettiğini anlatmak gerekirse, uygulama multi thread çalışmaktadır. Bir thread çalıştıktan sonra bell bir süre uyku durumuna geçmektedir. SleepTime’daki değer bir thread’i,n ne süreyle uyku durumunda olacağını belirtmek içindir. Timeout ise, bir rquest yapıldığğında, eğer request yapmada bazı sorunlar yaşarsak, ne kadar bir süre serverden cevap bekleneceğini belirtmek içindir.

Şöyle bir hsaplama kullanılmaktadır Eğer o an ki zaman - son request zaman > (timeout + sleeptime) * 5 ise kayıt eskidir.

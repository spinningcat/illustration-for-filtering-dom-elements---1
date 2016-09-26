# illustration-for-filtering-dom-elements---1

# illustration-for-filtering-dom-elements---1

###**English Explanation**

#####*Functionality Overview*

*It is really simple to work with that program I suppose. Just click the button and see what will happen. That filter the table according to the color of lines.*

*If you click “All” you shall see all records.*

#**[Working demo](https://jsfiddle.net/hellyeah/my3dd968/) -> it is just simple demo, needs to be modified.**

*(it will be hosted on actual domain soon.)*

#####*Semantic Overview*

*In this piece of code, we aim to filter table according to the color of the line. So when you click the button “any colour you want” you will see the only filtered records.*

*Actually, this development is part of monitoring software. Each colour has its own meaning. Let summarise it below.*

No | Color | Short Explanation | Case 1 | Case 2
--- | --- | --- | --- | --- 
1 | Red | Failure | When the request is not completed and we don’t get a clear response. | There is timeout column in definition table if request dont happen in the range of timeout. It is other reason we dont get response in return.  
2 | Orange | Performance Problem | Compare the last time difference column with other time difference columns by taking average of them. Time differences are  calculated with the operation described below. Request time (actual time) - Response Time (Actual Time) = Time Difference. | I hold all information in the definition table. Thanks to those data, I do request. Also, each URL has its own threshold. If response time - request time is bigger than a threshold. It signifies that performance problem occurred. In my design, the threshold is the limit that we set for measuring and ensuring our response time is decent.
3 | Blue | Inactive | it means precisely “we are not doing any request at that moment” So it is not controlled.* The mechanism of “inactive” record is like below. In definition table, there is a specific column called “inactive” which is bit value 1 or 0. When you do “0” records seem blue “inactive | 
4 | Gray | Out of date | Concisely if the colour of record is grey. That means there is a serious problem in the system. Because there is no new record/records. Comparing the last request time and actually time would be enough to determine this problem. In my design, there are two columns in definition table that are SleepTime and Timeout. The working environment of this app. is multithreaded. SleepTime is just a time approximately 1000ms for taking thread into “sleep state”. Whereas Timeout is a duration time that how to time the request last. The calculation for emphasising the record is out of date is mentioned below. Current Time - Last request time > (timeout + sleep time) * 5 The record is out of date | Another solution  just set timing limit like 15 mins and check if the difference between currenttime and last request time is bigger or smaller than this timing limits
5 | Green | Success | When the request is done and we get a proper response with necessary information that you can see on the table. | ...



###**Türkçe açıklaması - Turkish Explanation**

#####*Fonksiyonel İşleyiş*

*Programın çalışma mekanizması oldukça basittir. Sadece butona basın ve ne olacağını görün. Tabloyu satırın rengine göre filtreleyecektir.*

“All butonuna basarsanız bütün kayıtlar gözükecektir.*

#**[Çalışan Örnek](https://jsfiddle.net/hellyeah/my3dd968/) modifiye edilmesi gerekmektedir.**

*(Bir süre sonra, domain de hos edilecektir.)*

#####*Anlamsal açıklama*

*Bu kod parçasında ki amacımız, tablodaki kayıtları renklerine göre filtrelemetir. Bir butona bastığında, her hangibir renk olabilir tablo filtrelenecektir.*

*Aslında bu tasarım, görüntüleme yazılımının bir parçasıdır. Her rengin kendine has bir anlamı olmaktadır. Özel olarak açıklamak gerekirse.*

Numara | Renk | Kısa Açıklaması | Durum 1 | Durum 2
--- | --- | --- | --- | --- 
1 | Kırmızı | Başarısız | Request tamamlanamassa ve biz gerekli cevabı alamazsak. | Definition table da timeout kolonu var. Eğer request timeout zamanı içerisinde tamamlanamassa, request başarısız olmuştur.
2 | Turuncu  | Performas problemi | Son timedifference kolonundaki değerle, ondan önce değerlerin averajı alınaıp, yapılan karşılaştırma sonucu ortaya çıkan durumdur.  Time difference hesaplanması aşağıdaki gibidir. Request time (actual time) - Response Time (Actual Time) = Time Difference. | Bütün bilgileri definition table'da tutuyorum.. Bu veriler sayesinde, request yapabiliyorum. Her url bir threshhold deperine sahip. Eğer response time - request time threshholddan büyükse, bunun anlamı bir performans probleminin görüldüğüdür. Tasarımımda threshhold limit olarak belirlediğimiz bir süredir. Ve zamanı ölçmek daha doğru bir deyişle performans problemi var mı diye bakmak, ayrıca bu geri dönüş zamanının istediğimiz zaman aralığında kalıp kalmadığını anlamak için kullanılır.
3 | Mavi | Aktif değil | Özet olarak "her hangibir kontrolün yapılmadığını anlatmaktadır." aktif değil durumu. Aktif değil durumunun mekanizması şu şekildedir. Definition table'ında inactive diye bir kolon bulunur. Bit değerleri alabilmektedir. Bu değeri 0 yaptığınızda kayıt kontrol edilmeyecektir. | ..
4 | Gray | Out of date | Özet olarak eğer kaydın rengi gri ise, ciddi bir problemle karşı karşıyayız demektir. Çünkü kayıtlar eskidir. Bunu yaptamak için şu an ki zaman ile son request zamanını kıyaslamak yeterlidir. Benim tasarımımda 2 tane kolon vardır. Bunlardan biri timout diğeri ise Sleeptime dır. Bu uygulama multithread uygulamasıdır. Sleeptime threadin çalıştıktan sonra ne kadar süreliğine uyku durumunda kalacağını belirten bir süredir ve yaklaşık 1000ms dir. Timout ise bir zaman limitiir. Request'in en fazla ne kadar sürede gerçekleşmesi gerektiğini göstermektedir. Kaydın eski olduğunu anlamada kullanılan hesaplama yönetemi şu şekildedir.  Current Time - Last request time > (timeout + sleep time) * 5. | Bir başka çözüm ise, bir zaman limiti ayarlamaktır misalen 15 dakika olabilir. Eğer şu an ki zamanla, son request zamanının farkı 15 dakika ise "bu kayıt eskidir" diyebiliriz. 
5 | Yeşil | Başarılı |Request tamamlandığı ve temiz bir response aldığımız zaman ortaya çıkan durumdur. Gerekli dönüş bilgilerini tabloda görebilirsiniz. | ... 

import React from "react";
import './about.css'



export const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page-step-one">
        <div className="container mx-auto">
          <div className="about-page-content min-h-screen w-full h-full">
            <div className="about-page-title flex justify-center">
              <h1>HAKKIMIZDA</h1>
            </div>
            <div className="about-page-main-text">
              <p className="company-info">
                İş ortaklarımızın web dünyasında profesyonel yerlerini almaları ve istedikleri pazar yerlerinde öncü olmaları için
                20 yılı aşkın güncel sektörel tecrübemiz ile 2003'den beri çalışıyoruz.
              </p>
            </div>
            <div className="about-page-youtube-area w-full flex justify-center">
              <iframe className="youtube" width="80%" height="600px" src="https://www.youtube.com/embed/earhS6rQMuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="about-page-step-two">
        <div className="container mx-auto">
          <div className="about-page-content min-h-screen w-full h-full flex flex-col justify-center">
            <div className="info-area">
              <div className="info-text">
                <p>İş ortaklarımızın web dünyasında profesyonel yerlerini almaları ve istedikleri pazar yerlerinde öncü olmaları için
                  20 yılı aşkın güncel sektörel tecrübemiz ile 2003'den beri çalışıyoruz.</p>
              </div>
              <div className="info-animation">
                <iframe className="animation" src="https://embed.lottiefiles.com/animation/124661"></iframe>
              </div>
            </div>
            <div className="info-area">
              <div className="info-animation">
                <iframe className="animation" src="https://embed.lottiefiles.com/animation/124661"></iframe>
              </div>
              <div className="info-text">
                <p>İş ortaklarımızın web dünyasında profesyonel yerlerini almaları ve istedikleri pazar yerlerinde öncü olmaları için
                  20 yılı aşkın güncel sektörel tecrübemiz ile 2003'den beri çalışıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-page-step-three">
        <div className="container mx-auto">
          <div className="about-page-content min-h-screen w-full h-full flex flex-col justify-center">
            <div className="about-titles">
              <h1 className="titles-header">Engin Tasarım Neler Yapar?</h1>
              <p className="titles-paragraph">Anahtar teslim projeler, Tasarım, Yazılım, Mobil Uygulama, Kreatif Hizmetler ve Dijital Ajans Hizmetleri gibi geniş bir yelpazede dijital ajans hizmetleri vermekteyiz. Detaylarını incelemek için hizmetlerimiz sayfasını inceleyebilirsiniz.</p>
            </div>
            <div className="about-titles">
              <h1 className="titles-header">Nasıl Başlıyoruz ve Nasıl İlerliyoruz?</h1>
              <p className="titles-paragraph">Öncelikle sizi anlamak ve dinlemekle başlamayı tercih ediyoruz. Sizi iyi anlamak, ihtiyaçlarınızı belirlemek, hangi hizmetin sizin için daha uygun olabileceğine karar vermek için sizinle yapacağımız ilk görüşmede mevcut durumunuzu ve hedeflerinizi anlamaya çalışıyoruz.</p>
            </div>
            <div className="about-titles">
              <h1 className="titles-header">Ar-Ge </h1>
              <p className="titles-paragraph">Anahtar teslim projeler, Tasarım, Yazılım, Mobil Uygulama, Kreatif Hizmetler ve Dijital Ajans Hizmetleri gibi geniş bir yelpazede dijital ajans hizmetleri vermekteyiz. Detaylarını incelemek için hizmetlerimiz sayfasını inceleyebilirsiniz.</p>
            </div>
            <div className="about-titles">
              <h1 className="titles-header">Önce Beğeni ve Onay</h1>
              <p className="titles-paragraph">Sunulan örnek çalışmalar ve modeller üzerinden projenin gereksinimleri tam olarak karşılanana kadar geliştirme hizmetlerimiz devam eder. </p>
            </div>
            <div className="about-titles">
              <h1 className="titles-header">Çalışma Takviminin Belirlenmesi</h1>
              <p className="titles-paragraph">Çalışmalarımızı belirli bir takvime bağlı kalarak sürdürmeye gayret ediyoruz. Aynı anda birçok firmanın projesi üzerinde çalışmalarımız sürebilmekte. Herkesin işine verilmesi gereken azami özeni ve önemi vererek zamanında teslim edebilmek için çalışma takviminin belirlenmesi üzerinde hassasiyetle durmaktayız. Belirlenen takvime sadık kalabilmek adına fedakarlık ve gayret gösteriyoruz. </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
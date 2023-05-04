const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

const blogContent = [
    {
        "id": "1",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/4.svg",
        "blogTag": "Rakip Analizi",
        "blogTitle": "Rakip analizi ne demek? Rakip analizi nasıl yapılır?",
        "blogText": "Markanız için en son ne zaman bir rakip analizi yaptınız? ve en önemlisi, “rekabet” ortamında öne çıkmak için neler yapılacağını biliyor musunuz?..",
        "readMore": "Read More"
    },
    {
        "id": "2",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/4.svg",
        "blogTag": "Dijital Reklam",
        "blogTitle": "Dijital Reklam Türleri ve Faydaları Nelerdir?",
        "blogText": "Dijital reklam türleri; internet üzerinden yapılan reklam faaliyetlerine verilen genel bir isimdir. Bu tür reklamlar, çeşitli platformlar ve cihazlar üzerinden yapılabilir ve hedef kitleye ulaştırılabilir."
    },
    {
        "id": "3",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/5.svg",
        "blogTag": "Hedef Kitle Analizi",
        "blogTitle": "Hedef Kitle Analizi Nedir? Hedef Kitle Analizinde İzlenecek 5 Adım!",
        "blogText": "Hedef Kitle Analizi, bir ürün veya hizmetin potansiyel müşterilerini belirleme ve onların ihtiyaçlarını anlama sürecidir."
    },
    {
        "id": "4",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/6.svg",
        "blogTag": "Dijital Ajans",
        "blogTitle": "Dijital Ajans Ne Yapar?",
        "blogText": "Dijtal ajanslar, internet ve dijital ortamlarının sunduğu imkanlardan yararlanarak müşterilerini dijital ortamlarda temsil edecek, internet üzerinden faaliyetler göstermesi yönünde hizmetler vererek çözümler sunan firmalardır."
    },
    {
        "id": "5",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/4.svg",
        "blogTag": "Rakip Analizi",
        "blogTitle": "Rakip analizi ne demek? Rakip analizi nasıl yapılır?",
        "blogText": "Markanız için en son ne zaman bir rakip analizi yaptınız? ve en önemlisi, “rekabet” ortamında öne çıkmak için neler yapılacağını biliyor musunuz?..",
        "readMore": "Read More"
    },
    {
        "id": "6",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/4.svg",
        "blogTag": "Dijital Reklam",
        "blogTitle": "Dijital Reklam Türleri ve Faydaları Nelerdir?",
        "blogText": "Dijital reklam türleri; internet üzerinden yapılan reklam faaliyetlerine verilen genel bir isimdir. Bu tür reklamlar, çeşitli platformlar ve cihazlar üzerinden yapılabilir ve hedef kitleye ulaştırılabilir."
    },
    {
        "id": "7",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/5.svg",
        "blogTag": "Hedef Kitle Analizi",
        "blogTitle": "Hedef Kitle Analizi Nedir? Hedef Kitle Analizinde İzlenecek 5 Adım!",
        "blogText": "Hedef Kitle Analizi, bir ürün veya hizmetin potansiyel müşterilerini belirleme ve onların ihtiyaçlarını anlama sürecidir."
    },
    {
        "id": "8",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/6.svg",
        "blogTag": "Dijital Ajans",
        "blogTitle": "Dijital Ajans Ne Yapar?",
        "blogText": "Dijtal ajanslar, internet ve dijital ortamlarının sunduğu imkanlardan yararlanarak müşterilerini dijital ortamlarda temsil edecek, internet üzerinden faaliyetler göstermesi yönünde hizmetler vererek çözümler sunan firmalardır."
    },
    {
        "id": "9",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/4.svg",
        "blogTag": "Rakip Analizi",
        "blogTitle": "Rakip analizi ne demek? Rakip analizi nasıl yapılır?",
        "blogText": "Markanız için en son ne zaman bir rakip analizi yaptınız? ve en önemlisi, “rekabet” ortamında öne çıkmak için neler yapılacağını biliyor musunuz?..",
        "readMore": "Read More"
    },
    {
        "id": "10",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/4.svg",
        "blogTag": "Dijital Reklam",
        "blogTitle": "Dijital Reklam Türleri ve Faydaları Nelerdir?",
        "blogText": "Dijital reklam türleri; internet üzerinden yapılan reklam faaliyetlerine verilen genel bir isimdir. Bu tür reklamlar, çeşitli platformlar ve cihazlar üzerinden yapılabilir ve hedef kitleye ulaştırılabilir."
    },
    {
        "id": "11",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/5.svg",
        "blogTag": "Hedef Kitle Analizi",
        "blogTitle": "Hedef Kitle Analizi Nedir? Hedef Kitle Analizinde İzlenecek 5 Adım!",
        "blogText": "Hedef Kitle Analizi, bir ürün veya hizmetin potansiyel müşterilerini belirleme ve onların ihtiyaçlarını anlama sürecidir."
    },
    {
        "id": "12",
        "blogİmg": "https://zesty-cajeta-af510d.netlify.app/6.svg",
        "blogTag": "Dijital Ajans",
        "blogTitle": "Dijital Ajans Ne Yapar?",
        "blogText": "Dijtal ajanslar, internet ve dijital ortamlarının sunduğu imkanlardan yararlanarak müşterilerini dijital ortamlarda temsil edecek, internet üzerinden faaliyetler göstermesi yönünde hizmetler vererek çözümler sunan firmalardır."
    }
];

// function randomImageId(max) {
//     return Math.floor(Math.random());
// }

const projectsList = [
    {
        "id": "1",
        "projectsİmg": "https://picsum.photos/id/1/160/160",
        "projectsName": "jksdfsd",
    },
    {
        "id": "2",
        "projectsİmg": "https://picsum.photos/id/16/160/160",
        "projectsName": "jksdfsd",
    },
    {
        "id": "3",
        "projectsİmg": "https://picsum.photos/id/23/160/160",
        "projectsName": "jksdfsd",
    },
    {
        "id": "4",
        "projectsİmg": "https://picsum.photos/id/1/160/160",
        "projectsName": "jksdfsd",
    },
    {
        "id": "5",
        "projectsİmg": "https://picsum.photos/id/16/160/160",
        "projectsName": "jksdfsd",
    },
    {
        "id": "6",
        "projectsİmg": "https://picsum.photos/id/23/160/160",
        "projectsName": "jksdfsd",
    },
    {
        "id": "7",
        "projectsİmg": "https://picsum.photos/id/1/160/160",
        "projectsName": "jksdfsd",
    },
    {
        "id": "8",
        "projectsİmg": "https://picsum.photos/id/16/160/160",
        "projectsName": "jksdfsd",
    },
    {
        "id": "9",
        "projectsİmg": "https://picsum.photos/id/23/160/160",
        "projectsName": "jksdfsd",
    },
    {
        "id": "10",
        "projectsİmg": "https://picsum.photos/id/1/160/160",
        "projectsName": "Dijital Reklam",
    },
    {
        "id": "11",
        "projectsİmg": "https://picsum.photos/id/16/160/160",
        "projectsName": "Dijital Reklam",
    },
    {
        "id": "12",
        "projectsİmg": "https://picsum.photos/id/23/160/160",
        "projectsName": "Dijital Reklam",
    },
    {
        "id": "13",
        "projectsİmg": "https://picsum.photos/id/1/160/160",
        "projectsName": "Dijital Reklam",
    },
    {
        "id": "14",
        "projectsİmg": "https://picsum.photos/id/16/160/160",
        "projectsName": "Dijital Reklam",
    },
    {
        "id": "15",
        "projectsİmg": "https://picsum.photos/id/23/160/160",
        "projectsName": "Dijital Reklam",
    }
];

const servicesList = [
    {
        "id" :"1",
        "img": "https://images.unsplash.com/photo-1456518563096-0ff5ee08204e?auto=format&amp;fit=crop&amp;w=1351&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "mainTitle": "Dijital Pazarlama",
        "orderTitleText": "One",
        "category": "Geliştirme Hizmetleri",
        "paragraph": "Dijital Pazarlama ve Geliştirme Hizmetleri, web sitenizin yayında bulunduğu süre içerisinde yayın amaçlarına daha hızlı ulaşması için sağladığımız performans geliştirme hizmetlerdir. Hangi hizmetlerin öncelik kazanacağını yapacağımız detaylı analizler sonucunda sizinle birlikte belirliyor ve değerlendiriyoruz",
        "orderNumber": "1"
    },
    {
        "id" : "2",
        "img": "https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&amp;fit=crop&amp;w=1951&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "mainTitle": "B2B",
        "orderTitleText": "Two",
        "category": "Toptan Satış ve E-Ticaret",
        "paragraph": "Şirketlerin farklı işleyiş yöntemlerine göre esnek yapıda e-ticaret çözümleri sunuyoruz. Butik yazılım çözümlerimizle tanışın. İstek ve ihtiyaçlarınıza göre düzenlenebilen, şirketinizin iş süreçlerine uyumlu B2B toptan e-ticaret çözümlerimiz ile toptan veya perakende ticaretinizi dijital ortama taşıyabilirsiniz.",
        "orderNumber": "2"
    },
    {
        "id" : "3",
        "img": "https://images.unsplash.com/photo-1510709657750-f5a80fc8da9c?auto=format&amp;fit=crop&amp;w=1950&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "mainTitle": "Web Tasarım",
        "orderTitleText": "Three",
        "category": "Yazılım Geliştirme",
        "paragraph": "Web tasarım, web sitesi hizmetlerinin tamamını kapsayan ve fazla sayıda hizmeti içeren bir terimdir. Web tasarım firması olarak; kodlama, yazılım, içerik oluşturma, anahtar kelime analizi, SEO performansını artırmaya yönelik optimizasyon çalışmaları dahil olmak üzere taleplere göre web sitesinin görsel tasarımının oluşturulmasından, web sitesinin yayına alınmasına kadar ki bütün aşamalarda gerekli hizmeti vermekteyiz.  ",
        "orderNumber": "3"
    },
    {
        "id" : "4",
        "img": "https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&amp;fit=crop&amp;w=1951&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "mainTitle": "CRM",
        "orderTitleText": "Four",
        "category": "Müşteri İlişkileri Yönetimi Yazılımı",
        "paragraph": "Açık verilerin erişimine sahip olmak onlardan doğru sonuçlara ulaşılacak analizleri yapmak için yeterli değildir. Sahip olduğunuz verileri doğru okumak, o veriler ile doğru sonuçlara ulaşmak için analizler yapmak gerekir. Veri yönetimi bilgi birikimini sağlayabildiği ölçüde başarılıdır. Verilerin doğru yönetilmesi her geçen gün daha büyük öneme sahip hale gelmektedir. Verilerini okuyamayan, verilerini yönetemeyen firmaların gelecekte yeri olmadığı görüşüne katılmaktayız. ",
        "orderNumber": "4"
    },
    {
        "id" : "5",
        "img": "https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&amp;fit=crop&amp;w=1951&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "mainTitle": "CRM",
        "orderTitleText": "Five",
        "category": "Müşteri İlişkileri Yönetimi Yazılımı",
        "paragraph": "Açık verilerin erişimine sahip olmak onlardan doğru sonuçlara ulaşılacak analizleri yapmak için yeterli değildir. Sahip olduğunuz verileri doğru okumak, o veriler ile doğru sonuçlara ulaşmak için analizler yapmak gerekir. Veri yönetimi bilgi birikimini sağlayabildiği ölçüde başarılıdır. Verilerin doğru yönetilmesi her geçen gün daha büyük öneme sahip hale gelmektedir. Verilerini okuyamayan, verilerini yönetemeyen firmaların gelecekte yeri olmadığı görüşüne katılmaktayız. ",
        "orderNumber": "5"
    },
    {
        "id" : "6",
        "img": "https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&amp;fit=crop&amp;w=1951&amp;q=60&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "mainTitle": "Online Reklamcılık",
        "orderTitleText": "Six",
        "category": "Reklam",
        "paragraph": "Reklam, ürün ve hizmetlerin çeşitli kitle iletişim araçları ile tüketicilere tanıtılmasıdır. Klasik anlamda bu kitle iletişim araçları televizyon, radyo, gazete gibi mecralar idi. Ancak günümüzde artık bu mecralara eskisi kadar vakit ayırmamasıyla birlikte günlük hayatımızdaki pek çok şey gibi reklamcılık da online platformlara taşındı. Online reklamcılık ise belli ürün ve hizmetlerin ücret karşılığında tüketicilere online olarak tanıtılmasıdır diyebiliriz. Online Reklamcılık herkes tarafından kullanılmakta olsa da özellikle B2B veya B2C E-ticaret yapan firmalar için vazgeçilemez bir unsurdur.  ",
        "orderNumber": "6"
    }
]

//blog-post

app.get("/api/blog-posts", (req, res) => {
    res.send(blogContent);
});

app.get("/api/blog-posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = blogContent.find((p) => p.id == id);
    if (post) {
        res.send(post);
    } else {
        res.status(404).send("Blog post not found");
    }
});

//projects

app.get("/api/projects", (req,res) => {
    res.send(projectsList)
});

console.log(projectsList)

app.get("/api/projects/:id", (req,res) => {
    const projectId = parseInt(req.params.id);
    const postproject = projectsList.find((r) => r.id == projectId);
    if(postproject) {
        res.send(postproject);
    } else {
        res.status(404).send("Project Detail not found");
    }
})

//services

app.get("/api/services", (req,res) => {
    res.send(servicesList)
})

app.get("/api/services/:id", (req,res) =>{
    const servicesId = parseInt(req.params.id);
    const postService = servicesList.find((r) => r.id == servicesId);
    if(postService) {
        res.send(postService);
    } else{
        res.status(404).send("Services Detail not found");
    }
})

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
})
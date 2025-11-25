
import { Game } from '../types';

const SYSTEM_REQS_HIGH = {
  minimum: {
    os: "Windows 10 64-bit",
    processor: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
    memory: "12 GB RAM",
    graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580",
    storage: "70 GB kullanılabilir alan"
  },
  recommended: {
    os: "Windows 11 64-bit",
    processor: "Intel Core i7-9700K / AMD Ryzen 7 3700X",
    memory: "16 GB RAM",
    graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT",
    storage: "70 GB SSD"
  }
};

const SYSTEM_REQS_MED = {
  minimum: {
    os: "Windows 10 64-bit",
    processor: "Intel Core i5-4460 / AMD Ryzen 3 1200",
    memory: "8 GB RAM",
    graphics: "NVIDIA GeForce GTX 960 / AMD Radeon R9 380",
    storage: "50 GB kullanılabilir alan"
  },
  recommended: {
    os: "Windows 10 64-bit",
    processor: "Intel Core i7-4790 / AMD Ryzen 5 1600",
    memory: "16 GB RAM",
    graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
    storage: "50 GB SSD"
  }
};

const SYSTEM_REQS_LOW = {
  minimum: {
    os: "Windows 7 64-bit",
    processor: "Intel Core 2 Duo E6600",
    memory: "2 GB RAM",
    graphics: "NVIDIA GeForce 8600GT",
    storage: "10 GB kullanılabilir alan"
  },
  recommended: {
    os: "Windows 10 64-bit",
    processor: "Intel Core i3-2100",
    memory: "4 GB RAM",
    graphics: "NVIDIA GeForce GTX 460",
    storage: "10 GB SSD"
  }
};

export const FEATURED_GAMES: Game[] = [
  {
    id: 'cp2077',
    title: 'Cyberpunk 2077',
    category: 'RPG / Açık Dünya',
    rating: 4.8,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg',
    gallery: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_259151356c1811304f825ce40d8217f576a73638.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_d7c3c0415b5e45472b49147cb659a18083ec762c.1920x1080.jpg'
    ],
    description: 'Night City\'de geçen, güç, gösteriş ve vücut modifikasyonu çılgınlığına kapılmış bir açık dünya aksiyon-macera hikayesi.',
    longDescription: 'Cyberpunk 2077, güç, gösteriş ve vücut modifikasyonu çılgınlığına kapılmış Night City metropolünde geçen bir açık dünya aksiyon-macera hikayesidir. Kanun kaçağı paralı asker V olarak oyna ve ölümsüzlüğün anahtarı olan eşsiz bir implantın peşine düş.',
    price: '₺999.00',
    tags: ['Cyberpunk', 'Open World', 'Sci-Fi', 'RPG'],
    releaseDate: '2020',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    systemRequirements: SYSTEM_REQS_HIGH,
    downloadUrl: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/'
  },
  {
    id: 'eldenring',
    title: 'ELDEN RING',
    category: 'Action RPG',
    rating: 4.9,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900.jpg',
    gallery: [
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_98d16e23a72f6343e3df96df48c6e7b9a893203e.1920x1080.jpg',
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_17345697f54368d8b87388d2c70b2026f383a829.1920x1080.jpg'
    ],
    description: 'Hideo Kojima ve George R.R. Martin\'den yeni bir fantastik dünya. Aradaki Topraklar\'da düzeni geri getir.',
    longDescription: 'Aradaki Topraklar\'ı yöneten Kraliçe Marika\'nın çocukları, yarı tanrılar, Büyük Rünler olarak bilinen Elden Yüzüğü\'nün parçalarını ele geçirdiler ve bu yeni güçlerinin deliliğiyle bir savaş başlattılar: Parçalanma.',
    price: '₺1499.00',
    tags: ['Souls-like', 'Fantasy', 'Open World', 'Difficult'],
    releaseDate: '2022',
    developer: 'FromSoftware Inc.',
    systemRequirements: SYSTEM_REQS_HIGH,
    downloadUrl: 'https://store.steampowered.com/app/1245620/ELDEN_RING/'
  },
  {
    id: 'bg3',
    title: 'Baldur\'s Gate 3',
    category: 'RPG / Strateji',
    rating: 5.0,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/library_600x900.jpg',
    description: 'Dungeons & Dragons evreninde geçen, zengin hikayeli ve seçimlerinize göre şekillenen efsanevi bir RPG.',
    price: '₺1249.00',
    tags: ['RPG', 'Strategy', 'D&D', 'Story Rich'],
    releaseDate: '2023',
    developer: 'Larian Studios',
    systemRequirements: SYSTEM_REQS_HIGH,
    downloadUrl: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/'
  },
  {
    id: 'rdr2',
    title: 'Red Dead Redemption 2',
    category: 'Aksiyon / Macera',
    rating: 4.9,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg',
    description: 'Amerika, 1899. Vahşi Batı dönemi sona eriyor. Arthur Morgan ve Van der Linde çetesinin hikayesi.',
    price: '₺1150.00',
    tags: ['Open World', 'Western', 'Story Rich', 'Realistic'],
    releaseDate: '2019',
    developer: 'Rockstar Games',
    systemRequirements: SYSTEM_REQS_HIGH,
    downloadUrl: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/'
  }
];

export const TRENDING_GAMES: Game[] = [
  {
    id: 'minecraft',
    title: 'Minecraft',
    category: 'Sandbox / Macera',
    rating: 4.9,
    // Using Xbox official assets for standard Minecraft
    image: 'https://store-images.s-microsoft.com/image/apps.58378.13850085746326678.826cc014-d610-46af-bdb3-c5c96be4d22c.64287a91-c69e-4723-bb61-03fecd348c2a?q=90&w=480&h=270', 
    posterImage: 'https://assets-prd.ignimgs.com/2021/12/14/minecraft-1639513933156.jpg',
    gallery: [
      'https://assets.xboxservices.com/assets/7c/b3/7cb34086-1303-4c27-81f6-34d52b711560.jpg?n=Minecraft_Screenshot-1_1920x1080.jpg',
      'https://assets.xboxservices.com/assets/20/2f/202f2163-1058-480f-8c2d-c5262d0c7972.jpg?n=Minecraft_Screenshot-2_1920x1080.jpg'
    ],
    description: 'Blokları yerleştirin ve maceralara atılın. Yaratıcı modda hayal gücünüzü serbest bırakın.',
    longDescription: 'Minecraft, blokları yerleştirme ve maceralara atılma üzerine kurulu bir oyundur. Yaratıcı modda sınırsız kaynaklarla hayal gücünüzü serbest bırakın veya Hayatta Kalma modunda tehlikeli yaratıkları savuşturmak için silah ve zırh yaparak dünyanın derinliklerine inin.',
    price: '₺0.00',
    tags: ['Sandbox', 'Open World', 'Survival', 'Multiplayer'],
    releaseDate: '2011',
    developer: 'Mojang Studios',
    systemRequirements: SYSTEM_REQS_LOW,
    downloadUrl: 'https://drive.google.com/file/d/1L-7pwayks-ktpNt1iglUtBS72an218xZ/view?usp=drive_link'
  },
  {
    id: 'mc_dungeons',
    title: 'Minecraft Dungeons',
    category: 'Action RPG / Macera',
    rating: 4.6,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1672970/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1672970/library_600x900.jpg',
    gallery: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1672970/ss_c65a05294d55011c672cb5156731477582320f8e.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1672970/ss_949c389863a1274df9556c6d84361126c931850b.1920x1080.jpg'
    ],
    description: 'Klasik zindan tarayıcılarından ilham alan yepyeni bir aksiyon-macera oyunu.',
    longDescription: 'Klasik zindan tarayıcılarından ilham alan ve Minecraft evreninde geçen yepyeni bir aksiyon-macera oyununda savaşın! Zindanlarda tek başınıza cesurca ilerleyin veya arkadaşlarınızla takım kurun! Köylüleri kurtarmak ve kötü Arch-Illager\'ı devirmek için aksiyon dolu, hazine dolu, çılgınca çeşitli seviyelerde dört oyuncuya kadar birlikte savaşın!',
    price: '₺0.00',
    tags: ['Action RPG', 'Dungeon Crawler', 'Co-op', 'Minecraft'],
    releaseDate: '2020',
    developer: 'Mojang Studios',
    systemRequirements: SYSTEM_REQS_MED,
    downloadUrl: 'https://drive.google.com/file/d/1qwJePK-DU20Q8n4ULuaquCHhQ20Ksz-3/view?usp=sharing'
  },
  {
    id: 'tabs',
    title: 'Totally Accurate Battle Simulator',
    category: 'Simülasyon / Strateji',
    rating: 4.8,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/508440/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/508440/library_600x900.jpg',
    gallery: [
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/508440/ss_a778f52395d1d7c424242307526c04f410783700.1920x1080.jpg',
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/508440/ss_34350895c43f5328755f225883b523a65283efd9.1920x1080.jpg'
    ],
    description: 'Tarihi, mitolojik ve fantastik birimlerle dolu, fizik tabanlı, komik bir savaş simülatörü.',
    longDescription: 'Eski çağlardan, ürkütücü diyarlardan ve fantezi dünyalarından kırmızı ve mavi sallanan askerlerin lideri olun. Şimdiye kadar yaratılmış en sallantılı fizik sistemiyle yapılan simülasyonlarda savaşmalarını izleyin.',
    price: '₺0.00',
    tags: ['Simulation', 'Funny', 'Physics', 'Strategy'],
    releaseDate: '2021',
    developer: 'Landfall',
    systemRequirements: SYSTEM_REQS_LOW,
    downloadUrl: 'https://drive.google.com/file/d/1aWiWXbxPO8Hjw4zAHizYkFC1RGEYGgR7/view?usp=sharing'
  },
  {
    id: 'blur',
    title: 'Blur',
    category: 'Yarış / Arcade',
    rating: 4.8,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/42640/header.jpg',
    posterImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzVIhG1gMc2JvG7xlUq2JnhZnoZFTCgKS1CK2v1iiGjWOKB6iGzxBll8c3khur9LnkkA&usqp=CAU',
    gallery: [
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/42640/ss_2a253a5967db158f0764b91a2741d36082d89922.1920x1080.jpg',
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/42640/ss_69a409491d2b93c45f503d463d74575f3e9f4084.1920x1080.jpg'
    ],
    description: 'Mario Kart ile gerçek yarışın birleşimi. Neon ışıklar altında yüksek hızlı, silahlı sokak yarışları.',
    longDescription: 'Blur, gerçek dünyadan lisanslı arabaları alıp, onlara mayınlar, şok dalgaları ve nitro gibi fantastik güçlendirmeler ekleyen eşsiz bir yarış oyunudur. 20 oyuncuya kadar destekleyen kaotik multiplayer yarışları ve neon ışıklar altındaki atmosferiyle yarış türünün efsanelerinden biridir.',
    price: '₺0.00',
    tags: ['Racing', 'Arcade', 'Action', 'Classic'],
    releaseDate: '2010',
    developer: 'Bizarre Creations',
    systemRequirements: SYSTEM_REQS_MED,
    downloadUrl: 'https://drive.google.com/file/d/1tcdzcnGKfv-j0mqRzJ0lBSV4CrpL47Nw/view?usp=drive_link'
  },
  {
    id: 'among_us',
    title: 'Among Us',
    category: 'Sosyal / Strateji',
    rating: 4.5,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/library_600x900.jpg',
    gallery: [
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_3243dfad07d5424f43514cc89c8d969518a0d298.1920x1080.jpg',
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_a1b50b1744f8422f5bf0a932303a3e97d834666e.1920x1080.jpg'
    ],
    description: 'Mürettebatını hazırla ama arandaki hainlere dikkat et! Uzayda geçen bir güven ve ihanet oyunu.',
    longDescription: '4-15 oyuncu ile oynanan, gemiyi kalkışa hazırlamaya çalışırken aranızdaki sahtekarları (Impostor) bulmaya çalıştığınız bir sosyal çıkarım oyunudur. Görevleri yap, kameraları izle ve sahtekarı oylayarak gemiden at.',
    price: '₺0.00',
    tags: ['Multiplayer', 'Social Deduction', 'Space', '2D'],
    releaseDate: '2018',
    developer: 'Innersloth',
    systemRequirements: SYSTEM_REQS_LOW,
    downloadUrl: 'https://drive.google.com/file/d/1aYFry7k4dYRFHxBuWl4edA5OR5Nb9EoH/view?usp=drive_link'
  },
  {
    id: 'streamer_sim',
    title: 'Streamer Life Simulator',
    category: 'Simülasyon',
    rating: 4.2,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1261040/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1261040/library_600x900.jpg',
    gallery: [
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1261040/ss_07a647264a42763770170842e479f0538d11826d.1920x1080.jpg',
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1261040/ss_b0133282541177771884633585769182f9c22d33.1920x1080.jpg'
    ],
    description: 'Sıfırdan başlayıp dünyanın en popüler yayıncısı olmaya çalışın. Kendi bilgisayarınızı toplayın.',
    longDescription: 'Dünyanın en popüler yayıncısı olmak ister misiniz? Kötü bir mahalleden başlayıp internetin zirvesine tırmanın. Bilgisayar toplayın, oyunlar oynayın, takipçilerinizle etkileşime geçin ve gerçek hayatın zorluklarıyla mücadele edin.',
    price: '₺0.00',
    tags: ['Simulation', 'Life Sim', 'Streaming', 'Open World'],
    releaseDate: '2020',
    developer: 'Cheesecake Dev',
    systemRequirements: SYSTEM_REQS_MED,
    downloadUrl: 'https://drive.google.com/file/d/1IOxW1p44abvxdzjnEpPIjpto28dkCE2s/view?usp=sharing'
  },
  {
    id: 'gta_sa',
    title: 'GTA: San Andreas',
    category: 'Aksiyon / Açık Dünya',
    rating: 4.9,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12120/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12120/library_600x900.jpg',
    gallery: [
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12120/0000008518.1920x1080.jpg',
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12120/0000008519.1920x1080.jpg'
    ],
    description: 'Carl Johnson, 5 yılın ardından evine, Los Santos\'a dönüyor. Çeteler, uyuşturucu ve yozlaşmanın ortasında.',
    longDescription: 'Beş yıl önce Carl Johnson (CJ), çete sorunları, uyuşturucu ve yolsuzlukla parçalanan Los Santos, San Andreas\'taki hayatından kaçtı. Şimdi, 90\'ların başı. CJ\'in eve dönmesi gerekiyor. Annesi öldürüldü, ailesi dağıldı ve çocukluk arkadaşları felakete doğru sürükleniyor. Mahalleye döndüğünde, birkaç yozlaşmış polis onu cinayetle suçlar. CJ, ailesini kurtarmak ve sokakların kontrolünü ele geçirmek için tüm San Andreas eyaletini kapsayan bir yolculuğa çıkmak zorunda.',
    price: '₺0.00',
    tags: ['Open World', 'Crime', 'Classic', 'Action'],
    releaseDate: '2004',
    developer: 'Rockstar Games',
    systemRequirements: SYSTEM_REQS_MED,
    downloadUrl: 'https://drive.google.com/file/d/1pm6GZPc891UD_iBlzjD9OyaSBUYU0N6e/view?usp=drive_link'
  },
  {
    id: 'gta_vc',
    title: 'GTA: Vice City',
    category: 'Aksiyon / Açık Dünya',
    rating: 4.8,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12110/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12110/library_600x900.jpg',
    gallery: [
         'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12110/0000002376.1920x1080.jpg',
         'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12110/0000002377.1920x1080.jpg'
    ],
    description: '1980\'lere hoş geldiniz. Tommy Vercetti\'nin suç dünyasının zirvesine yükseliş hikayesi.',
    longDescription: '1980\'lere hoş geldiniz. Kabarık saçlar, aşırılık ve pastel takım elbiseler çağından, bir adamın suç basamaklarını tırmanarak zirveye çıkış hikayesi geliyor. Vice City, plajlardan bataklıklara, gösterişli semtlerden gettolara kadar uzanan devasa bir kentsel yayılma. Şimdiye kadar yaratılmış en çeşitli, eksiksiz ve canlı dijital şehirlerden biri.',
    price: '₺0.00',
    tags: ['Open World', '80s', 'Classic', 'Crime'],
    releaseDate: '2002',
    developer: 'Rockstar Games',
    systemRequirements: SYSTEM_REQS_MED,
    downloadUrl: 'https://drive.google.com/file/d/1sa_ySwE6dqKlwFoE_YKdOrCw7X9vWYHm/view?usp=drive_link'
  },
  {
    id: 'ravenfield',
    title: 'Ravenfield',
    category: 'FPS / Indie',
    rating: 4.9,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/636480/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/636480/library_600x900.jpg',
    gallery: [
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/636480/ss_e972004624d225f063161a302271c53638144196.1920x1080.jpg',
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/636480/ss_76e08f4c797889458196576060728b6e7191896c.1920x1080.jpg'
    ],
    description: 'Mavi müttefiklerinizle birlikte Kırmızı takıma karşı savaşın. Kaotik, tek oyunculu bir savaş alanı.',
    longDescription: 'Ravenfield, ragdoll fiziği ve akıllı yapay zekaya sahip tek oyunculu bir savaş oyunudur. Takımınızla birlikte savaşın, araçlar kullanın ve düşman üslerini ele geçirin. Öğrenmesi kolay, ustalaşması eğlenceli bir sandbox deneyimi.',
    price: '₺0.00',
    tags: ['FPS', 'Singleplayer', 'Shooter', 'Indie'],
    releaseDate: '2017',
    developer: 'SteelRaven7',
    systemRequirements: SYSTEM_REQS_LOW,
    downloadUrl: 'https://drive.google.com/file/d/1X-_niPHW18yHVDfIWiOmDUMYDntvXk2S/view?usp=sharing'
  },
  {
    id: 'crysis',
    title: 'Crysis',
    category: 'FPS / Bilim Kurgu',
    rating: 4.7,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17300/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17300/library_600x900.jpg',
    gallery: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17300/ss_d2f6660f59297191262d50572b17f573579012d3.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17300/ss_93050770720911e2450a4e7c73a8b04a7961b921.1920x1080.jpg'
    ],
    description: 'Nano giysinizi kuşanın. Hız, güç, zırh ve görünmezlik ile savaş alanına hükmedin.',
    longDescription: 'Destansı bir bilim kurgu üçlemesinin ilk oyunu olan Crysis\'te, oyuncular Nano Giysi ile donatılmış süper asker Nomad rolünü üstleniyor. Uzaylı istilasına uğramış tropik bir adada, hem Kuzey Kore ordusuna hem de dünya dışı düşmanlara karşı hayatta kalmak için taktiksel yeteneklerinizi kullanın. "Can it run Crysis?" efsanesinin başladığı yer.',
    price: '₺129.00',
    tags: ['FPS', 'Sci-Fi', 'Sandbox', 'Classic'],
    releaseDate: '2007',
    developer: 'Crytek',
    systemRequirements: SYSTEM_REQS_MED,
    downloadUrl: 'https://drive.google.com/file/d/1Zy3l_drwJI8O_UR8LZqPlqa6RVhwCipp/view?usp=drive_link'
  },
  {
    id: 'gow',
    title: 'God of War',
    category: 'Aksiyon / Macera',
    rating: 4.9,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/library_600x900.jpg',
    description: 'Kratos, İskandinav tanrıları ve canavarlarıyla dolu bir dünyada hayatta kalmak için savaşıyor.',
    price: '₺899.00',
    tags: ['Action', 'Mythology', 'Singleplayer'],
    releaseDate: '2022',
    developer: 'Santa Monica Studio',
    systemRequirements: SYSTEM_REQS_HIGH,
    downloadUrl: 'https://store.steampowered.com/app/1593500/God_of_War/'
  },
  {
    id: 'cafe_sim',
    title: 'İnternet Cafe Simulator',
    category: 'Simulasyon',
    rating: 4.3,
    gallery: [
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1136160/ss_a84704bbff07ae8c1cbc489ab8f8f0898ad18127.1920x1080.jpg',
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1136160/ss_9094902595df0580b905793286f34a4769df286f.1920x1080.jpg'
    ],
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1136160/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1136160/library_600x900.jpg',
    description: 'Kendi internet kafenizi kurun ve yönetin. Müşterileri memnun edin, yeni bilgisayarlar alın.',
    longDescription: 'Internet Cafe Simulator bir internet kafe işletme simülasyon oyunudur. Dünyanın en iyi internet kafesini kurabilirsin. Şehirde yasadışı işlere bulaşabilirsin ama dikkatli ol, bedeli ağır olabilir.',
    price: '₺280.00',
    tags: ['Survival', 'Simulasyon', 'Management'],
    releaseDate: '2019',
    developer: 'Cheesecake Dev',
    systemRequirements: SYSTEM_REQS_MED,
    downloadUrl: 'https://drive.google.com/file/d/1oYVqCwyOMPBK6YK0IYjRJym5MVGhPlq-/view?usp=drive_link'
  },
  {
    id: 'cod5',
    title: 'Call of Duty: World at War',
    category: 'FPS / Aksiyon',
    rating: 4.6,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/10090/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/10090/library_600x900.jpg',
    description: 'Pasifik ve Doğu cephelerinde geçen, II. Dünya Savaşı\'nın kaosunu iliklerinize kadar hissedin.',
    longDescription: 'Call of Duty: World at War, oyuncuları II. Dünya Savaşı\'nın en acımasız ve kaotik çatışmalarına sokuyor. Pasifik\'te Japon İmparatorluğu\'na ve Berlin\'e doğru ilerlerken Alman askerlerine karşı savaşın.',
    price: '₺550.00',
    tags: ['FPS', 'World War II', 'Multiplayer', 'Zombies'],
    releaseDate: '2008',
    developer: 'Treyarch',
    systemRequirements: SYSTEM_REQS_MED,
    downloadUrl: 'https://drive.google.com/file/d/1Fq7abrhnA_1HAh0Diu37janwSE3Blh_u/view?usp=drive_link'
  },
  {
    id: 'gta5',
    title: 'Grand Theft Auto V',
    category: 'Aksiyon / Açık Dünya',
    rating: 4.7,
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg',
    posterImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900.jpg',
    description: 'Genç bir dolandırıcı, emekli bir banka soyguncusu ve korkunç bir psikopatın hikayesi.',
    price: '₺750.00',
    tags: ['Open World', 'Crime', 'Multiplayer'],
    releaseDate: '2015',
    developer: 'Rockstar North',
    systemRequirements: SYSTEM_REQS_MED,
    downloadUrl: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
  }
];

export const ALL_GAMES = [...FEATURED_GAMES, ...TRENDING_GAMES];

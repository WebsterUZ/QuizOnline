const questions = [
    // Timsollarni tanib olish tizimlari faniga doir test savollari
    {
        question: "Timsollarni tanib olish tizimining asosiy vazifasi nima?",
        options: [
            "Matnni kodlash",
            "Obyektlarni siqish",
            "Kiruvchi ma'lumotdan sinfni aniqlash",
            "Tasodifiy raqam yaratish"
        ],
        correctAnswer: 2
    },
    {
        question: "Timsollarni tanib olish tizimining texnik ta'minoti nimalarni o'z ichiga oladi?",
        options: [
            "Faqat dasturiy algoritmlar",
            "Sensorlar, kameralar, protsessorlar",
            "Faqat kompyuter tarmoqlari",
            "Raqamli audio tizimlar"
        ],
        correctAnswer: 1
    },
    {
        question: "Arxitektura deganda nimani tushunamiz?",
        options: [
            "Vizual dizayn",
            "Qurilish loyihasi",
            "Tizimning tuzilmasi va komponentlari",
            "Operatsion tizim"
        ],
        correctAnswer: 2
    },
    {
        question: "Timsollarni tanib olish tizimlari qaysi sohalarda qo'llaniladi?",
        options: [
            "Tibbiyot",
            "Xavfsizlik",
            "Avtomatlashtirish",
            "Barchasi"
        ],
        correctAnswer: 3
    },
    {
        question: "Timsol tushunchasi nimani anglatadi?",
        options: [
            "Belgilar",
            "Belgilar majmuasi asosida tavsiflanadigan obyekt",
            "Raqamli kod",
            "Sifat birligi"
        ],
        correctAnswer: 1
    },
    {
        question: "O'quv tanlanma nima uchun kerak?",
        options: [
            "Sinov maqsadida",
            "Statistik tahlil uchun",
            "Modelni o'rgatish uchun",
            "Kodni optimallashtirish uchun"
        ],
        correctAnswer: 2
    },
    {
        question: "Sinflar orasidagi masofa qanday maqsadda ishlatiladi?",
        options: [
            "Raqamlarni solishtirish",
            "So'zlarni tartiblash",
            "O'xshashlikni o'lchash uchun",
            "Bajarilgan ishni baholash uchun"
        ],
        correctAnswer: 2
    },
    {
        question: "Belgilar fazosi nima?",
        options: [
            "So'zlar to'plami",
            "Belgilarni tashkil qiluvchi fazoviy o'lcham",
            "Ishlab chiqarish xonasi",
            "Ma'lumotlar bazasi"
        ],
        correctAnswer: 1
    },
    {
        question: "Elementar mantiqiy klassifikatorga misol:",
        options: [
            "Bayes",
            "K-means",
            "Qaror daraxti",
            "CNN"
        ],
        correctAnswer: 0
    },
    {
        question: "Belgining informativligi nimani bildiradi?",
        options: [
            "Qancha ma'lumot saqlashi",
            "Qancha tez o'zgarishi",
            "Uzunligi",
            "Ehtimoli"
        ],
        correctAnswer: 0
    },
    {
        question: "Bayes klassifikatori qanday ma'lumotlarga tayanadi?",
        options: [
            "Masofaga",
            "Vaqtga",
            "Ehtimolliklarga",
            "Vektorlarga"
        ],
        correctAnswer: 2
    },
    {
        question: "Deterministik usullarga misol:",
        options: [
            "Neyron tarmoqlar",
            "k-yaqin qo'snilar",
            "Bayes tarmog'i",
            "PCA"
        ],
        correctAnswer: 1
    },
    {
        question: "Teskari tarqalish algoritmi qayerda qo'llaniladi?",
        options: [
            "Tasvirni saqlashda",
            "Belgilarni kodlashda",
            "Neyron tarmoqlarni o'qitishda",
            "Matnni tarjima qilishda"
        ],
        correctAnswer: 2
    },
    {
        question: "Perseptron bu:",
        options: [
            "Klasterlash algoritmi",
            "Belgilarni o'chirish",
            "Neyron tarmoqning asosiy birligi",
            "Grafik interfeys"
        ],
        correctAnswer: 2
    },
    {
        question: "Pretsedentlik asosidagi usullar nimani nazarda tutadi?",
        options: [
            "O'tmishdagi sinflarni eslab ajratish",
            "O'rta qiymat olish",
            "Segmentatsiya",
            "Audio tahlil"
        ],
        correctAnswer: 0
    },
    {
        question: "Baholarni hisoblash algoritmi qanday model asosida ishlaydi?",
        options: [
            "Raqamli signallar",
            "Parametrli matematik modellarga",
            "Matnli bazalar",
            "Belgilar chizig'i"
        ],
        correctAnswer: 1
    },
    {
        question: "Klasterizatsiya deganda nima tushuniladi?",
        options: [
            "Belgilarni kodlash",
            "O'xshash obyektlarni guruhlarga ajratish",
            "Matnni tahlil qilish",
            "Yuzni aniqlash"
        ],
        correctAnswer: 1
    },
    {
        question: "'k-o'rtacha' algoritmi qanday ishlaydi?",
        options: [
            "O'rtacha ehtimollarni hisoblaydi",
            "Har bir klasterning markazini yangilaydi",
            "Belgilar sonini oshiradi",
            "Faqat ikkita sinf bilan ishlaydi"
        ],
        correctAnswer: 1
    },
    {
        question: "OpenCV kutubxonasi asosan nima uchun ishlatiladi?",
        options: [
            "Matn tarjimasi",
            "Tasvir va video bilan ishlash",
            "Faylni siqish",
            "Audio qayta ishlash"
        ],
        correctAnswer: 1
    },
    {
        question: "Sphinx kutubxonasi qanday maqsadda ishlatiladi?",
        options: [
            "Nutqni tanib olish",
            "Matn tarjimasi",
            "Belgilar fazosini tuzish",
            "Segmentatsiya"
        ],
        correctAnswer: 0
    },
    // Kompyuter ko'rish yo'nalishi bo'yicha test savollari
    {
        question: "Kompyuter ko'rish tizimining asosiy vazifasi nima?",
        options: [
            "Tasvirni siqish",
            "Video formatini o'zgartirish",
            "Rasm yoki videodan ma'lumot olish va analiz qilish",
            "Foydalanuvchi interfeysini yaratish"
        ],
        correctAnswer: 2
    },
    {
        question: "Quyidagilardan qaysi biri kompyuter ko'rish sohasiga tegishli emas?",
        options: [
            "Yuzni aniqlash",
            "Tasvirni segmentatsiya qilish",
            "Nutqni tanib olish",
            "Obyektni kuzatish"
        ],
        correctAnswer: 2
    },
    {
        question: "Tasvirni filtr orqali silliqlashtirish qanday nomlanadi?",
        options: [
            "Thresholding",
            "Sharpening",
            "Blurring",
            "Segmenting"
        ],
        correctAnswer: 2
    },
    {
        question: "OpenCV kutubxonasi asosan nima uchun ishlatiladi?",
        options: [
            "Tovushni qayta ishlash",
            "Raqamli hujjat yaratish",
            "Kompyuter ko'rish vazifalari",
            "Veb server yaratish"
        ],
        correctAnswer: 2
    },
    {
        question: "Convolution (konvolyutsiya) nima?",
        options: [
            "Tasvirni kesish",
            "Matnni shifrlash",
            "Rasmga filtr qo'llash amali",
            "Sinfga ajratish"
        ],
        correctAnswer: 2
    },
    {
        question: "Edge detection (chegaralarni aniqlash) uchun qaysi filtr ishlatiladi?",
        options: [
            "Median",
            "Sobel",
            "Gaussian",
            "Box"
        ],
        correctAnswer: 1
    },
    {
        question: "Tasvirdagi obyektni fondan ajratish nima deb ataladi?",
        options: [
            "Thresholding",
            "Masking",
            "Segmentatsiya",
            "Annotatsiya"
        ],
        correctAnswer: 2
    },
    {
        question: "YOLO algoritmining to'liq nomi nima?",
        options: [
            "You Only Look Once",
            "Your Object Locator",
            "Yet Only Label Once",
            "Yellow Object Learning Operator"
        ],
        correctAnswer: 0
    },
    {
        question: "Quyidagilardan qaysi biri ob'ektni aniqlash (Object Detection) algoritmiga misol bo'la oladi?",
        options: [
            "VGG-16",
            "YOLO",
            "LeNet",
            "RNN"
        ],
        correctAnswer: 1
    },
    {
        question: "Tasvirni o'lchamini o'zgartirish qanday nomlanadi?",
        options: [
            "Rescaling",
            "Encoding",
            "Pooling",
            "Cropping"
        ],
        correctAnswer: 0
    },
    {
        question: "Pooling qatlamlarining vazifasi nima?",
        options: [
            "Kirish tasvirini siqish",
            "Klassifikatsiya qilish",
            "Belgilar sonini oshirish",
            "Belgilar xaritasini siqish"
        ],
        correctAnswer: 3
    },
    {
        question: "Haar kaskad klassifikatori asosan nima uchun ishlatiladi?",
        options: [
            "Segmentatsiya",
            "Yuzni aniqlash",
            "Klassifikatsiya",
            "Tovushni analiz qilish"
        ],
        correctAnswer: 1
    },
    {
        question: "Kompyuter ko'rishda bounding box nima?",
        options: [
            "Segment tasviri",
            "Klassifikator",
            "Obyektni o'rab turuvchi to'rtburchak",
            "Tasvir o'lchami"
        ],
        correctAnswer: 2
    },
    {
        question: "Rasmda rangli tasvir RGB formatda qanday ifodalanadi?",
        options: [
            "2 kanal",
            "3 kanal",
            "4 kanal",
            "1 kanal"
        ],
        correctAnswer: 1
    },
    {
        question: "Tasvirdagi shovqinni kamaytirish nima deb ataladi?",
        options: [
            "Noising",
            "Blending",
            "Denoising",
            "Cropping"
        ],
        correctAnswer: 2
    },
    {
        question: "Semantic segmentation nima?",
        options: [
            "Tasvirni siqish",
            "Har bir pikseldagi obyektni aniqlash",
            "Klassifikatsiya",
            "Tasvir o'lchamini o'zgartirish"
        ],
        correctAnswer: 1
    },
    {
        question: "Quyidagilardan qaysi biri tasvirlar bilan ishlashda ishlatiladigan mashinaviy o'rganish modeli emas?",
        options: [
            "CNN",
            "RNN",
            "ResNet",
            "AlexNet"
        ],
        correctAnswer: 1
    },
    {
        question: "Feature extraction nima?",
        options: [
            "Sinflarni aniqlash",
            "Tasvir o'lchamini kamaytirish",
            "Belgilarni ajratish",
            "Modelni saqlash"
        ],
        correctAnswer: 2
    },
    {
        question: "Kalit nuqtalarni aniqlash uchun ishlatiladigan algoritm?",
        options: [
            "SIFT",
            "RNN",
            "ReLU",
            "CrossEntropy"
        ],
        correctAnswer: 0
    },
    {
        question: "Kompyuter ko'rishda real vaqtda obyekt kuzatuvi nima?",
        options: [
            "Obyektni tanish",
            "Harakatdagi obyektni kadrlar davomida izlab borish",
            "O'lchash",
            "Klassifikatsiya"
        ],
        correctAnswer: 1
    },
    // Mashinali o'qitish bo'yicha test savollari
    {
        question: "Mashinali o'qitishning asosiy maqsadi nima?",
        options: [
            "Ma'lumotlarni arxivlash",
            "Dasturlarni tezlashtirish",
            "Ma'lumotlardan foydali hususiyatlarini o'rganish",
            "Grafik interfeys yaratish"
        ],
        correctAnswer: 2
    },
    {
        question: "Mashinali o'qitish turlari nechta asosiy guruhga bo'linadi?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correctAnswer: 1
    },
    {
        question: "Qay biri nazoratli o'qitish misoli bo'la oladi?",
        options: [
            "Klasterizatsiya",
            "Anomaliyani aniqlash",
            "Regression",
            "O'z-o'zini o'rganish"
        ],
        correctAnswer: 2
    },
    {
        question: "Qaysi mashinali o'qitish turi belgilangan chiqish qiymatlari bilan ishlaydi?",
        options: [
            "Kuzatuvli",
            "Nazoratsiz",
            "Mustahkamlangan",
            "Klasterlash"
        ],
        correctAnswer: 0
    },
    {
        question: "Gradient descendent algoritmi qaysi maqsad uchun ishlatiladi?",
        options: [
            "Ehtimollarni hisoblash",
            "Yo'qotish funksiyasini minimallashtirish",
            "Sinflarni ajratish",
            "Klasterlar sonini aniqlash"
        ],
        correctAnswer: 1
    },
    {
        question: "Logistik regressiyaning chiqish qiymati qanday bo'ladi?",
        options: [
            "Butun son",
            "Harf",
            "Ehtimollik (0 va 1 orasida)",
            "Klaster soni"
        ],
        correctAnswer: 2
    },
    {
        question: "Overfitting degani nima?",
        options: [
            "Model umumlashtira olmaydi",
            "Model noto'g'ri o'rganadi",
            "Model tez ishlaydi",
            "Model hech narsani o'rganmaydi"
        ],
        correctAnswer: 0
    },
    {
        question: "K-fold cross validation nima uchun ishlatiladi?",
        options: [
            "Hujjatni saqlash uchun",
            "Xatoliklarni tasodifiylashtirish uchun",
            "Modelni barqaror baholash uchun",
            "Tahlilni to'xtatish uchun"
        ],
        correctAnswer: 2
    },
    {
        question: "K-yaqin qo'snilar algoritmi qanday asosga ega?",
        options: [
            "Markazni aniqlash",
            "Sinf chegarasini chizish",
            "Eng yaqin k qo'snining ovoz berishi",
            "Gradient hisoblash"
        ],
        correctAnswer: 2
    },
    {
        question: "SVM (Support Vector Machine) qanday uslubda ishlaydi?",
        options: [
            "Daraxtga asoslangan",
            "Klasterga bo'ladi",
            "Ajratuvchi gipertekislik yaratadi",
            "Tasodifiy rasm chizadi"
        ],
        correctAnswer: 2
    },
    {
        question: "Random Forest algoritmi nima?",
        options: [
            "Bitta daraxt modeli",
            "Bir nechta daraxtlardan iborat ansambl",
            "Nevron tarmog'i",
            "Klasterlash modeli"
        ],
        correctAnswer: 1
    },
    {
        question: "Neyron tarmoqlarda aktivatsiya funksiyasining vazifasi nima?",
        options: [
            "O'lchamni kamaytirish",
            "Natijani tasniflash",
            "Chiqishni nolinchi yoki chiziqli qilish",
            "Tizimni ishga tushurish"
        ],
        correctAnswer: 2
    },
    {
        question: "ReLU funksiyasining formulasi qanday?",
        options: [
            "max(0, x)",
            "x^2",
            "tanh(x)",
            "1/(1+e^-x)"
        ],
        correctAnswer: 0
    },
    {
        question: "Epoch deganda nima tushuniladi?",
        options: [
            "Yagona vazn yangilanishi",
            "Model yaratish vaqti",
            "Butun dataset bo'yicha bitta o'rganish tsikli",
            "Test to'plami"
        ],
        correctAnswer: 2
    },
    {
        question: "Batch gradient descentda batch nima?",
        options: [
            "Sinf",
            "Belgilar guruhi",
            "Malumotlarning kichik guruhi",
            "Klaster soni"
        ],
        correctAnswer: 2
    },
    {
        question: "PCA (Principal Component Analysis) nima uchun ishlatiladi?",
        options: [
            "Klasterni aniqlash",
            "Belgilar sonini kamaytirish",
            "Natijani normallashtirish",
            "O'qitish tezligini oshirish"
        ],
        correctAnswer: 1
    },
    {
        question: "L1 va L2 regulizatsiya nimani kamaytirishga xizmat qiladi?",
        options: [
            "Chuqurlik",
            "Overfitting",
            "O'rganish darajasi",
            "Test natijasi"
        ],
        correctAnswer: 1
    },
    {
        question: "Confusion matrix nimani ko'rsatadi?",
        options: [
            "Model arxitekturasi",
            "Xatolik tarqalishini",
            "Sinflar orasidagi masofani",
            "Dataset hajmini"
        ],
        correctAnswer: 1
    },
    {
        question: "Precision metrikasi nimani o'lchaydi?",
        options: [
            "Barcha to'g'ri sinflar",
            "Haqiqiy ijobiylar ichida to'g'ri topilganlar",
            "Xato sinflar",
            "Klassifikator tezligini"
        ],
        correctAnswer: 1
    },
    {
        question: "ROC-AUC qiymati nimalarni baholashda ishlatiladi?",
        options: [
            "Regressiya",
            "SVM",
            "Klassifikatsiya modelining aniqligi",
            "O'rganish tezligi"
        ],
        correctAnswer: 2
    },
    // NLP (Natural Language Processing) faniga doir test savollari
    {
        question: "NLP atamasi nimani anglatadi?",
        options: [
            "Natural Learning Process",
            "Neural Logic Programming",
            "Natural Language Processing",
            "Numerical Language Protocol"
        ],
        correctAnswer: 2
    },
    {
        question: "Tokenization jarayoni nima?",
        options: [
            "Matnni tahlil qilish",
            "Matnni belgilar yoki so'zlarga ajratish",
            "Tilni tarjima qilish",
            "Ma'lumotlarni kriptlash"
        ],
        correctAnswer: 1
    },
    {
        question: "Stemming nima uchun ishlatiladi?",
        options: [
            "So'zlarni tarjima qilish",
            "So'zlarning asosiy ildizini aniqlash",
            "Matnni saqlash",
            "Raqamli kodlash"
        ],
        correctAnswer: 1
    },
    {
        question: "Quyidagilardan qaysi biri stemming algoritmidir?",
        options: [
            "TF-IDF",
            "Word2Vec",
            "Porter",
            "BERT"
        ],
        correctAnswer: 2
    },
    {
        question: "Lemmatization va stemming o'rtasidagi farq nimada?",
        options: [
            "Lemmatization grammatik analiz asosida, stemming esa qoidaga asoslanadi",
            "Lemmatization tezroq",
            "Stemming aniqroq",
            "Hech qanday farqi yo'q"
        ],
        correctAnswer: 0
    },
    {
        question: "TF-IDF metrikasi nimani o'lchaydi?",
        options: [
            "So'z uzunligini",
            "Matndagi so'zlar chastotasini va ularning ahamiyatini",
            "So'z turlarini",
            "Matn og'irligini"
        ],
        correctAnswer: 1
    },
    {
        question: "Word2Vec nima?",
        options: [
            "Matnni tarjima qilish dasturi",
            "Matnni tasvirga aylantirish",
            "So'zlarni vektor ko'rinishiga o'tkazuvchi model",
            "Stemming algoritmi"
        ],
        correctAnswer: 2
    },
    {
        question: "BERT modelining afzalligi nimada?",
        options: [
            "So'zlarni faqat bir yo'nalishda o'rganadi",
            "Matnni tasodifiy tahlil qiladi",
            "Kontekstni ikki yo'nalishda o'rganadi",
            "Ehtimollarni hisoblamaydi"
        ],
        correctAnswer: 2
    },
    {
        question: "NER (Named Entity Recognition) qanday maqsadda ishlatiladi?",
        options: [
            "Matnni tozalash",
            "Matndagi maxsus obyektlarni aniqlash",
            "Xatoliklarni tuzatish",
            "Matnni tarjima qilish"
        ],
        correctAnswer: 1
    },
    {
        question: "POS tagging jarayonida nima amalga oshiriladi?",
        options: [
            "Matnni tarjima qilish",
            "So'z turkumlarini aniqlash",
            "Belgilarni kodlash",
            "Matnni normallashtirish"
        ],
        correctAnswer: 1
    },
    {
        question: "N-gram nima?",
        options: [
            "So'z ildizini topish",
            "Belgilar soni",
            "Bir-biriga tutashgan n ta elementlar ketma-ketligi",
            "Matn tahlil qilish modeli"
        ],
        correctAnswer: 2
    },
    {
        question: "Stop-so'zlar qanday so'zlar?",
        options: [
            "Foydali semantikaga ega bo'lgan so'zlar",
            "Ko'pincha ishlatilmaydigan so'zlar",
            "Matnni segmentatsiya qiluvchi so'zlar",
            "Ortiqcha yoki keraksiz bo'lgan so'zlar"
        ],
        correctAnswer: 3
    },
    {
        question: "Sentiment analysis yordamida nima aniqlanadi?",
        options: [
            "So'z soni",
            "Belgilar soni",
            "Matnning ijobiy yoki salbiy kayfiyati",
            "Fayl turi"
        ],
        correctAnswer: 2
    },
    {
        question: "Quyidagilardan qaysi biri ochiq manbali NLP kutubxonasi hisoblanadi?",
        options: [
            "NumPy",
            "Pandas",
            "NLTK",
            "TensorFlow"
        ],
        correctAnswer: 2
    },
    {
        question: "Bag of Words modeli qanday ishlaydi?",
        options: [
            "Matnni vektorga o'tkazadi va so'z chastotasini hisoblaydi",
            "Faylni o'zgartiradi",
            "So'zlarni tarjima qiladi",
            "Belgilarni yo'q qiladi"
        ],
        correctAnswer: 0
    },
    {
        question: "Quyidagilardan qaysi biri matn tasnifi uchun ishlatiladi?",
        options: [
            "KNN",
            "PCA",
            "LDA",
            "CNN"
        ],
        correctAnswer: 0
    },
    {
        question: "Matnlarni klasterlash uchun qaysi algoritmdan foydalaniladi?",
        options: [
            "Naive Bayes",
            "k-means",
            "Logistic Regression",
            "LSTM"
        ],
        correctAnswer: 1
    },
    {
        question: "RNN modelining NLPdagi asosiy afzalligi nima?",
        options: [
            "Rasmlar bilan ishlaydi",
            "Har bir vaqt momentidagi kontekstni hisobga oladi",
            "Matnni kodlaydi",
            "Faylni kompress qiladi"
        ],
        correctAnswer: 1
    },
    {
        question: "Text summarization nima?",
        options: [
            "Matnni tarjima qilish",
            "Matndan asosiy qismlarni qisqartirib berish",
            "So'zlarni normallashtirish",
            "Matnni o'chirish"
        ],
        correctAnswer: 1
    },
    {
        question: "BLEU metrikasi qaysi vazifa uchun qo'llaniladi?",
        options: [
            "Matnni klasterlash",
            "So'zlarni stemming qilish",
            "Mashinaviy tarjima sifatini baholash",
            "Ekranga chiqarish"
        ],
        correctAnswer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const question = questions[currentQuestion];
    
    let html = `
        <h4 class="mb-4">${question.question}</h4>
        <div class="list-group">
    `;
    
    question.options.forEach((option, index) => {
        html += `
            <label class="list-group-item" data-index="${index}">
                <input class="form-check-input me-1" type="radio" name="answer" value="${index}">
                ${option}
            </label>
        `;
    });
    
    html += '</div>';
    quizContainer.innerHTML = html;
    
    // Progress bar yangilash
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
    
    // Tugmalarni yangilash
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');
    
    if (currentQuestion === questions.length - 1) {
        nextBtn.classList.add('d-none');
        finishBtn.classList.remove('d-none');
    } else {
        nextBtn.classList.remove('d-none');
        finishBtn.classList.add('d-none');
    }

    // Javob tanlanganda fikr bildirishni qo'shish
    const options = quizContainer.querySelectorAll('.list-group-item');
    options.forEach(optionLabel => {
        optionLabel.addEventListener('click', () => {
            if (!quizContainer.dataset.answered) { // Agar hali javob berilmagan bo'lsa
                const selectedAnswerIndex = parseInt(optionLabel.dataset.index);
                userAnswers[currentQuestion] = selectedAnswerIndex;

                const correctAnswerIndex = question.correctAnswer;

                // Barcha variantlarni o'chirib qo'yish
                quizContainer.dataset.answered = 'true';
                options.forEach(opt => opt.style.pointerEvents = 'none');

                if (selectedAnswerIndex === correctAnswerIndex) {
                    score++;
                    optionLabel.classList.add('list-group-item-success');
                } else {
                    optionLabel.classList.add('list-group-item-danger');
                    // To'g'ri javobni ham ko'rsatish
                    options[correctAnswerIndex].classList.add('list-group-item-success');
                }
            }
        });
    });
     // Javob berilgach keyingi tugmani faollashtirish
     quizContainer.dataset.answered = '';
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    const percentage = (score / questions.length) * 100;
    
    let reviewHtml = `
        <div class="text-center">
            <h3>Test yakunlandi!</h3>
            <p class="lead">Sizning natijangiz: ${score} / ${questions.length}</p>
            <p>Foiz: ${percentage.toFixed(1)}%</p>
            <button id="review-btn" class="btn btn-info mt-3">Savollarni ko'rib chiqish</button>
            <a href="index.html" class="btn btn-primary mt-3">Bosh sahifaga qaytish</a>
        </div>
    `;
    
    quizContainer.innerHTML = reviewHtml;
    
    document.querySelector('.card-header').innerHTML = '<h3 class="text-center">Natijalar</h3>';
    document.querySelector('.progress-bar').style.width = '100%';
    document.getElementById('next-btn').classList.add('d-none');
    document.getElementById('finish-btn').classList.add('d-none');
    
    // Review tugmasini qo'shish
    document.getElementById('review-btn').addEventListener('click', showReview);
}

function showReview() {
    const quizContainer = document.getElementById('quiz-container');
    let reviewHtml = '<div class="review-container">';
    
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        reviewHtml += `
            <div class="card mb-3 ${isCorrect ? 'border-success' : 'border-danger'}">
                <div class="card-body">
                    <h5 class="card-title">Savol ${index + 1}: ${question.question}</h5>
                    <div class="options">
                        ${question.options.map((option, optIndex) => `
                            <div class="option ${optIndex === question.correctAnswer ? 'text-success' : 
                                               optIndex === userAnswer ? 'text-danger' : ''}">
                                ${option}
                                ${optIndex === question.correctAnswer ? ' ✓' : 
                                  optIndex === userAnswer ? ' ✗' : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });
    
    reviewHtml += `
        <div class="text-center">
            <a href="index.html" class="btn btn-primary">Bosh sahifaga qaytish</a>
        </div>
    </div>`;
    
    quizContainer.innerHTML = reviewHtml;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('quiz-container')) {
        displayQuestion();
        
        document.getElementById('next-btn').addEventListener('click', () => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                 displayQuestion();
            } else {
                showResults();
            }
        });
        
        document.getElementById('finish-btn').addEventListener('click', () => {
            showResults();
        });
    }
}); 
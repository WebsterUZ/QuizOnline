const quizData = [
  // Birinchi qism: 20 savol
  {
    question: "Timsollarni tanib olish tizimining asosiy vazifasi nima?",
    options: ["Matnni kodlash", "Obyektlarni siqish", "Kiruvchi ma'lumotdan sinfni aniqlash", "Tasodifiy raqam yaratish"],
    correct: "Kiruvchi ma'lumotdan sinfni aniqlash"
  },
  {
    question: "Timsollarni tanib olish tizimining texnik ta'minoti nimalarni o'z ichiga oladi?",
    options: ["Faqat dasturiy algoritmlar", "Sensorlar, kameralar, protsessorlar", "Faqat kompyuter tarmoqlari", "Raqamli audio tizimlar"],
    correct: "Sensorlar, kameralar, protsessorlar"
  },
  {
    question: "Kompyuter ko'rish tizimining asosiy vazifasi nima?",
    options: ["Tasvirni siqish", "Video formatini o'zgartirish", "Rasm yoki videodan ma'lumot olish va analiz qilish", "Foydalanuvchi interfeysini yaratish"],
    correct: "Rasm yoki videodan ma'lumot olish va analiz qilish"
  },
  {
    question: "Machine Learning'da qaysi algoritm tasniflash uchun ko'proq ishlatiladi?",
    options: ["K-means", "Logistic Regression", "PCA", "DBSCAN"],
    correct: "Logistic Regression"
  },
  {
    question: "Konvolyutsion neyron tarmoqlar (CNN) asosan qayerda qo'llaniladi?",
    options: ["Matn tahlili", "Tasvirlarni qayta ishlash", "Ovozli signal tahlili", "Tarmoq xavfsizligi"],
    correct: "Tasvirlarni qayta ishlash"
  },
  {
    question: "Overfitting nima?",
    options: ["Modelning juda yaxshi umumlashtirishi", "Modelning o'quv ma'lumotlariga haddan tashqari moslashishi", "Modelning juda oddiy bo'lishi", "Ma'lumotlarning yetishmasligi"],
    correct: "Modelning o'quv ma'lumotlariga haddan tashqari moslashishi"
  },
  {
    question: "Qaysi usul tasvir segmentatsiyasi uchun ishlatiladi?",
    options: ["K-means clustering", "Linear Regression", "Naive Bayes", "Random Forest"],
    correct: "K-means clustering"
  },
  {
    question: "Deep Learning'da neyron tarmoqlarning qatlamlari qanday nomlanadi?",
    options: ["Input, Hidden, Output", "Start, Middle, End", "Base, Core, Top", "Data, Process, Result"],
    correct: "Input, Hidden, Output"
  },
  {
    question: "OpenCV kutubxonasi asosan nima uchun ishlatiladi?",
    options: ["Ma'lumotlar bazasini boshqarish", "Tasvir va video qayta ishlash", "Tarmoq ulanishlari", "Ovoz tahlili"],
    correct: "Tasvir va video qayta ishlash"
  },
  {
    question: "Transfer Learning nima?",
    options: ["Yangidan model o'qitish", "Oldindan o'qitilgan modelni qayta ishlatish", "Ma'lumotlarni qayta ishlash", "Algoritmlarni optimallashtirish"],
    correct: "Oldindan o'qitilgan modelni qayta ishlatish"
  },
  {
    question: "Haar Cascade algoritmi qayerda ko'proq qo'llaniladi?",
    options: ["Obyekt aniqlash", "Matn tahlili", "Ovoz sintezi", "Tarmoq xavfsizligi"],
    correct: "Obyekt aniqlash"
  },
  {
    question: "Gradient Descent algoritmining maqsadi nima?",
    options: ["Ma'lumotlarni siqish", "Xatolik funksiyasini minimallashtirish", "Tasvirlarni segmentatsiya qilish", "Foydalanuvchi interfeysini loyihalash"],
    correct: "Xatolik funksiyasini minimallashtirish"
  },
  {
    question: "Qaysi metrika tasniflash modelining aniqligini baholaydi?",
    options: ["Mean Squared Error", "Accuracy", "R-squared", "Loss"],
    correct: "Accuracy"
  },
  {
    question: "Yuzni aniqlashda qaysi algoritm ko'proq ishlatiladi?",
    options: ["HOG (Histogram of Oriented Gradients)", "K-means", "PCA", "DBSCAN"],
    correct: "HOG (Histogram of Oriented Gradients)"
  },
  {
    question: "Batch Normalization nima uchun ishlatiladi?",
    options: ["Ma'lumotlarni siqish", "Neyron tarmoqlar o'qitishini tezlashtirish", "Tasvirlarni filtratsiya qilish", "Tarmoq xavfsizligini ta'minlash"],
    correct: "Neyron tarmoqlar o'qitishini tezlashtirish"
  },
  {
    question: "Qaysi algoritm real vaqt rejimida obyekt aniqlash uchun mashhur?",
    options: ["YOLO", "K-means", "SVM", "Naive Bayes"],
    correct: "YOLO"
  },
  {
    question: "Data Augmentation nima uchun ishlatiladi?",
    options: ["Ma'lumotlarni kamaytirish", "O'quv ma'lumotlarini ko'paytirish va diversifikatsiya qilish", "Modelni optimallashtirish", "Tarmoq ulanishini tezlashtirish"],
    correct: "O'quv ma'lumotlarini ko'paytirish va diversifikatsiya qilish"
  },
  {
    question: "Qaysi kutubxona Python'da Machine Learning uchun keng tarqalgan?",
    options: ["NumPy", "TensorFlow", "Matplotlib", "Pandas"],
    correct: "TensorFlow"
  },
  {
    question: "Pooling Layer nima uchun ishlatiladi?",
    options: ["Ma'lumotlarni ko'paytirish", "Xususiyatlar hajmini kamaytirish", "Tarmoqni murakkablashtirish", "Ovoz tahlilini amalga oshirish"],
    correct: "Xususiyatlar hajmini kamaytirish"
  },
  {
    question: "Supervised Learning nima?",
    options: ["Ma'lumotsiz o'qitish", "Belgilangan ma'lumotlar bilan o'qitish", "Tasodifiy o'qitish", "Avtomatik kodlash"],
    correct: "Belgilangan ma'lumotlar bilan o'qitish"
  },

  // Ikkinchi qism: 80 savol
  {
    question: "Unsupervised Learningning asosiy maqsadi nima?",
    options: ["Tasniflash", "Ma'lumotlar tuzilishini topish", "Regressiya", "Ma'lumotlarni siqish"],
    correct: "Ma'lumotlar tuzilishini topish"
  },
  {
    question: "Qaysi algoritm klasterlash uchun ishlatiladi?",
    options: ["K-means", "SVM", "Decision Tree", "Logistic Regression"],
    correct: "K-means"
  },
  {
    question: "ReLU aktivatsiya funksiyasining afzalligi nima?",
    options: ["Gradientni yo'qotishni oldini olish", "Murakkab hisoblash", "Doimiy qiymat chiqarish", "Oson interpretatsiya"],
    correct: "Gradientni yo'qotishni oldini olish"
  },
  {
    question: "Qaysi usul tasvirlarni oldindan qayta ishlashda ishlatiladi?",
    options: ["Normalization", "Encryption", "Compression", "Sorting"],
    correct: "Normalization"
  },
  {
    question: "Dropout nima uchun ishlatiladi?",
    options: ["Overfittingni kamaytirish", "Tarmoqni tezlashtirish", "Ma'lumotlarni ko'paytirish", "Xatolarni ko'paytirish"],
    correct: "Overfittingni kamaytirish"
  },
  {
    question: "Qaysi algoritm tasvirlarni klassifikatsiya qilishda samarali?",
    options: ["ResNet", "K-means", "DBSCAN", "Naive Bayes"],
    correct: "ResNet"
  },
  {
    question: "Feature Extraction nima?",
    options: ["Ma'lumotlarni siqish", "Muhim xususiyatlarni ajratib olish", "Tasodifiy ma'lumot yaratish", "Ma'lumotlarni shifrlash"],
    correct: "Muhim xususiyatlarni ajratib olish"
  },
  {
    question: "Qaysi metrika modelning noto'g'ri tasniflash darajasini ko'rsatadi?",
    options: ["Precision", "Recall", "F1-Score", "Error Rate"],
    correct: "Error Rate"
  },
  {
    question: "GAN (Generative Adversarial Networks) qanday ishlaydi?",
    options: ["Ikki model bir-biriga qarshi o'qitiladi", "Bitta model o'qitiladi", "Ma'lumotlar siqiladi", "Tarmoq optimallashtiriladi"],
    correct: "Ikki model bir-biriga qarshi o'qitiladi"
  },
  {
    question: "Qaysi algoritm optik belgilarni tanib olish (OCR) uchun ishlatiladi?",
    options: ["Tesseract", "K-means", "SVM", "Random Forest"],
    correct: "Tesseract"
  },
  {
    question: "Learning Rate nima?",
    options: ["Modelning o'qitish tezligi", "Ma'lumotlar hajmi", "Xatolik darajasi", "Tarmoq qatlamlari soni"],
    correct: "Modelning o'qitish tezligi"
  },
  {
    question: "Qaysi usul tasvirlarni aniqlashda fonni olib tashlash uchun ishlatiladi?",
    options: ["Background Subtraction", "Data Augmentation", "Normalization", "Compression"],
    correct: "Background Subtraction"
  },
  {
    question: "RNN (Recurrent Neural Networks) qayerda ko'proq qo'llaniladi?",
    options: ["Tasvir tahlili", "Ketma-ket ma'lumotlar (masalan, matn yoki vaqt seriyalari)", "Klasterlash", "Tarmoq xavfsizligi"],
    correct: "Ketma-ket ma'lumotlar (masalan, matn yoki vaqt seriyalari)"
  },
  {
    question: "Qaysi kutubxona tasvirlarni qayta ishlashda keng qo'llaniladi?",
    options: ["Pillow", "TensorFlow", "Pandas", "NumPy"],
    correct: "Pillow"
  },
  {
    question: "Confusion Matrix nima uchun ishlatiladi?",
    options: ["Modelning ishlashini baholash", "Ma'lumotlarni siqish", "Tarmoqni optimallashtirish", "Tasvirlarni filtratsiya qilish"],
    correct: "Modelning ishlashini baholash"
  },
  {
    question: "Qaysi algoritm real vaqt video tahlilida ishlatiladi?",
    options: ["SSD (Single Shot MultiBox Detector)", "K-means", "PCA", "DBSCAN"],
    correct: "SSD (Single Shot MultiBox Detector)"
  },
  {
    question: "Softmax funksiyasi nima uchun ishlatiladi?",
    options: ["Ehtimolliklarni hisoblash", "Ma'lumotlarni siqish", "Tarmoqni tezlashtirish", "Xatolarni kamaytirish"],
    correct: "Ehtimolliklarni hisoblash"
  },
  {
    question: "Qaysi usul tasvirlarni aniqlashda xususiyatlarni kamaytirish uchun ishlatiladi?",
    options: ["PCA (Principal Component Analysis)", "K-means", "SVM", "Random Forest"],
    correct: "PCA (Principal Component Analysis)"
  },
  {
    question: "Qaysi kutubxona Deep Learning modelini o'qitish uchun ishlatiladi?",
    options: ["PyTorch", "Pandas", "Matplotlib", "NumPy"],
    correct: "PyTorch"
  },
  {
    question: "Qaysi algoritm tasvirlarni segmentatsiya qilishda mashhur?",
    options: ["U-Net", "K-means", "SVM", "Naive Bayes"],
    correct: "U-Net"
  },
  {
    question: "Cross-Validation nima uchun ishlatiladi?",
    options: ["Modelning umumlashtirish qobiliyatini baholash", "Ma'lumotlarni siqish", "Tarmoqni tezlashtirish", "Tasvirlarni filtratsiya qilish"],
    correct: "Modelning umumlashtirish qobiliyatini baholash"
  },
  {
    question: "Qaysi metrika tasniflash modelining muvozanatini baholaydi?",
    options: ["F1-Score", "Mean Squared Error", "R-squared", "Loss"],
    correct: "F1-Score"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda tezlik uchun optimallashtirilgan?",
    options: ["Faster R-CNN", "K-means", "SVM", "Naive Bayes"],
    correct: "Faster R-CNN"
  },
  {
    question: "Qaysi usul tasvirlarni oldindan qayta ishlashda shovqinni kamaytirish uchun ishlatiladi?",
    options: ["Gaussian Blur", "Normalization", "Compression", "Encryption"],
    correct: "Gaussian Blur"
  },
  {
    question: "Qaysi algoritm tasvirlarni klassifikatsiya qilishda keng qo'llaniladi?",
    options: ["VGG", "K-means", "DBSCAN", "Naive Bayes"],
    correct: "VGG"
  },
  {
    question: "Qaysi kutubxona tasvirlarni annotatsiya qilish uchun ishlatiladi?",
    options: ["LabelImg", "TensorFlow", "Pandas", "NumPy"],
    correct: "LabelImg"
  },
  {
    question: "Qaysi usul tasvirlarni aniqlashda obyektlarning chegaralarini aniqlash uchun ishlatiladi?",
    options: ["Bounding Box", "Normalization", "Compression", "Encryption"],
    correct: "Bounding Box"
  },
  {
    question: "Qaysi algoritm tasvirlarni generatsiya qilishda ishlatiladi?",
    options: ["VAE (Variational Autoencoder)", "K-means", "SVM", "Random Forest"],
    correct: "VAE (Variational Autoencoder)"
  },
  {
    question: "Qaysi metrika tasniflash modelining noto'g'ri pozitivlarini baholaydi?",
    options: ["Precision", "Recall", "F1-Score", "Accuracy"],
    correct: "Precision"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda eng yuqori aniqlik beradi?",
    options: ["EfficientNet", "K-means", "SVM", "Naive Bayes"],
    correct: "EfficientNet"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda kontrastni oshirish uchun ishlatiladi?",
    options: ["Histogram Equalization", "Normalization", "Compression", "Encryption"],
    correct: "Histogram Equalization"
  },
  {
    question: "Qaysi kutubxona tasvirlarni qayta ishlashda keng qo'llaniladi?",
    options: ["Scikit-Image", "TensorFlow", "Pandas", "NumPy"],
    correct: "Scikit-Image"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda real vaqt rejimida ishlaydi?",
    options: ["MobileNet", "K-means", "SVM", "Naive Bayes"],
    correct: "MobileNet"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda burchaklarni aniqlash uchun ishlatiladi?",
    options: ["Canny Edge Detection", "Normalization", "Compression", "Encryption"],
    correct: "Canny Edge Detection"
  },
  {
    question: "Qaysi algoritm tasvirlarni klassifikatsiya qilishda keng qo'llaniladi?",
    options: ["Inception", "K-means", "DBSCAN", "Naive Bayes"],
    correct: "Inception"
  },
  {
    question: "Qaysi kutubxona tasvirlarni qayta ishlashda keng qo'llaniladi?",
    options: ["OpenCV", "TensorFlow", "Pandas", "NumPy"],
    correct: "OpenCV"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda ranglarni ajratish uchun ishlatiladi?",
    options: ["Color Segmentation", "Normalization", "Compression", "Encryption"],
    correct: "Color Segmentation"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda eng yuqori tezlik beradi?",
    options: ["YOLOv5", "K-means", "SVM", "Naive Bayes"],
    correct: "YOLOv5"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda shovqinni kamaytirish uchun ishlatiladi?",
    options: ["Median Filter", "Normalization", "Compression", "Encryption"],
    correct: "Median Filter"
  },
  {
    question: "Qaysi algoritm tasvirlarni klassifikatsiya qilishda keng qo'llaniladi?",
    options: ["DenseNet", "K-means", "DBSCAN", "Naive Bayes"],
    correct: "DenseNet"
  },
  {
    question: "Qaysi kutubxona tasvirlarni qayta ishlashda keng qo'llaniladi?",
    options: ["Keras", "TensorFlow", "Pandas", "NumPy"],
    correct: "Keras"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda obyektlarni aniqlash uchun ishlatiladi?",
    options: ["Object Detection", "Normalization", "Compression", "Encryption"],
    correct: "Object Detection"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda eng yuqori aniqlik beradi?",
    options: ["Vision Transformer", "K-means", "SVM", "Naive Bayes"],
    correct: "Vision Transformer"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda yorug'likni sozlash uchun ishlatiladi?",
    options: ["Gamma Correction", "Normalization", "Compression", "Encryption"],
    correct: "Gamma Correction"
  },
  {
    question: "Qaysi kutubxona tasvirlarni qayta ishlashda keng qo'llaniladi?",
    options: ["Albumentations", "TensorFlow", "Pandas", "NumPy"],
    correct: "Albumentations"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda real vaqt rejimida ishlaydi?",
    options: ["EfficientDet", "K-means", "SVM", "Naive Bayes"],
    correct: "EfficientDet"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda konturlarni aniqlash uchun ishlatiladi?",
    options: ["Contour Detection", "Normalization", "Compression", "Encryption"],
    correct: "Contour Detection"
  },
  {
    question: "Qaysi algoritm tasvirlarni klassifikatsiya qilishda keng qo'llaniladi?",
    options: ["AlexNet", "K-means", "DBSCAN", "Naive Bayes"],
    correct: "AlexNet"
  },
  {
    question: "Qaysi kutubxona tasvirlarni qayta ishlashda keng qo'llaniladi?",
    options: ["Mahotas", "TensorFlow", "Pandas", "NumPy"],
    correct: "Mahotas"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda shakllarni aniqlash uchun ishlatiladi?",
    options: ["Shape Detection", "Normalization", "Compression", "Encryption"],
    correct: "Shape Detection"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda eng yuqori tezlik beradi?",
    options: ["YOLOv7", "K-means", "SVM", "Naive Bayes"],
    correct: "YOLOv7"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda ranglarni normallashtirish uchun ishlatiladi?",
    options: ["Color Normalization", "Normalization", "Compression", "Encryption"],
    correct: "Color Normalization"
  },
  {
    question: "Qaysi algoritm tasvirlarni klassifikatsiya qilishda keng qo'llaniladi?",
    options: ["GoogLeNet", "K-means", "DBSCAN", "Naive Bayes"],
    correct: "GoogLeNet"
  },
  {
    question: "Qaysi kutubxona tasvirlarni qayta ishlashda keng qo'llaniladi?",
    options: ["SimpleITK", "TensorFlow", "Pandas", "NumPy"],
    correct: "SimpleITK"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda obyektlarni klassifikatsiya qilish uchun ishlatiladi?",
    options: ["Object Classification", "Normalization", "Compression", "Encryption"],
    correct: "Object Classification"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda eng yuqori aniqlik beradi?",
    options: ["Swin Transformer", "K-means", "SVM", "Naive Bayes"],
    correct: "Swin Transformer"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda yuzni aniqlash uchun ishlatiladi?",
    options: ["Face Detection", "Normalization", "Compression", "Encryption"],
    correct: "Face Detection"
  },
  {
    question: "Qaysi algoritm tasvirlarni klassifikatsiya qilishda keng qo'llaniladi?",
    options: ["ResNeXt", "K-means", "DBSCAN", "Naive Bayes"],
    correct: "ResNeXt"
  },
  {
    question: "Qaysi kutubxona tasvirlarni qayta ishlashda keng qo'llaniladi?",
    options: ["ImageIO", "TensorFlow", "Pandas", "NumPy"],
    correct: "ImageIO"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda harakatni aniqlash uchun ishlatiladi?",
    options: ["Motion Detection", "Normalization", "Compression", "Encryption"],
    correct: "Motion Detection"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda real vaqt rejimida ishlaydi?",
    options: ["NanoDet", "K-means", "SVM", "Naive Bayes"],
    correct: "NanoDet"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda teksturalarni aniqlash uchun ishlatiladi?",
    options: ["Texture Analysis", "Normalization", "Compression", "Encryption"],
    correct: "Texture Analysis"
  },
  {
    question: "Qaysi algoritm tasvirlarni klassifikatsiya qilishda keng qo'llaniladi?",
    options: ["Xception", "K-means", "DBSCAN", "Naive Bayes"],
    correct: "Xception"
  },
  {
    question: "Qaysi kutubxona tasvirlarni qayta ishlashda keng qo'llaniladi?",
    options: ["Cairosvg", "TensorFlow", "Pandas", "NumPy"],
    correct: "Cairosvg"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda chiziqlarni aniqlash uchun ishlatiladi?",
    options: ["Hough Transform", "Normalization", "Compression", "Encryption"],
    correct: "Hough Transform"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda eng yuqori tezlik beradi?",
    options: ["YOLOv8", "K-means", "SVM", "Naive Bayes"],
    correct: "YOLOv8"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda yorug'likni normallashtirish uchun ishlatiladi?",
    options: ["Illumination Normalization", "Normalization", "Compression", "Encryption"],
    correct: "Illumination Normalization"
  },
  {
    question: "Qaysi algoritm tasvirlarni klassifikatsiya qilishda keng qo'llaniladi?",
    options: ["MobileNetV2", "K-means", "DBSCAN", "Naive Bayes"],
    correct: "MobileNetV2"
  },
  {
    question: "Qaysi kutubxona tasvirlarni qayta ishlashda keng qo'llaniladi?",
    options: ["Wand", "TensorFlow", "Pandas", "NumPy"],
    correct: "Wand"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda obyektlarni segmentatsiya qilish uchun ishlatiladi?",
    options: ["Instance Segmentation", "Normalization", "Compression", "Encryption"],
    correct: "Instance Segmentation"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda eng yuqori aniqlik beradi?",
    options: ["ConvNeXt", "K-means", "SVM", "Naive Bayes"],
    correct: "ConvNeXt"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda pozitsiyani aniqlash uchun ishlatiladi?",
    options: ["Pose Estimation", "Normalization", "Compression", "Encryption"],
    correct: "Pose Estimation"
  },
  {
    question: "Qaysi algoritm tasvirlarni klassifikatsiya qilishda keng qo'llaniladi?",
    options: ["SENet", "K-means", "DBSCAN", "Naive Bayes"],
    correct: "SENet"
  },
  {
    question: "Qaysi kutubxona tasvirlarni qayta ishlashda keng qo'llaniladi?",
    options: ["PyCairo", "TensorFlow", "Pandas", "NumPy"],
    correct: "PyCairo"
  },
  {
    question: "Qaysi usul tasvirlarni qayta ishlashda obyektlarni izlash uchun ishlatiladi?",
    options: ["Object Tracking", "Normalization", "Compression", "Encryption"],
    correct: "Object Tracking"
  },
  {
    question: "Qaysi algoritm tasvirlarni aniqlashda real vaqt rejimida ishlaydi?",
    options: ["RT-DETR", "K-means", "SVM", "Naive Bayes"],
    correct: "RT-DETR"
  }
];

export { quizData };
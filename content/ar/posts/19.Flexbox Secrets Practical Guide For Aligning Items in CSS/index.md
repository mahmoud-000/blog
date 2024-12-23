---
title: "أسرار Flexbox: دليل عملي لتوزيع العناصر في CSS"
date: 2024-12-22
draft: false
slug: "flexbox-secrets-practical-guide-for-aligning-items-in-css"
cascade:
  showReadingTime: true
categories: ['Web Development']
tags: ['Front-End','CSS']
---

هل سبق وأن شعرت بالإحباط أثناء محاولة محاذاة العناصر على موقعك باستخدام CSS؟ ربما قضيت ساعات في تجربة مختلف القيم لتحديد المواقع، دون أن تصل إلى النتيجة المثالية. هنا يأتي دور **Flexbox**،

التقنية السحرية التي أحدثت ثورة في عالم تصميم المواقع. بفضل خصائصها البسيطة والمرنة، يمكنك الآن توزيع العناصر ومحاذاتها بسهولة مذهلة. سواء كنت مبتدئًا أو محترفًا في تطوير الويب، فإن تعلم Flexbox سيفتح لك آفاقًا جديدة في تصميم واجهات المستخدم بشكل أنيق وفعال.

في هذه المقالة، سنأخذك في رحلة شيقة لاكتشاف أسرار Flexbox وكيف يمكنك الاستفادة منها لتبسيط حياتك كمطور.  


## **مقدمة Flexbox: الخطوة نحو إتقان التوزيع والمحاذاة في CSS**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrQJRY84Pm1Wm47vDbfdOE6ytx61B2_G-rDwFkvdKmGorq3XDR0ma4_C58JxW-OfInyan4eKBXPf_VGYw2W6GnqzsGGyYbh-bOco6_Lz8pZN-UsTosQ9lutIBN6nRHNd1ejiY0KBIj2hBeTn5_4HQ8GS5md1TrbK7TJWaQ4Z2HDae8oDCvKKrWhPXCHOU/s16000/css-flexbox-in-arabic.webp"
alt="أسرار Flexbox: دليل عملي لتوزيع العناصر في CSS"
title="أسرار Flexbox: دليل عملي لتوزيع العناصر في CSS"
/>
<figcaption>أسرار Flexbox: دليل عملي لتوزيع العناصر في CSS</figcaption>
</figure>

من هنا نبدأ رحلتنا نحو المستوى المتوسط في استخدام CSS مع أداة رائعة ومبتكرة تُعرف باسم **Flexbox**، أو كما يسميها الجميع ببساطة "فليكس". تعتبر هذه التقنية ثورة حقيقية في كيفية توزيع ومحاذاة العناصر داخل الحاويات، حيث تجعل من السهل جدًا تحقيق نتائج بصرية مذهلة تُشبه تلك التي تجدها في أدوات التصميم مثل Adobe Illustrator، ولكن باستخدام الكود فقط.

قبل ظهور **Flexbox**، كان ترتيب العناصر داخل الصفحة ومحاذاتها بشكل مثالي يمثل تحديًا كبيرًا للمطورين. ومع ذلك، جاءت هذه التقنية لتغيير كل شيء، حيث أصبحت تتيح الحاويات **المرنة** (Flex Containers) إمكانية توزيع العناصر داخلها بشكل سلس ومرن، سواء كان ذلك للتوسيع أو المحاذاة أو التوزيع.

دعونا نغوص في تفاصيل Flexbox ونستكشف مميزاته وأسلوبه في العمل، مع شرح كل خطوة بأسلوب عملي وواضح مدعوم بالأمثلة.

### **1. تعريف Flexbox وأهميته**
Flexbox هو اختصار لـ "Flexible Box Module"، ويعد أداة قوية لتوزيع العناصر ومحاذاتها داخل صفحات الويب. ما يميز Flexbox هو المرونة وسهولة الاستخدام مقارنة بالتقنيات التقليدية في CSS.

### **2. المشكلة قبل Flexbox**
قبل ظهور Flexbox، كان ترتيب العناصر داخل الحاويات يتطلب الكثير من الجهد والكود، مثل استخدام **float** و**positioning**، مما جعل الأمر معقدًا وأحيانًا غير عملي.

### **3. ما الذي يقدمه Flexbox؟**
Flexbox يوفر إمكانيات مدهشة تشمل:
- **توسيع العناصر** داخل الحاوية.
- **محاذاة العناصر** بشكل عمودي أو أفقي.
- **توزيع العناصر** بمسافات متساوية أو حسب الحاجة.

### **4. الحاوية والعناصر: المصطلحات الأساسية**
- **الحاوية (Container):** هي العنصر الرئيسي الذي يحتوي على عناصر أخرى بداخله.
- **العناصر (Items):** هي العناصر الفردية الموجودة داخل الحاوية.

### **5. البدء باستخدام Flexbox**
استخدام Flexbox سهل للغاية. كل ما عليك فعله هو تعيين خاصية `display` الخاصة بالحاوية إلى `flex`، وبعد ذلك يمكنك الاستفادة من مجموعة كبيرة من الخصائص لتخصيص التوزيع والمحاذاة.

**مثال عملي بسيط**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEja4-gJxq8XHHC7yd3ylLw0ciUGor41SGlKxMbrv7ZQcV7WruSXIh_xniyjGCO0TbxOTbH1Vam72icxdz9moBCGBf3haevXneNFolkDVsIbLjISpMfx3obbiyHC5CxAu-2n7OQlRHB41c2GGK4HVLAxSKKv_QsQt-pqvt0SQI7Uts6qNP2ifi3-g8zETbY/s16000/display-flex-first-example.webp"
alt="مثال عملي بسيط على Flexbox"
title="مثال عملي بسيط على Flexbox"
/>
<figcaption>مثال عملي بسيط على Flexbox</figcaption>
</figure>

**كود HTML**
```html
<div class="container">
    <div class="box" id="one">Box One - 1</div>
    <div class="box" id="two">Box Two - 2</div>
    <div class="box" id="three">Box Three - 3</div>
</div>
```
في هذا المثال، لدينا إعداد HTML بسيط يتضمن:
- عنصر `div` رئيسي مع **class** يُسمى `container`.
- ثلاثة عناصر فرعية داخل الحاوية الرئيسية، كل منها يحمل **class** يُسمى `box`، مع **id** مميز: `one`، `two`، و`three`.

**كود CSS**
```css
body {
	background-color: brown;
	color: #ccc;
}

.container {
	display: flex;
	flex-direction: column; /* المحور الرئيسي عمودي */
	justify-content: center; /* محاذاة العناصر على المحور الرئيسي */
	align-items: flex-start; /* محاذاة العناصر على المحور البديل */
	border: 2px solid #fff;
	padding: 5px;
}

.box {
	background-color: blueviolet;
	color: #fff;
	width: 200px;
	height: 120px;
	border: 2px solid orange;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}
```

بمجرد تطبيق الكود أعلاه على الحاوية، يمكننا استخدام العديد من الخصائص مثل `justify-content` و`align-items` لتحقيق التصميم المطلوب كما نرى وهذه مجرد البداية فقط.

## **محاور واتجاهات Flexbox: فهم الأساسيات**

Flexbox يعتمد بشكل كبير على مفهوم المحاور والاتجاهات، مما يتيح لك التحكم الكامل في توزيع العناصر ومحاذاتها داخل الحاوية. في هذا القسم، سنتعرف على المحاور (الرئيسي والبديل) وكيف يؤثر تغيير الاتجاهات على تصميمك.

### **1. المحاور في Flexbox**
Flexbox يعتمد على محورين رئيسيين:
- **المحور الرئيسي (Main Axis):** يتم تحديده باستخدام الخاصية `flex-direction`.
- **المحور البديل (Cross Axis):** وهو المحور المعاكس للمحور الرئيسي.

### **2. القيم الممكنة لـ `flex-direction`**
هناك أربع قيم رئيسية تؤثر على اتجاه العناصر داخل الحاوية:
1. **row:** المحور الرئيسي أفقي (من اليسار إلى اليمين).
2. **row-reverse:** المحور الرئيسي أفقي (من اليمين إلى اليسار).
3. **column:** المحور الرئيسي رأسي (من الأعلى إلى الأسفل).
4. **column-reverse:** المحور الرئيسي رأسي (من الأسفل إلى الأعلى).

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOPm0tmPIFJH1ywQzjt67Q7YR3g7yFd3HyiwA_yHdBtVfE_TYBb0Bk6flGmAwTU0meyPqLtErN8ZHsEEtJJstTHuPHzBlptJkZYRiIv5YV6w9um0afQjjIAGY9mCSO37iOlomfgTmQk_nS95m42hooqxHEQu9cehQy39f0h8arAQj3bawGd8MRsbao0YA/s16000/flex-direction-row-and-row-reverse.webp"
alt="Flexbox Row and Row Reverse Directions"
title="Flexbox Row and Row Reverse Directions"
/>
<figcaption>Flexbox Row and Row Reverse Directions</figcaption>
</figure>

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMF_sHIXWM6qlEhbLsygG2RRmAyqCwUSEUpnnj49EuKlpCeHvj_19RJ4JngOgs3MAK3XrkCMvNV1NqSMSj1I6c9ljDgD8czFQrFAHvJHLlyF4hvFwfRDRmih6Bu4sp9SSLVYr0p97dvmsCqgThdgh38AOdOuiUExo4Iz9jk1viDM10hH2liIVP1_PqFo8/s16000/flex-direction-column-and-column-reverse.webp"
alt="Flexbox Column and Column Reverse Directions"
title="Flexbox Column and Column Reverse Directions"
/>
<figcaption>Flexbox Column and Column Reverse Directions</figcaption>
</figure>

**مثال عملي:**
```css
.container {
    display: flex;
    flex-direction: row; /* يمكن تغييرها إلى أي من القيم الأربعة */
}
```

### **3. كيف تعمل المحاور؟**
- عند اختيار `row` أو `row-reverse`، يصبح المحور الرئيسي أفقيًا، بينما يكون المحور البديل رأسيًا.
- عند اختيار `column` أو `column-reverse`، يصبح المحور الرئيسي رأسيًا، بينما يكون المحور البديل أفقيًا.

**ملاحظات:**
- المحور الرئيسي يحدد كيفية ترتيب العناصر داخل الحاوية.
- المحور البديل يؤثر على المحاذاة العمودية أو الأفقية للعناصر.

### **4. التفاعل مع خصائص المحاذاة**
Flexbox يقدم خصائص مثل `justify-content` و `align-items` للتحكم في توزيع العناصر ومحاذاتها على المحاور:
- **justify-content:** تعمل على المحور الرئيسي.
- **align-items:** تعمل على المحور البديل.


**مثال عملي:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPSqdw5HNphfw5992AjOfuiGuccMx1XesH3NszQTNSBM9YEGJXtVTbZZ0slU8mSjpu3X7_0OyNPamKcypQtPVCb8gLLt3afZgfo40UzV3dC-jQ7MlqWte2x_qKsHUNpSBADn-Rbkx2arrN3l0auLi0DZm3iI9HMGIS9yK-XdTus7whWn7tVTTpYCsjOy0/s16000/justify-content-with-align-items.webp"
alt="إستخدام Justify Content مع Align Items"
title="إستخدام Justify Content مع Align Items"
/>
<figcaption>إستخدام Justify Content مع Align Items</figcaption>
</figure>

```css
.container {
	display: flex;
	flex-direction: row; /* المحور الرئيسي أفقياٌ */
	justify-content: center; /* محاذاة العناصر على المحور الرئيسي */
	align-items: flex-start; /* محاذاة العناصر على المحور البديل */
	border: 2px solid #fff;
	padding: 5px;
	height: 500px;
}
```

### **5. تأثير تغيير الاتجاه**
- بتغيير قيمة `flex-direction`، تتغير كيفية تفاعل العناصر مع المحورين.
- على سبيل المثال، عند التبديل من `row` إلى `column`، يصبح المحور الرئيسي عموديًا (أعلى-أسفل) والمحور البديل أفقيًا (يسار-يمين).

### **6. علاقة المحاور بـ Flexbox بشكل عام**
كل خصائص Flexbox تقريبًا مثل `justify-content` و `align-items` و `align-self` تعتمد على المحاور التي تحددها. لذا، فهم المحاور والاتجاهات هو الخطوة الأولى لإنشاء تخطيطات مرنة ومتجاوبة.

## **خصائص الحاوية (Flex Container Properties)**
توضيح الخصائص التي يتم تطبيقها على الحاوية:
- **`display: flex`** و **`inline-flex`**: تنشيط Flexbox.
- **`flex-direction`**: تحديد اتجاه المحور (أفقي/عمودي).
- **`flex-wrap`**: التحكم في التفاف العناصر.
- **`flex-flow`**: الخاصية المختصرة لـ `flex-direction` و `flex-wrap`.
- **`justify-content`**: محاذاة العناصر على المحور الرئيسي.
- **`align-items`**: محاذاة العناصر على المحور المتقاطع.
- **`align-content`**: التحكم في توزيع الصفوف المتعددة (عند الالتفاف).

## **خصائص العناصر (Flex Item Properties)**
توضيح الخصائص التي تؤثر على العناصر داخل الحاوية:
- **`flex-grow`**: التحكم في كيفية تمدد العناصر.
- **`flex-shrink`**: التحكم في كيفية تقلص العناصر.
- **`flex-basis`**: تحديد الحجم الأساسي للعنصر.
- **`flex`**: الخاصية المختصرة لـ `flex-grow` و `flex-shrink` و `flex-basis`.
- **`align-self`**: تخصيص محاذاة عنصر معين دون التأثير على البقية.

## **محاذاة العناصر وتوزيعها باستخدام Flexbox**

تُعتبر خاصية **Flexbox** واحدة من أهم الأدوات التي تُسهّل محاذاة العناصر وتوزيعها داخل الحاويات. كان التنسيق التقليدي باستخدام **position: absolute** أو **relative** يستغرق الكثير من الوقت، ولكن Flexbox حلّ هذه المشكلة بفضل خواصه البسيطة والفعّالة. هنا سنستعرض ميزتين رئيسيتين: **align-items** و**justify-content**، وكيف يمكن استخدامهما بشكل عملي.

### **1. خاصية `justify-content`: توزيع العناصر على المحور الأساسي**

تتحكم خاصية **`justify-content`** في توزيع العناصر على المحور الأساسي (الذي يتم تحديده باستخدام خاصية `flex-direction`). 

**القيم الشائعة:**
- **`flex-start`**: يتم ترتيب العناصر من بداية المحور.
- **`center`**: يتم وضع العناصر في منتصف المحور.
- **`flex-end`**: يتم ترتيب العناصر في نهاية المحور.
- **`space-between`**: توزيع العناصر مع وجود مسافات متساوية بينها.
- **`space-around`**: توزيع العناصر مع وجود مسافات متساوية من الأطراف وبين العناصر.
- **`space-evenly`**: توزيع العناصر بحيث تكون المسافات متساوية تمامًا بين كل العناصر والأطراف.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBkh5GYQCl5siaeV2FZU_7GvNT_5841Rtzb-WfdefoY-GnRxc6xVSmd2GADNztLRIDXCXrHvvUdne0wFAXrmalA7X31-91aDL2n6gwd0CyZNm7r8O-M1MfTZykrDd81vPqyCfbKMsOJUYActfD-RwJ8zGCKPcbTOy2QF36gmno3R7MG9srWUNu2kMtY8E/s16000/justify-content.webp"
alt="القيم الشائعة لـ justify-content"
title="القيم الشائعة لـ justify-content"
/>
<figcaption>القيم الشائعة لـ justify-content</figcaption>
</figure>

**مثال عملي:**
```css
.container {
  display: flex;
  justify-content: space-around; /* توزيع العناصر مع وجود مسافات متساوية */
}
```

### **2. خاصية `align-items`: محاذاة العناصر على المحور العمودي**

تتحكم خاصية **`align-items`** في محاذاة العناصر على المحور العمودي (وهو المحور المتعامد مع المحور الأساسي).

**القيم الشائعة:**
- **`stretch`**: تمديد العناصر لملء المساحة المتاحة (القيمة الافتراضية).
- **`flex-start`**: محاذاة العناصر مع بداية المحور العمودي.
- **`center`**: وضع العناصر في وسط المحور العمودي.
- **`flex-end`**: محاذاة العناصر مع نهاية المحور العمودي.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnynWF78DFcSuOEvkgZ9sDDwfjCrwrybGQlW-3q8X10waQWq4CGxVR1iSBHoZxXIqS64A6OzdN1SJabYhGzjtHTkEW2aIMT6TYOBSCnG24GsR7zqPViCxiKjLHsqaFnjdKotpuUf1EF9meYdufYLeqwvVAr6mT5eE6_jSsryupsjWPailgLPKYKqy0wu4/s16000/align-items.webp"
alt="القيم الشائعة لـ align-items"
title="القيم الشائعة لـ align-items"
/>
<figcaption>القيم الشائعة لـ align-items</figcaption>
</figure>

**مثال عملي:**
```css
.container {
  display: flex;
  align-items: center; /* محاذاة العناصر في منتصف المحور العمودي */
}
```

### **دمج القيم للحصول على تنسيق مثالي**

عند استخدام **`justify-content`** مع **`align-items`** معًا، يمكن إنشاء تصميمات متطورة تُناسب جميع أنواع التخطيطات.


**مثال:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFIljwruO3wuvuow6uocQqcSfWrwH1HJjVehvLFN8gh0w2JEhMYVyiSqJ9AbHBPTThel3HTBJA0UgWW-qp8hmPLzXmmIiqTROmez81ghU0CzqL7HaBYX5kGb7jvfE4nBdIfLArM_50d_boci83IA-2eZ17q5mpJxc6KofsN_DD-9MnVyOPLqzW-htNjBw/s16000/justify-content-with-align-items-2.webp"
alt="أستخدام justify-content مع align-items"
title="أستخدام justify-content مع align-items"
/>
<figcaption>أستخدام justify-content مع align-items</figcaption>
</figure>

```css
.container {
  display: flex;
  justify-content: center; /* توزيع العناصر في المنتصف أفقيًا */
  align-items: flex-end;  /* محاذاة العناصر في نهاية المحور العمودي */
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9_awns7qR49a0U-zmUhxok4wXzcpcwBI3S-ToPyPhraTd-d4BnyH7Scxcu7kCN_VYGKWsuEPQNMPi-iRKfDKAEaUpk4n9E9z_5AndRcP0hOs3dT_tILWfPL2gNZXGXFlycLqZGVFyVnVr4kqfeESihmBZ43a6ttYMt5eiTtc4oRr4N8-qnEpMg3XXI6g/s16000/justify-content-with-align-items.webp"
alt="أستخدام justify-content مع align-items"
title="أستخدام justify-content مع align-items"
/>
<figcaption>أستخدام justify-content مع align-items</figcaption>
</figure>
<!-- justify-content-and-align-items -->

## **التفاف العناصر وتوزيعها باستخدام Flexbox**

Flexbox هو أداة قوية لتوزيع العناصر داخل الحاويات بشكل مرن ومنظم. في هذا الشرح، سنستعرض ثلاث خصائص أساسية: **`align-content`**، **`flex-wrap`**، بالإضافة إلى الفرق بين **`align-content`** و **`align-items`**، لتوضيح دور كل منها في ترتيب العناصر داخل الحاوية.

### **1. خاصية `flex-wrap`: التفاف العناصر**  
تتحكم خاصية **`flex-wrap`** في ما إذا كانت العناصر ستلتف إلى صفوف جديدة عند امتلاء الصف الحالي.

**القيم الأساسية لـ `flex-wrap`**:
1. **`nowrap`** (الافتراضية): جميع العناصر تبقى في صف واحد حتى لو تجاوزت الحاوية.
2. **`wrap`**: تلتف العناصر إلى صفوف جديدة عند الحاجة.
3. **`wrap-reverse`**: تلتف العناصر بترتيب معكوس (من الأسفل إلى الأعلى).
<!-- Image 9 -->
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhecUYgfKeGm6oAst6Vip8V-oRDCkcJTWMbmSCB7lZs057OmOCZa4UP1HhgHd8FRebsk3CpErWPRZylRzhQwokjOabhGUpQfoXiv6G1_H5PaJD9BF4XCIItiSpwaCkOa7zWidAPVXSMkar-iZ-rJVTHQ-tcLWfOZYIaqYWBiZZCabKR75_d9WZdKayhHE8/s16000/flex-wrap.webp"
alt="القيم الأساسية لـ flex-wrap"
title="القيم الأساسية لـ flex-wrap"
/>
<figcaption>القيم الأساسية لـ flex-wrap</figcaption>
</figure>

**مثال عملي:**
```css
.container {
  display: flex;
  flex-wrap: wrap; /* السماح بالتفاف العناصر */
}

.box {
	background-color: blueviolet;
	color: #fff;
	width: 200px;
	height: 120px;
	border: 2px solid orange;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}
```

### **2. خاصية `align-content`: توزيع الصفوف**  
تُستخدم خاصية **`align-content`** للتحكم في توزيع **الصفوف** داخل الحاوية عند وجود أكثر من صف. هذه الخاصية تكون فعّالة فقط مع خاصية **`flex-wrap`** عند التفاف العناصر.

**القيم الأساسية لـ `align-content`**:
1. **`flex-start`**: تجميع الصفوف في أعلى الحاوية.
2. **`flex-end`**: تجميع الصفوف في أسفل الحاوية.
3. **`center`**: توسيط الصفوف داخل الحاوية.
4. **`space-between`**: توزيع الصفوف بحيث تكون المسافات بينها متساوية.
5. **`space-around`**: توزيع المسافات بشكل متساوٍ حول الصفوف.
6. **`space-evenly`**: توزيع الصفوف بمسافات متساوية تمامًا.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL1CahdyczECCmComNLg_NOK_1_v_0rx-1nPNb2VV9qNN9LHbcSri8Q2sSl2-MyeYPe3U3EXV2YbQbPC6Tk9qn3sexhiRHBSwoZDGtLtvj3Z8YWbp831mDBQ5fsmBhev_ujfUlnTANipQham4T83JFzcgC-SCo-8Plywwt02hms9O2mtPKfTuZHV21cO4/s16000/align-content.webp"
alt="القيم الأساسية لـ align-content"
title="القيم الأساسية لـ align-content"
/>
<figcaption>القيم الأساسية لـ align-content</figcaption>
</figure>

**مثال عملي:**
```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between; /* توزيع الصفوف بمسافات متساوية */
  height: 300px; /* لضمان وجود مساحة كافية للصفوف */
}

.box {
	background-color: blueviolet;
	color: #fff;
	width: 200px;
	height: 80px;
	border: 2px solid orange;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}
```

### **الفرق بين `align-content` و `align-items`**  
#### **`align-items`**  
- تُستخدم لمحاذاة **العناصر داخل الصف الواحد** على المحور العمودي (المتقاطع).  
- تؤثر على العناصر بشكل فردي داخل كل صف.

#### **`align-content`**  
- تُستخدم لتوزيع **الصفوف** ككل داخل الحاوية.  
- فعّالة فقط عندما يكون لديك **عدة صفوف**.

**مثال للتوضيح:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcd69jbeYp52MiYlElXyqVtNaDsxtvWXpwalsJP95M9cjGbG-mnQrYO0lLq9B_LdFkIrHFypU09RUEPJaJldRi4kdjFwrMU53lml77jH5GRJM1z7uQGa7-qfD6vJNKV0HG86F7YBOJe0DxQU07wTOdxnPrmypNzVoQuC1O9MXNj2ksM2GwZ4qdyRVsIiQ/s16000/align-items-with-align-content.webp"
alt="أستخدام align-content مع align-items"
title="أستخدام align-content مع align-items"
/>
<figcaption>أستخدام align-content مع align-items</figcaption>
</figure>

```css
.container {
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  align-items: center; /* محاذاة العناصر في منتصف المحور العمودي */
  align-content: space-around; /* توزيع الصفوف بمسافات متساوية حولها */
}

.box {
	background-color: blueviolet;
	color: #fff;
	width: 200px;
	height: 80px;
	border: 2px solid orange;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}
```

### **نصائح مهمة عند استخدام هذه الخصائص**  
1. إذا كنت بحاجة إلى **توزيع العناصر أفقيًا داخل صف واحد**، استخدم **`justify-content`**.
2. إذا كنت تعمل مع **عدة صفوف**، استخدم **`align-content`** لتوزيعها بشكل مناسب.
3. **`align-items`** هو الخيار المناسب لمحاذاة العناصر على المحور العمودي داخل صف واحد.
4. قم بتجربة القيم المختلفة لكل خاصية للحصول على التصميم الأنسب.

## **الخاصية المختصرة `flex-flow` في Flexbox**

### **ما هي `flex-flow`؟**
`flex-flow` هي خاصية مختصرة (**shorthand**) تُستخدم لتحديد كل من خاصيتي **`flex-direction`** و **`flex-wrap`** في سطر واحد.  
بدلاً من كتابة الخاصيتين بشكل منفصل، يمكنك دمجهما معًا باستخدام `flex-flow` لتبسيط الكود.

**الصيغة العامة:**
```css
flex-flow: <flex-direction> <flex-wrap>;
```

**مثال عملى: الاتجاه الأفقي مع الالتفاف**
```css
.container {
  flex-flow: row wrap;
}
```
- **`row`**: العناصر تتبع المحور الأفقي.  
- **`wrap`**: إذا لم تكن هناك مساحة كافية، تلتف العناصر إلى صف جديد.  

**القيم الافتراضية:**
إذا لم تحدد الخاصية، فإن القيم الافتراضية هي:
```css
flex-flow: row nowrap;
```

### **لماذا نستخدم `flex-flow`؟**
1. **تبسيط الكود**: بدلاً من كتابة الخاصيتين بشكل منفصل، يتم دمجهما في خاصية واحدة.
2. **سهولة القراءة والصيانة**: يجعل الكود أكثر وضوحًا وتنظيمًا.
3. **مرونة التخصيص**: يمكنك الجمع بين أي قيمة لـ **`flex-direction`** وأي قيمة لـ **`flex-wrap`** حسب احتياجات التصميم.

## **إعادة ترتيب العناصر باستخدام Flexbox**

Flexbox يوفر أدوات متعددة تتيح لك إعادة ترتيب العناصر داخل الحاوية بطريقة ديناميكية ومرنة. في هذا القسم، سنستعرض الطرق الثلاث الأساسية التي يمكن استخدامها لإعادة ترتيب العناصر، وسنوضح كيفية تنفيذها خطوة بخطوة.

### **1. استخدام خاصية `flex-direction` مع القيم العكسية**
- **القيمة `row-reverse`:** تعكس ترتيب العناصر أفقيًا، حيث يبدأ الترتيب من اليمين إلى اليسار.
- **القيمة `column-reverse`:** تعكس ترتيب العناصر رأسيًا، حيث يبدأ الترتيب من الأسفل إلى الأعلى.

**مثال عملي:**
```css
.container {
    display: flex;
    flex-direction: row-reverse; /* أو column-reverse */
}
```

### **2. تعديل ترتيب العناصر في HTML مباشرةً**
- الطريقة الأبسط لتغيير الترتيب هي تعديل ترتيب العناصر في الكود نفسه. 
- على سبيل المثال، إذا كانت العناصر مرتبة كالتالي:
  ```html
    <div class="box" id="one">Box One - 1</div>
    <div class="box" id="two">Box Two - 2</div>
    <div class="box" id="three">Box Three - 3</div>
  ```
  يمكن إعادة ترتيبها ببساطة إلى:
  ```html
    <div class="box" id="two">Box Two - 2</div>
    <div class="box" id="one">Box One - 1</div>
    <div class="box" id="three">Box Three - 3</div>
  ```

### **3. استخدام خاصية `order` في CSS**
- خاصية `order` تمنحك مرونة أكبر في تحديد ترتيب العناصر بشكل مخصص.
- هذه الخاصية مخصصة فقط لعناصر Flexbox (العناصر الموجودة داخل الحاوية التي تحتوي على `display: flex`).


**مثال عملي:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRwc4bmxoIfdXborDRjgiSYvOQA7YYGdgjdKN9KFT3AMg1ZgkjmnGypM0VbiPRpLkHTVN-uN5ZFso7wWWi_gZvtc9R54qmgWCUn2mCEsPdHwFc5Ih8-ug4pcnEipYJLEtXzaIpx1zFnxAhxMMY1rQvx4FfzE2iqKA7vdKncU-ligkRhKUFeRbLpfac6qU/s16000/using-order-with-flex.webp"
alt="استخدام خاصية order في CSS"
title="استخدام خاصية order في CSS"
/>
<figcaption>استخدام خاصية order في CSS</figcaption>
</figure>

```css
.container {
    display: flex;
}

#one {
	order: 3; /* العنصر الأول يظهر في الترتيب الثالث */
}

#two {
	order: 1; /* العنصر الثاني يظهر في الترتيب الأول */
}

#three {
	order: 2; /* العنصر الثالث يظهر في الترتيب الثاني */
}
```

## **خصائص التحكم في عناصر الـ Flexbox**  

لتحقيق مرونة أكبر في تصميم عناصر **Flexbox**، يمكنك استخدام خمس خصائص تؤثر على العناصر داخل الحاوية. ثلاث منها تؤثر على حجم كل عنصر على حدة. والأخرى تعطى القدرة على التحكم في محاذاة عنصر معين داخل الحاوية.

والأخيرة التى تكلمنا عنها سابقا وهى خاصية **order**. الخاصة بتغيير ترتيب العناصر داخل الحاوية.

هذه الخصائص توفر لك السيطرة على كيفية تمدد العناصر أو تقلصها أو تحديد حجمها الأساسي أو حتى محاذاتها داخل الحاوية.  

### **1. خاصية align-self فى CSS**  

خاصية **`align-self`** في CSS تمنحك القدرة على التحكم في محاذاة عنصر معين داخل حاوية **Flexbox** بشكل مستقل عن العناصر الأخرى. فهي تُستخدم لتجاوز القيمة المحددة للخاصية **`align-items`** التي تؤثر على جميع العناصر داخل الحاوية. 

**القيم الأساسية لـ align-self:**
1. **`auto`** (القيمة الافتراضية):  
   يعتمد العنصر على قيمة الخاصية **`align-items`** الخاصة بالحاوية.
2. **`flex-start`**:  
   يجعل العنصر يتموضع عند بداية المحور العمودي للحاوية.
3. **`flex-end`**:  
   يجعل العنصر يتموضع عند نهاية المحور العمودي للحاوية.
4. **`center`**:  
   يجعل العنصر يتموضع في منتصف المحور العمودي للحاوية.
5. **`baseline`**:  
   يجعل العنصر يتموضع بناءً على الخط الأساسي للنص داخل الحاوية.
6. **`stretch`**:  
   يجعل العنصر يتمدد ليملأ المساحة المتاحة له.


**مثال:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9Y8NpiSZagM6zmhqR8IZV9a7RZMX6-K36WgLzokT040E0L99VUcKp9NEJCMIeu5KxHYeARRCKsPTWkSMd_ii7cQIOOXL-308sdtR4zHD3e7VfH9XzfjktZqZFcwyxJiVFEyBM9AQTOfvQdFNcY_4pk9_X4p-E9hzEsO05MgdZu-VFNwBILuUsQ9_A4kc/s16000/align-self.webp"
alt="خاصية align-self فى CSS"
title="خاصية align-self فى CSS"
/>
<figcaption>خاصية align-self فى CSS</figcaption>
</figure>

```css
.container {
	display: flex;
	flex-direction: column;
	border: 2px solid #fff;
	padding: 5px;
	height: 300px;
}

.box {
	background-color: blueviolet;
	color: #fff;
	width: 200px;
	height: 180px;
	border: 2px solid orange;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}

#one {
	align-self: flex-start;	
}

#three {
	align-self: flex-end;	
}
```

### **2. خاصية flex-grow فى CSS**  
تُحدد هذه الخاصية مدى قدرة العنصر على التمدد لاحتلال مساحة إضافية متاحة داخل الحاوية.  

- **القيمة الافتراضية:** `0` (العنصر لن يتمدد).  
- **القيمة الإيجابية:** كلما زادت القيمة، زادت نسبة تمدد العنصر مقارنة بالعناصر الأخرى.  


**مثال:**  
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7Dptf0m-Ug7JjEGmfwnutj3QLi5vuq2J-NEu1e8dLf-wLxHXmnTUaO7OQNgH3SD5NzLQ_7zTOryKbo5oIrPkVNUVsoGQnFCV_bRTxztghvGan3TVlpYJ4z-JDnLehMxXDrrU1rKC4iGOvMPpKY09QJ6DXcbhyphenhyphentEeFOuF70lMgKGJf6M8Gkd8XEm4MvLM/s16000/flex-grow.webp"
alt="خاصية flex-grow فى CSS"
title="خاصية flex-grow فى CSS"
/>
<figcaption>خاصية flex-grow فى CSS</figcaption>
</figure>

```css
.container {
	display: flex;
	flex-direction: row;
	border: 2px solid #fff;
	padding: 5px;
	height: 300px;
}

.box {
	background-color: blueviolet;
	color: #fff;
	height: 120px;
	border: 2px solid orange;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}

#one {
	flex-grow: 1; /* تمدد بنسبة 1 */
}

#three {
	flex-grow: 2; /* تمدد بنسبة أكبر */
}
```
إذا وُجدت مساحة إضافية، سيتوسع `three` ليأخذ ضعف المساحة التي يأخذها `one`.  

**ملاحظات مهمة:**
1. يجب الإنتباه عند إستخدام **`flex-grow`** مع **`flex-direction: row`** يجب عدم إستخدام **`width`** لجعل العنصر قابل للتمدد أفقياٌ.
1. يجب الإنتباه عند إستخدام **`flex-grow`** مع **`flex-direction: column`** يجب عدم إستخدام **`height`** لجعل العنصر قابل للتمدد عمودياٌ.

### **3. خاصية flex-shrink فى CSS**  
تُحدد هذه الخاصية مدى قدرة العنصر على التقلص إذا لم تكن هناك مساحة كافية في الحاوية.  

- **القيمة الافتراضية:** `1` (العنصر يتقلص عند الحاجة).  
- **القيمة الصفرية:** `0` تمنع العنصر من التقلص على الإطلاق.  


**مثال:**  
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBtXpYAMcl1P-6gQQh2rlJ0nCCvlb2VhWTYyIsYC9NyWvt38kdE27FSK5GEu4MqK1zNLG0dudi0PePrqlJz9vNyn9ANkQrUSVdqL5z5LtdHITsFNPl8nKMjsk_3vn8-57OcG8IvhRJ6vkCMYFRi5Ulq3aptQoGBgXwkTptmdSkTQKA4MtFAHAYF9Ggt2I/s16000/flex-shrink.webp"
alt="خاصية flex-shrink فى CSS"
title="خاصية flex-shrink فى CSS"
/>
<figcaption>خاصية flex-shrink فى CSS</figcaption>
</figure>

```css
.container {
	display: flex;
	flex-direction: column;
	border: 2px solid #fff;
	padding: 5px;
	height: 300px;
}

.box {
	background-color: blueviolet;
	color: #fff;
	flex-basis: 200px;
	height: 120px;
	border: 2px solid orange;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}

#one {
	flex-shrink: 0; /* لا يتقلص */
}

#three {
	flex-shrink: 1; /* يتقلص بشكل طبيعي */
}
```
في حالة نقص المساحة، ستبقى `one` بحجمها الأصلي، بينما يتقلص `two`, `three` لملاءمة المساحة.  


### **4. خاصية flex-basis فى CSS**  
تُحدد هذه الخاصية الحجم الأساسي للعنصر قبل تطبيق خصائص التمدد أو التقلص (**flex-grow** و **flex-shrink**).  

- **الوحدات المقبولة:** يمكن استخدام القيم مثل `px` أو `%` أو `auto`.  
- **القيمة الافتراضية:** `auto` (الحجم الأساسي يعتمد على المحتوى أو عرض العنصر).  


**مثال:**  
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXtqfkKW2GbWNMg_EXE2C5tpqaoxx-dO4O9rgrlhbXo7LpEzWREw9Q_muR5dd4Y3jzOQIyXRBg38NrAXVJTTOEAly74ReQUcUZPbKtmfbYPQt5zxKZqyUuz6BL0zGCEIG38W0q1j7t7Nsgtb5woNxsQCpK58SXdt6TRXGx6qbSFZFYr8KXakgRyA0bmAY/s16000/flex-basis.webp"
alt="خاصية flex-basis فى CSS"
title="خاصية flex-basis فى CSS"
/>
<figcaption>خاصية flex-basis فى CSS</figcaption>
</figure>

```css
.container {
	display: flex;
	flex-direction: row;
	border: 2px solid #fff;
	padding: 5px;
	height: 300px;
}

.box {
	background-color: blueviolet;
	color: #fff;
	flex-basis: 200px;
	height: 120px;
	border: 2px solid orange;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}

#one {
  flex-basis: 100px; /* الحجم الأساسي 100px */
}

#three {
  flex-basis: 30%; /* الحجم الأساسي نسبة مئوية */
}
```
يتم تحديد حجم العنصر الأساسي، ثم يتم تعديله بناءً على المساحة المتاحة وقيم **flex-grow** و**flex-shrink**.  


### **الجمع بين الخصائص الثلاث معًا: flex**
لجعل الكود أكثر وضوحًا، يمكن دمج الخصائص الثلاثة (**flex-grow**, **flex-shrink**, **flex-basis**) في خاصية واحدة تُسمى **flex**.  

**الصيغة:**  
```css
.item {
  flex: grow shrink basis;
}
```


**مثال:**  
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5XR2-OffcUNDREGK-1fRPWLPB8L873UZ1_E5bpsSX_6YzYNt5bx6WEIFstiQhNXGrsr_jtvT7N2nnARGFMehVsnwk31eA54TgCSXKGOxLuGoGmJLMymx4J3fY3XoBa03uv3VzRPsdp6SzCmNzrX-r-u478YX6PKcbrUrfpt0gvpagPNMVMGEbNhDQ36s/s16000/flex-shorthand.webp"
alt="الجمع بين الخصائص الثلاث معًا: flex"
title="الجمع بين الخصائص الثلاث معًا: flex"
/>
<figcaption>الجمع بين الخصائص الثلاث معًا: flex</figcaption>
</figure>

```css
#one {
  flex: 1 0 100px; /* يتمدد بمقدار 1، لا يتقلص، الحجم الأساسي 100px */
}
```

**خلاصة**  
- **`flex-grow`**: للتحكم في التمدد.  
- **`flex-shrink`**: للتحكم في التقلص.  
- **`flex-basis`**: لتحديد الحجم الأساسي.  


## **خاصية `gap` في Flexbox**

### **ما هي `gap`؟**
- خاصية **`gap`** تُستخدم لتحديد المسافة بين العناصر داخل الحاوية.  
- تعمل مع **Flexbox** و **Grid Layout**، وتوفر طريقة مبسطة لفصل العناصر دون الحاجة إلى هوامش (**margins**).

### **القيم المتاحة لـ `gap`:**
- **`gap: 10px;`**: تُحدد المسافة الموحدة بين العناصر.
- **`row-gap` و `column-gap`**: تُستخدم لتحديد المسافة بين الصفوف أو الأعمدة بشكل منفصل.

**مثال عملي:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDSaJuQDFRBfz92MZPc6zBLK1C-bl5C5iHuGa5ypyR9oqWSnonN_oG18Du3yXqy7A3sL2epLDtOkgyg3X_GnJbERVb8gxfdSz6Aoc_OvcUs5id6DTw5m4rYIlRjbULh_lj-EGUiOCEeOVe5Obw0hCZrVDKowCpZGRzOHGrq7POgJ3PiBqCjF1kpT1bteM/s16000/flex-gap.webp"
alt="القيم المتاحة لـ gap"
title="القيم المتاحة لـ gap"
/>
<figcaption>القيم المتاحة لـ gap</figcaption>
</figure>

**تطبيق المسافة بين العناصر:**
```css
.container {
  display: flex;
  gap: 20px; /* مسافة بين العناصر */
}
```

**تحديد المسافات بين المحاور بشكل منفصل:**
<!-- Image 20 -->
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzffxJCRPv1qkHQA2Yg2lUbDZk0ViwMnb-ViC7SYjDuOr-UKHXWQhOYbfZMDGCoMG_ns1HXEMNi1dZhraTEzXV6BrVUkbX8RJUF0FxZDAyKOuzWWDa6SEg4dmB2PLFqUMg3QLOSSkdQ2wlJhjo9WG5teOVAX8ED8957Tqgmn08Uzlhy17lgaA84YkXfKE/s16000/flex-row-gap-column-gap.webp"
alt="تحديد المسافات بين المحاور بشكل منفصل"
title="تحديد المسافات بين المحاور بشكل منفصل"
/>
<figcaption>تحديد المسافات بين المحاور بشكل منفصل</figcaption>
</figure>

```css
.container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	row-gap: 30px; /* المسافة بين الصفوف */
    column-gap: 10px; /* المسافة بين الأعمدة */
	border: 2px solid #fff;
}

.box {
	background-color: blueviolet;
	color: #fff;
	flex-basis: 25%;
	height: 120px;
	border: 2px solid orange;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}
```

### **لماذا `gap` أفضل من `margin`؟**
- مع **`gap`**، لا تحتاج إلى إضافة هوامش فردية لكل عنصر.  
- تُبسط كتابة الكود وتضمن توزيعًا موحدًا للمسافات بين العناصر.  
- تعمل بشكل مباشر مع الحاويات **Flexbox** و **Grid Layout**.

**تطبيق متقدم باستخدام `gap`:**

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivdW0phETsKbszi5I1Kqrs3LJQOexO2xDzL_moryWcYe0LI3nL7pGi6pAKw3jwnPNdkvBat7zipNdDagnNKk9D6WfGZDh4boISsmbn3c1lYpxMiM3JWtEqyFUMc1cLkb036Bme3o82F4Bnc9h1qeFD4ti8lO69iuIUiJkgUq17SXBU1WbAUhBZCMC36e0/s16000/advanced-flex-gap-example.webp"
alt="تطبيق متقدم باستخدام gap"
title="تطبيق متقدم باستخدام gap"
/>
<figcaption>تطبيق متقدم باستخدام gap</figcaption>
</figure>

```css
.container {
  display: flex;
  flex-wrap: wrap; /* السماح بالتفاف العناصر */
  gap: 15px; /* مسافة موحدة بين العناصر */
  justify-content: center; /* توزيع العناصر في المنتصف */
}
```

**ملاحظات هامة:**
- خاصية `gap` مدعومة في معظم المتصفحات الحديثة، ولكن تأكد من التوافق إذا كنت تستهدف متصفحات قديمة.
- عند الجمع بين `flex-wrap` و `gap`، يتم تطبيق المسافات أيضًا بين العناصر الملتفة.

**باستخدام `flex-basis` و `gap`، يمكن تصميم واجهات مستخدم مرنة ومرتبة بكتابة كود أكثر نظافة وفعالية.**

## **الفرق بين `flex-basis` و `width` في Flexbox**

### **1. خاصية `flex-basis`:**
- تُحدد العرض الابتدائي (أو الطول في المحور الأساسي) للعناصر داخل الحاوية **قبل تطبيق خصائص المرونة** مثل `flex-grow` أو `flex-shrink`.
- تعمل فقط في بيئة Flexbox وتُستخدم لتحديد الحجم المثالي للعنصر في المحور الأساسي.
- القيمة الافتراضية هي **`auto`**، مما يعني أن العنصر سيأخذ حجمه بناءً على محتواه أو أي قيمة محددة مسبقًا في CSS.

### **2. خاصية `width`:**
- تُحدد العرض الثابت للعنصر بغض النظر عن بيئة Flexbox.
- تعمل في أي بيئة (سواء Flexbox أو Grid أو الحاويات العادية).
- إذا كنت تستخدمها مع Flexbox، يمكن أن تتجاوزها خصائص `flex-basis` إذا تم تحديد كلاهما.


## **خصائص إضافية مهمة**

### **1. التعامل مع النصوص الطويلة داخل العناصر**
**المشكلة:** النصوص الطويلة قد تمتد خارج حدود العنصر.  
**الحل:**
- استخدم الخصائص التالية للتحكم في النصوص:

**مثال عملى:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNRRJjnDyuZTDrdmVd_yYLgWUnCaodlLc60UJ8fCQtG03sLMC21cNwwJeytXCtGyqDeR1Ku57JZPHEyj5g3ca3NQauj_bP1HTd3PkifK95y0RyXeS4_dEmDyEUIhUaEveNAFgOBZGfcHQJ33GMYFE2JD-B7zQEWv7ugC4ypED15KLYdSbwr6Qb3ZcaHJ0/s16000/flex-with-long-text.webp"
alt="التعامل مع النصوص الطويلة داخل العناصر فى Flexbox"
title="التعامل مع النصوص الطويلة داخل العناصر فى Flexbox"
/>
<figcaption>التعامل مع النصوص الطويلة داخل العناصر فى Flexbox</figcaption>
</figure>

```html
<div class="container">
    <div class="box" id="one">Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1 Box One - 1</div>
    <div class="box" id="two">Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2 Box One - 2</div>
    <div class="box" id="three">Box Three - 3</div>
</div>
```

```css
#one {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

- سترى فى الصورة أن النصوص تم ترتيبها بشكل أفضل فى العنصر الأول **`one`** بالعكس من ذلك العنصر الثانى سترى أن النصوص خرجت عن السيطرة.

### **2. استخدام Flexbox مع Media Queries**
- يمكن تغيير خصائص Flexbox بسهولة مع Media Queries لإنشاء تصميمات متجاوبة:


**مثال عملى:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyKXGZroX6UUQBQFh1Azx8k2bZmnqvt4G32hpTdEsEitTXMMtDXbx4PfUQKXmAuyZ-CkNBF95O-6fKTbcmlgi_aoUStf0296JaarwjE746oR43jJ4whrc018Qr8iZL0L4K-qeXo-NuGdJmyCW7_9xo3eJnPOiw1rl8sflFQhAY-JNVZwxzmw5-oWf8gcc/s16000/flex-with-media-query.webp"
alt="استخدام Flexbox مع Media Queries"
title="استخدام Flexbox مع Media Queries"
/>
<figcaption>استخدام Flexbox مع Media Queries</figcaption>
</figure>

```css
@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}
```

## **الأخطاء الشائعة وحلولها في Flexbox**

### **1. العناصر لا تصطف بالشكل المطلوب**
**المشكلة:** عند استخدام Flexbox، قد تجد العناصر لا تصطف على المحور الرئيسي أو المحور المتقاطع بالشكل المتوقع.  
**الحل:**
- تأكد من تعيين الخاصية `display: flex` على الحاوية.
- استخدم `justify-content` لتوزيع العناصر على المحور الرئيسي.
- استخدم `align-items` لمحاذاة العناصر على المحور المتقاطع.

### **2. العناصر تتمدد بشكل غير مرغوب فيه**
**المشكلة:** عناصر Flexbox قد تتمدد بشكل غير متوقع، مما يؤدي إلى مظهر غير متناسق.  
**الحل:**
- قم بضبط `flex-grow: 0` إذا كنت لا تريد أن تتمدد العناصر.
- استخدم `flex-basis` لتحديد حجم ثابت للعناصر.

### **3. العناصر لا تلتف عند الحاجة**
**المشكلة:** عند وجود عناصر كثيرة في الحاوية، قد تتكدس العناصر بدلاً من الالتفاف إلى صف جديد.  
**الحل:**
- استخدم `flex-wrap: wrap` لتفعيل التفاف العناصر.
- استخدم `align-content` لتحديد كيفية توزيع الصفوف عند الالتفاف.

### **4. المسافات بين العناصر غير متساوية**
**المشكلة:** بعض العناصر قد تبدو غير متساوية في التوزيع.  
**الحل:**
- استخدم `justify-content: space-between` أو `justify-content: space-around` لتوزيع العناصر بالتساوي.

### **5. التأثيرات غير المرغوب فيها من القيم الافتراضية**
**المشكلة:** Flexbox لديه قيم افتراضية يمكن أن تؤدي إلى نتائج غير متوقعة.  
**الحل:**
- افهم القيم الافتراضية: على سبيل المثال، `flex-shrink` يساوي `1` بشكل افتراضي، مما يعني أن العناصر يمكن أن تتقلص.
- قم بتعديل القيم الافتراضية حسب الحاجة (`flex-shrink: 0` أو `flex-grow: 1`).

## **Flexbox في الحياة العملية**

### **1. إنشاء رأس موقع (Header)**
- تصميم رأس يحتوي على شعار، قائمة تنقل، وأزرار.


**مثال عملى:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir0FrtzNXdjLC2YteYgoLiwvdNDmP3OFOO8YXFpgZec_nYX9PA-eBD1gi-qzUnhAZV3TZyblj7bBJK4QEqLqa0RnCDETkNr-Md8wdx8wqWPm7tZbyrw_Nl3uuapIGpV2gv_1ZYZjHsWjZiAanoho1mRvjzvmV2nfx9lEVxtxIqqXUvsSid3Whnl89xvhs/s16000/header-layout.webp"
alt="إنشاء رأس موقع Header"
title="إنشاء رأس موقع Header"
/>
<figcaption>إنشاء رأس موقع Header</figcaption>
</figure>

**كود HTML**
```html
<header>
    <ul class="container">
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
    </ul>
</header>
```

**كود CSS**
```css
header {
	border: 2px solid #fff;
	padding: 10px;
	width: 70%;
}
.container {
	display: flex;
	justify-content: space-around;
	align-items: center;
}

ul {
	list-style: none;
}
```

### **2. تخطيط البطاقات (Cards)**
- إنشاء شبكة بسيطة من البطاقات باستخدام Flexbox:

**مثال عملى:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisp3HwetlFbxV092WW-pc0Wc3T0sbda3Gw2WUqAzAv-zC5JfFQ0kVbszanVGMujKZDXu1hEWh-XkUWjdWQSEan3BIRgiGN59BYydbiIJvGHizfgG_BsrzX89h8NV3GzvRPWhegzmptN4MaOIaqckskk1oHoSxWBZhq9HoUC6nWxKu-oT7vdIuzvOzSKg0/s16000/cards-layout.webp"
alt="تخطيط البطاقات Cards"
title="تخطيط البطاقات Cards"
/>
<figcaption>تخطيط البطاقات Cards</figcaption>
</figure>

```css
.container {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	border: 2px solid #fff;
	padding: 10px;
}


.box {
	background-color: blueviolet;
	color: #fff;
	flex: 1 1 calc(33.333% - 20px);
	height: 120px;
	border: 2px solid orange;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}
```

### **3. تصميم تذييل (Footer)**
- توزيع المحتوى في التذييل (روابط، حقوق النشر، إلخ):

**مثال عملى:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgThq-mShQuHBurhnjs5vyrNqpTFQwOpn-J97a9qe8Z-tl2n618XDWcHWpEiSG_UKJ7_2j8m2QtiX510pdVYZHG8vu8uZxE6Sz52QxiUYmcSGpWCZ1-YYrK050ePZrbsp8syP25SYCGaz4bDE6mbBq7yvZRwnZrZnWyL1SYz5QgaaQBeZUM0DVJK1ZdZPs/s16000/footer-layout.webp"
alt="تصميم تذييل الموقع Footer"
title="تصميم تذييل الموقع Footer"
/>
<figcaption>تصميم تذييل الموقع Footer</figcaption>
</figure>

**كود HTML**
```html
<footer>
    <div class="container">
    <div>
        <p>FullStackee.com</p>
        <p>
        <img
            width="100px"
            height="100px"
            src="favicon/android-chrome-192x192.png"
            alt="FullStackee Logo"
        />
        </p>
    </div>

    <div>
        <ul>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
        <li>About Us</li>
        <li>Contact Us</li>
        </ul>
    </div>

    <div>
        <ul>
        <li>Article Title One</li>
        <li>Article Title Two</li>
        <li>Article Title Three</li>
        <li>Article Title Four</li>
        </ul>
    </div>
    </div>

    <div class="container">
    Copyright By Mahmoud Adel @2024
    </div>
</footer>
```

**كود CSS**
```css
footer {
    border: 2px solid #fff;
    padding: 10px;
}

.container {
	display: flex;
	justify-content: space-around;
	align-items: center;
    gap: 15px; /* مسافة موحدة بين العناصر */
}

ul {
	list-style: none;
}

ul li {
	margin-bottom: 5px;
}
```

## **المقارنة بين Flexbox و CSS Grid**

### **Flexbox**  
- **أحادي الأبعاد:** يتحكم في التخطيط على محور واحد (رأسي أو أفقي).
- **أفضلية الاستخدام:** تخطيط المكونات داخل صف أو عمود، مثل أشرطة التنقل أو توزيع العناصر بالتساوي.

### **CSS Grid**  
- **ثنائي الأبعاد:** يتحكم في التخطيط على المحورين (رأسي وأفقي).
- **أفضلية الاستخدام:** إنشاء شبكات معقدة أو تصميم صفحات كاملة.

### **متى تستخدم كل منهما؟**
- استخدم **Flexbox** لتخطيط العناصر البسيطة والمكونات الفردية.
- استخدم **CSS Grid** عندما تحتاج إلى تخطيط صفحات أو شبكات متعددة الأعمدة والصفوف.

### **دمج الاثنين معاً**
- يمكن استخدام Flexbox داخل خلايا CSS Grid للحصول على مرونة أكبر:

**مثال عملى:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEik0I9G6bMrAarhIPEQ0mjymYbJfTylze2huA8NMwpA_oCWveEf_Tqjlg7NCSeGKWp5PFfW0krMnrYDpoZ1gDGj28Nn4bbRbarUFOXytOPDWJ3pH_ATIyjWiJjAoIat5qep2sqEP_7ft9o-u-AATutOSBW_1Yas4cFnOu2bTO2mAQYWBlOMv5IMfrvjuGE/s16000/css-grid-with-css-flexbox.webp"
alt="دمج الاثنين معاً CSS Flexbox and CSS Grid"
title="دمج الاثنين معاً CSS Flexbox and CSS Grid"
/>
<figcaption>دمج الاثنين معاً CSS Flexbox and CSS Grid</figcaption>
</figure>

```css
.container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	border: 2px solid #fff;
	padding: 10px;
}

.box {
	background-color: blueviolet;
	color: #fff;
	flex: 1 1 calc(33.333% - 20px);
	height: 120px;
	border: 2px solid orange;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}
```

## **الخاتمة**  
والآن، بعد أن تعرفت على قوة **Flexbox** وكيفية استخدامه لتحقيق تصميمات جذابة ومرنة، حان الوقت لتطبيق ما تعلمته. لا تتردد في تجربة مختلف الخصائص والتلاعب بها لفهم المزيد واكتشاف إمكانياتها. Flexbox ليس مجرد أداة، بل هو حل يغير قواعد اللعبة ويجعل تصميم واجهات المستخدم أمرًا ممتعًا وسهلًا.

انطلق واستمتع بابتكار تصميمات مذهلة تسحر المستخدمين وتجعل عملك أكثر احترافية. تذكر أن الإبداع لا حدود له عندما تمتلك الأدوات المناسبة. حظًا موفقًا في مغامرتك مع Flexbox!
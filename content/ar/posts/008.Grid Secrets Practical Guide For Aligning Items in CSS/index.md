---
title: "هل تحتاج إلى تصميم صفحة ويب احترافية؟ تعلم CSS Grid اليوم!"
date: 2024-12-23
draft: false
slug: "css-grid-design-page-professionally"
description: "تعلم أساسيات Flexbox في CSS لتنظيم وتصميم الصفحات بسهولة. اكتشف كيفية إنشاء تخطيطات مرنة ومتجاوبة بطريقة احترافية."
cascade:
  showReadingTime: true
categories: ['Web Development']
tags: ['Front-End','CSS']
---

هل ترغب في إتقان فن ترتيب العناصر على صفحات الويب بشكل احترافي؟ إذًا، قد حان الوقت لتتعرف على قوة **CSS Grid**! هذه التقنية الثورية تمنحك القدرة على بناء تخطيطات مرنة وسهلة، مما يجعل تصميم صفحات الويب أكثر إبداعًا وكفاءة.

إذا كنت تسعى لإطلاق مشاريع ويب رائعة أو تحسين مواقعك الحالية، فإن CSS Grid هو أداة لا غنى عنها. دعنا نأخذك في رحلة ممتعة لاكتشاف كيف يمكن لهذه التقنية أن تحول طريقة بناء صفحات الويب الخاصة بك!

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3E9hpgI9iuKWCeUJWTq2NomSMEhW6Q8AOWkg3VisOYtTro-56aAkSwiKDhCiL2eZJOYps_lcjViUtkon37dhiqeSKCYJMHayLySh9-94S3eH-QH7SQ4hz1KXNxCkFN067Icy4kyZraY25RN95FfJblnbeAA9j-DCllTkyHAaOKF_NKH5FvXRzhWxA4EY/s16000/css-grid-in-arabic.webp"
alt="هل تحتاج إلى تصميم صفحة ويب احترافية؟ تعلم CSS Grid اليوم"
title="هل تحتاج إلى تصميم صفحة ويب احترافية؟ تعلم CSS Grid اليوم"
/>
<figcaption>هل تحتاج إلى تصميم صفحة ويب احترافية؟ تعلم CSS Grid اليوم</figcaption>
</figure>

## الصفوف والأعمدة في CSS Grid: أساس التصميم الشبكي  
CSS Grid هو نظام تصميم ثنائي الأبعاد يتيح لك تنظيم المحتوى على هيئة **صفوف وأعمدة**، مما يوفر مرونة هائلة لإنشاء تخطيطات تصميمية مبتكرة. الجمع بين الصفوف والأعمدة يتيح لك إنشاء **مناطق مخصصة** يمكن تسميتها واستخدامها لتنظيم المحتوى بطريقة ديناميكية.  

### الخطوة الأولى: تحديد الحاوية  
ابدأ بتحديد خاصية `display: grid;` على العنصر الحاوي (Container). بعد ذلك، استخدم الخصائص `grid-template-rows` و`grid-template-columns` لتحديد عدد وأبعاد الصفوف والأعمدة.  

**كود HTML**
```html
<div class="container">
  <div class="box" id="one">Box One - 1</div>
  <div class="box" id="two">Box Two - 2</div>
  <div class="box" id="three">Box Three - 3</div>
  <div class="box" id="four">Box Four - 4</div>
  <div class="box" id="five">Box Five - 5</div>
  <div class="box" id="sex">Box Sex - 6</div>
</div>
```

**كود CSS**
```css
.container {
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 300px 300px 300px;
	grid-template-rows: 150px 150px;
	grid-gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}

.box {
	background-color: orange;
	color: #000;
	font-weight: bold;
	border: 2px solid #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPxj6bZ6zBNrYe1yAIRowBLBPR-BUTvArPTCrC_xcjzOdtGv6_PuApy2AwvvNZu8FrnLt8FTer67pkFla1fXH6ObU3rN68VwhWCMPgsljF1nNNhKPkACxtH07xmIVgSFclUBZDY6psBbLsUGTS8QQTkxVDJJ47Fxh2TTIwPhXND4L72w_a2IvkZDLM7eQ/s16000/grid-rows-and-columns-example-1.webp"
alt="Rows & Columns in CSS Grid"
title="Rows & Columns in CSS Grid"
/>
<figcaption>Rows & Columns in CSS Grid</figcaption>
</figure>

### المسافات بين العناصر (Gutters)  
لتحديد المسافة بين الصفوف والأعمدة، يمكنك استخدام خاصية `grid-gap` (أو `gap` في الإصدارات الحديثة). هذه الخاصية تُعرف أيضًا باسم "المزاريب"، وهي تضمن توزيعًا منظمًا للعناصر داخل الشبكة.  
- على سبيل المثال، إذا حددت قيمة `10px` للـ `grid-gap`، فإن المسافة بين كل صف وعمود ستكون 10 بكسل.  

### إعداد الشبكة: تحليل المثال السابق  
- سيكون لدينا شبكة تحتوي على **ثلاقة أعمدة وثلاثة صفوف**. في هذه الحالة:
    1. كل عمود سيكون 300 بكسل.
    2. كل سف سيكون 150 بكسل.
- لتوسيع الشبكة لتحتوي على **ثلاثة أعمدة**:
    1. استخدم الخاصية `grid-template-columns` وحدد القيم لكل عمود (مثال: `300px 300px 300px`).
    2. إذا تجاوزت الأبعاد عرض الشبكة، قم بزيادة عرض الشبكة باستخدام `width: 100%;` لضمان احتواء العناصر داخلها.

من خلال **grid-template-rows** و**grid-template-columns**، يمكنك إنشاء شبكات معقدة تناسب احتياجات موقعك. هذه الشبكة يمكن أن تضم صفوفًا وأعمدة بأحجام مختلفة بناءً على طبيعة المحتوى.  

## **التحكم في المساحات التي تشغلها العناصر في CSS Grid**

في **CSS Grid**، يمكنك التحكم في المساحات التي يشغلها كل عنصر داخل الشبكة باستخدام خصائص مثل:

### **1. `grid-row-start` و `grid-column-start`**
- **`grid-row-start`**: تحدد بداية العنصر على المحور العمودي (الصفوف).
- **`grid-column-start`**: تحدد بداية العنصر على المحور الأفقي (الأعمدة).

### **2. `grid-row-end` و `grid-column-end`**
- **`grid-row-end`**: تحدد نهاية العنصر على المحور العمودي.
- **`grid-column-end`**: تحدد نهاية العنصر على المحور الأفقي.

**طريقة الاستخدام**  
تتيح لك هذه الخصائص تحديد المواضع التي يبدأ وينتهي فيها العنصر باستخدام أرقام خطوط الشبكة أو كلمات مفتاحية مثل **`span`** لتمديد العنصر عبر عدد معين من الصفوف أو الأعمدة.

**مثال عملي**

**كود HTML:**
```html
<div class="container">
  <header id="header">Header</header>
  <aside id="sidebar">Sidebar</aside>
  <main id="main">Main</main>
  <footer id="footer">Footer</footer>
</div>
```

**كود CSS:**
```css
.container {
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 150px 150px 150px 150px;
	grid-gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}

.container > * {
	background-color: orange;
	color: #000;
	font-weight: bold;
	border: 2px solid #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}

#header {
	grid-column-start: 1;
	grid-column-end: 4;
}

#sidebar {
	grid-column-start: 1;
	grid-column-end: 2;
	/* grid-row-start: 2;
	grid-row-end: 4; */
  grid-row: span 2;
}

#main {
	grid-column-start: 2;
	grid-column-end: 4;
	/* grid-row-start: 2;
	grid-row-end: 4; */
  grid-row: 2 / 4;
}

#footer {
	/* grid-column-start: 1;
	grid-column-end: 4; */
  grid-column: 1 / 4;
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNHPKnfmJwb1fMbf7PWjMu24lO1u0YMWGtUEHf10_wTllXwKAB3tYB7lQfSFGUNE3rGrnKnqqRDW5QK-8-hQCiB8orwuPxZNdfAqK8ABfNXH0Cn0MrHElDJIS5w03kvRUvjvReXjo3jbCqNvuYC9HwRhLESnXtDArkxsc-gqdXpNXZ7mnRUWorFDPzFJ4/s16000/grid-row-and-grid-column-start-end.webp"
alt="CSS Grid Row & Column (Start and End)"
title="CSS Grid Row & Column (Start and End)"
/>
<figcaption>CSS Grid Row & Column (Start and End)</figcaption>
</figure>

**شرح الكود**

- **`grid-row-start` و `grid-column-start`**:
    1. تحدد مكان بداية العنصر في الشبكة.
    2. على سبيل المثال، عنصر **Item 1** يبدأ من الصف الأول والعمود الأول.
- **`grid-row-end` و `grid-column-end`**:
    1. تحدد مكان نهاية العنصر.
    2. على سبيل المثال، عنصر **Item 1** يمتد إلى الصف الثالث والعمود الثالث.
- **إختصار `grid-row`**:
    1. تحدد مكان بداية ونهاية العنصر فى الصفوف.
    2. يفصل بين القيمتين بالفاصلة `/`.
    3. على سبيل المثال عنصر **main**.
- **إختصار `grid-column`**:
    1. تحدد مكان بداية ونهاية العنصر فى الأعمدة.
    2. يفصل بين القيمتين بالفاصلة `/`.
    3. على سبيل المثال عنصر **footer**.
- **`span`**:
    1. يمكن استخدام **`span`** لتحديد عدد الصفوف أو الأعمدة التي يجب أن يمتد إليها العنصر.
    2. على سبيل المثال، عنصر **sidebar** يمتد عبر صفين.

**نصيحة إضافية**  
لتحقيق أقصى استفادة، يمكن دمج هذه الخصائص مع **`grid-template-areas`** للحصول على شبكة أكثر تنظيماً وسهولة في التعديل.

## المناطق الشبكية (Grid Areas) في CSS Grid

إحدى أقوى ميزات CSS Grid هي القدرة على تحديد مواقع العناصر داخل الشبكة باستخدام مفهوم **المناطق الشبكية (Grid Areas)**. تسمح لك هذه الميزة بوضع العناصر بمرونة عبر الصفوف والأعمدة باستخدام أسماء مخصصة.

### ما هي المناطق الشبكية؟
المناطق الشبكية هي اختصار يتيح لك تحديد المساحات التي تشغلها العناصر عبر خصائص مثل:
- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

بدلاً من استخدام هذه الخصائص بشكل منفصل، يمكنك استخدام **أسماء مناطق مخصصة** تُعين للعناصر من خلال الخاصية `grid-area`. 

### كيف تعمل المناطق الشبكية؟
لإنشاء شبكة تحتوي على مناطق مسماة:
1. **استخدم خاصية `grid-template-areas`** لتحديد تخطيط الشبكة باستخدام سلاسل نصية.
2. قم بإعطاء كل عنصر داخل الشبكة معرفًا (ID) أو اسمًا يتطابق مع اسم المنطقة المخصصة في الشبكة.

**مثال عملي**  
إذا كنت تصمم **مدونة بسيطة**، يمكن إعداد تخطيط يتضمن:
- رأس (Header) يمتد عبر العرض الكامل.
- شريط جانبي (Sidebar) على اليسار.
- محتوى رئيسي (Main Content) في المنتصف.
- تذييل (Footer) في الأسفل.

ليكتمل التصميم النهائى بالشكل الأتى.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizMsayUXFcSdGl97YaGZ8tKooVAlOC7yJhguzMm_rp7zioX1jZda3yqaCjTHvHTkQJbKudOJl0wOok5QI0vxfmRO-wDrdWViTJX0pubrn9MRjszy1qqShOtE1psrEHC1LmzwxQhawtDu6i3CLG3Cwst_w-8UQdJSlwvsHqUchow8NhfOVTElryJ-oN8O4/s16000/grid-areas.webp"
alt="Grid Areas"
title="Grid Areas"
/>
<figcaption>Grid Areas</figcaption>
</figure>

**كود HTML**
```html
<div class="container">
  <header id="header">Header</header>
  <aside id="sidebar">Sidebar</aside>
  <main id="main">Main</main>
  <footer id="footer">Footer</footer>
</div>
```

**كود CSS**  
إعداد الشبكة باستخدام `grid-template-areas` مع بعض الألوان للتمييز:
```css
.container {
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 150px 150px 150px 150px;
	grid-template-areas: 
	"header header header"
	"sidebar main main"
	"sidebar main main"
	"footer footer footer";
	grid-gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}

.container > * {
	background-color: orange;
	color: #000;
	font-weight: bold;
	border: 2px solid #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}
```

تعيين المناطق للعناصر:
```css
#header {
	grid-area: header;
}

#sidebar {
	grid-area: sidebar;
}

#main {
	grid-area: main;
}

#footer {
	grid-area: footer;
}
```

- تأكد من أن عدد الأعمدة في جميع الصفوف متسق في `grid-template-areas`.
- يمكنك ضبط أبعاد الأعمدة والصفوف لتناسب احتياجاتك باستخدام `grid-template-columns` و`grid-template-rows`.

## الشبكة المتقدمة (Advanced Grid) في CSS

تُعد شبكة CSS من أقوى الأدوات في تصميم الويب، حيث توفر لك تحكمًا دقيقًا في كيفية ترتيب المحتوى في الصفحة. مع وجود العديد من الميزات المتقدمة، قد يصبح الأمر مربكًا بعض الشيء، ولكن هذه الميزات توفر لك إمكانيات قوية لإنشاء تخطيطات ديناميكية وسهلة التخصيص. من بين هذه الميزات المتقدمة:

### **1. وحدة `fr`**
وحدة `fr` هي وحدة خاصة في CSS Grid تسمح لك بتوزيع المساحة المتاحة على الشبكة. على سبيل المثال، إذا أردت أن تحتل العناصر المساحة المتبقية من الشبكة بعد تخصيص المساحات الثابتة للأجزاء الأخرى، يمكنك استخدام `1fr` لتحديد أن العنصر يجب أن يأخذ حصة من المساحة المتبقية.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIoioyIwzvPiWsofpGuZavm6AkNQKVsN_V-jFtvdVE1OU3bx6iMrEWONTb3cD11V_iavSIiGucPIGDBepRohN4eknwGNjyjadjGxseUrwoArDEmhEq4CWmiCZ0-Bbidt1Cbi4u92QtSZe2AX5_nUvlizKXs2U309_c7yx8ET3Mcpk2eGQ_FRlr6Koofcs/s16000/css-grid-fr-unit.webp"
alt="Fr Unit in CSS Grid"
title="Fr Unit in CSS Grid"
/>
<figcaption>Fr Unit in CSS Grid</figcaption>
</figure>

**كود HTML:**  
```html
<div class="container">
  <div class="box" id="one">Box One - 1</div>
  <div class="box" id="two">Box Two - 2</div>
  <div class="box" id="three">Box Three - 3</div>
  <div class="box" id="four">Box Four - 4</div>
  <div class="box" id="five">Box Five - 5</div>
  <div class="box" id="sex">Box Sex - 6</div>
</div>
```

**كود CSS:**  
```css
.container {
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 150px 150px 150px;
	grid-gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}

.box {
	background-color: orange;
	color: #000;
	font-weight: bold;
	border: 2px solid #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}
```

### **2. استخدام `repeat` لتكرار الأعمدة**
بدلاً من كتابة `1fr` لكل عمود، يمكننا استخدام خاصية `repeat` لتكرار الأعمدة وتسهيل كتابة الكود:
```css
.container {
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 150px 150px 150px;
	grid-gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6GbSDMmRRW7sutGOWMsP1NIeamTVFiBZdp9fv3H9_q98sOqQrR-oAqOcI3ry5JlLqnLEOiNODxboqJ261rdSnX4VTWaXA7YP3AJ8weVBK5rVP5QZMLKYR43axzCnP6xNLJ9al4YB83KkUX6NtlcmwF4RouIsEeM8rLIWDhaUXbZiIldBKvdqODk1WuIk/s16000/css-grid-repeat.webp"
alt="Repeat in CSS Grid"
title="Repeat in CSS Grid"
/>
<figcaption>Repeat in CSS Grid</figcaption>
</figure>

هذا الكود يكرر `1fr` لثلاثة أعمدة، مما يجعل الكود أكثر نظافة وقوة.

### **3. استخدام `minmax`**
يمكنك تحديد حد أدنى وأقصى للمسافة التي يمكن أن يشغلها الصف أو العمود باستخدام خاصية `minmax`. تتيح لك هذه الخاصية إنشاء تخطيطات مرنة حيث يمكنك تحديد القيم الدنيا والقصوى للأبعاد، بحيث يظل العنصر داخل هذه الحدود بغض النظر عن المحتوى.

**مثال عملي**

لنأخذ مثالًا لتوضيح كيفية استخدام هذه الميزات:
```css
.container {
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, minmax(150px, auto));
	grid-gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFc4-IPnOgcunWzlyJ_4BcOsabtzyG0d8cW5_hW_mmWTxbTQFSqA-XwBgBYTFwTTmtQbKVy_ii3xs-VFGiY3KNfaebuJQhAuCs4WBHGGbAq2Kh5NMI4EMIVTT95aojOYUdnfR5KdIuJ1e_0aHxMsj8_h_FZXjmj6qmFzhvk-bS8pDHm8zNCxOTeh7UylU/s16000/css-grid-minmax.webp"
alt="Minmax in CSS Grid"
title="Minmax in CSS Grid"
/>
<figcaption>Minmax in CSS Grid</figcaption>
</figure>

في هذا المثال:
- **`grid-template-rows`**: يتم تخصيص الصفوف الثلاثة بارتفاع 150 بكسل كحد أدنى، بينما إذا زاد المحتوى داخل الصندوق يتمدد ليحافظ على المحتوى داخله.
- **`grid-template-columns`**: يتم تقسيم الأعمدة إلى ثلاثة أعمدة متساوية باستخدام `repeat(3, 1fr)`.

### **4. الصفوف التلقائية باستخدام `grid-auto-rows`**
إذا كنت تريد أن تكون الصفوف ديناميكية، بحيث تتكيف مع المحتوى، يمكنك استخدام `grid-auto-rows` مع `minmax`. هذه الطريقة مفيدة عندما لا تعرف مسبقًا عدد الصفوف التي ستكون موجودة (مثلما يحدث في خلاصة الأخبار على Facebook).

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikoiu5di1r-Jy8ZpgX_3Ow4KWTb6YDUXU_bcIwwCJ9rvOqqfnKQ9IZ4HBM-JBvnZkilvl5n4sakbWXXkCJHsjV012cnyyznazgCBTRqHDI7kYv911VxGB6nxQ_sntuku3ZRu5FqpZ-dTNzB3B6GWKQbb3PBxrDNbXi0NQYuv6jPvUyECJPWnLcMQiQs-M/s16000/css-grid-auto-rows.webp"
alt="Auto Rows in CSS Grid"
title="Auto Rows in CSS Grid"
/>
<figcaption>Auto Rows in CSS Grid</figcaption>
</figure>

**كود HTML:**
```html
<div class="container">
  <div class="box">Box</div>
  <div class="box">Box</div>
  <div class="box">Box</div>
  <div class="box">Box</div>
  <div class="box">Box</div>
  <div class="box">Box</div>
  <div class="box">Box</div>
  <div class="box">Box</div>
  <div class="box">Box</div>
  <div class="box">Box</div>
  <div class="box">Box</div>
  <div class="box">Box</div>
</div>
```

**كود CSS:**
```css
.container {
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 250px);
	grid-auto-rows: minmax(150px, auto);
	grid-gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKA3eBmd2p05UkZvyj5VCIk8L0cfmPIq3SPfMdyIqJqAdYU0OIusKKFxkjKC1CU1y4DD1nvp2hx90D9ZdHX2MbPiYdjjhsisXwm4bCykkJmmWYx1yvqCWHILmDydmyjxPUvvj6CBxCV3ukEdfFOWyAm4_ut5hS6kWQMCNKlgnBD7zHpxwMWkbJasXp1x8/s16000/css-grid-auto-rows-with-long-content.webp"
alt="Auto Rows with Long Content in CSS Grid"
title="Auto Rows with Long Content in CSS Grid"
/>
<figcaption>Auto Rows with Long Content in CSS Grid</figcaption>
</figure>

هنا، **`minmax(150px, auto)`** تعني أن كل صف سيكون له ارتفاع لا يقل عن 150 بكسل، ولكن يمكن أن يكون أكبر إذا كان المحتوى يتطلب ذلك.

### **5. الأعمدة التلقائية باستخدام `grid-auto-columns`**

خاصية **`grid-auto-columns`** في **CSS Grid** تُستخدم لتحديد حجم الأعمدة التي يتم إنشاؤها تلقائيًا عندما يحتاج المحتوى إلى أعمدة إضافية لا تتوفر في تعريف الشبكة الأساسي. 

- **وظيفتها**: تحدد عرض الأعمدة التلقائية التي يتم إنشاؤها عند إدراج عناصر خارج الشبكة المحددة.
- **متى تُستخدم؟**: عندما يحتوي العنصر على أعمدة تتجاوز الأعمدة المحددة في الخاصية **`grid-template-columns`**.

**مثال عملى:**

**كود HTML:**
```html
<div class="container">
  <div class="box" id="one">Box One - 1</div>
  <div class="box" id="two">Box Two - 2</div>
  <div class="box" id="three">Box Three - 3</div>
  <div class="box" id="four">Box Four - 4</div>
  <div class="box" id="five">Box Five - 5</div>
  <div class="box" id="sex">Box Sex - 6</div>
</div>
```

**كود CSS:**
```css
.container {
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-rows: repeat(3, 150px);
	grid-template-columns: repeat(3, 1fr);
	grid-auto-columns: 100px;
	grid-gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}

#four {
	grid-column: 4;
}

#five {
	grid-column: 5;
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBqMS5-deI_15a704YrU_O8w2V7HP6VnA51CHvaKRW7khf_QslgTmnoJTsb_acnQBgTiAjoF_dqDmLkRZ2M3KKEkuO94dtqZ-ZXgeSx-qzsWeecsFQA6gf-FHDUyonxtH9yU7jyO7fX6ZF6plb2ab_TcKgHWBjWSFU3Ug3_qeM2_fZzrT-KyA4fCNslvc/s16000/css-grid-auto-columns.webp"
alt="Auto Columns in CSS Grid"
title="Auto Columns in CSS Grid"
/>
<figcaption>Auto Columns in CSS Grid</figcaption>
</figure>

**شرح الكود**
- **`grid-template-columns`**:
    - يحدد ثلاث أعمدة بحجم ثابت **1fr**.
- **`grid-auto-columns`**:
    1. يحدد عرض الأعمدة التلقائية ليكون **100px**.
    2. عندما يحتاج العنصر الرابع والخامس إلى أعمدة إضافية خارج الأعمدة المحددة، يتم إنشاء أعمدة تلقائية بعرض 100px.
- **`grid-column`**:
    1. تستخدم لتحديد مكان العنصر على الشبكة.
    2. **four** و **five** يمتدان إلى الأعمدة التلقائية.

**تخصيص الأعمدة التلقائية**

يمكنك استخدام وحدات مختلفة لتخصيص عرض الأعمدة التلقائية، مثل:
- **نسبة مئوية (%):** `grid-auto-columns: 25%;`
- **الوحدات المرنة (fr):** `grid-auto-columns: 1fr;`
- **قيم ثابتة:** `grid-auto-columns: 200px;`
- **القيم الأدنى والأقصى:** `grid-auto-columns: minmax(100px, 1fr);`


**فوائد `grid-auto-columns`**

- تحسين تخطيط الشبكات الديناميكية.
- تقليل التعقيد عند التعامل مع محتوى يتجاوز التعريف الأساسي.
- توفير المرونة لتوسيع الشبكة بشكل منظم.

**نصيحة إضافية**  
- لا تستخدم الأعمدة التلقائية إذا كنت تعرف مسبقًا عدد الأعمدة المطلوبة؛ استخدم **`grid-template-columns`** بدلاً من ذلك لتحقيق تخطيط ثابت ومنظم.

### **6. خاصية `grid-auto-flow`**
**تعريفها:**  
تُحدد اتجاه إضافة العناصر الجديدة تلقائيًا (الصفوف أم الأعمدة).

**القيم المتاحة:**
- `row`: الإضافة للصفوف.
- `column`: الإضافة للأعمدة.
- `dense`: تعبئة المساحات الفارغة.

**مثال عملي:**  
**كود HTML**  
```html
<div class="container">
  <div class="box" id="one">Box One - 1</div>
  <div class="box" id="two">Box Two - 2</div>
  <div class="box" id="three">Box Three - 3</div>
  <div class="box" id="four">Box Four - 4</div>
  <div class="box" id="five">Box Five - 5</div>
  <div class="box" id="sex">Box Sex - 6</div>
  <div class="box" id="seven">Box Seven - 7</div>
</div>
```

**كود CSS:**  
```css
.container {
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-rows: repeat(3, 150px);
	grid-template-columns: repeat(3, 1fr);
	grid-auto-columns: 100px;
	grid-auto-flow: column dense;
	grid-gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOLPCJAzwB08-_i-O0cVGh_tPCKXkJCpkGjxiUzLx-vAsgdKs8FxEHmRgBjfmyx2ZLlZUsL7wT1RgFwNO8DqnxhAE4LEXzNCo_Hq4eTEF91f8DdMdbiFoDigzLRfy3codz1jPZ9WyHnBfLebQsT2MpcMCb6hMB4cVdlamMXxpIsTEAQqD4FVnUiJCYF2Q/s16000/css-grid-auto-flow-column.webp"
alt="Auto Flow in CSS Grid"
title="Auto Flow in CSS Grid"
/>
<figcaption>Auto Flow in CSS Grid</figcaption>
</figure>

- يتبين من خلال الصورة السابقة أن العناصر الجدسدة يتم إضافتها للأعمدة وليس للصفوف.

### **7. خاصية `grid` (مختصرة)**
**تعريفها:**  
اختصار لخصائص مثل: `grid-template-rows`, `grid-template-columns`, و`grid-template-areas`.

**القيمة:**

```css
  grid: 
    "header header" 50px
    "sidebar main" auto
    "footer footer" 50px
    / 150px 1fr;
```

**مثال عملي:**
```html
<div class="container">
  <header id="header">Header</header>
  <nav id="sidebar">Sidebar</nav>
  <main id="main">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit consectetur laborum distinctio expedita, voluptatem ex consequatur delectus in excepturi voluptatibus recusandae quo autem obcaecati, repudiandae, eos iure quos veniam dolorem.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In praesentium quo temporibus illo. Dolores eveniet ad pariatur! Incidunt, deserunt. Magni autem atque possimus id voluptas similique, facere perspiciatis dicta tenetur!
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam quidem temporibus. Rerum in ipsam perspiciatis omnis pariatur quaerat, quas, ratione laudantium id itaque dolorem totam nobis adipisci unde quo.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam quidem temporibus. Rerum in ipsam perspiciatis omnis pariatur quaerat, quas, ratione laudantium id itaque dolorem totam nobis adipisci unde quo.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam quidem temporibus. Rerum in ipsam perspiciatis omnis pariatur quaerat, quas, ratione laudantium id itaque dolorem totam nobis adipisci unde quo.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam quidem temporibus. Rerum in ipsam perspiciatis omnis pariatur quaerat, quas, ratione laudantium id itaque dolorem totam nobis adipisci unde quo.</p>
  </main>
  <footer id="footer">Footer</footer>
</div>
```
```css
.container {
  display: grid;
  grid: 
    "header header" 50px
    "aside main" 1fr
    "footer footer" 50px
    / 200px 1fr;
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUPj70S-T4KX0tFCpO7f5DhreLMWC14X40AWhyphenhyphenoPxjcOmRGkzwpiHwanzha_1mtpV-rRkbmbBqB6vp0uoTckeIUwHL04dLgYhrAvBNhyoDeKHJzF1w3gDVsrK3vYCMgkEZ3ndG2eMzBJjw6nFTRX2BWFUrckai5crDpdhyphenhyphenpv9_oJRTLpDykGOMH5z5MUo/s16000/css-grid-shorthand.webp"
alt="Grid Property in CSS Grid"
title="Grid Property in CSS Grid"
/>
<figcaption>Grid Property in CSS Grid</figcaption>
</figure>

**شرح الكود:**  
```css
"header header" 
"sidebar main" 
"footer footer"
```

- يتم تقسيم الشبكة إلى ثلاثة صفوف:
  - **الصف الأول:** يحتوي على منطقتين باسم **`header`**، مما يعني أن الرأس يمتد على عرض الشبكة بالكامل.
  - **الصف الثاني:** يحتوي على منطقتين هما **`sidebar`** و **`main`**. 
    - **`sidebar`** يمثل الشريط الجانبي.
    - **`main`** يمثل المنطقة الرئيسية للمحتوى.
  - **الصف الثالث:** يحتوي على منطقتين باسم **`footer`**، مما يعني أن التذييل يمتد على عرض الشبكة بالكامل.

```css
50px auto 50px
```

- **الصف الأول:** ارتفاعه ثابت بـ **50px**.
- **الصف الثاني:** ارتفاعه **تلقائي (auto)**، بحيث يتكيف مع المحتوى بداخله.
- **الصف الثالث:** ارتفاعه ثابت بـ **50px**.

```css
150px 1fr
```

- **العمود الأول:** عرضه ثابت بـ **150px** (عادةً مخصص للشريط الجانبي).
- **العمود الثاني:** عرضه مرن باستخدام **`1fr`** (يمثل نسبة مرنة، ويشغل المساحة المتبقية من الشبكة).

### 8. الفرق بين **`grid-gap`** و **`gap`** في CSS

- **1. `grid-gap` (القديم)**

**الوصف**: خاصية كانت تُستخدم في CSS Grid لتحديد المسافات بين الصفوف والأعمدة في الشبكة.

**المحددات**:
  - `grid-row-gap`: لتحديد المسافة بين الصفوف.
  - `grid-column-gap`: لتحديد المسافة بين الأعمدة.
  - أو يمكن استخدام **`grid-gap`** لتحديد المسافتين معًا.

**الاعتماد**: هذه الخاصية تُعتبر قديمة وتم استبدالها بـ `gap` في CSS الحديثة.

**مثال**:
```css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 10px; /* 20px للمسافات بين الصفوف و10px للأعمدة */
  }
```

- **2. `gap` (الحديث)**

**الوصف**: خاصية جديدة ومُحسّنة يمكن استخدامها مع كل من **CSS Grid** و **Flexbox**، مما يجعلها أكثر شمولية.

**المحددات**:
  - **`row-gap`**: لتحديد المسافة بين الصفوف.
  - **`column-gap`**: لتحديد المسافة بين الأعمدة.
  - أو يمكن استخدام **`gap`** لتحديد القيمتين معًا.
**الميزة**: `gap` متوافقة مع تصميمات الشبكات (**grid**) وتصميمات الصناديق المرنة (**flexbox**)، مما يوفر مرونة أكبر.

**مثال**:
```css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 10px; /* نفس التأثير مثل grid-gap */
  }
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTPSc4yV-a1JvsR0G-h9K8Hgg_i_dyVUODT-s4vVI4i83cwTJ4pnKzIVKsdAXhMxpwZrZX1dV_8t81AdMEMdWegBqWNFmdeC_UPVIa26lvIP800g-iaKW7p28fvdTVJLJzdOaPQu15AVMbRNlfR8aA_pkiKH1Nn35ZKbXkPHE-bXy5nlWAIRnEgQJmyeo/s16000/css-grid-gap.webp"
alt="Gap in CSS Grid"
title="Gap in CSS Grid"
/>
<figcaption>Gap in CSS Grid</figcaption>
</figure>

**أفضلية الاستخدام**

- **`gap`** هي الأفضل لأنها معيار حديث وتعمل مع كل من **Flexbox** و **Grid**، مما يجعلها الخيار الأمثل للتصميمات المستقبلية.
- إذا كنت تعمل على كود قديم يحتوي على **`grid-gap`**، فمن الأفضل تحديثه لاستخدام **`gap`** لضمان التوافقية مع المتصفحات الحديثة.

**ملاحظة عن الدعم**

- **`gap`** مدعومة من معظم المتصفحات الحديثة، بما في ذلك Edge وFirefox وChrome وSafari.
- إذا كنت تستهدف متصفحات قديمة، فقد تحتاج إلى اختبار الكود لضمان التوافق.

## **خصائص توزيع العناصر بإستخدام CSS Grid**

### 1. **خاصية align-content**
تتحكم في توزيع الشبكة بالكامل على المحور العمودي.
**كود HTML:**
```html
<div class="container">
  <div class="box" id="one">Box One - 1</div>
  <div class="box" id="two">Box Two - 2</div>
  <div class="box" id="three">Box Three - 3</div>
  <div class="box" id="four">Box Four - 4</div>
</div>
```

**كود CSS:**
```css
.container {
	width: 90%;
  height: 400px;
	margin: 0 auto;
	display: grid;
	grid-template-rows: repeat(2, 100px);
  grid-template-columns: repeat(2, 100px);
  align-content: center;
	gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}

.box {
	background-color: orange;
	color: #000;
	font-weight: bold;
	border: 2px solid #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;	
}
```

- إرتفاع الحاوية مساحتها 400px.
- تأثير المحاذاة العمودية `align-content` فى المنتصف.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl4nWtFHsWaqAAA4wAHjL-4I-mmeyI0H3GpV-G5qxHAdrQoFeiWGvd0ve4n3yxNqT-qmuStV_cLYgbOhcFWgo7LI38aVuJTb7D5_871LXiEelBDnNo4JEX9J7wFo0UprwTsKgw6RbbhbCWbyDblWikoYknKdvjZqKGlEfNn6oplBfAHGPSFx_3FyAbN5g/s16000/css-grid-align-content.webp"
alt="Align Content in CSS Grid"
title="Align Content in CSS Grid"
/>
<figcaption>Align Content in CSS Grid</figcaption>
</figure>

### 2. **خاصية justify-content**
تتحكم في توزيع الشبكة بالكامل على المحور الأفقي.

```css
.container {
	width: 90%;
  height: 400px;
	margin: 0 auto;
	display: grid;
	grid-template-rows: repeat(2, 100px);
  grid-template-columns: repeat(2, 100px);
  justify-content: center;
	gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKbdxXOPMVfyMzZYLmuPyTkWdFipHQuGv1I7nnm45TqsSfMsg-22KTPCBePdcQSmmuMzubbnlZgvRsJVl8y8ltKaQUle7-lWkAXfPcpSidzakfAdyFWdY-Pc6nlHif0U5ONqsggXw29BM7hiuu0TiHRIyS7g_gkmNLgGwaeVFegr8rPpHF-AkGuaU8n9o/s16000/css-grid-justify-content.webp"
alt="Justify Content in CSS Grid"
title="Justify Content in CSS Grid"
/>
<figcaption>Justify Content in CSS Grid</figcaption>
</figure>

- إرتفاع الحاوية مساحتها 400px.
- تأثير المحاذاة أفقياٌ `justify-content` فى المنتصف.

### 3. **خاصية place-content**
اختصار لـ `align-content` و `justify-content`.
```css
.container {
	width: 90%;
  height: 400px;
	margin: 0 auto;
	display: grid;
	grid-template-rows: repeat(2, 100px);
  grid-template-columns: repeat(2, 100px);
  place-content: center space-between;
	gap: 10px;
	border: 2px solid #fff;
	padding: 10px;
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEib78p4mcEKOr7i8pJZMglVSI3M0oPhhdQzQoQprtehqV5E2KccWn-O6CrDWfc6ISM7h9BJrTK1t71_BcKBBBR5T1NJUEuPPelHCV6VU8t58sFnqf4Q5sr-8qNCJsc5rLWXJn1K2aI-unrvYVK7xAk55shwTpkYhwSEFRGLaGm07X7oGY3wIbtQX66TuNw/s16000/css-grid-place-content.webp"
alt="Place Content in CSS Grid"
title="Place Content in CSS Grid"
/>
<figcaption>Place Content in CSS Grid</figcaption>
</figure>

### 4. **خاصية align-self**
تُحدد محاذاة العنصر على المحور العمودي (داخل الصف).
- القيم:  
    - `start`.
    - `end`.
    - `center`.
    - `stretch`.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibb6IF7oeauzfZMtltqx_mLuRXXvCftDBmByKuo5S7N0E6lES1D4vT4oMsab9RfgdAnykkT88YTKWrpSrFtj9F5hbhpTYEW1DJpqoz_dI8WQV0WfXlekD9tyqrFHsV4rMHmvaFCtuP-yPMzxqNRto5fjKSYhmGaLNgPxKiQmKvBj7yttKHOTgMxfhIhFg/s16000/css-grid-align-self.webp"
alt="Align Self in CSS Grid"
title="Align Self in CSS Grid"
/>
<figcaption>Align Self in CSS Grid</figcaption>
</figure>

```css
.container {
	width: 90%;
  height: 400px;
	margin: 0 auto;
	display: grid;
	grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	justify-content: center;
	align-content: center;
	align-items: center;
	justify-items: center;
	border: 2px solid #fff;
	padding: 10px;
}

#one, #two {
	align-self: start;
}

#three, #four {
	align-self: end;
}
```

### 5. **خاصية justify-self**
تُحدد محاذاة العنصر على المحور الأفقي (داخل العمود).
- القيم:  
    - `start`.
    - `end`.
    - `center`.
    - `stretch`.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBJavv6gpVJ_3damvNHUocvfiDBk_gnZ4Q9FQt-xnMlUyz-cApaHq2rZg0Kmq3oFp5aN5GOgOMLzZKfiHJG_dQh6Gz0dGmAwO4VSMx-HlJXgE8SKOgCZaNtT5ZDx4zJX3cKQkRKNq0awztAIeigXBUDyM5clJTZ02K0lesNZp4f_F-NBmk7A6Iw3XCosc/s16000/css-grid-justify-self.webp"
alt="Justify Self in CSS Grid"
title="Justify Self in CSS Grid"
/>
<figcaption>Justify Self in CSS Grid</figcaption>
</figure>

```css
#one, #two {
	justify-self: start;
}

#three, #four {
	justify-self: end;
}
```
  
### 6. **خاصية place-self**
اختصار لـ `align-self` و `justify-self`.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcUOwaQ0sZYvQOUF1NZYj47eLBoBTggHDx1GhOIRLejBzIZeL3kTepvr5hVwiHFXW3IT-tJU2ofHTvSkhBn-tVwaVw9rwgpv2sGNw15otMi0P01UYRhSRKrZSwU1Z9EBl3MM9B1-FoFjetK7IqUkgbEJiO65DyPu2ZpqhOE-VfBH5tZ_1qlEFi_m4nwjo/s16000/css-grid-place-self.webp"
alt="Place Self in CSS Grid"
title="Place Self in CSS Grid"
/>
<figcaption>Place Self in CSS Grid</figcaption>
</figure>

```css
#one, #two {
	place-self: center start;
}

#three, #four {
	place-self: center end;
}
```

## الفرق بين CSS Grid و Flexbox: معركة الأساليب الحديثة!  

مرحباً بكم في المقارنة التي ينتظرها الجميع بين اثنين من أعظم أدوات تصميم واجهات الويب: **CSS Grid** الوافد الجديد الذي أحدث ثورة في تصميم الشبكات، و**Flexbox** الأسلوب المخضرم الذي غيّر قواعد اللعبة سابقاً.  

ولكن دعونا ننهي التكهنات مبكراً: **CSS Grid لا يُلغي Flexbox**، والعكس صحيح. كل أداة تمتاز بقدرات لا تستطيع الأخرى تحقيقها، بل إن الجمع بينهما يمكن أن يُنتج تصميمات مذهلة تناسب مختلف احتياجات صفحات الويب.  

### CSS Grid: البطل في إنشاء التخطيطات الكاملة  
تتميز **CSS Grid** بقدرتها الفائقة على إنشاء تخطيطات معقدة ومخصصة لصفحات الويب. فهي تتعامل مع التصميم على مستوى الشبكة (grid) الكاملة، مما يجعلها مثالية لتقسيم الصفحة إلى مناطق رئيسية أو إنشاء تخطيطات متناسقة.

### Flexbox: سيد تدفق المحتوى  
على الجانب الآخر، يُعد **Flexbox** الخيار الأفضل لتوزيع العناصر داخل كل قسم من الصفحة. فهو يركز على التعامل مع العناصر الفردية داخل الحاويات، مما يضمن ترتيباً مرناً وانسيابياً يتكيف مع مختلف أحجام الشاشات.

### العمل معاً: مزيج القوة  
القوة الحقيقية تكمن في الجمع بين **CSS Grid** و**Flexbox**. يُمكن استخدام **Grid** لتحديد الهيكل العام للصفحة، بينما يتم استخدام **Flexbox** داخل كل قسم من التخطيط لتوزيع العناصر بطريقة ديناميكية.  

في هذا المقال، سنستعرض الفروق بينهما، ونشرح كيفية عمل كل منهما، وكيفية الجمع بينهما لإنشاء تصميمات مذهلة وعملية تناسب مختلف الاحتياجات. استعد للغوص في تفاصيل **CSS Grid** وتعلم كيفية استخدامها لإنشاء تخطيطات احترافية بسهولة.

### مثال عملي: الجمع بين CSS Grid و Flexbox  

لنفهم كيف يمكن لـ **CSS Grid** و **Flexbox** العمل معًا، دعونا نلقي نظرة على مثال عملي قمت بإعداده. سنستعرضه سريعًا، وستتعلم خلال الدرس كيف تبني هذا المثال خطوة بخطوة.  

**إعداد الحاوية**  
```html
<div class="container">
  <div class="box" id="one">Box One - 1</div>
  <div class="box" id="two">Box Two - 2</div>
  <div class="box" id="three">Box Three - 3</div>
  <div class="box" id="four">Box Four - 4</div>
  <div class="box" id="five">Box Five - 5</div>
</div>
```
في البداية، أنشأنا **حاوية (container)** واستخدمنا خاصية `display: grid;` لتحديدها كشبكة. بعد ذلك، قمنا بضبط **الأعمدة والصفوف** باستخدام الخاصية `grid-template-areas`.  

**توزيع العناصر داخل الشبكة**  
```css
.container {
	width: 90vw;
	display: grid;
	grid-template-columns: 40vw 40vw;
	grid-template-rows: 25vh 25vh 25vh;
	grid-template-areas: "top top";
	grid-gap: 20px;
	justify-content: center;
	border: 2px solid #fff;
	padding: 10px;
}

.box {
	background-color: blueviolet;
	color: #fff;
	border: 2px solid orange;
	display: flex;
	justify-content: center;
	align-items: center;
}

#one {
	grid-area: top;
}
```
في هذا المثال، تحتوي الحاوية على خمس عناصر داخلها. الحاوية نفسها تم ضبطها لتكون **شبكة (grid)**، في حين أن كل عنصر داخل الحاوية تم تعيين خاصية `display: flex;` له.  
- هذا الإعداد يجعل النصوص الموجودة داخل العناصر تظهر في **المنتصف**.  
- إذا قمنا بإزالة خاصية `flex` من العناصر، ستعود جميع المحتويات إلى الزاوية العلوية اليسرى، ما يظهر أهمية Flexbox في توزيع العناصر.

### تحسين التخطيط باستخدام الخصائص المشتركة  
رغم أن **Flexbox** يُستخدم داخل العناصر، إلا أن **CSS Grid** يدعم تحسين توزيع الحاوية بأكملها. على سبيل المثال، يمكننا استخدام خاصية `justify-content: center;` لتوسيط الشبكة نفسها.  

**النتيجة النهائية** 
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtIpIE-bzd_Od9uSmhYLTbg_ZyOw3LLj54yE4Zjiv-tGSEHK3ud0flO8LzxZXEjkLFQsq44ADZro6MnEv-wAa6UKyGoMP0u2W8goDNzd728pgFX_9hg2F_LeRTLXaf8VvgQCxnjp10331oOxlERmP5ri2HpJNjQ3-qZH9KxniQIqmyj_YA79oQfRjglys/s16000/css-grid-with-flexbox.webp"
alt="CSS Gid with Flexbox"
title="CSS Gid with Flexbox"
/>
<figcaption>CSS Gid with Flexbox</figcaption>
</figure>

الناتج هو تخطيط شبكي مكون من **عمودين وصفين** مع عناصر مرتبة بشكل جميل في المنتصف. هذا المثال يُبرز كيف يمكن لـ **CSS Grid** و **Flexbox** أن يكمل كل منهما الآخر لإنشاء تصميمات جذابة ومرنة في نفس الوقت.  

هذا مجرد بداية لما يمكن تحقيقه باستخدام هاتين الأداتين معًا!

## خاتمة

وفي النهاية، يعد **CSS Grid** من أهم الأدوات التي يجب أن يتقنها كل مطور ويب حديث. بفضل قوته ومرونته، يمكنك تصميم أي نوع من التخطيطات بدءًا من البسيطة وصولاً إلى المعقدة، مع ضمان استجابتها على مختلف الأجهزة.

سواء كنت مبتدئًا أو محترفًا، فإن هذه التقنية ستفتح أمامك أفقًا واسعًا من الإمكانيات. الآن حان دورك لتجربة ما تعلمته وتحويل أفكارك إلى واقع ملموس على صفحات الويب الخاصة بك. استمتع بالتصميم، وكن دائمًا مبدعًا!

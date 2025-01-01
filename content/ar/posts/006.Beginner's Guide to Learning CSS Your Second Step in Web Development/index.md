---
title: "CSS من البداية إلى الاحتراف: كيف تصمم صفحات ويب مرنة ومبهرّة"
date: 2024-12-09
draft: false
slug: "css-from-beginner-to-expert-flexible-stunning-web-pages"
cascade:
  showReadingTime: true
categories: ['Web Development']
tags: ['Front-End','CSS']
---

إذا كنت ترغب في فهم أعمق لكيفية عمل مواقع الويب والتصميمات، فأنت بحاجة إلى النظر إلى ما وراء الأكواد.

في هذه المقالة، سنأخذك في رحلة تبدأ من أدوات المطورين داخل المتصفح، مرورًا بفهم كيفية تحويل المتصفح للنصوص إلى شجرة عناصر، ومن ثم إلى صناديق، وصولاً إلى تطبيق التنسيقات باستخدام CSS.

ستتعلم أيضًا كيفية كتابة القواعد، التعامل مع المحددات، وفهم الأولويات، مما يجعلك تنظر إلى تصميم المواقع بطريقة احترافية وجديدة تمامًا.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBD9dulTfOG51D_44aXOH1w35mlVZ4Nx0gSYwNANOileeAHuD0Cknlpo-QhGi8M0o0_lkiYipXRE5asAEcNGN2Wyjr6WzyOKOwEcDY3wSj4mcimKOnMoX7VBnfV9VbLeTcgRZ3049oJjLEBIWDpILFGqRpsanTbhB_2db5bNJfIRRn5h2QF2Pp9qPrsmQ/s16000/css-basic-in-arabic.webp" 
  alt="CSS من البداية إلى الاحتراف: كيف تصمم صفحات ويب مرنة ومبهرّة"
  title="CSS من البداية إلى الاحتراف: كيف تصمم صفحات ويب مرنة ومبهرّة"
  />
  <figcaption>CSS من البداية إلى الاحتراف: كيف تصمم صفحات ويب مرنة ومبهرّة</figcaption>
</figure>

## أدوات المطورين داخل متصفح الويب

تأتي معظم متصفحات الويب مزودة بـ **أدوات مطورين** (Developer Tools) التي تعدّ أداة قوية لأي مطور ويب. هذه الأدوات تتيح إمكانية تعديل أكواد HTML وCSS مباشرة في المتصفح لرؤية النتائج بشكل لحظي.

ومع ذلك، من المهم أن نوضح أن هذه التعديلات لا تُحفظ تلقائيًا؛ فهي مجرد وسيلة لاستعراض تأثير الأكواد أو اختبار الأفكار على صفحة الويب قيد التطوير.

### كيفية الوصول إلى أدوات المطور

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI0nrmBSophE-YH15OTUUgaiV0sd1D6xQTbM_f4iX7yRS139iMPUhd27bbyqOp3kHsYWhxQ0mSUAhoYbEqHHmbqgESNPBdOcyAl4qVhIdcPDhOmnfA22r7QmYHvCR9mYAhji0wm8aepKVgB4mdh0BfWe2IZ0X2JAZEzr4yU7bdvUWFkw/s1600/developer-tools%20(1).webp" 
  alt="كيفية الوصول إلى أدوات المطور"
  title="كيفية الوصول إلى أدوات المطور"
  />
  <figcaption>كيفية الوصول إلى أدوات المطور</figcaption>
</figure>

يمكنك فتح أدوات المطور بسهولة عن طريق النقر بزر الماوس الأيمن على أي جزء من الصفحة ثم اختيار **فحص** أو **Inspect**، حسب لغة المتصفح المستخدم. ستظهر نافذة تحتوي على مجموعة من التبويبات، وأهمها هو تبويب **Elements**.

أو عن طريق إستخدام الإختصار التالى ***ctrl + shift + c***.

### استكشاف تبويب Elements - Inspector

من خلال تبويب **Elements** أو فى بعض المتصفحات ستجدها بإسم **Inspector**، يمكنك استعراض أكواد HTML وCSS الخاصة بالصفحة. يمكن إجراء العديد من التعديلات، مثل:
- تغيير ألوان النصوص والخلفيات.
- تعديل أحجام الخطوط وعناصر الصفحة.
- تفعيل أو تعطيل خصائص CSS باستخدام مربع الاختيار (Checkbox) بجوار كل خاصية.

استخدام أدوات المطور بشكل منتظم سيساعدك على فهم كيفية عمل المواقع بشكل أعمق وتحسين مهاراتك كمطور ويب محترف.

## من النصوص إلى الشجر (Text to Trees)

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJJY6G1coVpU-5vTNQu_-gQ-GBAKriN9c2SUpouolKQKhOduYq_KTSnc6AljJ_hb4BHPZrXJlVMgJuDi6DpVeHH6iNL3FbwJG10sVyKAQOcOU-HV_syZQn9_bIIEc2Rbt3XRzVRxJarm1wJhux3F1Gc_K8XohaOsPZlqI0ROkLYrIUKVTBZX_32ibJQew/s16000/html-code-to-dom-to-browser-view.webp" 
  alt="من النصوص إلى الشجر (Text to Trees)"
  title="من النصوص إلى الشجر (Text to Trees)"
  />
  <figcaption>من النصوص إلى الشجر (Text to Trees)</figcaption>
</figure>

عندما تقوم بكتابة مستند HTML وتعرضه في المتصفح، يختلف العرض عما كتبته في صفحة الكود. هذا يعود إلى وجود عملية تحويل داخلية تُسمى **DOM** أو **Document Object Model**.  
يقوم المتصفح بتحويل كود HTML إلى **شجرة** من الأكواد ليتمكن من تفسيره بشكل صحيح. على سبيل المثال:
- القوائم المرقمة في HTML تُحوَّل تلقائيًا إلى عناصر تحمل أرقامًا، حتى وإن لم تكن هذه الأرقام مكتوبة في الكود الأصلي.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK1_jQuoV-MzVIi1RKsdjrmQItfpeyvZ2nGefPCeZW0oRWHgTflgf78YMx3mG-KAM3a3_0WeLBNP8kBGHu6sgK4Hm1AHK89XwHZn2Lxq-imUvgo2YoCvNXWufCYL-z6c6_r2sML5p9kWZBiNC_FcC8LDMEXh-ZpNDj9FgeIAkRXJHFd2bbGicWHDhIvAw/s16000/translate-html-code.webp" 
  alt="القوائم المرقمة في HTML"
  title="القوائم المرقمة في HTML"
  />
  <figcaption>القوائم المرقمة في HTML</figcaption>
</figure>

## بنية الشجرة (Tree Structure)

بنية الشجرة ليست مفهومًا خاصًا بـ [HTML](https://www.fullstackee.com/2024/11/beginner-guide-learn-html.html) فقط، بل هو جزء أساسي في علوم الحاسوب. تتكون الشجرة من أجزاء تُعرف بـ **Nodes**، تربط بينها علاقات تُسمى **Branches**.

**مثال توضيحي**

لنتخيل شقة تحتوي على غرف متعددة:
- غرفة النوم تحتوي على **سرير** و**دولاب**.
- السرير يحتوي على **مخدة**، والدولاب يحتوي على **أرفف**.

كل عنصر هنا يمثل **Node**، والأسهم التي تربط بين هذه العناصر هي **Branches**.  
بنفس الطريقة، تُكتب أكواد HTML وفق بنية الشجرة. على سبيل المثال:
- الجذر (Root Node) هو الوسم `<html>`.
- يحتوي الجذر على وسمي `<head>` و `<body>`.
- داخل `<head>` يمكن أن نجد وسم `<title>`.
- داخل `<body>` يمكن أن نجد فقرات وقوائم وعناصر أخرى.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhukdGx4GJLm7QeEyF-PcwWQHRVHjAvQw9JILVUhoVztfqAmc_bBiJFk_dolUzF6mfSZwpj0LgvnaOCqycxp2sXqq0MbQ96DsHgo84b_Q6muzieYWbAgAyNNutG5HMCE89_CK8ekOotol5REk11iMbD8sSxWUc3uuKNqpKOqzrzANp36uOXbaWQzBXg8rU/s16000/tree-structure-dom.webp" 
  alt="بنية الشجرة (Tree Structure)"
  title="بنية الشجرة (Tree Structure)"
  />
  <figcaption>بنية الشجرة (Tree Structure)</figcaption>
</figure>

### القواعد الأساسية لبنية الشجرة:
1. يجب أن تحتوي الشجرة على جذر واحد فقط.
2. كل **Node** يمكن أن تحتوي على فروع تؤدي إلى عقد فرعية (Nodes أخرى).
3. كل **Node** لها والد واحد فقط باستثناء الجذر.

## من الشجر إلى الصناديق (Trees to Boxes)

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihH_bkcglPgU-xVZ97vqPnex99ovB53dUrVVm7FjigT6UODM_hyphenhyphenCFKk6CKdvBakPeBIPvEOGMErQ97_gR2iExFcuZ5XZdewDgjgqkTfIq8U_JsB6X8W1p5oKH00N6DP-1ynwp9DvUGIuQLKGynkZ3ERZNde8grGIT_DEkVIvq-aOOAuu7Jbs6jaqSBbbk/s16000/tree-to-boxes-in-html.webp" 
  alt="من الشجر إلى الصناديق (Trees to Boxes)"
  title="من الشجر إلى الصناديق (Trees to Boxes)"
  />
  <figcaption>من الشجر إلى الصناديق (Trees to Boxes)</figcaption>
</figure>

بعد تحويل المتصفح لكود HTML إلى شجرة (Tree Structure)، يتم تحويل هذه الشجرة إلى صناديق (Boxes) تظهر على شاشة المستخدم.  
كل **Node** في الشجرة تُحوَّل إلى صندوق، وقد يحتوي الصندوق على صناديق أصغر داخله أو يكون جزءًا من صندوق أكبر.

**مثال عملي**

لنفترض كتابة الكود التالي:

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

- يتم تحويل القائمة `<ul>` إلى صندوق كبير.
- كل عنصر `<li>` يُمثّل صندوقًا أصغر داخل الصندوق الكبير.

بمساعدة CSS، يمكن تعديل كيفية عرض هذه الصناديق، مثل وضعها بجانب بعضها البعض بدلاً من ترتيبها عموديًا.

## قواعد كتابة CSS (CSS Syntax)

تتكون قاعدة CSS من جزأين رئيسيين: **المحدد** (Selector) و**كتلة التصريح** (Declaration Block).  
- **المحدد** هو الجزء الذي يحدد العناصر في HTML التي سيتم تطبيق القاعدة عليها.  
- **كتلة التصريح** تحتوي على التعليمات التي تحدد كيفية تعديل هذه العناصر.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM5-lA8H-iSKHQ9M4bIeJ1khwIfRevydoKJJBGV27wU95D2im_3_x4vyc1PhWiYXMFYJRJZLjyneLi_NP9v4qh-l1qXL15Tg8O8S3bdWiPcUSCl5R-hLbwQNX8BXEFiUObpiFKg1oAoSu_zZI7og4Ar5S3SOrFmbq-WHNUdmy2uu8El7R_XSBmO9OfGAw/s16000/css-syntax.webp" 
  alt="قواعد كتابة CSS (CSS Syntax)"
  title="قواعد كتابة CSS (CSS Syntax)"
  />
  <figcaption>قواعد كتابة CSS (CSS Syntax)</figcaption>
</figure>

على سبيل المثال، إذا أردنا تحويل جميع العناصر `<li>` إلى اللون الأخضر، فالمحدد سيكون `li`، وكتلة التصريح تحتوي على:  
```css
color: green;
```

### كيفية كتابة قواعد CSS  
تُكتب قواعد CSS بالصيغة التالية:
1. يبدأ بـ **المحدد**، وهو الجزء الذي يحدد العناصر المستهدفة.
2. يتم استخدام الأقواس `{}` لتحديد **كتلة التصريح**.
3. داخل الأقواس، توضع التصريحات (Declarations)، وكل تصريح يتكون من:
    - **الخاصية** (Property): مثل `color` أو `font-size`.
    - **القيمة** (Value): مثل `green` أو `larger`.
    - تنتهي كل تصريح بـ **فاصلة منقوطة** (`;`).

**أمثلة:**
1. المثال الأول: تنسيق جميع عناصر الفقرة `<p>`:

**في هذا المثال:**
  - **المحدد**: `p` (يطبق التنسيق على جميع الفقرات).
  - **التصريحات**: `color: purple;` و`font-size: larger;`.
```css
p {
  color: purple;
  font-size: larger;
}
```
2. المثال الثاني: تنسيق العناصر التي تحمل الفئة (Class) "weird":
  ```css
  .weird {
    width: 50%;
    color: blue;
  }
  ```
  هنا، يتم استهداف العناصر باستخدام النقطة (`.`) متبوعة باسم الفئة.


## تطبيق التنسيقات مباشرة على HTML (Styling HTML Directly)

### 1. التنسيق باستخدام السمة `style`
يمكنك تطبيق التنسيقات مباشرة على عناصر HTML باستخدام السمة **`style`**.  
على سبيل المثال، إذا كنت تريد تغيير لون جميع العناصر `<li>` إلى الأخضر، يمكنك كتابة:  
```html
<li style="color: green;">Item 1</li>
<li style="color: green;">Item 2</li>
<li style="color: green;">Item 3</li>
```

**عيوب هذه الطريقة**

- **التكرار**: تحتاج إلى إضافة السمة لكل عنصر بشكل يدوي، مما يسبب الكثير من العمل المكرر.  
- **التعقيد**: إذا حدث خطأ في أحد العناصر، سيكون من الصعب اكتشافه وتصحيحه.  
- **الصيانة**: إجراء تغييرات على التنسيقات يصبح مرهقًا إذا احتجت إلى تعديل جميع العناصر يدويًا.

### 2. الحل: استخدام CSS لتجنب التكرار
يمكنك تجنب هذه العيوب باستخدام **CSS** لتطبيق القواعد بشكل مركزي. بدلاً من تحديد السمة `style` لكل عنصر، يمكنك:
- إنشاء قاعدة CSS داخل عنصر `<style>` في `<head>`:
  ```html
  <style>
    li {
      color: green;
    }
  </style>
  ```
- ستُطبق هذه القاعدة على جميع عناصر `<li>` في الصفحة تلقائيًا.

### كيف يعمل المتصفح؟
أثناء بناء الصفحة، يستخدم المتصفح الشجرة (DOM Tree) لتحديد العناصر وتطبيق القواعد. تقوم CSS بتحديد الألوان، والأشكال، وتخطيطات الصفحة بناءً على هذه القواعد.

## **أنواع المحددات (Selectors Type)**

في CSS، المحددات (**Selectors**) هي الطريقة التي تُخبر بها المتصفح بالعناصر التي ترغب في تطبيق القواعد عليها. أبسط أنواع المحددات هو **محدد النوع (Type Selector)**، الذي يُستخدم لتحديد عنصر معين بناءً على اسمه في HTML، مثل `p` (للفقرات) أو `em` (للنص المائل)، وحتى `body` (لتطبيق النمط على كامل المستند). 

### **كيفية استخدام محدد النوع**
على سبيل المثال، يمكننا كتابة قاعدة CSS تُغير خط النصوص في المستند بالكامل:
```css
body {
  font-family: Arial, sans-serif;
  color: #333;
}
```
هذه القاعدة ستجعل الخط المستخدم في المستند كله هو Arial، وسيكون لون النص رماديًا داكنًا. 

### **أهمية محدد النوع**
- **تطبيق واسع النطاق**: إذا كنت تكتب مقالًا يحتوي على العديد من العناوين مثل `h1` و`h2`، يمكنك استخدام محدد النوع لتطبيق الأنماط على جميع العناصر من نوع معين دفعة واحدة.
- **سهولة الاستخدام**: بدلاً من كتابة أنماط منفصلة لكل عنصر، يمكن استخدام قاعدة واحدة لتغطية جميع العناصر من النوع نفسه:

```css
h1 {
  font-size: 24px;
  font-weight: bold;
}

h2 {
  font-size: 20px;
  font-weight: bold;
}
```

## **المحددات: الفئات (Class) والمعرفات (ID)**

ليس من الضروري دائمًا تطبيق النمط نفسه على جميع العناصر من النوع نفسه. على سبيل المثال، إذا كان لديك مقال يحتوي على **شريط جانبي**، قد ترغب في تخصيص أنماط مختلفة للفقرات الموجودة داخل المقال مقارنةً بالشريط الجانبي. 

### **ما هي الفئة (Class)؟**
الفئة هي سمة تُضاف إلى العلامات في HTML لتحديد مجموعة من العناصر التي تتشارك نفس الخصائص. تُكتب الفئة في CSS باستخدام النقطة (`.`) متبوعة باسم الفئة:
```html
<p class="article-text">هذا نص في المقال.</p>
<p class="sidebar-text">هذا نص في الشريط الجانبي.</p>
```
```css
.article-text {
  color: #000;
}

.sidebar-text {
  color: #777;
}
```

### **ما هو المعرف (ID)؟**
المعرف مشابه للفئة ولكنه مخصص لعناصر **فريدة**. يجب أن يكون لكل معرف قيمة واحدة فقط على الصفحة. يُكتب المعرف في CSS باستخدام علامة الشباك (`#`):
```html
<p id="main-heading">هذا عنوان رئيسي.</p>
```
```css
#main-heading {
  font-size: 28px;
  text-align: center;
}
```

### **الفرق بين Class وID**
- **الفئة**: تُستخدم لعناصر متعددة.
- **المعرف**: يُستخدم لعناصر فريدة.

## **دمج المحددات (Combining Selectors)**

CSS يسمح بدمج المحددات لتطبيق أنماط محددة على عناصر وفقًا لتسلسلها أو علاقتها بعناصر أخرى. على سبيل المثال:
```css
li em {
  color: red;
}
```
هذا النمط يُطبق على العناصر المائلة (`em`) الموجودة داخل عناصر القائمة (`li`). إذا كانت لديك الشيفرة التالية:
```html
<ul>
  <li><em>عنصر مميز</em></li>
  <li>عنصر عادي</li>
</ul>
```
سيتم تطبيق النمط الأحمر على النص داخل العنصر المائل فقط.

### **أنواع أخرى من المحددات المدمجة**
- **المحدد التنازلي (Descendant Selector)**: يستهدف جميع العناصر الفرعية لعناصر معينة.
- **المحدد المباشر (Child Selector)**: يستهدف العناصر المباشرة فقط.

## **لماذا يُطلق عليه "Cascading"؟**
"التدرج" في CSS يُشير إلى الطريقة التي يتم بها تحديد الأنماط لكل عنصر بناءً على العلاقات بين العقد (Nodes) في شجرة DOM. 

### **كيف تعمل القواعد المتدرجة؟**
عندما يتم تحديد قاعدة لعقدة (Node) معينة، فإن الأنماط **تُورَّث** إلى جميع العقد الفرعية ما لم يتم تجاوزها:
```css
body {
  color: #333;
}

h1 {
  color: orange;
}

em {
  color: red;
}
```
- **العقدة الرئيسية (`body`)**: جميع النصوص تبدأ بلون رمادي غامق.
- **العناوين (`h1`)**: تُكتسب لونًا برتقاليًا.
- **النص المائل (`em`)**: يُطبق عليه اللون الأحمر إذا لم يتم تجاوز القاعدة.

### **أولوية الأنماط**
عند وجود تعارض بين القواعد، يتم تطبيق الأنماط وفقًا لمبدأ الأولوية:
1. الأنماط المعرّفة داخل العنصر (Inline).
2. الأنماط ذات المحددات الأكثر تحديدًا.
3. الأنماط العامة.

CSS أداة قوية جدًا لتنسيق صفحات الويب، وفهم كيفية عمل المحددات (Selectors) ومفهوم التدرج (Cascading) يُساعد في إنشاء مواقع أكثر تنظيمًا وفعالية. إذا كنت ترغب في التعمق أكثر، راجع [دليل CSS الشامل من Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS).


## دليل شامل حول وحدات CSS، الصناديق، النسب المئوية.

### 1. **وحدات CSS: فهم الأساسيات**
CSS (أوراق الأنماط المتتالية) تمنحك القدرة على تعديل تخطيط العناصر على الصفحة من حيث الحجم، والشكل، والموقع. لفهم موقع العناصر وكيفية تنظيمها، نحتاج إلى وحدات قياس. 

**الوحدات الأساسية في CSS**:
- **البكسل (PX)**: هي وحدة القياس الأساسية. في CSS، يتم تعريف البكسل على أنه 1/96 من البوصة، بغض النظر عن دقة الشاشة. 
- **النقاط (PT)**: تُستخدم بشكل أساسي في تحديد أحجام الخطوط، حيث تمثل النقطة 1/72 من البوصة.
- **الوحدات النسبية (EM وREM)**: 
  - `EM`: تعتمد على حجم خط العنصر الأب.
  - `REM`: تعتمد على حجم الخط الأساسي (Root).

**مثال عملي**:
```css
.skinny {
  width: 192px; /* عرض العنصر */
  height: auto;
}
```
العنصر ذو الكلاس `skinny` سيظهر بعرض 2 بوصة (192 بكسل).


### 2. **مفهوم الصناديق في CSS**
عند عرض HTML، يحتوي كل عنصر على "صندوق" غير مرئي يمكن تعديله باستخدام CSS. العناصر الأساسية التي يمكنك ضبطها تشمل:
- **الحجم**: العرض (width) والارتفاع (height).
- **الحواف الداخلية (Padding)**: المسافة بين المحتوى وحدود العنصر.
- **الإطار (Border)**: يمكن تحديد سمكه، لونه، ونمطه.
- **الهامش (Margin)**: المسافة بين العنصر والعناصر المحيطة.

**مثال عملي**:
```css
.box {
  width: 100px;
  height: 50px;
  border: 5px solid green;
  margin: 1em;
  padding: 0.5em;
}
```
هذا الكود ينشئ صندوقًا بعرض 100 بكسل، ارتفاع 50 بكسل، وإطار أخضر، مع إضافة مسافات داخلية وهامش خارجي.


### 3. **النسب المئوية في CSS**
تتيح CSS تحديد القيم كنسبة مئوية من حجم العنصر الأب. على سبيل المثال:
- عند تحديد عرض عنصر بنسبة `50%`، سيأخذ نصف عرض العنصر الأب.
- **الحدود والحشوات**: يجب مراعاة أن النسب المئوية لا تشمل الإطار والحشوة.

**مثال عملي**:
```css
.parent {
  width: 500px;
}

.child {
  width: 50%; /* نصف عرض العنصر الأب */
}
```


### 4. **فصل التنسيقات عن الهيكل**
لحفظ الجهد وتحسين إدارة المشروع، يمكن وضع تنسيقات CSS في ملف منفصل وربطه بملف HTML باستخدام العنصر `<link>`. 

**مثال عملي**:
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
هذا النهج يجعل التحديثات أسهل ويعزز قابلية إعادة الاستخدام.

## مقدمة حول الخطوط في CSS

الخطوط تلعب دورًا كبيرًا في تحسين تجربة المستخدم وجعل الموقع مميزًا بصريًا. باستخدام CSS، يمكنك التحكم الكامل في مظهر النصوص على موقعك، من اختيار نوع الخط إلى تحديد حجمه وأسلوبه. 

### ما هو الخط في CSS؟

في عالم CSS، ما نعرفه بالخط (Font) يُعرف باسم **عائلة الخط (Font Family)**، وهي تشير إلى نوع الخط مثل "Times New Roman"، "Helvetica"، أو "Impact". عند تطبيق قاعدة `font-family` على عنصر معين، سيعرض النص باستخدام هذا الخط إذا كان متوفرًا على جهاز المستخدم. في حال عدم توفره، سيعود النص إلى الخط الافتراضي الذي يكون عادةً خطًا بسيطًا وغير معقد مثل "Times". 

لتجنب المشاكل الناتجة عن عدم توفر الخطوط، يمكنك استخدام مجموعة من الخطوط تسمى **"كدسة الخطوط (Font Stack)"**. على سبيل المثال:

```css
font-family: "Constantia", "Georgia", serif;
```

في هذا المثال، إذا لم يكن الخط "Constantia" متاحًا، فسيتم استخدام "Georgia"، وإذا لم يكن أي منهما متاحًا، سيتم استخدام أي خط "Serif".

### الخطوط العامة (Generic Font Families)

CSS يوفر خمس عائلات خطوط عامة يمكنك الاعتماد عليها كخطة احتياطية:

1. **Serif**: خطوط بحواف مزخرفة.
2. **Sans-serif**: خطوط بسيطة دون زخارف.
3. **Monospace**: خطوط بعرض ثابت لكل حرف.
4. **Cursive**: خطوط مائلة تشبه الكتابة اليدوية.
5. **Fantasy**: خطوط زخرفية.

### التحكم في خصائص الخطوط

CSS يتيح لك التحكم في خصائص إضافية للخطوط:

- **حجم الخط**: باستخدام الخاصية `font-size`. يمكنك استخدام وحدات مثل `px`، `em`، أو حتى `rem`.
- **سمك الخط**: باستخدام الخاصية `font-weight` مثل `bold`.
- **ميل الخط**: باستخدام الخاصية `font-style` مثل `italic`.
- **إضافة خط تحت النص**: باستخدام الخاصية `text-decoration` مثل `underline`.

### كتابة خصائص الخط في سطر واحد

لدمج جميع خصائص الخط في سطر واحد، يمكنك استخدام الخاصية `font`. ولكن يجب الالتزام بترتيب معين:

```css
font: italic bold 16px/1.5 "Helvetica", sans-serif;
```

**في هذا المثال:**
  - **italic** لتحديد الميل.
  - **bold** لتحديد السمك.
  - **16px** لتحديد الحجم.
  - **1.5** لتحديد ارتفاع السطر.
  - **"Helvetica", sans-serif** لتحديد عائلة الخط.

## Flexbox: تصميم مرن مع CSS

تقنيات التخطيط الافتراضية للمتصفحات كانت تعتمد على تصميم المستندات التقليدية، حيث يتم ترتيب العناصر رأسيًا من الأعلى إلى الأسفل. ومع ذلك، تطورت تقنيات الويب وأصبحت تتطلب تصاميم أكثر مرونة، وهو ما يتيحه **Flexbox**. 

Flexbox يتيح تصميمًا ديناميكيًا يتكيف مع أحجام الشاشات المختلفة، مما يجعله مثاليًا لتصميم مواقع متجاوبة.

### المزايا الأساسية لـ Flexbox

1. **ترتيب العناصر أفقياً**: بمجرد تعيين الخاصية `display: flex` على الحاوية، سيتم ترتيب العناصر داخلها أفقيًا.
2. **التفاف العناصر (Wrapping)**: باستخدام الخاصية `flex-wrap: wrap`، يمكن للعناصر الانتقال إلى سطر جديد إذا لم تكن المساحة كافية.
3. **توزيع المساحات**: باستخدام الخصائص `justify-content` و`align-items`، يمكنك التحكم في محاذاة العناصر وتوزيع المساحات بينها.


## تصميم لعبة XO بدون استخدام Flexbox
هل سبق لك أن تساءلت كيف يمكن تصميم لوحة لعبة **XO** باستخدام أدوات بسيطة في CSS؟ دعنا ننطلق في تمرين ممتع نستعرض فيه الطريقة التقليدية لتصميم لوحة اللعبة، ثم نقارنها لاحقًا مع تصميم باستخدام **Flexbox** لنستوعب الفارق.

1. **الخطوة الأولى: بناء الهيكل باستخدام HTML** 
  سنبدأ بإنشاء ملف HTML يحتوي على عناصر اللعبة:
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>XO Game</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <ul>
      <li>X</li>
      <li></li>
      <li>O</li>
      <li>X</li>
      <li>O</li>
      <li></li>
      <li></li>
      <li>X</li>
      <li>O</li>
    </ul>
  </body>
  </html>
  ```
2. **الخطوة الثانية: تصميم باستخدام CSS** 
  سنضيف القليل من التنسيق لجعل العناصر تبدو وكأنها جزء من لعبة حقيقية:
  ```css
  body {
    background-color: #333;
    color: #ccc;
  }

  ul {
    width: 300px;
    height: 300px;
    margin: auto;
  }

  li {
    width: 90px;
    height: 90px;
    margin: 5px;
    float: left;
    list-style: none;
    font-size: 70px;
    font-family: sans-serif;
    text-align: center;
    background-color: lightgray;
    color: blue;
  }
  ```
3. **النتيجة النهائية:** 
  عند فتح الملف في المتصفح، ستحصل على شبكة تحاكي لوحة لعبة **XO**، لكنها تعتمد على التقنية التقليدية المتمثلة باستخدام `float` لترتيب العناصر.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8ZA0U35ZOVp4IwQQ7hvdYgpZTA6Lei_7AoVbXZhkATH5J1G1BhbsPzksk4vX_i6r4k82EQPiRr4qvnPs9sSkr85KuOJ_rbRz6lXbCESA07l2f_Yedly0WeuemVfkNUtxzjhPPyggjMUWnDLboUcnegiFh3EQU6BMyeLRDQQ-jf1Jhsm_lupA1aoEJeGw/s16000/XO-game.webp" 
  alt="XO game"
  title="XO game"
  />
  <figcaption>XO game</figcaption>
</figure>

## تصميم لعبة XO باستخدام Flexbox
الآن، دعونا نستعرض الطريقة الحديثة والفعالة لتصميم نفس لوحة اللعبة باستخدام **CSS Flexbox**. ستندهش من سهولة ومرونة هذه الطريقة مقارنة بالطريقة التقليدية.
1. **الخطوة الأولى: إعداد التصميم باستخدام Flexbox** 
  باستخدام Flexbox، سنعيد تصميم لوحة اللعبة بشكل أكثر تنظيمًا وأقل تعقيدًا:
  ```css
  body {
    background-color: #333;
    color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  ul {
    width: 300px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 90px;
    height: 90px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-size: 70px;
    font-family: sans-serif;
    background-color: lightgray;
    color: blue;
  }
  ```
2. **النتيجة النهائية:** 
  تصميم أنيق ومرن يمكن تعديله بسهولة ليناسب أحجام شاشات مختلفة، مما يجعله مثاليًا لمتطلبات الويب الحديثة.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8ZA0U35ZOVp4IwQQ7hvdYgpZTA6Lei_7AoVbXZhkATH5J1G1BhbsPzksk4vX_i6r4k82EQPiRr4qvnPs9sSkr85KuOJ_rbRz6lXbCESA07l2f_Yedly0WeuemVfkNUtxzjhPPyggjMUWnDLboUcnegiFh3EQU6BMyeLRDQQ-jf1Jhsm_lupA1aoEJeGw/s16000/XO-game.webp" 
  alt="XO game"
  title="XO game"
  />
  <figcaption>XO game</figcaption>
</figure>

**ما يجعل Flexbox مميزًا:**
  - `display: flex` ينشئ نظامًا مرنًا لترتيب العناصر.
  - `flex-wrap: wrap` يضمن انتقال العناصر إلى السطر التالي بشكل تلقائي.
  - `justify-content: center` و `align-items: center` تجعل المربعات والنصوص متوسطة بسهولة.

من خلال مقارنة الطريقتين، يمكننا رؤية قوة ومرونة **Flexbox** مقارنة بالطريقة التقليدية. التصميم باستخدام Flexbox ليس فقط أسهل، ولكنه أيضًا يفتح آفاقًا أكبر لإضافة التحسينات والتكيف مع تصميمات متجاوبة بشكل مثالي.

## **الخاتمة**  
تهانينا! لقد قمت برحلة شيقة عبر أعماق أدوات المطورين في المتصفح وبنية الشجرة إلى الصناديق. وتقدمت خطوة أخرى فى عالم [تطوير الويب](https://www.fullstackee.com/2024/11/web-development-101-basics-to-start-your-journey.html).

تعرفت على كيفية كتابة قواعد CSS وفهم المحددات بأنواعها وأهميتها، واطلعت على كيفية استخدام Flexbox لتحقيق تصميمات مرنة وجذابة.

مع هذه المعرفة، أنت الآن مستعد لتطبيقها في مشاريعك القادمة [كمطور فرونت إند](https://www.fullstackee.com/2024/11/how-to-become-frontend-developer.html) بثقة واحترافية. تذكر، الإبداع يبدأ بالفهم، والتميز يأتي بالممارسة. استمر في التعلم، واستمتع بإنشاء تصميمات رائعة!


CSS بحر واسع. أهم نصيحة هي الاعتماد على المراجع الموثوقة مثل:
- [Mozilla Developer Network (MDN)](https://developer.mozilla.org).
- البحث باستخدام محركات البحث للوصول إلى أمثلة عملية وتوثيق الخصائص.

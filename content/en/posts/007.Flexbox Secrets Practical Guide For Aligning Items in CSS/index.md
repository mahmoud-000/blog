---
title: "Flexbox Secrets: A Practical Guide to Distributing Elements in CSS"
date: 2024-12-22
draft: false
slug: "flexbox-secrets-practical-guide-for-aligning-items-in-css"
cascade:
  showReadingTime: true
categories: ['Web Development']
tags: ['Front-End','CSS']
---

Have you ever been frustrated trying to align elements on your website using CSS? You may have spent hours experimenting with different positioning values, but never quite got the perfect result. That’s where **Flexbox** comes in,

The magical technology that has revolutionized the world of web design. With its simple and flexible features, you can now distribute and align elements with amazing ease. Whether you’re a beginner or a pro in web development, learning Flexbox will open up new horizons for you in designing elegant and effective user interfaces.

In this article, we’ll take you on an exciting journey to discover the secrets of Flexbox and how you can use it to simplify your life as a developer.

## **Flexbox Introduction: The Step to Mastering Distribution and Alignment in CSS**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijUm6bVxwwfxrJti3yQcqufXMZ0zkC_kIzANku-q59LnR4ssn4yv0vDCxTzqg5ZCPWu4jA7YiyxWa0i6PAcq4rKvJQdOYG5S1QZvvPNm4cRyfsV-5Woe9tYuSVthH372vmlT0Y17O04gOfIOVQFDjEu2_NTTS_boiMzfXuEdInBKo5F6OMLJkdunJunXwq/s16000/css-flexbox.webp"
alt="Flexbox Secrets: A Practical Guide to Distributing Elements in CSS"
title="Flexbox Secrets: A Practical Guide to Distributing Elements in CSS"
/>
<figcaption>Flexbox Secrets: A Practical Guide to Distributing Elements in CSS</figcaption>
</figure>

Here we begin our journey towards intermediate level CSS with a wonderful and innovative tool known as **Flexbox**, or as everyone simply calls it "Flex". This technology is a real revolution in how elements are distributed and aligned within containers, as it makes it very easy to achieve stunning visual results similar to those you find in design tools such as Adobe Illustrator, but using only code.

Before the advent of **Flexbox**, arranging and perfectly aligning elements within a page was a big challenge for developers. However, this technology came to change everything, as **Flex Containers** allow the ability to distribute elements within them smoothly and flexibly, whether it is for expansion, alignment, or distribution.

Let's dive into the details of Flexbox and explore its features and how it works, explaining each step in a practical and clear manner supported by examples.

### **1. Definition of Flexbox and its importance**
Flexbox is short for "Flexible Box Module", and it is a powerful tool for distributing and aligning elements within web pages. What sets Flexbox apart is its flexibility and ease of use compared to traditional CSS techniques.

### **2. The Problem Before Flexbox**
Before Flexbox, arranging elements inside containers required a lot of effort and code, such as using **float** and **positioning**, which made it complex and sometimes impractical.

### **3. What does Flexbox offer?**
Flexbox offers amazing capabilities including:
- **Expand elements** inside the container.
- **Align elements** vertically or horizontally.
- **Distribute elements** with equal spacing or as needed.

### **4. Container and Elements: Basic Terms**
- **Container:** is the main element that contains other elements inside it.
- **Items:** are the individual elements inside the container.

### **5. Getting Started with Flexbox**
Using Flexbox is very easy. All you have to do is set the `display` property of the container to `flex`, and then you can take advantage of a wide range of properties to customize the distribution and alignment.

**Simple practical example**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEja4-gJxq8XHHC7yd3ylLw0ciUGor41SGlKxMbrv7ZQcV7WruSXIh_xniyjGCO0TbxOTbH1Vam72icxdz9moBCGBf3haevXneNFolkDVsIbLjISpMfx3obbiyHC5CxAu-2n7OQlRHB41c2GGK4HVLAxSKKv_QsQt-pqvt0SQI7Uts6qNP2ifi3-g8zETbY/s16000/display-flex-first-example.webp"
alt="Simple practical example For Flexbox"
title="Simple practical example For Flexbox"
/>
<figcaption>Simple practical example For Flexbox</figcaption>
</figure>

**HTML Code**
```html
<div class="container">
    <div class="box" id="one">Box One - 1</div>
    <div class="box" id="two">Box Two - 2</div>
    <div class="box" id="three">Box Three - 3</div>
</div>
```
In this example, we have a simple HTML setup that includes:
- A main `div` element with a **class** called `container`.
- Three child elements inside the main container, each with a **class** called `box`, with distinct **id**: `one`, `two`, and `three`.

**CSS Code**
```css
body {
	background-color: brown;
	color: #ccc;
}

.container {
	display: flex;
	flex-direction: column; /* Main axis is vertical */
	justify-content: center; /* Align items on main axis */
	align-items: flex-start; /* Align items on alternate axis */
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

Once the above code is applied to the container, we can use several properties like `justify-content` and `align-items` to achieve the desired design as we see and this is just the beginning.

## **Flexbox Axes and Directions: Understanding the Basics**

Flexbox relies heavily on the concept of axes and directions, allowing you to have complete control over the distribution and alignment of elements within the container. In this section, we will learn about axes (main and alternate) and how changing directions affects your design.

### **1. Axes in Flexbox**
Flexbox relies on two main axes:
- **Main Axis:** It is specified using the `flex-direction` property.
- **Cross Axis:** It is the axis opposite to the main axis.

### **2. Possible Values ​​for `flex-direction`**
There are four main values ​​that affect the direction of elements within the container:
1. **row:** The main axis is horizontal (from left to right).
2. **row-reverse:** The main axis is horizontal (right to left).
3. **column:** The main axis is vertical (top to bottom).
4. **column-reverse:** The main axis is vertical (bottom to top).

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

**Simple practical example:**
```css
.container {
    display: flex;
    flex-direction: row; /* Can be changed to any of the four values ​​*/
}
```

### **3. How do axes work?**
- When `row` or `row-reverse` is selected, the main axis becomes horizontal, while the alternate axis is vertical.
- When `column` or `column-reverse` is selected, the main axis becomes vertical, while the alternate axis is horizontal.

**Notes:**
- The main axis determines how items are arranged within the container.
- The alternate axis affects the vertical or horizontal alignment of items.

### **4. Interacting with alignment properties**
Flexbox provides properties such as `justify-content` and `align-items` to control the distribution and alignment of items on the axes:
- **justify-content:** works on the main axis.
- **align-items:** works on the alternate axis.

**Simple practical example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPSqdw5HNphfw5992AjOfuiGuccMx1XesH3NszQTNSBM9YEGJXtVTbZZ0slU8mSjpu3X7_0OyNPamKcypQtPVCb8gLLt3afZgfo40UzV3dC-jQ7MlqWte2x_qKsHUNpSBADn-Rbkx2arrN3l0auLi0DZm3iI9HMGIS9yK-XdTus7whWn7tVTTpYCsjOy0/s16000/justify-content-with-align-items.webp"
alt="Using Justify Content with Align Items"
title="Using Justify Content with Align Items"
/>
<figcaption>Using Justify Content with Align Items</figcaption>
</figure>

```css
.container {
	display: flex;
	flex-direction: row; /* Main axis horizontally */
	justify-content: center; /* Align items on main axis */
	align-items: flex-start; /* Align items on alternate axis */
	border: 2px solid #fff;
	padding: 5px;
	height: 500px;
}
```

### **5. Effect of Changing Direction**
- By changing the value of `flex-direction`, you change how elements interact with the axes.
- For example, when switching from `row` to `column`, the main axis becomes vertical (top-bottom) and the alternate axis becomes horizontal (left-right).

### **6. Relationship of axes to Flexbox in general**
Almost all Flexbox properties such as `justify-content`, `align-items`, and `align-self` depend on the axes you specify. So, understanding axes and directions is the first step to creating flexible and responsive layouts.

## **Flex Container Properties**
Explaining the properties that are applied to the container:
- **`display: flex`** and **`inline-flex`**: Activate Flexbox.
- **`flex-direction`**: Specifies the direction of the axis (horizontal/vertical).
- **`flex-wrap`**: Controls the wrapping of elements.
- **`flex-flow`**: Shorthand for `flex-direction` and `flex-wrap`.
- **`justify-content`**: Align items along the main axis.
- **`align-items`**: Align items along the cross axis.
- **`align-content`**: Controls the distribution of multiple rows (when wrapping).

## **Flex Item Properties**
Explains properties that affect items inside the container:
- **`flex-grow`**: Controls how items expand.
- **`flex-shrink`**: Controls how items shrink.
- **`flex-basis`**: Specifies the base size of the item.
- **`flex`**: Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
- **`align-self`**: Customizes the alignment of a specific item without affecting the rest.

## **Align and distribute items using Flexbox**

The **Flexbox** property is one of the most important tools that facilitates the alignment and distribution of items within containers. Traditional formatting using **position: absolute** or **relative** was time-consuming, but Flexbox solved this problem with its simple and effective properties. Here we will review two main features: **align-items** and **justify-content**, and how they can be used practically.

### **1. `justify-content` property: Distribute items along the primary axis**

The **`justify-content`** property controls the distribution of items along the primary axis (which is specified using the `flex-direction` property).

**Common values:**
- **`flex-start`**: Items are arranged from the beginning of the axis.
- **`center`**: Items are placed in the middle of the axis.
- **`flex-end`**: Items are arranged at the end of the axis.
- **`space-between`**: Items are distributed with equal spaces between them.
- **`space-around`**: Distribute elements with equal spacing from the edges and between elements.
- **`space-evenly`**: Distribute elements so that the spacing between all elements and edges is exactly the same.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBkh5GYQCl5siaeV2FZU_7GvNT_5841Rtzb-WfdefoY-GnRxc6xVSmd2GADNztLRIDXCXrHvvUdne0wFAXrmalA7X31-91aDL2n6gwd0CyZNm7r8O-M1MfTZykrDd81vPqyCfbKMsOJUYActfD-RwJ8zGCKPcbTOy2QF36gmno3R7MG9srWUNu2kMtY8E/s16000/justify-content.webp"
alt="Common values ​​for justify-content"
title="Common values ​​for justify-content"
/>
<figcaption>Common values ​​for justify-content</figcaption>
</figure>

**Simple practical example:**
```css
.container {
	display: flex;
	justify-content: space-around; /* Distribute elements with equal spacing */
}
```

### **2. `align-items` property: Align items along the vertical axis**

The **`align-items`** property controls the alignment of items along the vertical axis (which is the axis perpendicular to the base axis).

**Common values:**
- **`stretch`**: Stretch items to fill the available space (default).
- **`flex-start`**: Align items with the beginning of the vertical axis.
- **`center`**: Place items in the center of the vertical axis.
- **`flex-end`**: Align items with the end of the vertical axis.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnynWF78DFcSuOEvkgZ9sDDwfjCrwrybGQlW-3q8X10waQWq4CGxVR1iSBHoZxXIqS64A6OzdN1SJabYhGzjtHTkEW2aIMT6TYOBSCnG24GsR7zqPViCxiKjLHsqaFnjdKotpuUf1EF9meYdufYLeqwvVAr6mT5eE6_jSsryupsjWPailgLPKYKqy0wu4/s16000/align-items.webp"
alt="Common values ​​for align-items"
title="Common values ​​for align-items"
/>
<figcaption>Common values ​​for align-items</figcaption>
</figure>

**Simple practical example:**
```css
.container {
display: flex;
align-items: center; /* Align items in the center of the vertical axis */
}
```

### **Combine values ​​for perfect alignment**

When **`justify-content`** is used with **`align-items`** together, sophisticated designs can be created that work for all types of layouts.

**Example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFIljwruO3wuvuow6uocQqcSfWrwH1HJjVehvLFN8gh0w2JEhMYVyiSqJ9AbHBPTThel3HTBJA0UgWW-qp8hmPLzXmmIiqTROmez81ghU0CzqL7HaBYX5kGb7jvfE4nBdIfLArM_50d_boci83IA-2eZ17q5mpJxc6KofsN_DD-9MnVyOPLqzW-htNjBw/s16000/justify-content-with-align-items-2.webp"
alt="Using justify-content with align-items"
title="Using justify-content with align-items"
/>
<figcaption>Using justify-content with align-items</figcaption>
</figure>

```css
.container {
	display: flex;
	justify-content: center; /* Distribute items in the middle horizontally */
	align-items: flex-end; /* Align items at the end of the vertical axis */
}
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9_awns7qR49a0U-zmUhxok4wXzcpcwBI3S-ToPyPhraTd-d4BnyH7Scxcu7kCN_VYGKWsuEPQNMPi-iRKfDKAEaUpk4n9E9z_5AndRcP0hOs3dT_tILWfPL2gNZXGXFlycLqZGVFyVnVr4kqfeESihmBZ43a6ttYMt5eiTtc4oRr4N8-qnEpMg3XXI6g/s16000/justify-content-with-align-items.webp"
alt="Using justify-content with align-items"
title="Using justify-content with align-items"
/>
<figcaption>Using justify-content with align-items</figcaption>
</figure>

## **Wrap and distribute elements using Flexbox**

Flexbox is a powerful tool for flexibly and systematically distributing elements within containers. In this tutorial, we will review three basic properties: **`align-content`**, **`flex-wrap`**, as well as the difference between **`align-content`** and **`align-items`**, to illustrate the role of each in arranging elements within a container.

### **1. `flex-wrap` property: Wrapping elements**
The **`flex-wrap`** property controls whether elements will wrap to new rows when the current row is full.

**Key values ​​for `flex-wrap`**:
1. **`nowrap`** (default): All elements remain on one row even if they overflow the container.
2. **`wrap`**: Items wrap to new rows when needed.
3. **`wrap-reverse`**: Items wrap in reverse order (from bottom to top).

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhecUYgfKeGm6oAst6Vip8V-oRDCkcJTWMbmSCB7lZs057OmOCZa4UP1HhgHd8FRebsk3CpErWPRZylRzhQwokjOabhGUpQfoXiv6G1_H5PaJD9BF4XCIItiSpwaCkOa7zWidAPVXSMkar-iZ-rJVTHQ-tcLWfOZYIaqYWBiZZCabKR75_d9WZdKayhHE8/s16000/flex-wrap.webp"
alt="Core Values ​​of flex-wrap"
title="Core Values ​​of flex-wrap"
/>
<figcaption>Core Values ​​of flex-wrap</figcaption>
</figure>

**Simple practical example:**
```css
.container {
  display: flex;
	flex-wrap: wrap; /* Allow elements to be wrapped */
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

### **2. `align-content` property: Distribute rows**
The **`align-content`** property is used to control the distribution of **rows** inside the container when there is more than one row. This property is only effective with the **`flex-wrap`** property when wrapping elements.

**Core Values ​​​​of `align-content`**:
1. **`flex-start`**: Group rows at the top of the container.
2. **`flex-end`**: Group rows at the bottom of the container.
3. **`center`**: Center the rows inside the container.
4. **`space-between`**: Distribute rows so that the spaces between them are evenly spaced.
5. **`space-around`**: Distribute the spaces evenly around the rows.
6. **`space-evenly`**: Distribute rows with exactly even spaces.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL1CahdyczECCmComNLg_NOK_1_v_0rx-1nPNb2VV9qNN9LHbcSri8Q2sSl2-MyeYPe3U3EXV2YbQbPC6Tk9qn3sexhiRHBSwoZDGtLtvj3Z8YWbp831mDBQ5fsmBhev_ujfUlnTANipQham4T83JFzcgC-SCo-8Plywwt02hms9O2mtPKfTuZHV21cO4/s16000/align-content.webp"
alt="Core Values ​​of align-content"
title="Core Values ​​of align-content"
/>
<figcaption>Core Values ​​of align-content</figcaption>
</figure>

**Simple practical example:**
```css
.container {
	display: flex;
	flex-wrap: wrap;
	align-content: space-between; /* Space the rows evenly */
	height: 300px; /* Ensure there is enough space for the rows */
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

### **Difference between `align-content` and `align-items`**
#### **`align-items`**
- Used to align **items within a row** on the vertical (cross) axis.
- Affects items individually within each row.

#### **`align-content`**
- Used to distribute **rows** as a whole within the container.
- Effective only when you have **multiple rows**.

**Example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcd69jbeYp52MiYlElXyqVtNaDsxtvWXpwalsJP95M9cjGbG-mnQrYO0lLq9B_LdFkIrHFypU09RUEPJaJldRi4kdjFwrMU53lml77jH5GRJM1z7uQGa7-qfD6vJNKV0HG86F7YBOJe0DxQU07wTOdxnPrmypNzVoQuC1O9MXNj2ksM2GwZ4qdyRVsIiQ/s16000/align-items-with-align-content.webp"
alt="Using align-content with align-items"
title="Using align-content with align-items"
/>
<figcaption>Using align-content with align-items</figcaption>
</figure>

```css
.container {
	display: flex;
	flex-wrap: wrap;
	height: 300px;
	align-items: center; /* Align items in the center of the vertical axis */
	align-content: space-around; /* Space rows evenly around them */
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

### **Important tips when using these properties**
1. If you need to **distribute items horizontally within a single row**, use **`justify-content`**.
2. If you are working with **multiple rows**, use **`align-content`** to distribute them appropriately.
3. **`align-items`** is the appropriate option to align items on the vertical axis within a single row.
4. Experiment with different values ​​for each property to get the most suitable design.

## **Flexbox `flex-flow` shorthand**

### **What is `flex-flow`?**
`flex-flow` is a shorthand property (**shorthand**) used to specify both **`flex-direction`** and **`flex-wrap`** properties on a single line.

Instead of writing the two properties separately, you can combine them together using `flex-flow` to simplify your code.

**General syntax:**
```css
flex-flow: <flex-direction> <flex-wrap>;
```

**Working example: Horizontal orientation with wrap**
```css
.container {
	flex-flow: row wrap;
}
```
- **`row`**: Elements follow the horizontal axis.
- **`wrap`**: If there is not enough space, elements wrap to a new row.

**Default values:**
If you do not specify the property, the default values ​​are:
```css
flex-flow: row nowrap;
```

### **Why use `flex-flow`?**
1. **Simplify the code**: Instead of writing the two properties separately, they are combined into one property.
2. **Ease of reading and maintenance**: It makes the code more clear and organized.
3. **Flexibility of customization**: You can combine any value for **`flex-direction`** and any value for **`flex-wrap`** according to your design needs.

## **Rearrange elements using Flexbox**

Flexbox provides multiple tools that allow you to reorder elements inside the container in a dynamic and flexible way. In this section, we will review the three basic methods that can be used to reorder elements, and we will explain how to implement them step by step.

### **1. Using the `flex-direction` property with reverse values**
- **`row-reverse`:** Reverses the order of elements horizontally, where the order starts from right to left.
- **`column-reverse`:** Reverses the order of elements vertically, where the order starts from bottom to top.

**Simple practical example:**
```css
.container {
    display: flex;
    flex-direction: row-reverse; /* or column-reverse */
}
```

### **2. Modify the order of elements in HTML directly**
- The simplest way to change the order is to modify the order of the elements in the code itself.
- For example, if the elements are arranged as follows:
  ```html
    <div class="box" id="one">Box One - 1</div>
    <div class="box" id="two">Box Two - 2</div>
    <div class="box" id="three">Box Three - 3</div>
  ```
  It can be simply rearranged to:
  ```html
    <div class="box" id="two">Box Two - 2</div>
    <div class="box" id="one">Box One - 1</div>
    <div class="box" id="three">Box Three - 3</div>
  ```

### **3. Use the `order` property in CSS**
- The `order` property gives you more flexibility in specifying the order of elements in a custom way.
- This property is only for Flexbox elements (elements inside a container that has `display: flex`).

**Simple practical example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRwc4bmxoIfdXborDRjgiSYvOQA7YYGdgjdKN9KFT3AMg1ZgkjmnGypM0VbiPRpLkHTVN-uN5ZFso7wWWi_gZvtc9R54qmgWCUn2mCEsPdHwFc5Ih8-ug4pcnEipYJLEtXzaIpx1zFnxAhxMMY1rQvx4FfzE2iqKA7vdKncU-ligkRhKUFeRbLpfac6qU/s16000/using-order-with-flex.webp"
alt="Using the order property in CSS"
title="Using the order property in CSS"
/>
<figcaption>Using the order property in CSS</figcaption>
</figure>

```css
.container {
	display: flex;
}

#one {
	order: 3; /* The first element appears in the third order */
}

#two {
	order: 1; /* The second element appears in the first order */
}

#three {
	order: 2; /* The third element appears in the second order */
}
```

## **Flexbox Element Control Properties**

To achieve greater flexibility in designing **Flexbox** elements, you can use five properties that affect the elements inside the container. Three of them affect the size of each element individually. The other gives the ability to control the alignment of a specific element inside the container.

The last one we talked about earlier is the **order** property. It is for changing the order of elements inside the container.

These properties give you control over how elements expand, contract, determine their basic size, or even align them inside the container.

### **1. align-self property in CSS**

The **`align-self`** property in CSS gives you the ability to control the alignment of a specific element inside a **Flexbox** container independently of other elements. It is used to override the value specified for the **`align-items`** property which affects all elements inside the container.

**Core Values ​​​​of align-self:**
1. **`auto`** (default value):  
   The element depends on the value of the **`align-items`** property of the container.
2. **`flex-start`**:  
   Positions the element at the beginning of the vertical axis of the container.
3. **`flex-end`**:  
   Positions the element at the end of the vertical axis of the container.
4. **`center`**:  
   Positions the element in the middle of the vertical axis of the container.
5. **`baseline`**:  
   Positions the element based on the baseline of the text inside the container.
6. **`stretch`**:  
   Makes the element stretch to fill the space available to it.

**Example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9Y8NpiSZagM6zmhqR8IZV9a7RZMX6-K36WgLzokT040E0L99VUcKp9NEJCMIeu5KxHYeARRCKsPTWkSMd_ii7cQIOOXL-308sdtR4zHD3e7VfH9XzfjktZqZFcwyxJiVFEyBM9AQTOfvQdFNcY_4pk9_X4p-E9hzEsO05MgdZu-VFNwBILuUsQ9_A4kc/s16000/align-self.webp"
alt="align-self property in CSS"
title="align-self property in CSS"
/>
<figcaption>align-self property in CSS</figcaption>
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

### **2. flex-grow property in CSS**
This property determines how much an element can stretch to occupy additional available space inside the container.

- **Default value:** `0` (the element will not stretch).
- **Positive value:** The higher the value, the more the element will stretch compared to other elements.

**Example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7Dptf0m-Ug7JjEGmfwnutj3QLi5vuq2J-NEu1e8dLf-wLxHXmnTUaO7OQNgH3SD5NzLQ_7zTOryKbo5oIrPkVNUVsoGQnFCV_bRTxztghvGan3TVlpYJ4z-JDnLehMxXDrrU1rKC4iGOvMPpKY09QJ6DXcbhyphenhyphentEeFOuF70lMgKGJf6M8Gkd8XEm4MvLM/s16000/flex-grow.webp"
alt="flex-grow property in CSS"
title="flex-grow property in CSS"
/>
<figcaption>flex-grow property in CSS</figcaption>
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
	flex-grow: 1; /* stretch by 1 */
}

#three {
	flex-grow: 2; /* stretch by more */
}
```
If there is extra space, `three` will expand to take up twice the space as `one`.

**Important Notes:**
1. Be careful when using **`flex-grow`** with **`flex-direction: row`**, do not use **`width`** to make the element stretchable horizontally.
1. Be careful when using **`flex-grow`** with **`flex-direction: column`**, do not use **`height`** to make the element stretchable vertically.

### **3. The flex-shrink property in CSS**
This property determines how much an element will shrink if there is not enough space in the container.

- **Default value:** `1` (item shrinks when needed).
- **Zero value:** `0` prevents the item from shrinking at all.

**Example:**  
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBtXpYAMcl1P-6gQQh2rlJ0nCCvlb2VhWTYyIsYC9NyWvt38kdE27FSK5GEu4MqK1zNLG0dudi0PePrqlJz9vNyn9ANkQrUSVdqL5z5LtdHITsFNPl8nKMjsk_3vn8-57OcG8IvhRJ6vkCMYFRi5Ulq3aptQoGBgXwkTptmdSkTQKA4MtFAHAYF9Ggt2I/s16000/flex-shrink.webp"
alt="The flex-shrink property in CSS"
title="The flex-shrink property in CSS"
/>
<figcaption>The flex-shrink property in CSS</figcaption>
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
	flex-shrink: 0; /* Does not shrink */
}

#three {
	flex-shrink: 1; /* Shrinks normally */
}
```
In case of lack of space, `one` will remain at its original size, while `two`, `three` will shrink to fit the space.

### **4. CSS flex-basis property**
This property specifies the base size of the element before the stretch or shrink properties (**flex-grow** and **flex-shrink**) are applied.

- **Accepted units:** Values ​​such as `px`, `%` or `auto` can be used.
- **Default value:** `auto` (base size depends on the content or width of the element).

**Example:**  
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXtqfkKW2GbWNMg_EXE2C5tpqaoxx-dO4O9rgrlhbXo7LpEzWREw9Q_muR5dd4Y3jzOQIyXRBg38NrAXVJTTOEAly74ReQUcUZPbKtmfbYPQt5zxKZqyUuz6BL0zGCEIG38W0q1j7t7Nsgtb5woNxsQCpK58SXdt6TRXGx6qbSFZFYr8KXakgRyA0bmAY/s16000/flex-basis.webp"
alt="CSS flex-basis property in CSS"
title="CSS flex-basis property in CSS"
/>
<figcaption>CSS flex-basis property in CSS</figcaption>
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
	flex-basis: 100px; /* base size 100px */
}

#three {
	flex-basis: 30%; /* base size percentage */
}
```
The size of the base element is determined, and then adjusted based on the available space and the values ​​of **flex-grow** and **flex-shrink**.

### **Combining the three properties together: flex**
To make the code more clear, the three properties (**flex-grow**, **flex-shrink**, **flex-basis**) can be combined into a single property called **flex**.

**Format:**  
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5XR2-OffcUNDREGK-1fRPWLPB8L873UZ1_E5bpsSX_6YzYNt5bx6WEIFstiQhNXGrsr_jtvT7N2nnARGFMehVsnwk31eA54TgCSXKGOxLuGoGmJLMymx4J3fY3XoBa03uv3VzRPsdp6SzCmNzrX-r-u478YX6PKcbrUrfpt0gvpagPNMVMGEbNhDQ36s/s16000/flex-shorthand.webp"
alt="Combining the three properties together: flex"
title="Combining the three properties together: flex"
/>
<figcaption>Combining the three properties together: flex</figcaption>
</figure>

```css
#one {
	flex: 1 0 100px; /* expands by 1, does not shrink, base size is 100px */
}
```

**Summary**
- **`flex-grow`**: Controls the expansion.
- **`flex-shrink`**: Controls the shrinking.
- **`flex-basis`**: Specifies the base size.

## **`gap` Property in Flexbox**

### **What is `gap`?**
- The **`gap`** property is used to specify the spacing between elements within a container.
- It works with **Flexbox** and **Grid Layout**, and provides a simplified way to separate elements without the need for margins (**margins**).

### **Available values ​​for `gap`:**
- **`gap: 10px;`**: Specifies the uniform spacing between elements.
- **`row-gap` and `column-gap`**: Used to specify the distance between rows or columns separately.

**Simple practical example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDSaJuQDFRBfz92MZPc6zBLK1C-bl5C5iHuGa5ypyR9oqWSnonN_oG18Du3yXqy7A3sL2epLDtOkgyg3X_GnJbERVb8gxfdSz6Aoc_OvcUs5id6DTw5m4rYIlRjbULh_lj-EGUiOCEeOVe5Obw0hCZrVDKowCpZGRzOHGrq7POgJ3PiBqCjF1kpT1bteM/s16000/flex-gap.webp"
alt="Available values ​​for gap"
title="Available values ​​for gap"
/>
<figcaption>Available values ​​for gap</figcaption>
</figure>

**Apply spacing between elements:**
```css
.container {
	display: flex;
	gap: 20px; /* Space between elements */
}
```

**Specify spacing between axes separately:**
<!-- Image 20 -->
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzffxJCRPv1qkHQA2Yg2lUbDZk0ViwMnb-ViC7SYjDuOr-UKHXWQhOYbfZMDGCoMG_ns1HXEMNi1dZhraTEzXV6BrVUkbX8RJUF0FxZDAyKOuzWWDa6SEg4dmB2PLFqUMg3QLOSSkdQ2wlJhjo9WG5teOVAX8ED8957Tqgmn08Uzlhy17lgaA84YkXfKE/s16000/flex-row-gap-column-gap.webp"
alt="Specify the distances between the axes separately."
title="Specify the distances between the axes separately."
/>
<figcaption>Specify the distances between the axes separately.</figcaption>
</figure>

```css
.container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	row-gap: 30px; /* Space between rows */
	column-gap: 10px; /* Space between columns */
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

### **Why is `gap` better than `margin`?**
- With **`gap`**, you don't need to add individual margins for each element.
- Simplifies writing code and ensures uniform spacing between elements.
- Works directly with **Flexbox** and **Grid Layout** containers.

**Advanced implementation using `gap`:**

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivdW0phETsKbszi5I1Kqrs3LJQOexO2xDzL_moryWcYe0LI3nL7pGi6pAKw3jwnPNdkvBat7zipNdDagnNKk9D6WfGZDh4boISsmbn3c1lYpxMiM3JWtEqyFUMc1cLkb036Bme3o82F4Bnc9h1qeFD4ti8lO69iuIUiJkgUq17SXBU1WbAUhBZCMC36e0/s16000/advanced-flex-gap-example.webp"
alt="Advanced implementation using gap"
title="Advanced implementation using gap"
/>
<figcaption>Advanced implementation using gap</figcaption>
</figure>

```css
.container {
	display: flex;
	flex-wrap: wrap; /* Allow wrapping of elements */
	gap: 15px; /* Uniform spacing between elements */
	justify-content: center; /* Distribute elements in the middle */
}
```

**Important Notes:**
- The `gap` property is supported in most modern browsers, but make sure to check compatibility if you are targeting older browsers.
- When combining `flex-wrap` and `gap`, spaces are also applied between wrapped elements.

**Using `flex-basis` and `gap`, you can design flexible and uncluttered user interfaces with cleaner and more efficient code.**

## **Difference between `flex-basis` and `width` in Flexbox**

### **1. `flex-basis` property:**
- Specifies the initial width (or length in the base axis) of elements inside the container **before applying flexibility properties** such as `flex-grow` or `flex-shrink`.
- Works only in Flexbox environment and is used to determine the ideal size of the element in the base axis.
- The default value is **`auto`**, which means that the element will take its size based on its content or any predefined value in CSS.

### **2. `width` property:**
- Specifies the fixed width of the element regardless of the Flexbox environment.
- Works in any environment (either Flexbox, Grid, or regular containers).
- If you use it with Flexbox, the `flex-basis` properties can override it if both are specified.

## **Additional Important Properties**

### **1. Dealing with long text inside elements**
**Problem:** Long text may extend beyond the element's boundaries.
**Solution:**
- Use the following properties to control text:

**practical example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNRRJjnDyuZTDrdmVd_yYLgWUnCaodlLc60UJ8fCQtG03sLMC21cNwwJeytXCtGyqDeR1Ku57JZPHEyj5g3ca3NQauj_bP1HTd3PkifK95y0RyXeS4_dEmDyEUIhUaEveNAFgOBZGfcHQJ33GMYFE2JD-B7zQEWv7ugC4ypED15KLYdSbwr6Qb3ZcaHJ0/s16000/flex-with-long-text.webp"
alt="Dealing with long text inside elements in Flexbox"
title="Dealing with long text inside elements in Flexbox"
/>
<figcaption>Dealing with long text inside elements in Flexbox</figcaption>
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

- You will see in the image that the texts are arranged better in the first element **`one`** on the contrary, in the second element you will see that the texts are out of control.

### **2. Using Flexbox with Media Queries**
- Flexbox properties can be easily changed with Media Queries to create responsive designs:

**practical example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyKXGZroX6UUQBQFh1Azx8k2bZmnqvt4G32hpTdEsEitTXMMtDXbx4PfUQKXmAuyZ-CkNBF95O-6fKTbcmlgi_aoUStf0296JaarwjE746oR43jJ4whrc018Qr8iZL0L4K-qeXo-NuGdJmyCW7_9xo3eJnPOiw1rl8sflFQhAY-JNVZwxzmw5-oWf8gcc/s16000/flex-with-media-query.webp"
alt="Using Flexbox with Media Queries"
title="Using Flexbox with Media Queries"
/>
<figcaption>Using Flexbox with Media Queries</figcaption>
</figure>

```css
@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}
```

## **Common Flexbox Errors and Solutions**

### **1. Items don't line up as expected**
**Problem:** When using Flexbox, you may find that items don't line up on the main axis or cross axis as expected.
**Solution:**
- Make sure the `display: flex` property is set on the container.
- Use `justify-content` to distribute items on the main axis.
- Use `align-items` to align items on the cross axis.

### **2. Items stretch undesirably**
**Problem:** Flexbox items may stretch unexpectedly, resulting in an inconsistent appearance.
**Solution:**
- Set `flex-grow: 0` if you don't want items to stretch.
- Use `flex-basis` to specify a fixed size for items.

### **3. Items don't wrap when needed**
**Problem:** When there are too many items in a container, items may stack instead of wrapping to a new row.
**Solution:**
- Use `flex-wrap: wrap` to enable wrapping of items.
- Use `align-content` to specify how rows are distributed when wrapping.

### **4. Uneven spacing between items**
**Problem:** Some items may appear unevenly distributed.
**Solution:**
- Use `justify-content: space-between` or `justify-content: space-around` to distribute items evenly.

### **5. Unwanted effects from default values**
**Problem:** Flexbox has default values ​​that can lead to unexpected results.
**Solution:**
- Understand default values: For example, `flex-shrink` is `1` by default, which means that items can shrink.
- Modify the default values ​​as needed (`flex-shrink: 0` or `flex-grow: 1`).

## **Flexbox in action**

### **1. Create a Header**
- Design a header that contains a logo, navigation menu, and buttons.


**practical example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir0FrtzNXdjLC2YteYgoLiwvdNDmP3OFOO8YXFpgZec_nYX9PA-eBD1gi-qzUnhAZV3TZyblj7bBJK4QEqLqa0RnCDETkNr-Md8wdx8wqWPm7tZbyrw_Nl3uuapIGpV2gv_1ZYZjHsWjZiAanoho1mRvjzvmV2nfx9lEVxtxIqqXUvsSid3Whnl89xvhs/s16000/header-layout.webp"
alt="Create a Header"
title="Create a Header"
/>
<figcaption>Create a Header</figcaption>
</figure>

**HTML Code**
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

**CSS Code**
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

### **2. Cards Layout**
- Create a simple grid of cards using Flexbox:

**practical example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisp3HwetlFbxV092WW-pc0Wc3T0sbda3Gw2WUqAzAv-zC5JfFQ0kVbszanVGMujKZDXu1hEWh-XkUWjdWQSEan3BIRgiGN59BYydbiIJvGHizfgG_BsrzX89h8NV3GzvRPWhegzmptN4MaOIaqckskk1oHoSxWBZhq9HoUC6nWxKu-oT7vdIuzvOzSKg0/s16000/cards-layout.webp"
alt="Cards Layout"
title="Cards Layout"
/>
<figcaption>Cards Layout</figcaption>
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

### **3. Footer Design**
- Distribution of content in the footer (links, copyright, etc.):

**practical example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgThq-mShQuHBurhnjs5vyrNqpTFQwOpn-J97a9qe8Z-tl2n618XDWcHWpEiSG_UKJ7_2j8m2QtiX510pdVYZHG8vu8uZxE6Sz52QxiUYmcSGpWCZ1-YYrK050ePZrbsp8syP25SYCGaz4bDE6mbBq7yvZRwnZrZnWyL1SYz5QgaaQBeZUM0DVJK1ZdZPs/s16000/footer-layout.webp"
alt="Footer Design"
title="Footer Design"
/>
<figcaption>Footer Design</figcaption>
</figure>

**HTML Code**
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

**CSS Code**
```css
footer {
    border: 2px solid #fff;
    padding: 10px;
}

.container {
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 15px; /* Uniform spacing between elements */
}

ul {
	list-style: none;
}

ul li {
	margin-bottom: 5px;
}
```

## **Comparison between Flexbox and CSS Grid**

### **Flexbox**
- **One-dimensional:** Controls layout on a single axis (vertical or horizontal).
- **Best use:** Layout components within a row or column, such as navigation bars or evenly distributing elements.

### **CSS Grid**
- **Two-dimensional:** Controls layout on both axes (vertical and horizontal).
- **Best use:** Create complex grids or design entire pages.

### **When to use each?**
- Use **Flexbox** to lay out simple elements and individual components.
- Use **CSS Grid** when you need to layout pages or grids with multiple columns and rows.

### **Combine the two**
- Flexbox can be used inside CSS Grid cells for greater flexibility:

**practical example:**
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEik0I9G6bMrAarhIPEQ0mjymYbJfTylze2huA8NMwpA_oCWveEf_Tqjlg7NCSeGKWp5PFfW0krMnrYDpoZ1gDGj28Nn4bbRbarUFOXytOPDWJ3pH_ATIyjWiJjAoIat5qep2sqEP_7ft9o-u-AATutOSBW_1Yas4cFnOu2bTO2mAQYWBlOMv5IMfrvjuGE/s16000/css-grid-with-css-flexbox.webp"
alt="Combine the two together CSS Flexbox and CSS Grid"
title="Combine the two together CSS Flexbox and CSS Grid"
/>
<figcaption>Combine the two together CSS Flexbox and CSS Grid</figcaption>
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

## **Conclusion**
Now that you know the power of **Flexbox** and how to use it to achieve attractive and flexible designs, it’s time to put what you’ve learned into practice. Feel free to experiment and play around with different features to understand more and discover its potential. Flexbox is not just a tool, it’s a game-changing solution that makes designing user interfaces fun and easy.

Go ahead and have fun creating amazing designs that will charm your users and make your work look more professional. Remember, creativity has no limits when you have the right tools. Good luck on your Flexbox adventure!
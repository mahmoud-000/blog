---
title: "Grid Secrets Practical Guide For Aligning Items in CSS"
date: 2024-12-23
draft: false
slug: "css-grid-design-page-professionally"
description: "Learn the basics of Flexbox in CSS to design and organize layouts effortlessly. Discover how to create flexible and responsive web designs professionally."
cascade:
  showReadingTime: true
categories: ['Web Development']
tags: ['Front-End','CSS']
---

Do you want to master the art of arranging elements on web pages professionally? Then, it's time to learn about the power of **CSS Grid**! This revolutionary technology gives you the ability to build flexible and easy layouts, making web page design more creative and efficient.

If you're looking to launch great web projects or improve your existing sites, CSS Grid is an indispensable tool. Let us take you on a fun journey to discover how this technology can transform the way you build your web pages!

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpJBuURthxvsgcAmmkvo8Q9ZfByyXSJ5lyrk5WlNO7SU5YVfJu5s7njjBDUIGL9Vkm5qdtOCNBc4tm42bwEdFOObXNw23ssFi2xm1eRomfOfr4S1C6aFeF7DQZt9gevBmRu8_T_MTtiPT35gud3hRPzueYGl6TOTS_8L9bC06MNB7NCNfg7pSOvDn0_kqC/s16000/css-grid.webp"
alt="Grid Secrets Practical Guide For Aligning Items in CSS"
title="Grid Secrets Practical Guide For Aligning Items in CSS"
/>
<figcaption>Grid Secrets Practical Guide For Aligning Items in CSS</figcaption>
</figure>

## Rows and Columns in CSS Grid: The Foundation of Grid Design
CSS Grid is a two-dimensional design system that lets you organize content in **rows and columns**, providing tremendous flexibility for creating innovative design layouts. Combining rows and columns allows you to create **custom areas** that can be named and used to organize content dynamically.

### Step 1: Define a Container
Start by setting the `display: grid;` property on the container element. Next, use the `grid-template-rows` and `grid-template-columns` properties to specify the number and dimensions of rows and columns.

**HTML Code**
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

**CSS Code**
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

### Spacing between elements (Gutters)
To specify the spacing between rows and columns, you can use the `grid-gap` property (or `gap` in modern versions). This property is also known as "gutters", and it ensures an orderly distribution of elements within the grid.
- For example, if you specify a value of `10px` for `grid-gap`, the spacing between each row and column will be 10 pixels.

### Setting up the grid: Analyzing the previous example
- We will have a grid containing **three columns and three rows**. In this case:
	 1. Each column will be 300 pixels.
	 2. Each side will be 150 pixels.
- To expand the grid to contain **three columns**:
	 1. Use the `grid-template-columns` property and specify values ​​for each column (example: `300px 300px 300px`).
	 2. If the dimensions exceed the width of the grid, increase the width of the grid using `width: 100%;` to ensure that the elements fit inside it.

With **grid-template-rows** and **grid-template-columns**, you can create complex grids that fit your site's needs. This grid can include rows and columns of different sizes depending on the nature of the content.

## **Controlling the spaces occupied by elements in CSS Grid**

In **CSS Grid**, you can control the spaces that each element occupies within the grid using properties such as:

### **1. `grid-row-start` and `grid-column-start`**
- **`grid-row-start`**: Specifies the start of the element on the vertical axis (rows).
- **`grid-column-start`**: Specifies the start of the element on the horizontal axis (columns).

### **2. `grid-row-end` and `grid-column-end`**
- **`grid-row-end`**: Specifies the end of the element on the vertical axis.
- **`grid-column-end`**: Specifies the end of the element on the horizontal axis.

**How ​​to use**
These properties allow you to specify where the element starts and ends using gridline numbers or keywords like **`span`** to stretch the element across a certain number of rows or columns.

**Practical example**

**HTML Code:**
```html
<div class="container">
  <header id="header">Header</header>
  <aside id="sidebar">Sidebar</aside>
  <main id="main">Main</main>
  <footer id="footer">Footer</footer>
</div>
```

**CSS Code:**
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

**Code Explanation**

- **`grid-row-start` and `grid-column-start`**:
	 1. Specifies where the item starts in the grid.
	 2. For example, **Item 1** starts from the first row and first column.
- **`grid-row-end` and `grid-column-end`**:
	 1. Specifies where the item ends.
	 2. For example, **Item 1** extends to the third row and third column.
- **Shortcut `grid-row`**:
	 1. Specifies where the item starts and ends in rows.
	 2. Separates the two values ​​with a comma `/`.
	 3. For example, **main** item.
- **Shortcut `grid-column`**:
	 1. Specifies where the item starts and ends in columns.
	 2. Separates the two values ​​with a comma `/`.
	 3. For example, **footer** item.
- **`span`**:
	 1. **`span`** can be used to specify the number of rows or columns an element should span.
	 2. For example, a **sidebar** element spans two rows.

**Bonus Tip**
To get the most out of this, you can combine these properties with **`grid-template-areas`** for a more organized and easily editable grid.

## Grid Areas in CSS Grid

One of the most powerful features of CSS Grid is the ability to specify the locations of elements within the grid using the concept of **Grid Areas**. This feature allows you to flexibly position elements across rows and columns using custom names.

### What are Grid Areas?
Grid areas are a shortcut that allows you to specify the spaces that elements occupy via properties such as:
- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Instead of using these properties separately, you can use **custom area names** that are assigned to elements via the `grid-area` property.

### How do grid areas work?

To create a grid with named areas:

1. **Use the `grid-template-areas` property** to specify the grid layout using text strings.
2. Give each element within the grid an ID or name that matches the name of the custom area in the grid.

**Practical example**

If you are designing a **simple blog**, you could set up a layout that includes:
- A header that spans the full width.
- A sidebar on the left.
- Main content in the middle.
- Footer at the bottom.

To complete the final design as follows.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizMsayUXFcSdGl97YaGZ8tKooVAlOC7yJhguzMm_rp7zioX1jZda3yqaCjTHvHTkQJbKudOJl0wOok5QI0vxfmRO-wDrdWViTJX0pubrn9MRjszy1qqShOtE1psrEHC1LmzwxQhawtDu6i3CLG3Cwst_w-8UQdJSlwvsHqUchow8NhfOVTElryJ-oN8O4/s16000/grid-areas.webp"
alt="Grid Areas"
title="Grid Areas"
/>
<figcaption>Grid Areas</figcaption>
</figure>

**HTML Code**
```html
<div class="container">
  <header id="header">Header</header>
  <aside id="sidebar">Sidebar</aside>
  <main id="main">Main</main>
  <footer id="footer">Footer</footer>
</div>
```

**CSS Code**  
Set up the grid using `grid-template-areas` with some colors for highlighting:
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

Assign areas to elements:
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

- Ensure that the number of columns in all rows is consistent in `grid-template-areas`.
- You can adjust the dimensions of columns and rows to suit your needs using `grid-template-columns` and `grid-template-rows`.

## Advanced Grid in CSS

The CSS Grid is one of the most powerful tools in web design, giving you precise control over how content is arranged on a page. With so many advanced features, it can get a bit overwhelming, but these features provide you with powerful capabilities for creating dynamic and easily customizable layouts. Some of these advanced features include:

### **1. `fr` Unit**
The `fr` Unit is a special unit in CSS Grid that allows you to distribute the available space on the grid. For example, if you want elements to occupy the remaining space on the grid after allocating fixed spaces to other parts, you can use `1fr` to specify that an element should take up a share of the remaining space.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIoioyIwzvPiWsofpGuZavm6AkNQKVsN_V-jFtvdVE1OU3bx6iMrEWONTb3cD11V_iavSIiGucPIGDBepRohN4eknwGNjyjadjGxseUrwoArDEmhEq4CWmiCZ0-Bbidt1Cbi4u92QtSZe2AX5_nUvlizKXs2U309_c7yx8ET3Mcpk2eGQ_FRlr6Koofcs/s16000/css-grid-fr-unit.webp"
alt="Fr Unit in CSS Grid"
title="Fr Unit in CSS Grid"
/>
<figcaption>Fr Unit in CSS Grid</figcaption>
</figure>

**HTML Code:**  
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

**CSS Code:**  
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

### **2. Use `repeat` to repeat columns**
Instead of writing `1fr` for each column, we can use the `repeat` property to repeat columns and make the code easier to write:
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

This code repeats `1fr` for three columns, making the code cleaner and more robust.

### **3. Using `minmax`**
You can specify a minimum and maximum amount of space a row or column can occupy using the `minmax` property. This property allows you to create flexible layouts where you can specify minimum and maximum values ​​for dimensions, so that the element stays within these limits regardless of the content.

**Practical example**

Let's take an example to illustrate how to use these features:
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

In this example:
- **`grid-template-rows`**: The three rows are set to a minimum height of 150 pixels, while if the content inside the box grows it expands to hold the content inside.
- **`grid-template-columns`**: The columns are split into three equal columns using `repeat(3, 1fr)`.

### **4. Automatic rows using `grid-auto-rows`**
If you want the rows to be dynamic, so that they adapt to the content, you can use `grid-auto-rows` with `minmax`. This is useful when you don't know in advance how many rows there will be (like in Facebook's newsfeed).

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikoiu5di1r-Jy8ZpgX_3Ow4KWTb6YDUXU_bcIwwCJ9rvOqqfnKQ9IZ4HBM-JBvnZkilvl5n4sakbWXXkCJHsjV012cnyyznazgCBTRqHDI7kYv911VxGB6nxQ_sntuku3ZRu5FqpZ-dTNzB3B6GWKQbb3PBxrDNbXi0NQYuv6jPvUyECJPWnLcMQiQs-M/s16000/css-grid-auto-rows.webp"
alt="Auto Rows in CSS Grid"
title="Auto Rows in CSS Grid"
/>
<figcaption>Auto Rows in CSS Grid</figcaption>
</figure>

**HTML Code:**
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

**CSS Code:**
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

Here, **`minmax(150px, auto)`** means that each row will have a height of at least 150 pixels, but it can be larger if the content requires it.

### **5. Automatic Columns Using `grid-auto-columns`**

The **`grid-auto-columns`** property in **CSS Grid** is used to specify the size of the columns that are automatically created when the content needs additional columns that are not available in the basic grid definition.

- **What it does**: Specifies the width of the automatic columns that are created when inserting elements outside the specified grid.
- **When to use?**: When the element has columns that exceed the columns specified in the **`grid-template-columns`** property.

**Practical example:**

**HTML Code:**
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

**CSS Code:**
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

**Code Explanation**
- **`grid-template-columns`**:
	 - Defines three columns with a fixed size of **1fr**.
- **`grid-auto-columns`**:
	 1. Defines the width of the auto columns to be **100px**.
	 2. When the fourth and fifth elements need additional columns outside the specified columns, auto columns with a width of 100px are created.
- **`grid-column`**:
	 1. Used to specify the position of the element on the grid.
	 2. **four** and **five** extend the auto columns.

**Customize Auto Columns**

You can use different units to customize the width of auto columns, such as:
- **Percentage (%):** `grid-auto-columns: 25%;`
- **Flexible Units (fr):** `grid-auto-columns: 1fr;`
- **Fixed Values:** `grid-auto-columns: 200px;`
- **Min and Max Values:** `grid-auto-columns: minmax(100px, 1fr);`

**Benefits of `grid-auto-columns`**

- Improves the layout of dynamic grids.
- Reduces complexity when dealing with content beyond the basic definition.
- Provides flexibility to expand the grid in an organized manner.

**Additional Tip**
- Do not use auto columns if you already know how many columns you need; use **`grid-template-columns`** instead to achieve a fixed and organized layout.

### **6. `grid-auto-flow` property**
**Definition:**

Specifies the direction in which new items are added automatically (rows or columns).

**Available values:**
- `row`: Add to rows.
- `column`: Add to columns.
- `dense`: Fill empty spaces.

**Practical example:**  
**HTML Code**  
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

**CSS Code:**  
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

- It is clear from the previous image that the new elements are added to the columns and not to the rows.

### **7. `grid` property (abbreviated)**
**Definition:**

Abbreviation for properties such as: `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`.

**Value:**

```css
  grid: 
    "header header" 50px
    "sidebar main" auto
    "footer footer" 50px
    / 150px 1fr;
```

**Practical example:**
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

**Code Explanation:**  
```css
"header header" 
"sidebar main" 
"footer footer"
```

- The grid is divided into three rows:
	- **The first row:** contains two areas named **`header`**, which means that the header spans the entire width of the grid.
	- **The second row:** contains two areas called **`sidebar`** and **`main`**.
		- **`sidebar`** represents the sidebar.
		- **`main`** represents the main area of ​​the content.
	- **The third row:** contains two areas named **`footer`**, which means that the footer spans the entire width of the grid.

```css
50px auto 50px
```

- **First row:** Its height is fixed at **50px**.
- **Second row:** Its height is **automatic**, so it adapts to the content inside it.
- **Third row:** Its height is fixed at **50px**.

```css
150px 1fr
```

- **First column:** Its width is fixed at **150px** (usually reserved for the sidebar).
- **Second column:** Its width is flexible using **`1fr`** (represents a flexible ratio, and occupies the remaining space of the grid).

### 8. Difference between **`grid-gap`** and **`gap`** in CSS

- **1. `grid-gap` (old)**

**Description**: A property used in CSS Grid to specify the spacing between rows and columns in the grid.

**Selectors**:
- `grid-row-gap`: To specify the spacing between rows.
- `grid-column-gap`: To specify the spacing between columns.
- Or **`grid-gap`** can be used to specify both spacings.

**Reliance**: This property is considered obsolete and has been replaced by `gap` in modern CSS.

**Example**:
```css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 10px; /* 20px for row spacing and 10px for column spacing */
  }
```

- **2. `gap` (modern)**

**Description**: A new and improved property that can be used with both **CSS Grid** and **Flexbox**, making it more universal.

**Selectors**:
- **`row-gap`**: Specifies the space between rows.
- **`column-gap`**: Specifies the space between columns.
- Alternatively, **`gap`** can be used to specify both values.
**Feature**: `gap` is compatible with both **grid** and **flexbox** designs, providing greater flexibility.

**Example**:
```css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 10px; /* Same effect as grid-gap */
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

**Best Use**

- **`gap`** is best because it is a modern standard and works with both **Flexbox** and **Grid**, making it the perfect choice for future designs.
- If you are working on legacy code that has **`grid-gap`**, it is best to update it to use **`gap`** to ensure compatibility with modern browsers.

**Support Note**

- **`gap`** is supported by most modern browsers, including Edge, Firefox, Chrome, and Safari.
- If you are targeting older browsers, you may need to test your code to ensure compatibility.

## **CSS Grid Distribution Properties**

### 1. **align-content**
Controls the distribution of the entire grid along the vertical axis.

**HTML Code:**
```html
<div class="container">
  <div class="box" id="one">Box One - 1</div>
  <div class="box" id="two">Box Two - 2</div>
  <div class="box" id="three">Box Three - 3</div>
  <div class="box" id="four">Box Four - 4</div>
</div>
```

**CSS Code:**

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

- Container height is 400px.
- Vertical alignment effect `align-content` in the middle.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl4nWtFHsWaqAAA4wAHjL-4I-mmeyI0H3GpV-G5qxHAdrQoFeiWGvd0ve4n3yxNqT-qmuStV_cLYgbOhcFWgo7LI38aVuJTb7D5_871LXiEelBDnNo4JEX9J7wFo0UprwTsKgw6RbbhbCWbyDblWikoYknKdvjZqKGlEfNn6oplBfAHGPSFx_3FyAbN5g/s16000/css-grid-align-content.webp"
alt="Align Content in CSS Grid"
title="Align Content in CSS Grid"
/>
<figcaption>Align Content in CSS Grid</figcaption>
</figure>

### 2. **justify-content**
Controls the distribution of the entire grid on the horizontal axis.

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

- Container height is 400px.
- Horizontal alignment effect `justify-content` in the middle.

### 3. **place-content property**
Short for `align-content` and `justify-content`.

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

### 4. **align-self**
Specifies the alignment of the element on the vertical axis (within the row).
- Values:
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

### 5. **justify-self**
Specifies the alignment of the element on the horizontal axis (within the column).
- Values:
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
  
### 6. **place-self**
Shorthand for `align-self` and `justify-self`.

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

## Difference between CSS Grid and Flexbox: Battle of the Modern Styles!
Welcome to the much-anticipated comparison between two of the greatest web interface design tools: **CSS Grid**, the newcomer that revolutionized grid design, and **Flexbox**, the veteran that once changed the rules of the game.

But let’s end the speculation early: **CSS Grid** is not the nullifier of Flexbox**, and vice versa. Each tool has capabilities that the other can’t achieve, and in fact, combining them can produce stunning designs that suit a variety of web page needs.

### CSS Grid: The Champion in Creating Complete Layouts
**CSS Grid** is a great tool for creating complex and custom layouts for web pages. It handles design at the full grid level, making it ideal for dividing a page into key areas or creating consistent layouts.

### Flexbox: The Master of Content Flow
**Flexbox**, on the other hand, is the best choice for distributing elements within each section of a page. It focuses on handling individual elements within containers, ensuring a flexible and fluid arrangement that adapts to different screen sizes.

### Working together: A powerhouse combination
The real power lies in the combination of **CSS Grid** and **Flexbox**. **Grid** can be used to define the overall structure of the page, while **Flexbox** is used within each section of the layout to distribute elements in a dynamic way.

In this article, we will explore the differences between them, explain how each works, and how to combine them to create stunning and functional designs that suit different needs. Get ready to dive into the details of **CSS Grid** and learn how to use it to create professional layouts with ease.

### Practical example: Combining CSS Grid and Flexbox

To understand how **CSS Grid** and **Flexbox** can work together, let's take a look at a Practical example I created. We'll walk through it quickly, and during the lesson you'll learn how to build this example step by step.

**Container Setup**  
```html
<div class="container">
  <div class="box" id="one">Box One - 1</div>
  <div class="box" id="two">Box Two - 2</div>
  <div class="box" id="three">Box Three - 3</div>
  <div class="box" id="four">Box Four - 4</div>
  <div class="box" id="five">Box Five - 5</div>
</div>
```

First, we created a **container** and used the `display: grid;` property to define it as a grid. Next, we set the **columns and rows** using the `grid-template-areas` property.

**Distribute elements within the grid**  
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

In this example, the container contains five elements inside it. The container itself is set to a **grid**, while each element inside the container has the `display: flex;` property set to it.
- This setting makes the text inside the elements appear in the **center**.
- If we remove the `flex` property from the elements, all the content will return to the top-left corner, showing the importance of flexbox in distributing elements.

### Optimizing layout using shared properties
Although **Flexbox** is used inside elements, **CSS Grid** supports optimizing the distribution of the entire container. For example, we can use the `justify-content: center;` property to center the grid itself.

**Final result**  
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtIpIE-bzd_Od9uSmhYLTbg_ZyOw3LLj54yE4Zjiv-tGSEHK3ud0flO8LzxZXEjkLFQsq44ADZro6MnEv-wAa6UKyGoMP0u2W8goDNzd728pgFX_9hg2F_LeRTLXaf8VvgQCxnjp10331oOxlERmP5ri2HpJNjQ3-qZH9KxniQIqmyj_YA79oQfRjglys/s16000/css-grid-with-flexbox.webp"
alt="CSS Gid with Flexbox"
title="CSS Gid with Flexbox"
/>
<figcaption>CSS Gid with Flexbox</figcaption>
</figure>

The result is a grid layout of **two columns and two rows** with elements arranged beautifully in the middle. This example shows how **CSS Grid** and **Flexbox** can complement each other to create attractive and flexible designs at the same time.

This is just the beginning of what can be achieved using these two tools together!

## Conclusion

In the end, **CSS Grid** is one of the most important tools that every modern web developer should master. Thanks to its power and flexibility, you can design any type of layout from simple to complex, while ensuring that it is responsive on different devices.

Whether you are a beginner or a professional, this technique will open up a wide range of possibilities for you. Now it is your turn to put what you have learned to use and turn your ideas into reality on your web pages. Have fun designing, and always be creative!
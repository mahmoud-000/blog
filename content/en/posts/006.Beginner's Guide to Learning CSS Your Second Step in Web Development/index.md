---
title: "CSS from Beginner to Pro: How to Design Flexible and Stunning Web Pages"
date: 2024-12-09
draft: false
slug: "css-from-beginner-to-expert-flexible-stunning-web-pages"
cascade:
  showReadingTime: true
categories: ['Web Development']
tags: ['Front-End','CSS']
---

If you want a deeper understanding of how websites and designs work, you need to look beyond the code.

In this article, we’ll take you on a journey that starts with the developer tools inside the release, through understanding how the browser converts text into an element tree, and then, to always having access to a tool application using CSS.

You’ll also learn how to write instructions, work with directories, and understand kernels, making it possible for you to design websites in a completely effective way.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7qQ3hW2oiUWfcvKzsf4m7Mi33AeQaH0VFejrwk7ZZ9cm5ctQ_Ien7spFsQq9nislrnHvC8akaMPzfhakF-AYiLd154AFaFpxO5ZaW951zEODwc3j7-sRPono_EeW7yviZ9sOJpm0vKudliQFKZx6kt7L_ZwZXDpm8miuJ4EzZ-vQ4K1Wk5GYgV7D-OKyy/s16000/css-basics.webp" 
  alt="CSS from Beginner to Pro: How to Design Flexible and Stunning Web Pages"
  title="CSS from Beginner to Pro: How to Design Flexible and Stunning Web Pages"
  />
  <figcaption>CSS from Beginner to Pro: How to Design Flexible and Stunning Web Pages</figcaption>
</figure>

## Developer Tools Within a Web Browser

Most web browsers come with **Developer Tools** which are a powerful tool for any web developer. These tools allow you to edit HTML and CSS code directly in the browser and see the results instantly.

However, it is important to note that these changes are not automatically saved; they are simply a way to preview the impact of code or test ideas on a web page under development.

### How to access Developer Tools

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI0nrmBSophE-YH15OTUUgaiV0sd1D6xQTbM_f4iX7yRS139iMPUhd27bbyqOp3kHsYWhxQ0mSUAhoYbEqHHmbqgESNPBdOcyAl4qVhIdcPDhOmnfA22r7QmYHvCR9mYAhji0wm8aepKVgB4mdh0BfWe2IZ0X2JAZEzr4yU7bdvUWFkw/s1600/developer-tools%20(1).webp" 
  alt="How to access Developer Tools"
  title="How to access Developer Tools"
  />
  <figcaption>How to access Developer Tools</figcaption>
</figure>

You can easily open the developer tools by right-clicking on any part of the page and then choosing **Inspect**, depending on the language of the browser used. A window will appear containing a set of tabs, the most important of which is the **Elements** tab.

Or by using the following shortcut ***ctrl + shift + c***.

### Explore the Elements - Inspector tab

Through the **Elements** tab, or in some browsers you will find it called **Inspector**, you can browse the HTML and CSS codes for the page. Many modifications can be made, such as:
- Changing the colors of texts and backgrounds.
- Modifying the sizes of fonts and page elements.
- Activating or disabling CSS properties using the checkbox next to each property.

Using the developer tools regularly will help you understand how websites work more deeply and improve your skills as a professional web developer.

## From Text to Trees

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJJY6G1coVpU-5vTNQu_-gQ-GBAKriN9c2SUpouolKQKhOduYq_KTSnc6AljJ_hb4BHPZrXJlVMgJuDi6DpVeHH6iNL3FbwJG10sVyKAQOcOU-HV_syZQn9_bIIEc2Rbt3XRzVRxJarm1wJhux3F1Gc_K8XohaOsPZlqI0ROkLYrIUKVTBZX_32ibJQew/s16000/html-code-to-dom-to-browser-view.webp" 
  alt="From Text to Trees"
  title="From Text to Trees"
  />
  <figcaption>From Text to Trees</figcaption>
</figure>

When you write an HTML document and display it in a browser, the display is different from what you wrote in the code page. This is because of an internal transformation called the **DOM** or **Document Object Model**.

The browser converts the HTML code into a **tree** of code so that it can interpret it correctly. For example:
- Numbered lists in HTML are automatically converted to elements with numbers, even if those numbers are not written in the original code.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK1_jQuoV-MzVIi1RKsdjrmQItfpeyvZ2nGefPCeZW0oRWHgTflgf78YMx3mG-KAM3a3_0WeLBNP8kBGHu6sgK4Hm1AHK89XwHZn2Lxq-imUvgo2YoCvNXWufCYL-z6c6_r2sML5p9kWZBiNC_FcC8LDMEXh-ZpNDj9FgeIAkRXJHFd2bbGicWHDhIvAw/s16000/translate-html-code.webp" 
  alt="Ordered lists in HTML"
  title="Ordered lists in HTML"
  />
  <figcaption>Ordered lists in HTML</figcaption>
</figure>

## Tree Structure

Tree structure is not just a concept of HTML, it is a fundamental part of computer science. The tree consists of parts known as **Nodes**, which are connected by relationships called **Branches**.

**Example**

Let's imagine an apartment with multiple rooms:
- The bedroom contains a **bed** and a **wardrobe**.
- The bed contains a **pillow**, and the closet contains **shelves**.

Each element here represents a **Node**, and the arrows connecting these elements are **Branches**.

In the same way, HTML codes are written according to the tree structure. For example:
- The root node is the tag `<html>`.
- The root contains the tags `<head>` and `<body>`.
- Inside `<head>` we can find `<title>` tag.
- Inside `<body>` we can find paragraphs, lists and other elements.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhukdGx4GJLm7QeEyF-PcwWQHRVHjAvQw9JILVUhoVztfqAmc_bBiJFk_dolUzF6mfSZwpj0LgvnaOCqycxp2sXqq0MbQ96DsHgo84b_Q6muzieYWbAgAyNNutG5HMCE89_CK8ekOotol5REk11iMbD8sSxWUc3uuKNqpKOqzrzANp36uOXbaWQzBXg8rU/s16000/tree-structure-dom.webp" 
  alt="Tree Structure"
  title="Tree Structure"
  />
  <figcaption>Tree Structure</figcaption>
</figure>

### Basic rules of tree structure:
1. A tree must have only one root.
2. Each **Node** can have branches that lead to other nodes.
3. Each **Node** has only one parent except the root.

## Trees to Boxes

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihH_bkcglPgU-xVZ97vqPnex99ovB53dUrVVm7FjigT6UODM_hyphenhyphenCFKk6CKdvBakPeBIPvEOGMErQ97_gR2iExFcuZ5XZdewDgjgqkTfIq8U_JsB6X8W1p5oKH00N6DP-1ynwp9DvUGIuQLKGynkZ3ERZNde8grGIT_DEkVIvq-aOOAuu7Jbs6jaqSBbbk/s16000/tree-to-boxes-in-html.webp" 
  alt="Trees to Boxes"
  title="Trees to Boxes"
  />
  <figcaption>Trees to Boxes</figcaption>
</figure>

After the browser converts the HTML code into a tree structure, this tree is converted into boxes that appear on the user's screen.

Each **Node** in the tree is converted into a box, and the box may contain smaller boxes inside it or be part of a larger box.

**Working example**

Let's assume that we write the following code:

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

- The `<ul>` list is converted to a large box.
- Each `<li>` element represents a smaller box inside the large box.

With the help of CSS, you can modify how these boxes are displayed, such as placing them next to each other instead of arranging them vertically.

## CSS Syntax

A CSS rule consists of two main parts: the **Selector** and the **Declaration Block**.

- The **Selector** is the part that specifies which elements in the HTML the rule will be applied to.
- The **Declaration Block** contains instructions that specify how these elements are to be modified.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM5-lA8H-iSKHQ9M4bIeJ1khwIfRevydoKJJBGV27wU95D2im_3_x4vyc1PhWiYXMFYJRJZLjyneLi_NP9v4qh-l1qXL15Tg8O8S3bdWiPcUSCl5R-hLbwQNX8BXEFiUObpiFKg1oAoSu_zZI7og4Ar5S3SOrFmbq-WHNUdmy2uu8El7R_XSBmO9OfGAw/s16000/css-syntax.webp" 
  alt="CSS Syntax"
  title="CSS Syntax"
  />
  <figcaption>CSS Syntax</figcaption>
</figure>

For example, if we wanted to turn all `<li>` elements green, the selector would be `li`, and the declaration block would contain:
```css
color: green;
```

### How to write CSS rules
CSS rules are written in the following format:
1. It starts with **the selector**, which is the part that defines the target elements.
2. The brackets `{}` are used to define **the declaration block**.
3. Inside the brackets, the declarations are placed, and each declaration consists of:
    - **Property**: such as `color` or `font-size`.
    - **Value**: such as `green` or `larger`.
    - Each declaration ends with **a semicolon** (`;`).

**Examples:**
1. The first example: Formatting all elements of the paragraph `<p>`:

**In this example:**
  - **Selector**: `p` (applies the formatting to all paragraphs).
  - **Declarations**: `color: purple;` and `font-size: larger;`.
```css
p {
  color: purple;
  font-size: larger;
}
```
2. Example 2: Formatting elements with the class "weird":
  ```css
  .weird {
    width: 50%;
    color: blue;
  }
  ```
  Here, elements are targeted using a period (`.`) followed by the class name.


## Applying styles directly to HTML (Styling HTML Directly)

### 1. Style using the `style` attribute
You can apply styles directly to HTML elements using the **`style`** attribute.

For example, if you want to change the color of all `<li>` elements to green, you can write: 
```html
<li style="color: green;">Item 1</li>
<li style="color: green;">Item 2</li>
<li style="color: green;">Item 3</li>
```

**Disadvantages of this method**

- **Duplicate**: You need to manually add the attribute for each element, which causes a lot of duplicate work.
- **Complexity**: If an error occurs in one element, it will be difficult to detect and correct it.
- **Maintenance**: Making changes to the layouts becomes cumbersome if you need to manually modify all the elements.

### 2. Solution: Use CSS to avoid duplication
You can avoid these drawbacks by using **CSS** to apply the rules centrally. Instead of specifying the `style` attribute for each element, you can:
- Create a CSS rule inside the `<style>` element in the `<head>`:
  ```html
  <style>
    li {
      color: green;
    }
  </style>
  ```
- This rule will be applied to all `<li>` elements on the page automatically.

### How does a browser work?

When building a page, the browser uses the DOM tree to select elements and apply rules. CSS determines colors, shapes, and page layouts based on these rules.

## **Selectors Type**

In CSS, selectors are the way you tell the browser which elements you want to apply rules to. The simplest type of selector is the **Type Selector**, which is used to select a specific element based on its HTML name, such as `p` (for paragraphs) or `em` (for italics), and even `body` (to apply the style to the entire document).

### **How ​​to Use a Type Selector**
For example, we could write a CSS rule that changes the font of text throughout a document:
```css
body {
  font-family: Arial, sans-serif;
  color: #333;
}
```
This rule will make the font used throughout the document Arial, and the text color dark gray. 

### **Importance of Type Selector**
- **Wide Application**: If you are writing an article that contains many headings like `h1` and `h2`, you can use the type selector to apply styles to all elements of a particular type at once.
- **Ease of Use**: Instead of writing separate styles for each element, one rule can be used to cover all elements of the same type:

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

## **Selectors: Class and ID**

It is not always necessary to apply the same style to all elements of the same type. For example, if you have an article that contains a **sidebar**, you may want to assign different styles to the paragraphs within the article compared to the sidebar.

### **What is a Class?**
A class is an attribute added to tags in HTML to define a group of elements that share the same properties. A class is written in CSS using a period (`.`) followed by the class name:
```html
<p class="article-text">This is text in the article.</p>
<p class="sidebar-text">This is text in the sidebar.</p>
```
```css
.article-text {
  color: #000;
}

.sidebar-text {
  color: #777;
}
```

### **What is an ID?**
An ID is similar to a class but is for **unique** elements. Each ID should have only one value on the page. An ID is written in CSS using a hash tag (`#`):
```html
<p id="main-heading">This is a main heading.</p>
```
```css
#main-heading {
  font-size: 28px;
  text-align: center;
}
```

### **Difference between Class and ID**
- **Class**: Used for multiple elements.
- **ID**: Used for unique elements.

## **Combining Selectors**

CSS allows combining selectors to apply specific styles to elements according to their sequence or relationship to other elements. For example:
```css
li em {
  color: red;
}
```
This style applies to italicized elements (`em`) inside list elements (`li`). If you have the following code:
```html
<ul>
<li><em>Featured Element</em></li>
<li>Normal Element</li>
</ul>
```
The red style will be applied to text inside the italicized element only.

### **Other types of built-in selectors**
- **Descendant Selector**: Targets all children of specific elements.
- **Child Selector**: Targets only direct elements.

## **Why is it called "Cascading"?**
"Cascading" in CSS refers to the way styles are determined for each element based on the relationships between nodes in the DOM tree.

### **How ​​do cascading rules work?**
When a rule is defined for a specific node, the styles are **inherited** to all child nodes unless they are overridden:
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
- **Main node (`body`)**: All text starts in dark gray.
- **Headings (`h1`)**: Gets orange.
- **Italics (`em`)**: Gets red if the rule is not overridden.

### **Style priority**
When there is a conflict between rules, styles are applied according to the priority principle:

1. Styles defined inside the element (Inline).
2. Styles with the most specific selectors.
3. Global styles.

CSS is a very powerful tool for styling web pages, and understanding how selectors and the concept of cascading work helps you create more organized and efficient websites. If you want to go deeper, check out [Mozilla's comprehensive CSS guide](https://developer.mozilla.org/en-US/docs/Web/CSS).

## A comprehensive guide to CSS units, boxes, and percentages.

### 1. **CSS Units: Understanding the Basics**
CSS (Cascading Style Sheets) gives you the ability to modify the layout of elements on a page in terms of size, shape, and location. To understand where elements are located and how they are organized, we need units of measurement.

**Basic Units in CSS**:
- **Pixel (PX)**: This is the basic unit of measurement. In CSS, a pixel is defined as 1/96 of an inch, regardless of the screen resolution.
- **Points (PT)**: These are primarily used to specify font sizes, with a point representing 1/72 of an inch.
- **Relative Units (EM and REM)**:
  - `EM`: Depends on the font size of the parent element.
  - `REM`: Depends on the root font size.

**Working example**:
```css
.skinny {
width: 192px; /* Element width */
height: auto;
}
```
An element with the class `skinny` will appear 2 inches (192 pixels) wide.

### 2. **The concept of boxes in CSS**
When rendering HTML, each element has an invisible "box" that can be modified using CSS. The basic elements you can adjust include:
- **Size**: width and height.
- **Padding**: the space between the content and the element's border.
- **Border**: its thickness, color, and style can be specified.
- **Margin**: the space between the element and the surrounding elements.

**Working example**:
```css
.box {
  width: 100px;
  height: 50px;
  border: 5px solid green;
  margin: 1em;
  padding: 0.5em;
}
```
This code creates a box with a width of 100px, a height of 50px, and a green border, with an inner spacing and an outer margin.

### 3. **Percentages in CSS**
CSS allows values ​​to be specified as a percentage of the size of the parent element. For example:
- When an element is specified as `50%`, it will take half the width of the parent element.
- **Borders and paddings**: Note that percentages do not include the border and padding.

**Working example**:
```css
.parent {
  width: 500px;
}

.child {
  width: 50%; /* half the width of the parent element */
}
```

### 4. **Separate formatting from structure**
To save effort and improve project management, CSS formatting can be placed in a separate file and linked to the HTML file using the `<link>` element.

**Working example**:
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
This approach makes updates easier and enhances reusability.

## Introduction to Fonts in CSS

Fonts play a major role in improving the user experience and making the site visually distinctive. Using CSS, you can have complete control over the appearance of the texts on your site, from choosing the font type to specifying its size and style.

### What is a font in CSS?

In the world of CSS, what we know as a font is known as a **Font Family**, which refers to the type of font such as "Times New Roman", "Helvetica", or "Impact". When the `font-family` rule is applied to a specific element, the text will be displayed using that font if it is available on the user's device. If it is not available, the text will fall back to the default font, which is usually a simple and uncomplicated font such as "Times".

To avoid problems caused by unavailable fonts, you can use a set of fonts called a **Font Stack**. For example:

```css
font-family: "Constantia", "Georgia", serif;
```

In this example, if the font "Constantia" is not available, "Georgia" will be used, and if neither is available, any "Serif" font will be used.

### Generic Font Families

CSS provides five generic font families that you can rely on as a backup plan:

1. **Serif**: Fonts with decorative edges.
2. **Sans-serif**: Simple fonts without decorations.
3. **Monospace**: Fonts with a fixed width for each character.
4. **Cursive**: Italic fonts that resemble handwriting.
5. **Fantasy**: Decorative fonts.

### Controlling Font Properties

CSS allows you to control additional properties of fonts:

- **Font Size**: Using the `font-size` property. You can use units like `px`, `em`, or even `rem`.
- **Line thickness**: Using the `font-weight` property like `bold`.
- **Line slant**: Using the `font-style` property like `italic`.
- **Underline**: Using the `text-decoration` property like `underline`.

### Writing font properties on one line

To combine all font properties on one line, you can use the `font` property. But you must stick to a specific order:

```css
font: italic bold 16px/1.5 "Helvetica", sans-serif;
```

**In this example:**
  - **italic** to specify the slant.
  - **bold** to specify the thickness.
  - **16px** to specify the size.
  - **1.5** to specify the line height.
  - **"Helvetica", sans-serif** to specify the font family.

## Flexbox: Flexible Design with CSS

The default layout techniques of browsers were based on traditional document design, where elements are arranged vertically from top to bottom. However, web technologies have evolved and require more flexible designs, which **Flexbox** enables.

Flexbox allows for dynamic design that adapts to different screen sizes, making it ideal for designing responsive websites.

### Key Features of Flexbox

1. **Order Elements Horizontally**: Once you set the `display: flex` property on the container, the elements inside it will be arranged horizontally.
2. **Wrapping Elements**: Using the `flex-wrap: wrap` property, elements can move to a new line if there is not enough space.
3. **Space Distribution**: Using the `justify-content` and `align-items` properties, you can control the alignment of elements and the distribution of spaces between them.

## Designing an XO game without Flexbox
Have you ever wondered how you could design an **XO** game board using simple CSS tools? Let's do a fun exercise where we go through the traditional way of designing a game board, and then compare it to a design using **Flexbox** to understand the difference.

1. **Step 1: Build the Structure with HTML** 
  We'll start by creating an HTML file containing the game elements:
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
2. **Step 2: Design using CSS** 
  We'll add a little styling to make the elements look like they're part of a real game:
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
3. **Final result:** 
  When you open the file in a browser, you will get a grid that simulates the **XO** game board, but relies on the traditional technique of using `float` to arrange the elements.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8ZA0U35ZOVp4IwQQ7hvdYgpZTA6Lei_7AoVbXZhkATH5J1G1BhbsPzksk4vX_i6r4k82EQPiRr4qvnPs9sSkr85KuOJ_rbRz6lXbCESA07l2f_Yedly0WeuemVfkNUtxzjhPPyggjMUWnDLboUcnegiFh3EQU6BMyeLRDQQ-jf1Jhsm_lupA1aoEJeGw/s16000/XO-game.webp" 
  alt="XO game"
  title="XO game"
  />
  <figcaption>XO game</figcaption>
</figure>

## Designing XO Game Using Flexbox
Now, let's review the modern and effective way to design the same game board using **CSS Flexbox**. You will be amazed at how easy and flexible this method is compared to the traditional method.
1. **Step 1: Setting up the design using Flexbox** 
  Using Flexbox, we will redesign the game board in a more organized and less complicated way:
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
2. **The end result:** 
  A sleek, flexible design that can be easily adjusted to fit different screen sizes, making it ideal for modern web requirements.

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8ZA0U35ZOVp4IwQQ7hvdYgpZTA6Lei_7AoVbXZhkATH5J1G1BhbsPzksk4vX_i6r4k82EQPiRr4qvnPs9sSkr85KuOJ_rbRz6lXbCESA07l2f_Yedly0WeuemVfkNUtxzjhPPyggjMUWnDLboUcnegiFh3EQU6BMyeLRDQQ-jf1Jhsm_lupA1aoEJeGw/s16000/XO-game.webp" 
  alt="XO game"
  title="XO game"
  />
  <figcaption>XO game</figcaption>
</figure>

**What makes Flexbox special:**
  - `display: flex` creates a flexible system for arranging elements.
  - `flex-wrap: wrap` ensures that elements move to the next line automatically.
  - `justify-content: center` and `align-items: center` make boxes and text easily centered.

By comparing the two methods, we can see the power and flexibility of **Flexbox** compared to the traditional method. Designing with Flexbox is not only easier, but it also opens up more possibilities for adding improvements and adapting to perfectly responsive designs.

## **Conclusion**
Congratulations! You have taken an exciting journey through the depths of browser developer tools and the tree structure to boxes. You have taken another step forward in the world of [web development](https://www.fullstackee.com/2024/11/web-development-101-basics-to-start-your-journey.html).

You have learned how to write CSS rules, understand selectors, their types and importance, and learned how to use Flexbox to achieve flexible and attractive designs.

With this knowledge, you are now ready to apply it to your next projects [as a front-end developer](https://www.fullstackee.com/2024/11/how-to-become-frontend-developer.html) with confidence and professionalism. Remember, creativity begins with understanding, and excellence comes with practice. Keep learning, and enjoy creating great designs!

CSS is a vast ocean. The most important advice is to rely on reliable references such as:
- [Mozilla Developer Network (MDN)](https://developer.mozilla.org).
- Search using search engines to access practical examples and documentation of features.
---
title: "Everything you need to know about Head and semantic tags in HTML"
date: 2024-11-26
draft: false
slug: "head-and-semantic-tags-in-html"
description: "Learn the basics of HTML from head to semantic tags to improve page layout and understand search engines."
cascade:
  showReadingTime: true
categories: ['Web Development']
tags: ['Front-End','HTML']
---

HTML basics are one of the most important pillars that every web developer builds their website on. In this article, we will cover the most important concepts that every beginner and developer should understand, from the page header to the semantic tags that help search engines better understand the structure of the page.

Are you ready to explore these essential elements that contribute to building great web pages? Follow along to learn how to use them correctly.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdtU4Y4y1L9ctHaHZ_ng2Mz7SfUIZLFR3MUjksxeUd7Ensan98P0810S2iFavChDZpEKW0jjwrZQuAjJbT2pTX-uFXfMVJam1e1aF9IrplGkigdd_ONgWl4hY0ow7Ggs6caSqDx4OeRfvryMRA6L8OMgjUI7v61Ch7H229h8Nny6FBziIDf2OD3KlWDgiz/s16000/head-and-semantic-elements-in-html.webp"
alt="head-and-semantic-elements-in-html"
title="Everything you need to know about the page head and semantic tags in HTML"
/>
<figcaption> Head and Semantic Elements in HTML</figcaption>
</figure>

## The *head* tag in HTML

The `<head>` tag is one of the basic elements in an HTML document, as it contains information and data that is not directly displayed to the user, but it plays a vital role in organizing the page and improving its performance. To understand the function of this tag and its components, let's look at the following example:

```html
<!DOCTYPE html>
<html>
<head></head>
<body></body>
</html>
```

- An HTML file contains only one `<head>` tag.

### The function of the *head* tag in HTML

The data or elements inside the `<head>` tag are not visible to the user when the page is viewed in the browser. However, it has important functions related to improving the user experience, providing information to search engines, and linking the page to additional files, styles, and codes. These functions can be divided into:

1. **Defining the page content**: Providing descriptive information that helps search engines and browsers understand the content of the page.
2. **Improving performance**: Linking external style sheets (CSS) and JavaScript.
3. **Adding special settings**: Providing settings related to the page's compatibility with different browsers and devices.

### Elements inside the *head* tag

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPoCzjJwP0NjntI8f3oUHv7vJNc5Ut4hS6o1V-xYVFFsmjjgMjMvuIMA0FkZ3C67F-4jRTeK12kgJQriXVgMo1ABTDeRGP6KiZolEo0THLLZCx6Q_d4wh8Sm8tbs0FnAWJnjFKYsKfpdZdF6gPFawqUROKAsswxBcXOpYxX_7NsqQa-Yxk610QZzHEsW32/s16000/title-tag-and-favicon-in-html.webp" 
  alt="title-tag-and-favicon-in-html"
  title="Elements inside the head tag"
  />
  <figcaption>Elements inside the head tag</figcaption>
</figure>

The `<head>` tag includes a set of tags, some of which are mandatory and others are optional, which are:

#### 1. ***title* tag in HTML (mandatory):**
It specifies the page title that appears in the title bar or tab in the browser. This title is also important for improving the page's ranking in search engines.

```html
<title>Page Title</title>
```
- Always include the `<title>` tag as it is mandatory to improve user experience and page ranking in search results.

#### 2. ***meta* tag in HTML (optional but important):**

It is used to specify descriptive information about the page such as markup, description, keywords, and browser settings.

Examples:
```html
<meta charset="UTF-8">
<meta name="description" content="Page description here">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- The `<meta>` tag for `viewport` is necessary to make your site compatible with small screens such as smartphones.

#### 3. **HTML style tag (optional):**

Used to add internal CSS styles that affect the appearance of the page.

```html
<style>
body {
font-family: Arial, sans-serif;
}
</style>
```
- Minimize the use of the `<style>` tag within the page itself, and replace it with external CSS files via the `<link>` tag to improve the organization of the code and ease of updating.

#### 4. **HTML *link* tag (optional):**

Used to link the page to external files such as CSS files or any other resources like favicon.

```html
<link rel="stylesheet" href="styles.css">
<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
```

#### 5. **HTML *script* tag (optional):**

Used to add or call JavaScript codes that implement interactive functions.

```html
<script src="script.js"></script>
```

#### 6. ***noscript* HTML tag (optional):**

Used to provide alternate content to users whose browsers do not support JavaScript or have it disabled.

```html
<noscript>
Please enable JavaScript to view the page content.
</noscript>
```

#### 7. ***base* HTML tag (optional):**

In addition to the base elements inside the `<head>` tag, there is another element known as `<base>`, which is used to specify the **base** (URL) of links and images in the document. When this tag is defined, all relative links on the page are considered extensions of this URL.

##### **The function of the *base* tag:**

1. **Specify the path of relative links:**
It helps in facilitating the management of links within the page, as you can use relative links instead of absolute links.
2. **Improved resource management:**
When changing the main path of the site, it can be easily updated using this tag without having to modify all the links within the page.

#### **How ​​to use the *base* tag:**

The `<base>` tag is written inside the `<head>` tag and contains the `href` attribute to specify the base path. It can also include the `target` attribute to specify the default target for the links (such as opening the links in a new window or the same window).

##### **Example of using the *base* tag:**

```html
<!DOCTYPE html>
<html>
  <head>
    <base href="https://example.com/" target="_blank">
    <title>Example of the &lt;base&gt; tag</title>
  </head>
<body>
  <a href="about.html">About the site</a>
  <img src="images/logo.png" alt="Site logo">
</body>
</html>
```

1. **`<base href="https://example.com/">`**
Specifies that all relative links will be considered an extension of `https://example.com/`.
* The link `<a href="about.html">` will be interpreted as: `https://example.com/about.html`.
* The image `<img src="images/logo.png">` will be interpreted as: `https://example.com/images/logo.png`.
2. **`target="_blank"`**
Specifies that all links using the base path will open in a new window by default.

**Important Notes:**
- The `<base>` tag can only be used once within a `<head>` tag. If there is more than one tag, the extra tags will be ignored.
- When using `<base>`, make sure that it will not negatively affect other links that may require absolute paths.

##### **Importance of the `<base>` tag in projects:**
- **Easy Link Management:**
Relative links are easy to handle especially in large projects where the base path is repeated on multiple pages.
- **Time Saving:**
If the base path of the site changes, it can be updated in just one place.

##### **Using the `<base>` tag with other tags:**

Adding `<base>` alongside other tags inside `<head>` makes your code more organized and helps in better understanding and managing your project:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="https://example.com/" target="_self">
    <title>Trying the &lt;base&gt; tag</title>
    <link rel="stylesheet" href="styles/main.css">
  </head>
<body>
  <a href="contact.html">Contact Us</a>
</body>
</html>
```

- The link in the example would be interpreted as follows: `https://example.com/contact.html`.
- The CSS file will be loaded from: `https://example.com/styles/main.css`.

The `<base>` tag is a useful option for managing relative links in projects, especially when you have a fixed main path that you want to use across the page or the entire site.

In short, the `<head>` tag is where your HTML document is prepared to work properly and be compatible with different browsers, improving site performance and user experience.

## Semantic Tags and Their Importance in HTML
When designing a web page, it is preferable to use **Semantic Tags** to clearly identify the different parts of the page. These tags make it easier for developers, browsers, and search engines to understand the content of the page, which improves **SEO** and makes the site more organized.

In the past, general tags such as:

```html
<div id="nav"></div>
<div class="header"></div>
<div id="footer"></div>
```

to represent the different parts of the page such as navigation, header, or footer. Now, HTML provides dedicated semantic tags for these purposes, making the code more clear and easy to modify.

### **Main Semantic Tags in HTML**:

#### 1. ***header* Tag in HTML**
- Used to identify the header of the page or the header of a specific section.
- Usually contains headings, logos, or navigation links.

```html

<header>
  <h1>Site Title</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>
```

- `<header>` can be repeated throughout the document, such as a header for each section.
- It cannot be placed inside `<footer>`, `<address>` or another `<header>`.

#### 2. ***nav* Tag in HTML**
- Used to group the main navigation links for the site.
- Helps screen readers recognize the navigation menu.

```html
<nav>
  <ul>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact Us</a></li>
  </ul>
</nav>
```

- `<nav>` should only be used for basic navigation links and not all links.

#### 3. ***main* tag in HTML**
- Defines the main content of the page.
- Its content should be unique and not repeated in other documents such as footers or navigation menus.

```html
<main>
  <section>
    <h2>Main article</h2>
    <p>This is the main content of the page.</p>
  </section>
</main>
```

- It is used only once on the page.
- Cannot be inside `<header>`, `<footer>`, `<aside>`, or `<nav>`.

#### 4. ***article* tag in HTML**
Used for standalone content such as blog posts or news.

```html
<article>
  <h2>Article title</h2>
  <p>This is the body of the article.</p>
</article>
```

- The article must have a standalone meaning and be able to be distributed on its own.

#### 5. ***section* tag in HTML**
Used to divide content into subsections with headings.

```html
<section>
  <h3>Subsection</h3>
  <p>Subsection details.</p>
</section>
```

- Best used with a heading (such as `<h2>` or `<h3>`).
- Only used when there is no more specific tag (such as `<article>` or `<aside>`).

#### 6. ***aside* tag in HTML**
Represents side content such as a sidebar or additional links.

```html
<aside>
  <h4>Related Links</h4>
  <ul>
    <li><a href="#link1">Link 1</a></li>
    <li><a href="#link2">Link 2</a></li>
  </ul>
</aside>
```

#### 7. **The *footer* tag in HTML**
It identifies the footer of the page or section.

```html
<footer>
  <p>&copy; 2025 All rights reserved.</p>
</footer>
```

### **The importance of using semantic tags in HTML**
1. **Structure clarity:** Use appropriate tags to represent the real function of each section.
2. **Improving accessibility:** Semantic tags help screen readers navigate easily.
3. **Improving SEO:** Makes search engines understand the page better.

By using semantic tags such as `<header>`, `<nav>`, `<main>`, you can design clear, readable, and standard-compliant web pages. Avoid generic tags such as `<div>` when there are tags specifically for their function.

## More semantic tags in HTML

### 1. ***figure* tag in HTML**
The `<figure>` tag is used to contain independent content that can be annotated using the `<figcaption>` element. The two elements are treated as a single unit, allowing the figure and caption to be moved to different parts of the document without affecting the flow of the main content.

**Common uses:**
- Images
- Illustrations
- Diagrams
- Code snippets

**Working example:**
```html
<figure>
  <img src="ps.svg" />
  <figcaption>Free Palestine</figcaption>
</figure>
```

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj67H50XYab_DJYhe69TEyTfieLWcukAt_BeL5-eOWk6DdujV1uQrJfwDlhUqE3oNUONlRK4kFfZyNhC8qLhk8ehcU-et-wHtDDQPmQGU8mg0EYHElyQ1yWwLXErHjKKS7Ngw7h_KdcHOA60NXg34lV9XeojjEJEkezx9a4RAYxGXE9LyFu3YYt7nnB1Aan/s16000/figure-and-figcaption-tags.webp" 
  alt="figure-and-figcaption-tags"
  title="figure tag in HTML"
  />
  <figcaption>figure tag in HTML</figcaption>
</figure>

**Additional notes:**
- `<figcaption>` can be placed as the first or last sub-element inside a `<figure>`.
- The first `<figcaption>` inside the element is the main caption.
- Improved accessibility: `<figcaption>` provides a semantic description of the content of a `<figure>`, making the content easier for screen readers to understand.

### 2. **details tag in HTML**
The `<details>` tag is used to create interactive elements that can be opened and closed to display or hide additional content, making the user experience more dynamic and organized.

**Features of the element:**
- Closed by default and can be opened on demand.
- Allows any type of content to be included inside it, such as text, images, and even other HTML elements.

**Hint:** The `<summary>` tag is used inside `<details>` to provide a visual title that is easy to click to open the details.

**Working example:**
```html
<details>
  <summary>Question 1</summary>
  <p>Answer Here</p>
</details>
```

<figure style="text-align: center;">
  <img width="100%" height="100%"  style="display:block; margin:0 auto;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYbGWJSCEDW1HRERQ5wzb-JvtyGhGSnrdjzQMBAJKLWheGJPPTxJa5kj6b8pPSlBVpAXrpWW1SdpBxBhyphenhyphen0GUZtt850LCaTxtTFfhlxjKRbJ4vZpOgakSdzw84n4MBRbxiCPkV4iSJ0nurR4LHXgwUw9u76SiNb2i-w_RYKn8LSWiQSzloQ2YQFc1O5PrLo/s16000/daetails-and-summary-tags.webp" 
  alt="daetails-and-summary-tags"
  title="details tag in HTML"
  />
  <figcaption>details tag in HTML</figcaption>
</figure>

**Additional benefits:**
- Enhances readability and organization when dealing with a large amount of information.
- Supports all types of content, making it flexible for many applications.

### 3. ***time* Tag in HTML**
The `<time>` tag is used to specify a date and/or time in an HTML document in a way that is understandable to humans and machines. This format is easy for browsers and search engines to use to provide additional features such as reminders or to display more accurate search results.

**`datetime` attribute:**
- Used to specify a date and time in a machine-readable format (ISO 8601).
- Helps to improve contextual understanding for search engines and event management software.

**Practical examples:**
- Setting working hours:
```html
<p>Open from <time>10:00</time> to <time>21:00</time> 7 days a week.</p>
```
- Setting a specific appointment:
```html
<p>I have an appointment on <time datetime="2024-02-14 20:00">Valentine's Day</time>.</p>
```

**Additional features:**
- Facilitates linking events to calendar applications.
- Improves user experience by displaying the time in a clear and automatically translated way according to user settings.

These semantic tags are powerful tools to improve content organization and make the document more understandable to search engines and assistive reading tools, enhancing the user experience.

## HTML5 Layout - The complete layout of the web page

Now let's arrange and organize the elements correctly to create an ideal web page structure using the semantic tags provided by **HTML5**. When you put all the pieces together, you'll notice that the final code will look like this:

Also, notice that we've added two attributes that we didn't include details about in the explanation, but they're very important and obvious:
- **lang**: to specify the language of the page.
- **dir**: to specify the direction of the content (such as right to left or vice versa).

Here's the final code:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <title>Page Title</title>
    <meta charset="UTF-8">
    <meta name="description" content="Page Description Here">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
  </head>
<body>
  <header>
    <h1>Site Title</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
  </nav>
<main>
<article>
  <section class="featured-image">
    <figure>
      <img src="/article-image.jpg" alt="Featured Image" />
      <figcaption>Mobile Image</figcaption>
    </figure>
  </section>
  <section class="article-meta">
    <p>Published by Fullstackee on <time datetime="2024-02-14 20:00">2024-02-14 20:00</time>.</p>
  </section>

  <h2>Article Title</h2>
  <p>This is the text of the article.</p>
  <section>
    <h3>Subsection</h3>
    <p>Subsection Details.</p>
  </section>

  <aside>
  <h4>Related Links</h4>
    <ul>
      <li><a href="#link1">Link 1</a></li>
      <li><a href="#link2">Link 2</a></li>
    </ul>
  </aside>
</main>

  <footer>
    <p>&copy; 2025 All rights reserved.</p>
  </footer>
</body>
</html>
```

With this arrangement, we have created the basic structure of a web page using semantic tags, ensuring a logical organization and ease of understanding for search engines and users alike. This approach not only improves the browsing experience, but also boosts your site's ranking in search results.

But to get a professional and attractive look for the page, you must harness the power of CSS to style elements and design an integrated interface. Follow us in the upcoming lessons to learn how to apply this in simple and effective steps.

## Conclusion
Finally, we hope you have benefited from this tour into the world of [HTML basics](https://en.fullstackee.com/2024/12/beginner-guide-learn-html.html). If there is anything we have not fully explained or you have a question about the topic, do not hesitate to leave a comment and we will be happy to answer it. Leave your question below and be part of our learning community that is always striving to develop its skills in the world of [web development](https://en.fullstackee.com/2024/11/web-development-101-basics-to-start-your-journey.html).

## Frequently Asked Questions

### What is the meaning of semantic tags in HTML?
Semantic tags in HTML are elements that clearly explain the purpose of their content, making it easier for browsers and search engines to understand the structure of the page. Each tag has a specific function, and should be used according to its purpose to avoid misorganization on the page.

### What are the differences between semantic and non-semantic tags in HTML?
- **Semantic tags:** directly explain the purpose of their content (such as `<header>`, `<article>`, `<footer>`), which helps search engines understand the structure of the page and enhances accessibility.
- **Non-semantic tags:** such as `<div>` and `<span>`, do not give any indication of the content, and are used only for formatting or grouping purposes without functional clarification.

### Which HTML element can be used to group elements when none of the semantic elements apply?
The `<div>` element can be used to group elements in HTML when there is no need to use semantic elements. `<div>` is a non-semantic element, and is primarily used for formatting purposes or as a general container for content without giving it semantic meaning.

### What is the difference between `header` and `h1`?
- **`<header>`:** A semantic element used to define the header of a specific section on a page, such as the main page header or the header of a specific article or section. It can contain headings (such as `<h1>` to `<h6>`), logos, navigation menus, or any introductory content.
- **`<h1>`:** A heading element used to define the main heading of the content. There should be only one `<h1>` per main page or section, to indicate the most important heading for that content.

### Is `head` the same as `header` in HTML?

No, `<head>` and `<header>` are not the same.
- **`<head>`** Contains information about the page such as the title and links to external files (CSS, JavaScript) and is not visible in the user interface.
- **`<header>`** Used to display visual content such as headings and menus and is visible in the user interface.
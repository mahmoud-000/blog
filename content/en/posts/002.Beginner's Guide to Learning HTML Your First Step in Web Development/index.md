---
title: "Beginner's Guide to Learn HTML: Your First Step in Web Development"
date: 2024-11-02
draft: false
slug: "beginner-guide-learn-html"
description: "Now that we know the basics of web development, it's time to learn the basics of HTML, the backbone of the web development world."
cascade:
  showReadingTime: true
categories: ['Web Development']
tags: ['Front-End','HTML']
---

Now that we know the [basics of web development](https://en.fullstackee.com/2024/11/web-development-101-basics-to-start-your-journey.html), it's time to learn the basics of HTML, the backbone of the web development world. Especially the [front-end](https://en.fullstackee.com/2024/12/how-to-become-frontend-developer.html).

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgV_g2t7PvksqsU2qjyceB8CfS1KiHKBHEg5yecTDP_QkqoaoGKDQ89npd5qvU68qFV7DDOfczg144_htFSqsjEYIm_AbtqwSyK8IZr2-m_BMsJIyMqTnVQGJOjETDUG8fHzrN9IRSsGiD9odIJKGdzvGAQB5hhfiqnas-kIGzRnumk0IS-YRTGsEvJx3MU/s16000/learn-html.webp"
alt="Learn HTML"
title="Learn HTML HTML"
/>
<figcaption>Learn HTML</figcaption>
</figure>

HTML is characterized by giving us the ability to control how content is displayed on the browser, and opens up wide areas for us to format texts, images, and other elements in an interactive and effective way.

An HTML file contains codes known as "tags", which allow us to direct the browser to perform certain commands, such as how to display texts or organize the page.

## What is HTML? Understanding the basics of coding and tags for beginners

In HTML, coding is done using texts with special meaning called "tags". Most tags appear in a specific way,

```HTML
<Opening-Tag> Specific text </Closing-Tag>
```
Where the text is surrounded by symbols less than __<__ and greater than __>__. For example, the tag `<strong>` is used to make the text inside it prominent.

```HTML
<strong>Bold Text</strong>
```

Here's another example of a tag used to emphasize text, called `<em>`. This tag itals the embedded text to indicate its importance, as in:

```HTML
<em>Italic Text</em>
```

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_K2Kn1YbDqMtkhU_YtsMHyzlFYi3au4foJRi08Wu2CxKVTKzZCbf3tPgxxu1o34A_AAwOIEGsgYAgZFpFnRnQdUL5vyD7V0lcANcLbxefelwkSmxGhxoggGINjOZZWDswJ817N-kLXEZ5jhtx2ysw0UYbzunYBqVn0q6LJDCGek0h4LzbgJYS4h_LsmGH/s16000/formating-text-using-html-tags.webp"
alt="Using tags in HTML"
title="Using Tags in HTML"
/>
<figcaption>Using Tags in HTML</figcaption>
</figure>

## HTML Tag Structure Explained

Every element starts with an opening tag and ends with a closing tag. For example, the opening tag `<figcaption>` is followed by the closing tag `</em>`, where the latter is marked with a slash `/`.

In HTML, tags that come in pairs are essential; a tag cannot be opened without being closed, similar to parentheses where a parenthesis cannot be closed without being opened first.

This helps to build a proper structure for the content, which is a fundamental concept in programming languages.

## Element vs. Tag: Understanding the Difference

In HTML, the entire unit that contains the opening tag and the closing tag, as well as the content inside, is called an "Element".

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2f4HM_YxwU2OtgFMqGiW7V42hiwCY3hTfvrE5SPod3kJRKAPSUiAFkwTKF8YxZVULs1MTxZVjZ-0CVPf8GTMr6P09ilTkTGiPrJopgPTDdXOs7bJT_z442tbV6PLyqjLehj13wdGbg0QNybA64pftvf6NgbxQA0fiIUiorKKoIgUF9DeEGBzToC_Bmudg/s16000/element-in-html.webp"
alt="Element vs. Tag in HTML"
title="Element vs. Tag: Understanding the Difference"
/>
<figcaption>Element and Tag in HTML</figcaption>
</figure>

Only the opening tag and the closing tag are called a "tag". Although some people use the term "tag" to refer to the entire element, knowing this distinction is important in programming to ensure proper interaction with the browser.

## Dealing with Breaks and Whitespace in HTML: What You Need to Know
In HTML, you may notice that the browser treats commas and whitespace differently than a text editor.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDgGyQT_GG1kFmjnqB3bhgsN4GUcd6Vn1mPdiqrUOsccFL5Ur2vNTsiwYL0jPFyQBL3xIvBYRdRmr8ULYTqhsm0XpyhL8FGpUUfuBjb76pv0sxMywGKRFgAm2Yt2GKCNP1Yy8UFeTLl7H-kOX24-unT1x73j0Ew00rdnZjjdCq8fsCxdYUbXJzPuXOXqBH/s16000/Dealing%20with%20Spaces%20and%20Line%20Breaks%20in%20the%20browser.webp"
alt="Dealing with Spaces and Paragraphs in the browser"
title="Dealing with Spaces and Paragraphs in the browser"
/>
<figcaption>Dealing with Spaces and Paragraphs in the browser</figcaption>
</figure>

When you insert multiple spaces or new lines into your code, the browser merges them into one space when rendering. This phenomenon is known as "whitespace" merging.

Whitespace refers to the empty spaces and line breaks that we add to our code to make it organized.

However, the browser does not automatically take these spaces into account, so if you want to break text into consecutive lines in the browser, you need to use a dedicated tag.

__br (Break Line) Tag__
<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidowsZY7W34Sme713B9HEsyMiqQVNqO2kEZ-fQob9F2IyVXCx58EO5s_aTqchWoa8HCs5xLXyXiUlcb-iS6aJ0CPaLSqFPK6yxu5BCEuHx37YX9O51go04-F7E5jVweMtQuD93AD0gdFnt_qC86rKrjWNoAtSgZijH9Wi44Wi1EgAfoMhKJSt2-6lKrLg0/s16000/Organize%20content%20using%20line%20breaks.webp"
alt="Br tag in language HTML"
title="br tag in HTML"
/>
<figcaption>br tag in HTML</figcaption>
</figure>

The `<br>` tag is a good example of how to control text formatting; it breaks a line and starts a new line without the need for a closing tag,

since it has no internal content. Such tags are called "empty elements" or "null elements" because they perform simple functions without the need to add content between the two tags.

In addition to `<br>`, there is also the `<img>` tag used to insert images, which is also an empty element that we will discuss later.

## How to create paragraphs in HTML to organize web content

Although the `<br>` tag is useful for adding line breaks, organizing web content sometimes requires dividing text into clear and formatted paragraphs, especially when writing articles or stories.

In HTML, the `<p>` element is used to create a new paragraph. This character is an abbreviation for the word "Paragraph" and depends on an opening tag and a closing tag as in the example.

```HTMl
<p>New Paragraph</p>
```

Let's convert these texts to paragraphs.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt0yyGBuQbVnKxjPTrqdeCbEgcdYInMSw_KSyORivsvELfSpy8EBpEmM3jMORnZMs2h4GqouuoHKvN7zRehXdefV_UdYbquEY0cvFO_iA5r7TG5YTFCG51qlQselldSxyBMP615R3cBx0w0DVFyrT9Wu3oMw15zldYZTtjLC3GbD_jmEhfIs8FEGP_7gGD/s16000/Organize%20content%20using%20paragraphs.webp"
alt="Using Paragraphs in HTML"
title="Using Paragraphs in HTML"
/>
<figcaption>Using Paragraphs in HTML</figcaption>
</figure>

When the page is reloaded, the paragraphs will appear neatly separated by small margins between each paragraph, giving the text an organized and easy-to-read appearance.

Using `<p>` elements to organize paragraphs helps the browser understand the structure of the text, not just its visual presentation. Later, you will learn how to customize the appearance of paragraphs using CSS to have complete control over the formatting of the text.

## Difference between Breaks and Paragraphs in HTML: A Basic Understanding of Content Formatting

In HTML, we have two ways to divide text into lines: the `<br>` tag, and the `<p>` paragraph tag. While `<br>` acts as an empty element to add a line break only, the `<p>` element is used to create a paragraph that contains a complete text.

The `<br>` tag simply ends the current line and moves to the next line, while the `<p>` tag gives the paragraph an additional feature by creating a "block" that contains the text.

Blocks help in formatting the content, where each paragraph has its own space on the page. This block includes automatic margins above and below the paragraph, which makes it easier to read and separates the text comfortably on the eye.

## Improve the layout of text in HTML using basic tags

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOPnn6LINOpxPYGhZt6L9ApmhYSK_SOxyiWJ91upHy46SObgmVB0nO9YT-R0Rvsz9T6RROcnRQ82TsJHLHqg7U4OpfqDtDK94hIytvmFUzPQGvNAy0vYH0lzM9RxlNigfwbqs4TAdPMzLeN42Fme0oDm4npWWY8RzcEtAukdLBYxIwzSJguFtpo7WhEjsy/s16000/mark-sub-sup-tags-in-html.webp"
alt="sub & sup tags & mark in HTML"
title="sub & sup & mark tags in HTML"
/>
<figcaption>sub & sup & mark tags in HTML</figcaption>
</figure>

Now that we know about commas, spaces, and paragraphs, let's explore some other HTML elements that add refinement to your text. These elements are known as "typographic elements" and are used to direct the browser to display text in a different format.

Let's start with plain text. If we save and open it in the browser, the text will appear as it is. But what if we want to add effects for emphasis? We can use the `<figcaption>` or `<strong>` tag to make text italic or bold as we saw earlier, but this time we'll learn about another HTML element: `<mark>`. This tag is used to highlight text as if a colored pen has been passed over it.

It is one of the [semantic elements in HTML](https://en.fullstackee.com/2024/12/head-and-semantic-tags-in-html.html) that expresses its function directly.

```HTML
This is a <mark>Highlight Text</mark>
```

When you try the tag in your browser, you'll notice that the text appears highlighted in yellow! You can also try other elements like `<sub>` and `<sup>` which add symbols in the form of subscript (below the normal text) or superscript 
(above the normal text).

```HTML
<p>H<sub>2</sub>O</p>
<p>2<sup>4</sup></p>
```

## HTML: Block vs. Inline Elements – Your Guide to Understanding the Differences

As you delve deeper into HTML projects, you'll come across two basic types of elements: block elements and inline elements. The `<p>` element, for example, is a "block element" because it creates an invisible box around its content.

Elements that don't create blocks, such as `<figcaption>`, `<mark>`, and `<br>`, are known as "inline elements". Block elements, such as lists, tables, and headings, create separate spaces, with the browser assigning each one a separate box. In contrast, inline elements, such as links and images, flow within the text and don't take up a separate space.

Over time and as your HTML knowledge grows, you'll learn how to use block and inline elements to build consistent, effective web pages.

## Nesting in HTML: Using nested elements intelligently

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7uOqCWas3SlkpMTWuDdAVAFP8-cwku_1ICISBdaWzz8dpuJxc-7U6aYQ3yghyphenhyphenKwUs7iS3BX95p6n0DUAznP0NIsVrBnfCdMYTWvxrRYaZAdgpOFmRDEGkAoNPsJfTgTeKt1NcXQndDUk9K9lIHqpnTrSuQiXI4wZI3kTHktJLYHzA3nqdLGQh5v6OMvZS/s16000/Nesting%20in%20HTML.webp"
alt="Nesting in HTML"
title="Nesting in HTML"
/>
<figcaption>Nesting In HTML</figcaption>
</figure>

Nesting is an important concept in HTML and means placing one element inside another. A simple example of this nesting is "Russian dolls"; you can open the larger doll to find a smaller one inside, and so on. Similarly, HTML elements can be placed inside other elements, but some rules must be followed.

For example, a paragraph can contain `<figcaption>` elements inside it to emphasize the text. This nesting is common in HTML documents; large elements, such as paragraphs and `<div>`, are placed inside smaller elements to format the text.

You can place a `<sup>` element inside a `<figcaption>`, for example, to make the text appear highlighted and raised at the same time.

However, there are some combinations that are not allowed; you cannot place a paragraph inside another paragraph, and you cannot nest elements out of order.

In general, these rules are natural and logical, but they help to organize the structure of the document in a neat and clear way.

## HTML Guide: The Importance of the li Tag in Creating Structured Lists

Some HTML elements are only used within certain other elements; they are not meaningful on their own. An example of such an element is the list element `<li>`.

`<li>` is an element of a list that includes items such as a shopping list, a to-do list, or a table of contents. This element cannot appear on its own; it must be within an ordered or unordered list.

### Types of Lists in HTML

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinFi9j6tIAySt02F4BCXwJmueH8yKfApAFt6kHR7qT2chLNRCNikl7IRo5sf4KjDxn4HDHr29VnaIiO_7OCezksbzL_sN-miBbf5YAnD5uV8c6Hlb6gFgrHHt5Xsy84-EqWgz9pwcieJin4E6UoL399RiqZibxsNq1PFVBEKm_HYUoUtIsqrAdg-E8DBCN/s16000/Ordered%20and%20unordered%20lists%20in%20HTML.webp"
alt="Numbered and unordered lists in HTML"
title="Numbered and unordered lists in HTML"
/>
<figcaption>Numbered and unordered lists in HTML</figcaption>
</figure>

There are two types of lists that can contain `<li>` elements:

1. **Ordered List** `<ol>`: Used when there is a need to automatically order the list items by numbers or letters.
2. **Unordered List** `<ul>`: Used to create lists that display dots or circles in front of each item, without having to order the items.

### Why do li elements have to be inside lists?

The reason `<li>` elements don't appear by themselves is that ordered and unordered lists display differently; without them inside `<ol>` or `<ul>`, the browser wouldn't know whether to put a number or a period in front of the element. Therefore, HTML requires `<li>` elements to be inside either `<ol>` or `<ul>` to ensure that they display properly.

### Nesting in Lists

You can also nest lists inside other lists. For example, you might need a to-do list that contains steps inside it to perform some task. For example, "Learn HTML" might contain steps like "Learn tags", and that `<li>` element would be nested inside a `<ul>` element inside another `<li>` element.

### Closing tags for li elements

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJawgAWcLxmecPu6iVoEbcJpsLjr2xd8FwC5ORewnXsHfVhV8TwBQnkapFrww4jVAAR-aphWZ5JkxZLTG5Z3P4k_BDAO6tcMQi34cPQGkySVhuIIMyuS49f7dwxfVN22zK5Nw0luf_lx3t0UqpQ3cWs4DvRThYHdYJYQjdQ-nQjIJTehjuv4h7F3xST7PC/s16000/Closing%20tag%20li%20is%20not%20necessary..webp"
alt="Closing tag in list item is not necessary"
title="Closing tag in list item is not necessary"
/>
<figcaption>Closing tag in list item is not necessary</figcaption>
</figure>

Since the `<li>` element is only used within a list and cannot appear directly inside another `<li>`, HTML does not require you to write closing tags for `<li>` elements. If the browser finds a new opening `<li>` tag inside a list, it automatically assumes that the previous element has ended. However, some web developers may prefer to always write closing tags for `<li>` elements to make the code more clear.

Remember that you should always write closing tags for `<ul>` and `<ol>` elements, because the browser needs these tags to know when the list is completely finished and not accidentally insert any additional content into the list.

## Understanding URLs for Better HTML Browsing

To learn how to add links and images to your web pages, there’s something to cover along the way: web addresses. The web wouldn’t be the web without web addresses. Every website, page, image, and file on the web has its own unique address.

These addresses are how your browser follows links from one to another, and they’re also a big part of how users direct their browser to a website in the first place.

Whenever you add a link in your HTML code, you’ll use these addresses. In the `<a>` tag, there’s technical terminology for these addresses.

```HTML
<a href="URL">Click here</a>
```

### What is a URL?

Every page on the internet has a unique address called a “web address,” or “URL” for short. This address is a string of letters and numbers that tells your computer where to find that page.

This simply means that it’s an address that tells your browser how to locate a specific resource, such as a file, in a uniform way. The word "uniform" here simply means consistent.

There are different ways to write URLs, and when people read these addresses, you'll sometimes see "http://" or "https://" at the front.

A URL consists of several basic parts:
- Protocol (http:// or https://)
- Domain name (e.g. example.com)
- Path

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqP6VoHHf8p2Fo3jFqGG8Lab6_aGFzLeSpu2SVeF5atRikJFudysBB3F-NQIReOrJLIlhBYKdCI2NLnGfHizWUBURoNqPTFAJjRFdxmjmW1E5SNr98XLYJ50Lmpy7ohWltGwaBNGc5d5rvnYSRgz0yV6_sxq0SOi47bLc-JEeJAPQjPxaon048Tjpc_3PA/s16000/Be%20careful%20when%20using%20links%20in%20HTML..webp"
alt="The correct use of links in HTML HTML"
title="Correct Use of Links in HTML"
/>
<figcaption>Correct Use of Links in HTML</figcaption>
</figure>

You might see `www.example.com`. This works fine if you type it into your browser because the browser knows you want to go to that site. But if you use it in your HTML code, it won't work because the browser needs to know how to point to a file with that name.

### Types of URLs

Absolute URLs:
- Start with (http:// or https://)
- Used to point to external sites
- Example: `https://example.com/page.html`

Relative URLs:

- Used to point to files in the same site
- You don't need to type the full domain
- Example: images/photo.jpg

When writing URLs in HTML, we have to be careful to give the browser all the information it needs. You can sometimes take shortcuts, but for now, we'll just write the full URLs. Or what are called absolute links.

You’ve probably seen it before, but let’s review its absolute form.

Web addresses typically start with `http://` or `https://`, which tells the browser whether to use secure encryption to connect to the web server.

The URL for a file on a local drive (your computer) starts with `file://`.

“HTTP”, “HTTPS”, and “file” are all protocols, or ways that a browser can get something. After the protocol, we always see a colon and a dash separating the protocol from the rest of the URL.

The next part you’ll see is the domain name, which tells the browser which server to connect to. Local URLs won’t have this, because there’s no server, and the browser is reading from your computer.

This is why if you give someone the URL for a file on your computer, they probably won’t be able to see it, because the file isn’t on their computer.

The last thing that appears in a full URL is the file path, which is the name of the directory and file that the URL points to. This can sometimes be empty or a single slash (/) if you are linking to the home page or top page of a website as we will see.

## Creating Links in HTML: Effective Steps Using the a Tag

The hypertext experience means that you can have text documents like web pages, but they also contain references between them. On the web, those references are links. Every time you click on a link on a web page, you are using those links.

When you write HTML, you can link between web pages, whether your own or someone else's. That's how search engines work, for example.

```HTML
<a href="https://example.com">Visit Link</a>
```
Here's how to create a link in your HTML. The element used to create links is called `<a>`. It's not called a "link", it's called "a" because it stands for "anchor", where the `<a>` element links a title to a piece of text on the page. That may sound strange, but that's how it is.

We can't use `<a>` by itself. There are a few things that a `<a>` element must include to create a link: the text that the user clicks to follow the link, and the URL of the linked page. Here's how we'll do it:

The opening tag of the `<a>` element starts with an extra piece of data that we've never seen before in HTML text, called `href="URL link"`.

This is an example of an HTML attribute, which is an extra piece of data that comes with the element and gives it extra meaning. The part before the equal sign is the name of the attribute, and the part after it in double quotes is the value of the attribute. Here the name is `href`, and the value is `http://example.net`.

`href` stands for "hypertext reference" and is used with `<a>` tags and some other tags that link to others. You'll never see it in a paragraph tag or a confirmation tag or anything like that.

Then there's the contents of the `<a>` element, which becomes the text that appears on the page, and then there's the closing tag `</a>`. You might notice that it doesn't have any attributes.

The href attribute is always in the opening tag at the beginning of the element. That's all there is to creating links in HTML.

I've created an element with a starting tag and a closing tag. The starting tag contains the `href` attribute with an equal sign and inside double quotes the URL of the page we want to link to, the contents of the element are the text that the user clicks on, and then there's the closing tag
`</a>`.

## How to Insert Images into HTML to Make Your Pages More Attractive

Web pages wouldn't be like this without pictures of bears, maps, news, charts, or banner ads. Images are a big part of the success of the web, so you might be wondering how to include images in your web pages.

You'll probably be surprised to find that there's an HTML element dedicated to that. That element is the `<img>` for images, and it works similarly to the `<a>` element for links, but with a few important differences.

```HTML

<img src="path/to/image.jpg" alt="Image description">
```
The `<a>` element for links uses a single attribute called `href`, which is the URL of the page you want to link to. But the `<img>` element uses two attributes: `src` and `alt`.

`src` stands for "source", which is the URL of the image you want to appear on your web page.

`alt` stands for "alternative", which is a text description of that image that appears if the image is not fetched correctly. The text that appears here is usually called "alternative text".

You need to include both attributes when writing HTML. The src attribute tells the browser where to get the image from, and the source of the image, while the alt attribute tells the browser what text to display if it cannot display the image.

For example, the word "Image Description" will be displayed if the file is missing from the server in the previous example, or if the user's network connection drops before the image is loaded, such as on mobile phones, or if the user can't see the images, such as blind users.

One thing to keep in mind is that placing a `<img>` element in your HTML file does not insert the image file into the HTML file, it tells the browser where to find that file.

The source must exist somewhere, whether on your local disk or on a server.

A `<img>` element is an empty or "no-content" element, like `<br>`. It has no text as its content, and it has no closing tag. Remember that the contents of an HTML element will be text between an opening tag and a closing tag, such as a `<p>` element.

But in our case here, the src and alt in the image tag are not contents, they are HTML attributes for that element.

And a `<img>` element is an inline element, you can put an image right in the middle of a piece of text. If the image is taller than the surrounding text, it will affect the text formatting.

## Relative and absolute links in HTML: the difference and which ones to use

From a site called [placebear.com](https://placebear.com) which has a lot of pictures of bears. If you want an image of a certain size, like 800 x 600 pixels, [placebear.com](https://placebear.com) will give you one, as long as you're okay with it being a cat. To put this image in my testing.html file,

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgu6LkBuM7yY7Q8G0SA3Y67z7vCR23Ju-atNujHIObqDkC1EMy0uLtixaddgCMU1F3F9RoKMguRHrzb65gjHaS0r3ghyphenhyphen_HEy54C9ai70m4NU2UgTEGXxSXMOUfu9QCSQ2bNoZCcVfZKGne9ZHg3ZpHXq_drfet-Xj4dBeGU-vgJS8yAiavgJw1fTbXam6eK/s16000/Insert%20images%20from%20PLACEBEAR.webp"
alt="Insert images from PLACEBEAR"
title="Insert images from PLACEBEAR"
/>
<figcaption>Insert images from PLACEBEAR</figcaption>
</figure>

I'm going to use a `<img>` tag like this, and when the browser opens this HTML file, it's going to go to the [placebear.com](https://placebear.com) server and fetch that image and put it on the page.

But what if I have an image file here on my computer, actually what if it's in the same folder as my HTML file? Should I put it on a server somewhere and point to it using the image tag? It turns out no, instead I can just put the file name in the image tag.

Why does this work? Well, the browser looks at the src attribute here and doesn't see a full URL. It doesn't start with `http://` or `file://` or anything like that. Specifically, there's no `://` anywhere.

And the browser has a rule for what to do when that happens. In HTML, this filename is seen as a type of HTML document. This is called a relative URL.

Currently, my HTML file is on my computer, and the browser sees it with a URL like `file:///C:/Users/Mahmoud/Downloads/testing.html`. So when that file points to the relative URL bear.jpg,

it will look for that file in the same directory, even though I only have to type bear.jpg in the HTML. The browser will load the same URL as `file:///C:/Users/Mahmoud/Downloads/bear.jpg`.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjo35CSB7NUqo-uKfvYS7pV5HBHBXtMdHgL22-XUtx8inr_PoSCUMG7hyphenhyphenx_2wf_-GCIydA11pxd5ao9U_2cKHnXgyV2K61N96RGUh6ri8tPLyVThUm4Lzxp0-gp-oT68JeeZSTbiYGIhQAXmrPMeHhgYqIi-lF4A3JgmZ3ufHHFPzRzDuAuD9_I57t7w9O5/s16000/Relative%20links.webp"
alt="Relative Links"
title="Relative Links Relative"
/>
<figcaption>Relative Links</figcaption>
</figure>

## When to choose relative or full links in HTML page development?

Using relative URLs requires less typing, but that's not the only advantage. If I want to send this web page to someone else,

Well, the HTML itself doesn't contain the bear image file. I have to send them the image file as well. But if I send this file to my friend, it won't appear on his computer in a path called `Users/Mahmoud/Downloads/`.

If I have URLs in my HTML that relate to my computer, they won't work on someone else's computer.

So as a general rule, if you're pointing to an image or link on a web server like [placebear.com](https://placebear.com/800/600), it's common to use a full URL like `https://[placebear.com](https://placebear.com)/800/600`. If you're pointing to an image or other file that you're exchanging with your HTML file, you should use relative URLs.

By the way, relative URLs are the reason why you can't create a `<a>` link to Google by just typing google.com inside the href attribute of your HTML.

Although google.com works if you type it directly into your browser, a URL without the :// is always considered a relative URL. So the browser will look at a file called google.com, which is usually not what you want.

So if you want to create a link to another site, you should put http:// or https:// in front of it.

## HTML Document Structure: The Basic Elements of Every HTML Document

What you’ve been writing in this lesson is actually what’s called “HTML snippets.” They’re pieces of HTML that your browser can display, but there are a few extra things you need to add to turn them into a complete HTML document, i.e. a web page.

The HTML you’ve written so far is like a few sentences in the middle of a story, but a story usually contains things like a title and an author, not just sentences. Likewise, there are a few things you need to add to your HTML document to make it complete.

First, how does the browser know what type of document it is? Just by the filename extension? No, it’s more complicated than that. HTML has been around for many years, and there have been many different versions of HTML.

We specify the type of HTML we’re using by placing a DOCTYPE tag at the top of the file. It looks different from other text. In earlier versions of HTML, DOCTYPE tags were long and complicated.

Eventually, the engineers who designed HTML decided to simplify it down to the bare essentials. In modern HTML, the DOCTYPE tag looks like this:
```html
<!DOCTYPE html>
```
You should write it exactly this way in every HTML document you write.

What does the DOCTYPE tag do? It tells the browser that we want this document to be treated as modern HTML, rather than one of those old versions.

This isn't a big deal for simple HTML, but it prevents problems when your HTML becomes more complex. Without the DOCTYPE tag, the browser will go into what's called "compatibility mode,"

where it tries to be more compatible with older forms of HTML, which is generally not something we want today. So putting the DOCTYPE tag in your documents is the right way to do it.

## HTML Structure: Head and Body Components for Perfect Design
```HTML
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<!-- Content here -->
</body>
</html>
```
Every HTML document consists of two parts. So far in these lessons, apart from the DOCTYPE tag, you have been working with the second of these parts, the body of the document. This is where the contents of the document are placed, such as paragraphs, images, lists, and other things that will appear on the screen to the user. The other part of the HTML document is called the head.

We put some important information about the document in the head, and both the head and body occur inside a single HTML element with an opening and a closing tag. Here are some elements that can appear in the head of an HTML file:

The title: This is the only part required in the head, and it tells the browser which page title to put on the tab that displays the document. We put the title inside a `<title>` element with an opening and a closing tag.

## How to Validate HTML to Improve User Experience

There are a lot of rules about how HTML should be written, similar to the rules of spelling and grammar in a language. But how can you really be sure that your HTML is spelled and grammatically correct?

To start, you can use your browser. If a page looks correct in your browser, does that mean it’s good? Not necessarily. It may have errors that your browser can handle, but some other browsers may not.

It’s important to make browsers work consistently with correct HTML, and it would be difficult to test everything on every browser out there.

Thankfully, there is a way to validate your HTML.

There are tools called HTML validators that will check everything from checking that tags are written correctly, to more complex rules, like whether list items need to be inside a list.

The most popular HTML validator is [validator.w3.org](https://validator.w3.org/), which is run by the W3C (World Wide Web Consortium). This organization writes the standards for HTML and other web components, so they're well-positioned to tell you whether your HTML is valid or not.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE_ghRiH7tVi4Jtqu7-p21uPtyFS1LSo9U3wffmgB3gFrgauG5E90YRdsjfHA76f2mkadR-iJhHxUSk9d__42Fcl_lvS33J1Guh3Fl9t1taoIw_HBM_iWyiY5ifzSfo1JUU5hdG-kxZbowzbLxY0VzwGkKp9Mid1c5rZTyczzUymL4LIzo_3RETPkilhje/w640-h304/html-validation.webp"
alt="HTML Validation"
title="HTML Validation"
/>
<figcaption>HTML Validation</figcaption>
</figure>

There are three different ways you can use the validator service on a public web server: You can simply give it a URL and it will download and validate the HTML. But if you are working on an HTML file on your computer, you will need to use one of the other options: you can upload the file or copy the content from your editor and paste it directly into the validator.

When you do this, you will get a message like this telling you if there are errors in your HTML. If there are errors, you will get a message like this: The `<head>` element is missing a required sub-element, `<title>`. Due to a typo in the title tag.

This is a very technical way of saying that a complete HTML document needs a `<title>` element inside a `<head>` element.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7-Olw1PlYTqposhM5vvP-nxJshy8GsGeeu3-YtqD9xUu2xUWuRiVTMRGzfYwKXzFX9mYuI1tGbAxKy94v33xDxuN9NFA7Sm5VWP3CrujGOMEe3RICNCJaH4V0L1MImcnsYAHRohJtYuld_wcFdnPci3noC8HQXrxAq7VAuu2tvwS5ImT9CwHtKSBanopF/w640-h118/html-error.webp"
alt="HTML Validation Error"
title="HTML Validation Error"
/>
<figcaption>HTML Validation Error</figcaption>
</figure>

When you get errors like this, fix them in your text editor, then paste or upload the new version and check it again. When it's correct, you'll get a nice green message like this, saying there were no errors or warnings to show.

<figure style="text-align: center;">
<img width="100%" height="100%" style="display:block; margin:0 auto;"
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvjz3rj55JwQIAWkMrZ6O1SjUh39GQW-1Asl-nta2JaU80z_18vqXQC75nqxI2US37a_2m76hjuOIFg_bNdp7MrWb40g2s4lKkDcxtk5KmgKot6oE3CZOrmI2FOc8y2tGMIiVyVRmOH-FM3nMFy0dZwnTVAW4wlp33RUup85_5RwDs2mn-InJroGwR2y7h/w640-h88/no-html-error.webp"
alt="HTML Validation Success"
title="HTML Validation Success"
/>
<figcaption>HTML Validation Success</figcaption>
</figure>

## Conclusion

Finally, learning HTML is an exciting step towards building new web development skills.

Feel free to ask any questions or share your experience in the comments – we are here to help you on your journey to professionalism. What is the first question that comes to your mind about HTML that we haven’t covered yet? Share your thoughts with us!

## Frequently Asked Questions

### How long do I need to learn HTML?
You can learn the basics of HTML in less than a week if you devote a few hours a day, while professionalism will require you to practice continuously.

### Can you learn HTML from your phone?
Yes, you can learn HTML from your phone using code editing applications and tutorials available online.

### Is HTML easy?
Yes, HTML is considered one of the easiest programming languages, and it is suitable for beginners because of its simplicity and clear rules.

### How do I use HTML?
HTML is used to create the structure of web pages. You can start writing codes in any text editor and view them in a browser.
1. Schema لــ HowTo
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "كيفية القيام بشيء ما",
  "description": "وصف مختصر لكيفية القيام بالعملية.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "الخطوة 1",
      "itemListElement": {
        "@type": "HowToDirection",
        "text": "قم بفتح التطبيق."
      }
    },
    {
      "@type": "HowToStep",
      "name": "الخطوة 2",
      "itemListElement": {
        "@type": "HowToDirection",
        "text": "اختر الإعدادات المناسبة."
      }
    }
  ],
  "image": "https://example.com/image.jpg",
  "totalTime": "PT30M",
  "tool": ["الأداة 1", "الأداة 2"],
  "supply": ["المادة 1", "المادة 2"]
}
</script>

2. Schema لــ FAQ

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "السؤال الأول",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "الإجابة على السؤال الأول."
      }
    },
    {
      "@type": "Question",
      "name": "السؤال الثاني",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "الإجابة على السؤال الثاني."
      }
    }
  ]
}
</script>

3. Schema لــ Article

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Web Development 101: Basics to Kickstart Your Journey",
  "author": {
    "@type": "Person",
    "name": "Mahmoud Adel",
    "url": "https://medium.com/@DevMahmoudAdel"
  },
  "datePublished": "2024-10-30T17:14:00+03:00",
  "dateModified": "2024-11-04T19:28:51+02:00",
  "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqcJDyW2tHHNUhyphenhyphenREG1EcEK3wQamEXsxW8Zd8FSGQMw0AdnaDaEetL1ueDYLz-c1eRvIHDp-f-e89T8VqIX7Ui190eDRNZEy3NrnJ0AXaKtWnSqsmq3uE7abp7tv2BWaeNdY7QhKgT_JXVX6yEOPZjNk97gzdvowgxo2XCPyb38TN8BC-2vwdEbCuI4dU/s1600-e90-rw/introduction-to-web-developme.webp",
  "description": "To start your journey of learning web programming, it is essential to have a basic knowledge of programming.",
  "articleBody": ""
}
</script>


<script>
      document.querySelectorAll(&#39;.faq-question&#39;).forEach(button =&gt; {
        button.addEventListener(&#39;click&#39;, () =&gt; {
          const answer = button.nextElementSibling;
          const isOpen = answer.style.display === &#39;block&#39;;
          document.querySelectorAll(&#39;.faq-answer&#39;).forEach(ans =&gt; ans.style.display = &#39;none&#39;);
          document.querySelectorAll(&#39;.faq-question&#39;).forEach(btn =&gt; btn.setAttribute(&#39;aria-expanded&#39;, &#39;false&#39;));
          if (!isOpen) {
            answer.style.display = &#39;block&#39;;
            button.setAttribute(&#39;aria-expanded&#39;, &#39;true&#39;);
          }
        });
      });
     </script>

<script>
      document.addEventListener(&quot;DOMContentLoaded&quot;, function () {
        const faqItems = document.querySelectorAll(&quot;.faq-item&quot;);
        const faqSchema = {
          &quot;@context&quot;: &quot;https://schema.org&quot;,
          &quot;@type&quot;: &quot;FAQPage&quot;,
          &quot;mainEntity&quot;: []
        };

        faqItems.forEach((item) =&gt; {
          const questionElement = item.querySelector(&quot;.faq-question&quot;);
          const answerElement = item.querySelector(&quot;.faq-answer&quot;);

          // تحقق من وجود العناصر المطلوبة
          if (questionElement &amp;&amp; answerElement) {
            const question = questionElement.textContent.trim();
            const answer = Array.from(answerElement.querySelectorAll(&quot;*&quot;))
              .map((el) =&gt; el.textContent.trim())
              .filter((text) =&gt; text.length &gt; 0)
              .join(&quot; &quot;);

            faqSchema.mainEntity.push({
              &quot;@type&quot;: &quot;Question&quot;,
              &quot;name&quot;: question,
              &quot;acceptedAnswer&quot;: {
                &quot;@type&quot;: &quot;Answer&quot;,
                &quot;text&quot;: answer
              }
            });
          }
        });

        // إضافة البيانات المنظمة إذا و&#1615;جدت أسئلة
        if (faqItems.length) {
          const scriptFaq = document.createElement(&quot;script&quot;);
          scriptFaq.type = &quot;application/ld+json&quot;;
          scriptFaq.textContent = JSON.stringify(faqSchema, null, 2);
          document.head.appendChild(scriptFaq);

          console.log(&quot;FAQ Schema added:&quot;, faqSchema);
        }
      });
    </script>
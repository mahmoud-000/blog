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
  "@context": "https://schema.org/",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "<data:post.url/>"
  },
  "headline": "<b:eval expr='data:post.title.jsonEscaped'/>",
  <b:if cond='data:blog.metaDescription'>
      &quot;description&quot;: &quot;<data:blog.metaDescription/>&quot;,
  <b:else/> 
      &quot;description&quot;: &quot;<b:eval expr='(data:post.body snippet { length: 150, links: false, linebreaks: false, ellipsis: true }).jsonEscaped'/>&quot;,
  </b:if>
  "image": {
    "@type": "ImageObject",
    "url": "<data:post.featuredImage/>",
    "width": "1280",
    "height": "720"
  },
  "author": {
    "@type": "Person",
    "name": "Mahmoud Adel",
    "url": "https://www.fullstackee.com/",
    "sameAs": [
      "https://www.linkedin.com/in/devmahmoudadel",
      "https://x.com/DevMahmoudAdel",
      "https://dev.to/devmahmoudadel",
      "https://github.com/Mahmoud-FullStackee",
      "https://medium.com/@DevMahmoudAdel"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Fullstackee",
    "url": "https://www.fullstackee.com/",
    "sameAs": [
      "https://www.facebook.com/groups/1449643049308346",
      "https://www.youtube.com/@fullstackee",
      "https://www.pinterest.com/FullStackee",
      "https://www.tumblr.com/fullstackee",
      "https://www.tiktok.com/@fullstackee"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://blogger.googleusercontent.com/img/a/AVvXsEi0qpfj-no0ctRFbDRYL5wVCc378Tx0ZefWtAnbpXRSPHnAf3t94p0aYh5Q7X8JAUZ5-mthS8lPlGzhCV3y4wAQLn-wE6sQ9Bf0Vx4zCbyEVhHMPLP1d4fTa4EYxdRK85_YsF5wNn3EXeVT4ni3TKVkho8Op10SxRr5gQhsd_KB3RyEeReSFurOPtf_RYE=s320",
      "width": "320",
      "height": "80"
    }
  },
  "datePublished": "<data:post.date.iso8601.jsonEscaped/>",
  "dateModified": "<data:post.lastUpdated.iso8601.jsonEscaped/>",
  "articleBody": ""
}
</script>
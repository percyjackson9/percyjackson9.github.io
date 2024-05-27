---
permalink: /
title: "About Me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I work as a Senior Data Scientist - Operations Research in the Crew and Catering team in the Analytics and Innovation division of United Airlines. I have a Ph.D. (2023) in Industrial Engineering (Operations Research), from Arizona State University. During my Ph.D., I worked with Dr. Jorge A. Sefair, on large scale optimization algorithms and models for location and interdiction problems with an underlying network structure. In particular, the focus was on problems in wireless sensor networks, wastewater networks and transportation networks. I proposed models and algorithmic enhancements including modeling of valid inequalities which exploit the underlying network structure, solution building algorithms such as branch-and-bound node heuristics, network size reduction techniques. During the Summer of 2022, I worked as in Intern in the Network Strategy and Planning team of Analytics and Innovation division at United Airlines. 

I did my Bachelors (2018) in Production Engineering from Jadavpur University. During the course of 4 years, I have worked under the guidance of Dr. Shankar Chakraborty, in the field of optimization and decision making. During the Summer of 2017, I worked under Dr. Dipayan Sanyal, Chief Scientist, CSIR-CGCRI, studying and analysing the machinability of Alumina ceramics. My research interests are in Operations Research, with focus on algorithms and optimization.


Recent Developments:
<body>
  <div class="archive__item-title" itemprop="headline">
  <ol type="1">
  {% for post in site.news reversed %}
    <li>
    <p><b>({{post.day}} {{post.month}}, {{post.year}}) ({{post.title}}):</b> <i>{{ post.excerpt }}</i></p>
    </li>
  {% endfor %}
  </ol>
  </div>
</body>



<!--
<body>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6927022862142758912" height="871" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
</body> -->

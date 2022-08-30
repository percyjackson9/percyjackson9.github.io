---
permalink: /
title: "About Me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I am a PhD Candidate in the Industrial Engineering department, Arizona State University, in my final year. I have joined the research lab of Dr. Jorge Sefair, working on large scale optimization algorithms and models for location and interdiction problems with an underlying network structure. In particular, the focus is on problems in wireless sensor networks, wastewater networks and transportation networks. I propose models and algorithmic enhancements include modeling of valid inequalities which exploit the underlying network structure, solution building algorithms as branch-and-bound node heuristics, network size reduction techniques. During the Summer of 2022, I worked as in Intern in the Network Strategy and Planning team of Analytics and Innovation division at United Airlines. 

I have done my Bachelors in Production Engineering from Jadavpur University, and graduated in June 2018. During the course of 4 years, I have worked under the guidance of Dr. Shankar Chakraborty, in the field of optimization and decision making. During the Summer of 2017, I worked under Dr. Dipayan Sanyal, Chief Scientist, CSIR-CGCRI, studying and analysing the machinability of Alumina ceramics. My research interests are in Operations Research, with focus on algorithms and optimization.


Recent Developments:
<body>
  <div class="archive__item-title" itemprop="headline">
  <ol type="1">
  {% for post in site.news reversed %}
    <li>
    {% if post.title == "Conference" %}
    <p><b>({{post.day}}, {{post.month}} {{post.year}}) (Conference):</b> <i>{{ post.excerpt }}</i></p>
    {% elsif post.title == "Internship" %}
    <p><b>({{post.day}}, {{post.month}} {{post.year}}) (Internship):</b> <i>{{ post.excerpt }}</i></p>
    {% else %}
      <p>Correct error!</p>
    {% endif %}
    </li>
  {% endfor %}
  </ol>
  </div>
</body>



<!--
<body>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6927022862142758912" height="871" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
</body> -->

---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
redirect_from:
  - /research
---

My current research focuses on large scale optimization of network models using combinatorial algorithms. I study four large scale combinatorial problems in different domain applications with a common network structure. In particular, the focus is on problems in wireless sensor networks, wastewater networks and transportation networks. I propose models and algorithmic enhancements include modeling of valid inequalities which exploit the underlying network structure, solution building algorithms as branch-and-bound node heuristics, network size reduction techniques. I will keep this page posted with any and all developments!

<body>
  <div class="archive__item-title" itemprop="headline">
  <ol type="1">
    {% for post in site.research reversed %}
      {% if post.artag=="research" %}
      <p>Is this working?</p>
         {% include archive_single_research.html %}
      {% endif %}
    {% endfor %}</ol>
  </div>
</body>

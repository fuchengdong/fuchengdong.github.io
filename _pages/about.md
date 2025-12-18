---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
Hi! I'm Chengdong Fu, a Machine Learning Engineer with 3 years of industry experience specializing in generative AI and computer vision. My expertise lies in designing controllable generative models through semantic guidance and hierarchical control mechanisms, with a focus on modular, plug-and-play architectures. 

I'm interested in bridging visual understanding and controllable generation in AI systems. Specifically, I wish to use computer vision and multi-modal learning algorithms to develop efficient personalization techniques for diffusion models, Enabling rich, fine-grained control over user interactions for customized content creation experiences.


Education
======

* **M.S. in Data Science** <span style="float: right;">Feb. 2022 – Feb. 2023</span><br>
  [<span style="color: #ff8c42;">the University of Sydney</span>](https://www.sydney.edu.au/), Sydney, AU
  
* **B.S. in Computer Science** <span style="float: right;">Mar. 2018 – Aug. 2021</span><br>
  [<span style="color: #ff8c42;">the University of Sydney</span>](https://www.sydney.edu.au/), Sydney, AU

Featured Projects
======

<style>
.project-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  border-color: #ff8c42;
}

.project-card h3 {
  color: #ff8c42;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.3em;
}

.project-meta {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 12px;
  font-style: italic;
}

.project-description {
  color: #333;
  line-height: 1.6;
  margin-bottom: 15px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.project-tag {
  background: #f5f5f5;
  color: #555;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85em;
  border: 1px solid #e0e0e0;
}

.project-links {
  display: flex;
  gap: 12px;
  margin-top: 15px;
}

.project-link {
  color: #ff8c42;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.project-link:hover {
  color: #e67a2e;
  text-decoration: underline;
}
</style>

<div class="project-cards">
  
  <div class="project-card">
    <h3>Multi-Modal Region-Aware Image Generation Framework</h3>
    <div class="project-description">
      An advanced image editing system that empowers users with precise, region-specific control over AI-generated content. This innovative framework introduces an intuitive interaction paradigm where users can directly select and manipulate specific regions within an image, enabling targeted modifications while preserving the integrity of unselected areas.
    </div>
    <div class="project-tags">
      <span class="project-tag">Diffusion Models</span>
      <span class="project-tag">Multi-Modal Learning</span>
      <span class="project-tag">E-commerce AI</span>
      <span class="project-tag">Region Control</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link">🎬 Demo</a>
      <a href="#" class="project-link">📊 Case Study</a>
    </div>
  </div>

  <div class="project-card">
    <h3>Multi-Modal Personalization System</h3>
    <div class="project-meta">2022 - 2023</div>
    <div class="project-description">
      Built an efficient personalization pipeline integrating vision-language models for customized content creation. Reduced inference time by 40% while maintaining generation quality.
    </div>
    <div class="project-tags">
      <span class="project-tag">Multi-Modal Learning</span>
      <span class="project-tag">CLIP</span>
      <span class="project-tag">Stable Diffusion</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link">📄 Paper</a>
      <a href="#" class="project-link">💻 Code</a>
    </div>
  </div>

  <div class="project-card">
    <h3>Plug-and-Play Control Modules for GANs</h3>
    <div class="project-meta">2021 - 2022</div>
    <div class="project-description">
      Designed modular control architectures for StyleGAN that enable semantic attribute manipulation without retraining. Successfully deployed in production environments.
    </div>
    <div class="project-tags">
      <span class="project-tag">GANs</span>
      <span class="project-tag">StyleGAN</span>
      <span class="project-tag">Semantic Control</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link">📄 Paper</a>
      <a href="#" class="project-link">💻 Code</a>
      <a href="#" class="project-link">🎬 Demo</a>
    </div>
  </div>

</div>

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this template](https://github.com/academicpages/academicpages.github.io) by clicking the "Use this template" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](https://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one Markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a Markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each Markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual Markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the Markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and Markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a Markdown file for a talk
![Editing a Markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.

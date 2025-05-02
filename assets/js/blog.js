
function getBlogIndexFromURL() {
    const params = new URLSearchParams(window.location.search);
    const blogIndex = parseInt(params.get('blog'), 10);
    return isNaN(blogIndex) ? 0 : blogIndex;
}

const blogs = [
    {
        title: 'Pristine Pads Makes Waves in Sustainability with Top Honors',
        meta: 'April 1, 2025 · 2 min read',
        img: '/assets/img/blog/blog-1-prakalp.jpg',
        text: "In a mesmerizing achievement, Pristine Pads, an indelible initiative that reuses used pads, has taken home the FIRST PRICE at the prestigious Prakalp competition. This remarkable success is a testament to the innovative spirit and dedication of the Pristine Pads team. But that's not all - Pristine Pads also secured an impressive 2nd position at Ventura, a state-level project exhibition organized by BVIT. This dual recognition solidified Pristine Pads' position as a pioneer in sustainable solutions"
    },
    {
        title: 'Breaking the Silence on Menstrual Waste Management',
        meta: 'April 5, 2025 · 2.5 min read',
        img: '/assets/img/blog/blog2.jpg',
        text: "Let's face it - Menstrual waste management has been a long-neglected issue, with millions of pads ending up in landfills and oceans each year. But we believe it's time to change that. By providing sustainable solutions, we're committed to paving the way for a more eco-friendly future. Sustainability is not a destination, it's a journey. JOIN us in our mission to create a better tomorrow. Let's come together and be the change we wish to see in the world."
    },
    {
        title: 'Empowering Sustainable Menstruation: The Pristine Pads Story',
        meta: 'April 13, 2025 · 3 min read',
        img: '/assets/img/blog/blog3.jpg',
        sections: {
            intro: `Imagine a world where every period is a chance to make a positive impact. Welcome to Pristine Pads, where we're making that vision a reality.`,
            background: `As the world battles with the challenges of climate change, environmental degradation, and social inequality, it's magnanimous to see companies like Pristine Pads leading the charge towards a more sustainable and greener future.`,
            problem: `Menstrual waste is a significant contributor to environmental pollution, with millions of disposable pads and tampons ending up in landfills and oceans every year. It has an indelible impact on the environment, becoming an exigency.`,
            solution: `Pristine Pads, a planet-centric company, is pioneering a revolutionary approach to menstrual sustainability by reusing and recycling used pads. Their innovative technology and commitment to eco-friendly practices are reducing menstrual waste, conserving natural resources, and promoting a healthier and greener environment.`,
            conclusion: `Pristine Pads is a shining example of a company that's prioritizing sustainability and social responsibility. As consumers, we have the power to support companies like Pristine Pads and that are making a positive impact on the world. Let's team up and save the planet!`
        }
    }
];

let current = getBlogIndexFromURL();
function populateSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '<h3>More</h3>';
    blogs.forEach((blog, index) => {
        if (index !== current) {
            const card = document.createElement('div');
            card.className = 'more-card';
            card.setAttribute('onclick', `loadBlog(${index})`);
            card.innerHTML = `
    <img src="${blog.img}" alt="Blog ${index + 1}">
    <div class="more-card-title">${blog.title}</div>
  `;
            sidebar.appendChild(card);
        }
    });
}

function loadBlog(index) {
    current = index;
    const blog = blogs[index];
    const mainBlog = document.getElementById('mainBlog');
    mainBlog.style.opacity = 0;
    mainBlog.style.transform = 'translateY(20px)';
    setTimeout(() => {
        document.getElementById('blogTitle').textContent = blog.title;
        document.getElementById('blogMeta').textContent = blog.meta;
        document.getElementById('blogImage').src = blog.img;
        const blogText = document.getElementById('blogText');
        if (blog.sections) {
            blogText.innerHTML = ''; // clear previous content
            for (const key in blog.sections) {
                const section = document.createElement('section');
                const heading = document.createElement('h2');
                heading.textContent = key.charAt(0).toUpperCase() + key.slice(1);
                const para = document.createElement('p');
                para.textContent = blog.sections[key];
                section.appendChild(heading);
                section.appendChild(para);
                blogText.appendChild(section);
            }
        } else {
            blogText.innerHTML = `<p>${blog.text}</p>`;
        }

        mainBlog.scrollTo({ top: 0, behavior: 'smooth' });
        mainBlog.style.opacity = 1;
        mainBlog.style.transform = 'translateY(0)';
        current = index;
        populateSidebar();
    }, 500);
}

function prevBlog() {
    current = (current - 1 + blogs.length) % blogs.length;
    loadBlog(current);
}

function nextBlog() {
    current = (current + 1) % blogs.length;
    loadBlog(current);
}

loadBlog(current);
populateSidebar();

function prevBlog() {
    const prevIndex = (current - 1 + blogs.length) % blogs.length;
    loadBlog(prevIndex);
}

function nextBlog() {
    const nextIndex = (current + 1) % blogs.length;
    loadBlog(nextIndex);
}

function renderBlog(blog) {
    const blogContent = document.getElementById("main-blog-content");

    blogContent.innerHTML = `
<h1>${blog.title}</h1>
<p class="blog-meta">${blog.meta}</p>
<img src="assets/blogs/${blog.img}" alt="${blog.title}" class="main-blog-img">

<section>
<h2>Introduction</h2>
<p>${blog.sections.intro}</p>
</section>

<section>
<h2>Background</h2>
<p>${blog.sections.background}</p>
</section>

<section>
<h2>The Problem</h2>
<p>${blog.sections.problem}</p>
</section>

<section>
<h2>The Solution</h2>
<p>${blog.sections.solution}</p>
</section>

<section>
<h2>Conclusion</h2>
<p>${blog.sections.conclusion}</p>
</section>
`;
}
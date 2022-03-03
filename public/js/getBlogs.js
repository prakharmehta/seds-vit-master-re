const getBlogs = async (limit = 0) => {
  const result = await fetch("/blogs?limit=" + limit);
  return await result.json();
};

const appendBlogs = (blogs, rootElement) => {
  blogs.forEach((blog) => {
    const blogItem = document.createElement("div");
    blogItem.classList.add("medium-widget-article__content");
    blogItem.innerHTML = `
            <a href="${blog.link}" class="medium-widget-article__values">
            <div class="medium-widget-article__image">
             <img src="${blog.image}" alt="${blog.title}">
            </div>
                <p class="medium-widget-article__title">${blog.title}</p>
                <div>
                <p class="medium-widget-article__author">${blog.author}</p>
                <p class="medium-widget-article__date">${blog.published}</p>
                </div>
            </a>
        `;
    rootElement.appendChild(blogItem);
  });
};

const appendBlogsToDom = async (rootElement) => {
  const blogs = await getBlogs(3);
  appendBlogs(blogs, rootElement);
};

appendBlogsToDom(document.getElementById("medium-widget"));

export const setSEO = ({
  title,
  description,
  canonical,
  ogImage,
}) => {
  if (title) document.title = title;

  updateMeta("description", description);
  updateMeta("robots", "index, follow");

  updateLink("canonical", canonical || window.location.href);

  updateMeta("og:title", title, "property");
  updateMeta("og:description", description, "property");
  updateMeta("og:type", "website", "property");
  updateMeta("og:url", canonical || window.location.href);
  updateMeta("og:image", ogImage || "/og-image.jpg", "property");

  updateMeta("twitter:card", "summary_large_image");
};

const updateMeta = (name, content, attr = "name") => {
  if (!content) return;
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const updateLink = (rel, href) => {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

// utils/cleanHTML.js
export const cleanHTML = (html) => {
  if (!html) return "";

  const doc = new DOMParser().parseFromString(html, "text/html");

  /* ❌ Remove dangerous tags completely */
  doc.querySelectorAll("script, iframe, object, embed").forEach(el =>
    el.remove()
  );

  /* 🧼 Remove inline styles */
  doc.querySelectorAll("[style]").forEach(el =>
    el.removeAttribute("style")
  );

  /* 🧹 Remove empty paragraphs (keep images & lists) */
  doc.querySelectorAll("p").forEach(p => {
    const hasImage = p.querySelector("img");
    const hasList = p.querySelector("ul, ol");
    const text = p.textContent.replace(/\u00A0/g, "").trim();

    if (!hasImage && !hasList && !text) {
      p.remove();
    }
  });

  /* 🧽 Remove excessive <br> (multiple breaks) */
  doc.querySelectorAll("br").forEach(br => {
    const prev = br.previousSibling;
    const next = br.nextSibling;

    if (
      (!prev || prev.nodeName === "BR") &&
      (!next || next.nodeName === "BR")
    ) {
      br.remove();
    }
  });

  /* ✂ Trim whitespace inside text nodes */
  const walker = document.createTreeWalker(
    doc.body,
    NodeFilter.SHOW_TEXT,
    null
  );

  let node;
  while ((node = walker.nextNode())) {
    node.textContent = node.textContent.replace(/\s+/g, " ");
  }

  return doc.body.innerHTML.trim();
};

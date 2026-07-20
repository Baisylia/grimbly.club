// Load Blog Category
let contentFolder = "content";

// Load Category
async function loadContent(type, category){
    // Hide Descriptions
    document.querySelectorAll(".category-info").forEach(info=>{
        info.classList.remove("active");
    });
    // Show Description
    const info = document.getElementById(category + "-info");

    console.log("Showing:", category + "-info", info);

    if(info){
        info.classList.add("active");
    }
    // Get Index
    const response = await fetch(
        `${contentFolder}/index.json`,
        {
            cache:"no-store"
        }
    );

    const index = await response.json();
    const posts = index[type][category] ?? [];
    const container = document.getElementById("contentContainer");
    container.innerHTML = "";

    // Load Posts
    for(const post of posts){
        const file = await fetch(
            `${contentFolder}/${type}/${category}/${post}.md`,
            {
                cache:"no-store"
            }
        );
        const markdown = await file.text();
        renderPost(markdown, container);
    }
}

// Render Markdown
function renderPost(markdown, container){
    const html = marked.parse(markdown);
    const wrapper = document.createElement("div");
    wrapper.className = "content-post";
    wrapper.innerHTML = html;
    container.appendChild(wrapper);
}

// Start with Main
window.onload = ()=>{
    const container = document.getElementById("contentContainer");
    if(container){
        loadContent(contentType, "main");
    }
};
// Load Blog Category
let contentFolder = "content";
let currentLoad = 0;

// Load Category
async function loadContent(type, category){
    const loadID = ++currentLoad;
    // Hide Descriptions
    document.querySelectorAll(".category-info").forEach(info=>{
        info.classList.remove("active");
    });
    const info = document.getElementById(category + "-info");
    if(info){
        info.classList.add("active");
    }
    const response = await fetch(`${contentFolder}/index.json`,{cache:"no-store"});
    const index = await response.json();
    // Stop When New Button Pressed
    if(loadID !== currentLoad){
        return;
    }
    const posts = index[type][category] ?? [];
    const container = document.getElementById("contentContainer");
    container.innerHTML = "";
    for(const post of posts){
        const file = await fetch(`${contentFolder}/${type}/${category}/${post}.md`,{cache:"no-store"});
        const markdown = await file.text();
        // Stop When New Button Pressed
        if(loadID !== currentLoad){
            return;
        }
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
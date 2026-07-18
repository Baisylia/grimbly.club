// Load a Blog
function loadBlog(page) {
    document.getElementById("blogFrame").src = page;
}

// Button Sound
function soundPress() {
  const sound = document.getElementById("button-sound");
  sound.play();
}

// Navigate
function navigate(page) {
  setTimeout(() => {
    window.location.href = page;
  }, 100);
}

// Open New Tab
function openInNewTab(url) {
  window.open(url, '_blank').focus();
}

// Paragraph Button
function textButtonPress(textId) {
  var moreText = document.getElementById(textId);
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
  } else {
    moreText.style.display = "none";
  }
}

// Resize Frame
function resizeIframe() {
  const iframe = document.getElementById("contentFrame");
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
}


// Open Page
function openPage(page){
    window.parent.postMessage({
        type:"pageOpened",
        page:page
    }, "*");
    setTimeout(()=>{
        window.location.href = page;
    },100);
}

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll("[data-page]").forEach(button=>{
        button.onclick = ()=>{
            const page = button.dataset.page;
            window.parent.postMessage({
                type:"pageOpened",
                page:page
            }, "*");
            window.location.href = page;
        };
    });
});

// Page Updates
window.addEventListener("message", (event) => {
    if(event.data.type === "updateStatus"){
        refreshUpdateIcons(event.data.updates);
    }
});

function refreshUpdateIcons(updates){
    document.querySelectorAll("[data-page]").forEach(button=>{
        const page = button.dataset.page;
        const currentRevision = updates[page] ?? 0;
        const seenRevision = parseInt(
            localStorage.getItem("seen_" + page) ?? -1
        );

        if(currentRevision > seenRevision){
            button.classList.add("button-update");
        }
        else{
            button.classList.remove("button-update");
        }
    });
}

window.addEventListener("load", () => {
    window.parent.postMessage({
        type: "requestUpdates"
    }, "*");
});
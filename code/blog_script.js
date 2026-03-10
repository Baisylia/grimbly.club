function resizeBlogFrame() {
    const frame = document.getElementById("blogFrame");
    const doc = frame.contentDocument || frame.contentWindow.document;

    const height = Math.max(
        doc.body.offsetHeight,
        doc.body.scrollHeight,
        doc.documentElement.scrollHeight,
        doc.documentElement.offsetHeight
    );

    frame.style.height = height + "px";
}
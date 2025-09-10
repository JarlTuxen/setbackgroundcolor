document.getElementById("play").addEventListener("click", function () {
    const inputUrl = document.getElementById("href").value.trim();
    let videoId = "";

    // Extract YouTube video ID
    /*RegExp solution
    const urlPattern = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/;
    const match = inputUrl.match(urlPattern);

    if (match && match[1]) {
        videoId = match[1];
    } else if (inputUrl.length === 11) {
        videoId = inputUrl; // already an ID
    }*/
    // Handle "youtube.com" URLs
    try {
        // Try to parse the input as a URL
        const url = new URL(inputUrl);
    if (url.hostname.includes("youtube.com")) {
        if (url.searchParams.has("v")) {
            // Normal watch link: https://www.youtube.com/watch?v=VIDEOID
            videoId = url.searchParams.get("v");
        } else if (url.pathname.startsWith("/embed/")) {
            // Embed link: https://www.youtube.com/embed/VIDEOID
            videoId = url.pathname.split("/embed/")[1];
        } else if (url.pathname.startsWith("/v/")) {
            // Old-style link: https://www.youtube.com/v/VIDEOID
            videoId = url.pathname.split("/v/")[1];
        }
    }

    // Handle "youtu.be" short links
    if (url.hostname === "youtu.be") {
        videoId = url.pathname.slice(1); // remove leading "/"
    }
} catch {
    // If it's not a URL, maybe it's just the ID
    if (inputUrl.length === 11) {
        videoId = inputUrl;
    }
}

    if (videoId) {
        console.log("Video reference:" + videoId);
        const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        document.getElementById("player").src = url;
    } else {
        alert("Please enter a valid YouTube URL or video ID.");
    }
});


window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    // Change the threshold value as per your requirement
    if (scrollPosition > 100) {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    } else {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
    }
});

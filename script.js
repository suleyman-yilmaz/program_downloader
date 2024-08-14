document.getElementById("downloadBtn").addEventListener("click", function() {
    var checkboxes = document.querySelectorAll(".section-container input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            var link = checkbox.nextElementSibling;
            window.open(link.href, '_blank');
        }
    });
});
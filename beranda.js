// untuk scroll to top
const btn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// untuk hidden gem
const filterBtns = document.querySelectorAll(".filter-btn");
const section = ["wisatabahari", "wisatapegunungan", "tamannasional"];

filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var target = btn.getAttribute("data-target");

        filterBtns.forEach(function(b) {
            b.classList.remove("active");
        });
        btn.classList.add("active");

        section.forEach(function(id) {
            var el = document.getElementById(id);
            if (!el) return;

            if (id === target) {
                el.style.display = "block";

                el.classList.remove("hiddengem");
                void el.offsetWidth;
                el.classList.add("hiddengem");
            } else {
                el.style.display = "none";
            }
        });
    });
});
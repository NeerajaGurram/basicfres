var countDownDate = new Date("Feb 10, 2024 00:00:00").getTime();

        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
                minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);

        document.addEventListener('DOMContentLoaded', function () {
            const blocks = document.querySelectorAll('.block');
            function checkScroll() {
                blocks.forEach(block => {
                    const blockTop = block.getBoundingClientRect().top;
                    const screenHeight = window.innerHeight;
                    if (blockTop < screenHeight/1.3) {
                        block.style.opacity = '1';
                        block.style.transform = 'translateX(0)';
      }
    });
  }

  // Initial check when the page loads
  checkScroll();

  // Listen for scroll events
  window.addEventListener('scroll', checkScroll);
});



document.addEventListener('DOMContentLoaded', function () {
    const bigbs = document.querySelectorAll('.bigb');
    function checkScroll() {
        bigbs.forEach(bigb => {
            const bigbTop = bigb.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (bigbTop < screenHeight/1.3) {
                bigb.style.opacity = '1';
                bigb.style.transform = 'translateX(0)';
}
});
}

// Initial check when the page loads
checkScroll();

// Listen for scroll events
window.addEventListener('scroll', checkScroll);
});

document.addEventListener('DOMContentLoaded', function () {
    const block1s = document.querySelectorAll('.block1');
    function checkScroll() {
        block1s.forEach(block1 => {
            const block1Top = block1.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (block1Top < screenHeight/1.3) {
                block1.style.opacity = '1';
                block1.style.transform = 'translateX(0)';
}
});
}

// Initial check when the page loads
checkScroll();

// Listen for scroll events
window.addEventListener('scroll', checkScroll);
});

document.addEventListener('DOMContentLoaded', function () {
    const bigb1s = document.querySelectorAll('.bigb1');
    function checkScroll() {
        bigb1s.forEach(bigb1 => {
            const bigb1Top = bigb1.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (bigb1Top < screenHeight/1.3) {
                bigb1.style.opacity = '1';
                bigb1.style.transform = 'translateX(0)';
}
});
}

// Initial check when the page loads
checkScroll();

// Listen for scroll events
window.addEventListener('scroll', checkScroll);
});

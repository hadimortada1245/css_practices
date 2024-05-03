document.addEventListener("DOMContentLoaded", function() {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }
    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
            const scroller_inner=document.querySelector('.inner');
            const content=Array.from(scroller_inner.children);
            content.forEach((item)=>{
                const duplicatedItem=item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden",true);
                scroller_inner.appendChild(duplicatedItem);
            })
        });
    }
});
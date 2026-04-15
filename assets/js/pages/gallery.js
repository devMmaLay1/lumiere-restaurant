/* ================================================
   LUMIÈRE — GALLERY PAGE JS
   1. Hero entrance  2. Filter logic
   3. ScrollTrigger reveal  4. Lightbox  5. Hover
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

    const isMobile = window.innerWidth < 768;
    const items = document.querySelectorAll('.gal-item');
    const tabs = document.querySelectorAll('.gal-filter-tab');
    let activeFilter = 'all';

    // ── 1. GSAP INITIAL STATE ──
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(items, {
            clipPath: 'inset(100% 0 0 0)',
            y: isMobile ? 20 : 40
        });

        heroAnimation();
        scrollReveal();
        featuredAnimation();
        instaAnimation();
    }

    // ── 2. FILTER LOGIC ──
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.filter;
            if (filter === activeFilter) return;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeFilter = filter;
            runFilter(filter);
        });
    });

    function runFilter(filter) {
        const toHide = [];
        const toShow = [];

        items.forEach(item => {
            const cat = item.dataset.category;
            if (filter === 'all' || cat === filter) {
                toShow.push(item);
            } else {
                toHide.push(item);
            }
        });

        if (typeof gsap === 'undefined') {
            toHide.forEach(i => i.classList.add('gal-hidden'));
            toShow.forEach(i => i.classList.remove('gal-hidden'));
            return;
        }

        if (toHide.length) {
            gsap.to(toHide, {
                scale: 0.95, opacity: 0,
                duration: 0.3, ease: 'power2.in',
                stagger: 0.02,
                onComplete: () => {
                    toHide.forEach(i => {
                        i.classList.add('gal-hidden');
                        gsap.set(i, { clearProps: 'scale,opacity' });
                    });
                    revealItems(toShow);
                }
            });
        } else {
            revealItems(toShow);
        }
    }

    function revealItems(arr) {
        arr.forEach(i => {
            i.classList.remove('gal-hidden');
            gsap.set(i, { clipPath: 'inset(0% 0 0 0)', y: 0 });
        });
        gsap.fromTo(arr,
            { scale: 0.95, opacity: 0 },
            {
                scale: 1, opacity: 1,
                duration: 0.4, ease: 'power2.out',
                stagger: isMobile ? 0.03 : 0.06,
                clearProps: 'scale',
                onComplete: () => ScrollTrigger.refresh()
            }
        );
    }

    // ── 3. SCROLL REVEAL (clip-path + y) ──
    function scrollReveal() {
        items.forEach((item, i) => {
            const delay = isMobile ? 0 : (i % 3) * 0.12;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    once: true
                },
                delay
            });
            tl.to(item, { clipPath: 'inset(0% 0 0 0)', duration: 0.9, ease: 'power3.out' }, 0);
            tl.to(item, { y: 0, duration: 1.1, ease: 'power3.out' }, 0);
        });
    }

    // ── 4. LIGHTBOX ──
    buildLightbox();

    let lbEl, lbImg, lbCap, lbCtr, lbIdx = 0;

    function buildLightbox() {
        lbEl = document.createElement('div');
        lbEl.className = 'gal-lightbox';
        lbEl.innerHTML = `
            <button class="gal-lightbox-close" aria-label="Close"></button>
            <button class="gal-lightbox-arrow gal-lightbox-prev" aria-label="Previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div class="gal-lightbox-img-wrap"><img src="" alt=""></div>
            <button class="gal-lightbox-arrow gal-lightbox-next" aria-label="Next">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <div class="gal-lightbox-info">
                <span class="gal-lightbox-caption"></span>
                <span class="gal-lightbox-counter"></span>
            </div>`;
        document.body.appendChild(lbEl);

        lbImg = lbEl.querySelector('.gal-lightbox-img-wrap img');
        lbCap = lbEl.querySelector('.gal-lightbox-caption');
        lbCtr = lbEl.querySelector('.gal-lightbox-counter');

        // Events
        items.forEach(item => item.addEventListener('click', () => openLB(item)));
        lbEl.querySelector('.gal-lightbox-close').addEventListener('click', closeLB);
        lbEl.addEventListener('click', e => { if (e.target === lbEl) closeLB(); });
        lbEl.querySelector('.gal-lightbox-prev').addEventListener('click', e => { e.stopPropagation(); navLB(-1); });
        lbEl.querySelector('.gal-lightbox-next').addEventListener('click', e => { e.stopPropagation(); navLB(1); });
        document.addEventListener('keydown', e => {
            if (!lbEl.classList.contains('active')) return;
            if (e.key === 'ArrowLeft') navLB(-1);
            if (e.key === 'ArrowRight') navLB(1);
            if (e.key === 'Escape') closeLB();
        });
    }

    function getVisible() {
        return Array.from(items).filter(i => !i.classList.contains('gal-hidden'));
    }

    function openLB(item) {
        const vis = getVisible();
        lbIdx = vis.indexOf(item);
        if (lbIdx < 0) lbIdx = 0;
        setLBImage(vis[lbIdx], vis.length);
        lbEl.classList.add('active');
        document.body.classList.add('gal-lightbox-open');
        if (typeof gsap !== 'undefined') {
            gsap.to(lbEl, { opacity: 1, duration: 0.3, ease: 'power2.out' });
            gsap.fromTo(lbEl.querySelector('.gal-lightbox-img-wrap'),
                { scale: 0.88, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out' });
        } else {
            lbEl.style.opacity = '1';
        }
    }

    function closeLB() {
        if (typeof gsap !== 'undefined') {
            gsap.to(lbEl.querySelector('.gal-lightbox-img-wrap'),
                { scale: 0.92, opacity: 0, duration: 0.25, ease: 'power2.in' });
            gsap.to(lbEl, { opacity: 0, duration: 0.3, ease: 'power2.in',
                onComplete: () => {
                    lbEl.classList.remove('active');
                    document.body.classList.remove('gal-lightbox-open');
                }
            });
        } else {
            lbEl.classList.remove('active');
            lbEl.style.opacity = '0';
            document.body.classList.remove('gal-lightbox-open');
        }
    }

    function navLB(dir) {
        const vis = getVisible();
        if (vis.length <= 1) return;
        lbIdx = (lbIdx + dir + vis.length) % vis.length;
        if (typeof gsap !== 'undefined') {
            const wrap = lbEl.querySelector('.gal-lightbox-img-wrap');
            gsap.to(wrap, { x: dir * -60, opacity: 0, duration: 0.25, ease: 'power2.in',
                onComplete: () => {
                    setLBImage(vis[lbIdx], vis.length);
                    gsap.set(wrap, { x: dir * 60 });
                    gsap.to(wrap, { x: 0, opacity: 1, duration: 0.35, ease: 'power2.out' });
                }
            });
        } else {
            setLBImage(vis[lbIdx], vis.length);
        }
    }

    function setLBImage(item, total) {
        if (!item) return;
        const img = item.querySelector('img');
        const cap = item.querySelector('.gal-caption');
        if (img) { lbImg.src = img.src; lbImg.alt = img.alt; }
        if (lbCap && cap) lbCap.textContent = cap.textContent;
        if (lbCtr) lbCtr.textContent = (lbIdx + 1) + ' / ' + total;
    }

    // ── 5. HOVER (desktop only) ──
    if (!isMobile) {
        items.forEach(item => {
            const ov = item.querySelector('.gal-overlay');
            if (!ov) return;
            item.addEventListener('mouseenter', () => {
                if (typeof gsap !== 'undefined') gsap.to(ov, { opacity: 1, duration: 0.3 });
            });
            item.addEventListener('mouseleave', () => {
                if (typeof gsap !== 'undefined') gsap.to(ov, { opacity: 0, duration: 0.2 });
            });
        });
    }

    // ── HERO ANIMATION ──
    function heroAnimation() {
        const tl = gsap.timeline({ delay: 0.4 });
        tl.to('.gal-breadcrumb', { opacity: 1, duration: 0.6, ease: 'power2.out' });
        tl.to('.gal-hero-label', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
        tl.to('.gal-hero-heading', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3');
        tl.to('.gal-hero-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
        tl.to('.gal-hero-line', { scaleX: 1, duration: 0.8, ease: 'power2.inOut' }, '-=0.3');
    }

    // ── FEATURED ANIMATION ──
    function featuredAnimation() {
        const s = document.getElementById('gal-featured');
        if (!s) return;
        const bg = s.querySelector('.gal-featured-bg');
        if (bg && !isMobile) {
            gsap.to(bg, { yPercent: 20, ease: 'none',
                scrollTrigger: { trigger: s, start: 'top bottom', end: 'bottom top', scrub: true }
            });
        }
        gsap.from(s.querySelector('.gal-featured-content').children, {
            y: isMobile ? 20 : 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: s, start: 'top 60%', once: true }
        });
    }

    // ── INSTAGRAM ANIMATION ──
    function instaAnimation() {
        const s = document.getElementById('gal-instagram');
        if (!s) return;
        const h = s.querySelector('.gal-insta-heading');
        if (h) {
            gsap.from(h.children, { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
                scrollTrigger: { trigger: h, start: 'top 85%', once: true }
            });
        }
        const sq = s.querySelectorAll('.gal-insta-square');
        if (sq.length) {
            gsap.from(sq, { x: 30, opacity: 0, duration: 0.5, stagger: isMobile ? 0.06 : 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: sq[0], start: 'top 90%', once: true }
            });
        }
    }

    // Init Lucide
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.bio-h1 h1');
  const projectScroll = document.querySelector('.project-scroll');
  const prevButton = document.querySelector('.scroll-prev');
  const nextButton = document.querySelector('.scroll-next');

  if (title) {
    const text = "Hi I'm ADRIAAN VAN DER WESTHUIZEN";
    title.textContent = '';
    let index = 0;

    const typeWriter = () => {
      if (index < text.length) {
        title.textContent += text[index];
        index += 1;
        setTimeout(typeWriter, 55);
      
      }
    };

    typeWriter();
  }

  const scrollByAmount = () => {
    if (!projectScroll) return 320;
    const card = projectScroll.querySelector('.project-card');
    return card ? card.offsetWidth + 24 : 320;
  };

  if (projectScroll && prevButton && nextButton) {
    nextButton.addEventListener('click', () => {
      projectScroll.scrollBy({ left: scrollByAmount(), behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
      projectScroll.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' });
    });

    projectScroll.addEventListener('wheel', (event) => {
      if (event.deltaY === 0) return;
      event.preventDefault();
      projectScroll.scrollBy({ left: event.deltaY, behavior: 'smooth' });
    }, { passive: false });
  }
});


 





// Referências globais da UI
const mainContent = document.getElementById('main-content');

// --- NOTÍCIAS ---
const newsOverlay = document.getElementById('news-overlay');
const newsContent = document.getElementById('news-content');
const newsImage = document.getElementById('news-image');
const newsTitle = document.getElementById('news-title');
const newsFullText = document.getElementById('news-full-text');

function showNews(newsId) {
  const data = window.newsData && window.newsData[newsId];
  if (!data) return;
  newsImage.src = data.image;
  newsTitle.textContent = data.title;
  newsFullText.innerHTML = data.fullText;

  newsOverlay.classList.remove('hidden');
  mainContent.classList.add('blur-sm');
  void newsOverlay.offsetWidth; // força repaint para animação
  newsOverlay.classList.remove('opacity-0');
  newsContent.classList.remove('translate-y-full');
  document.body.style.overflow = 'hidden';
}

function hideNews() {
  newsOverlay.classList.add('opacity-0');
  newsContent.classList.add('translate-y-full');
  mainContent.classList.remove('blur-sm');
  setTimeout(() => {
    newsOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }, 500);
}

// --- STORIES ---
const storyOverlay = document.getElementById('story-overlay');
const storyContent = document.getElementById('story-content');
let currentStoryCategory = null;
let currentPageIndex = 0;
let storyTimer;

function showStory(categoryId) {
  currentStoryCategory = (window.storyData && window.storyData[categoryId]) || window.storyData['marilia'];
  if (!currentStoryCategory) return;
  currentPageIndex = 0;

  storyOverlay.classList.remove('hidden');
  mainContent.classList.add('blur-sm');
  void storyOverlay.offsetWidth;
  storyOverlay.classList.remove('opacity-0');
  storyContent.classList.remove('translate-y-full');
  document.body.style.overflow = 'hidden';

  renderStoryPage();
}

function renderStoryPage() {
  clearTimeout(storyTimer);
  const page = currentStoryCategory.pages[currentPageIndex];

  let progressBars = '<div class="absolute top-2 left-2 right-2 flex gap-1 z-20">';
  for (let i = 0; i < currentStoryCategory.pages.length; i++) {
    const activeClass = i < currentPageIndex ? 'w-full' : 'w-0';
    progressBars += `<div class="h-1 bg-white/50 rounded-full flex-1"><div class="progress-bar-inner h-1 bg-white rounded-full ${activeClass}"></div></div>`;
  }
  progressBars += '</div>';

  storyContent.innerHTML = `
    ${progressBars}
    <button onclick="hideStory()" class="absolute top-5 right-4 text-white z-30" aria-label="Fechar">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${page.image}')"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

    <div class="relative z-10 h-full w-full flex flex-col justify-end">
      <div class="w-full p-4 flex items-end">
        <div class="flex-grow pr-4">
          <button onclick="openNewsFromStory('${page.id}')" class="mb-4 bg-white/30 backdrop-blur-sm text-white font-semibold py-2 px-4 rounded-lg z-20 hover:bg-white/50 transition-colors">
            Matéria Completa
          </button>
          <h3 class="text-2xl font-bold text-white truncate">${page.title}</h3>
          <p class="mt-2 text-lg text-white text-ellipsis-3-lines">${page.summary}</p>
        </div>
        <div class="flex flex-col items-center space-y-5 text-white">
          <button onclick="toggleLike(this)" class="flex flex-col items-center text-center" aria-label="Curtir">
            <svg class="like-icon w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
            </svg>
          </button>
          <button onclick="shareContent()" class="flex flex-col items-center text-center" aria-label="Compartilhar">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367-2.684z"></path>
            </svg>
          </button>
          <button onclick="saveContent()" class="flex flex-col items-center text-center" aria-label="Salvar">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 flex z-10">
      <div class="w-1/3" onclick="prevStoryPage()"></div>
      <div class="w-2/3" onclick="nextStoryPage()"></div>
    </div>
  `;

  // anima barra de progresso da página atual
  setTimeout(() => {
    const currentProgressBar = document.querySelectorAll('.progress-bar-inner')[currentPageIndex];
    if (currentProgressBar) currentProgressBar.style.width = '100%';
  }, 50);

  storyTimer = setTimeout(nextStoryPage, 5000);
}

function nextStoryPage() {
  if (currentPageIndex < currentStoryCategory.pages.length - 1) {
    currentPageIndex++;
    renderStoryPage();
  } else {
    hideStory();
  }
}

function prevStoryPage() {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    renderStoryPage();
  }
}

function hideStory() {
  clearTimeout(storyTimer);
  storyOverlay.classList.add('opacity-0');
  storyContent.classList.add('translate-y-full');
  mainContent.classList.remove('blur-sm');
  setTimeout(() => {
    storyOverlay.classList.add('hidden');
    storyContent.innerHTML = '';
    document.body.style.overflow = '';
  }, 500);
}

// --- Ações (Curtir/Compartilhar/Salvar) ---
function toggleLike(element) {
  element.querySelector('.like-icon')?.classList.toggle('liked');
}

function shareContent() {
  const shareData = {
    title: document.title,
    text: 'Confira esta notícia do ComMarília',
    url: window.location.href
  };
  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    alert('Funcionalidade de compartilhar em desenvolvimento!');
  }
}

function saveContent() {
  // simulação
  alert('Notícia salva (simulação)!');
}

function openNewsFromStory(newsId) {
  hideStory();
  setTimeout(() => {
    showNews(newsId);
  }, 500);
}

// Expõe funções no escopo global (para uso em atributos onclick do HTML)
window.showNews = showNews;
window.hideNews = hideNews;
window.showStory = showStory;
window.prevStoryPage = prevStoryPage;
window.nextStoryPage = nextStoryPage;
window.hideStory = hideStory;
window.toggleLike = toggleLike;
window.shareContent = shareContent;
window.saveContent = saveContent;
window.openNewsFromStory = openNewsFromStory;

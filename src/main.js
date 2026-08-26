import confetti from 'canvas-confetti';

// ==========================================
// 1. VERİ TANIMLAMALARI VE PEDAGOJİK İÇERİK
// ==========================================

const CHARACTER_DATA = {
  ruhban: {
    id: 'ruhban',
    title: 'Ruhban Sınıfı (Din Adamları)',
    subtitle: 'XVIII. Yüzyıl Fransa - Ayrıcalıklı 1. Sınıf',
    image: './asset/ruhbanfoto.png',
    video: './asset/ruhban.mp4',
    question: 'XVIII. yüzyıl Fransa\'sında Katolik Kilisesi ve din adamlarının toplumsal durumuna ilişkin doğru maddeleri belirleyiniz:',
    options: [
      { id: 'r1', text: 'Fransa topraklarının %10\'una sahip olup gelirinin yalnızca %2\'sini devlete aktarmaları', isCorrect: true },
      { id: 'r4', text: 'Genel mecliste tüm toplumsal sınıfların kişi başına eşit oy hakkına sahip olmasını savunmaları', isCorrect: false },
      { id: 'r3', text: 'Aydınlanma düşüncesini ve eşitlikçi fikirleri kendi kurumsal nüfuzlarına tehdit olarak görmeleri', isCorrect: true },
      { id: 'r5', text: 'Kraliyet hazinesini desteklemek amacıyla kilise mülklerini köylüler arasında paylaştırmaları', isCorrect: false },
      { id: 'r2', text: 'Köylülerden ve halktan "ondalık" adı altında dini vergi toplama ve kraliyet vergilerinden muaf olma', isCorrect: true }
    ],
    feedback: 'Katolik Kilisesi; Fransa topraklarının %10\'unu elinde bulundurur, halktan ondalık vergisi toplar ve devlete yalnızca %2 sembolik pay öderdi. Bu ayrıcalıklı zümre, aydınlanma fikirlerini kendi statülerine tehdit olarak görmüştür.'
  },
  soylu: {
    id: 'soylu',
    title: 'Soylu Sınıfı (Aristokrasi)',
    subtitle: 'XVIII. Yüzyıl Fransa - Ayrıcalıklı 2. Sınıf',
    image: './asset/soylu.png',
    video: './asset/soylu.mp4',
    question: 'Fransız İhtilali öncesinde soylu sınıfının (aristokrasinin) siyasi ve ekonomik ayrıcalıklarına ilişkin doğru maddeleri belirleyiniz:',
    options: [
      { id: 's5', text: '1789 Genel Meclisinde (États-Généraux) üçüncü sınıfın çoğunluk iradesine doğrudan boyun eğmeleri', isCorrect: false },
      { id: 's1', text: 'Nüfusun sadece %2\'sini oluşturmalarına karşın ülke topraklarının %20\'sini ellerinde bulundurmaları', isCorrect: true },
      { id: 's4', text: 'Ülke kalkınması için feodal senyörlük harçlarını ve angarya yükümlülüklerini gönüllüce kaldırmaları', isCorrect: false },
      { id: 's2', text: 'Ordu komutanlıkları, saray diplomasisi ve yüksek yargıda doğuştan gelen mevki tekeline sahip olmaları', isCorrect: true },
      { id: 's3', text: 'Köylüler üzerinde feodal haklar uygulayıp devlete neredeyse hiç vergi ödememeleri', isCorrect: true }
    ],
    feedback: 'Soylular, nüfusun yalnızca %2\'sini oluşturmalarına rağmen toprakların %20\'sine sahipti; ordu ve bürokraside tekel kurarak vergi ödemekten muaftılar.'
  },
  isci_burjuva: {
    id: 'isci_burjuva',
    title: 'Üçüncü Tabaka (Halk ve Burjuvazi)',
    subtitle: 'XVIII. Yüzyıl Fransa - Nüfusun %97’si',
    image: './asset/iscifoto.png',
    video: './asset/isciburjuva.mp4',
    question: 'Fransız İhtilali öncesinde Üçüncü Tabaka\'nın (halk, köylü, işçi ve burjuvazi) durumuna ilişkin doğru maddeleri belirleyiniz:',
    options: [
      { id: 'i1', text: 'Nüfusun %80\'inden fazlasını oluşturan köylülerin gelirlerinin yaklaşık yarısını vergi ve harçlara vermesi', isCorrect: true },
      { id: 'i4', text: 'Kraliyeti korumak amacıyla soyluların toprak vergilerinden tamamen muaf tutulmasını savunmaları', isCorrect: false },
      { id: 'i3', text: 'Aydınlanma filozoflarının fikirlerinden ilham alarak "Halk her şeydir ve devletin temelidir" ilkesini savunmaları', isCorrect: true },
      { id: 'i5', text: 'Ekmek fiyatları iki katına çıkmasına rağmen saray harcamalarını karşılamak için ek vergi vermeye razı olmaları', isCorrect: false },
      { id: 'i2', text: 'Bankacı, tüccar ve avukatlardan oluşan burjuvaların ekonomik güce ulaşmasına rağmen siyasi hak ve temsilden yoksun kalması', isCorrect: true }
    ],
    feedback: 'Nüfusun %97\'sini oluşturan bu tabaka; üretimi yapan ve ağır vergileri ödeyen kesim olmasına rağmen siyasi kararlardan dışlanmıştı. Aydınlanma düşüncesinin etkisiyle egemenliğin halka ait olduğunu savunmuşlardır.'
  },
  cagdas_yurttas: {
    id: 'cagdas_yurttas',
    title: 'Çağdaş Yurttaş',
    subtitle: 'Günümüz Dünyası - Demokratik Hukuk Devleti',
    image: './asset/modernkadin.png',
    video: './asset/modernkadin.mp4',
    question: 'Günümüzde evrensel insan hakları ve anayasal vatandaşlık bilincinin temel esaslarına ilişkin doğru maddeleri belirleyiniz:',
    options: [
      { id: 'c4', text: 'Siyasi temsil hakkının sadece belirli mülkiyet sınırını aşan "aktif" yurttaşlara tanınması', isCorrect: false },
      { id: 'c1', text: 'Vatandaşlığın şahsa veya hanedana sadakat yerine, hak ve sorumluluklara dayalı anayasal bir bağ olarak tanımlanması', isCorrect: true },
      { id: 'c2', text: 'Cinsiyet ayrımı gözetmeksizin kadın ve erkek her bireyin eşit seçme, seçilme ve yönetime katılma hakkı', isCorrect: true },
      { id: 'c5', text: 'Yargılama ve ceza işlemlerinin kişilerin mensup olduğu dini cemaat kurallarına göre yürütülmesi', isCorrect: false },
      { id: 'c3', text: 'Doğuştan gelen tüm unvan ve zümre imtiyazlarının kaldırılarak herkesin kanun önünde eşit haklara sahip kılınması', isCorrect: true }
    ],
    feedback: 'Çağdaş vatandaşlık; bireyi tebaa anlayışından kurtararak kanun önünde eşit kılan, kadın-erkek ayrımı yapmaksızın seçme-seçilme hakkı tanıyan ve anayasal güvenceye dayanan hukuki bir bağdır.'
  }
};

const CONCEPT_CARDS = [
  { id: 'c1', text: 'Geniş Kilise Toprakları ve Sosyal Güç Ayrıcalığı', target: 'ruhban' },
  { id: 'c2', text: 'Dini Statü Kaynaklı Vergi Muafiyeti', target: 'ruhban' },
  { id: 'c3', text: 'Doğuştan Gelen Askeri ve İdari Mevki Tekeli', target: 'soylu' },
  { id: 'c4', text: 'Feodal Haklar ve Saray Ayrıcalıkları', target: 'soylu' },
  { id: 'c5', text: 'Ağır Vergi Yükü ve Siyasi Temsil Yoksunluğu', target: 'isci_burjuva' },
  { id: 'c6', text: 'Üretim Gücüne Rağmen Kanun Önünde Eşitsizlik', target: 'isci_burjuva' },
  { id: 'c7', text: 'Kanun Önünde Mutlak Eşitlik ve Ayrımcılık Yasağı', target: 'cagdas_yurttas' },
  { id: 'c8', text: 'Cinsiyet Ayrımı Olmaksızın Eşit Seçme-Seçilme Hakkı', target: 'cagdas_yurttas' }
];

// ==========================================
// 2. UYGULAMA DURUMU (STATE)
// ==========================================

const state = {
  currentStep: 0,
  activeModalCharKey: null,
  watchedCharacters: new Set(),
  solvedModalQuestions: new Set(),
  modalSelectedOptions: new Set(),
  selectedConceptId: null,
  placedConcepts: {},
  answeredQuestions: {
    q1: null,
    q2: null,
    q3: null
  }
};

// Diziyi tarafsızca karıştırma (Fisher-Yates Shuffle)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ==========================================
// 3. DOM ELEMANLARI
// ==========================================

const videoModal = document.getElementById('video-modal');
const modalVideoWrapper = document.getElementById('modal-video-wrapper');
const activeVideoPlayer = document.getElementById('active-video-player');
const modalCharTitle = document.getElementById('modal-char-title');
const modalCharAvatar = document.getElementById('modal-char-avatar').querySelector('img');

const modalQuestionArea = document.getElementById('modal-question-area');
const modalQuestionText = document.getElementById('modal-question-text');
const modalOptionsContainer = document.getElementById('modal-options-container');
const modalFeedbackBox = document.getElementById('modal-feedback-box');
const btnCheckModalAnswer = document.getElementById('btn-check-modal-answer');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnReplayVideo = document.getElementById('btn-replay-video');

const cardsPool = document.getElementById('cards-pool');
const remainingCount = document.getElementById('remaining-count');

// ==========================================
// 4. ADIM VE NAVİGASYON YÖNETİMİ
// ==========================================

function goToStep(stepNumber) {
  state.currentStep = stepNumber;

  // Navigasyon butonlarını güncelle
  document.querySelectorAll('.step-nav-btn').forEach(btn => {
    const step = parseInt(btn.dataset.step, 10);
    const circle = btn.querySelector('span');

    if (step === stepNumber) {
      btn.classList.add('bg-[#fdfbf7]', 'text-amber-950', 'font-bold', 'shadow-xs', 'border-[#cfc1ac]');
      btn.classList.remove('opacity-80', 'text-[#6b5849]');
      circle.className = 'w-5 h-5 rounded-md bg-amber-700 text-white font-black flex items-center justify-center text-xs shadow-2xs';
    } else {
      btn.classList.remove('bg-[#fdfbf7]', 'text-amber-950', 'font-bold', 'shadow-xs', 'border-[#cfc1ac]');
      btn.classList.add('opacity-80', 'text-[#6b5849]');
      circle.className = 'w-5 h-5 rounded-md bg-[#dfd5c3] text-[#4a3b30] flex items-center justify-center text-xs';
    }
  });

  // Bölümleri göster / gizle
  document.querySelectorAll('.step-section').forEach(sec => sec.classList.add('hidden'));
  const activeSection = document.getElementById(`step-${stepNumber}-container`);
  if (activeSection) {
    activeSection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // SCORM adımını kaydet
  if (typeof window.SCORM !== 'undefined' && window.SCORM.setStep) {
    window.SCORM.setStep(`adim-${stepNumber}`);
  }

  // 4. adıma geçildiğinde SCORM tamamlandı raporla ve konfeti patlat
  if (stepNumber === 4) {
    reportScormCompleted();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Navigasyon butonlarına tıklama olayları
document.querySelectorAll('.step-nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetStep = parseInt(btn.dataset.step, 10);
    goToStep(targetStep);
  });
});

document.getElementById('btn-start-activity')?.addEventListener('click', () => goToStep(1));
document.getElementById('btn-go-step-2')?.addEventListener('click', () => goToStep(2));
document.getElementById('btn-back-step-1')?.addEventListener('click', () => goToStep(1));
document.getElementById('btn-go-step-3')?.addEventListener('click', () => goToStep(3));
document.getElementById('btn-back-step-2')?.addEventListener('click', () => goToStep(2));
document.getElementById('btn-go-step-4')?.addEventListener('click', () => goToStep(4));

// ==========================================
// 5. 1. ADIM: VİDEO MODAL VE ÇOKLU SEÇİM SORU YÖNETİMİ
// ==========================================

function openVideoModal(characterKey) {
  const char = CHARACTER_DATA[characterKey];
  if (!char) return;

  state.activeModalCharKey = characterKey;
  state.modalSelectedOptions.clear();

  modalCharTitle.textContent = char.title;
  modalCharAvatar.src = char.image;
  modalCharAvatar.alt = char.title;

  // Soru Metnini Yükle
  modalQuestionText.textContent = char.question;

  // Geri Bildirim Kutusunu Sıfırla
  modalFeedbackBox.className = 'text-xs sm:text-sm font-medium p-3.5 sm:p-4 rounded-xl mt-3.5 hidden transition-all';
  modalFeedbackBox.textContent = '';

  const isAlreadySolved = state.solvedModalQuestions.has(characterKey);

  // Seçenekleri Dinamik Oluştur
  renderModalOptions(char, isAlreadySolved);

  activeVideoPlayer.src = char.video;
  activeVideoPlayer.currentTime = 0;

  // Video Durumu ve Soru Görünürlüğü (Katmanlı Geçiş)
  if (isAlreadySolved) {
    showModalQuestions(characterKey);
  } else {
    modalVideoWrapper.classList.remove('hidden');
    modalQuestionArea.classList.add('hidden');
    btnReplayVideo.classList.add('hidden');
    activeVideoPlayer.play().catch(() => {});
  }

  // Video Bittiğinde Soruları Aç
  activeVideoPlayer.onended = () => {
    showModalQuestions(characterKey);
  };

  videoModal.classList.remove('hidden');
  setTimeout(() => {
    videoModal.classList.remove('opacity-0');
  }, 10);
}

function showModalQuestions(characterKey) {
  activeVideoPlayer.pause();
  modalVideoWrapper.classList.add('hidden');
  modalQuestionArea.classList.remove('hidden');
  btnReplayVideo.classList.remove('hidden');

  const isAlreadySolved = state.solvedModalQuestions.has(characterKey);
  if (isAlreadySolved) {
    btnCheckModalAnswer.classList.add('hidden');
  } else {
    btnCheckModalAnswer.classList.remove('hidden');
  }
}

// Videoyu Tekrar Dinle Butonu
btnReplayVideo?.addEventListener('click', () => {
  modalQuestionArea.classList.add('hidden');
  modalVideoWrapper.classList.remove('hidden');
  btnReplayVideo.classList.add('hidden');
  activeVideoPlayer.currentTime = 0;
  activeVideoPlayer.play().catch(() => {});
});

function renderModalOptions(char, isAlreadySolved) {
  modalOptionsContainer.innerHTML = '';

  // Seçenekleri rastgele karıştır (konum tahminini engellemek ve öğrenciyi okumaya teşvik etmek için)
  const optionsToRender = isAlreadySolved ? char.options : shuffleArray(char.options);

  optionsToRender.forEach((opt) => {
    const optCard = document.createElement('div');
    optCard.id = `modal-opt-${opt.id}`;
    optCard.className = 'modal-option-row p-3.5 sm:p-4 rounded-xl border border-[#d8ccb9] bg-[#fdfcf9] text-xs sm:text-sm md:text-base text-[#2c221a] flex items-start gap-3.5 cursor-pointer hover:border-amber-600 hover:bg-[#f9f4ea] transition-all select-none shadow-xs';
    optCard.dataset.id = opt.id;
    optCard.dataset.correct = opt.isCorrect ? 'true' : 'false';

    const isChecked = isAlreadySolved && opt.isCorrect;

    optCard.innerHTML = `
      <div class="checkbox-indicator w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-md border-2 border-[#b8a892] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white hidden checkmark-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <span class="leading-snug font-medium">${opt.text}</span>
    `;

    if (isChecked) {
      optCard.classList.add('border-emerald-600', 'bg-emerald-50/90', 'text-emerald-950');
      const ind = optCard.querySelector('.checkbox-indicator');
      ind.classList.add('bg-emerald-700', 'border-emerald-700');
      optCard.querySelector('.checkmark-icon').classList.remove('hidden');
    }

    if (!isAlreadySolved) {
      optCard.addEventListener('click', () => {
        toggleModalOption(opt.id, optCard);
      });
    }

    modalOptionsContainer.appendChild(optCard);
  });
}

function toggleModalOption(optId, optCard) {
  const indicator = optCard.querySelector('.checkbox-indicator');
  const checkmark = optCard.querySelector('.checkmark-icon');

  if (state.modalSelectedOptions.has(optId)) {
    state.modalSelectedOptions.delete(optId);
    optCard.classList.remove('border-amber-600', 'bg-amber-50/90', 'ring-1', 'ring-amber-500', 'text-amber-950');
    indicator.classList.remove('bg-amber-700', 'border-amber-700');
    indicator.classList.add('border-[#b8a892]');
    checkmark.classList.add('hidden');
  } else {
    state.modalSelectedOptions.add(optId);
    optCard.classList.add('border-amber-600', 'bg-amber-50/90', 'ring-1', 'ring-amber-500', 'text-amber-950');
    indicator.classList.add('bg-amber-700', 'border-amber-700');
    indicator.classList.remove('border-[#b8a892]');
    checkmark.classList.remove('hidden');
  }
}

// Çoklu Seçimleri Kontrol Et Butonu
btnCheckModalAnswer?.addEventListener('click', () => {
  const charKey = state.activeModalCharKey;
  if (!charKey) return;
  const char = CHARACTER_DATA[charKey];
  if (!char) return;

  const correctOptionIds = new Set(char.options.filter(o => o.isCorrect).map(o => o.id));
  const selectedIds = state.modalSelectedOptions;

  // Seçimlerin tam doğruluğunu kontrol et
  const isExactMatch = correctOptionIds.size === selectedIds.size &&
    [...correctOptionIds].every(id => selectedIds.has(id));

  if (isExactMatch) {
    // Doğru Yanıt
    state.solvedModalQuestions.add(charKey);
    markCharacterWatched(charKey);

    // Kartları yeşillendir
    char.options.forEach(opt => {
      const el = document.getElementById(`modal-opt-${opt.id}`);
      if (el) {
        if (opt.isCorrect) {
          el.className = 'modal-option-row p-3.5 sm:p-4 rounded-xl border border-emerald-600 bg-emerald-50 text-emerald-950 flex items-start gap-3.5 select-none shadow-xs';
          const ind = el.querySelector('.checkbox-indicator');
          ind.className = 'checkbox-indicator w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-md bg-emerald-700 border-2 border-emerald-700 flex items-center justify-center shrink-0 mt-0.5';
          el.querySelector('.checkmark-icon').classList.remove('hidden');
        } else {
          el.className = 'modal-option-row p-3.5 sm:p-4 rounded-xl border border-[#dfd5c3] bg-[#f5efe6]/50 text-[#8c7e70] opacity-60 flex items-start gap-3.5 select-none';
        }
      }
    });

    modalFeedbackBox.className = 'text-xs sm:text-sm font-medium p-3.5 sm:p-4 rounded-xl mt-3.5 bg-emerald-50 border border-emerald-300 text-emerald-950 block leading-relaxed shadow-xs';
    modalFeedbackBox.innerHTML = `
      <div class="font-bold flex items-center gap-1.5 text-emerald-900 mb-1">
        <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        Tebrikler!
      </div>
      <p class="text-[#2b2118]">${char.feedback}</p>
    `;

    btnCheckModalAnswer.classList.add('hidden');

  } else {
    // Yanlış veya Eksik Seçim
    modalQuestionArea.classList.add('animate-shake');
    setTimeout(() => {
      modalQuestionArea.classList.remove('animate-shake');
    }, 450);

    // İşaretlemeleri temizle / sıfırla
    state.modalSelectedOptions.clear();
    char.options.forEach(opt => {
      const optCard = document.getElementById(`modal-opt-${opt.id}`);
      if (optCard) {
        optCard.classList.remove('border-amber-600', 'bg-amber-50/90', 'ring-1', 'ring-amber-500', 'text-amber-950');
        const indicator = optCard.querySelector('.checkbox-indicator');
        const checkmark = optCard.querySelector('.checkmark-icon');
        if (indicator) {
          indicator.classList.remove('bg-amber-700', 'border-amber-700');
          indicator.classList.add('border-[#b8a892]');
        }
        if (checkmark) {
          checkmark.classList.add('hidden');
        }
      }
    });

    modalFeedbackBox.className = 'text-xs sm:text-sm font-medium p-3.5 sm:p-4 rounded-xl mt-3.5 bg-red-50 border border-red-300 text-red-950 block leading-relaxed shadow-xs';
    modalFeedbackBox.innerHTML = `
      <div class="font-bold flex items-center gap-1.5 text-red-900 mb-1">
        <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Tekrar Deneyiniz
      </div>
      <p class="text-[#4a3b30]">Seçtiğiniz maddeler arasında karaktere uymayan veya işaretlenmemiş doğru özellikler bulunmaktadır. Tanıklıktaki hak, imtiyaz ve yükümlülükleri dikkate alarak doğru maddeleri yeniden işaretleyiniz.</p>
    `;
  }
});

function closeVideoModal() {
  activeVideoPlayer.pause();
  activeVideoPlayer.src = '';
  videoModal.classList.add('opacity-0');
  setTimeout(() => {
    videoModal.classList.add('hidden');
  }, 300);
}

function markCharacterWatched(characterKey) {
  state.watchedCharacters.add(characterKey);

  const badge = document.getElementById(`badge-${characterKey}`);
  if (badge) {
    badge.className = 'status-badge px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-700 text-white backdrop-blur-sm flex items-center gap-1 shadow-sm';
    badge.classList.remove('hidden');
    badge.innerHTML = `
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      Tamamlandı
    `;
  }
}

// Karakter kartlarına tıklama olayı
document.querySelectorAll('.character-card').forEach(card => {
  card.addEventListener('click', () => {
    const charKey = card.dataset.character;
    openVideoModal(charKey);
  });
});

btnCloseModal.addEventListener('click', closeVideoModal);

// Modal dışına tıklayınca kapatma
videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    closeVideoModal();
  }
});

// ESC tuşu ile modal kapatma
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
    closeVideoModal();
  }
});

// ==========================================
// 6. 2. ADIM: EŞLEŞTİRME VE SÜRÜKLE-BIRAK
// ==========================================

function initConceptCards() {
  cardsPool.innerHTML = '';
  document.querySelectorAll('.target-drop-area').forEach(area => area.innerHTML = '');
  state.placedConcepts = {};
  state.selectedConceptId = null;

  // Rastgele karıştırılmış kartlar
  const shuffledCards = shuffleArray(CONCEPT_CARDS);

  shuffledCards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.id = `card-${card.id}`;
    cardEl.className = 'concept-card px-4 py-2.5 rounded-xl bg-gradient-to-b from-[#fdfbf7] to-[#f9f5ed] border border-[#cfc1ac] text-[#2c221a] text-xs sm:text-sm font-semibold shadow-xs hover:border-amber-600 hover:shadow-md cursor-pointer transition-all select-none flex items-center gap-2.5';
    cardEl.draggable = true;
    cardEl.dataset.id = card.id;
    cardEl.dataset.target = card.target;

    cardEl.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-amber-600 shrink-0"></span>
      <span class="leading-snug">${card.text}</span>
    `;

    // Sürükleme Olayları (Drag)
    cardEl.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', card.id);
      cardEl.classList.add('dragging');
    });

    cardEl.addEventListener('dragend', () => {
      cardEl.classList.remove('dragging');
    });

    // Tıklama Olayı (Mobil ve Dokunmatik Kolaylığı)
    cardEl.addEventListener('click', () => {
      selectConceptCard(card.id);
    });

    cardsPool.appendChild(cardEl);
  });

  updateRemainingCount();
}

function selectConceptCard(cardId) {
  // Eğer zaten yerleştirildiyse seçim yapma
  if (state.placedConcepts[cardId]) return;

  // Önceden seçilmiş kartın vurgusunu kaldır
  document.querySelectorAll('.concept-card').forEach(el => {
    el.classList.remove('ring-2', 'ring-amber-600', 'bg-amber-50/90', 'border-amber-600');
  });

  if (state.selectedConceptId === cardId) {
    state.selectedConceptId = null;
    return;
  }

  state.selectedConceptId = cardId;
  const currentCard = document.getElementById(`card-${cardId}`);
  if (currentCard) {
    currentCard.classList.add('ring-2', 'ring-amber-600', 'bg-amber-50/90', 'border-amber-600');
  }
}

// Hedef Alanların Yapılandırılması
document.querySelectorAll('.target-zone').forEach(zone => {
  const targetName = zone.dataset.target;
  const dropArea = zone.querySelector('.target-drop-area');

  // Drag over / drop olayları
  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('drag-over');
  });

  zone.addEventListener('dragleave', () => {
    zone.classList.remove('drag-over');
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const cardId = e.dataTransfer.getData('text/plain');
    if (cardId) {
      handlePlacement(cardId, targetName, zone, dropArea);
    }
  });

  // Tıklama ile yerleştirme
  zone.addEventListener('click', () => {
    if (state.selectedConceptId) {
      handlePlacement(state.selectedConceptId, targetName, zone, dropArea);
    }
  });
});

function handlePlacement(cardId, targetName, targetZone, dropArea) {
  const cardData = CONCEPT_CARDS.find(c => c.id === cardId);
  const cardEl = document.getElementById(`card-${cardId}`);
  if (!cardData || !cardEl) return;

  const isCorrect = cardData.target === targetName;

  if (isCorrect) {
    // Doğru Yerleştirme (Yeşil Geri Bildirim)
    state.placedConcepts[cardId] = targetName;
    state.selectedConceptId = null;

    cardEl.draggable = false;
    cardEl.classList.remove('ring-2', 'ring-amber-600', 'bg-amber-50/90', 'border-amber-600', 'hover:border-amber-600', 'hover:shadow-md', 'cursor-pointer');
    cardEl.classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-950', 'cursor-default');

    cardEl.innerHTML = `
      <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      <span class="leading-snug font-medium">${cardData.text}</span>
    `;

    dropArea.appendChild(cardEl);
    updateRemainingCount();

    // Yeşil hafif parlama efekti
    targetZone.classList.add('ring-2', 'ring-emerald-600');
    setTimeout(() => {
      targetZone.classList.remove('ring-2', 'ring-emerald-600');
    }, 500);

    // Hepsi bitti mi kontrol et
    if (Object.keys(state.placedConcepts).length === CONCEPT_CARDS.length) {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    }

  } else {
    // Yanlış Yerleştirme (Kırmızı Geri Bildirim ve Titreme)
    cardEl.classList.add('animate-shake', 'border-red-500', 'bg-red-50', 'text-red-950');
    targetZone.classList.add('ring-2', 'ring-red-500');

    setTimeout(() => {
      cardEl.classList.remove('animate-shake', 'border-red-500', 'bg-red-50', 'text-red-950', 'ring-2', 'ring-amber-600');
      targetZone.classList.remove('ring-2', 'ring-red-500');
      state.selectedConceptId = null;
    }, 700);
  }
}

function updateRemainingCount() {
  const total = CONCEPT_CARDS.length;
  const placed = Object.keys(state.placedConcepts).length;
  const remaining = total - placed;

  const countEl = document.getElementById('remaining-count');
  if (countEl) {
    if (remaining === 0) {
      countEl.textContent = 'Tüm Eşleştirmeler Başarıyla Tamamlandı!';
      countEl.className = 'text-xs font-bold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300';
    } else {
      countEl.textContent = `${remaining} Kavram Kaldı`;
      countEl.className = 'text-xs font-bold text-amber-900 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300/80';
    }
  }
}

// ==========================================
// 7. 3. ADIM: BÜYÜK KIRILMA SERGİSİ (3D ASILI ÇARŞAF VE MANDAL ETKİLEŞİMİ)
// ==========================================

const examinedBreaks = new Set();

// 3D Asılı Kartları Tıklayarak Açma ve İnceleme Takibi
document.querySelectorAll('.hanging-sheet-wrapper').forEach(wrapper => {
  const breakNum = parseInt(wrapper.dataset.break, 10);
  const card = wrapper.querySelector('.hanging-sheet-card');
  const frontFace = wrapper.querySelector('.sheet-front');
  const backFace = wrapper.querySelector('.sheet-back');

  // Ön yüze tıklandığında kartı çevirerek aç ve incelendi olarak kaydet
  frontFace?.addEventListener('click', () => {
    card?.classList.add('is-flipped');

    examinedBreaks.add(breakNum);

    // 4 belge de incelendiğinde tebrik konfetisi
    if (examinedBreaks.size === 4) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 }
      });
    }
  });

  // Arka yüze tıklandığında kartı tekrar kapat
  backFace?.addEventListener('click', () => {
    card?.classList.remove('is-flipped');
  });
});

// ==========================================
// 8. SCORM ENTEGRASYONU VE ETKİNLİK BİTİRME
// ==========================================

function reportScormCompleted() {
  try {
    if (typeof window.SCORM !== 'undefined') {
      if (window.SCORM.sendScore) {
        window.SCORM.sendScore(100, 100, true);
      }
      if (window.SCORM.setStatus) {
        window.SCORM.setStatus('completed');
      }
      if (window.SCORM.complete) {
        window.SCORM.complete(true);
      }
    } else if (typeof doLMSSetValue === 'function') {
      doLMSSetValue("cmi.core.lesson_status", "completed");
      if (typeof doLMSCommit === 'function') doLMSCommit();
    }
  } catch (e) {
    // SCORM hatası sessizce yutulur
  }
}

// Etkinliği Yeniden Başlat
document.getElementById('btn-restart')?.addEventListener('click', () => {
  reportScormCompleted();

  // Durumu sıfırla
  state.currentStep = 1;
  state.activeModalCharKey = null;
  state.watchedCharacters.clear();
  state.solvedModalQuestions.clear();
  state.modalSelectedOptions.clear();
  state.selectedConceptId = null;
  state.placedConcepts = {};
  state.answeredQuestions = { q1: null, q2: null, q3: null };

  // Bitiş ekranı durumunu sıfırla
  const completionCard = document.getElementById('completion-card-content');
  const finishClosedMsg = document.getElementById('finish-screen-closed');
  if (completionCard) completionCard.classList.remove('hidden');
  if (finishClosedMsg) finishClosedMsg.classList.add('hidden');

  // Karakter rozetlerini sıfırla
  ['ruhban', 'soylu', 'isci_burjuva', 'cagdas_yurttas'].forEach(charKey => {
    const badge = document.getElementById(`badge-${charKey}`);
    if (badge) {
      badge.className = 'status-badge hidden px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-700 text-white backdrop-blur-sm flex items-center gap-1 shadow-sm';
      badge.innerHTML = '';
    }
  });

  // Eşleştirme kartlarını sıfırla
  initConceptCards();

  // Kırılma kartlarını (çarşafları) sıfırla
  examinedBreaks.clear();

  document.querySelectorAll('.hanging-sheet-wrapper').forEach(wrapper => {
    const card = wrapper.querySelector('.hanging-sheet-card');
    card?.classList.remove('is-flipped');
  });

  goToStep(1);
});

// Etkinliği Bitir (Pencereyi/Sekmeyi Kapat)
document.getElementById('btn-finish-activity')?.addEventListener('click', () => {
  reportScormCompleted();

  if (typeof window.SCORM !== 'undefined' && window.SCORM.terminate) {
    window.SCORM.terminate();
  }

  // Sayfayı/Sekmeyi kapatmayı dene
  try { window.close(); } catch (e) {}
  try { window.open('', '_self', ''); window.close(); } catch (e) {}
  try { if (window.top && window.top !== window) window.top.close(); } catch (e) {}

  // Tarayıcı güvenlik kısıtlaması nedeniyle doğrudan kapanmazsa bilgilendirme ekranını göster
  const completionCard = document.getElementById('completion-card-content');
  const finishClosedMsg = document.getElementById('finish-screen-closed');
  if (completionCard && finishClosedMsg) {
    completionCard.classList.add('hidden');
    finishClosedMsg.classList.remove('hidden');
  }
});

// SCORM Servisi Başlatma
if (typeof window.SCORM !== 'undefined' && window.SCORM.initialize) {
  window.SCORM.initialize();
}

// Sayfa kapatılırken SCORM oturumunu sonlandır
window.addEventListener('beforeunload', () => {
  if (typeof window.SCORM !== 'undefined' && window.SCORM.terminate) {
    window.SCORM.terminate();
  }
});

// Başlangıç Kurulumu
initConceptCards();

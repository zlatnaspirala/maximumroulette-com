import './index.css';

interface MenuLink {
  name: string;
  url: string;
}

const LINKS: MenuLink[]=[
  { name: 'Apps', url: '/welcome.html' },
  { name: 'THE BEAST - EXAMPLES', url: 'https://maximumroulette.com/apps/webgpu/examples.html?demo=20' },
  { name: 'My webGL engine', url: 'https://maximumroulette.com/apps/matrix-engine/examples-build.html' },
  { name: 'webGL slot mashine', url: 'https://maximumroulette.com/apps/matrix-engine-starter/projects/matrix-slot/index.html' },
  { name: 'Roulette based on three.js', url: 'https://roulette.maximumroulette.com/' },
  { name: 'Shader editor matrix-engine webGL', url: 'https://maximumroulette.com/apps/glsl-editor/' },
  { name: 'Shoot the zombie (Only desktop)', url: 'https://maximumroulette.com/apps/shoot-the-zombie' },
  { name: 'Hang3d Nightmare (Only desktop)', url: 'https://maximumroulette.com/apps/shooter/hang3d-nightmare.html' },
  { name: 'Realistic example from UE4', url: 'https://maximumroulette.com/apps/realistic-rendering' },
  { name: 'Visual-Ts game engine', url: 'https://maximumroulette.com/apps/visual-ts/singleplayer/app.html' },
  { name: 'FPS based on three.js', url: 'https://maximumroulette.com/apps/magic/public/module.html' },
];

// const THEME_COLORS=[
//   { name: 'cyan', color: '#00f3ff' },
//   { name: 'pink', color: '#ff007f' },
//   { name: 'green', color: '#39ff14' },
// ];

let activeLinkId=LINKS[0].name;
let currentThemeColor='#00f3ff';

// Hex decimal conversion to rgb components
function hexToRgbValues(hex: string): string {
  let c=hex.substring(1);
  if(c.length===3) {
    c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
  }
  const r=parseInt(c.slice(0, 2), 16);
  const g=parseInt(c.slice(2, 4), 16);
  const b=parseInt(c.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

const root=document.getElementById('root');
if(root) {
  root.textContent='';
  root.className='w-screen h-screen flex flex-col overflow-hidden';
  const header=document.createElement('header');
  header.id='app-header';
  header.className='relative z-50 w-full h-16 flex items-center justify-between select-none';
  // Brand (Left side)
  const brandContainer=document.createElement('div');
  brandContainer.className='flex items-center space-x-3';
  // Real-time custom neon light
  const neonCircle=document.createElement('div');
  neonCircle.id='neon-circle-tag';
  neonCircle.className='rounded-sm transition-all duration-300';
  neonCircle.style.width='7px';
  neonCircle.style.height='7px';
  neonCircle.style.backgroundColor=currentThemeColor;
  neonCircle.style.boxShadow=`0 0 8px ${currentThemeColor}`;

  const textGroup=document.createElement('div');
  textGroup.className='flex flex-col';

  const titleNode=document.createElement('span');
  titleNode.className='text-white leading-tight font-tint';
  titleNode.style.fontSize='15px';
  titleNode.textContent='Nikola Lukic';

  const subtitleNode=document.createElement('span');
  subtitleNode.className='text-[#52525b] uppercase font-convergence';
  subtitleNode.style.fontSize='9px';
  subtitleNode.textContent='Graphics Programmer';

  textGroup.appendChild(titleNode);
  textGroup.appendChild(subtitleNode);
  brandContainer.appendChild(neonCircle);
  brandContainer.appendChild(textGroup);

  const dropdownsContainer=document.createElement('div');
  dropdownsContainer.id='header-nav-container';
  dropdownsContainer.className='flex flex-wrap items-center justify-center gap-2 relative';
  dropdownsContainer.style.zIndex='100';

  // --- DROPDOWN 1: DEMOS ---
  const demoDropdownWrapper=document.createElement('div');
  demoDropdownWrapper.className='relative';

  const demoDropdownTrigger=document.createElement('button');
  demoDropdownTrigger.id='demo-dropdown-trigger';
  demoDropdownTrigger.className='flex items-center justify-between px-3 py-2 transition-all duration-200 text-white rounded-sm cursor-pointer font-convergence';
  demoDropdownTrigger.style.fontSize='11px';
  demoDropdownTrigger.style.backgroundColor='#0e0e11';
  demoDropdownTrigger.style.border='1px solid #1a1a1f';
  demoDropdownTrigger.style.outline='none';
  demoDropdownTrigger.style.marginRight='5px';
  demoDropdownTrigger.style.minWidth='90px';

  const demoTriggerText=document.createElement('span');
  demoTriggerText.textContent=LINKS[0].name;

  const demoTriggerIcon=document.createElement('span');
  demoTriggerIcon.className='transition-all duration-200';
  demoTriggerIcon.style.color='#52525b';
  demoTriggerIcon.style.fontSize='9px';
  demoTriggerIcon.style.marginLeft='8px';
  demoTriggerIcon.textContent='▼';

  demoDropdownTrigger.appendChild(demoTriggerText);
  demoDropdownTrigger.appendChild(demoTriggerIcon);

  // Dropdown list container for demos
  const demoDropdownList=document.createElement('div');
  demoDropdownList.className='absolute transition-all duration-150 scale-95 opacity-0 pointer-events-none';
  demoDropdownList.style.top='100%';
  demoDropdownList.style.left='50%';
  demoDropdownList.style.transform='translateX(-50%) scale(0.95)';
  demoDropdownList.style.marginTop='8px';
  demoDropdownList.style.width='210px';
  demoDropdownList.style.backgroundColor='#0a0a0d';
  demoDropdownList.style.border='1px solid #1d1d2b';
  demoDropdownList.style.borderRadius='2px';
  demoDropdownList.style.padding='4px 0';
  demoDropdownList.style.boxShadow='0 15px 35px rgba(0,0,0,0.8)';

  // Build items manually inside dropdown list
  const demoItemButtons: HTMLButtonElement[]=[];
  LINKS.forEach(link => {
    const itemBtn=document.createElement('button');
    itemBtn.className='dropdown-item';
    itemBtn.textContent=link.name;

    itemBtn.addEventListener('click', () => {
      loadIframeSource(link.name, link.url);
      toggleDemoDropdown(false);
    });

    demoDropdownList.appendChild(itemBtn);
    demoItemButtons.push(itemBtn);
  });

  demoDropdownWrapper.appendChild(demoDropdownTrigger);
  demoDropdownWrapper.appendChild(demoDropdownList);
  dropdownsContainer.appendChild(demoDropdownWrapper);
  // More
  const sourceDropdownWrapper3=document.createElement('div');
  sourceDropdownWrapper3.className='relative';
  const moreDropdownTrigger=document.createElement('button');
  moreDropdownTrigger.id='more-dropdown-trigger';
  moreDropdownTrigger.className='flex items-center justify-between px-3 py-2 transition-all duration-200 text-white rounded-sm cursor-pointer font-convergence';
  moreDropdownTrigger.style.fontSize='11px';
  moreDropdownTrigger.style.backgroundColor='#0e0e11';
  moreDropdownTrigger.style.border='1px solid #1a1a1f';
  moreDropdownTrigger.style.outline='none';
  moreDropdownTrigger.style.minWidth='90px';
  const moreTriggerText=document.createElement('span');
  moreTriggerText.textContent='CREDITS';

  const moreTriggerIcon=document.createElement('span');
  moreTriggerIcon.className='transition-all duration-200';
  moreTriggerIcon.style.color='#52525b';
  moreTriggerIcon.style.fontSize='9px';
  moreTriggerIcon.style.marginLeft='8px';
  moreTriggerIcon.textContent='▼';

  moreDropdownTrigger.appendChild(moreTriggerText);
  moreDropdownTrigger.appendChild(moreTriggerIcon);

  // Dropdown list container for sources
  const moreDropdownList=document.createElement('div');
  moreDropdownList.className='absolute transition-all duration-150 scale-95 opacity-0 pointer-events-none';
  moreDropdownList.style.top='100%';
  moreDropdownList.style.left='50%';
  moreDropdownList.style.transform='translateX(-50%) scale(0.95)';
  moreDropdownList.style.marginTop='8px';
  moreDropdownList.style.width='210px';
  moreDropdownList.style.backgroundColor='#0a0a0d';
  moreDropdownList.style.border='1px solid #1d1d2b';
  moreDropdownList.style.borderRadius='2px';
  moreDropdownList.style.padding='4px 0';
  moreDropdownList.style.boxShadow='0 15px 35px rgba(0,0,0,0.8)';

  const MORE_LINKS=[
    { name: 'About Matrix-Engine-WebGPU', url: '/the-beast.html', newtab: false },
    { name: 'itch.io ↗️', url: 'https://goldenspiral.itch.io', newtab: true },
    { name: 'Codepen ↗️', url: 'https://codepen.io/zlatnaspirala/pen/OJZXMWR', newtab: true },
    { name: 'Source code', url: '/source.html', newtab: false },
    { name: 'Credits', url: '/credits.html', newtab: false },
  ];

  MORE_LINKS.forEach(link => {
    const itemBtn=document.createElement('button');
    itemBtn.className='dropdown-item';
    itemBtn.textContent=link.name;

    itemBtn.addEventListener('click', () => {
      if(link.newtab===true) {
        window.open(link.url, '_blank');
      } else {
        loadIframeSource(link.name, link.url);
        toggleDemoDropdown(false);
        toggleMoreDropdown(false);
      }
      toggleMoreDropdown(false);
    });

    moreDropdownList.appendChild(itemBtn);
  });

  sourceDropdownWrapper3.appendChild(moreDropdownTrigger);
  sourceDropdownWrapper3.appendChild(moreDropdownList);
  dropdownsContainer.appendChild(sourceDropdownWrapper3);
  // --- end 

  // Theme control/Colors & Motivation (Right side)
  const rightContainer=document.createElement('div');
  rightContainer.className='flex items-center space-x-4 shrink-0';

  const sloganNode=document.createElement('span');
  sloganNode.className='text-xs font-mono text-[#3f3f46] uppercase tracking-wider italic hidden-mobile';
  sloganNode.textContent='"Everything is possible"';

  const hueContainer=document.createElement('div');
  hueContainer.className='flex space-x-1 p-1 rounded-sm';
  hueContainer.style.backgroundColor='#0a0a0c';
  hueContainer.style.border='1px solid #141416';

  rightContainer.appendChild(sloganNode);
  rightContainer.appendChild(hueContainer);

  header.appendChild(brandContainer);
  header.appendChild(dropdownsContainer);
  header.appendChild(rightContainer);


  // --- MAIN VIEWPORT & IFRAME CONTROLLER ---
  const mainViewport=document.createElement('main');
  mainViewport.className='flex-grow w-full h-full flex flex-col bg-[#050505] overflow-hidden relative';

  // Secure mounting micro loader spinner (leaves clean solid black stage during transitioning)
  const loaderOverlay=document.createElement('div');
  loaderOverlay.id='iframe-loader';
  loaderOverlay.className='absolute inset-0 z-40 transition-opacity duration-300 pointer-events-none opacity-0';
  loaderOverlay.style.backgroundColor='#050505';

  // Pure decoupled viewport page iframe
  const viewportIframe=document.createElement('iframe');
  viewportIframe.id='viewport-iframe';
  viewportIframe.className='w-full h-full flex-grow m-0 p-0 block bg-[#050505] z-10';
  viewportIframe.style.border='none';
  viewportIframe.style.outline='none';
  viewportIframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
  viewportIframe.setAttribute('allowfullscreen', 'true');
  mainViewport.appendChild(loaderOverlay);
  mainViewport.appendChild(viewportIframe);
  mainViewport.addEventListener('click', (e) => {
    toggleDemoDropdown(false);
    toggleMoreDropdown(false);
  });

  // Mount clean, elegant DOM to root
  root.appendChild(header);
  root.appendChild(mainViewport);


  let isDemoDropdownOpen=false;
  let isSourceDropdownOpen=false;
  let isMoreDropdownOpen=false;

  function toggleDemoDropdown(open?: boolean) {
    const targetState=typeof open==='boolean'? open:!isDemoDropdownOpen;
    isDemoDropdownOpen=targetState;

    if(isDemoDropdownOpen) {
      if(isMoreDropdownOpen) toggleMoreDropdown(false);
      demoDropdownList.classList.remove('opacity-0', 'pointer-events-none');
      demoDropdownList.classList.add('opacity-100', 'pointer-events-auto');
      demoDropdownList.style.transform='translateX(-50%) scale(1)';
      demoTriggerIcon.style.color=currentThemeColor;
      demoTriggerIcon.style.transform='rotate(180deg)';
      demoDropdownTrigger.style.borderColor=currentThemeColor;
    } else {
      demoDropdownList.classList.remove('opacity-100', 'pointer-events-auto');
      demoDropdownList.classList.add('opacity-0', 'pointer-events-none');
      demoDropdownList.style.transform='translateX(-50%) scale(0.95)';
      demoTriggerIcon.style.color='#52525b';
      demoTriggerIcon.style.transform='rotate(0deg)';
      demoDropdownTrigger.style.borderColor='#1a1a1f';
    }
  }

  function toggleMoreDropdown(open?: boolean) {
    const targetState=typeof open==='boolean'? open:!isMoreDropdownOpen;
    isMoreDropdownOpen=targetState;

    if(isMoreDropdownOpen) {
      if(isDemoDropdownOpen) toggleDemoDropdown(false);
      moreDropdownList.classList.remove('opacity-0', 'pointer-events-none');
      moreDropdownList.classList.add('opacity-100', 'pointer-events-auto');
      moreDropdownList.style.transform='translateX(-50%) scale(1)';
      moreTriggerIcon.style.color=currentThemeColor;
      moreTriggerIcon.style.transform='rotate(180deg)';
      moreDropdownTrigger.style.borderColor=currentThemeColor;
    } else {
      moreDropdownList.classList.remove('opacity-100', 'pointer-events-auto');
      moreDropdownList.classList.add('opacity-0', 'pointer-events-none');
      moreDropdownList.style.transform='translateX(-50%) scale(0.95)';
      moreTriggerIcon.style.color='#52525b';
      moreTriggerIcon.style.transform='rotate(0deg)';
      moreDropdownTrigger.style.borderColor='#1a1a1f';
    }
  }
  // Toggle active menu dropdown triggers
  demoDropdownTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDemoDropdown();
  });

  moreDropdownTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMoreDropdown();
  });

  document.addEventListener('click', (e) => {
    e.stopPropagation();
    if(isDemoDropdownOpen) toggleDemoDropdown(false);
    if(isMoreDropdownOpen) toggleMoreDropdown(false);
  })

  // Highlight selected dropdown option
  function highlightSelectedOption() {
    demoTriggerText.textContent=activeLinkId;

    LINKS.forEach((link, idx) => {
      const btn=demoItemButtons[idx];
      if(!btn) return;

      const isSelected=link.name===activeLinkId;
      if(isSelected) {
        btn.style.color=currentThemeColor;
        btn.style.borderLeftColor=currentThemeColor;
        btn.style.backgroundColor='#121216';
        btn.style.fontWeight='bold';
      } else {
        btn.style.color='';
        btn.style.borderLeftColor='transparent';
        btn.style.backgroundColor='transparent';
        btn.style.fontWeight='normal';
      }
    });
  }

  // Pure aesthetic overlay modals for Terms / Cookie Policies
  function showTermsModal(type: 'terms'|'cookies') {
    const modalOverlay=document.createElement('div');
    modalOverlay.className='fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 opacity-0';
    modalOverlay.style.backgroundColor='rgba(4, 4, 6, 0.9)';
    modalOverlay.style.backdropFilter='blur(8px)';

    const modalContainer=document.createElement('div');
    modalContainer.className='w-full max-w-lg bg-[#08080d] p-6 rounded-sm flex flex-col relative transition-all duration-300 transform scale-95 opacity-0';
    modalContainer.style.border=`1px solid ${currentThemeColor}`;
    modalContainer.style.maxHeight='80vh';
    modalContainer.style.boxShadow=`0 10px 40px rgba(${hexToRgbValues(currentThemeColor)}, 0.15)`;

    const modalHeader=document.createElement('div');
    modalHeader.className='flex items-center justify-between border-b pb-3 mb-4';
    modalHeader.style.borderColor='#1a1a24';

    const modalTitle=document.createElement('h3');
    modalTitle.className='text-white text-sm font-bold tracking-widest uppercase font-tint';
    modalTitle.textContent=type==='terms'? 'TERMS OF USE':'COOKIE POLICY';

    const closeIconBtn=document.createElement('button');
    closeIconBtn.className='text-[#ffffff] hover:text-white font-mono text-xs cursor-pointer';
    closeIconBtn.textContent='[ CLOSE ]';

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeIconBtn);

    const modalContent=document.createElement('div');
    modalContent.className='overflow-y-auto flex-grow pr-2 text-xs font-convergence leading-relaxed text-[#a1a1aa] space-y-4';
    modalContent.style.fontSize='11px';

    if(type==='terms') {
      const p1=document.createElement('p');
      p1.innerHTML=`<strong style="color: #fff">1. PORTFOLIO INTENT</strong><br>This environment serves as Nikola Lukic's graphics programming showcase. It runs local high-perf, real-time shaders and custom WebGL simulation structures.`;

      const p2=document.createElement('p');
      p2.innerHTML=`<strong style="color: #fff">2. INTELLECTUAL PROPERTY</strong><br>The custom simulation matrices, shaders, configurations, and core WebGL engine codebase are conceptualized by Nikola Lukic. Usage of source directories is permitted under open-source licenses as defined in respective repositories.`;

      const p3=document.createElement('p');
      p3.innerHTML=`<strong style="color: #fff">3. COMPATIBILITY & LIFETIME</strong><br>No runtime state persistence is gathered beyond client local choices. We provide this portfolio "as is" without warranty or system availability assurances.`;

      modalContent.appendChild(p1);
      modalContent.appendChild(p2);
      modalContent.appendChild(p3);
    } else {
      const p1=document.createElement('p');
      p1.innerHTML=`<strong style="color: #fff">1. LOCAL EXPERIENCE PROFILE</strong><br>We do not use cookie-based identifiers to monitor or advertise. We utilize browser <code>localStorage</code> purely to remember the visual accent colors you select across portfolio visits.`;

      const p2=document.createElement('p');
      p2.innerHTML=`<strong style="color: #fff">2. FUNCTIONAL ONLY</strong><br>These storage objects remain entirely within your end-client sandbox. By choosing a custom hue index (such as cyan, pink, or green), safety and state parameters are stored to ease next load cycles.`;

      modalContent.appendChild(p1);
      modalContent.appendChild(p2);
    }

    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(modalContent);
    modalOverlay.appendChild(modalContainer);
    document.body.appendChild(modalOverlay);

    // Fade in
    setTimeout(() => {
      modalOverlay.classList.remove('opacity-0');
      modalOverlay.classList.add('opacity-100');
      modalContainer.classList.remove('opacity-0', 'scale-95');
      modalContainer.classList.add('opacity-100', 'scale-100');
    }, 50);

    const closeModal=() => {
      modalOverlay.classList.remove('opacity-100');
      modalOverlay.classList.add('opacity-0');
      modalContainer.classList.remove('opacity-100', 'scale-100');
      modalContainer.classList.add('opacity-0', 'scale-95');
      setTimeout(() => {
        modalOverlay.remove();
      }, 300);
    };

    closeIconBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if(e.target===modalOverlay) closeModal();
    });
  }


  // Build the minimalist Cookies and Terms Consent Banner
  function renderCookieConsentBanner() {
    const cookiesAccepted = localStorage.getItem('nikola_portfolio_cookies_accepted');
    if (cookiesAccepted) return;

    const cookieBanner = document.createElement('div');
    cookieBanner.id = 'cookie-consent-banner';
    cookieBanner.className = 'absolute transition-all duration-300 transform translate-y-20 opacity-0 z-50 flex flex-col sm:flex-row items-center justify-between p-4 px-6 gap-4';
    cookieBanner.style.position = 'absolute';
    cookieBanner.style.bottom = '16px';
    cookieBanner.style.right = '16px';
    cookieBanner.style.maxWidth = '420px';
    cookieBanner.style.width = 'calc(100% - 32px)';
    cookieBanner.style.backgroundColor = '#08080c';
    cookieBanner.style.border = `1px solid ${currentThemeColor}`;
    cookieBanner.style.borderRadius = '2px';
    cookieBanner.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.9)';
    
    // Left section text & links
    const textAndLinksGroup = document.createElement('div');
    textAndLinksGroup.className = 'flex flex-col gap-1.5 pr-2';
    
    const bannerText = document.createElement('p');
    bannerText.className = 'font-convergence leading-normal text-[#e0e0e0]';
    bannerText.style.fontSize = '9px';
    bannerText.textContent = 'This graphics portfolio uses cookies to preserve visual theme profiles and experience levels. By continuing, you agree.';

    const linksRow = document.createElement('div');
    linksRow.className = 'flex items-center gap-3';
    
    const termsLink = document.createElement('button');
    termsLink.className = 'font-mono text-[#71717a] hover:text-white transition-all cursor-pointer';
    termsLink.style.fontSize = '8px';
    termsLink.style.textDecoration = 'underline';
    termsLink.style.border = 'none';
    termsLink.style.background = 'transparent';
    termsLink.textContent = 'TERMS OF USE';
    termsLink.addEventListener('click', (e) => {
      e.stopPropagation();
      showTermsModal('terms');
    });

    const cookieLink = document.createElement('button');
    cookieLink.className = 'font-mono text-[#71717a] hover:text-white transition-all cursor-pointer';
    cookieLink.style.fontSize = '8px';
    cookieLink.style.textDecoration = 'underline';
    cookieLink.style.border = 'none';
    cookieLink.style.background = 'transparent';
    cookieLink.textContent = 'COOKIE POLICY';
    cookieLink.addEventListener('click', (e) => {
      e.stopPropagation();
      showTermsModal('cookies');
    });

    linksRow.appendChild(termsLink);
    linksRow.appendChild(cookieLink);

    textAndLinksGroup.appendChild(bannerText);
    textAndLinksGroup.appendChild(linksRow);

    // Accept button
    const acceptBtn = document.createElement('button');
    acceptBtn.className = 'px-3 py-1.5 text-xs text-black font-bold uppercase tracking-wider rounded-sm transition-all duration-200 hover:scale-105 select-none font-convergence shrink-0';
    acceptBtn.style.backgroundColor = currentThemeColor;
    acceptBtn.style.border = 'none';
    acceptBtn.style.cursor = 'pointer';
    acceptBtn.textContent = 'ACCEPT';
    
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('nikola_portfolio_cookies_accepted', 'true');
      cookieBanner.classList.add('opacity-0', 'translate-y-4');
      setTimeout(() => {
        cookieBanner.remove();
      }, 300);
    });

    cookieBanner.appendChild(textAndLinksGroup);
    cookieBanner.appendChild(acceptBtn);
    document.body.appendChild(cookieBanner);

    // Trigger fade-in
    setTimeout(() => {
      cookieBanner.classList.remove('translate-y-20', 'opacity-0');
      cookieBanner.classList.add('translate-y-0', 'opacity-100');
    }, 1000);
  }

  // Handle color transitions
  const themeControls: HTMLButtonElement[]=[];

  function applyColorTheme(color: string) {
    currentThemeColor=color;
    document.documentElement.style.setProperty('--neon-color', color);
    document.documentElement.style.setProperty('--neon-glow', `rgba(${hexToRgbValues(color)}, 0.35)`);

    neonCircle.style.backgroundColor=color;
    neonCircle.style.boxShadow=`0 0 10px ${color}`;

    if(isDemoDropdownOpen) {
      demoTriggerIcon.style.color=color;
      demoDropdownTrigger.style.borderColor=color;
    }
    const banner=document.getElementById('cookie-consent-banner');
    if(banner) {
      banner.style.borderColor=color;
      const accept=banner.querySelector('button');
      if(accept) {
        accept.style.backgroundColor=color;
      }
    }
    highlightSelectedOption();
    if(viewportIframe.contentWindow) {
      viewportIframe.contentWindow.postMessage({
        type: 'THEME_COLOR_UPDATE',
        color: color
      }, '*');
    }

    // Border highlights
    themeControls.forEach(btn => {
      if(btn.dataset.color===color) {
        btn.style.borderColor='#ffffff';
        btn.style.boxShadow=`0 0 4px ${color}`;
      } else {
        btn.style.borderColor='transparent';
        btn.style.boxShadow='none';
      }
    });
  }

  // // Generate theme color swappers
  // THEME_COLORS.forEach(tc => {
  //   const btn=document.createElement('button');
  //   btn.dataset.color=tc.color;
  //   btn.className='transition-all duration-150 cursor-pointer';
  //   btn.style.width='12px';
  //   btn.style.height='12px';
  //   btn.style.borderRadius='2px';
  //   btn.style.backgroundColor=tc.color;
  //   btn.style.border='1px solid transparent';
  //   btn.style.outline='none';
  //   btn.title=`${tc.name.toUpperCase()} ACCENT`;

  //   btn.addEventListener('click', () => {
  //     applyColorTheme(tc.color);
  //   });

  //   hueContainer.appendChild(btn);
  //   themeControls.push(btn);
  // });

  // Load selected stream directly into decoupled frame viewport
  function loadIframeSource(name: string, url: string) {
    activeLinkId=name;

    // Open load indicator overlay
    loaderOverlay.classList.remove('opacity-0');
    loaderOverlay.classList.add('opacity-100');

    // Dynamic query parameter injection for local welcome station
    let target=url;
    if(url==='/welcome.html') {
      target=`/welcome.html?color=${encodeURIComponent(currentThemeColor)}`;
    }

    viewportIframe.src=target;
    highlightSelectedOption();
  }

  // Complete iframe response handler
  viewportIframe.addEventListener('load', () => {
    loaderOverlay.classList.remove('opacity-100');
    loaderOverlay.classList.add('opacity-0');

    // Make sure we post secondary message to frame the precise moment it is fully ready
    if(viewportIframe.contentWindow) {
      viewportIframe.contentWindow.postMessage({
        type: 'THEME_COLOR_UPDATE',
        color: currentThemeColor
      }, '*');
    }
  });

  // Start Sequence
  applyColorTheme('#00f3ff');
  highlightSelectedOption();
  renderCookieConsentBanner();

  // Primary boot
  if(LINKS.length>0) {
    loadIframeSource(LINKS[0].name, LINKS[0].url);
  }
}

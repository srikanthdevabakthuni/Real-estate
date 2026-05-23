// ===== Property Data =====
const properties = [
  {
    id: 1,
    name: "Luxury Villa in Sunset Hills",
    address: "4821 Sunset Blvd, Beverly Hills, CA 90210",
    price: "$2,450,000",
    priceRaw: 2450000,
    type: "buy",
    category: "villa",
    beds: 4, baths: 3, sqft: 3200,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    agent: { name: "Sarah J.", img: "https://i.pravatar.cc/60?img=47" }
  },
  {
    id: 2,
    name: "Modern Downtown Apartment",
    address: "120 Urban St, San Francisco, CA 94105",
    price: "$3,200/mo",
    priceRaw: 3200,
    type: "rent",
    category: "apartment",
    beds: 2, baths: 2, sqft: 1100,
    badge: "For Rent",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    agent: { name: "Mike D.", img: "https://i.pravatar.cc/60?img=12" }
  },
  {
    id: 3,
    name: "Elegant Family Home",
    address: "37 Maple Ave, Austin, TX 78701",
    price: "$895,000",
    priceRaw: 895000,
    type: "buy",
    category: "house",
    beds: 5, baths: 4, sqft: 4100,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    agent: { name: "Lisa R.", img: "https://i.pravatar.cc/60?img=32" }
  },
  {
    id: 4,
    name: "Cozy Studio Near Park",
    address: "9 Green Lane, Portland, OR 97201",
    price: "$1,500/mo",
    priceRaw: 1500,
    type: "rent",
    category: "apartment",
    beds: 1, baths: 1, sqft: 620,
    badge: "For Rent",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    agent: { name: "Tom H.", img: "https://i.pravatar.cc/60?img=60" }
  },
  {
    id: 5,
    name: "Seaside Beachfront Condo",
    address: "1 Ocean Dr, Miami, FL 33139",
    price: "$1,180,000",
    priceRaw: 1180000,
    type: "buy",
    category: "condo",
    beds: 3, baths: 2, sqft: 1900,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
    agent: { name: "Ana K.", img: "https://i.pravatar.cc/60?img=5" }
  },
  {
    id: 6,
    name: "Spacious Country Villa",
    address: "88 Hillside Rd, Nashville, TN 37201",
    price: "$540,000",
    priceRaw: 540000,
    type: "buy",
    category: "villa",
    beds: 4, baths: 3, sqft: 3600,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    agent: { name: "James L.", img: "https://i.pravatar.cc/60?img=22" }
  },
  {
    id: 7,
    name: "Penthouse Suite Downtown",
    address: "200 High Rise Blvd, Chicago, IL 60601",
    price: "$6,800/mo",
    priceRaw: 6800,
    type: "rent",
    category: "condo",
    beds: 3, baths: 3, sqft: 2400,
    badge: "For Rent",
    img: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=600&q=80",
    agent: { name: "Nina P.", img: "https://i.pravatar.cc/60?img=44" }
  },
  {
    id: 8,
    name: "Charming Suburban House",
    address: "55 Birchwood Ct, Denver, CO 80201",
    price: "$720,000",
    priceRaw: 720000,
    type: "buy",
    category: "house",
    beds: 3, baths: 2, sqft: 2100,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    agent: { name: "Chris M.", img: "https://i.pravatar.cc/60?img=38" }
  },
  {
    id: 9,
    name: "Luxury Lake View Condo",
    address: "77 Lakeshore Dr, Seattle, WA 98101",
    price: "$1,350,000",
    priceRaw: 1350000,
    type: "buy",
    category: "condo",
    beds: 2, baths: 2, sqft: 1500,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    agent: { name: "Karen B.", img: "https://i.pravatar.cc/60?img=9" }
  }
];

// ===== Render Property Card =====
function createPropertyCard(p) {
  return `
    <div class="col-lg-4 col-md-6 mb-4 fade-up" data-type="${p.type}" data-category="${p.category}">
      <div class="property-card">
        <div class="property-card-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          <span class="property-badge ${p.type === 'rent' ? 'for-rent' : ''}">${p.badge}</span>
          <button class="property-fav" onclick="toggleFav(this)" title="Favorite">
            <i class="far fa-heart"></i>
          </button>
        </div>
        <div class="property-card-body">
          <div class="property-price">${p.price} <span>${p.type === 'rent' ? '/month' : ''}</span></div>
          <div class="property-name">${p.name}</div>
          <div class="property-address"><i class="fas fa-map-marker-alt"></i>${p.address}</div>
          <div class="property-divider"></div>
          <div class="property-meta">
            <span><i class="fas fa-bed"></i>${p.beds} Beds</span>
            <span><i class="fas fa-bath"></i>${p.baths} Baths</span>
            <span><i class="fas fa-ruler-combined"></i>${p.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
        <div class="property-card-footer">
          <div class="agent-mini">
            <img src="${p.agent.img}" alt="${p.agent.name}">
            <span>By ${p.agent.name}</span>
          </div>
          <button class="btn-details">Details →</button>
        </div>
      </div>
    </div>
  `;
}

// ===== Toggle Favorites =====
function toggleFav(btn) {
  btn.classList.toggle('active');
  const icon = btn.querySelector('i');
  icon.className = btn.classList.contains('active') ? 'fas fa-heart' : 'far fa-heart';
}

// ===== Counter Animation =====
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    let count = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count.toLocaleString();
      if (count >= target) clearInterval(timer);
    }, 25);
  });
}

// ===== Intersection Observer for Counters =====
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

// ===== Scroll Top Button =====
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  if (btn) btn.classList.toggle('show', window.scrollY > 400);
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== Filter Logic (properties.html) =====
function initFilters() {
  const container = document.getElementById('propertyGrid');
  if (!container) return;

  // Render all properties
  container.innerHTML = properties.map(createPropertyCard).join('');

  const filterForm = document.getElementById('filterForm');
  if (!filterForm) return;

  filterForm.addEventListener('change', applyFilters);
  filterForm.addEventListener('submit', e => { e.preventDefault(); applyFilters(); });

  function applyFilters() {
    const type = document.getElementById('filterType')?.value || '';
    const category = document.getElementById('filterCategory')?.value || '';
    const minBeds = parseInt(document.getElementById('filterBeds')?.value) || 0;

    const cards = container.querySelectorAll('[data-type]');
    let visible = 0;
    cards.forEach(card => {
      const cardType = card.getAttribute('data-type');
      const cardCat = card.getAttribute('data-category');
      const cardBeds = parseInt(card.querySelector('.property-meta span')?.textContent) || 0;

      const matchType = !type || cardType === type;
      const matchCat = !category || cardCat === category;
      const matchBeds = cardBeds >= minBeds;

      if (matchType && matchCat && matchBeds) {
        card.style.display = '';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    const countEl = document.getElementById('resultCount');
    if (countEl) countEl.textContent = visible;
  }
}

// ===== View Toggle =====
function initViewToggle() {
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const grid = document.getElementById('propertyGrid');
      if (!grid) return;
      if (this.dataset.view === 'list') {
        grid.classList.add('list-view');
      } else {
        grid.classList.remove('list-view');
      }
    });
  });
}

// ===== Homepage: Render Featured Cards =====
function initHomepageCards() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = properties.slice(0, 6);
  grid.innerHTML = featured.map(createPropertyCard).join('');
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  // Stats observer
  const statsSection = document.querySelector('.stats-banner');
  if (statsSection) statsObserver.observe(statsSection);

  // Page-specific inits
  initHomepageCards();
  initFilters();
  initViewToggle();

  // Navbar active link
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });
});

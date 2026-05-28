// ===== Property Data — Hyderabad, India =====
const properties = [
  {
    id: 1,
    name: "Luxury Villa in Jubilee Hills",
    address: "Plot 42, Road No. 12, Jubilee Hills, Hyderabad – 500033",
    price: "₹4,20,00,000",
    priceRaw: 42000000,
    type: "buy",
    category: "villa",
    beds: 4, baths: 4, sqft: 4200,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6a86e549ede3?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
    ],
    agent: { name: "Ramesh Reddy", title: "Senior Property Advisor", phone: "+91 98490 11234", email: "ramesh@propestate.in", img: "https://i.pravatar.cc/120?img=57" },
    year: 2020, parking: 2,
    description: "An exquisite luxury villa nestled in the heart of Jubilee Hills — Hyderabad's most prestigious residential address. Features a grand double-height living room, Italian marble flooring, modular kitchen, private terrace garden, and a sparkling rooftop pool. Minutes from top hospitals, malls, and schools.",
    amenities: ["Swimming Pool", "Garage / Parking", "Garden / Yard", "Air Conditioning", "Smart Home", "Home Theater", "Gym / Fitness", "24x7 Security"]
  },
  {
    id: 2,
    name: "Modern 3BHK Flat in HITEC City",
    address: "Prestige Cyber Heights, HITEC City, Hyderabad – 500081",
    price: "₹55,000/mo",
    priceRaw: 55000,
    type: "rent",
    category: "apartment",
    beds: 3, baths: 2, sqft: 1650,
    badge: "For Rent",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800&q=80"
    ],
    agent: { name: "Priya Sharma", title: "Rental Specialist", phone: "+91 99890 22345", email: "priya@propestate.in", img: "https://i.pravatar.cc/120?img=47" },
    year: 2022, parking: 1,
    description: "Fully furnished 3BHK apartment in a premium gated community steps away from HITEC City IT corridor. Features floor-to-ceiling windows with city views, modular kitchen, branded fittings, and world-class amenities including a clubhouse and jogging track. Ideal for IT professionals.",
    amenities: ["Gym / Fitness", "Swimming Pool", "Air Conditioning", "Clubhouse", "Pet Friendly", "24x7 Security", "Power Backup", "Children's Play Area"]
  },
  {
    id: 3,
    name: "Spacious Family Home in Banjara Hills",
    address: "Road No. 5, Banjara Hills, Hyderabad – 500034",
    price: "₹2,85,00,000",
    priceRaw: 28500000,
    type: "buy",
    category: "house",
    beds: 5, baths: 4, sqft: 4800,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80"
    ],
    agent: { name: "Suresh Rao", title: "Residential Sales Expert", phone: "+91 97000 33456", email: "suresh@propestate.in", img: "https://i.pravatar.cc/120?img=52" },
    year: 2018, parking: 3,
    description: "An elegant independent house in the coveted Banjara Hills locality, known for its wide tree-lined roads and upscale neighbourhood. This sprawling home features a large landscaped garden, separate servant quarters, spacious bedrooms with attached baths, and a dedicated puja room.",
    amenities: ["Garden / Yard", "Garage / Parking", "Air Conditioning", "Puja Room", "Servant Quarters", "Home Office", "Pet Friendly", "Rainwater Harvesting"]
  },
  {
    id: 4,
    name: "Cozy 1BHK Studio in Gachibowli",
    address: "Aparna HillPark, Gachibowli, Hyderabad – 500032",
    price: "₹18,000/mo",
    priceRaw: 18000,
    type: "rent",
    category: "apartment",
    beds: 1, baths: 1, sqft: 680,
    badge: "For Rent",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=800&q=80"
    ],
    agent: { name: "Anjali Menon", title: "Rental Agent", phone: "+91 96500 44567", email: "anjali@propestate.in", img: "https://i.pravatar.cc/120?img=44" },
    year: 2021, parking: 0,
    description: "Compact and well-designed 1BHK flat in a gated society close to the Financial District and DLF Cyber City. Perfect for young working professionals. Comes with modular kitchen, built-in wardrobes, and easy access to metro, restaurants, and weekend hotspots.",
    amenities: ["Air Conditioning", "Power Backup", "24x7 Security", "Gym / Fitness", "Laundry In-Building", "Pet Friendly"]
  },
  {
    id: 5,
    name: "Premium Penthouse in Kokapet",
    address: "My Home Avatar, Kokapet, Hyderabad – 500075",
    price: "₹3,95,00,000",
    priceRaw: 39500000,
    type: "buy",
    category: "condo",
    beds: 4, baths: 4, sqft: 3800,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=800&q=80"
    ],
    agent: { name: "Vikram Nair", title: "Luxury Homes Specialist", phone: "+91 94400 55678", email: "vikram@propestate.in", img: "https://i.pravatar.cc/120?img=33" },
    year: 2023, parking: 2,
    description: "A spectacular sky penthouse offering panoramic views of Hyderabad's Financial District skyline and the Outer Ring Road. Features a private terrace with jacuzzi, double-height living spaces, imported marble throughout, designer kitchen, and access to a 5-star amenity tower including pool, spa, and sky lounge.",
    amenities: ["Private Terrace", "Swimming Pool", "Garage / Parking", "Air Conditioning", "Smart Home", "Concierge", "Gym / Fitness", "Rooftop Terrace"]
  },
  {
    id: 6,
    name: "Classic Villa in Madhapur",
    address: "Aditya Enclave, Madhapur, Hyderabad – 500081",
    price: "₹1,75,00,000",
    priceRaw: 17500000,
    type: "buy",
    category: "villa",
    beds: 3, baths: 3, sqft: 2800,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800&q=80"
    ],
    agent: { name: "Kavitha Raju", title: "Property Consultant", phone: "+91 93300 66789", email: "kavitha@propestate.in", img: "https://i.pravatar.cc/120?img=29" },
    year: 2017, parking: 2,
    description: "A beautifully crafted independent villa in Madhapur — the IT and startup hub of Hyderabad. Features a lush private courtyard, teak wood doors, vitrified tile flooring, open terrace, and proximity to Inorbit Mall, Cyber Towers, and top international schools. Ready to move in.",
    amenities: ["Garden / Yard", "Garage / Parking", "Air Conditioning", "Puja Room", "Terrace", "Power Backup", "24x7 Security"]
  },
  {
    id: 7,
    name: "High-Rise 3BHK in Kondapur",
    address: "Prestige Ivy League, Kondapur, Hyderabad – 500084",
    price: "₹45,000/mo",
    priceRaw: 45000,
    type: "rent",
    category: "apartment",
    beds: 3, baths: 3, sqft: 1900,
    badge: "For Rent",
    img: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6a86e549ede3?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ],
    agent: { name: "Arun Kumar", title: "Rental & Leasing Expert", phone: "+91 90000 77890", email: "arun@propestate.in", img: "https://i.pravatar.cc/120?img=60" },
    year: 2021, parking: 2,
    description: "Premium semi-furnished 3BHK on the 18th floor of a luxury high-rise in Kondapur with sweeping views of the city. Features modular kitchen, branded sanitary fittings, large balconies, wooden flooring in bedrooms, and access to a world-class clubhouse, infinity pool, and co-working spaces.",
    amenities: ["Swimming Pool", "Gym / Fitness", "Concierge", "Air Conditioning", "Clubhouse", "Co-working Space", "Power Backup", "Children's Play Area"]
  },
  {
    id: 8,
    name: "Affordable Home in Miyapur",
    address: "Aparna Sarovar Grande, Miyapur, Hyderabad – 500049",
    price: "₹85,00,000",
    priceRaw: 8500000,
    type: "buy",
    category: "house",
    beds: 3, baths: 2, sqft: 1500,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
      "https://images.unsplash.com/photo-1556909172-8c2f041fca1e?w=800&q=80"
    ],
    agent: { name: "Deepika Singh", title: "Budget Homes Advisor", phone: "+91 88800 88901", email: "deepika@propestate.in", img: "https://i.pravatar.cc/120?img=41" },
    year: 2019, parking: 1,
    description: "Well-priced independent floor house in the rapidly developing Miyapur area, with excellent metro connectivity. Features a practical layout with spacious rooms, utility balcony, dedicated parking, and is surrounded by schools, hospitals, and supermarkets. Great for first-time homebuyers.",
    amenities: ["Garage / Parking", "Air Conditioning", "Power Backup", "24x7 Security", "Pet Friendly", "Rainwater Harvesting"]
  },
  {
    id: 9,
    name: "Luxury Apartment in Nanakramguda",
    address: "My Home Jewel, Nanakramguda, Hyderabad – 500032",
    price: "₹2,20,00,000",
    priceRaw: 22000000,
    type: "buy",
    category: "condo",
    beds: 3, baths: 3, sqft: 2200,
    badge: "For Sale",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1561501878-aabd62634533?w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6a86e549ede3?w=800&q=80"
    ],
    agent: { name: "Rajesh Naidu", title: "Financial District Specialist", phone: "+91 87700 99012", email: "rajesh@propestate.in", img: "https://i.pravatar.cc/120?img=15" },
    year: 2022, parking: 2,
    description: "Sophisticated 3BHK apartment in the Financial District with stunning views of the ORR and Hyderabad skyline. Designed with premium European fixtures, a large wraparound balcony, gourmet kitchen, and fully loaded amenity podium. Walking distance to Goldman Sachs, Amazon, and Wipro offices.",
    amenities: ["Swimming Pool", "Gym / Fitness", "Garage / Parking", "Air Conditioning", "Smart Home", "Concierge", "Jogging Track", "Amphitheatre"]
  }
];

// ===== Render Property Card =====
function createPropertyCard(p) {
  return `
    <div class="col-lg-4 col-md-6 mb-4 fade-up" data-type="${p.type}" data-category="${p.category}" data-price="${p.priceRaw}" data-beds="${p.beds}">
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
          <a href="property-detail.html?id=${p.id}" class="btn-details">Details →</a>
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

  container.innerHTML = properties.map(createPropertyCard).join('');

  const filterForm = document.getElementById('filterForm');
  if (!filterForm) return;

  filterForm.addEventListener('change', applyFilters);
  filterForm.addEventListener('submit', e => { e.preventDefault(); applyFilters(); });

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.addEventListener('change', applyFilters);

  function applyFilters() {
    const type = document.getElementById('filterType')?.value || '';
    const category = document.getElementById('filterCategory')?.value || '';
    const minBeds = parseInt(document.getElementById('filterBeds')?.value) || 0;
    const maxPrice = parseInt(document.getElementById('filterPrice')?.value) || 999999999;
    const sort = document.getElementById('sortSelect')?.value || '';
    const locationQuery = document.getElementById('filterLocation')?.value.toLowerCase() || '';

    let filtered = properties.filter(p => {
      const matchType = !type || p.type === type;
      const matchCat = !category || p.category === category;
      const matchBeds = p.beds >= minBeds;
      const matchPrice = p.priceRaw <= maxPrice;
      const matchLocation = !locationQuery || p.address.toLowerCase().includes(locationQuery) || p.name.toLowerCase().includes(locationQuery);
      return matchType && matchCat && matchBeds && matchPrice && matchLocation;
    });

    if (sort === 'price_asc') filtered.sort((a, b) => a.priceRaw - b.priceRaw);
    else if (sort === 'price_desc') filtered.sort((a, b) => b.priceRaw - a.priceRaw);
    else if (sort === 'newest') filtered.sort((a, b) => b.year - a.year);
    else if (sort === 'sqft') filtered.sort((a, b) => b.sqft - a.sqft);

    container.innerHTML = filtered.length
      ? filtered.map(createPropertyCard).join('')
      : `<div class="col-12 text-center py-5">
          <i class="fas fa-search" style="font-size:3rem;color:#d1d5db;margin-bottom:1rem;display:block;"></i>
          <h5 style="color:var(--text-muted);">No properties match your filters.</h5>
          <p style="color:#9ca3af;font-size:0.9rem;">Try adjusting your search criteria.</p>
        </div>`;

    const countEl = document.getElementById('resultCount');
    if (countEl) countEl.textContent = filtered.length;
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
      grid.classList.toggle('list-view', this.dataset.view === 'list');
    });
  });
}

// ===== Homepage: Render Featured Cards =====
function initHomepageCards() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  grid.innerHTML = properties.slice(0, 6).map(createPropertyCard).join('');
}

// ===== Property Detail Page =====
function initPropertyDetail() {
  const detailWrap = document.getElementById('propertyDetailWrap');
  if (!detailWrap) return;

  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'));
  const p = properties.find(x => x.id === id);

  if (!p) {
    detailWrap.innerHTML = `<div class="container py-5 text-center"><h3>Property not found.</h3><a href="properties.html" class="btn-primary-custom mt-3 d-inline-flex">← Back to Listings</a></div>`;
    return;
  }

  document.title = `${p.name} — PropEstate Hyderabad`;

  const bc = document.getElementById('detailBreadcrumb');
  if (bc) bc.textContent = p.name;

  const mainImg = document.getElementById('mainImg');
  if (mainImg) mainImg.src = p.imgs[0];

  const thumbGrid = document.getElementById('thumbGrid');
  if (thumbGrid) {
    thumbGrid.innerHTML = p.imgs.map((img, i) => `
      <div class="thumb-item ${i === 0 ? 'active' : ''}" onclick="switchImg(this, '${img}')">
        <img src="${img}" alt="Photo ${i+1}" loading="lazy">
      </div>
    `).join('');
  }

  document.getElementById('detailPrice').textContent = p.price + (p.type === 'rent' ? '/mo' : '');
  document.getElementById('detailBadge').textContent = p.badge;
  document.getElementById('detailBadge').className = `property-badge ${p.type === 'rent' ? 'for-rent' : ''} me-2`;
  document.getElementById('detailName').textContent = p.name;
  document.getElementById('detailAddress').innerHTML = `<i class="fas fa-map-marker-alt me-1" style="color:var(--accent);"></i>${p.address}`;
  document.getElementById('detailBeds').textContent = p.beds;
  document.getElementById('detailBaths').textContent = p.baths;
  document.getElementById('detailSqft').textContent = p.sqft.toLocaleString();
  document.getElementById('detailYear').textContent = p.year;
  document.getElementById('detailParking').textContent = p.parking;
  document.getElementById('detailType').textContent = p.category.charAt(0).toUpperCase() + p.category.slice(1);
  document.getElementById('detailDesc').textContent = p.description;

  const amenEl = document.getElementById('detailAmenities');
  if (amenEl) {
    const icons = {
      "Swimming Pool": "fa-swimming-pool", "Garage / Parking": "fa-car", "Garden / Yard": "fa-leaf",
      "Air Conditioning": "fa-snowflake", "Smart Home": "fa-home", "Home Theater": "fa-film",
      "Gym / Fitness": "fa-dumbbell", "Rooftop Terrace": "fa-building", "Concierge": "fa-bell",
      "Pet Friendly": "fa-paw", "24x7 Security": "fa-shield-alt", "Power Backup": "fa-bolt",
      "Clubhouse": "fa-landmark", "Children's Play Area": "fa-child", "Puja Room": "fa-pray",
      "Servant Quarters": "fa-door-open", "Home Office": "fa-briefcase", "Rainwater Harvesting": "fa-tint",
      "Laundry In-Building": "fa-tshirt", "Co-working Space": "fa-laptop", "Jogging Track": "fa-running",
      "Amphitheatre": "fa-music", "Terrace": "fa-sun", "Private Terrace": "fa-door-open"
    };
    amenEl.innerHTML = p.amenities.map(a => `
      <div class="amenity-tag"><i class="fas ${icons[a] || 'fa-check'} me-2"></i>${a}</div>
    `).join('');
  }

  document.getElementById('agentImg').src = p.agent.img;
  document.getElementById('agentName').textContent = p.agent.name;
  document.getElementById('agentTitle').textContent = p.agent.title;
  document.getElementById('agentPhone').textContent = p.agent.phone;
  document.getElementById('agentPhone').href = `tel:${p.agent.phone.replace(/\D/g,'')}`;
  document.getElementById('agentEmail').textContent = p.agent.email;
  document.getElementById('agentEmail').href = `mailto:${p.agent.email}`;
  document.getElementById('agentContactLink').href = `contact.html?agent=${encodeURIComponent(p.agent.name)}&property=${encodeURIComponent(p.name)}`;

  const related = properties.filter(x => x.id !== p.id && (x.category === p.category || x.type === p.type)).slice(0, 3);
  const relGrid = document.getElementById('relatedGrid');
  if (relGrid) relGrid.innerHTML = related.map(createPropertyCard).join('');
}

window.switchImg = function(thumb, src) {
  document.getElementById('mainImg').src = src;
  document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
};

// ===== Contact Form =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const params = new URLSearchParams(location.search);
  const agentField = document.getElementById('contactAgent');
  const subjectField = document.getElementById('contactSubject');
  if (params.get('agent') && agentField) agentField.value = params.get('agent');
  if (params.get('property') && subjectField) subjectField.value = `Inquiry about: ${params.get('property')}`;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-submit');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    btn.disabled = true;
    setTimeout(() => {
      document.getElementById('formSuccess').style.display = 'flex';
      form.reset();
      btn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Send Message';
      btn.disabled = false;
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1800);
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.stats-banner');
  if (statsSection) statsObserver.observe(statsSection);

  initHomepageCards();
  initFilters();
  initViewToggle();
  initPropertyDetail();
  initContactForm();

  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && currentPage.includes(href.replace('./', ''))) {
      link.classList.add('active');
    }
  });

  window.filterHome = function(type, btn) {
    document.querySelectorAll('.filter-tab-btn').forEach(b => {
      b.style.background = '#f3f4f6';
      b.style.color = '#374151';
    });
    btn.style.background = 'var(--primary)';
    btn.style.color = '#fff';
    document.querySelectorAll('#featuredGrid [data-type]').forEach(card => {
      card.style.display = (type === 'all' || card.dataset.type === type) ? '' : 'none';
    });
  };
});
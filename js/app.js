document.addEventListener('DOMContentLoaded', function () {
  // Navbar scroll efekti
  let lastScroll = 0
  const navbar = document.querySelector('.navbar')

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }

    lastScroll = currentScroll
  })

  // Mega menü fonksiyonları
  const navLinks = document.querySelectorAll('.nav-link[data-category]')
  let currentMenu = null
  let activeLink = null

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const categoryId = this.getAttribute('data-category')
      const targetMenu = document.getElementById(`menu-${categoryId}`)

      // Tüm mega menüleri kapat
      document.querySelectorAll('.mega-menu').forEach((menu) => {
        if (menu !== targetMenu) {
          menu.classList.remove('show')
        }
      })

      // Tüm aktif linkleri temizle
      document.querySelectorAll('.nav-link').forEach((navLink) => {
        navLink.classList.remove('active')
      })

      // Tıklanan menüyü aç/kapat
      if (targetMenu.classList.contains('show')) {
        targetMenu.classList.remove('show')
        this.classList.remove('active')
      } else {
        targetMenu.classList.add('show')
        this.classList.add('active')
      }

      currentMenu = targetMenu
      activeLink = this
    })
  })

  // Kapatma ikonları ekleme
  document.querySelectorAll('.mega-menu').forEach((menu) => {
    const closeIcon = document.createElement('i')
    closeIcon.className = 'fas fa-times close-icon'
    closeIcon.addEventListener('click', function () {
      menu.classList.remove('show')
      if (activeLink) {
        activeLink.classList.remove('active')
      }
      currentMenu = null
      activeLink = null
    })
    menu.insertAdjacentElement('afterbegin', closeIcon)
  })

  // Sayfa dışına tıklanınca menüyü kapat
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar') && !e.target.closest('.mega-menu')) {
      document.querySelectorAll('.mega-menu').forEach((menu) => {
        menu.classList.remove('show')
      })
      document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.remove('active')
      })
      currentMenu = null
      activeLink = null
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.custom-nav__link')

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      // Mevcut active class'ını kaldır
      document
        .querySelector('.custom-nav__link--active')
        ?.classList.remove('custom-nav__link--active')

      // Tıklanan linke active class'ını ekle
      this.classList.add('custom-nav__link--active')
    })
  })
})

// Mobil menü için dropdown işlevselliği
document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth < 992) {
    const dropdownToggle = document.querySelectorAll('.dropdown-toggle')
    dropdownToggle.forEach((toggle) => {
      toggle.addEventListener('click', function (e) {
        e.preventDefault()
        const dropdownMenu = this.nextElementSibling
        if (dropdownMenu.style.display === 'block') {
          dropdownMenu.style.display = 'none'
        } else {
          dropdownMenu.style.display = 'block'
        }
      })
    })
  }
})

// Filtreleme menüsünü aç/kapat
function showFilters() {
  document.getElementById('filterSidebar').classList.add('show')
  document.querySelector('.filter-overlay').classList.add('show')
  document.body.style.overflow = 'hidden'
}

function closeFilters() {
  document.getElementById('filterSidebar').classList.remove('show')
  document.querySelector('.filter-overlay').classList.remove('show')
  document.body.style.overflow = ''
}

// Filtre bölümlerini aç/kapat
function toggleFilterSection(sectionId) {
  const section = document.getElementById(sectionId)
  const allSections = document.querySelectorAll('.filter-items')

  allSections.forEach((item) => {
    if (item.id !== sectionId) {
      item.classList.remove('show')
    }
  })

  section.classList.toggle('show')
}

// Sayfa yüklendiğinde overlay ekle
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.createElement('div')
  overlay.className = 'filter-overlay'
  overlay.addEventListener('click', closeFilters)
  document.body.appendChild(overlay)
})

// ESC tuşu ile filtrelemeyi kapat
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeFilters()
  }
})



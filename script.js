/* =========================
   HERO BACKGROUND SLIDESHOW
========================= */

const backgroundImages = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90"
];

const backgroundOne = document.querySelector(".background-one");
const backgroundTwo = document.querySelector(".background-two");

let currentImage = 0;
let showingFirst = true;

backgroundOne.style.backgroundImage =
  `url("${backgroundImages[0]}")`;

backgroundTwo.style.backgroundImage =
  `url("${backgroundImages[1]}")`;

setInterval(() => {

  currentImage =
    (currentImage + 1) % backgroundImages.length;

  if (showingFirst) {

    backgroundTwo.style.backgroundImage =
      `url("${backgroundImages[currentImage]}")`;

    backgroundTwo.style.opacity = "1";
    backgroundOne.style.opacity = "0";

  } else {

    backgroundOne.style.backgroundImage =
      `url("${backgroundImages[currentImage]}")`;

    backgroundOne.style.opacity = "1";
    backgroundTwo.style.opacity = "0";
  }

  showingFirst = !showingFirst;

}, 5000);


/* =========================
   SCROLL REVEAL ANIMATIONS
========================= */

const animationElements = [

  // Section headings
  ...document.querySelectorAll(
    ".section-label, .section-heading, .locations-heading, .videos-heading, .booking-heading"
  ),

  // Cards
  ...document.querySelectorAll(
    ".stay-card, .location-card, .video-card"
  ),

  // About section
  ...document.querySelectorAll(
    ".about-image, .about-content"
  ),

  // Booking
  ...document.querySelectorAll(
    ".property-showcase, .booking-note"
  )

];


/* Add animation classes */

animationElements.forEach((element, index) => {

  if (
    element.classList.contains("location-card") ||
    element.classList.contains("video-card")
  ) {

    if (index % 2 === 0) {
      element.classList.add("reveal-left");
    } else {
      element.classList.add("reveal-right");
    }

  } else if (
    element.classList.contains("about-image")
  ) {

    element.classList.add("reveal-left");

  } else if (
    element.classList.contains("about-content")
  ) {

    element.classList.add("reveal-right");

  } else if (
    element.classList.contains("property-showcase")
  ) {

    element.classList.add("reveal-scale");

  } else {

    element.classList.add("reveal");
  }

});


/* Watch elements as they enter the screen */

const observer = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.12
  }
);


/* Start watching */

animationElements.forEach(element => {
  observer.observe(element);
});
/* =========================
   FEATURED STAYS REVEAL
========================= */

const staysGrid = document.querySelector(".stays-grid");
const stayCards = document.querySelectorAll(".stay-card");

if (staysGrid) {

  const staysObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          stayCards.forEach(card => {
            card.classList.add("book-open");
          });

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  staysObserver.observe(staysGrid);
}

/* =========================
   LOCATIONS REVEAL
========================= */

const locationsGrid = document.querySelector(".locations-grid");
const locationCards = document.querySelectorAll(".location-card");

if (locationsGrid) {

  const locationsObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          locationCards.forEach((card, index) => {

            setTimeout(() => {
              card.classList.add("location-show");
            }, index * 250);

          });

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  locationsObserver.observe(locationsGrid);
}

/* =========================
   ABOUT MELISSA REVEAL
========================= */

const aboutSection = document.querySelector(".about-section");
const aboutImage = document.querySelector(".about-image");
const aboutContent = document.querySelector(".about-content");

if (aboutSection) {

  const aboutObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          setTimeout(() => {
            aboutImage?.classList.add("about-show");
          }, 100);

          setTimeout(() => {
            aboutContent?.classList.add("about-show");
          }, 250);

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.2
    }
  );

  aboutObserver.observe(aboutSection);
}


/* =========================
   LOCATION PROPERTY SWITCHER
========================= */

const locationData = {

  bronx: {
    number: "01",
    name: "BRONX",
    title: "Modern Bronx Residence",
    price: "$---",
    mainImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    living: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    bedroom: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    kitchen: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    bathroom: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    video: "#"
  },

  brooklyn: {
    number: "02",
    name: "BROOKLYN",
    title: "Stylish Brooklyn Stay",
    price: "$---",
    mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    living: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    bedroom: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    kitchen: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    bathroom: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    video: "#"
  },

  manhattan: {
    number: "03",
    name: "MANHATTAN",
    title: "Elegant Manhattan Residence",
    price: "$---",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
    living: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    bedroom: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    kitchen: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    bathroom: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    video: "#"
  },

  harlem: {
    number: "04",
    name: "HARLEM",
    title: "Beautiful Harlem Stay",
    price: "$---",
    mainImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    living: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    bedroom: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    kitchen: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    bathroom: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    video: "#"
  },

  "upper-east": {
    number: "05",
    name: "UPPER EAST SIDE",
    title: "Upper East Side Escape",
    price: "$---",
    mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    living: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    bedroom: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    kitchen: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    bathroom: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    video: "#"
  },

  "lower-east": {
    number: "06",
    name: "LOWER EAST SIDE",
    title: "Lower East Side Residence",
    price: "$---",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
    living: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    bedroom: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    kitchen: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    bathroom: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    video: "#"
  }

};


const locationButtons =
  document.querySelectorAll(".location-choice");

const propertyPanel =
  document.querySelector(".location-property-panel");

const locationMainImage =
  document.querySelector("#locationMainImage");

const locationNumber =
  document.querySelector("#locationNumber");

const locationName =
  document.querySelector("#locationName");

const propertyTitle =
  document.querySelector("#propertyTitle");

const propertyPrice =
  document.querySelector("#propertyPrice");

const roomLiving =
  document.querySelector("#roomLiving");

const roomBedroom =
  document.querySelector("#roomBedroom");

const roomKitchen =
  document.querySelector("#roomKitchen");

const roomBathroom =
  document.querySelector("#roomBathroom");

const bookProperty =
  document.querySelector("#bookProperty");

const watchProperty =
  document.querySelector("#watchProperty");


function updateProperty(locationKey) {

  const property = locationData[locationKey];

  if (!property) return;


  propertyPanel.classList.remove("property-changing");

  void propertyPanel.offsetWidth;

  propertyPanel.classList.add("property-changing");


  locationMainImage.src = property.mainImage;
  locationMainImage.alt = `${property.name} property`;

  locationNumber.textContent = property.number;
  locationName.textContent = property.name;

  propertyTitle.textContent = property.title;
  propertyPrice.textContent = property.price;

  roomLiving.src = property.living;
  roomBedroom.src = property.bedroom;
  roomKitchen.src = property.kitchen;
  roomBathroom.src = property.bathroom;


  const message =
    `Hi Melissa, I want to book the ${property.name} room.`;

  bookProperty.href =
    `https://wa.me/?text=${encodeURIComponent(message)}`;

  watchProperty.href = property.video;


  locationButtons.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.location === locationKey
    );
  });

}


locationButtons.forEach(button => {

  button.addEventListener("click", () => {

    updateProperty(button.dataset.location);

    if (window.innerWidth <= 800) {

      propertyPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");

    const isOpen = mobileMenu.classList.contains("open");

    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );

    menuBtn.textContent = isOpen ? "✕" : "☰";
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-label", "Open menu");
    });
  });
}
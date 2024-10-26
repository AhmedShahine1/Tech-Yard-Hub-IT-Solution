  // Define all product data
  const allProducts = [
    {
      Id: 1,
      Name: "Dell XPS 13",
      imageUrl: "assets/Apple Mac Studio.jpg",
      imageUrlInHover: "assets/Apple Mac Studio.jpg",
      oldPrice: 1600,
      discount: 10,
      soldOut: false,
      popular: true,
      model: "XPS 13",
      OS: "Windows 10",
      categoriesId: 1,
      processor: "Intel Core i7",
      graphicCard: "Intel Iris Xe",
      storage: 512,
      ramSize: 16,
      ramType: "DDR4",
      dimensions: "302 x 199 x 15 mm",
      weight: "1.2 kg",
      ScreenSize: 13,
      rating: 4.5,
      sales: 300,
    },
    {
      Id: 2,
      Name: "MacBook Air",
      imageUrl: "assets/Apple Mac Studio.jpg",
      imageUrlInHover: "assets/MacBook_Air_hover.jpg",
      oldPrice: 1260,
      discount: 5,
      soldOut: false,
      popular: true,
      model: "MacBook Air M1",
      OS: "macOS Big Sur",
      categoriesId: 1,
      processor: "Apple M1",
      graphicCard: "Integrated 7-core GPU",
      storage: 256,
      ramSize: 8,
      ramType: "Unified",
      dimensions: "304 x 212 x 16 mm",
      weight: "1.29 kg",
      ScreenSize: 13,
      rating: 4.7,
      sales: 500,
    },
    {
      Id: 3,
      Name: "Samsung Galaxy S21",
      imageUrl: "assets/Apple Mac Studio.jpg",
      imageUrlInHover: "assets/Samsung_Galaxy_S21_hover.jpg",
      oldPrice: 850,
      discount: 0,
      soldOut: false,
      popular: false,
      model: "Galaxy S21",
      OS: "Android 11",
      categoriesId: 2,
      processor: "Exynos 2100",
      graphicCard: "Mali-G78 MP14",
      storage: 128,
      ramSize: 8,
      ramType: "LPDDR5",
      dimensions: "151.7 x 71.2 x 7.9 mm",
      weight: "169 g",
      ScreenSize: 6.2,
      rating: 4.3,
      sales: 150,
    },
    {
      Id: 4,
      Name: "Sofa Set",
      imageUrl: "assets/Apple Mac Studio.jpg",
      imageUrlInHover: "assets/Sofa_Set_hover.jpg",
      oldPrice: 1125,
      discount: 20,
      soldOut: false,
      popular: false,
      model: "Classic Sofa",
      OS: "",
      categoriesId: 3,
      processor: "",
      graphicCard: "",
      storage: "",
      ramSize: "",
      ramType: "",
      dimensions: "200 x 85 x 90 cm",
      weight: "40 kg",
      ScreenSize: "",
      rating: 4.0,
      sales: 75,
    },
    {
      Id: 5,
      Name: "Lenovo ThinkPad X1",
      imageUrl: "assets/Apple Mac Studio.jpg",
      imageUrlInHover: "assets/Lenovo_ThinkPad_X1_hover.jpg",
      oldPrice: 1650,
      discount: 15,
      soldOut: false,
      popular: true,
      model: "ThinkPad X1 Carbon",
      OS: "Windows 10 Pro",
      categoriesId: 1,
      processor: "Intel Core i7",
      graphicCard: "Intel UHD Graphics",
      storage: 512,
      ramSize: 16,
      ramType: "LPDDR3",
      dimensions: "323 x 217 x 14.9 mm",
      weight: "1.09 kg",
      ScreenSize: 14,
      rating: 4.6,
      sales: 200,
    },
    {
      Id: 6,
      Name: "LG OLED TV",
      imageUrl: "assets/Apple Mac Studio.jpg",
      imageUrlInHover: "assets/LG_OLED_TV_hover.jpg",
      oldPrice: 3000,
      discount: 0,
      soldOut: false,
      popular: true,
      model: "OLED55CXPUA",
      OS: "webOS",
      categoriesId: 4,
      processor: "",
      graphicCard: "",
      storage: "",
      ramSize: "",
      ramType: "",
      dimensions: "1228 x 706 x 47 mm",
      weight: "18.9 kg",
      ScreenSize: 55,
      rating: 4.8,
      sales: 120,
    },
  ];

  // Example categories
  const categories = [
    {
      Id: 1,
      name: "Electronics",
      imageUrl: "assets/electronics.jpg",
    },
    {
      Id: 2,
      name: "Mobile Phones",
      imageUrl: "assets/mobile_phones.jpg",
    },
    {
      Id: 3,
      name: "Furniture",
      imageUrl: "assets/furniture.jpg",
    },
    {
      Id: 4,
      name: "Television",
      imageUrl: "assets/television.jpg",
    },
  ];

  // Sample data array representing product details images
  const productDetailsImages = [
    { Id: 1, ImageUrl: "assets/Apple Mac Studio.jpg", ProductsId: 1 },
    { Id: 2, ImageUrl: "assets/Apple Mac Studio.jpg", ProductsId: 1 },
    { Id: 3, ImageUrl: "assets/Apple Mac Studio.jpg", ProductsId: 1 },
    { Id: 4, ImageUrl: "assets/Apple Mac Studio.jpg", ProductsId: 1 },
    // Add more objects as needed
  ];
$(document).ready(function () {
  $(".tab-item").click(function () {
    // Remove active class from all tabs
    $(".tab-item").removeClass("active");
    $(".tab-pane").removeClass("active");

    // Add active class to clicked tab and related content
    $(this).addClass("active");
    const tabId = $(this).data("tab");
    $(`#${tabId}`).addClass("active");
  });
});
  // Function to get URL parameter by name
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Function to load product details based on ID
  function loadProductDetails() {
    const productId = Number(new URLSearchParams(window.location.search).get('id'));

    // Find the product with the given ID
    const product = allProducts.find(p => p.Id === productId);
    if (product) {
      document.getElementById('mainImage').src = product.imageUrl;
      document.getElementById('productName').innerText = product.Name;
      document.getElementById('availability').innerText = product.soldOut ? "Sold Out" : "Available in stock";
      document.getElementById('productPrice').innerText = `£${(product.oldPrice * (1 - product.discount / 100)).toFixed(2)}`;
      document.getElementById('oldPrice').innerText = `£${product.oldPrice.toFixed(2)}`;
      document.getElementById('productDescription').innerText = product.model + ' - ' + product.OS;

      // Load thumbnails
      const thumbnailContainer = document.getElementById('thumbnailContainer');
      thumbnailContainer.innerHTML = ''; // Clear existing thumbnails
      for (let i = 0; i < 4; i++) {
        const thumb = document.createElement('img');
        thumb.src = product.imageUrlInHover; // Use hover image or any other thumbnail image
        thumb.className = 'img-fluid border me-2';
        thumb.height = 100;
        thumb.width = 100;
        thumbnailContainer.appendChild(thumb);
      }
          // Load product information
          const informationList = document.getElementById('informationContent');
          informationList.innerHTML = ''; // Clear existing information
          informationList.innerHTML += `<li><strong>Model:</strong> ${product.model}</li>`;
          informationList.innerHTML += `<li><strong>OS:</strong> ${product.OS}</li>`;
          informationList.innerHTML += `<li><strong>Processor:</strong> ${product.processor}</li>`;
          informationList.innerHTML += `<li><strong>RAM Size:</strong> ${product.ramSize} GB</li>`;
          informationList.innerHTML += `<li><strong>Storage:</strong> ${product.storage} GB</li>`;
          informationList.innerHTML += `<li><strong>Dimensions:</strong> ${product.dimensions}</li>`;
          informationList.innerHTML += `<li><strong>Weight:</strong> ${product.weight}</li>`;
          informationList.innerHTML += `<li><strong>Screen Size:</strong> ${product.ScreenSize} inches</li>`;
          informationList.innerHTML += `<li><strong>Rating:</strong> ${product.rating} stars</li>`;
    
          // Load related products (optional)
          loadRelatedProducts(product.categoriesId);
    } else {
      // Handle product not found
      alert('Product not found!');
    }
  }

  function loadRelatedProducts(categoryId) {
    const relatedProductsContainer = document.getElementById('relatedProductsContainer');
    relatedProductsContainer.innerHTML = ''; // Clear existing related products

    const relatedProducts = allProducts.filter(p => p.categoriesId === categoryId && p.Id !== categoryId);
    
    if (relatedProducts.length === 0) {
      relatedProductsContainer.innerHTML = '<p>No related products found.</p>';
      return;
    }

    const itemsPerSlide = 4; // Change this based on the number of items you want per slide on large screens
    const totalSlides = Math.ceil(relatedProducts.length / itemsPerSlide);
  
    for (let i = 0; i < totalSlides; i++) {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'carousel-item' + (i === 0 ? ' active' : ''); // Make the first slide active
      
      const rowDiv = document.createElement('div');
      rowDiv.className = 'row';

      for (let j = 0; j < itemsPerSlide; j++) {
        const productIndex = i * itemsPerSlide + j;
        if (productIndex < relatedProducts.length) {
          const product = relatedProducts[productIndex];
          const productCard = `
            <div class="col-md-3 col-6"> <!-- 3 columns on medium/large screens, 1 column on small screens -->
              <div class="card">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.Name}" />
                <div class="card-body">
                  <h5 class="card-title">${product.Name}</h5>
                  <p class="card-text">£${(product.oldPrice * (1 - product.discount / 100)).toFixed(2)}</p>
                </div>
              </div>
            </div>`;
          rowDiv.innerHTML += productCard; // Append the card to the row
        }
      }
      slideDiv.appendChild(rowDiv); // Append the row to the slide
      relatedProductsContainer.appendChild(slideDiv); // Append the slide to the carousel inner
    }
}

  // Load product details on page load
  window.onload = loadProductDetails;


$(document).ready(function () {
  // Define an array of carousel data
  const carouselData = [
    {
      src: "assets/Apple Mac Studio.jpg",
      alt: "Apple Mac Studio",
      caption: "Slide 1",
    },
    {
      src: "assets/Apple MacBook (13-inch).jpg",
      alt: "Apple MacBook (13-inch)",
      caption: "Slide 2",
    },
    {
      src: "assets/Apple MacBook Air.jpg",
      alt: "Apple MacBook Air",
      caption: "Slide 3",
    },
  ];

  // Populate the carousel dynamically
  const indicatorsContainer = $("#announcementSection .carousel-indicators");
  const innerContainer = $("#announcementSection.carousel-inner");

  carouselData.forEach((item, index) => {
    // Create indicator buttons
    const indicator = $("<button>")
      .attr("type", "button")
      .attr("data-bs-target", "#dynamicCarousel")
      .attr("data-bs-slide-to", index)
      .attr("aria-label", item.caption);

    if (index === 0) {
      indicator.addClass("active").attr("aria-current", "true");
    }

    // Create carousel items
    const carouselItem = $("<div>")
      .addClass("carousel-item")
      .append(
        $("<img>")
          .attr("src", item.src)
          .attr("alt", item.alt)
          .addClass("d-block w-100")
      );

    if (index === 0) {
      carouselItem.addClass("active");
    }

    // Append indicators and carousel items to the DOM
    indicatorsContainer.append(indicator);
    innerContainer.append(carouselItem);
  });

  // Ensure the carousel loops (cycle) continuously
  $("#dynamicCarousel").carousel({
    interval: 2000, // Change slide every 2 seconds
    wrap: true, // Enable continuous cycling
  });
});
$(document).ready(function () {
  let layout = "3"; // Default layout

  // Define all product data
  const allProducts = [
    {
      Id: 1,
      Name: "Dell XPS 13",
      imageUrl: "assets/Apple Mac Studio.jpg",
      imageUrlInHover: "assets/Dell_XPS_13_hover.jpg",
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

  function getMinMaxPrice(products) {
    let minPrice = Infinity;
    let maxPrice = -Infinity;
  
    products.forEach(product => {
      // Calculate the effective price after applying any discount
      const effectivePrice = product.oldPrice * (1 - product.discount / 100);
  
      // Update minPrice and maxPrice based on effectivePrice
      if (effectivePrice < minPrice) {
        minPrice = effectivePrice;
      }
      if (effectivePrice > maxPrice) {
        maxPrice = effectivePrice;
      }
    });
  
    return { minPrice, maxPrice };
  }
  
  // Usage
  const { minPrice, maxPrice } = getMinMaxPrice(allProducts); 

  // Sort Products
  function sortProducts(products, criteria) {
    switch (criteria) {
      case "price-asc":
        return products.sort((a, b) => a.oldPrice - b.oldPrice);
      case "price-desc":
        return products.sort((a, b) => b.oldPrice - a.oldPrice);
      case "name-asc":
        return products.sort((a, b) => a.Name.localeCompare(b.Name));
      case "name-desc":
        return products.sort((a, b) => b.Name.localeCompare(a.Name));
      default:
        return products; // Default sorting
    }
  }

  // Extract unique filter values from product data
  function getUniqueValues(property) {
    if (property === "categoriesId") {
      // Map categoriesId to actual category names
      return [
        ...new Set(
          allProducts.map((product) => {
            const category = categories.find(
              (cat) => cat.Id === product.categoriesId
            );
            return category ? category : null;
          })
        ),
      ];
    } else {
      // Generic case for other properties
      return [...new Set(allProducts.map((product) => product[property]))];
    }
  }

  function populateFilters() {
    const processorOptions = getUniqueValues("processor");
    const categoryOptions = getUniqueValues("categoriesId");
    const colorOptions = getUniqueValues("color");
    const ramOptions = getUniqueValues("ramSize");
    const screenSizeOptions = getUniqueValues("ScreenSize");
    const storageOptions = getUniqueValues("storage");

    const filterHTML = `
      <!-- Category Filter -->
      <label for="categoryFilter">Category:</label>
      <select id="categoryFilter" class="form-select">
        <option value="all">All</option>
        ${categoryOptions
          .map((categ) => `<option value="${categ.Id}">${categ.name}</option>`)
          .join("")}
      </select>
  
      <!-- Processor Filter -->
      <label for="processorFilter">Processor:</label>
      <select id="processorFilter" class="form-select">
        <option value="all">All</option>
        ${processorOptions
          .map((proc) => `<option value="${proc}">${proc}</option>`)
          .join("")}
      </select>
  
      <!-- Price Filter -->
      <!-- Price Range Filter -->
      <label for="priceRange">Price Range:</label>
      <input type="text" id="priceRange" name="price" value="" />

      <!-- Color Filter -->
      <label for="colorFilter">Color:</label>
      <select id="colorFilter" class="form-select">
        <option value="all">All</option>
        ${colorOptions
          .map((color) => `<option value="${color}">${color}</option>`)
          .join("")}
      </select>
  
      <!-- RAM Filter -->
      <label for="ramFilter">RAM:</label>
      <select id="ramFilter" class="form-select">
        <option value="all">All</option>
        ${ramOptions
          .map((ram) => `<option value="${ram}">${ram} GB</option>`)
          .join("")}
      </select>
  
      <!-- Screen Size Filter -->
      <label for="screenSizeFilter">Screen Size:</label>
      <select id="screenSizeFilter" class="form-select">
        <option value="all">All</option>
        ${screenSizeOptions
          .map((size) => `<option value="${size}">${size} inch</option>`)
          .join("")}
      </select>
  
      <!-- Storage Filter -->
      <label for="storageFilter">Storage:</label>
      <select id="storageFilter" class="form-select">
        <option value="all">All</option>
        ${storageOptions
          .map((storage) => `<option value="${storage}">${storage} GB</option>`)
          .join("")}
      </select>
    `;

    $("#dynamicFilters").html(filterHTML);
  }
  
  function setrange() {
    $("#priceRange").ionRangeSlider({
      type: "double",
      min: minPrice - 50,
      max: maxPrice + 50,
      from: minPrice,
      to: maxPrice,
      step: 50,
      prefix: "$",
      prettify_enabled: true,
      grid: true,
      onFinish: function (data) {
        // Call displayProducts with the selected price range
        displayProducts(allProducts, data.from, data.to);
      }
    });
  }
  
  // Function to set product grid class based on selected layout
  function setGridLayout(newLayout) {
    layout = newLayout;
    $("#productGrid").removeClass().addClass("row");

    if (newLayout === "list") {
      $("#productGrid").addClass("list-view");
    } else if (newLayout === "3") {
      $("#productGrid").addClass("grid-3");
    } else if (newLayout === "5") {
      $("#productGrid").addClass("grid-5");
    }
  }

  // Function to display products based on selected filters
  function displayProducts(products = allProducts, minPrice = 0, maxPrice = Infinity) {
    const processor = $("#processorFilter").val();
    const category = $("#categoryFilter").val();
    const color = $("#colorFilter").val();
    const ram = $("#ramFilter").val();
    const screenSize = $("#screenSizeFilter").val();
    const storage = $("#storageFilter").val();

    $("#productGrid").empty();

    products.forEach((product) => {
      let showProduct = true;
    // Calculate the effective price with discount
    const effectivePrice = product.oldPrice * (1 - product.discount / 100);
      // Filter conditions
      if (processor !== "all" && product.processor !== processor)
        showProduct = false;
      if (category !== "all" && product.categoriesId != category)
        showProduct = false;
      if (effectivePrice < minPrice || effectivePrice > maxPrice) showProduct = false;
      if (color !== "all" && product.color !== color) showProduct = false;
      if (ram !== "all" && product.ramSize != ram) showProduct = false;
      if (screenSize !== "all" && product.ScreenSize != screenSize)
        showProduct = false;
      if (storage !== "all" && product.storage != storage) showProduct = false;

      if (showProduct) {
        const hasDiscount = product.discount > 0;
        const discountedPrice =
          product.oldPrice - (product.oldPrice * product.discount) / 100;

        const productCard = `
        <div class="product-card">
          <div class="card">
            <img src="${product.imageUrl}" class="card-img-top" alt="${
          product.Name
        }">
            <div class="card-body">
              <h5 class="card-title">${product.Name}</h5>
              <p class="card-text">
                Price: ${
                  hasDiscount
                    ? `<span style="text-decoration: line-through;">$${
                        product.oldPrice
                      }</span> <span class="text-danger">$${discountedPrice.toFixed(
                        2
                      )}</span>`
                    : `$${product.oldPrice}`
                }
              </p>
              ${
                hasDiscount
                  ? `<p class="card-text text-success">Discount: ${product.discount}%</p>`
                  : ""
              }
              <p class="card-text">Rating: ${product.rating} ⭐</p>
              <p class="card-text">Sales: ${product.sales}</p>
              <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-primary w-100 mx-1" style="animation: heightChange 0.3s ease;">Add to Cart</a>
                <a href="DetailsProduct.html?id=${
                  product.Id
                }" class="btn btn-secondary w-100 mx-1" style="animation: heightChange 0.3s ease;">View Details</a>
              </div>
            </div>
          </div>
        </div>
      `;
        $("#productGrid").append(productCard);
      }
    });

    // List view adjustments
    if (layout === "list") {
      $(".product-card").css({
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
      });
      $(".card").css({
        flex: "1",
        display: "flex",
        justifyContent: "space-between",
      });
    }
  }

  // Initialize filters and product display
  populateFilters();
  setGridLayout("3"); // Set default layout to 3 columns
  displayProducts();

  // Event handlers for layout buttons
  $("#layout3Col").click(function () {
    setGridLayout("3");
    displayProducts();
  });

  $("#layout5Col").click(function () {
    setGridLayout("5");
    displayProducts();
  });

  $("#layoutList").click(function () {
    setGridLayout("list");
    displayProducts();
  });
  // Filter products on change of any filter option
  $("#dynamicFilters").on("change", 'select, input[type="range"]', function () {
    displayProducts();
  });
  // Sorting functionality
  $("#sortProducts").on("change", function () {
    const sortValue = $(this).val();
    const sortedProducts = sortProducts([...allProducts], sortValue);
    displayProducts(sortedProducts);
  });

// Show and hide sidebar when "Filter" button is clicked
$("#filterToggle").on("click", function () {
  $("#sidebarFilter").toggle();
  setrange();
});

// Hide sidebar when "X" button is clicked
$("#closeSidebar").on("click", function () {
  $("#sidebarFilter").hide();
});

  function checkScreenSize() {
    const windowWidth = $(window).width();

    if (windowWidth <= 768) {
      setGridLayout("list");
      displayProducts();
      $("#layout3Col, #layout5Col, #layoutList").hide();
    } else {
      $("#layout3Col, #layout5Col, #layoutList").show();
    }
  }

  checkScreenSize();

  $(window).resize(function () {
    checkScreenSize();
  });
});
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
    let layout = '3'; // Default layout

  // Define all product data
  const allProducts = [
    {
      src: "assets/Apple Mac Studio.jpg",
      name: "Dell XPS 13",
      category: "electronics",
      price: 1500,
      color: "black",
      processor: "intel",
      ram: 16,
      screenSize: 13,
      storage: 512,
      rating: 4.5,
      discount: 10,
      sales: 300,
    },
    {
      src: "assets/Apple Mac Studio.jpg",
      name: "MacBook Air",
      category: "electronics",
      price: 1200,
      color: "gray",
      processor: "apple",
      ram: 8,
      screenSize: 13,
      storage: 256,
      rating: 4.7,
      discount: 5,
      sales: 500,
    },
    {
      src: "assets/Apple Mac Studio.jpg",
      name: "Samsung Galaxy S21",
      category: "electronics",
      price: 800,
      color: "white",
      processor: "amd",
      ram: 4,
      screenSize: 15,
      storage: 128,
      rating: 4.3,
      discount: 0,
      sales: 150,
    },
    {
      src: "assets/Apple Mac Studio.jpg",
      name: "Sofa Set",
      category: "furniture",
      price: 900,
      color: "gray",
      rating: 4.0,
      discount: 20,
      sales: 75,
    },
    {
      src: "assets/Apple Mac Studio.jpg",
      name: "Lenovo ThinkPad X1",
      category: "electronics",
      price: 1400,
      color: "black",
      processor: "intel",
      ram: 16,
      screenSize: 14,
      storage: 512,
      rating: 4.6,
      discount: 15,
      sales: 200,
    },
    {
      src: "assets/Apple Mac Studio.jpg",
      name: "LG OLED TV",
      category: "electronics",
      price: 3000,
      color: "black",
      processor: "",
      ram: "",
      screenSize: 55,
      storage: "",
      rating: 4.8,
      discount: 0,
      sales: 120,
    },
    {
      src: "assets/Apple Mac Studio.jpg",
      name: "Dell XPS 13",
      category: "electronics",
      price: 1500,
      color: "black",
      processor: "intel",
      ram: 16,
      screenSize: 13,
      storage: 512,
      rating: 4.5,
      discount: 10, // Discount in percentage
      sales: 300, // Number of sales
    },
    {
      src: "assets/Apple Mac Studio.jpg",
      name: "MacBook Air",
      category: "electronics",
      price: 1200,
      color: "gray",
      processor: "apple",
      ram: 8,
      screenSize: 13,
      storage: 256,
      rating: 4.7,
      discount: 5, // Discount in percentage
      sales: 500, // Number of sales
    },
    {
      src: "assets/Apple Mac Studio.jpg",
      name: "Samsung Galaxy S21",
      category: "electronics",
      price: 800,
      color: "white",
      processor: "amd",
      ram: 4,
      screenSize: 15,
      storage: 128,
      rating: 4.3,
      discount: 0, // Discount in percentage
      sales: 150, // Number of sales
    },
    {
      src: "assets/Apple Mac Studio.jpg",
      name: "Sofa Set",
      category: "furniture",
      price: 900,
      color: "gray",
      processor: "",
      ram: "",
      screenSize: "",
      storage: "",
      rating: 4.0,
      discount: 20, // Discount in percentage
      sales: 75, // Number of sales
    },
  ];

  // Sort Products
  function sortProducts(products, criteria) {
    switch (criteria) {
      case "price-asc":
        return products.sort((a, b) => a.price - b.price);
      case "price-desc":
        return products.sort((a, b) => b.price - a.price);
      case "name-asc":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return products.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products; // Default sorting
    }
  }
  // Extract unique filter values from product data
  function getUniqueValues(key) {
    const values = allProducts
      .map((product) => product[key])
      .filter((value) => value);
    return [...new Set(values)];
  }

  // Dynamically populate filters based on product data
  function populateFilters() {
    const processorOptions = getUniqueValues("processor");
    const categoryOptions = getUniqueValues("category");
    const colorOptions = getUniqueValues("color");
    const ramOptions = getUniqueValues("ram");
    const screenSizeOptions = getUniqueValues("screenSize");
    const storageOptions = getUniqueValues("storage");

    const filterHTML = `
          <!-- Processor Filter -->
          <label for="processorFilter">Processor:</label>
          <select id="processorFilter" class="form-select w-25">
            <option value="all">All</option>
            ${processorOptions
              .map((proc) => `<option value="${proc}">${proc}</option>`)
              .join("")}
          </select>

          <!-- Price Filter -->
          <label for="priceRange">Price Range:</label>
          <input type="range" id="priceRange" min="0" max="2000" step="100" class="form-range w-25">
          <span id="priceValue">0 - 2000</span>

          <!-- Color Filter -->
          <label for="colorFilter">Color:</label>
          <select id="colorFilter" class="form-select w-25">
            <option value="all">All</option>
            ${colorOptions
              .map((color) => `<option value="${color}">${color}</option>`)
              .join("")}
          </select>

          <!-- RAM Filter -->
          <label for="ramFilter">RAM:</label>
          <select id="ramFilter" class="form-select w-25">
            <option value="all">All</option>
            ${ramOptions
              .map((ram) => `<option value="${ram}">${ram} GB</option>`)
              .join("")}
          </select>

          <!-- Screen Size Filter -->
          <label for="screenSizeFilter">Screen Size:</label>
          <select id="screenSizeFilter" class="form-select w-25">
            <option value="all">All</option>
            ${screenSizeOptions
              .map((size) => `<option value="${size}">${size} inch</option>`)
              .join("")}
          </select>

          <!-- Storage Filter -->
          <label for="storageFilter">Storage:</label>
          <select id="storageFilter" class="form-select w-25">
            <option value="all">All</option>
            ${storageOptions
              .map(
                (storage) => `<option value="${storage}">${storage} GB</option>`
              )
              .join("")}
          </select>
        `;

    $("#dynamicFilters").html(filterHTML);
  }
  // Function to set product grid class based on selected layout
  function setGridLayout(newLayout) {
    layout = newLayout; // Update the layout variable
    $("#productGrid").removeClass().addClass('row');

    // Set appropriate grid classes based on the selected layout
    if (newLayout === 'list') {
      $("#productGrid").addClass('list-view'); // For list view
    } else if (newLayout === '3') {
      $("#productGrid").addClass('grid-3'); // For 3 columns
    } else if (newLayout === '5') {
      $("#productGrid").addClass('grid-5'); // For 5 columns
    }
  }
   // Function to display products based on selected filters
  function displayProducts(products = allProducts) {
    const processor = $("#processorFilter").val();
    const priceRange = $("#priceRange").val();
    const color = $("#colorFilter").val();
    const ram = $("#ramFilter").val();
    const screenSize = $("#screenSizeFilter").val();
    const storage = $("#storageFilter").val();

    $("#productGrid").empty();

    products.forEach((product) => {
      let showProduct = true;

      // Filter by Processor
      if (processor !== "all" && product.processor !== processor)
        showProduct = false;

      // Filter by Price (dynamic range)
      if (priceRange && product.price > priceRange) showProduct = false;

      // Filter by Color
      if (color !== "all" && product.color !== color) showProduct = false;

      // Filter by RAM
      if (ram !== "all" && product.ram != ram) showProduct = false;

      // Filter by Screen Size
      if (screenSize !== "all" && product.screenSize != screenSize)
        showProduct = false;

      // Filter by Storage
      if (storage !== "all" && product.storage != storage) showProduct = false;

      // If product passes all filters, show it
      if (showProduct) {
        const productCard = `
          <div class="product-card">
            <div class="card">
              <img src="${product.src}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: $${product.price}</p>
                <p class="card-text">Rating: ${product.rating} ⭐</p>
                <p class="card-text">Discount: ${product.discount}%</p>
                <p class="card-text">Sales: ${product.sales}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        `;
        $("#productGrid").append(productCard);
      }
    });

    // If list layout, adjust the display
    if (layout === 'list') {
      $(".product-card").css({
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
      });
      $(".card").css({
        flex: '1',
        display: 'flex',
        justifyContent: 'space-between',
      });
    }
  }
  
  // Initialize filters and product display
  populateFilters();
  setGridLayout("3"); // Set default layout to 3 columns
  displayProducts();

  // Event handlers for layout buttons
  $("#layout3Col").click(function () {
    setGridLayout('3');
    displayProducts();
  });

  $("#layout5Col").click(function () {
    setGridLayout('5');
    displayProducts();
  });

  $("#layoutList").click(function () {
    setGridLayout('list');
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
  // Update the price range display
  $("#priceRange").on("input", function () {
    const rangeVal = $(this).val();
    $("#priceValue").text(`0 - ${rangeVal}`);
  });

  // Toggle Filter Section
  $("#filterToggle").click(function () {
    $("#filterContainer").toggle();
  });

  function checkScreenSize() {
    const windowWidth = $(window).width();

    if (windowWidth <= 768) {
        setGridLayout('list');
        displayProducts();    
      $("#layout3Col, #layout5Col, #layoutList").hide();
    } else {
      $("#layout3Col, #layout5Col, #layoutList").show();
    }
  }

  checkScreenSize();

  $(window).resize(function() {
    checkScreenSize();
  });
});

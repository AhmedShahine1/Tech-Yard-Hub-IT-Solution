import { CategoriesAPI, ProductsAPI } from "./api.js";
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

// Function to load product details based on ID
async function loadProductDetails() {
  const productId = Number(
    new URLSearchParams(window.location.search).get("id")
  );
  const product = await ProductsAPI.getProductById(productId);
  if (product) {
    document.getElementById("mainImage").src = product.imageUrl;
    document.getElementById("productName").innerText = product.name;
    document.getElementById("productPrice").innerText = `£${(
      product.oldPrice *
      (1 - product.discount / 100)
    ).toFixed(2)}`;
    document.getElementById(
      "oldPrice"
    ).innerText = `£${product.oldPrice.toFixed(2)}`;

    // Load product information
    const informationList = document.getElementById("informationContent");
    informationList.innerHTML = ""; // Clear existing information

    // Populate product information based on available fields
    informationList.innerHTML += `<li><strong>Model:</strong> ${
      product.model ?? "N/A"
    }</li>`;
    informationList.innerHTML += `<li><strong>OS:</strong> ${
      product.os ?? "N/A"
    }</li>`;
    informationList.innerHTML += `<li><strong>Processor:</strong> ${
      product.processor ?? "N/A"
    }</li>`;
    informationList.innerHTML += `<li><strong>RAM Size:</strong> ${
      product.ramSize ?? "N/A"
    } GB</li>`;
    informationList.innerHTML += `<li><strong>Storage:</strong> ${
      product.storage ?? "N/A"
    } GB</li>`;
    informationList.innerHTML += `<li><strong>Dimensions:</strong> ${
      product.dimensions ?? "N/A"
    }</li>`;
    informationList.innerHTML += `<li><strong>Weight:</strong> ${
      product.weight ?? "N/A"
    }</li>`;
    informationList.innerHTML += `<li><strong>Screen Size:</strong> ${
      product.ScreenSize ?? "N/A"
    } inches</li>`;
    informationList.innerHTML += `<li><strong>Rating:</strong> ${
      product.rating ?? "N/A"
    } stars</li>`;

    // Load related products (optional)
    loadRelatedProducts(product.categoriesId);
      // Assuming `product` is already defined and contains the necessary data
  if (product && product.productDetailsImages) {
    const thumbnailContainer = $("#thumbnailContainer");

    // Clear existing thumbnails if any
    thumbnailContainer.empty();

    // Loop through productDetailsImages and create img elements
    product.productDetailsImages.forEach((detailImage) => {
      const imgElement = `
              <img
                  alt="Product thumbnail"
                  class="img-fluid thumbnail"
                  height="75"
                  src="${detailImage.imageUrl}"
                  width="75"
              />
          `;
      thumbnailContainer.append(imgElement);
    });
  }

  } else {
    // Handle product not found
    alert("Product not found!");
  }
}

async function loadRelatedProducts(categoryId) {
  const relatedProductsContainer = document.getElementById(
    "relatedProductsContainer"
  );
  relatedProductsContainer.innerHTML = ""; // Clear existing related products

  const relatedProducts = await CategoriesAPI.getCategoryById(categoryId)

  if (relatedProducts.products.length === 0) {
    relatedProductsContainer.innerHTML = "<p>No related products found.</p>";
    return;
  }
  createCarousel(relatedProducts.products);
}
function createCarousel(relatedProducts) {
  const screenWidth = window.innerWidth;
  const itemsPerSlide = screenWidth >= 768 ? 3 : 1; // 3 items on large screens, 1 item on small screens
  const totalSlides = Math.ceil(relatedProducts.length / itemsPerSlide);

  // Clear previous carousel items if any
  relatedProductsContainer.innerHTML = "";

  for (let i = 0; i < totalSlides; i++) {
    const slideDiv = document.createElement("div");
    slideDiv.className = "carousel-item" + (i === 0 ? " active" : "");

    const rowDiv = document.createElement("div");
    rowDiv.className = "row justify-content-center";

    for (let j = 0; j < itemsPerSlide; j++) {
      const productIndex = i * itemsPerSlide + j;
      if (productIndex < relatedProducts.length) {
        const product = relatedProducts[productIndex];
        const hasDiscount = product.discount > 0;
        const discountedPrice =
          product.oldPrice - (product.oldPrice * product.discount) / 100;

        const productCard = `
          <div class="col-12 ${
            itemsPerSlide === 3 ? "col-md-4" : ""
          } mb-3"> <!-- Full width on small screens, 1/3 on medium/large screens -->
            <div class="card">
              <img src="${product.imageUrl}" class="card-img-top" alt="${
          product.Name
        }" />
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: ${
                  hasDiscount
                    ? `<span style="text-decoration: line-through;">$${
                        product.oldPrice
                      }</span> <span class="text-danger">$${discountedPrice.toFixed(
                        2
                      )}</span>`
                    : `$${product.oldPrice}`
                }
</p>
              </div>
            </div>
          </div>`;
        rowDiv.innerHTML += productCard;
      }
    }
    slideDiv.appendChild(rowDiv);
    relatedProductsContainer.appendChild(slideDiv);
  }
}

// Load product details on page load
window.onload = loadProductDetails;
window.addEventListener("resize", loadProductDetails);

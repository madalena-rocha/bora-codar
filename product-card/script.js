const previewImg = document.getElementById("preview-img");
const productAnimation = document.getElementById("product-animation");

const viewProduct = document.getElementById("view-product");
const closeView = document.getElementById("close-view");

function openAnimation() {
  viewProduct.classList.add("hide");
  closeView.classList.remove("hide");

  previewImg.classList.add("hide");
  productAnimation.classList.remove("hide");
}

function closeAnimation() {
  viewProduct.classList.remove("hide");
  closeView.classList.add("hide");

  previewImg.classList.remove("hide");
  productAnimation.classList.add("hide");
}

viewProduct.addEventListener("click", openAnimation);
closeView.addEventListener("click", closeAnimation);

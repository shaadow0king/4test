function renderCheckoutPage() {
  const layout = generateDemoCheckoutPageLayout();
  const contentContainer = document.getElementById"content");
  contentContainer.innerHTML = layout;
  state.totalPrice = 0;
  state.x justify-content-between align-items-center mb-3">
          <span class="text-primary">Checkout</span>
          <span class="badge bg-primary rounded-pill">${shopStorageService.getFullNumberOfProductsInCard()}</span>
        </h4>"d-flex justify-content-center">
          <span class="fs-4 text-primary fw-bold">Thanks for ordering!</span>
        </div>
      </div>
    </div>
    <div class="d-none">Code in SHA 1: 9c4218e5d95c7b3dafe8d0053b0a4e8671eb9b62</div>
  `;
}

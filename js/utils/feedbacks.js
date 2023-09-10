// ================= LOADING CONTROLLER ================= //

// --> SECTION

const loadingSections = document.querySelectorAll(".section_loading");

const displaySectionLoading = () => {
  loadingSections.forEach((section) => {
    section.classList.add("active");
    section.classList.remove("inactive");
  });
};

const hideSectionLoading = () => {
  loadingSections.forEach((section) => {
    section.classList.remove("active");
    section.classList.add("inactive");
  });
};

// --> SLIDER

const loadingSliders = document.querySelectorAll(".slider_loading");

const displaySliderLoading = () => {
  loadingSliders.forEach((slider) => {
    slider.classList.add("active");
    slider.classList.remove("inactive");
  });
};

const hideSliderLoading = () => {
  loadingSliders.forEach((slider) => {
    slider.classList.remove("active");
    slider.classList.add("inactive");
  });
};

// --> GAME DETAILS / DESCRIPTION

const loadingDescription = document.querySelector(".description_loading");

const displayDescriptionLoading = () => {
  loadingDescription.classList.add("active");
  loadingDescription.classList.remove("inactive");
};

const hideDescriptionLoading = () => {
  loadingDescription.classList.remove("active");
  loadingDescription.classList.add("inactive");
};

// --> TRADE IN SELECTION

// ================== ERROR CONTROLLER ================== //

// --> SECTION

const errorSections = document.querySelectorAll(".section_error");

const displaySectionError = (errorMessage) => {
  errorSections.forEach((section) => {
    const defaultMessage = "An error occurred while loading the data.";
    section.innerHTML = errorMessage ? errorMessage : defaultMessage;

    section.classList.add("active");
    section.classList.remove("inactive");
  });
};

const hideSectionError = () => {
  errorSections.forEach((section) => {
    section.innerHTML = "";

    section.classList.remove("active");
    section.classList.add("inactive");
  });
};

// --> SLIDER

const errorSliders = document.querySelectorAll(".slider_error");

const displaySliderError = (errorMessage) => {
  errorSliders.forEach((slider) => {
    const defaultMessage = "An error occurred while loading the data.";
    slider.innerHTML = errorMessage ? errorMessage : defaultMessage;

    slider.classList.add("active");
    slider.classList.remove("inactive");
  });
};

const hideSliderError = () => {
  errorSliders.forEach((slider) => {
    slider.innerHTML = "";

    slider.classList.remove("active");
    slider.classList.add("inactive");
  });
};

// --> GAME DETAILS / DESCRIPTION

const errorDescription = document.querySelector(".description_error");

const displayDescriptionError = () => {
  errorDescription.classList.add("active");
  errorDescription.classList.remove("inactive");
};

const hideDescriptionError = () => {
  errorDescription.classList.remove("active");
  errorDescription.classList.add("inactive");
};

// --> TRADE IN SELECTION

export {
  // Loading Functions Export
  displaySectionLoading,
  hideSectionLoading,
  displaySliderLoading,
  hideSliderLoading,
  displayDescriptionLoading,
  hideDescriptionLoading,

  // Errors Functions Export
  displaySectionError,
  hideSectionError,
  displaySliderError,
  hideSliderError,
  displayDescriptionError,
  hideDescriptionError,
};

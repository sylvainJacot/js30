// To make Sass (or, specifically, SCSS in this case) variables available to JavaScript, we need to “export” them.
// Then we import the Sass file file into JavaScript, giving us access to the variables defined in the file.
// import variables from "../scss/01-config/variables.scss";

const inputs = document.querySelectorAll("input");

function handleUpdate() {
  const suffix = this.dataset.unit || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

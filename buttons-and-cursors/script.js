const buttonPrimary = document.getElementById("primary");
const buttonSecondary = document.getElementById("secondary");
const buttonTertiary = document.getElementById("tertiary");

const primaryLoading = document.getElementById("primary-loading");
const secondaryLoading = document.getElementById("secondary-loading");
const tertiaryLoading = document.getElementById("tertiary-loading");

const primaryMovable = document.getElementById("primary-movable");
const secondaryMovable = document.getElementById("secondary-movable");
const tertiaryMovable = document.getElementById("tertiary-movable");

// Loading

buttonPrimary.addEventListener("click", () => {
  primaryLoading.classList.remove("hide");
	primaryMovable.classList.add("hide");
	buttonPrimary.classList.add("load");
	buttonPrimary.classList.remove("move");

	setTimeout(() => {
    primaryLoading.classList.add("hide");
  }, 1000);

	async function HandlePrimaryMovable() {
		await new Promise(resolve => setTimeout(resolve, 1000));
		primaryMovable.classList.remove("hide");
		buttonPrimary.classList.remove("load");
		buttonPrimary.classList.add("move");
	}

	HandlePrimaryMovable();
});

buttonSecondary.addEventListener("click", () => {
  secondaryLoading.classList.remove("hide");
	secondaryMovable.classList.add("hide");
	buttonSecondary.classList.add("load");
	buttonSecondary.classList.remove("move");

	setTimeout(() => {
    secondaryLoading.classList.add("hide");
  }, 1000);

	async function HandlePrimaryMovable() {
		await new Promise(resolve => setTimeout(resolve, 1000));
		secondaryMovable.classList.remove("hide");
		buttonSecondary.classList.remove("load");
		buttonSecondary.classList.add("move");
	}

	HandlePrimaryMovable();
});

buttonTertiary.addEventListener("click", () => {
  tertiaryLoading.classList.remove("hide");
	tertiaryMovable.classList.add("hide");
	buttonTertiary.classList.add("load");
	buttonTertiary.classList.remove("move");

	setTimeout(() => {
    tertiaryLoading.classList.add("hide");
  }, 1000);

	async function HandlePrimaryMovable() {
		await new Promise(resolve => setTimeout(resolve, 1000));
		tertiaryMovable.classList.remove("hide");
		buttonTertiary.classList.remove("load");
		buttonTertiary.classList.add("move");
	}

	HandlePrimaryMovable();
});

// Movable

buttonPrimary.addEventListener("mousedown", function(event) {
	event.preventDefault();

	let initialX = event.clientX - buttonPrimary.offsetLeft;
	let initialY = event.clientY - buttonPrimary.offsetTop;

	function moveButton(event) {
		buttonPrimary.style.left = event.clientX - initialX + "px";
		buttonPrimary.style.top = event.clientY - initialY + "px";
	}

	document.addEventListener("mousemove", moveButton);

	buttonPrimary.addEventListener("mouseup", () => {
		document.removeEventListener("mousemove", moveButton);
	});
});

buttonSecondary.addEventListener("mousedown", function(event) {
	event.preventDefault();

	let initialX = event.clientX - buttonSecondary.offsetLeft;
	let initialY = event.clientY - buttonSecondary.offsetTop;

	function moveButton(event) {
		buttonSecondary.style.left = event.clientX - initialX + "px";
		buttonSecondary.style.top = event.clientY - initialY + "px";
	}

	document.addEventListener("mousemove", moveButton);

	buttonSecondary.addEventListener("mouseup", () => {
		document.removeEventListener("mousemove", moveButton);
	});
});

buttonTertiary.addEventListener("mousedown", function(event) {
	event.preventDefault();

	let initialX = event.clientX - buttonTertiary.offsetLeft;
	let initialY = event.clientY - buttonTertiary.offsetTop;

	function moveButton(event) {
		buttonTertiary.style.left = event.clientX - initialX + "px";
		buttonTertiary.style.top = event.clientY - initialY + "px";
	}

	document.addEventListener("mousemove", moveButton);

	buttonTertiary.addEventListener("mouseup", () => {
		document.removeEventListener("mousemove", moveButton);
	});
});
const buttonList = document.querySelectorAll(".close-button");

const chickenTab = document.querySelector(".chicken");
const kimchiTab = document.querySelector(".kimchi");
const bibimbapTab = document.querySelector(".bibimbap");
const bulgogiTab = document.querySelector(".bulgogi");
const tteokbokkiTab = document.querySelector(".tteokbokki");

const foodsChicken = document.querySelector(".foods__li:first-child");
const foodsKimchi = document.querySelector(".foods__li:nth-child(2)");
const foodsBibimbap = document.querySelector(".foods__li:nth-child(3)");
const foodsBulgogi = document.querySelector(".foods__li:nth-child(4)");
const foodsTteokbokki = document.querySelector(".foods__li:nth-child(5)");

const toggleTab = (tab) => {
	if (tab[0].classList.contains("hidden") === false) {
		tab[0].classList.add("hidden");
	}
	if (tab[1].classList.contains("hidden") === false) {
		tab[1].classList.add("hidden");
	}
	if (tab[2].classList.contains("hidden") === false) {
		tab[2].classList.add("hidden");
	}
	if (tab[3].classList.contains("hidden") === false) {
		tab[3].classList.add("hidden");
	}
};

foodsChicken.addEventListener("click", () => {
	chickenTab.classList.toggle("hidden");
	toggleTab([kimchiTab, bibimbapTab, bulgogiTab, tteokbokkiTab]);
});

foodsKimchi.addEventListener("click", () => {
	kimchiTab.classList.toggle("hidden");
	toggleTab([chickenTab, bibimbapTab, bulgogiTab, tteokbokkiTab]);
});

foodsBibimbap.addEventListener("click", () => {
	bibimbapTab.classList.toggle("hidden");
	toggleTab([chickenTab, kimchiTab, bulgogiTab, tteokbokkiTab]);
});

foodsBulgogi.addEventListener("click", () => {
	bulgogiTab.classList.toggle("hidden");
	toggleTab([chickenTab, kimchiTab, bibimbapTab, tteokbokkiTab]);
});

foodsTteokbokki.addEventListener("click", () => {
	tteokbokkiTab.classList.toggle("hidden");
	toggleTab([chickenTab, kimchiTab, bibimbapTab, bulgogiTab]);
});

buttonList.forEach((element) => {
	element.addEventListener("click", (event) => {
		const tab = event.currentTarget.parentNode.parentNode;
		tab.classList.toggle("hidden");
	});
});

const tabs = document.querySelectorAll(".country-tab");
tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		tab.classList.toggle("hidden");
	});
});

const china = document.querySelector("#CN");
const japan = document.querySelector("#JP");
const taiwan = document.querySelector("#TW");
const tailand = document.querySelector("#TH");
const malaysia = document.querySelector("#MY");
const indonesia = document.querySelector("#ID");
const india = document.querySelector("#IN");
const vietnam = document.querySelector("#VN");
const australia = document.querySelector("#AU");
const usa = document.querySelector("#US");
const brazil = document.querySelector("#BR");

const france = document.querySelector("#FR");
const uk = document.querySelector("#GB");
const russia = document.querySelector("#RU");
const turkey = document.querySelector("#TR");
const uae = document.querySelector("#AE");
const southafrica = document.querySelector("#ZA");

china.addEventListener("click", () => {
	const chinaTab = document.querySelector(".country-tab--china");
	chinaTab.classList.toggle("hidden");
});

japan.addEventListener("click", () => {
	const japanTab = document.querySelector(".country-tab--japan");
	japanTab.classList.toggle("hidden");
});
taiwan.addEventListener("click", () => {
	const taiwanTab = document.querySelector(".country-tab--taiwan");
	taiwanTab.classList.toggle("hidden");
});
tailand.addEventListener("click", () => {
	const tailandTab = document.querySelector(".country-tab--tailand");
	tailandTab.classList.toggle("hidden");
});
malaysia.addEventListener("click", () => {
	const malaysiaTab = document.querySelector(".country-tab--malaysia");
	malaysiaTab.classList.toggle("hidden");
});
indonesia.addEventListener("click", () => {
	const indonesiaTab = document.querySelector(".country-tab--indonesia");
	indonesiaTab.classList.toggle("hidden");
});
india.addEventListener("click", () => {
	const indiaTab = document.querySelector(".country-tab--india");
	indiaTab.classList.toggle("hidden");
});
vietnam.addEventListener("click", () => {
	const vietnamTab = document.querySelector(".country-tab--vietnam");
	vietnamTab.classList.toggle("hidden");
});
australia.addEventListener("click", () => {
	const australiaTab = document.querySelector(".country-tab--aust");
	australiaTab.classList.toggle("hidden");
});
usa.addEventListener("click", () => {
	const usaTab = document.querySelector(".country-tab--usa");
	usaTab.classList.toggle("hidden");
});
brazil.addEventListener("click", () => {
	const brazilTab = document.querySelector(".country-tab--brazil");
	brazilTab.classList.toggle("hidden");
});

france.addEventListener("click", () => {
	const franceTab = document.querySelector(".country-tab--france");
	franceTab.classList.toggle("hidden");
});
uk.addEventListener("click", () => {
	const ukTab = document.querySelector(".country-tab--uk");
	ukTab.classList.toggle("hidden");
});
russia.addEventListener("click", () => {
	const russiaTab = document.querySelector(".country-tab--russia");
	russiaTab.classList.toggle("hidden");
});
turkey.addEventListener("click", () => {
	const turkeyTab = document.querySelector(".country-tab--turkey");
	turkeyTab.classList.toggle("hidden");
});
uae.addEventListener("click", () => {
	const uaeTab = document.querySelector(".country-tab--uae");
	uaeTab.classList.toggle("hidden");
});
southafrica.addEventListener("click", () => {
	const southafricaTab = document.querySelector(".country-tab--sa");
	southafricaTab.classList.toggle("hidden");
});

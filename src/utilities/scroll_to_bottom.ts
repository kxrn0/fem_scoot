export default function scroll_to_bottom() {
  const pseudofooter = document.querySelector(".pseudofooter");

  pseudofooter?.scrollIntoView({ behavior: "smooth" });
}

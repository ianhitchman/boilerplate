// Import all Bootstrap plugins, or select individually
import * as bootstrap from "bootstrap";
import ReactDOM from "react-dom";
import Test from "./test.svelte";

const test = new Test({
  target: document.getElementById("root"),
});

document.body.onscroll = function () {
  let header = document.querySelector("header");
  let scrollPosition = window.scrollY;
  if (scrollPosition > 70) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};
document.querySelector(".nav-burger-btn").onclick = function (e) {
  let nav = document.querySelector("body nav");
  let btn = document.querySelector(".nav-burger-btn");
  nav.classList.toggle("active");
  btn.classList.toggle("active");
  return false;
};

// const App = () => {
//   return (
//     <>
//       <h1>Page title</h1>
//       <h2>Subheading title</h2>
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
//         consequuntur sint similique dolorum consectetur molestiae quo culpa
//         odit, perspiciatis laboriosam iusto. In earum quam repellat autem,
//         maiores tempora ex perferendis.
//       </p>
//       <h2>Subheading title</h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse officia
//         velit explicabo ratione labore, nesciunt fuga aliquam. Dolore ipsam odio
//         minima laboriosam maiores, blanditiis, eligendi enim aspernatur, tempore
//         minus sequi.
//       </p>
//     </>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

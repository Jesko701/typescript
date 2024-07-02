// any is bad
// ! bad implementation
let hero;
function getHero() {
  return "thor";
}
hero = getHero();

// * good implementation
let hero1: string;
function getHero1() {
  return "thor";
}
hero1 = getHero1();

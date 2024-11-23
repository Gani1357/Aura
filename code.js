var aura = 27;
var x = 50;
var y = 275;
onEvent("gain", "click", function( ) {
  x = x + 5;
  y = y - 2.5;
  aura = aura + 27;
  setProperty("image4", "height", x);
  setProperty("image4", "y", y);
  setText("aura", aura);
});
onEvent("lose", "click", function( ) {
  setProperty("image4", "height", 0);
  setProperty("image4", "y", 0);
  setText("aura", "-999");
  x = 0;
  y = 0;
  aura = 0;
  setProperty("gain", "hidden", true);
});

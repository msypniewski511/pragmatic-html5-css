<script>
  // Pobranie kodu
  var zminna = window.prompt("Wklej kod", '');
  tab = zmienna;
  for (i = 0; i < tab.length; i++) {
    if (tab[i] == " ") {
        tab[i] = "&nbsp;";
    } else if(tab[i] == "<") {
        tab[i] = "&lt;";
    } else if (tab[i] == ">") {
        tab[i] = "&rt;";
    }
}
alert(tab);
</script>
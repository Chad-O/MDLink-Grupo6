/*
Sort Table.
Inicia recibiendo el Id de la tabla.
En el momento inicial se quiere hacer el cambio así que switching queda en true.
Una vez que entre a la parte que lo modifica se cambia a falso porque ya no se requiere el cambio.
La dirección original es ascendente.
*/
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tablaCitas");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
/*
El contador se utiliza en esta parte. La idea es que si se presiona el botón y no
ocurre ningún cambio entonces la dirección se cambia a descendente y se utiliza el
flujo alternativo de la parte superior.
 */
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
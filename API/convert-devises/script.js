const apiKey = "704cccb9bf7b59d7aecb031e";

async function DeviseConvertor(devise1, devise2) {
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${devise1}/${devise2}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const val1 = document.getElementById("Val1").value;
    let convertission = data.conversion_rate * val1;
    let arrondie = Math.round(convertission * 100) / 100;

    document.getElementById("result").textContent =val1 +" " +devise1 +" " +"equivaut a " +arrondie +" " +devise2 +" avec un taux de change a : " +data.conversion_rate;
  } catch (error) {
    console.error("Erreur, devise non trouvé", error);
  }
}

function Valider() {
  const devise1 = document.getElementById("devise1").value;
  const devise2 = document.getElementById("devise2").value;
  DeviseConvertor(devise1, devise2);
}

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

    document.getElementById("result").textContent =arrondie +" " +devise2;
    document.getElementById("taux").textContent =data.conversion_rate;
  } catch (error) {
    console.error("Erreur, devise non trouvé", error);
  }
}

function Valider() {
  const devise1 = document.getElementById("devise1").value;
  const devise2 = document.getElementById("devise2").value;
  if (devise1 === devise2) {
    alert("Selectionner deux devises differentes !!");
  } else if(document.getElementById("Val1").value == "") {
    alert("Veuillez saisir un nombre");
  }else{
    DeviseConvertor(devise1, devise2);
  }


}



function ImgDeviseGauche(){
  let modif = document.getElementById("devise1").value
  console.log(modif);
  document.getElementById("imgDeviseGauche").src = "img/"+ modif +".png";
  document.getElementById("result").innerHTML = "";
  document.getElementById("taux").innerHTML = "";
  document.getElementById("ValMontant").innerHTML = document.getElementById("devise1").value;

}

function ImgDeviseDroite(){
  let modif = document.getElementById("devise2").value
  console.log(modif);
  document.getElementById("imgDeviseDroite").src = "img/"+ modif +".png";
  document.getElementById("result").innerHTML = "";
  document.getElementById("taux").innerHTML = "";

}

function Interchanger(){

  let save1 = document.getElementById("devise1").value;
  let save2 = document.getElementById("devise2").value;

  document.getElementById("devise1").value = save2;
  document.getElementById("devise2").value = save1;
  document.getElementById("result").innerHTML = "";
  document.getElementById("taux").innerHTML = "";
  ImgDeviseGauche()
  ImgDeviseDroite()
}
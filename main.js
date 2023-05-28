function depositar() {
  const saldoAtual = Number(
    document.querySelector('#saldo').innerHTML.replace(',', '.')
  );

  var valorDeposito = Number(document.querySelector('#valor').value);

  var saldoFinal = saldoAtual + valorDeposito;

  document.querySelector('#saldo').innerHTML = saldoFinal
    .toFixed(2)
    .replace('.', ',');
}

function sacar() {
  const saldoAtual = Number(
    document.querySelector('#saldo').innerHTML.replace(',', '.')
    );
    
    var valorDoSaque = Number(document.querySelector('#valor').value);
    if(valorDoSaque > saldoAtual){
      alert("Você não possui esse valor em conta");
      return;
    }

  var saldoFinal = saldoAtual - valorDoSaque;

  document.querySelector('#saldo').innerHTML = saldoFinal
  .toFixed(2)
  .replace('.', ',');
}

function juros(){
  setInterval( () =>{

  const saldoAtual = Number(
    document.querySelector('#saldo').innerHTML.replace(',', '.')
    );

    var saldoFinal = saldoAtual + (saldoAtual * 0.01);

    document.querySelector('#saldo').innerHTML = saldoFinal.toFixed(2).replace('.',',');
    
    
  },5000);
}

juros();
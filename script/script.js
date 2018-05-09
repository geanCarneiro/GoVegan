var paginaReceita = '../receitaTeste.htm';
var receitas = new Array();

receitas.push([
  'Berinjela assada com temperos',
  'Ótima opção pra almoço ou lanche.',
  'berinjela.jpg',
  [
    '1 berinjela',
    '1 cebola media',
    '2 tomates grandes ou 3 pequenos',
    'E azeitona (opcional)'
  ],
  [
    'Cortar a berinjela em rodelas médias e colocar em uma forma untada. Cortar o tomate, cebola e a azeitona em cubinhos.',
    'Temperar com sal, azeite e orégano.',
    'Colocar a mistura em cima das rodelas de berinjela.',
    'Assar durante uns 15 ou 20 minutos em forno médio.'
  ]
]);
receitas.push([
  'Receita 2',
  'descrição da segunda receita',
  'empadao.jpg',
  [
    '1 boca',
    '2 olhos',
    'qualquer coisa'
  ],
  [
    'primeiro passo',
    'segundo passo',
    'n passo'
  ]
]);




// ignorar o que tem embaixo
function loadReceita(index){

    preencherElemComReceita(document, index);

}

function preencherElemComReceita(element, index){

  if(typeof index === 'undefined')
    index = window.location.hash.substring(1);

  if(index == '' || index >= receitas.length){
    preencherElem('nome', 'Sem Receita');
  }

  Array.from(element.getElementsByClassName('nome')).forEach(function(elem) {
    elem.innerHTML = receitas[index][0] + '<br>';
  });

  Array.from(element.getElementsByClassName('desc')).forEach(function(elem) {
    elem.innerHTML = receitas[index][1] + '<br>';
  });

  Array.from(element.getElementsByClassName('image')).forEach(function(elem) {
    elem.src = receitas[index][2];
  });

  Array.from(element.getElementsByClassName('ingredientes')).forEach(function(elem) {
    elem.innerHTML = '';
    receitas[index][3].forEach(function(item){
        elem.innerHTML += '<li>' + item + '</li>';
    });
  });

  Array.from(element.getElementsByClassName('comoFazer')).forEach(function(elem) {
    elem.innerHTML = '';
    receitas[index][3].forEach(function(item){
        elem.innerHTML += '<li>' + item + '</li>';
    });
  });

}

function gerarCards(){
  receitas.forEach(function(item, index){
    write('<div class="card">');
    write(' <div class="imgDisplay">');
    write('   <img class="card-img-top" src="../img/' + item[2] + '">');
    write('  </div>');
    write('  <div class="card-body">');
    write('    <h5 class="card-title">' + item[0] + '</h5>');
    write('    <p class="card-text">' + item[1] + '</p>');
    write('    <a href="javascript:abrirReceita(' + index + ')" class="btn btn-primary">Receita</a>');
    write('  </div>');
    write('</div>');
  });
}

function abrirReceita(index){
  window.location.href = paginaReceita + '#' + index;
}

function preencherElem(classe, inner){
  Array.from(document.getElementsByClassName(classe)).forEach(function(elem) {
    elem.innerHTML = inner + '<br>';
  });
}

function writeln(txt, tag){
  write(txt, tag);
  write('<br>')
}

function write(txt, tag){
  if (typeof tag === 'undefined'){
    document.write(txt);
  } else {
    document.write('<' + tag + '>' + txt + '</' + tag + '>');
  }

}

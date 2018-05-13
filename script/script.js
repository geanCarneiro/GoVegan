var paginaReceita = 'receita.htm';
var paginaListaReceitas = 'receitas.htm';
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
  ],
  'acompanhamento'
]);
receitas.push([
  'Empadão de palmito sem leite e ovos',
  'Uma receita muito saborosa, bem fácil de fazer e não vai nenhum alimento de origem animal!',
  'empadao.jpg',
  [
    '1 pitada de sal',
    '2 colheres de sopa de linhaça de molho em 4 colheres de água por 20 minutos',
    '3 ½ xícaras (chá) de farinha de trigo (de preferência integral)',
    '500 g de gordura vegetal com sal recém-tirada da geladeira',
    'Um fio de azeite de oliva',
    '1 xícara (chá) de molho de tomate',
    '1 cebola média cortada em cubinhos',
    '1 vidro de palmito',
    '1 xícara (chá) de azeitona verde picadinha (opcional)',
    '2 pacotinhos de champignon (opcional)',
    '2 tomates com pele e sem sementes cortadinhos',
    '200 ml da água do vidro de palmito',
    'Temperos a gosto'
  ],
  [
    'Misture um pouco mais da metade da margarina com os demais ingredientes, até dar ponto mexendo com a ponta dos dedos delicadamente, até que consiga apertar e moldar, como se fosse uma massinha de modelar, ou até soltar da mão. Um segredo é ir colocando a margarina aos poucos, até completar a medida ou até dar o ponto. Pode ser que vá um pouquinho mais de farinha. Reserve.',
    'Coloque numa panela um pouco de azeite e a cebola picada e leve ao fogo médio até a cebola murchar',
    'Adicione os tomates cortados, o molho de tomate, os temperos e o sal, leve ao fogo médio e refogue',
    'Quando o tomate já estiver murcho, coloque o palmito (com a água), o champignon, as azeitonas, e espere ferver',
    'Depois de ferver e dar uma engrossada, desligue o fogo e deixe esfriar',
    'Com as mãos, pegue pequenas porções de massa (feita acima) faça bolinhas e estique na palma da mão',
    'Vá colocando as massinhas esticadas numa assadeira untada com margarina (gordura vegetal ou óleo) forrando o fundo e as laterais',
    'Cubra o empadão com bolinhas de massa achatadas lado a lado',
    'leve para assar em forno médio pré-aquecido a 180°C por 30 a 40 minutos'
  ],
  'salgado'
]);
receitas.push([
  'Lasanha de Berinjela',
  'Ideal para um almoço com família ou amigos',
  'lasanha.jpg',
  [
    '1 pacote de massa para lasanha (de sêmola ou integral)',
    '2 latas de molho de tomate',
    '1 tomate',
    '2 cebolas',
    '2 berinjelas grandes',
    '1/2 xic. de farinha de trigo integral',
    '1 colher de azeite de oliva',
    'sal à gosto',
    '3 copos de água',
    '5 colheres de leite de soja em pó',
    '1 colh. de chá de coentro em pó (opcional)',
    '1 colher de sopa de tahine',
    '1/2 xíc. de castanha do pará'
  ],
  [
    'Fazer as berinjelas à milanesa sem fritura',
    'Refogar a cebola com azeite, colocar 1/2 xícara de farinha de trigo, deixar dourar',
    'No liquidificador colocar essa mistura, acrescentar a água, o leite de soja em pó, as castanhas, o coentro, o tahine e o sal à gosto. Bater até ficar homogênio',
    'Levar ao fogo até tomar a consistência de um creme. Reservar',
    'Reforgar a cebola e o tomate com 1 fio de zeite, colocar o molho de tomate. Reservar',
    'Em um pirex grande, fazer as seguintes camadas:'
    + '<ul>'
    + ' <li>Molho Vermelho</li>'
    + ' <li>Massa de lasanha</li>'
    + ' <li>Berinjela à milanesa</li>'
    + ' <li>Molho branco</li>'
    + ' <li>Massa de Lasanha</li>'
    + ' <li>Molho vermelho</li>'
    + ' <li>Berinjela</li>'
    + ' <li>Molho branco</li>'
    + ' <li>Massa de lasanha</li>'
    + ' <li>Molho vermelho</li>'
    + '</ul>'
  ],
  'sobremesa'
]);
receitas.push([
  'Espaguete de abobrinha',
  'Espaguete livre de carne animal',
  'espaguete.jpg',
  [
    'abobrinha (1 abobrinha por pessoa)',
    'rúcula (uma mão cheia)',
    'suco de limão',
    'sal (uma pitada)',
    'castanha-do-pará (um punhado)',
    'alho ou alho-poró ou cebolinha',
    'azeite'
  ],
  [
    'Hidratar a castanha-do-pará por pelo menos 4-5 horas e, em seguida, escorrer a água',
    'Bater no liquidificador: rúcula, suco de limão, azeite, castanha-do-pará, alho e sal',
    'Ralar a abobrinha no sentido do comprimento, acrescentar um pouco do molho e misturar',
    'Despejar sobre a abobrinha (“espaguete”) o restante do molho, mais azeite',
    'finalizar com castanha-do-pará ralada (“queijo parmesão”) e tomate-cereja'
  ],
  'acompanhamento'
]);
receitas.push([
  'Bolinho de quinua com amêndoas',
  'Parece quibe, mas não é :)',
  'bolinho.jpg',
  [
    '1/2 xícara de quinoa',
    '1/2 xícara de PVT (opcional)',
    '1/2 cebola picada',
    'Cheiro verde a gosto',
    '1/2 3 colheres de tapioca',
    '2 dentes de alho amassados',
    '4 colheres de amendoas laminadas',
    'Sal a gosto'
  ],
  [
    'Misturar tudo. Fazer bolinhos com a mão e colocar num frigideira antiaderente. Não precisa usar óleo.'
  ],
  'salgado'
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
    elem.src = '../img/' + receitas[index][2];
  });

  Array.from(element.getElementsByClassName('ingredientes')).forEach(function(elem) {
    elem.innerHTML = '';
    receitas[index][3].forEach(function(item){
        elem.innerHTML += '<li>' + item + '</li>';
    });
  });

  Array.from(element.getElementsByClassName('comoFazer')).forEach(function(elem) {
    elem.innerHTML = '';
    receitas[index][4].forEach(function(item){
        elem.innerHTML += '<li>' + item + '</li>';
    });
  });

}

function gerarCards(cat){
  let msg = '';

  let elems = Array.from(document.getElementsByClassName('cards'));

  if(elems.length > 0){
    receitas.forEach(function(item, index){
      if(cat == '' || item[5] == cat){
        msg += '<div class="card">';
        msg += ' <div class="imgDisplay">';
        msg += '   <img class="card-img-top" src="../img/' + item[2] + '">';
        msg += '  </div>';
        msg += '  <div class="card-body">';
        msg += '    <h5 class="card-title">' + item[0] + '</h5>';
        msg += '    <p class="card-text">' + item[1] + '</p>';
        msg += '    <a href="javascript:abrirReceita(' + index + ')" class="btn btn-primary">Receita</a>';
        msg += '  </div>';
        msg += '</div>';
      }
    });
  }

  elems.forEach(function(elem){
    elem.innerHTML = msg;
  })
}

function abrirReceita(index){
  window.location.href = paginaReceita + '#' + index;
}

function preencherElem(classe, inner){
  Array.from(document.getElementsByClassName(classe)).forEach(function(elem) {
    elem.innerHTML = inner + '<br>';
  });
}

function abrirListaDeReceita(cat) {
  window.location.href = paginaListaReceitas + '#' + cat;
}

function filtrar(cat) {
  if(typeof cat == 'undefined')
    cat = window.location.hash.substring(1);

  Array.from(document.getElementsByClassName('categoria')).forEach(function(elem){
    elem.innerHTML = (cat == '') ? 'Tudo' : cat;
  });

  gerarCards(cat);
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

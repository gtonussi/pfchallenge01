console.log('Hello my swedish friend');

const namesArr = ["Seiya", "Shiryu", "Hyoga", "Shun", "Ikki"];

const numbersArr = [23, 2, 87, 97, 5, 6, 112, 20, 55, 10];

// Challenge #1 

const challenge01btn = document.getElementById('challenge01btn');

challenge01btn.addEventListener('click', e => {
  e.preventDefault();

  const challenge01result = document.getElementById('challenge01result');
  challenge01result.innerHTML = '';

  const ol = document.createElement('ol');
  challenge01result.appendChild(ol);

  namesArr.forEach(name => {
    const li = document.createElement('li');
    li.innerHTML = name;
    ol.appendChild(li);
  });

});

// Challenge #2

const challenge02btn = document.getElementById('challenge02btn');

challenge02btn.addEventListener('click', e => {
  e.preventDefault();

  const challenge02result = document.getElementById('challenge02result');
  challenge02result.innerHTML = '';

  const ol = document.createElement('ol');
  challenge02result.appendChild(ol);

  numbersArr.forEach(number => {
    const li = document.createElement('li');
    li.innerHTML = number;
    ol.appendChild(li);
  });

});

// Challenge #3
const challenge03btn = document.getElementById('challenge03btn');

challenge03btn.addEventListener('click', e => {
  e.preventDefault();

  const newNamesArr = ["Saori",...namesArr];

  const challenge03result = document.getElementById('challenge03result');
  challenge03result.innerHTML = '';

  const ol = document.createElement('ol');
  challenge03result.appendChild(ol);

  newNamesArr.forEach(name => {
    const li = document.createElement('li');
    li.innerHTML = name;
    ol.appendChild(li);
  });

});

//Challenge #4
const challenge04btn = document.getElementById('challenge04btn');

challenge04btn.addEventListener('click', e => {
  e.preventDefault();

  const newNamesArr = [...namesArr, "Saori"];

  const challenge04result = document.getElementById('challenge04result');
  challenge04result.innerHTML = '';

  const ol = document.createElement('ol');
  challenge04result.appendChild(ol);

  newNamesArr.forEach(name => {
    const li = document.createElement('li');
    li.innerHTML = name;
    ol.appendChild(li);
  });

});

// Challenge #5
// I considered "index 3" as position number 4
const challenge05btn = document.getElementById('challenge05btn');

challenge05btn.addEventListener('click', e => {
  e.preventDefault();

  const newNamesArr = [...namesArr];
  newNamesArr.splice(3, 0, "Saori");

  const challenge05result = document.getElementById('challenge05result');
  challenge05result.innerHTML = '';

  const ol = document.createElement('ol');
  challenge05result.appendChild(ol);

  newNamesArr.forEach(name => {
    const li = document.createElement('li');
    li.innerHTML = name;
    ol.appendChild(li);
  });

});

// Challenge #6
const challenge06btnadd = document.getElementById('challenge06btnadd');
const challenge06btnshowall = document.getElementById('challenge06btnshowall');
const challenge06btnshownew = document.getElementById('challenge06btnshownew');
const newName = document.getElementById('newname');

const newNamesArr6 = [...namesArr];

challenge06btnadd.addEventListener('click', e => {
  e.preventDefault();

  newNamesArr6.push(newName.value);
  newName.value = "";

  console.log(newNamesArr6);

});

challenge06btnshowall.addEventListener('click', e => {
  e.preventDefault();

  const challenge06result = document.getElementById('challenge06result');
  challenge06result.innerHTML = '';

  const ol = document.createElement('ol');
  challenge06result.appendChild(ol);

  newNamesArr6.forEach(name => {
    const li = document.createElement('li');
    li.innerHTML = name;
    ol.appendChild(li);
  });

});

challenge06btnshownew.addEventListener('click', e => {
  e.preventDefault();

  const challenge06result = document.getElementById('challenge06result');
  challenge06result.innerHTML = '';

  const ol = document.createElement('ol');
  challenge06result.appendChild(ol);

  const onlynewNamesArr = [...newNamesArr6].filter(e => {
    return !namesArr.includes(e)
  });

  onlynewNamesArr.forEach(name => {
    const li = document.createElement('li');
    li.innerHTML = name;
    ol.appendChild(li);
  });

});

// Challenge #7
const challenge07btn = document.getElementById('challenge07btn');

challenge07btn.addEventListener('click', e => {
  e.preventDefault();

  let sum = 0;

  for (i = 0; i < numbersArr.length; i++) {
    sum += numbersArr[i];
  }

  const challenge07result = document.getElementById('challenge07result');
  challenge07result.innerHTML = '';

  challenge07result.innerHTML = `<ul><li>${sum}</li></ul>`;

});

// Challenge #8
const challenge08btn = document.getElementById('challenge08btn');
const nameToSearch = document.getElementById('nametosearch');

challenge08btn.addEventListener('click', e => {
  const challenge08result = document.getElementById('challenge08result');
  challenge08result.innerHTML = '';
  
  e.preventDefault();

  for (i = 0; i < namesArr.length; i++) {
    if (nameToSearch.value === namesArr[i]) {
      challenge08result.innerHTML = `<ul><li>The name ${nameToSearch.value} exists on the list below, on position ${i + 1}.</li></ul>`;
      break;
    } else {
      challenge08result.innerHTML = `<ul><li>The name ${nameToSearch.value} is not on the list below:</li></ul>`
    }
  };

  const ol = document.createElement('ol');
  challenge08result.appendChild(ol);

  namesArr.forEach(name => {
    const li = document.createElement('li');
    li.innerHTML = name;
    ol.appendChild(li);
  });

});

// Challenge #9
const challenge09btn = document.getElementById('challenge09btn');

challenge09btn.addEventListener('click', e => {
  e.preventDefault();

  const newNamesArr = [...namesArr].sort();

  const challenge09result = document.getElementById('challenge09result');
  challenge09result.innerHTML = '';

  const ol = document.createElement('ol');
  challenge09result.appendChild(ol);

  newNamesArr.forEach(name => {
    const li = document.createElement('li');
    li.innerHTML = name;
    ol.appendChild(li);
  });

});

// Challenge #10
const challenge10btn = document.getElementById('challenge10btn');

challenge10btn.addEventListener('click', e => {
  e.preventDefault();

  const newNumbersArr = [...numbersArr].sort((num1, num2) => num2 - num1);

  const challenge10result = document.getElementById('challenge10result');
  challenge10result.innerHTML = '';

  const ol = document.createElement('ol');
  challenge10result.appendChild(ol);

  newNumbersArr.forEach(name => {
    const li = document.createElement('li');
    li.innerHTML = name;
    ol.appendChild(li);
  });

}); 

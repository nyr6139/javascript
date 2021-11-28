let tableEl = document.createElement('table');

for(let i=1; i <= 9; i++) {
  let trEl = document.createElement('tr');
  for (let j=1; j <=9; j++) {
    let tdEl = document.createElement('td');
    tdEl.append(i * j);
    trEl.append(tdEl);
  }
  tableEl.append(trEl)
}

document.querySelector('body').append(tableEl);
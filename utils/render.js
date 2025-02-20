import studentCard from '../components/studentCard';

const renderToDOM = (divId, content) => {
  document.querySelector(divId).innerHTML = content;
};

const studentsOnDom = (divId, array, house = 'Hogwarts') => {
  let domString = '';
  if (!array.length) {
    domString += `NO ${house.toUpperCase()} STUDENTS`;
  }

  array.forEach((student) => {
    domString += studentCard(student); // uses studentCard component
  });

  renderToDOM(divId, domString);
};

export { renderToDOM, studentsOnDom };

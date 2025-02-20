const houses = [
  { house: 'gryffindor', crest: 'https://static.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png' },
  { house: 'slytherin', crest: 'https://static.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png' },
  { house: 'hufflepuff', crest: 'https://static.wikia.nocookie.net/pottermore/images/5/5e/Hufflepuff_crest.png' },
  { house: 'ravenclaw', crest: 'https://static.wikia.nocookie.net/pottermore/images/4/4f/Ravenclaw_crest.png' }

];

// Store Students and Expelled Students
const students = [];
const voldysArmy = [];

// Function to create a student ID
const createId = (array) => {
  if (array.length > 0) {
    const idArray = array.map((el) => el.id);
    return Math.max(...idArray) + 1;
  } return 0;
};

// Function to add a new student (randomly assigns a house)
const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];

  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');

    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest
    });

    student.value = ''; // reset value of input
  }
};

// Function to expel a student (moves them to Voldy's Army)

const expelStudent = (id) => {
  const index = students.findIndex((student) => student.id === Number(id));
  if (index !== -1) {
    voldysArmy.push(...students.splice(index, 1));
  }
};

export {
  houses, students, voldysArmy, sortStudent, expelStudent
};

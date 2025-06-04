interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const st1: Student = {
  firstName: "Mohamed",
  lastName: "Ayman",
  age: 21,
  location: "Cairo, Egypt",
};
const st2: Student = {
  firstName: "Youssef",
  lastName: "Ayman",
  age: 10,
  location: "Cairo, Egypt",
};

const studentsList = [st1, st2];

let table = document.createElement("table");
document.body.appendChild(table);
studentsList.map((st) => {
  let row = document.createElement("tr");
  let fName = document.createElement("td");
  let loca = document.createElement("td");
  fName.textContent = st.firstName;
  loca.textContent = st.location;
  table.appendChild(row);
  row.appendChild(fName);
  row.appendChild(loca);
});

interface Teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  location: string;
  contract?: boolean;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

function printTeacher(fName: string, lName: string): string {
  return `${fName} ${lName}`;
}

console.log(printTeacher(teacher3.firstName, teacher3.lastName));

interface interStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements interStudentClass {
  constructor(private firstName: string, private lastName: string) {}
  workOnHomework = (): string => {
    return "Currently Working";
  };

  displayName(): string {
    return this.firstName;
  }
}

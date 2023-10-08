const students = [
    { name: 'Ivan', age: 20 },
    { name: 'Petro', age: 30 },
    { name: 'Yulia', age: 25 },
    { name: 'Tanya', age: 27 },
    { name: 'Tanya', age: 30 },
    { name: 'Vasya', age: 20 },
  ];

  console.log(students);

  const res = filter(
    students,
    function(student) {
        console.log(`Функція 1 - массив за умовою`);
      return student.age > 25;
    }
  );

  console.log(res);

  function filter(arr, callback) {
    let j=0;
    let arrRes = [];

    for (let i = 0; i < arr.length; i++) {

      let student = arr[i];

      if (callback(student, i)) {

        arrRes.push(student);
        j++;
      }
    }
    return arrRes;
  }




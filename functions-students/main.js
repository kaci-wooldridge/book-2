const createStudent = (name, grade) =>{
    const newStudent = {
        name: name,
        grade: grade
    }
    return newStudent
}

const jimmyObj = createStudent("jimmy", "third")

const addMathGrade = (student) =>{
    const newGrade = student.math = "B"
    return newGrade
}

const addHistoryGrade = (student) =>{
    const secondGrade = student.history = "C"
    return secondGrade
}

const addScienceGrade = (student) =>{
    const thirdGrade = student.science = "A"
    return thirdGrade
}

const allGrades = (obj) =>{
    addMathGrade(obj)
    addHistoryGrade(obj)
    addScienceGrade(obj)
    return obj
}

console.log(allGrades(jimmyObj))
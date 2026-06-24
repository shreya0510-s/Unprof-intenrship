// Array to store students
let students = [];

function addStudent() {

    const name = document.getElementById("name").value;
    const mark1 = Number(document.getElementById("mark1").value);
    const mark2 = Number(document.getElementById("mark2").value);
    const mark3 = Number(document.getElementById("mark3").value);

    if (
        name === "" ||
        mark1 === 0 ||
        mark2 === 0 ||
        mark3 === 0
    ) {
        alert("Please fill all fields");
        return;
    }

    // Average Calculation
    const average = ((mark1 + mark2 + mark3) / 3).toFixed(2);

    // Pass / Fail
    const status = average >= 40 ? "Pass" : "Fail";

    // Object
    const student = {
        name,
        mark1,
        mark2,
        mark3,
        average,
        status
    };

    // Add to Array
    students.push(student);

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("mark1").value = "";
    document.getElementById("mark2").value = "";
    document.getElementById("mark3").value = "";
}

function displayStudents() {

    const studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        const student = students[i];

        studentList.innerHTML += `
            <div class="student-card">
                <h3>${student.name}</h3>

                <p><strong>Marks:</strong>
                ${student.mark1},
                ${student.mark2},
                ${student.mark3}</p>

                <p><strong>Average:</strong>
                ${student.average}</p>

                <p>
                    <strong>Status:</strong>
                    <span class="${student.status === "Pass" ? "pass" : "fail"}">
                        ${student.status}
                    </span>
                </p>
            </div>
        `;
    }
}
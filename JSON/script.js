// Fetch the student data from the JSON file or a url
// Think of it as js's way of saying "Go, bring this file/data to me!"
// It returns something called a "promise"
// A promise is like a box that will eventually contain the data you requested.
fetch('student.json')
    .then(response => response.json())
    .then(data => {
        // Data is an array of student objects
        // We have the real data from student.json stored inside the variable data
        // We can now go to inside 'data.student' to access the list of students
        // Find a placeholder in our html where we want to put the student info
        // Here we are storing the location in a variable called container
        const container = document.getElementById('student-list');

        data.students.forEach(student => {
            // For every student, we create a new <p> element
            const p = document.createElement('p');

            // We set the text content of the paragraph to include student name, major, and grade
            p.textContent = `${student.name}` (${student.major}) - Grade: ${{student.grade}};
            
            container.appendChild(p);
        })

        .catch(error => console.error('error: ', error));
    })
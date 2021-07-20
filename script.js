// UI VARIABLES
const course_number = document.querySelector("#course-number");
const calc = document.querySelector("#calculator");
const credit = document.querySelector(".course-credit");
const grade = document.querySelector(".grades");

course_number.addEventListener("submit", function(e){
    const num = document.querySelector("#num");
    if (num.value === ""){
        alert("Please Enter Number of Course")
    }
    else {
        course_number.style.display = "none";
        calc.style.display = "flex";
        document.querySelector(".gp-section").style.height = "auto";
        document.querySelector("#calculator").style.marginBottom = "5rem";
        for (let i = 0; i < Number(num.value); i++){
            const credit_input = document.createElement("input");
            credit_input.id = "credit";
            const grade_input = document.createElement("input");
            grade_input.id = "grade";
            credit.appendChild(credit_input);
            grade.appendChild(grade_input);
        }
    }
    
    e.preventDefault();
})
let all_credit = [];
let all_grade = [];
let gradeXcredit = [];
calc.addEventListener("submit", function(e){
    const credits = document.querySelectorAll("#credit");
    const grades = document.querySelectorAll("#grade");
    let credit_sum;
    let grade_sum;
    for (i of credits){
        if (i.value === ""){
            all_credit = 0
            alert(`A Credit Field Missing Calculated GP might be Incorrect`);
            break;
        }
        else{
            all_credit.push(Number(i.value));
        }
        
    }

    for (i of grades){
        
        if (i.value === ""){
            all_grade = 0;
            alert(`A Grade field Missing Calculated GP might be Incorrect`);
            break;
        }
        else {
            if (i.value === "A" || i.value === "a"){
                all_grade.push(5);
            }
            else if (i.value === "B" || i.value === "b"){
                all_grade.push(4);
            }
            else if (i.value === "C" || i.value === "c"){
                all_grade.push(3);
            }
            else if (i.value === "D" || i.value === "d"){
                all_grade.push(2);
            }
            else if (i.value === "E" || i.value === "e"){
                all_grade.push(1);
            }
            else if (i.value === "F" || i.value === "f"){
                all_grade.push(0);
            }
            
        }
    }

    for (let i=0; i<all_grade.length; i++){
        gradeXcredit.push(all_credit[i]*all_grade[i])
    }
    grade_sum = gradeXcredit.reduce((a,b) => a+b, 0);
    credit_sum = all_credit.reduce((a,b) => a+b,0);
    let gp = document.querySelector(".gp-grade");
    gp.innerHTML = `<p>Your GP is - <span> ${Number((grade_sum/credit_sum).toFixed(2))} / 5.0</span></p><a href="">click here to Calculate For Another GP</a>`;

    console.log(credit_sum, grade_sum);
    console.log(gradeXcredit);
    all_credit = [];
    all_grade = [];
    gradeXcredit = [];
    
    e.preventDefault();
})
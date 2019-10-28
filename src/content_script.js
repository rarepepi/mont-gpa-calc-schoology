// import config from './config.json';


// config.gpa_regular
// config.gpa_honors
// config.gpa_ap
// config.half_year_courses
// config.lab_courses
// config.semester_courses









// Start the gpa calcualation on window load

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function onLoad(a) {
  var b = window.onload;
  "function" != typeof window.onload ? window.onload = a : window.onload = function () {
      b && b(),
          a()
  }
}
function calculateGpa() {
  sleep(2000).then(() => { // Wait for javascript on page to load
    // Get the list of classes and the list of grades
    const raw_grades = $(".course-grade-value")
    const raw_courses = $(".gradebook-course-title")
    



    // Validate them to enter into the calcutations
    for(var i = 0; i < raw_grades.length; i++) {
      // Check if there is no grade, then skip it
      if(raw_grades[i].firstChild.className == "no-grade") {
        continue;
      }

      // Check if grade found is for a Health of Phys Ed course, then skip it
      var course_name = raw_courses[i].textContent.split(':')[0];
      if(course_name.includes("Health") || course_name.includes("Physical Ed")) {
        continue;
      }

      var grade_value = raw_grades[i].firstChild.firstChild.textContent
      // Final grade and course should be valid, calcualate credits and quality points
      console.log();
      var credits = []
    }


    // Add them to the master lists for calcualtions


    // Load css animation on dom inject of the new gpa
  })
}

onLoad(calculateGpa);

// $(document).ready(function () {

    
  
//     const grades_and_classes = $("table[class='list']")[0].rows;
  
//     let grades = [];
//     let courses = [];
//     let credits = [];
//     let gpas = [];
//     let total_credits = 0;
//     let qualityPoints = 0;
  
//     const ifGym = (course) => {
  
//       if(course.indexOf("Physical Ed") == -1){
//         return True;
//       }
//       else if(course.indexOf("Health") == -1){
//         return True;
//       }
//       else if(course.indexOf("No Grades") == -1){
//         return True;
//       }
//     };
  
//     for(let i = 1; i < grades_and_classes.length; i+=1){
  
//       if(ifGym(grades_and_classes[i].cells[0].innerText))
//       {
//         courses.push(grades_and_classes[i].cells[0].innerText);
//         grades.push(grades_and_classes[i].cells[2].innerText.replace(/[^A-F+-]/g, ''));
//       }
//     }
  
//     for(let i = 0; i < courses.length; i+=1){
//       if(halfYear.indexOf(courses[i]) > -1){
//         credits.push("2.5");
//         total_credits += 2.5;
//       }
//       else if(labs.indexOf(courses[i]) > -1){
//         credits.push("6");
//         total_credits += 6;
//       }
//       else if(semester.indexOf(courses[i]) > -1){
//         credits.push("3");
//         total_credits += 3;
//       }
//       else{
//         credits.push("5");
//         total_credits += 5;
//       }
//     }
  
//     for(let i = 0; i < courses.length; i+=1){
//       if(courses[i].indexOf("AP") > -1){
//         gpas.push(gpaAp[grades[i]]);
//       }
//       else if(courses[i].indexOf("Honors") > -1){
//         gpas.push(gpaHonors[grades[i]]);
//       }
//       else{
//         gpas.push(gpaRegular[grades[i]]);
//       }
//     }
//     for(let i = 0; i < courses.length; i+=1){
//       qualityPoints += gpas[i] * credits[i];
//     }
//     let gpa = qualityPoints / total_credits;
  
//     if(gpa > 0){
//       $("p[style='text-align: center']").remove();
//       $("#gpa").remove();
//       let html = '<h1 id="gpa" style="color:#ffffff;background-color:#019BC6;height:10px;text-align:center;line-height:100px;width:50px;border-radius:25px;margin:0 auto;margin-top:10px;  box-shadow: 2px 2px 4px rgba(0, 0, 0, .4);"> GPA: ';
//       html += gpa.toFixed(2);
//       html += "</h1>";
//       $('p[class="sectionTitle"]').append($(html));
//       gpaDiv = $("#gpa");
//       gpaDiv.animate({height: '100px', opacity: '0.6'}, "slow");
//       gpaDiv.animate({width: '250px', opacity: '1'}, "fast");
//     }
//   });

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

    let total_credits = 0;
    let quality_points = 0;
    let gpa = 0;


    // Skip calcualtion if grade d.n.e, or is a Gym class, else find the appropriate credits, gpa, and quality points
    for(let i = 0; i < raw_grades.length; i++) {
      // Check if there is no grade, then skip it
      if(raw_grades[i].firstChild.className == "no-grade") {
        continue;
      }

      // Check if grade found is for a Health of Phys Ed course, then skip it
      let course_name = raw_courses[i].textContent.split(':')[0];
      if(course_name.includes("Health") || course_name.includes("Physical Ed")) {
        continue;
      }
      
      // Convert the raw grade value(90%) to a letter grade(A-)
      let grade_value = raw_grades[i].firstChild.firstChild.textContent
      let grade_letter = Helpers.convertGradeValueToLetterGrade(grade_value)

      // Final grade and course should be valid, calcualate credits and quality points
      let course_credits = Helpers.getCreditsForCourse(course_name)
      let course_gpa = Helpers.getGpaForLevelAndGrade(course_name, grade_letter)
      total_credits += course_credits
      quality_points += course_credits * course_gpa

      gpa = quality_points / total_credits;
    }
    console.log(gpa);
    console.log(total_credits);
    console.log(quality_points);


    // Load css animation on dom inject of the new gpa

    // if(gpa > 0){
    //   $("p[style='text-align: center']").remove();
    //   $("#gpa").remove();
    //   let html = '<h1 id="gpa" style="color:#ffffff;background-color:#019BC6;height:10px;text-align:center;line-height:100px;width:50px;border-radius:25px;margin:0 auto;margin-top:10px;  box-shadow: 2px 2px 4px rgba(0, 0, 0, .4);"> GPA: ';
    //   html += gpa.toFixed(2);
    //   html += "</h1>";
    //   $('h2[class="page-title "]').append($(html));
    //   gpaDiv = $("#gpa");
    //   gpaDiv.animate({height: '100px', opacity: '0.6'}, "slow");
    //   gpaDiv.animate({width: '250px', opacity: '1'}, "fast");
    // }
  })
}

onLoad(calculateGpa);

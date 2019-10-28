
let Helpers = (function() {
    let config = {
      "gpa_regular": {
        "A+":"4.3","A":"4.0","A-":"3.7","B+":"3.3","B":"3.0","B-":"2.7",
        "C+":"2.3","C":"2.0","C-":"1.7","D+":"1.3","D":"1.0","D-":"0.7",
        "F":"0.0"
      },
      "gpa_honors": {
          "A+":"4.8","A":"4.5","A-":"4.2","B+":"3.8","B":"3.5","B-":"3.2",
          "C+":"2.8","C":"2.5","C-":"2.2","D+":"1.8","D":"1.5","D-":"1.2",
          "F":"0.0"
      },
      "gpa_ap": {
          "A+":"5.3","A":"5.0","A-":"4.7","B+":"4.3","B":"4.0","B-":"3.7",
          "C+":"3.3","C":"3.0","C-":"2.7","D+":"2.3","D":"2.0","D-":"1.7",
          "F":"0.0"
      },
      "half_year_courses": [
          "Business Law", "Computer Applications", "Entrepreneurship", "Fashion Marketing",
          "Financial Literacy", "International Business", "Sports & Entertainment Management",
          "Computer Science", "Java Honors", "Advanced Java Honors", "Web Design","Creative Writing I",
          "Creative Writing II Honors", "Film Study", "Forensics I", "Forensics II", 
          "Parcc English", "Ceramics I","Ceramics II", "Ceramics III", "Crafts I", "Crafts II",
          "Photography", "Advanced Photography", "Culinary Arts I", "Foods Around the World", 
          "Culinary Arts II", "Child Development I", "Child Development II", "Child Development III",
          "Interior Design I", "Interior Design II", "Introduction to Technology", "Technology II",
          "Strategic Design","Video and Broadcast Production I", "Video and Broadcast Production II",
          "Broadway Workshop", "Math Lab","Parcc Mathematics", "Economics", "Economics Honors",
          "Psychology", "Advanced Psychology", "Sociology"
      ],
      "lab_courses": [
          "Biology", "Biology Enriched", "Biology Honors", "Ap Biology", "Principles in Anatomy",
          "Anatomy & Physiology", "Research in Molecular Biology", "Chemistry", "Chemistry Enriched",
          "Chemistry Honors", "AP Chemistry", "Physics Enriched", "Physics Honors", 
          "AP Physics C: Mechanics", "AP Physics C: Electricity & Magnetism", "AP Environmental Science",
          "Science Research Program I", "Science Research Program II", "Science Research Program III"
      ],
      "semester_courses": ["Forensic Science", "Robotics Engineering"]
    }

    let getCreditsForCourse = function(course_name) {
      if(config.half_year_courses.indexOf(course_name) > -1) {
        return 2.5;
      }
      else if(config.semester_courses.indexOf(course_name) > -1) {
        return 3;
      }
      else if(config.lab_courses.indexOf(course_name) > -1) {
        return 6;
      }
      else {
        return 5;
      }
    }

    let getGpaForLevelAndGrade = function(course_name, grade_letter) {
      if(course_name.indexOf("AP") > -1) {
        return config.gpa_ap[grade_letter];
      }
      else if(course_name.indexOf("Honors") > -1) {
        return config.gpa_honors[grade_letter];
      }
    }

    let convertGradeValueToLetterGrade = function(raw_grade_value) {
      let grade_value = raw_grade_value.replace("%", "") // Remove the percent sign

      if(grade_value <= 100 && grade_value >= 97) {
        return "A+";
      }
      else if(grade_value < 97 && grade_value >= 93) {
        return "A";
      }
      else if(grade_value < 93 && grade_value >= 90) {
        return "A-";
      }
      else if(grade_value < 90 && grade_value >= 87) {
        return "B+";
      }
      else if(grade_value < 87 && grade_value >= 83) {
        return "B";
      }
      else if(grade_value < 83 && grade_value >= 80) {
        return "B-";
      }
      else if(grade_value < 80 && grade_value >= 77) {
        return "C+";
      }
      else if(grade_value < 77 && grade_value >= 73) {
        return "C";
      }
      else if(grade_value < 73 && grade_value >= 70) {
        return "C-";
      }
      else if(grade_value < 70 && grade_value >= 67) {
        return "D+";
      }
      else if(grade_value < 67 && grade_value >= 63) {
        return "D";
      }
      else if(grade_value < 63 && grade_value >= 60) {
        return "D-";
      }
      else if(grade_value < 60) {
        return "F";
      }
    }

    return {
        getCreditsForCourse: getCreditsForCourse,
        getGpaForLevelAndGrade: getGpaForLevelAndGrade,
        convertGradeValueToLetterGrade: convertGradeValueToLetterGrade
    }

})()

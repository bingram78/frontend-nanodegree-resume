/*
This is empty on purpose! Your code to build the resume will go here.
*/
//Biographical information object followed by display function.
var bio = {
    "name": "Blake Ingram",
    "role": "Education and Technology Specialist",
    "contacts":{
        "email": "blakeingram@gmail.com",
        "mobile": "+639199815528",
        "github": "@bingram78",
        "location": "Cebu City, Cebu, Philippines"},
    "welcome": "I am a former teacher looking to utilize my diverse talents to provide better educational technology instruction for all.",
    "picUrl": "images/blake.jpg",
    "skills": ["Teaching and Management", "Educational Technology", "Music"]
}

bio.display = function() {
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.picUrl);
    $("#header").append(formattedBioPic);
    
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName + formattedRole);
    
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    $("#header").append(formattedWelcome);

    for (property in bio.contacts) {
        var formattedContactsTitle = HTMLcontactGeneric.replace("%contact%", property);
        var formattedContacts = formattedContactsTitle.replace("%data%", bio.contacts[property]);
                
        $("#topContacts").append(formattedContacts);
        $("#footerContacts").append(formattedContacts);
    }
    
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills:last").append(formattedSkill);
    }
}

bio.display()

//Work object and display function
var work = {
    "jobs": [
        {
            "title": "Science Teacher",
            "name": "Ipswich High School",
            "location": "Ipswich, MA",
            "responsibilities": "Taught Biology, Chemistry and Earth Science. Provided training in educational technology, particularly related to Google Apps for Education.",
            "years": "2008-2013",
            "url": "http://www.edlinesites.net/pages/Ipswich_High_School"
        },
        {

            "title": "Substitute Teacher",
            "name": "Seattle Public Schools",
            "location": "Seattle, WA",
            "responsibilities": "Substitue teaching in Science and Math",
            "years": "2007-2008",
            "url": "https://www.seattleschools.org/"

        },
        {
            "title": "Sales associate",
            "name": "Outlaw Music Store",
            "location": "Missoula, MT",
            "responsibilities": "Sales and repairs of stringed instruments. Managed inventory and some accounting.",
            "years": "2006-2007",
            "url": "http://www.outlawmusicguitarshop.com/"
        },
        {
            "title": "Administrative assistant",
            "name": "Center for Learning and Teaching in the West (CLTW)",
            "location": "Missoula, MT",
            "responsibilities": "Provided assistance in invoicing, organizational management, and grant functions.",
            "years": "2006-2007",
            "url": "http://www.umt.edu/"
        },
        {
            "title": "Manager",
            "name": "Blue Note Music",
            "location": "Berkeley, CA",
            "responsibilities": "Small business management experience along with sales and instrument repair.",
            "years": "2002-2005",
            "url": "http://www.bluenoteberkeley.com/"
        }	
    ]
}

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].name);
        formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
        var formattedJobCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].responsibilities);
        var formattedEmployment = formattedEmployer + formattedTitle + formattedJobDates
                                +formattedJobCity + formattedJobDescription;

        $(".work-entry:last").append(formattedEmployment);
    }
}

work.display()

//Education object and display function
var education = {
    "schools": [
        {
            "name": "Clemson University",
            "location":"Clemson, SC",
            "major": "Biological Sciences",
            "graduation": "Non-Degree Program",
            "years": "1996-2000",
            "url": "http://www.clemson.edu/"
        },
        {
            "name": "Winthrop University",
            "location": "Rock Hill, SC",
            "major": "Music with minor in General Sciences",
            "graduation": "Bachelor of Arts in Music",
            "years": "2000-2001",
            "url": "http://www.winthrop.edu/"
        },
        {
            "name": "The University of Montana",
            "location": "Missoula, MT",
            "major": "Education - Curriculum and Instruction, Secondary Science",
            "graduation": "Masters in Education: Curriculum and Instruction",
            "years": "2005-2008",
            "url": "http://www.umt.edu/"
        }
        ],
        "onlineCourses": [
        {
            "title": "Intro to Computer Programming Nanodegree",
            "school": "Udacity",
            "url": "http://www.udacity.com",
            "date": "2015-2016"
        }
    ]
}

education.display = function() {
    //FILL IN ONLINE CLASSES FUNCTION
    
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].graduation);
        var formattedYears = HTMLschoolDates.replace("%data%", education.schools[school].years);
        var formattedEducation = formattedSchoolName + formattedLocation + 
                                formattedDegree + formattedYears + formattedMajor

        $(".education-entry:last").append(formattedEducation);
    }
    
    for (course in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        var formattedOnlineCourses = formattedTitle + formattedSchool + formattedDate;

        $(".education-entry:last").append(formattedOnlineCourses);
    }
}

education.display()

//Projects object with function(Need to add more)
var projects = {
    "project": [
        {
            "title": "Intro to HTML and CSS Website",
            "dates": "Oct 2015 - Nov 2015",
            "description": "Entry-Level website highlighting ideas around HTML and CSS",
            "image": "images/website.png"
        },
        {
            "title": "Movie Website",
            "dates": "Dec 2015 - Jan 2015-2016",
            "description": "Created a favorite movie website using Python.",
            "image": "images/moviesite.png"
        }
        ]
    }
    

projects.display = function() {
    for (project in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.project[project].image) {
               var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].image);
               $(".project-entry:last").append(formattedImage);
            }
        }
    }

projects.display()


//locationizer for capturing click locations
function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

//Internationalize Button
function inName() {
    var firstName = bio.name.split(" ",1);
    var lastName = bio.name.slice(6);
    lastName = lastName.toUpperCase();
    return firstName + " " + lastName;
}

$('#main').append(internationalizeButton);

//Display Google Map
$("#mapDiv").append(googleMap);


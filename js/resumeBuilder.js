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
    "welcomeMessage": "I am a former teacher looking to utilize my diverse talents to provide better educational technology instruction for all.",
    "biopic": "images/blake.jpg",
    "skills": ["Teaching and Management", "Educational Technology", "Music"]
};

bio.display = function() {

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName + formattedRole);
    
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    for (var property in bio.contacts) {
        if (bio.contacts.hasOwnProperty(property)) {
            var formattedContactsTitle = HTMLcontactGeneric.replace("%contact%", property);
            var formattedContacts = formattedContactsTitle.replace("%data%", bio.contacts[property]);
                
            $("#topContacts").append(formattedContacts);
            $("#footerContacts").append(formattedContacts);
        }
    }
    
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
        if (bio.skills.hasOwnProperty(skill)) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills:last").append(formattedSkill);
        }
    }
};

bio.display();

//Work object and display function
var work = {
    "jobs": [
        {
            "title": "Science Teacher",
            "employer": "Ipswich High School",
            "location": "Ipswich, MA",
            "description": "Taught Biology, Chemistry and Earth Science. Provided training in educational technology, particularly related to Google Apps for Education.",
            "dates": "2008-2013",
            "url": "http://www.edlinesites.net/pages/Ipswich_High_School"
        },
        {

            "title": "Substitute Teacher",
            "employer": "Seattle Public Schools",
            "location": "Seattle, WA",
            "description": "Substitue teaching in Science and Math",
            "dates": "2007-2008",
            "url": "https://www.seattleschools.org/"

        },
        {
            "title": "Sales associate",
            "employer": "Outlaw Music Store",
            "location": "Missoula, MT",
            "description": "Sales and repairs of stringed instruments. Managed inventory and some accounting.",
            "dates": "2006-2007",
            "url": "http://www.outlawmusicguitarshop.com/"
        },
        {
            "title": "Administrative assistant",
            "employer": "Center for Learning and Teaching in the West (CLTW)",
            "location": "Missoula, MT",
            "description": "Provided assistance in invoicing, organizational management, and grant functions.",
            "dates": "2006-2007",
            "url": "http://www.umt.edu/"
        },
        {
            "title": "Manager",
            "employer": "Blue Note Music",
            "location": "Berkeley, CA",
            "description": "Small business management experience along with sales and instrument repair.",
            "dates": "2002-2005",
            "url": "http://www.bluenoteberkeley.com/"
        }	
    ]
};

work.display = function() {
    for (var job in work.jobs) {
        if (work.jobs.hasOwnProperty(job)) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedJobCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedEmployment = formattedEmployer + formattedTitle + formattedJobDates +formattedJobCity + formattedJobDescription;

            $(".work-entry:last").append(formattedEmployment);
        }
    }
};

work.display();

//Education object and display function
var education = {
    "schools": [
        {
            "name": "Clemson University",
            "location":"Clemson, SC",
            "majors": "Biological Sciences",
            "degree": "Non-Degree Program",
            "dates": "1996-2000",
            "url": "http://www.clemson.edu/"
        },
        {
            "name": "Winthrop University",
            "location": "Rock Hill, SC",
            "majors": "Music with minor in General Sciences",
            "degree": "Bachelor of Arts in Music",
            "dates": "2000-2001",
            "url": "http://www.winthrop.edu/"
        },
        {
            "name": "The University of Montana",
            "location": "Missoula, MT",
            "majors": "Education - Curriculum and Instruction, Secondary Science",
            "degree": "Masters in Education: Curriculum and Instruction",
            "dates": "2005-2008",
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
};

education.display = function() {
    //FILL IN ONLINE CLASSES FUNCTION
    
    for (var school in education.schools) {
        if (education.schools.hasOwnProperty(school)) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedYears = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedEducation = formattedSchoolName + formattedLocation + formattedDegree + formattedYears + formattedMajor;

            $(".education-entry:last").append(formattedEducation);
        }  
    }
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        if (education.onlineCourses.hasOwnProperty(course)) {
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            formattedUrl = formattedUrl.replace("#", education.onlineCourses[course].url);
            var formattedOnlineCourses = formattedTitle + formattedSchool + formattedDate + formattedUrl;

            $(".education-entry:last").append(formattedOnlineCourses);
        }
    }
};

education.display();

//Projects object with function(Need to add more)
var projects = {
    "projects": [
        {
            "title": "Intro to HTML and CSS Website",
            "dates": "Oct 2015 - Nov 2015",
            "description": "Entry-Level website highlighting ideas around HTML and CSS",
            "images": ["images/website.png"]
        },
        {
            "title": "Movie Website",
            "dates": "Dec 2015 - Jan 2015-2016",
            "description": "Created a favorite movie website using Python.",
            "images": ["images/moviesite.png"]
        }
    ]
};
    

projects.display = function() {
    for (var project in projects.projects) {
        if (projects.projects.hasOwnProperty(project)) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
};

projects.display();


//locationizer for capturing click locations
function locationizer(work_obj) {
    var locationArray = [];

    for (var job in work_obj.jobs) {
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

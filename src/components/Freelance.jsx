import React, { useEffect, useState } from "react";
import "./freelance.css";
import Header from "./Header";
import axios from "axios";

const baseURL = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile";
// const baseURL = "https://hire.server.elite-professionals.in/api/v1/userProfile";
// const baseURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile";
// const baseURL = "http://localhost:8080/api/v1/userProfile";

const verifyEmail_URL = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/verifyEmail";
// const verifyEmail_URL = "https://hire.server.elite-professionals.in/api/v1/userProfile/verifyEmail";
// const verifyEmail_URL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/verifyEmail";
// const verifyEmail_URL = "http://localhost:8080/api/v1/userProfile/verifyEmail";

const personid = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/return/id?email=";
// const personid = "https://hire.server.elite-professionals.in/api/v1/userProfile/return/id?email=";
// const personid = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/return/id?email=";
// const personid = "http://localhost:8080/api/v1/userProfile/return/id?email=";

const userintroURL = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/freelancer-user-introduction";
// const userintroURL = "https://hire.server.elite-professionals.in/api/v1/userProfile/freelancer-user-introduction";
// const userintroURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/freelancer-user-introduction";
// const userintroURL ="http://localhost:8080/api/v1/userProfile/freelancer-user-introduction";

const experienceURL = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/freelancer-user-experience";
// const experienceURL = "https://hire.server.elite-professionals.in/api/v1/userProfile/freelancer-user-experience";
// const experienceURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/freelancer-user-experience";
// const experienceURL =  "http://localhost:8080/api/v1/userProfile/freelancer-user-experience";

const extraexpURL = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/freelancer-user-extra-exp";
// const extraexpURL = "https://hire.server.elite-professionals.in/api/v1/userProfile/freelancer-user-extra-exp";
// const extraexpURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/freelancer-user-extra-exp";
// const extraexpURL =  "http://localhost:8080/api/v1/userProfile/freelancer-user-extra-exp";

const compleateURL = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/freelancer-user-profile-compleat";
// const compleateURL = "https://hire.server.elite-professionals.in/api/v1/userProfile/freelancer-user-profile-compleat";
// const compleateURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/freelancer-user-profile-compleat";
// const compleateURL =  "http://localhost:8080/api/v1/userProfile/freelancer-user-profile-compleat";

const singleUser = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/single-user-update/";
// const singleUser = "https://hire.server.elite-professionals.in/api/v1/userProfile/single-user-update/";
// const singleUser = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/single-user-update/";
// const singleUser =  "http://localhost:8080/api/v1/userProfile/single-user-update/";

const Freelance = () => {
  const [randomName, setRandomName] = useState("");
  const [randomLastName, setRandomLastName] = useState("");
  const [randomUserName, setRandomUserName] = useState("");
  const [randomEmail, setRandomEmail] = useState("");
  const [randomCountryNames, setRandomCountryNames] = useState("");
  const [randomPasswords, setPasswords] = useState("");
  const [randomInterestedRole, setInterestedRole] = useState("");
  const [randomInterestedLocation, setInterestedLocation] = useState("");
  const [randomTitle, setTitle] = useState("");

  const [randomCurrentSalaryCtc, setCurrentSalaryCtc] = useState("");
  const [randomFixedSalaryCtc, setFixedSalaryCtc] = useState("");
  const [randomExpectedSalaryCtc, setExpectedSalaryCtc] = useState("");
  const [randomMuchExpectedSalaryCtc, setMuchExpectedSalaryCtc] = useState("");
  const [randomStartedPeriod, setStartedPeriod] = useState("");
  const [randomLongPeriod, setLongPeriod] = useState("");
  const [randomNegotiablePeriod, setNegotiablePeriod] = useState("");
  const [randomOkaytoRemoteJob, setOkaytoRemoteJob] = useState("");
  const [randomCitiesNcr, setCitiesNcr] = useState("");
  const [randomDesireCitiesWorking, setDesireCitiesWorking] = useState("");

  const [randomFullTimeJobExperience, setFullTimeJobExperience] = useState("");
  const [randomReportPeople, setReportPeople] = useState("");
  const [randomTopSkill, setTopSkill] = useState("");

  const [randomDescribeJobIda, setDescribeJobIda] = useState("");

  const [randomHearAboutUs, setHearAboutUs] = useState("");
  const [randomJobSearch, setJobSearch] = useState("");
  const [randomGitHub, setGitHub] = useState("");

  // verify email
  const [verificationResult, setVerificationResult] = useState(null);

  // checkbox
  const [isChecked, setIsChecked] = useState(true);

  // dynamic data ke lie
  const [data, setData] = useState({
    fname: "",
    lname: "",
    password: "",
    uname: "",
    email: "",
    country: "",

    interestedRole: "",
    currentLocation: "",
    profile_title: "",

    currentCtc: "",
    fixedCtc: "",
    expectedCtc: "",
    muchExpectedCtc: "",
    startedPeriod: "",
    longPeriod: "",
    negotiablePeriod: "",
    okaytoRemoteJob: "",
    citiesNcr: "",
    desireCitiesWorking: "",
    // experience
    full_time_job_experience: "",
    report_people: "",
    top_skill: "",
    // extras
    achievement: "",
    describeJobIda: "",
    github: "",
    linkedin: "",
    portfolio: "",
    stackOverflow: "",
    // complete
    hear_aboutUs: "",
    hidden_form: "",
    job_search: "",
    ready_to_interview: "",
  });

  const generateRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };
  const RandomStringGenerator = () => {
    const [randomString, setRandomString] = useState("");
    useEffect(() => {
      const randomStr = generateRandomString(10); // Adjust the length as needed
      setRandomString(randomStr);
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts
  };

  const fixedEmail = "ngtmail101@gmail.com";
  const names = ["John", "Jane", "Bob", "Alice", "Sam"];
  const lastNames = ["alice", "dam", "sam", "kumar", "shri"];
  const userNames = ["Johna", "Janeb", "Bobc", "Aliced", "Same"];

  const randomText = generateRandomString(10);
  //const emails =   {randomText:[0]}+{fixedEmail};
  const joinedString = randomText + fixedEmail;
  console.log("joinedString", joinedString);
  //const emailObject = { randomText: randomText, fixedEmail: fixedEmail };
  //console.log('object',emailObject)
  const emails = joinedString;
  console.log("email", emails);

  const countryNames = ["India", "US", "Brazil", "Germany", "Canada"];
  const passwords = ["strange", "strange", "strange", "strange", "strange"];

  // const interestedrole = ['{"role11":"Research Analyst","role12":"Technical Expertise","role13":"Management Skills","role5":"on"}', '{"role1":"on","role2":"on","role11":"Research Analyst","role13":"Management Skills"}', '{"role1":"on","role2":"on","role3":"on","role4":"on"}', '{"role1":"on","role2":"on","role11":"Research Analyst","role13":"Management Skills"}', '{"role1":"on","role2":"on","role3":"on","role4":"on"}'];
  const interestedrole = [
    '{"role1":"on","role2":"on","role3":"on","role4":"on"}',
    '{"role1":"on","role2":"on","role3":"on","role4":"on"}',
    '{"role1":"on","role2":"on","role3":"on","role4":"on"}',
    '{"role1":"on","role2":"on","role3":"on","role4":"on"}',
    '{"role1":"on","role2":"on","role3":"on","role4":"on"}',
  ];
  const interestedlocation = [
    "Delhi/NCR",
    "Out of NCR",
    "Other",
    "Delhi/NCR",
    "Out of NCR",
  ];
  const title = ["NodeJs", "java Js", "php Js", "python Js", "django Js"];

  const currentsalaryCtc = ["$1", "2", "3", "4", "5"];
  const fixedsalaryCtc = ["2", "5", "7", "4", "9"];
  const expectedsalaryCtc = ["3", "6", "4", "8", "1"];
  const muchExpectedsalaryCtc = ["5", "7", "8", "6", "3"];
  const startedperiod = ["No, not resigned", "Yes", "No", "Yes", "No"];
  const longperiod = ["1 week", "2 months", "15 days", "2 months", "1 week"];
  const negotiableperiod = [
    "Yes",
    "No, not resigned",
    "No",
    "Yes",
    "No, not resigned",
  ];
  const okaytoremotejob = [
    "Okay with remote/in-office jobs",
    "No",
    "Okay with remote/in-office jobs",
    "No",
    "Okay with remote/in-office jobs",
  ];
  const citiesNcr = ["Delhi", "Noida", "haryana", "faridabad", "gurgao"];
  const desirecitiesworking = ["haryana", "hisar", "Delhi", "Noida", "punjab"];

  const full_time_job_experience = [
    "0 years",
    "1 years",
    "2 years",
    "3 years",
    "4 years",
  ];
  const report_people = [
    "Not managing a team",
    "Less than 10 people",
    "More than 10 people",
    "Not managing a team",
    "Less than 10 people",
  ];
  const top_skill = [
    '{"html":"Beginner","css":"Intermediate","react":"Advanced"}',
    '{"react":"Intermediate"}',
    '{"sql":"Advanced"}',
    '{"html":"Expert","css":"Expert"}',
    '{"sql":"Expert"}',
  ];

  const describeJobIda = [
    '{"Seed (1-10)":"Ideal","Early (11-50)":"Yes","Mid-Size (51-200)":"No","Large (201-500)":"No","Very-Large (501-1000)":"Yes","Massive (1000+)":"Ideal"}',
    '{"Seed (1-10)":"Ideal","Early (11-50)":"Ideal","Mid-Size (51-200)":"Yes","Large (201-500)":"Yes","Very-Large (501-1000)":"No","Massive (1000+)":"No"}',
    '{"Seed (1-10)":"Ideal","Early (11-50)":"Yes","Mid-Size (51-200)":"No","Large (201-500)":"No","Very-Large (501-1000)":"Yes","Massive (1000+)":"Ideal"}',
    '{"Seed (1-10)":"Ideal","Early (11-50)":"Ideal","Mid-Size (51-200)":"Yes","Large (201-500)":"Yes","Very-Large (501-1000)":"No","Massive (1000+)":"No"}',
    '{"Seed (1-10)":"Ideal","Early (11-50)":"Yes","Mid-Size (51-200)":"No","Large (201-500)":"No","Very-Large (501-1000)":"Yes","Massive (1000+)":"Ideal"}',
  ];

  const hear_aboutUs = [
    "Word of Mouth",
    "Job Portal",
    "Advertisement",
    "Job Portal",
    "Advertisement",
  ];
  const job_search = [
    "Open to new opportunities",
    "variety of opportunities",
    "Open to new opportunities",
    "variety of opportunities",
    "Open to new opportunities",
  ];
  const github = [
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
  ];

  const pickRandomName = () => {
    const randomIndex = Math.floor(
      Math.random() * names.length,
      lastNames.length,
      userNames.length,
      emails.length,
      countryNames.length,
      passwords.length,
      interestedrole.length,
      interestedlocation.length,
      title.length,
      currentsalaryCtc.length,
      fixedsalaryCtc.length,
      expectedsalaryCtc.length,
      muchExpectedsalaryCtc.length,
      startedperiod.length,
      longperiod.length,
      negotiableperiod.length,
      okaytoremotejob.length,
      citiesNcr.length,
      desirecitiesworking.length,
      full_time_job_experience.length,
      report_people.length,
      top_skill.length,
      describeJobIda.length,
      hear_aboutUs.length,
      job_search.length,
      github.length
    );

    const randomName = names[randomIndex];
    setRandomName(randomName);

    const randomLastName = lastNames[randomIndex];
    setRandomLastName(randomLastName);

    const randomUserName = userNames[randomIndex];
    setRandomUserName(randomUserName);

    const randomEmail = emails;
    console.log("random email", randomEmail);
    setRandomEmail(randomEmail);

    const randomCountryNames = countryNames[randomIndex];
    setRandomCountryNames(randomCountryNames);

    const randomPasswords = passwords[randomIndex];
    setPasswords(randomPasswords);

    const randomInterestedRole = interestedrole[randomIndex];
    setInterestedRole(randomInterestedRole);

    const randomInterestedLocation = interestedlocation[randomIndex];
    setInterestedLocation(randomInterestedLocation);

    const randomTitle = title[randomIndex];
    setTitle(randomTitle);

    const randomCurrentSalaryCtc = currentsalaryCtc[randomIndex];
    setCurrentSalaryCtc(randomCurrentSalaryCtc);

    const randomFixedSalaryCtc = fixedsalaryCtc[randomIndex];
    setFixedSalaryCtc(randomFixedSalaryCtc);

    const randomExpectedSalaryCtc = expectedsalaryCtc[randomIndex];
    setExpectedSalaryCtc(randomExpectedSalaryCtc);

    const randomMuchExpectedSalaryCtc = muchExpectedsalaryCtc[randomIndex];
    setMuchExpectedSalaryCtc(randomMuchExpectedSalaryCtc);

    const randomStartedPeriod = startedperiod[randomIndex];
    setStartedPeriod(randomStartedPeriod);

    const randomLongPeriod = longperiod[randomIndex];
    setLongPeriod(randomLongPeriod);

    const randomNegotiablePeriod = negotiableperiod[randomIndex];
    setNegotiablePeriod(randomNegotiablePeriod);

    const randomOkaytoRemoteJob = okaytoremotejob[randomIndex];
    setOkaytoRemoteJob(randomOkaytoRemoteJob);

    const randomCitiesNcr = citiesNcr[randomIndex];
    setCitiesNcr(randomCitiesNcr);

    const randomDesireCitiesWorking = desirecitiesworking[randomIndex];
    setDesireCitiesWorking(randomDesireCitiesWorking);

    const randomFullTimeJobExperience = full_time_job_experience[randomIndex];
    setFullTimeJobExperience(randomFullTimeJobExperience);

    const randomReportPeople = report_people[randomIndex];
    setReportPeople(randomReportPeople);

    const randomTopSkill = top_skill[randomIndex];
    setTopSkill(randomTopSkill);

    const randomDescribeJobIda = describeJobIda[randomIndex];
    setDescribeJobIda(randomDescribeJobIda);

    const randomHearAboutUs = hear_aboutUs[randomIndex];
    setHearAboutUs(randomHearAboutUs);

    const randomJobSearch = job_search[randomIndex];
    setJobSearch(randomJobSearch);

    const randomGitHub = github[randomIndex];
    setGitHub(randomGitHub);
  };

  useEffect(() => {
    pickRandomName();
  }, []);

  const fnameInputChange = (e) => {
    setRandomName(e.target.value);
  };
  const lastInputChange = (e) => {
    setRandomLastName(e.target.value);
  };
  const userInputChange = (e) => {
    setRandomUserName(e.target.value);
  };
  const userEmailChange = (e) => {
    setRandomEmail(e.target.value);
  };
  const userCountryChange = (e) => {
    setRandomCountryNames(e.target.value);
  };
  const userPasswordsChange = (e) => {
    setPasswords(e.target.value);
  };
  const userInterestedRoleChange = (e) => {
    setInterestedRole(e.target.value);
  };
  const userInterestedLocationChange = (e) => {
    setInterestedLocation(e.target.value);
  };
  const userTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const userCurrentSalaryCtcChange = (e) => {
    setCurrentSalaryCtc(e.target.value);
  };
  const userFixedSalaryCtcChange = (e) => {
    setFixedSalaryCtc(e.target.value);
  };
  const userExpectedSalaryCtcChange = (e) => {
    setExpectedSalaryCtc(e.target.value);
  };
  const userMuchExpectedSalaryCtcChange = (e) => {
    setMuchExpectedSalaryCtc(e.target.value);
  };
  const userStartedPeriodChange = (e) => {
    setStartedPeriod(e.target.value);
  };
  const userLongPeriodChange = (e) => {
    setLongPeriod(e.target.value);
  };
  const userNegotiablePeriodChange = (e) => {
    setNegotiablePeriod(e.target.value);
  };
  const userOkaytoRemoteJobChange = (e) => {
    setOkaytoRemoteJob(e.target.value);
  };
  const userCitiesNcrChange = (e) => {
    setCitiesNcr(e.target.value);
  };
  const userDesireCitiesWorkingChange = (e) => {
    setDesireCitiesWorking(e.target.value);
  };

  const userFullTimeJobExperienceChange = (e) => {
    setFullTimeJobExperience(e.target.value);
  };
  const userReportPeopleChange = (e) => {
    setReportPeople(e.target.value);
  };
  const userTopSkillChange = (e) => {
    setTopSkill(e.target.value);
  };

  const userDescribeJobIdaChange = (e) => {
    setDescribeJobIda(e.target.value);
  };

  const userHearAboutUsChange = (e) => {
    setHearAboutUs(e.target.value);
  };

  const userJobSearchChange = (e) => {
    setJobSearch(e.target.value);
  };

  const userGitHubChange = (e) => {
    setGitHub(e.target.value);
  };

  // checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // dynamic data ke lie
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const user_data1 = {
      accountType: "Freelancer",
      country: data.country || randomCountryNames,
      email: data.email || randomEmail,
      firstName: data.fname || randomName,
      lastName: data.lname || randomLastName,
      password: data.password || randomPasswords,
      rules: "agree",
      username: data.uname || randomUserName,
    };
    axios.post(baseURL, user_data1).then((res) => {
      console.log(res);

      const user_data2 = {
        email: data.email || randomEmail,
      };
      // Second API call with data from the first API response
      axios.post(verifyEmail_URL, user_data2).then((verificationResponse) => {
        const isValidEmail = verificationResponse.data.isValid;
        setVerificationResult(
          isValidEmail ? "Valid email address!" : "Invalid email address!"
        );
        // console.log(response);

        // Call the function to submit data to the database only after the checkbox is checked
        // open checked

        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        sleep(10);

        if (isChecked === true) {
          axios.get(personid + user_data2.email).then((personUIDD) => {
            console.log("personid", personUIDD?.data?.result[0]?.PersonID); // Accessing the data from the response

            const config = {
              method: "POST",
              maxBodyLength: Infinity,
              headers: {
                Uid: personUIDD?.data?.result[0]?.PersonID,
                // 'Uid': 'FTO3jYJydLPZThWlHO3ICrf4lh32',
                //'Content-Type':'multipart/form-data',
                "Content-Type": "application/json; charset=UTF-8",
              },
            };

            // userintroURL
            const user_data3 = {
              citiesNcr: data.citiesNcr || randomCitiesNcr,
              currentCtc: data.currentCtc || randomCurrentSalaryCtc,
              currentLocation: data.currentLocation || randomInterestedLocation,
              desireCitiesWorking:
                data.desireCitiesWorking || randomDesireCitiesWorking,
              expectedCtc: data.expectedCtc || randomExpectedSalaryCtc,
              fixedCtc: data.fixedCtc || randomFixedSalaryCtc,
              longPeriod: data.longPeriod || randomLongPeriod,
              muchExpectedCtc:
                data.muchExpectedCtc || randomMuchExpectedSalaryCtc,
              negotiablePeriod: data.negotiablePeriod || randomNegotiablePeriod,
              okaytoRemoteJob: data.okaytoRemoteJob || randomOkaytoRemoteJob,
              profile_title: data.profile_title || randomTitle,
              //role: data.interestedRole || randomInterestedRole,
              role: { role1: "on", role2: "on", role3: "on", role4: "on" },
              // role: {role8:  "on"},
              startedPeriod: data.startedPeriod || randomStartedPeriod,
            };
            axios
              .post(userintroURL, user_data3, config)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.log(error.message);
              });

            // experienceURL
            const experience_data = {
              full_time_job_experience:
                data.full_time_job_experience || randomFullTimeJobExperience,
              report_people: data.report_people || randomReportPeople,
              top_skill: data.top_skill || randomTopSkill,
            };
            axios.post(experienceURL, experience_data, config).then((res) => {
              console.log(res);
            });

            // extraexpURL
            const extra_exp_data = {
              achievement: data.achievement || randomLongPeriod,
              // describeJobIda: data.describeJobIda || randomDescribeJobIda,
              describeJobIda: {
                "Seed (1-10)": "Ideal",
                "Early (11-50)": "Ideal",
                "Mid-Size (51-200)": "Yes",
                "Large (201-500)": "Yes",
                "Very-Large (501-1000)": "No",
                "Massive (1000+)": "No",
              },
              github: data.github || randomGitHub,
              linkedin: data.linkedin || randomGitHub,
              portfolio: data.portfolio || randomGitHub,
              stackOverflow: data.stackOverflow || randomGitHub,
            };
            axios.post(extraexpURL, extra_exp_data, config).then((res) => {
              console.log(res);
            });

            // compleateURL
            const compleate_data = {
              hear_aboutUs: data.hear_aboutUs || randomHearAboutUs,
              hidden_form: data.hidden_form || randomNegotiablePeriod,
              job_search: data.job_search || randomJobSearch,
              ready_to_interview:
                data.ready_to_interview || randomStartedPeriod,
            };
            axios.post(compleateURL, compleate_data, config).then((res) => {
              console.log(res);
            });

            axios
              .put(singleUser + personUIDD?.data?.result[0]?.PersonID)
              .then((res) => {
                console.log("singlrapi", res);
              });
          });
        }
        // close checked

        alert("data inserted");
        window.location.reload();
      });
    });
  };

  return (
    <div>
      <Header />

      <div className="container">
        <form onSubmit={formSubmit}>
          <div className="row jumbotron box8">
            <div className="col-sm-12 mx-t3 mb-4">
              <h2 className="text-center text-info">Freelancer Register</h2>
            </div>
            <div className="col-sm-6 form-group label1">
              <label htmlFor="name-f">First Name</label>
              <input
                type="text"
                className="form-control"
                name="fname"
                id="namef"
                placeholder="Enter your first name."
                required=""
                // value={randomName} onChange={fnameInputChange}
                value={data.fname || randomName}
                // onChange={combinedOnChange}
                // onChange={inputEvent}
                onChange={(event) => {
                  inputEvent(event);
                  fnameInputChange(event);
                }}
              />
            </div>
            <div className="col-sm-6 form-group label1">
              <label htmlFor="name-l">Last name</label>
              <input
                type="text"
                className="form-control"
                name="lname"
                id="namel"
                placeholder="Enter your last name."
                required=""
                //value={randomLastName} onChange={lastInputChange}
                value={data.lname || randomLastName}
                // onChange={inputEvent}
                onChange={(event) => {
                  inputEvent(event);
                  lastInputChange(event);
                }}
              />
            </div>
            <div className="col-sm-6 form-group label1">
              <label htmlFor="pass">Password</label>
              <input
                type="Password"
                name="password"
                className="form-control"
                id="pass"
                placeholder="Enter your password."
                required=""
                // value='strange'
                // randomPasswords
                value={data.password || randomPasswords}
                // onChange={inputEvent}
                onChange={(event) => {
                  inputEvent(event);
                  userPasswordsChange(event);
                }}
              />
            </div>
            <div className="col-sm-6 form-group label1">
              <label htmlFor="name-un">User Name</label>
              <input
                type="text"
                className="form-control"
                name="uname"
                id="name-un"
                placeholder="Enter your user name."
                required=""
                // value={randomUserName} onChange={userInputChange}
                value={data.uname || randomUserName}
                // onChange={inputEvent}
                onChange={(event) => {
                  inputEvent(event);
                  userInputChange(event);
                }}
              />
            </div>
            <div className="col-sm-6 form-group label1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter your email."
                required=""
                // value={randomEmail} onChange={userEmailChange}
                value={data.email || randomEmail}
                // onChange={inputEvent}
                onChange={(event) => {
                  inputEvent(event);
                  userEmailChange(event);
                }}
              />
            </div>
            <div className="col-sm-6 form-group label1">
              <label htmlFor="Country">Country</label>
              <input
                type="test"
                className="form-control"
                name="country"
                id="country"
                placeholder="Enter your Country name."
                required=""
                // value={randomCountryNames} onChange={userCountryChange}
                value={data.country || randomCountryNames}
                // onChange={inputEvent}
                onChange={(event) => {
                  inputEvent(event);
                  userCountryChange(event);
                }}
              />
            </div>
            {/* <div className="col-sm-12 label1">
        <input
          type="checkbox"
          className="form-check d-inline"
          id="chb"
          required=""
        />
        <label htmlFor="chb" className="form-check-label">
          &nbsp;I accept all terms and conditions.
        </label>
      </div>&nbsp; */}
            &nbsp;
            <div className="col-sm-12 label1">
              <input
                type="checkbox"
                className="form-check d-inline"
                id="chb1"
                required=""
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="chb1" className="form-check-label">
                &nbsp;Profile fill up
              </label>
            </div>
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="interestedRole">Interested Role</label>
                <input
                  type="text"
                  className="form-control"
                  name="interestedRole"
                  id="interestedRole"
                  placeholder="Enter your Role"
                  required=""
                  // value={randomInterestedRole} onChange={userInterestedRoleChange}
                  value={data.interestedRole || randomInterestedRole}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userInterestedRoleChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="currentLocation">
                  Where are you currently located?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="currentLocation"
                  id="currentLocation"
                  placeholder="Enter your Location"
                  required=""
                  // value={randomInterestedLocation} onChange={userInterestedLocationChange}
                  value={data.currentLocation || randomInterestedLocation}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userInterestedLocationChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="profile_title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="profile_title"
                  id="profile_title"
                  placeholder="Enter your Title"
                  required=""
                  // value={randomTitle} onChange={userTitleChange}
                  value={data.profile_title || randomTitle}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userTitleChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="currentCtc">What is your current CTC?</label>
                <input
                  type="text"
                  className="form-control"
                  name="currentCtc"
                  id="currentCtc"
                  placeholder=""
                  required=""
                  // value={randomCurrentSalaryCtc} onChange={userCurrentSalaryCtcChange}
                  value={data.currentCtc || randomCurrentSalaryCtc}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userCurrentSalaryCtcChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="fixedCtc">How much of your CTC is fixed?</label>
                <input
                  type="text"
                  className="form-control"
                  name="fixedCtc"
                  id="fixedCtc"
                  placeholder=""
                  required=""
                  // value={randomFixedSalaryCtc} onChange={userFixedSalaryCtcChange}
                  value={data.fixedCtc || randomFixedSalaryCtc}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userFixedSalaryCtcChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="expectedCtc">
                  What is your Minimum Expected Total CTC?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="expectedCtc"
                  id="expectedCtc"
                  placeholder=""
                  required=""
                  // value={randomExpectedSalaryCtc} onChange={userExpectedSalaryCtcChange}
                  value={data.expectedCtc || randomExpectedSalaryCtc}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userExpectedSalaryCtcChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="muchExpectedCtc">
                  Of The total expected CTC , how much do you expect as a fixed?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="muchExpectedCtc"
                  id="muchExpectedCtc"
                  placeholder=""
                  required=""
                  // value={randomMuchExpectedSalaryCtc} onChange={userMuchExpectedSalaryCtcChange}
                  value={data.muchExpectedCtc || randomMuchExpectedSalaryCtc}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userMuchExpectedSalaryCtcChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="startedPeriod">
                  Have you started serving your notice period?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="startedPeriod"
                  id="startedPeriod"
                  placeholder=""
                  required=""
                  // value={randomStartedPeriod} onChange={userStartedPeriodChange}
                  value={data.startedPeriod || randomStartedPeriod}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userStartedPeriodChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="longPeriod">
                  {" "}
                  How long is your notice period?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="longPeriod"
                  id="longPeriod"
                  placeholder=""
                  required=""
                  // value={randomLongPeriod} onChange={userLongPeriodChange}
                  value={data.longPeriod || randomLongPeriod}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userLongPeriodChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="negotiablePeriod">
                  {" "}
                  Is your notice period negotiable
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="negotiablePeriod"
                  id="negotiablePeriod"
                  placeholder=""
                  required=""
                  // value={randomNegotiablePeriod} onChange={userNegotiablePeriodChange}
                  value={data.negotiablePeriod || randomNegotiablePeriod}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userNegotiablePeriodChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="okaytoRemoteJob">
                  Are You okay with remote job?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="okaytoRemoteJob"
                  id="okaytoRemoteJob"
                  placeholder=""
                  required=""
                  // value={randomOkaytoRemoteJob} onChange={userOkaytoRemoteJobChange}
                  value={data.okaytoRemoteJob || randomOkaytoRemoteJob}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userOkaytoRemoteJobChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="citiesNcr">Which cities in Delhi/NCR?</label>
                <input
                  type="text"
                  className="form-control"
                  name="citiesNcr"
                  id="citiesNcr"
                  placeholder=""
                  required=""
                  // value={randomCitiesNcr} onChange={userCitiesNcrChange}
                  value={data.citiesNcr || randomCitiesNcr}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userCitiesNcrChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="desireCitiesWorking">
                  Desired city to work in?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="desireCitiesWorking"
                  id="desireCitiesWorking"
                  placeholder=""
                  required=""
                  // value={randomDesireCitiesWorking} onChange={userDesireCitiesWorkingChange}
                  value={data.desireCitiesWorking || randomDesireCitiesWorking}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userDesireCitiesWorkingChange(event);
                  }}
                />
              </div>
            )}
            {/* experience */}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="full_time_job_experience">
                  How many years do you have a full time experience?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="full_time_job_experience"
                  id="full_time_job_experience"
                  placeholder=""
                  required=""
                  // value={randomFullTimeJobExperience} onChange={userFullTimeJobExperienceChange}
                  value={
                    data.full_time_job_experience || randomFullTimeJobExperience
                  }
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userFullTimeJobExperienceChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="report_people">
                  How many people report to you ? (Directly or Indirectly)
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="report_people"
                  id="report_people"
                  placeholder=""
                  required=""
                  // value={randomReportPeople} onChange={userReportPeopleChange}
                  value={data.report_people || randomReportPeople}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userReportPeopleChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="top_skill">
                  Pick your top frameworks, skills and technologies.(up to 8)
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="top_skill"
                  id="top_skill"
                  placeholder=""
                  required=""
                  // value={randomTopSkill} onChange={userTopSkillChange}
                  value={data.top_skill || randomTopSkill}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userTopSkillChange(event);
                  }}
                />
              </div>
            )}
            {/* extras */}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="achievement">
                  What is your biggest Achievement
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="achievement"
                  id="achievement"
                  placeholder=""
                  required=""
                  value={data.achievement || randomLongPeriod}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userLongPeriodChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="describeJobIda">
                  Would you work at companies of these size?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="describeJobIda"
                  id="describeJobIda"
                  placeholder=""
                  required=""
                  // value={randomDescribeJobIda} onChange={userDescribeJobIdaChange}
                  value={data.describeJobIda || randomDescribeJobIda}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userDescribeJobIdaChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="github">GitHub</label>
                <input
                  type="text"
                  className="form-control"
                  name="github"
                  id="github"
                  placeholder=""
                  required="true"
                  value={data.github || randomGitHub}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userGitHubChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="linkedin">Linkedin</label>
                <input
                  type="text"
                  className="form-control"
                  name="linkedin"
                  id="linkedin"
                  placeholder=""
                  required="true"
                  value={data.linkedin || randomGitHub}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userGitHubChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="portfolio">Portfolio</label>
                <input
                  type="text"
                  className="form-control"
                  name="portfolio"
                  id="portfolio"
                  placeholder=""
                  required="true"
                  value={data.portfolio || randomGitHub}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userGitHubChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="stackOverflow">StackOverflow</label>
                <input
                  type="text"
                  className="form-control"
                  name="stackOverflow"
                  id="stackOverflow"
                  placeholder=""
                  required="true"
                  value={data.stackOverflow || randomGitHub}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userGitHubChange(event);
                  }}
                />
              </div>
            )}
            {/* complete */}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="hear_aboutUs">
                  How did you hear about us ?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="hear_aboutUs"
                  id="hear_aboutUs"
                  placeholder=""
                  required=""
                  // value={randomHearAboutUs} onChange={userHearAboutUsChange}
                  value={data.hear_aboutUs || randomHearAboutUs}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userHearAboutUsChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="job_search">
                  Where are you in your job search ?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="job_search"
                  id="job_search"
                  placeholder=""
                  required=""
                  // value={randomJobSearch} onChange={userJobSearchChange}
                  value={data.job_search || randomJobSearch}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userJobSearchChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="ready_to_interview">
                  When will you be ready to start interviewing with company?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ready_to_interview"
                  id="ready_to_interview"
                  placeholder=""
                  required=""
                  value={data.ready_to_interview || randomStartedPeriod}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userStartedPeriodChange(event);
                  }}
                />
              </div>
            )}
            {isChecked && (
              <div className="col-sm-6 form-group label1">
                <label htmlFor="hidden_form">
                  Why do you want to work in our company?
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="hidden_form"
                  id="hidden_form"
                  placeholder=""
                  required=""
                  value={data.hidden_form || randomNegotiablePeriod}
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userNegotiablePeriodChange(event);
                  }}
                />
              </div>
            )}
            <div className="col-sm-12 form-group mb-0">
              <button type="submit" className="btn btn-primary float-right">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Freelance;

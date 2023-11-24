import React, { useEffect, useState } from "react";
import Header from "../Header";
import "./postjobopening.css";
import axios from "axios";

const personid =
  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/return/id?email=";

const userintroURL =
  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/freelancer-user-introduction";

const experienceURL =
  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/freelancer-user-experience";

const extraexpURL =
  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/freelancer-user-extra-exp";

const compleateURL =
  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/freelancer-user-profile-compleat";

const singleUser =
  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/single-user-update/";

const ProfilefillupFreelancer = () => {
  const [email_id, emailid] = useState("");
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

  // dynamic data ke lie
  const [data, setData] = useState({
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

  const currentsalaryCtc = ["1", "2", "3", "4", "5"];
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
      Math.random() * interestedrole.length,
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

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const personUIDD = await axios.get(personid + email_id);
      const config = {
        method: "POST",
        maxBodyLength: Infinity,
        headers: {
          Uid: personUIDD?.data?.result[0]?.PersonID,
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "*/*",
        },
      };

      const user_data3 = {
        citiesNcr: data.citiesNcr || randomCitiesNcr,
        currentCtc: data.currentCtc || randomCurrentSalaryCtc,
        currentLocation: data.currentLocation || randomInterestedLocation,
        desireCitiesWorking:
          data.desireCitiesWorking || randomDesireCitiesWorking,
        expectedCtc: data.expectedCtc || randomExpectedSalaryCtc,
        fixedCtc: data.fixedCtc || randomFixedSalaryCtc,
        longPeriod: data.longPeriod || randomLongPeriod,
        muchExpectedCtc: data.muchExpectedCtc || randomMuchExpectedSalaryCtc,
        negotiablePeriod: data.negotiablePeriod || randomNegotiablePeriod,
        okaytoRemoteJob: data.okaytoRemoteJob || randomOkaytoRemoteJob,
        profile_title: data.profile_title || randomTitle,
        role: { role1: "on", role2: "on", role3: "on", role4: "on" },
        startedPeriod: data.startedPeriod || randomStartedPeriod,
      };

      const res1 = await axios.post(userintroURL, user_data3, config);
      console.log(res1.data);

      const experience_data = {
        full_time_job_experience:
          data.full_time_job_experience || randomFullTimeJobExperience,
        report_people: data.report_people || randomReportPeople,
        top_skill: data.top_skill || randomTopSkill,
      };
      const res2 = await axios.post(experienceURL, experience_data, config);
      console.log(res2.data);

      const extra_exp_data = {
        achievement: data.achievement || randomLongPeriod,
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
      const res3 = await axios.post(extraexpURL, extra_exp_data, config);
      console.log(res3.data);

      const compleate_data = {
        hear_aboutUs: data.hear_aboutUs || randomHearAboutUs,
        hidden_form: data.hidden_form || randomNegotiablePeriod,
        job_search: data.job_search || randomJobSearch,
        ready_to_interview: data.ready_to_interview || randomStartedPeriod,
      };
      const res4 = await axios.post(compleateURL, compleate_data, config);
      console.log(res4.data);

      const res5 = await axios.put(
        singleUser + personUIDD?.data?.result[0]?.PersonID
      );
      console.log("singlrapi", res5);

      alert("data inserted");
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Header />

      <div className="container">
        <form onSubmit={formSubmit}>
          <div className="column jumbotron box8">
            <h4 className=" text-info mb-5 texth4">
              Profile Fill Up by Existing Freelancer
            </h4>

            <div className="form-group row">
              <label htmlFor="emailid" className="col-sm-5 col-form-label">
                Freelancer Email ID
              </label>
              <div className="col-sm-7">
                <input
                  type="Email"
                  name="emailid"
                  id="emailid"
                  className="form-control"
                  onChange={(event) => emailid(event.target.value)}
                  required="true"
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="interestedRole"
                className="col-sm-5 col-form-label"
              >
                Interested Role
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="interestedRole"
                  id="interestedRole"
                  placeholder="Enter your Role"
                  required=""
                  value={data.interestedRole || randomInterestedRole}
                  onChange={(event) => {
                    inputEvent(event);
                    userInterestedRoleChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="currentLocation"
                className="col-sm-5 col-form-label"
              >
                Where are you currently located?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="currentLocation"
                  id="currentLocation"
                  placeholder="Enter your Location"
                  required=""
                  value={data.currentLocation || randomInterestedLocation}
                  onChange={(event) => {
                    inputEvent(event);
                    userInterestedLocationChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="profile_title"
                className="col-sm-5 col-form-label"
              >
                Title
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="profile_title"
                  id="profile_title"
                  placeholder="Enter your Title"
                  required=""
                  value={data.profile_title || randomTitle}
                  onChange={(event) => {
                    userTitleChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="currentCtc" className="col-sm-5 col-form-label">
                What is your current CTC?
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="currentCtc"
                  id="currentCtc"
                  placeholder=""
                  required=""
                  value={data.currentCtc || randomCurrentSalaryCtc}
                  onChange={(event) => {
                    userCurrentSalaryCtcChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="fixedCtc" className="col-sm-5 col-form-label">
                How much of your CTC is fixed?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="fixedCtc"
                  id="fixedCtc"
                  placeholder=""
                  required=""
                  value={data.fixedCtc || randomFixedSalaryCtc}
                  onChange={(event) => {
                    userFixedSalaryCtcChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="expectedCtc" className="col-sm-5 col-form-label">
                What is your Minimum Expected Total CTC?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="expectedCtc"
                  id="expectedCtc"
                  placeholder=""
                  required=""
                  value={data.expectedCtc || randomExpectedSalaryCtc}
                  onChange={(event) => {
                    userExpectedSalaryCtcChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="muchExpectedCtc"
                className="col-sm-5 col-form-label"
              >
                Of The total expected CTC , how much do you expect as a fixed?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="muchExpectedCtc"
                  id="muchExpectedCtc"
                  placeholder=""
                  required=""
                  value={data.muchExpectedCtc || randomMuchExpectedSalaryCtc}
                  onChange={(event) => {
                    userMuchExpectedSalaryCtcChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="startedPeriod"
                className="col-sm-5 col-form-label"
              >
                Have you started serving your notice period?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="startedPeriod"
                  id="startedPeriod"
                  placeholder=""
                  required=""
                  value={data.startedPeriod || randomStartedPeriod}
                  onChange={(event) => {
                    userStartedPeriodChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="longPeriod" className="col-sm-5 col-form-label">
                How long is your notice period?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="longPeriod"
                  id="longPeriod"
                  placeholder=""
                  required=""
                  value={data.longPeriod || randomLongPeriod}
                  onChange={(event) => {
                    userLongPeriodChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="negotiablePeriod"
                className="col-sm-5 col-form-label"
              >
                Is your notice period negotiable
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="negotiablePeriod"
                  id="negotiablePeriod"
                  placeholder=""
                  required=""
                  value={data.negotiablePeriod || randomNegotiablePeriod}
                  onChange={(event) => {
                    userNegotiablePeriodChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="okaytoRemoteJob"
                className="col-sm-5 col-form-label"
              >
                Are You okay with remote job?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="okaytoRemoteJob"
                  id="okaytoRemoteJob"
                  placeholder=""
                  required=""
                  value={data.okaytoRemoteJob || randomOkaytoRemoteJob}
                  onChange={(event) => {
                    userOkaytoRemoteJobChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="citiesNcr" className="col-sm-5 col-form-label">
                Which cities in Delhi/NCR?
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="citiesNcr"
                  id="citiesNcr"
                  placeholder=""
                  required=""
                  value={data.citiesNcr || randomCitiesNcr}
                  onChange={(event) => {
                    userCitiesNcrChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="desireCitiesWorking"
                className="col-sm-5 col-form-label"
              >
                Desired city to work in?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="desireCitiesWorking"
                  id="desireCitiesWorking"
                  placeholder=""
                  required=""
                  value={data.desireCitiesWorking || randomDesireCitiesWorking}
                  onChange={(event) => {
                    userDesireCitiesWorkingChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="full_time_job_experience"
                className="col-sm-5 col-form-label"
              >
                How many years do you have a full time experience?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="full_time_job_experience"
                  id="full_time_job_experience"
                  placeholder=""
                  required=""
                  value={
                    data.full_time_job_experience || randomFullTimeJobExperience
                  }
                  onChange={(event) => {
                    userFullTimeJobExperienceChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="report_people"
                className="col-sm-5 col-form-label"
              >
                How many people report to you ? (Directly or Indirectly)
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="report_people"
                  id="report_people"
                  placeholder=""
                  required=""
                  value={data.report_people || randomReportPeople}
                  onChange={(event) => {
                    userReportPeopleChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="top_skill" className="col-sm-5 col-form-label">
                Pick your top frameworks, skills and technologies.(up to 8)
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="top_skill"
                  id="top_skill"
                  placeholder=""
                  required=""
                  value={data.top_skill || randomTopSkill}
                  onChange={(event) => {
                    userTopSkillChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="achievement" className="col-sm-5 col-form-label">
                What is your biggest Achievement
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="achievement"
                  id="achievement"
                  placeholder=""
                  required=""
                  value={data.achievement || randomLongPeriod}
                  onChange={(event) => {
                    userLongPeriodChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="describeJobIda"
                className="col-sm-5 col-form-label"
              >
                Would you work at companies of these size?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="describeJobIda"
                  id="describeJobIda"
                  placeholder=""
                  required=""
                  value={data.describeJobIda || randomDescribeJobIda}
                  onChange={(event) => {
                    userDescribeJobIdaChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="github" className="col-sm-5 col-form-label">
                GitHub
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="github"
                  id="github"
                  placeholder=""
                  required="true"
                  value={data.github || randomGitHub}
                  onChange={(event) => {
                    userGitHubChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="linkedin" className="col-sm-5 col-form-label">
                Linkedin
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="linkedin"
                  id="linkedin"
                  placeholder=""
                  required="true"
                  value={data.linkedin || randomGitHub}
                  onChange={(event) => {
                    userGitHubChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="portfolio" className="col-sm-5 col-form-label">
                Portfolio
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="portfolio"
                  id="portfolio"
                  placeholder=""
                  required="true"
                  value={data.portfolio || randomGitHub}
                  onChange={(event) => {
                    userGitHubChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="stackOverflow"
                className="col-sm-5 col-form-label"
              >
                StackOverflow
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="stackOverflow"
                  id="stackOverflow"
                  placeholder=""
                  required="true"
                  value={data.stackOverflow || randomGitHub}
                  onChange={(event) => {
                    userGitHubChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="hear_aboutUs" className="col-sm-5 col-form-label">
                How did you hear about us ?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="hear_aboutUs"
                  id="hear_aboutUs"
                  placeholder=""
                  required=""
                  value={data.hear_aboutUs || randomHearAboutUs}
                  onChange={(event) => {
                    userHearAboutUsChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="job_search" className="col-sm-5 col-form-label">
                Where are you in your job search ?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="job_search"
                  id="job_search"
                  placeholder=""
                  required=""
                  value={data.job_search || randomJobSearch}
                  onChange={(event) => {
                    userJobSearchChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="ready_to_interview"
                className="col-sm-5 col-form-label"
              >
                When will you be ready to start interviewing with company?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="ready_to_interview"
                  id="ready_to_interview"
                  placeholder=""
                  required=""
                  value={data.ready_to_interview || randomStartedPeriod}
                  onChange={(event) => {
                    userStartedPeriodChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="hidden_form" className="col-sm-5 col-form-label">
                Why do you want to work in our company?
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="hidden_form"
                  id="hidden_form"
                  placeholder=""
                  required=""
                  value={data.hidden_form || randomNegotiablePeriod}
                  onChange={(event) => {
                    userNegotiablePeriodChange(event);
                  }}
                />
              </div>
            </div>
            <br />

            <div className=" form-group mb-0">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfilefillupFreelancer;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Header";

const personaldetailsURL =
  "https://elitepro-hi-re-backend.vercel.app/api/v1/client-user-profile/personal-details";

const socialprofileURL =
  "https://elitepro-hi-re-backend.vercel.app/api/v1/client-user-profile/social-profile-link";

const personid =
  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/return/id?email=";

const brocherURL =
  "https://elitepro-hi-re-backend.vercel.app/api/v1/client-user-profile/brochures";

const singleUser =
  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/single-user-update/";


const ProfilefillClientCompany = () => {
  const [email_id, emailid] = useState("");
//   const [randomName, setRandomName] = useState("");
//   const [randomLastName, setRandomLastName] = useState("");
  const [randomUserName, setRandomUserName] = useState("");
//   const [randomEmail, setRandomEmail] = useState("");
//   const [randomCountryNames, setRandomCountryNames] = useState("");
//   const [randomPasswords, setPasswords] = useState("");
  const [randomAddress, setAddress] = useState("");
  const [randomContact, setContact] = useState("");
  const [randomCompanyDetails, setCompanyDetails] = useState("");
  const [randomNoOfEmployees, setNoOfEmployees] = useState("");
  const [randomRegisterType, setRegisterType] = useState("");
  const [randomDescription, setDescription] = useState("");
  const [randomCompanyName, setCompanyName] = useState("");
  const [randomTagline, setTagline] = useState("");
  const [randomGSTINs, setGSTINs] = useState("");
  const [randomGitHub, setGitHub] = useState("");
  const [randomRegistrationNumberCIN, setRegistrationNumberCIN] = useState("");
  const [randomCompanyURL, setCompanyURL] = useState("");
  const [randomCompanyEmail, setCompanyEmail] = useState("");


  const userNames = ["Koyal", "Varun", "Bobc", "Aliced", "Same"];
  const address = [
    "Laxmi Nagar",
    "Preet Vihar",
    "Govindpuram",
    "Vijay Nagar",
    "Raj Nagar",
  ];
  const contact = [
    "1237698764",
    "4565674678",
    "7893498767",
    "3453657876",
    "2348765876",
  ];
  const companydetails = [
    "Accounting and Finance",
    "Customer Service or Operations",
    "Engineering Or Product Management",
    "Human Resource Management",
    "Marketing",
    "Production",
    "Purchasing",
    "Research and Development",
    "Sales",
  ];
  const noofemployees = [
    "Its Just Me",
    "10 - 99",
    "100 - 499 Employees",
    "500 - 1000 Employees",
    "More Than 1000",
  ];
  const companyname = ["TCS", "HCL", "Setu", "Tech-Mahindra", "Motherson"];

  const registertypes = [
    "On Behalf of Company/Business",
    "On Behalf of Company/Business",
    "On Behalf of Company/Business",
    "On Behalf of Company/Business",
    "On Behalf of Company/Business",
  ];

  const taglines = ["NodeJs", "Java", "PHP", "Python", "Django"];
  const gstins = ["69876", "74678", "74987", "34536", "23487"];
  const registrationNumberCINs = ["65476", "98765", "34526", "98456", "34876"];
  const descriptions = ["Testing", "Dummy", "Testing", "Dummy", "Testing"];
  const github = [
    '"https://www.linkedin.com/"',
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
  ];
  const companyURLs = [
    '"https://www.linkedin.com/"',
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
  ];
  const companyemails = [
    "abc@gmail.com",
    "def@gmail.com",
    "ghi@gmail.com",
    "jkl@gmail.com",
    "mno@gmail.com",
  ];

  const pickRandomName = () => {
    const randomIndex = Math.floor(
      Math.random() *
    //   lastNames.length,
      userNames.length,
    //   emails.length,
    //   passwords.length,
    //   countryNames.length,
      address.length,
      contact.length,
      companydetails.length,
      noofemployees.length,
      companyname.length,
      taglines.length,
      gstins.length,
      registertypes.length,
      descriptions.length,
      github.length,
    //   projectlevels.length,
    //   jobdurations.length,
    //   freelancertypes.length,
    //   englishlevels.length,
    //   yearsofexperiencepreferreds.length,
    //   jobcategoriess.length,
    //   projectlocationtypes.length,
    //   jobtitles.length,
    //   workprices.length,
    //   jobdetails.length,
    //   joblocations.length,
      registrationNumberCINs.lenght,
      companyURLs.length,
      companyemails.length
    );

    // const randomName = names[randomIndex];
    // setRandomName(randomName);

    // const randomLastName = lastNames[randomIndex];
    // setRandomLastName(randomLastName);

    const randomUserName = userNames[randomIndex];
    setRandomUserName(randomUserName);

    // const randomEmail = emails;
    // setRandomEmail(randomEmail);

    // const randomPasswords = passwords[randomIndex];
    // setPasswords(randomPasswords);

    // const randomCountryNames = countryNames[randomIndex];
    // setRandomCountryNames(randomCountryNames);

    const randomAddress = address[randomIndex];
    setAddress(randomAddress);

    const randomContact = contact[randomIndex];
    setContact(randomContact);

    const randomCompanyDetails = companydetails[randomIndex];
    setCompanyDetails(randomCompanyDetails);

    const randomNoOfEmployees = noofemployees[randomIndex];
    setNoOfEmployees(randomNoOfEmployees);

    const randomRegisterType = registertypes[randomIndex];
    setRegisterType(randomRegisterType);

    const randomCompanyName = companyname[randomIndex];
    setCompanyName(randomCompanyName);

    const randomTagline = taglines[randomIndex];
    setTagline(randomTagline);

    const randomGSTINs = gstins[randomIndex];
    setGSTINs(randomGSTINs);

    const randomDescription = descriptions[randomIndex];
    setDescription(randomDescription);

    const randomRegistrationNumberCIN = registrationNumberCINs[randomIndex];
    setRegistrationNumberCIN(randomRegistrationNumberCIN);

    const randomCompanyURL = companyURLs[randomIndex];
    setCompanyURL(randomCompanyURL);

    const randomCompanyEmail = companyemails[randomIndex];
    setCompanyEmail(randomCompanyEmail);

    const randomGitHub = github[randomIndex];
    setGitHub(randomGitHub);

    // // clientjobpost
    // const randomProjectLevel = projectlevels[randomIndex];
    // setrandomProjectLevel(randomProjectLevel);

    // const randomJobDuration = jobdurations[randomIndex];
    // setrandomJobDuration(randomJobDuration);

    // const randomFreelancerType = freelancertypes[randomIndex];
    // setrandomFreelancerType(randomFreelancerType);

    // const randomEnglishLevel = englishlevels[randomIndex];
    // setrandomEnglishLevel(randomEnglishLevel);

    // const randomYearsofExperiencePreferred =
    //   yearsofexperiencepreferreds[randomIndex];
    // setrandomYearsofExperiencePreferred(randomYearsofExperiencePreferred);

    // const randomJobCategories = jobcategoriess[randomIndex];
    // setrandomJobCategories(randomJobCategories);

    // const randomProjectLocationType = projectlocationtypes[randomIndex];
    // setrandomProjectLocationType(randomProjectLocationType);

    // const randomJobTitle = jobtitles[randomIndex];
    // setrandomJobTitle(randomJobTitle);

    // const randomWorkPrice = workprices[randomIndex];
    // setrandomWorkPrice(randomWorkPrice);

    // const randomJobDetails = jobdetails[randomIndex];
    // setrandomJobDetails(randomJobDetails);

    // const randomJobLocation = joblocations[randomIndex];
    // setrandomJobLocation(randomJobLocation);
  };

  useEffect(() => {
    pickRandomName();
  }, []);

//   const fnameInputChange = (e) => {
//     setRandomName(e.target.value);
//   };
//   const lastInputChange = (e) => {
//     setRandomLastName(e.target.value);
//   };
  const userInputChange = (e) => {
    setRandomUserName(e.target.value);
  };
//   const userEmailChange = (e) => {
//     setRandomEmail(e.target.value);
//   };
//   const userPasswordsChange = (e) => {
//     setPasswords(e.target.value);
//   };
//   const userCountryChange = (e) => {
//     setRandomCountryNames(e.target.value);
//   };
  const userAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const userContactChange = (e) => {
    setContact(e.target.value);
  };
  const userCompanyDetailsChange = (e) => {
    setCompanyDetails(e.target.value);
  };

  const userNoOfEmployeesChange = (e) => {
    setNoOfEmployees(e.target.value);
  };

  const userRegisterTypeChange = (e) => {
    setRegisterType(e.target.value);
  };

  const userCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const userTaglineChange = (e) => {
    setTagline(e.target.value);
  };

  const userGSTINsChange = (e) => {
    setGSTINs(e.target.value);
  };

  const userDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const userRegistrationNumberCINChange = (e) => {
    setRegistrationNumberCIN(e.target.value);
  };

  const userCompanyURLChange = (e) => {
    setCompanyURL(e.target.value);
  };

  const userCompanyEmailChange = (e) => {
    setCompanyEmail(e.target.value);
  };

  const userGitHubChange = (e) => {
    setGitHub(e.target.value);
  };

  // dynamic data ke lie
  const [data, setData] = useState({
    fname: "",
    lname: "",
    password: "",
    uname: "",
    email: "",
    country: "",

    //   address:"",
    description: "",
    contact: "",
    companydetailsradiovalue: "",
    numberofemployeesvalue: "",
    registerType: "",

    facebook: "",
    github: "",
    instagram: "",
    linkedIn: "",
    othersLink: "",
    stackOverflow: "",
    youtube: "",

    displayName: "",
    companyName: "",
    registrationNumberCIN: "",
    GSTIN: "",
    companyUrl: "",
    tagLine: "",
    addressRegisteredOffice: "",
    companyEmail: "",

    clientBrochures: "",
  });

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
          contact: data.contact || randomContact,
          description: data.description || randomDescription,
          displayName: data.displayName || randomUserName,
          companyName: data.companyName || randomCompanyName,
          registrationNumberCIN:
            data.registrationNumberCIN || randomRegistrationNumberCIN,
          GSTIN: data.GSTIN || randomGSTINs,
          companyUrl: data.companyUrl || randomCompanyURL,
          tagLine: data.tagLine || randomTagline,
          addressRegisteredOffice:
            data.addressRegisteredOffice || randomAddress,
          companyEmail: data.companyEmail || randomCompanyEmail,
          registerType: data.registerType || randomRegisterType,
          companyDetailsRadioValue:
            data.companydetailsradiovalue || randomCompanyDetails,
          numberOfEmployeesValue:
            data.numberofemployeesvalue || randomNoOfEmployees,
        };

        const res1 = await axios.post(personaldetailsURL, user_data3, config);
        console.log(res1.data);

        const social_data = {
          facebook: data.facebook || randomGitHub,
          github: data.github || randomGitHub,
          instagram: data.instagram || randomGitHub,
          linkedIn: data.linkedIn || randomGitHub,
          othersLink: data.othersLink || randomGitHub,
          stackOverflow: data.stackOverflow || randomGitHub,
          youtube: data.youtube || randomGitHub,
        };
        const res2 = await axios.post(socialprofileURL, social_data, config);
        console.log(res2.data);

        const brochures_data = {
          clientBrochures: data.clientBrochures,
        };
        const res3 = await axios.post(brocherURL, brochures_data, config);
        console.log(res3.data);

        const res4 = await axios.put(
          singleUser + personUIDD?.data?.result[0]?.PersonID
        );
        console.log("singlrapi", res4);

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
          {/* <form> */}
          <div className="column jumbotron box8">
            <h4 className=" text-info mb-5 texth4">
              Profile Fill Up by Existing Client With Company
            </h4>

            <div className="form-group row">
              <label htmlFor="emailid" className="col-sm-5 col-form-label">
                Client Email ID
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
              <label htmlFor="registerType" className="col-sm-5 col-form-label">
                RegisterType
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="registerType"
                  id="registerType"
                  placeholder=""
                  required=""
                  value={data.registerType || randomRegisterType}
                  onChange={(event) => {
                    inputEvent(event);
                    userRegisterTypeChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="contact" className="col-sm-5 col-form-label">
                Company Contact
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="contact"
                  id="contact"
                  placeholder=""
                  required=""
                  value={data.contact || randomContact}
                  onChange={(event) => {
                    inputEvent(event);
                    userContactChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="companydetailsradiovalue"
                className="col-sm-5 col-form-label"
              >
                Company Details
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="companydetailsradiovalue"
                  id="companydetailsradiovalue"
                  placeholder=""
                  required=""
                  value={data.companydetailsradiovalue || randomCompanyDetails}
                  onChange={(event) => {
                    inputEvent(event);
                    userCompanyDetailsChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="numberofemployeesvalue"
                className="col-sm-5 col-form-label"
              >
                No. Of Employees
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="numberofemployeesvalue"
                  id="numberofemployeesvalue"
                  placeholder=""
                  required=""
                  value={data.numberofemployeesvalue || randomNoOfEmployees}
                  onChange={(event) => {
                    inputEvent(event);
                    userNoOfEmployeesChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="description" className="col-sm-5 col-form-label">
                Description
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  id="description"
                  placeholder=""
                  required=""
                  value={data.description || randomDescription}
                  onChange={(event) => {
                    inputEvent(event);
                    userDescriptionChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="displayName" className="col-sm-5 col-form-label">
                Display Name
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="displayName"
                  id="displayName"
                  placeholder=""
                  required=""
                  value={data.displayName || randomUserName} //randomUserName
                  // onChange={inputEvent}
                  onChange={(event) => {
                    inputEvent(event);
                    userInputChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="companyName" className="col-sm-5 col-form-label">
                Company Name
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="companyName"
                  id="companyName"
                  placeholder=""
                  required=""
                  value={data.companyName || randomCompanyName}
                  onChange={(event) => {
                    inputEvent(event);
                    userCompanyNameChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="registrationNumberCIN"
                className="col-sm-5 col-form-label"
              >
                Registration Number / CIN
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="registrationNumberCIN"
                  id="registrationNumberCIN"
                  placeholder=""
                  required=""
                  value={
                    data.registrationNumberCIN || randomRegistrationNumberCIN
                  }
                  onChange={(event) => {
                    inputEvent(event);
                    userRegistrationNumberCINChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="companyUrl" className="col-sm-5 col-form-label">
                Company URL
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="companyUrl"
                  id="companyUrl"
                  placeholder=""
                  required=""
                  value={data.companyUrl || randomCompanyURL}
                  onChange={(event) => {
                    inputEvent(event);
                    userCompanyURLChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="GSTIN" className="col-sm-5 col-form-label">
                GSTIN
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="GSTIN"
                  id="GSTIN"
                  placeholder=""
                  required=""
                  value={data.GSTIN || randomGSTINs}
                  onChange={(event) => {
                    inputEvent(event);
                    userGSTINsChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="tagLine" className="col-sm-5 col-form-label">
                Tag Line
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="tagLine"
                  id="tagLine"
                  placeholder=""
                  required=""
                  value={data.tagLine || randomTagline} //userTaglineChange
                  onChange={(event) => {
                    inputEvent(event);
                    userTaglineChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="addressRegisteredOffice"
                className="col-sm-5 col-form-label"
              >
                Address of Registered Office
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="addressRegisteredOffice"
                  id="addressRegisteredOffice"
                  placeholder=""
                  required=""
                  value={data.addressRegisteredOffice || randomAddress}
                  onChange={(event) => {
                    inputEvent(event);
                    userAddressChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="companyEmail" className="col-sm-5 col-form-label">
                company Email
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="companyEmail"
                  id="companyEmail"
                  placeholder=""
                  required=""
                  value={data.companyEmail || randomCompanyEmail}
                  onChange={(event) => {
                    inputEvent(event);
                    userCompanyEmailChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="facebook" className="col-sm-5 col-form-label">
                Facebook
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="facebook"
                  id="facebook"
                  placeholder=""
                  required=""
                  value={data.facebook || randomGitHub}
                  onChange={(event) => {
                    inputEvent(event);
                    userGitHubChange(event);
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
                  required=""
                  value={data.github || randomGitHub}
                  onChange={(event) => {
                    inputEvent(event);
                    userGitHubChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="instagram" className="col-sm-5 col-form-label">
                Instagram
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="instagram"
                  id="instagram"
                  placeholder=""
                  required=""
                  value={data.instagram || randomGitHub}
                  onChange={(event) => {
                    inputEvent(event);
                    userGitHubChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="linkedIn" className="col-sm-5 col-form-label">
                LinkedIn
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="linkedIn"
                  id="linkedIn"
                  placeholder=""
                  required=""
                  value={data.linkedIn || randomGitHub}
                  onChange={(event) => {
                    inputEvent(event);
                    userGitHubChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="othersLink" className="col-sm-5 col-form-label">
                OthersLink
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="othersLink"
                  id="othersLink"
                  placeholder=""
                  required=""
                  value={data.othersLink || randomGitHub}
                  onChange={(event) => {
                    inputEvent(event);
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
                  required=""
                  value={data.stackOverflow || randomGitHub}
                  onChange={(event) => {
                    inputEvent(event);
                    userGitHubChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="youtube" className="col-sm-5 col-form-label">
                YouTube
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="youtube"
                  id="youtube"
                  placeholder=""
                  required=""
                  value={data.youtube || randomGitHub}
                  onChange={(event) => {
                    inputEvent(event);
                    userGitHubChange(event);
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="clientBrochures"
                className="col-sm-5 col-form-label"
              >
                Brochures
              </label>

              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="clientBrochures"
                  id="clientBrochures"
                  placeholder=""
                  required=""
                  value={data.clientBrochures}
                  onChange={inputEvent}
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

export default ProfilefillClientCompany;

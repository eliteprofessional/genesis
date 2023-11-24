import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Header";

const personaldetailsURL =  "https://elitepro-hi-re-backend.vercel.app/api/v1/client-user-profile/personal-details";

const socialprofileURL =  "https://elitepro-hi-re-backend.vercel.app/api/v1/client-user-profile/social-profile-link";

const personid =  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/return/id?email=";

const brocherURL =  "https://elitepro-hi-re-backend.vercel.app/api/v1/client-user-profile/brochures";

const singleUser =  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/single-user-update/";


const ProfilefillClientIndivdual = () => {

  const [email_id, emailid] = useState("");
  const [randomAddress, setAddress] = useState("");
  const [randomContact, setContact] = useState("");
  const [randomCompanyDetails, setCompanyDetails] = useState("");
  const [randomNoOfEmployees, setNoOfEmployees] = useState("");
  const [randomRegisterType, setRegisterType] = useState("");
  const [randomDescription, setDescription] = useState("");
  const [randomGitHub, setGitHub] = useState("");
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
  const registertypes = [
    "As an individual/Proprietor",
    "As an individual/Proprietor",
    "As an individual/Proprietor",
    "As an individual/Proprietor",
    "As an individual/Proprietor",
  ];
  const descriptions = ["Testing", "Dummy", "Testing", "Dummy", "Testing"];
  const github = [
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
    "https://www.linkedin.com/",
  ];

  const pickRandomName = () => {
    const randomIndex = Math.floor(
      Math.random() * address.length,
      contact.length,
      companydetails.length,
      noofemployees.length,
      registertypes.length,
      descriptions.length,
      github.length,
    );

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

    const randomDescription = descriptions[randomIndex];
    setDescription(randomDescription);

    const randomGitHub = github[randomIndex];
    setGitHub(randomGitHub);
  };

  useEffect(() => {
    pickRandomName();
  }, []);

  
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

  const userDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const userGitHubChange = (e) => {
    setGitHub(e.target.value);
  };

  // dynamic data ke lie
  const [data, setData] = useState({
    fname: "",
    lname: "",

    address: "",
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
        firstName: data.fname,
        lastName: data.lname,
        registerType: data.registerType || randomRegisterType,
        address: data.address || randomAddress,
        description: data.description || randomDescription,
        contact: data.contact || randomContact,
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
              Profile Fill Up by Existing Client With Individual
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
              <label htmlFor="address" className="col-sm-5 col-form-label">
                Address
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder=""
                  required=""

                    value={data.address || randomAddress}

                    onChange={(event) => {
                      inputEvent(event);
                      userAddressChange(event);
                    }}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="contact" className="col-sm-5 col-form-label">
                Contact
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

export default ProfilefillClientIndivdual;

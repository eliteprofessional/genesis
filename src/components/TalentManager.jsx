import React, { useEffect, useState } from 'react'
import Header from './Header';
import axios from 'axios';

const baseURL = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile";
// const baseURL = "https://hire.server.elite-professionals.in/api/v1/userProfile";
// const baseURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile";
// const baseURL = "http://localhost:8080/api/v1/userProfile";

const baseURL2 = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/verifyEmail";
// const baseURL2 = "https://hire.server.elite-professionals.in/api/v1/userProfile/verifyEmail";
// const baseURL2 = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/verifyEmail";
// const baseURL2 = "http://localhost:8080/api/v1/userProfile/verifyEmail";

const personaldetailsURL = "https://elitepro-hi-re-backend.vercel.app/api/v1/talent-manager-profile/personal-details-data";
// const personaldetailsURL = "https://hire.server.elite-professionals.in/api/v1/talent-manager-profile/personal-details-data";
// const personaldetailsURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/talent-manager-profile/personal-details-data";
// const personaldetailsURL = "http://localhost:8080/api/v1/talent-manager-profile/personal-details-data";

const personid = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/return/id?email=";
// const personid = "https://hire.server.elite-professionals.in/api/v1/userProfile/return/id?email=";
// const personid = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/return/id?email=";
// const personid = "http://localhost:8080/api/v1/userProfile/return/id?email=";

  const singleUser = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/single-user-update/";
  // const singleUser = "https://hire.server.elite-professionals.in/api/v1/userProfile/single-user-update/";
  // const singleUser = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/single-user-update/";
  // const singleUser = "http://localhost:8080/api/v1/userProfile/single-user-update/";



const TalentManager = () => {

    const [randomName, setRandomName] = useState('');
    const [randomLastName, setRandomLastName] = useState('');
    const [randomUserName, setRandomUserName] = useState('');
    const [randomEmail, setRandomEmail] = useState('');
    const [randomCountryNames, setRandomCountryNames] = useState('');
    const [randomPasswords, setPasswords] = useState('');
    const [randomCurrentLocation, setCurrentLocation] = useState('');
    const [randomCompanyName, setCompanyName] = useState('');
    const [randomNoOfEmployees, setNoOfEmployees] = useState(''); 
    const [randomCompanyEmail, setCompanyEmail] = useState(''); 
    const [randomStateName, setStateName] = useState(''); 
    const [randomDetailAboutYourSelf, setDetailAboutYourSelf] = useState(''); 

    // checkbox
    const [isChecked, setIsChecked] = useState(true);

    console.log('checked',isChecked)

     // verify email
     const [verificationResult, setVerificationResult] = useState(null);

    // dynamic data ke lie
    const [data,setData] = useState({
      fname:"",
      lname:"",
      password:"",
      uname:"",
      email:"",
      country:"",
      currentlocation:"",
      dob:"",
      companyname:"",
      // companydetails:"",
      noofemplyees:"",
      companyemail:"",
      statename:"",
      personalemail:"",
      detailaboutyourself:""
    });

    const generateRandomString = (length) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return result;
    };

    const RandomStringGenerator = () => {
      const [randomString, setRandomString] = useState('');
      useEffect(() => {
        const randomStr = generateRandomString(10); // Adjust the length as needed
        setRandomString(randomStr);
      }, []); // Empty dependency array ensures the effect runs only once when the component mounts
    
    }


    const names = ['John', 'Jane', 'Bob', 'Alice', 'Sam'];
    const lastNames = ['doe', 'boe', 'dane', 'kumar', 'sharma'];
    const userNames = ['Johna', 'Janeb', 'Bobc', 'Aliced', 'Same'];
    
    const fixedEmail = 'ngtmail101@gmail.com';
    const randomText = generateRandomString(10);
    //const emails =   {randomText:[0]}+{fixedEmail};
    const joinedString = randomText + fixedEmail;
    console.log('joinedString',joinedString)
    //const emailObject = { randomText: randomText, fixedEmail: fixedEmail };
    //console.log('object',emailObject)
    const emails = joinedString;
    console.log('email',emails)

    const passwords = ['strange','strange','strange','strange','strange'];
    const countryNames = ['India', 'US', 'Brazil', 'Germany', 'Canada'];

    const currentlocation = ['laxmi nagar', 'preet vihar', 'block', 'block1', 'block2'];
    const companyname = ['tcs', 'hcl','setu', 'techmahindra','motherson'];
    // const companydetails = ['a', 'b', 'c', 'd', 'e'];
    const noofemployees = ['1', '2', '3', '4', '5'];
    const companyemail = ['setu@gmail.com', 'hcl@gmail.com', 'infotech@gmail.com', 'tcs@gmail.com', 'wipro@gmail.com'];
    const statenames = ['UP', 'UP', 'UP', 'UP', 'UP'];
    const detailaboutyourselfs = ['Testing', 'Dummy', 'Testing', 'Dummy', 'Testing'];
    

    const pickRandomName = () => {
        const randomIndex = Math.floor(Math.random() * names.length,lastNames.length,userNames.length,emails.length,passwords.length,countryNames.length,currentlocation.length,companyname.length,noofemployees.length,companyemail.length,statenames.length,detailaboutyourselfs.length);

        const randomName = names[randomIndex];
        setRandomName(randomName);

        const randomLastName = lastNames[randomIndex];
        setRandomLastName(randomLastName);

        const randomUserName = userNames[randomIndex];
        setRandomUserName(randomUserName);

        const randomEmail = emails;
        setRandomEmail(randomEmail);

        const randomPasswords = passwords[randomIndex];
        setPasswords(randomPasswords);

        const randomCountryNames = countryNames[randomIndex];
        setRandomCountryNames(randomCountryNames);

        const randomCurrentLocation = currentlocation[randomIndex];
        setCurrentLocation(randomCurrentLocation);
        
        const randomCompanyName = companyname[randomIndex];
        setCompanyName(randomCompanyName);

        const randomNoOfEmployees = noofemployees[randomIndex];
        setNoOfEmployees(randomNoOfEmployees);

        const randomCompanyEmail = companyemail[randomIndex];
        setCompanyEmail(randomCompanyEmail);

        const randomStateName = statenames[randomIndex];
        setStateName(randomStateName);

        const randomDetailAboutYourSelf = detailaboutyourselfs[randomIndex];
        setDetailAboutYourSelf(randomDetailAboutYourSelf);

      };

      useEffect(() => {
        pickRandomName();
      }, []);

      // checkbox
      const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      };


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
      const userPasswordsChange = (e) => {
        setPasswords(e.target.value);
      };
      const userCountryChange = (e) => {
        setRandomCountryNames(e.target.value);
      };
      const userCurrentLocationChange = (e) => {
        setCurrentLocation(e.target.value);
      };
      const userCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
      };

      const userNoOfEmployeesChange = (e) => {
        setNoOfEmployees(e.target.value);
      };

      const userCompanyEmailChange = (e) => {
        setCompanyEmail(e.target.value);
      };

      const userStateNameChange = (e) => {
        setStateName(e.target.value);
      };

      const userDetailAboutYourSelfChange = (e) => {
        setDetailAboutYourSelf(e.target.value);
      };


      // dynamic data ke lie
      const inputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preVal) =>{
          return{
            ...preVal,
            [name]:value,
          };
        })
      };




      const formSubmit = (e)=>{
        e.preventDefault();
          
          const user_data1 = {
            accountType: "talent_manager",
            country: data.country || randomCountryNames,
            email: data.email || randomEmail,
            firstName: data.fname||randomName,
            lastName: data.lname || randomLastName,
            password: data.password || randomPasswords,
            rules: "agree",
            username: data.uname || randomUserName
        };
          axios.post(baseURL, user_data1).then((res) => {
            console.log(res);
            
            const user_data2 = {     
              email: data.email || randomEmail,
              };
            // Second API call with data from the first API response
                axios.post(baseURL2, user_data2)
                  .then((verificationResponse) => {
                    const isValidEmail = verificationResponse.data.isValid;
                  setVerificationResult(isValidEmail ? 'Valid email address!' : 'Invalid email address!');
                  // console.log(response);
                  // alert('data inserted');

                  // Call the function to submit data to the database only after the checkbox is checked
                  // checkboxsubmitData();

                  if (isChecked === true) {

                    axios.get(personid+user_data2.email)
                          .then((personUIDD) => {
                            console.log('personid',personUIDD?.data?.result[0]?.PersonID); // Accessing the data from the response
                            
                            const config = {
                              method : "POST",
                              headers:{
                                'Uid': personUIDD?.data?.result[0]?.PersonID,
                               // 'Uid': 'FTO3jYJydLPZThWlHO3ICrf4lh32',
                               'Content-Type': 'application/json; charset=UTF-8',
                              }
                            };                          

                          const user_data3 = {
                            cityName: data.currentlocation || randomCurrentLocation,
                            dateOfBirth:data.dob,
                            companyName:data.companyname || randomCompanyName,
                            empId:data.noofemplyees || randomNoOfEmployees,
                            companyEmail:data.companyemail || randomCompanyEmail,
                            stateName:data.statename || randomStateName,
                            personalEmail:data.personalemail || randomCompanyEmail,
                            detailAbutYourself:data.detailaboutyourself || randomDetailAboutYourSelf
                        }; 
  
                        axios.post(personaldetailsURL, user_data3, config ).then((res) => {
                          console.log(res);
                          console.log("config msg",config);
                        });

                        axios.put(singleUser+personUIDD?.data?.result[0]?.PersonID).then((res) => {
                            
                          console.log("singlrapi",res);
                        });
                            
                      })

                  }
                  // close checked

                  alert('data inserted');
                  // Refresh the page after form submission
                  window.location.reload();
                });      
          });
          
      };


  return (
    <div>

    <Header/>

    <div className="container">
  <form onSubmit={formSubmit}>
    <div className="row jumbotron box8" >
      <div className="col-sm-12 mx-t3 mb-4">
        <h2 className="text-center text-info">Talent Manager Register</h2>
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
          value={data.fname || randomName}
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
          value={data.lname || randomLastName}
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
          value={data.password || randomPasswords}
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
          value={data.uname || randomUserName}
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
          value={data.email || randomEmail}
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
          placeholder=""
          required=""
          value={data.country || randomCountryNames}
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
      </div> */}
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
        <label htmlFor="interestedrole">Current Location City Name</label>
        <input
          type="text"
          className="form-control"
          name="currentlocation"
          id="currentlocation_cityname"
          placeholder=""
          required=""
          value={data.currentlocation || randomCurrentLocation}
          onChange={(event) => {
            inputEvent(event);
            userCurrentLocationChange(event);
          }}
        />
      </div>
      )}

      {isChecked && (
        <div className="col-sm-6 form-group label1">
        <label htmlFor="Date">Date Of Birth</label>
        <input
          type="Date"
          name="dob"
          className="form-control"
          id="Date"
          placeholder=""
          required=""
          value={data.dob} 
          onChange={inputEvent}
        />
      </div>      
      )}


      {isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="interestedlocation">Company Name</label>
        <input
          type="text"
          className="form-control"
          name="companyname"
          id="companyname"
          placeholder=""
          required=""
          value={data.companyname || randomCompanyName}
          onChange={(event) => {
            inputEvent(event);
            userCompanyNameChange(event);
          }}
        />
      </div>
      )}

      {/* {isChecked && (
      <div className="col-sm-6 form-group">
        <label htmlFor="title">Company Details</label>
        <input
          type="text"
          className="form-control"
          name="companydetails"
          id="companydetails"
          placeholder="Enter your Title"
          required=""
          // value={randomCompanyDetails} onChange={userCompanyDetailsChange}
          // value={data.c || randomCompanyDetails}
          // // onChange={inputEvent}
          // onChange={(event) => {
          //   inputEvent(event);
          //   userCompanyDetailsChange(event);
          // }}
        />
      </div>
      )} */}

      {isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="title">Employees id</label>
        <input
          type="text"
          className="form-control"
          name="noofemplyees"
          id="noofemplyees_empId"
          placeholder=""
          required=""
          value={data.noofemplyees || randomNoOfEmployees}
          onChange={(event) => {
            inputEvent(event);
            userNoOfEmployeesChange(event);
          }}
        />
      </div>
      )}

      {isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="title">Company Email</label>
        <input
          type="text"
          className="form-control"
          name="companyemail"
          id="companyemail"
          placeholder=""
          required=""
          value={data.companyemail || randomCompanyEmail}
          onChange={(event) => {
            inputEvent(event);
            userCompanyEmailChange(event);
          }}
        />
      </div>
      )}

{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="title">State Name</label>
        <input
          type="text"
          className="form-control"
          name="statename"
          id="statename"
          placeholder=""
          required=""
          value={data.statename || randomStateName}
          onChange={(event) => {
            inputEvent(event);
            userStateNameChange(event);
          }}
        />
      </div>
      )}

{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="title">Personal Email</label>
        <input
          type="text"
          className="form-control"
          name="personalemail"
          id="personalemail"
          placeholder=""
          required=""
          value={data.personalemail || randomCompanyEmail}
          onChange={(event) => {
            inputEvent(event);
            userCompanyEmailChange(event);
          }}
        />
      </div>
      )}

{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="title">Detail About Your Self</label>
        <input
          type="text"
          className="form-control"
          name="detailaboutyourself"
          id="detailaboutyourself"
          placeholder=""
          required=""
          value={data.detailaboutyourself || randomDetailAboutYourSelf}
          onChange={(event) => {
            inputEvent(event);
            userDetailAboutYourSelfChange(event);
          }}
          
        />
      </div>
      )}

      <div className="col-sm-12 form-group mb-0">
        <button type='submit' className="btn btn-primary float-right">Submit</button>
      </div>
    </div>
  </form>
</div>


    </div>
  )
}

export default TalentManager;
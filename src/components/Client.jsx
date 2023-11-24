import React, { useEffect, useState } from 'react'
import Header from './Header';
import axios from 'axios';


const baseURL = "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile";
// const baseURL = "https://hire.server.elite-professionals.in/api/v1/userProfile";
// const baseURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile";
// const baseURL = "http://localhost:8080/api/v1/userProfile";

const verifyEmailURL =  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/verifyEmail";
// const verifyEmailURL = "https://hire.server.elite-professionals.in/api/v1/userProfile/verifyEmail";
// const verifyEmailURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/verifyEmail";
// const verifyEmailURL = "http://localhost:8080/api/v1/userProfile/verifyEmail";

const personaldetailsURL =  "https://elitepro-hi-re-backend.vercel.app/api/v1/client-user-profile/personal-details";
// const personaldetailsURL = "https://hire.server.elite-professionals.in/api/v1/client-user-profile/personal-details";
// const personaldetailsURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/client-user-profile/personal-details";
// const personaldetailsURL = "http://localhost:8080/api/v1/client-user-profile/personal-details";

const socialprofileURL =  "https://elitepro-hi-re-backend.vercel.app/api/v1/client-user-profile/social-profile-link";
// const socialprofileURL = "https://hire.server.elite-professionals.in/api/v1/client-user-profile/social-profile-link";
// const socialprofileURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/client-user-profile/social-profile-link";
// const socialprofileURL = "http://localhost:8080/api/v1/client-user-profile/social-profile-link";

const personid =  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/return/id?email=";
// const personid = "https://hire.server.elite-professionals.in/api/v1/userProfile/return/id?email=";
// const personid = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/return/id?email=";
// const personid = "http://localhost:8080/api/v1/userProfile/return/id?email=";

const brocherURL =  "https://elitepro-hi-re-backend.vercel.app/api/v1/client-user-profile/brochures";
// const brocherURL = "https://hire.server.elite-professionals.in/api/v1/client-user-profile/brochures";
// const brocherURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/client-user-profile/brochures";
// const brocherURL = "http://localhost:8080/api/v1/client-user-profile/brochures";

const singleUser =  "https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/single-user-update/";
// const singleUser = "https://hire.server.elite-professionals.in/api/v1/userProfile/single-user-update/";
// const singleUser = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/userProfile/single-user-update/";
// const singleUser = "http://localhost:8080/api/v1/userProfile/single-user-update/";

const postjobURL =  "https://elitepro-hi-re-backend.vercel.app/api/v1/client/postJob";
// const postjobURL = "https://hire.server.elite-professionals.in/api/v1/client/postJob";
// const postjobURL = "https://elitepro-hi-re-backend-e3f64aevz-skmamunkhan072.vercel.app/api/v1/client/postJob";
// const postjobURL = "http://localhost:8080/api/v1/client/postJob";


const Client = () => {

    const [randomName, setRandomName] = useState('');
    const [randomLastName, setRandomLastName] = useState('');
    const [randomUserName, setRandomUserName] = useState('');
    const [randomEmail, setRandomEmail] = useState('');
    const [randomCountryNames, setRandomCountryNames] = useState('');
    const [randomPasswords, setPasswords] = useState('');
    const [randomAddress, setAddress] = useState('');
    const [randomContact, setContact] = useState('');
    const [randomCompanyDetails, setCompanyDetails] = useState('');
    const [randomNoOfEmployees, setNoOfEmployees] = useState('');
    const [randomRegisterType, setRegisterType] = useState('');
    const [randomDescription, setDescription] = useState('');
    const [randomCompanyName, setCompanyName] = useState('');
    const [randomTagline, setTagline] = useState('');
    const [randomGSTINs, setGSTINs] = useState('');
    const [randomGitHub, setGitHub] = useState('');

    // clientjobpost
    const [randomProjectLevel, setrandomProjectLevel] = useState('');
    const [randomJobDuration, setrandomJobDuration] = useState('');
    const [randomFreelancerType, setrandomFreelancerType] = useState('');
    const [randomEnglishLevel, setrandomEnglishLevel] = useState('');
    const [randomYearsofExperiencePreferred, setrandomYearsofExperiencePreferred] = useState('');
    const [randomJobCategories, setrandomJobCategories] = useState('');
    const [randomProjectLocationType, setrandomProjectLocationType] = useState('');
    const [randomJobTitle, setrandomJobTitle] = useState('');
    const [randomWorkPrice, setrandomWorkPrice] = useState('');
    const [randomJobDetails, setrandomJobDetails] = useState('');
    const [randomJobLocation, setrandomJobLocation] = useState('');


    // checkbox
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    
    // verify email
    const [verificationResult, setVerificationResult] = useState(null);


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
    

    const names = ['John', 'Ishaan', 'Divya', 'Kavi', 'Aditi'];
    const lastNames = ['Doe', 'Boe', 'Dane', 'Kumar', 'Sharma'];
    const userNames = ['Koyal', 'Varun', 'Bobc', 'Aliced', 'Same'];

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
    const address = ['Laxmi Nagar', 'Preet Vihar', 'Govindpuram', 'Vijay Nagar', 'Raj Nagar'];
    const contact = ['1237698764', '4565674678','7893498767', '3453657876','2348765876'];
    const companydetails = ['Accounting and Finance', 'Customer Service or Operations', 'Engineering Or Product Management', 'Human Resource Management', 'Marketing','Production','Purchasing','Research and Development','Sales'];
    const noofemployees = ['Its Just Me', '10 - 99', '100 - 499 Employees', '500 - 1000 Employees', 'More Than 1000'];
    const companyname = ['TCS', 'HCL','Setu', 'Tech-Mahindra','Motherson'];

    // const registertypes = ['On Behalf of Company/Business', 'As an individual/Proprietor', 'On Behalf of Company/Business', 'As an individual/Proprietor', 'On Behalf of Company/Business'];
    const registertypes = ['As an individual/Proprietor', 'As an individual/Proprietor', 'As an individual/Proprietor', 'As an individual/Proprietor', 'As an individual/Proprietor'];
    
    const taglines = ['NodeJs', 'Java', 'PHP', 'Python', 'Django'];
    const gstins = ['69876', '74678','74987', '34536','23487'];
    const descriptions = ['Testing', 'Dummy', 'Testing', 'Dummy', 'Testing'];
    const github =['https://www.linkedin.com/','https://www.linkedin.com/','https://www.linkedin.com/','https://www.linkedin.com/','https://www.linkedin.com/'];

    // clientjobpost
    const projectlevels = ['Basic level', 'Expensive', 'Medium level', 'Expensive', 'Medium level'];
    const jobdurations = ['01 to 03 months', '03 to 06 months', 'more than 6 months', '03 to 06 months', 'more than 6 months'];
   const freelancertypes = ['Agency freelancer', 'Independent freelancer', 'New rising talent', 'Independent freelancer', 'New rising talent'];
   const englishlevels = ['Basic', 'Conversational', 'Professional', 'Conversational', 'Professional'];
   const yearsofexperiencepreferreds = ['1', '2', '3', '2', '3'];
   const jobcategoriess = ['Information technology (IT) management', 'Information security', 'Technical support', 'Information security', 'Technical support'];
   const projectlocationtypes = ['onsite', 'partial onsite', 'remote', 'partial onsite', 'remote'];
   const jobtitles = ['React', 'Node', 'Java', 'Node', 'Java'];
   const workprices = ['200', '400', '600', '800', '999'];
   const jobdetails = ['Intern', 'Fresher', 'Experience', 'Fresher', 'Experience'];
   const joblocations = ['Ghaziabad', 'Noida', 'Delhi', 'Noida', 'Delhi'];
    

    const pickRandomName = () => {
      const randomIndex = Math.floor(Math.random() * names.length,lastNames.length,userNames.length,emails.length,passwords.length,countryNames.length,address.length,contact.length,companydetails.length,noofemployees.length,companyname.length,taglines.length,gstins.length,registertypes.length,descriptions.length,github.length, projectlevels.length,jobdurations.length,freelancertypes.length,englishlevels.length,yearsofexperiencepreferreds.length,jobcategoriess.length,projectlocationtypes.length,jobtitles.length,workprices.length,jobdetails.length,joblocations.length);
      
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
        
        const randomGitHub = github[randomIndex];
        setGitHub(randomGitHub);
        
        // clientjobpost
        const randomProjectLevel = projectlevels[randomIndex];
        setrandomProjectLevel(randomProjectLevel);
  
        const randomJobDuration = jobdurations[randomIndex];
        setrandomJobDuration(randomJobDuration);
  
        const randomFreelancerType = freelancertypes[randomIndex];
        setrandomFreelancerType(randomFreelancerType);
        
        const randomEnglishLevel = englishlevels[randomIndex];
        setrandomEnglishLevel(randomEnglishLevel);
        
        const randomYearsofExperiencePreferred = yearsofexperiencepreferreds[randomIndex];
        setrandomYearsofExperiencePreferred(randomYearsofExperiencePreferred);
        
        const randomJobCategories = jobcategoriess[randomIndex];
        setrandomJobCategories(randomJobCategories);
        
        const randomProjectLocationType = projectlocationtypes[randomIndex];
        setrandomProjectLocationType(randomProjectLocationType);
        
        const randomJobTitle = jobtitles[randomIndex];
        setrandomJobTitle(randomJobTitle);
  
        const randomWorkPrice = workprices[randomIndex];
        setrandomWorkPrice(randomWorkPrice);
  
        const randomJobDetails = jobdetails[randomIndex];
        setrandomJobDetails(randomJobDetails);
        
        const randomJobLocation = joblocations[randomIndex];
        setrandomJobLocation(randomJobLocation);
        
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
      const userPasswordsChange = (e) => {
        setPasswords(e.target.value);
      };
      const userCountryChange = (e) => {
        setRandomCountryNames(e.target.value);
      };
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

      const userGitHubChange = (e) => {
        setGitHub(e.target.value);
      };

      // clientjobpost
      const userProjectLevelChange = (e) => {
        setrandomProjectLevel(e.target.value);
      };
      const userJobDurationChange = (e) => {
        setrandomJobDuration(e.target.value);
      };
      const userFreelancerTypeChange = (e) => {
        setrandomFreelancerType(e.target.value);
      };
      const userEnglishLevelChange = (e) => {
        setrandomEnglishLevel(e.target.value);
      };
      const userYearsofExperiencePreferredChange = (e) => {
        setrandomYearsofExperiencePreferred(e.target.value);
      };
      const userJobCategoriesChange = (e) => {
        setrandomJobCategories(e.target.value);
      };
  
      const userProjectLocationTypeChange = (e) => {
        setrandomProjectLocationType(e.target.value);
      };
  
      const userrJobTitleChange = (e) => {
        setrandomJobTitle(e.target.value);
      };
  
      const userrWorkPriceChange = (e) => {
        setrandomWorkPrice(e.target.value);
      };
  
      const userJobDetailsChange = (e) => {
        setrandomJobDetails(e.target.value);
      };
  
      const userJobLocationChange = (e) => {
        setrandomJobLocation(e.target.value);
      };

      // date generate
  const [randomprojectStartDate, setrandomProjectStartDate] = useState('');
  const [randomprojectExpireDate, setrandomProjectExpireDate] = useState('');
  const [randomprojectDeadlineDate, setrandomProjectDeadlineDate] = useState('');

 //  date generate

 useEffect(() => {
  const currentDate = new Date();
  const twoDaysLater = new Date(currentDate);
  twoDaysLater.setDate(currentDate.getDate() + 2);
  const fourDaysLater = new Date(currentDate);
  fourDaysLater.setDate(currentDate.getDate() + 4);

  // Format the dates as YYYY-MM-DD
  const formattedCurrentDate = formatDate(currentDate);
  const formattedTwoDaysLater = formatDate(twoDaysLater);
  const formattedFourDaysLater = formatDate(fourDaysLater);

  setrandomProjectStartDate(formattedCurrentDate);
  setrandomProjectExpireDate(formattedTwoDaysLater);
  setrandomProjectDeadlineDate(formattedFourDaysLater);
}, []);

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

    const usersetProjectStartDate = (e) => {
      setrandomProjectStartDate(e.target.value);
    };
    const usersetProjectExpireDate = (e) => {
      setrandomProjectExpireDate(e.target.value);
    };
    const usersetProjectDeadlineDate = (e) => {
      setrandomProjectDeadlineDate(e.target.value);
    };
// close date



      


      // checkbox
      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

      const handleCheckbox1Change = () => {
        setIsChecked1(!isChecked1);
        // Automatically check "Profile fill up" when "Client Job Post" is checked
    if (!isChecked && !isChecked1) {
      setIsChecked(true);
    }
      };



  // dynamic data ke lie
    const [data,setData] = useState({
      fname:"",
      lname:"",
      password:"",
      uname:"",
      email:"",
      country:"",

      address:"",
      description:"",
      contact:"",
      companydetailsradiovalue:"",
      numberofemployeesvalue:"",
      registerType:"",
      facebook:"",
      github:"",
      instagram:"",
      linkedIn:"",
      othersLink:"",
      stackOverflow:"",
      youtube:"",

      clientBrochures:"",

      // client job post
      job_title:"",
      project_level:"",
      job_duration:"",
      freelancer_type:"",
      english_level:"",
      project_location_type:"",
      years_of_experience_preferred:"",
      project_start_date:"",
      project_expire_date:"",
      project_deadline_date:"",
      fixed_project:"",
      minimum_price:"",
      job_categories:"",
      language:"",
      job_details:"",
      skills_required:"",
      JobLocation:"",
    });


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
            accountType: "client",
            country: data.country || randomCountryNames,
            email: data.email || randomEmail,
            firstName: data.fname||randomName,
            lastName: data.lname || randomLastName,
            password: data.password || randomPasswords,
            rules: "agree",
            username: data.uname || randomUserName
        };         
          axios.post(baseURL, user_data1).then((res) => {
            console.log('userprofile',res);
            
            const user_data2 = {     
              email: data.email || randomEmail,
              };


            // Second API call with data from the first API response
            // verify email
                axios.post(verifyEmailURL, user_data2)
                  .then((verificationResponse) => {
                    const isValidEmail = verificationResponse.data.isValid;
                  setVerificationResult(isValidEmail ? 'Valid email address!' : 'Invalid email address!');
                   //console.log('email',user_data2);

                  // Call the function to submit data to the database only after the checkbox is checked
                        // checkbox selected database
                      if (isChecked === true) {
                        
                         axios.get(personid+user_data2.email)
                          .then((personUIDD) => {
                            //console.log('personid',personUIDD?.data?.result[0]?.PersonID); // Accessing the data from the response
                            //return personUIDD?.data?.result[0]?.PersonID;
                            
                            // const delayPromise = new Promise(resolve => {
                            //   setTimeout(() => {
                            //     resolve();
                            //   }, 55000);
                            // });
                        
                            // // Use Promise.then() to continue after the delay
                            // delayPromise.then(() => {
                            //   console.log('Execution resumed after 55 seconds');
                            // });

                            const config = {
                              method: "POST",
                              maxBodyLength: Infinity,
                              headers: {
                                Uid: personUIDD?.data?.result[0]?.PersonID,
                                // 'Uid': 'FTO3jYJydLPZThWlHO3ICrf4lh32',
                                // 'Content-Type':'multipart/form-data',
                                "Content-Type": "application/json; charset=UTF-8",
                              },
                            };

                          const user_data3 = {
                            firstName: data.fname||randomName,
                            lastName: data.lname || randomLastName,
                            registerType: data.registerType || randomRegisterType,
                            address: data.address || randomAddress,
                            description:data.description || randomDescription,
                            contact:data.contact || randomContact,
                            companyDetailsRadioValue:data.companydetailsradiovalue || randomCompanyDetails,
                            numberOfEmployeesValue:data.numberofemployeesvalue || randomNoOfEmployees,

                        }; 

                          axios.post(personaldetailsURL, user_data3, config ).then((res) => {
                            console.log(res);
                            console.log("config msg",config);
                          });

                          // social link
                          const social_data = {
                            facebook: data.facebook || randomGitHub,
                            github: data.github || randomGitHub,
                            instagram: data.instagram || randomGitHub,
                            linkedIn: data.linkedIn || randomGitHub,
                            othersLink: data.othersLink || randomGitHub,
                            stackOverflow: data.stackOverflow || randomGitHub,
                            youtube: data.youtube || randomGitHub,
                          }; 
                            axios.post(socialprofileURL, social_data, config).then((res) => {
                            console.log(res);
                          });


                          // Brochures
                          const brochures_data = {
                            clientBrochures: data.clientBrochures,
                          }; 
                            axios.post(brocherURL, brochures_data, config).then((res) => {
                            console.log(res);
                          });

                          // stats
                          axios.put(singleUser+personUIDD?.data?.result[0]?.PersonID).then((res) => {
                            
                            console.log("singlrapi",res);
                          });
    
                       })
                          
                     }
                        // close checked

                    //clientjobpost

                    if (isChecked1 === true) {
                      axios.get(personid+user_data2.email)
                          .then((personUIDD) => {
                            //console.log('personid',personUIDD?.data?.result[0]?.PersonID); // Accessing the data from the response
                            //return personUIDD?.data?.result[0]?.PersonID;

                            const config = {
                              method : "POST",
                              headers:{
                                'Uid': personUIDD?.data?.result[0]?.PersonID,
                               // 'Uid': 'FTO3jYJydLPZThWlHO3ICrf4lh32',
                                'Content-Type':'multipart/form-data',
                              }
                            };

                      const clientjob_data = {
                        job_title: data.job_title || randomJobTitle,
                        project_level: data.project_level || randomProjectLevel,
                        job_duration: data.job_duration || randomJobDuration,
                        freelancer_type: data.freelancer_type || randomFreelancerType,
                        english_level: data.english_level || randomEnglishLevel,
                        project_location_type: data.project_location_type || randomProjectLocationType,
                        years_of_experience_preferred: data.years_of_experience_preferred || randomYearsofExperiencePreferred,
                        project_start_date: data.project_start_date || randomprojectStartDate,
                        project_expire_date: data.project_expire_date || randomprojectExpireDate,
                        project_deadline_date: data.project_deadline_date || randomprojectDeadlineDate,
                        fixed_project: data.fixed_project || 'Fixed Project',
                        minimum_price: data.minimum_price || randomWorkPrice,
                        job_categories: data.job_categories || randomJobCategories,
                        language: data.language || 'English',
                        job_details: data.job_details || randomJobDetails,
                        skills_required: data.skills_required || '["SQL"]',
                        JobLocation: data.JobLocation || randomJobLocation,
                      }; 
                        axios.post(postjobURL, clientjob_data, config).then((res) => {
                        console.log(res);
                      });
                    })
                    }
                    
                    //close clientjobpost

                  alert('data inserted');
                  // Refresh the page after form submission
                  window.location.reload();
                })
          });
          
      };


  return (
    <div>

<Header/>

<div className="container">
  <form onSubmit={formSubmit}>
    <div className="row jumbotron box8" >
      <div className="col-sm-12 mx-t3 mb-4">
        <h2 className="text-center text-info">Client with Individual Register</h2>
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
          // value={randomName} onChange={handleInputChange}
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
          // value={randomLastName} onChange={lastInputChange}
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
          // value='randomPasswords'
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
          placeholder=""
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
      </div>&nbsp;

{/* client job post  check box*/}
      <div className="col-sm-12 label1">
        <input
          type="checkbox"
          className="form-check d-inline"
          id="chb2"
          required=""
          checked={isChecked1}
          onChange={handleCheckbox1Change}
        />
        <label htmlFor="chb2" className="form-check-label">
          &nbsp;Client Job Post
        </label>
      </div>
      <br/>
      <br/>


    {/* close client job post check box*/}


      {isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="registerType">RegisterType</label>
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
      )}


  {/* {isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="registerType">RegisterType</label>
        <select 
          name="registerType" 
          className="form-control"
          value={data.registerType || randomRegisterType}
           onChange={(event) => {
            inputEvent(event);
            userRegisterTypeChange(event);
          }}
        > 
          <option disabled value>RegisterType</option>
          <option value="On Behalf of Company/Business">On Behalf of Company/Business</option>
          <option value="As an individual/Proprietor">As an individual/Proprietor</option>
        </select>
      </div>
    )} */}





      {isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="form-control"
          name="address"
          id="address"
          placeholder=""
          required=""
          // value={randomAddress} onChange={userAddressChange}
          value={data.address || randomAddress}
          // onChange={inputEvent}
          onChange={(event) => {
            inputEvent(event);
            userAddressChange(event);
          }}
        />
      </div>
      )}

      {isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          className="form-control"
          name="contact"
          id="contact"
          placeholder=""
          required=""
          // value={randomContact} onChange={userContactChange}
          value={data.contact || randomContact}
          // onChange={inputEvent}
          onChange={(event) => {
            inputEvent(event);
            userContactChange(event);
          }}
        />
      </div>
      )}

      {isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="companydetailsradiovalue">Company Details</label>
        <input
          type="text"
          className="form-control"
          name="companydetailsradiovalue"
          id="companydetailsradiovalue"
          placeholder="Enter your Title"
          required=""
          // value={randomCompanyDetails} onChange={userCompanyDetailsChange}
          value={data.companydetailsradiovalue || randomCompanyDetails}
          // onChange={inputEvent}
          onChange={(event) => {
            inputEvent(event);
            userCompanyDetailsChange(event);
          }}
        />
      </div>
      )}

      {isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="numberofemployeesvalue">No. Of Employees</label>
        <input
          type="text"
          className="form-control"
          name="numberofemployeesvalue"
          id="numberofemployeesvalue"
          placeholder=""
          required=""
          // value={randomNoOfEmployees} onChange={userNoOfEmployeesChange}
          value={data.numberofemployeesvalue || randomNoOfEmployees}
          // onChange={inputEvent}
          onChange={(event) => {
            inputEvent(event);
            userNoOfEmployeesChange(event);
          }}
        />
      </div>
      )}

{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="description">Description</label>
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
      )}

      {/* social link */}
      {isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="facebook">Facebook</label>
        <input
          type="text"
          className="form-control"
          name="facebook"
          id="facebook"
          placeholder=""
          required=""
          // value={data.facebook} 
          // onChange={inputEvent}

          value={data.facebook || randomGitHub} 
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
        <label htmlFor="github">GitHub</label>
        <input
          type="text"
          className="form-control"
          name="github"
          id="github"
          placeholder=""
          required=""
          // value={data.github} 
          // onChange={inputEvent}

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
        <label htmlFor="instagram">Instagram</label>
        <input
          type="text"
          className="form-control"
          name="instagram"
          id="instagram"
          placeholder=""
          required=""
          // value={data.instagram} 
          // onChange={inputEvent}

          value={data.instagram || randomGitHub} 
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
        <label htmlFor="linkedIn">LinkedIn</label>
        <input
          type="text"
          className="form-control"
          name="linkedIn"
          id="linkedIn"
          placeholder=""
          required=""
          // value={data.linkedIn} 
          // onChange={inputEvent}

          value={data.linkedIn || randomGitHub} 
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
        <label htmlFor="othersLink">OthersLink</label>
        <input
          type="text"
          className="form-control"
          name="othersLink"
          id="othersLink"
          placeholder=""
          required=""
          // value={data.othersLink} 
          // onChange={inputEvent}

          value={data.othersLink || randomGitHub} 
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
          required=""
          // value={data.stackOverflow} 
          // onChange={inputEvent}

          value={data.stackOverflow || randomGitHub} 
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
        <label htmlFor="youtube">YouTube</label>
        <input
          type="text"
          className="form-control"
          name="youtube"
          id="youtube"
          placeholder=""
          required=""
          // value={data.youtube} 
          // onChange={inputEvent}

          value={data.youtube || randomGitHub} 
          // onChange={inputEvent}
          onChange={(event) => {
            inputEvent(event);
            userGitHubChange(event);
          }}
        />
      </div>
      )}
      {/*close social link */}

      {/* Brochures */}
{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="clientBrochures">Brochures</label>
        <input
          type="text"
          className="form-control"
          name="clientBrochures"
          id="clientBrochures"
          placeholder=""
          required=""
          value={data.clientBrochures} 
          onChange={inputEvent}

          // value={data.clientBrochures || randomGitHub} 
          // // onChange={inputEvent}
          // onChange={(event) => {
          //   inputEvent(event);
          //   userGitHubChange(event);
          // }}
        />
      </div>
      )}
   {/* close Brochures */}



    {/* client job post*/}
{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="job_title">Job Title</label>
    <input
      type="text"
      name="job_title"
      id="job_title"
      className="form-control"
      placeholder=""
      value={data.job_title || randomJobTitle}
          onChange={(event) => {
            inputEvent(event);
            userrJobTitleChange(event);
          }}
      // value={randomJobTitle} 
      // onChange={(event) => {
      //   setJobTitle(event.target.value);
      //   userrJobTitleChange(event);
      // }}
    />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="project_level">Project Level</label>
      <input
       type="text"
       name="project_level"
       id="project_level"
       className="form-control"
       placeholder=""
       value={data.project_level || randomProjectLevel}
          onChange={(event) => {
            inputEvent(event);
            userProjectLevelChange(event);
          }}
      //  value={randomProjectLevel} 
      //  onChange={(event) => {
      //    setProjectLevel(event.target.value);
      //    userProjectLevelChange(event);
      //  }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="job_duration">Job Duration</label>
      <input
        type="text"
        name="job_duration"
        id="job_duration"
        className="form-control"
        placeholder=""
        value={data.job_duration || randomJobDuration}
          onChange={(event) => {
            inputEvent(event);
            userJobDurationChange(event);
          }}
        // value={randomJobDuration}
        // onChange={(event) => {
        //   setJobDuration(event.target.value);
        //   userJobDurationChange(event);
        // }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="freelancer_type">Freelancer Type</label>
      <input
        type="text"
        name="freelancer_type"
        id="freelancer_type"
        className="form-control"
        placeholder=""
        value={data.freelancer_type || randomFreelancerType}
          onChange={(event) => {
            inputEvent(event);
            userFreelancerTypeChange(event);
          }}
        // value={randomFreelancerType}
        // onChange={(event) => {
        //   setFreelancerType(event.target.value);
        //   userFreelancerTypeChange(event);
        // }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="english_level">English Level</label>
      <input
        type="text"
        name="english_level"
        id="english_level"
        className="form-control"
        placeholder=""
        value={data.english_level || randomEnglishLevel}
          onChange={(event) => {
            inputEvent(event);
            userEnglishLevelChange(event);
          }}
        // value={randomEnglishLevel}
        // onChange={(event) => {
        //   setEnglishLevel(event.target.value);
        //   userEnglishLevelChange(event);
        // }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="project_location_type">Project Location Type</label>
      <input
       type="text"
       name="project_location_type"
       id="project_location_type"
       className="form-control"
       placeholder=""
       value={data.project_location_type || randomProjectLocationType}
          onChange={(event) => {
            inputEvent(event);
            userProjectLocationTypeChange(event);
          }}
      //  value={randomProjectLocationType}
      //  onChange={(event) => {
      //    setProjectLocationType(event.target.value);
      //    userProjectLocationTypeChange(event);
      //  }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="years_of_experience_preferred">Years of Experience Preferred</label>
      <input
        type="text"
        name="years_of_experience_preferred"
        id="years_of_experience_preferred"
        className="form-control"
        placeholder=""
        value={data.years_of_experience_preferred || randomYearsofExperiencePreferred}
          onChange={(event) => {
            inputEvent(event);
            userYearsofExperiencePreferredChange(event);
          }}
        // value={randomYearsofExperiencePreferred}
        // onChange={(event) => {
        //   setYearsOfExperiencePreferred(event.target.value);
        //   userYearsofExperiencePreferredChange(event);
        // }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="project_start_date">Project Start Date</label>
      <input
        type="date"
        name="project_start_date"
        id="project_start_date"
        className="form-control"
        placeholder=""
        value={data.project_start_date || randomprojectStartDate}
          onChange={(event) => {
            inputEvent(event);
            usersetProjectStartDate(event);
          }}
        // value={randomprojectStartDate}
        // onChange={(event) => {
        //   setProjectStartDate(event.target.value);
        //   usersetProjectStartDate(event);
        // }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="project_expire_date">Project Expire Date</label>
      <input
        type="date"
        name="project_expire_date"
        id="project_expire_date"
        className="form-control"
        placeholder=""
        value={data.project_expire_date || randomprojectExpireDate}
          onChange={(event) => {
            inputEvent(event);
            usersetProjectExpireDate(event);
          }}
        // value={randomprojectExpireDate}
        // onChange={(event) => {
        //   setProjectExpireDate(event.target.value);
        //   usersetProjectExpireDate(event);
        // }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="project_deadline_date">Project Deadline Date</label>
      <input
        type="date"
        name="project_deadline_date"
        id="project_deadline_date"
        className="form-control"
        placeholder=""
        value={data.project_deadline_date || randomprojectDeadlineDate}
          onChange={(event) => {
            inputEvent(event);
            usersetProjectDeadlineDate(event);
          }}
        // value={randomprojectDeadlineDate} 
        // onChange={(event) => {
        //   setProjectDeadLineDate(event.target.value);
        //   usersetProjectDeadlineDate(event);
        // }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="fixed_project">Fixed Project</label>
      <input
        type="text"
        name="fixed_project"
        id="fixed_project"
        className="form-control"
        placeholder=""
        value={data.fixed_project || 'Fixed Project'}
          onChange={(event) => {
            inputEvent(event);
            // fnameInputChange(event);
          }}
        // onChange={ event => setFixedProject(event.target.value) }
        // value='Fixed Project' 
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="minimum_price">Work Price ($)</label>
      <input
        type="text"
        name="minimum_price"
        id="minimum_price"
        className="form-control"
        placeholder=""
        value={data.minimum_price || randomWorkPrice}
          onChange={(event) => {
            inputEvent(event);
            userrWorkPriceChange(event);
          }}
        // value={randomWorkPrice}
        // onChange={(event) => {
        //   setWorkPrice(event.target.value);
        //   userrWorkPriceChange(event);
        // }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="job_categories">Job Categories</label>
      <input
        type="text"
        name="job_categories"
        id="job_categories"
        className="form-control"
        placeholder=""
        value={data.job_categories || randomJobCategories}
          onChange={(event) => {
            inputEvent(event);
            userJobCategoriesChange(event);
          }}
        // value={randomJobCategories}
        // onChange={(event) => {
        //   setJobCategories(event.target.value);
        //   userJobCategoriesChange(event);
        // }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="language">Language</label>
      <input
        type="text"
        name="language"
        id="language"
        className="form-control"
        placeholder=""
        value={data.language || 'English'}
          onChange={(event) => {
            inputEvent(event);
            // fnameInputChange(event);
          }}
        // onChange={ event => setLanguage(event.target.value) }
        // value='English' 
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="job_details">Job Details</label>
      <input
        type="text"
        name="job_details"
        id="job_details"
        className="form-control"
        placeholder=""
        value={data.job_details || randomJobDetails}
          onChange={(event) => {
            inputEvent(event);
            userJobDetailsChange(event);
          }}
        // value={randomJobDetails}
        // onChange={(event) => {
        //   setJobDetails(event.target.value);
        //   userJobDetailsChange(event);
        // }}
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="skills_required">Skills Required</label>
      <input
        type="text"
        name="skills_required"
        id="skills_required"
        className="form-control"
        placeholder=""
        value={data.skills_required || '["SQL"]'}
          onChange={(event) => {
            inputEvent(event);
            // fnameInputChange(event);
          }}
        // value='["SQL"]' 
        // onChange={ event => setSkillsRequired(event.target.value) }
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor="JobLocation">Location</label>
      <input
        type="text"
        name="JobLocation"
        id="JobLocation"
        className="form-control"
        placeholder=""
        value={data.JobLocation || randomJobLocation}
          onChange={(event) => {
            inputEvent(event);
            userJobLocationChange(event);
          }}
        // value={randomJobLocation}
        // onChange={(event) => {
        //   setLocation(event.target.value);
        //   userJobLocationChange(event);
        // }}
      />
  </div>
)}

{/* {isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor=""></label>
      <input
        type="text"
        className="form-control"
        name=""
        id=""
        placeholder=""
        required=""
      />
  </div>
)}

{isChecked1 && (
  <div className="col-sm-6 form-group label1">
    <label htmlFor=""></label>
      <input
        type="text"
        className="form-control"
        name=""
        id=""
        placeholder=""
        required=""
      />
  </div>
)} */}

    {/* close client job post*/}










{/* {isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="displayName">Display Name</label>
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
      )}

{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="companyName">Company Name</label>
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
      )}

{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="registrationNumberCIN">Registration Name</label>
        <input
          type="text"
          className="form-control"
          name="registrationNumberCIN"
          id="registrationNumberCIN"
          placeholder=""
          required=""
          value={data.registrationNumberCIN || randomName} 
          onChange={(event) => {
            inputEvent(event);
            fnameInputChange(event);
          }}
        />
      </div>
      )}

{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="companyUrl">Company URL</label>
        <input
          type="text"
          className="form-control"
          name="companyUrl"
          id="companyUrl"
          placeholder=""
          required=""
          value={data.companyUrl} 
          onChange={inputEvent}
        />
      </div>
      )}

{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="GSTIN">GSTIN</label>
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
      )}

{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="tagLine">Tag Line</label>
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
      )}

{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="addressRegisteredOffice">Address of Registered Office</label>
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
      )}

{isChecked && (
      <div className="col-sm-6 form-group label1">
        <label htmlFor="companyEmail">company Email</label>
        <input
          type="email"
          className="form-control"
          name="companyEmail"
          id="companyEmail"
          placeholder=""
          required=""
          value={data.companyEmail} 
          onChange={inputEvent}
        />
      </div>
      )} */}


      <div className="col-sm-12 form-group mb-0">
        <button type='submit' className="btn btn-primary float-right">Submit</button>
      </div>
    </div>
  </form>
</div>

    </div>
  )
}

export default Client;

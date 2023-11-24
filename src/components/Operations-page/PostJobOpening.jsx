import React, { useEffect, useState } from 'react'
import Header from '../Header';
import './postjobopening.css';
import axios from 'axios';
// import '../freelance.css';

const postjobURL ="https://elitepro-hi-re-backend.vercel.app/api/v1/client/postJob";
// const postjobURL = "https://hire.server.elite-professionals.in/api/v1/client/postJob";

const personid ="https://elitepro-hi-re-backend.vercel.app/api/v1/userProfile/return/id?email=";
// const personid = "https://hire.server.elite-professionals.in/api/v1/userProfile/return/id?email=";

// const signupURL = "https://hire.server.elite-professionals.in/api/v1/userProfile";


const PostJobOpening = () => {

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

   const projectlevels = ['Basic level', 'Expensive', 'Medium level'];
   const jobdurations = ['01 to 03 months', '03 to 06 months', 'more than 6 months'];
   const freelancertypes = ['Agency freelancer', 'Independent freelancer', 'New rising talent'];
   const englishlevels = ['Basic', 'Conversational', 'Professional'];
   const yearsofexperiencepreferreds = ['1', '2', '3'];
   const jobcategoriess = ['Information technology (IT) management', 'Information security', 'Technical support'];
   const projectlocationtypes = ['onsite', 'partial onsite', 'remote'];
   const jobtitles = ['React', 'Node', 'Java'];
   const workprices = ['200', '400', '600'];
   const jobdetails = ['Intern', 'Fresher', 'Experience'];
   const joblocations = ['Ghaziabad', 'Noida', 'Delhi'];
   

   const pickRandomName = () => {
      const randomIndex = Math.floor(Math.random() * projectlevels.length,jobdurations.length,freelancertypes.length,englishlevels.length,yearsofexperiencepreferreds.length,jobcategoriess.length,projectlocationtypes.length,jobtitles.length,workprices.length,jobdetails.length,joblocations.length);

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


    const[email_id,emailid] = useState('');
    const[job_title,setJobTitle] = useState('');
    // const[clientUserId,setClientUserId] = useState('');
    const[project_level,setProjectLevel] = useState('');
    const[job_duration,setJobDuration] = useState('');
    const[freelancer_type,setFreelancerType] = useState('');
    const[english_level,setEnglishLevel] = useState('');
    const[project_location_type,setProjectLocationType] = useState('');
    const[years_of_experience_preferred,setYearsOfExperiencePreferred] = useState('');
    const[project_start_date,setProjectStartDate] = useState('');
    const[project_expire_date,setProjectExpireDate] = useState('');
    const[project_deadline_date,setProjectDeadLineDate] = useState('');
    const[fixed_project,setFixedProject] = useState('');
    const[minimum_price,setWorkPrice] = useState('');
    const[job_categories,setJobCategories] = useState('');
    const[language,setLanguage] = useState('');
    const[job_details,setJobDetails] = useState('');
    const[skills_required,setSkillsRequired] = useState('');
    const[JobLocation,setLocation] = useState('');
    const[userSelectedFile,setUserSelectedFile] = useState('');




    const formSubmit = async(event) =>{
      event.preventDefault();


      //const email = new FormData();
      const formData = new FormData();

      // formData.append('clientUserId',clientUserId);
      formData.append('job_title',job_title || randomJobTitle);       
      formData.append('project_level',project_level || randomProjectLevel);
      formData.append('job_duration',job_duration || randomJobDuration);
      formData.append('freelancer_type',freelancer_type || randomFreelancerType);
      formData.append('english_level',english_level || randomEnglishLevel);
      formData.append('project_location_type',project_location_type || randomProjectLocationType);
      formData.append('years_of_experience_preferred',years_of_experience_preferred || randomYearsofExperiencePreferred);
      formData.append('project_start_date',project_start_date || randomprojectStartDate);
      formData.append('project_expire_date',project_expire_date || randomprojectExpireDate);
      formData.append('project_deadline_date',project_deadline_date || randomprojectDeadlineDate);
      formData.append('fixed_project',fixed_project || 'Fixed Project');
      formData.append('minimum_price',minimum_price || randomWorkPrice);
      formData.append('job_categories',job_categories || randomJobCategories);
      formData.append('language',language || 'English');
      formData.append('job_details',job_details || randomJobDetails);
      formData.append('skills_required',skills_required || '["SQL"]');
      formData.append('JobLocation',JobLocation || randomJobLocation);
      formData.append('projectFile',userSelectedFile);


           
      // axios.get(personid+user_data.email + signupURL)
      // axios.get(personid+'7BNoQiD9NPngtmail101@gmail.com')

      axios.get(personid+email_id)
        .then((personUIDD) => {
          const config = {
            method : "POST",
            headers:{
              'Uid': personUIDD?.data?.result[0]?.PersonID,
              'Content-Type':'multipart/form-data',
            }
          };

          axios.post(postjobURL, formData, config).then((response) => {  
                  alert('User Job Post Successfully Created');
                  window.location.reload();      
            });
        })

  }


  return (
    <>
    <Header />

{/* <main role="main" className="container-fluid flex-fill postjob1"> */}
  {/* <div className="row justify-content-center"> */}
    {/* <div className="col-lg-9 main-column"> */}
      {/* <div id="contentHolder"> */}
      <div className="container">
        {/* <h4 className=" text-info mb-4">
          JobOpenings - Post Job Opening by Existing Client
        </h4>
        <br /> */}
        <form onSubmit={formSubmit}>
        <div className="column jumbotron box8" >

        <h4 className=" text-info mb-5 texth4">
          JobOpenings - Post Job Opening by Existing Client
        </h4>

          <div className="form-group row">
            <label htmlFor="emailid" className="col-sm-5 col-form-label">Client Email ID</label>
            <div className="col-sm-7">
              <input
                type="Email"
                name="emailid"
                id="emailid"
                className="form-control"
                //value={email_id}
                onChange={ event => emailid(event.target.value) }
                // onChange={ event => setClientUserId(event.target.value) }
                required="true"
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="job_title" className="col-sm-5 col-form-label">Job Title</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="job_title"
                id="job_title"
                className="form-control"
                placeholder=""
                value={randomJobTitle} 
                onChange={(event) => {
                  setJobTitle(event.target.value);
                  userrJobTitleChange(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="project_level" className="col-sm-5 col-form-label">Project Level</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="project_level"
                id="project_level"
                className="form-control"
                placeholder=""
                value={randomProjectLevel} 
                onChange={(event) => {
                  setProjectLevel(event.target.value);
                  userProjectLevelChange(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="job_duration" className="col-sm-5 col-form-label">Job Duration</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="job_duration"
                id="job_duration"
                className="form-control"
                placeholder=""
                value={randomJobDuration}
                onChange={(event) => {
                  setJobDuration(event.target.value);
                  userJobDurationChange(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="freelancer_type" className="col-sm-5 col-form-label">Freelancer Type</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="freelancer_type"
                id="freelancer_type"
                className="form-control"
                placeholder=""
                value={randomFreelancerType}
                onChange={(event) => {
                  setFreelancerType(event.target.value);
                  userFreelancerTypeChange(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="english_level" className="col-sm-5 col-form-label">English Level</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="english_level"
                id="english_level"
                className="form-control"
                placeholder=""
                value={randomEnglishLevel}
                onChange={(event) => {
                  setEnglishLevel(event.target.value);
                  userEnglishLevelChange(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="project_location_type" className="col-sm-5 col-form-label">Project Location Type</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="project_location_type"
                id="project_location_type"
                className="form-control"
                placeholder=""
                value={randomProjectLocationType}
                onChange={(event) => {
                  setProjectLocationType(event.target.value);
                  userProjectLocationTypeChange(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="years_of_experience_preferred" className="col-sm-5 col-form-label">Years of Experience Preferred</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="years_of_experience_preferred"
                id="years_of_experience_preferred"
                className="form-control"
                placeholder=""
                value={randomYearsofExperiencePreferred}
                onChange={(event) => {
                  setYearsOfExperiencePreferred(event.target.value);
                  userYearsofExperiencePreferredChange(event);
                }}
              />
            </div>
          </div>


           <div className="form-group row">
            <label htmlFor="project_start_date" className="col-sm-5 col-form-label">Project Start Date</label>
            <div className="col-sm-7">
              <input
                type="date"
                name="project_start_date"
                id="project_start_date"
                className="form-control"
                placeholder=""
                value={randomprojectStartDate}
                onChange={(event) => {
                  setProjectStartDate(event.target.value);
                  usersetProjectStartDate(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="project_expire_date" className="col-sm-5 col-form-label">Project Expire Date</label>
            <div className="col-sm-7">
              <input
                type="date"
                name="project_expire_date"
                id="project_expire_date"
                className="form-control"
                placeholder=""
                value={randomprojectExpireDate}
                onChange={(event) => {
                  setProjectExpireDate(event.target.value);
                  usersetProjectExpireDate(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="project_deadline_date" className="col-sm-5 col-form-label">Project Deadline Date</label>
            <div className="col-sm-7">
              <input
                type="date"
                name="project_deadline_date"
                id="project_deadline_date"
                className="form-control"
                placeholder=""
                value={randomprojectDeadlineDate} 
                onChange={(event) => {
                  setProjectDeadLineDate(event.target.value);
                  usersetProjectDeadlineDate(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="fixed_project" className="col-sm-5 col-form-label">Fixed Project</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="fixed_project"
                id="fixed_project"
                className="form-control"
                placeholder=""
                onChange={ event => setFixedProject(event.target.value) }
                value='Fixed Project' 
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="minimum_price" className="col-sm-5 col-form-label">Work Price ($)</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="minimum_price"
                id="minimum_price"
                className="form-control"
                placeholder=""
                value={randomWorkPrice}
                onChange={(event) => {
                  setWorkPrice(event.target.value);
                  userrWorkPriceChange(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="job_categories" className="col-sm-5 col-form-label">Job Categories</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="job_categories"
                id="job_categories"
                className="form-control"
                placeholder=""
                value={randomJobCategories}
                onChange={(event) => {
                  setJobCategories(event.target.value);
                  userJobCategoriesChange(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="language" className="col-sm-5 col-form-label">Language</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="language"
                id="language"
                className="form-control"
                placeholder=""
                onChange={ event => setLanguage(event.target.value) }
                value='English' 
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="job_details" className="col-sm-5 col-form-label">Job Details</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="job_details"
                id="job_details"
                className="form-control"
                placeholder=""
                value={randomJobDetails}
                onChange={(event) => {
                  setJobDetails(event.target.value);
                  userJobDetailsChange(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="skills_required" className="col-sm-5 col-form-label">Skills Required</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="skills_required"
                id="skills_required"
                className="form-control"
                placeholder=""
                value='["SQL"]' 
                onChange={ event => setSkillsRequired(event.target.value) }
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="JobLocation" className="col-sm-5 col-form-label">Location</label>
            <div className="col-sm-7">
              <input
                type="text"
                name="JobLocation"
                id="JobLocation"
                className="form-control"
                placeholder=""
                value={randomJobLocation}
                onChange={(event) => {
                  setLocation(event.target.value);
                  userJobLocationChange(event);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="projectFile" className="col-sm-5 col-form-label">Upload Relevant Project File</label>
            <div className="col-sm-7">
              <input
                type="file"
                name="projectFile"
                id="projectFile"
                className="form-control"
                // required="true"
                placeholder=""
                onChange={ event => setUserSelectedFile(event.target.files[0]) }
                
                // value='https://static.vecteezy.com/system/resources/previews/004/226/762/original/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg' 
                // onChange={ event => setSkillsRequired(event.target.value) }
              />
            </div>
          </div>

          
          {/* <div className="form-group row">
            <label htmlFor="description" className="col-sm-5 col-form-label">
              Description
            </label>
            <div className="col-sm-7">
              <textarea
                name="description"
                id="description"
                rows={4}
                className="form-control"
                placeholder=""
                defaultValue={"                            "}
              />
              <small className="form-text text-muted">
                Minimum 50 characters if not empty
              </small>
            </div>
          </div> */}

          <div className="form-group row">
            <label htmlFor="premium" className="col-sm-5 col-form-label">Premium</label>
            <div className="col-sm-7">
              <input
                type="checkbox"
                name="premium"
                id="premium"
              />
            </div>
          </div>


          <br />

          <div className=" form-group mb-0">
        <button type='submit' className="btn btn-primary">Submit</button>
      </div>
          <br />
          <br />
        </div>
        </form>
      </div>
    {/* </div> */}
  {/* </div> */}
{/* </main> */}


    
    </>
  )
}

export default PostJobOpening;
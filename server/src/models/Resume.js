const db = require('../utils/db')
const promisePool =  db.promise();

const getByID = async function(resumeId){

    const sql = `SELECT * FROM resume WHERE id = ?`;
    const sql2 = `SELECT jobRole,companyName,fromDate,toDate,description FROM  resume_job_history  WHERE resumeId = ?`;
    const sql3 = `SELECT institution,degree,fromDate,toDate FROM resume_education WHERE resumeId=?`
   try {
      const [rows] = await promisePool.query(sql,resumeId);
      const resume = rows[0]; 

      if(resume){
        const [jobHistory] = await promisePool.query(sql2,resumeId)
        resume.jobHistory = jobHistory;
        const [education] = await promisePool.query(sql3,resumeId)
        resume.education = education;

        delete resume.userId;
        return resume;
      }else{
         return null;
      }
   } catch (error) {
        throw error;
   }

}

const get = async function(userId){

    const sql = `SELECT * FROM resume WHERE userId = ?`;
    const sql2 = `SELECT jobRole,companyName,fromDate,toDate,description FROM  resume_job_history  WHERE resumeId = ?`;
    const sql3 = `SELECT institution,degree,fromDate,toDate FROM resume_education WHERE resumeId=?`
   try {
      const [rows] = await promisePool.query(sql,userId);
      const resume = rows[0]; 

      if(resume){
        const [jobHistory] = await promisePool.query(sql2,resume.id)
        resume.jobHistory = jobHistory;
        const [education] = await promisePool.query(sql3,resume.id)
        resume.education = education;

        delete resume.userId;
        return resume;
      }else{
         return null;
      }
   } catch (error) {
        throw error;
   }

}


const save = async function (resume){
    const {userId,firstname,lastname,email,linkedin,profession,about,jobHistory,education,interests,summary} = resume
    
    const sql = `INSERT INTO resume (userId,firstname,lastname,email,linkedin,profession,about,interests,summary) 
                 VALUES (?,?,?,?,?,?,?,?,?)`;

    try {
       const [resume] = await promisePool.query(sql,[userId,firstname,lastname,email,linkedin,profession,about,interests,summary])
       console.log(jobHistory)
       if(resume.insertId){
        await saveJobHistory(resume.insertId,jobHistory);
        await saveEducation(resume.insertId,education);
       }
     
    } catch (error) {
         throw error;
    }
}


saveJobHistory = async function(resumeId,history){
    const sql = `INSERT INTO resume_job_history (resumeId,jobRole,companyName,fromDate,toDate,description) 
                 VALUES (?,?,?,?,?,?)`;
    
        try {
           history.forEach(async(job) => {
                await promisePool.query(sql,[resumeId,job.jobRole,job.companyName,job.fromDate,job.toDate,job.description])
           });
        } catch (error) {
           throw error;
        }
   
}

saveEducation = async function(resumeId,education){
    
    const sql = `INSERT INTO resume_education (resumeId,institution,degree,fromDate,toDate) 
                 VALUES (?,?,?,?,?)`;
    try {
        education.forEach(async (e)=>{
            await promisePool.query(sql,[resumeId, e.institution, e.degree, e.fromDate, e.toDate])
        })
    } catch (error) {
        throw error;
    }
}

module.exports = {
    save,
    get,
    getByID
}

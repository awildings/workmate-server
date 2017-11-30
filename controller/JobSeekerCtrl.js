const job_seeker = require('../models/JobSeeker');

class JobSeeker {
  static create(req,res){
    job_seeker.create(req.body)
    .then(dataJobSeeker => {
      res.status(200).json({
        message:`profile job seeker created succesfully`,
        data:dataJobSeeker
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  static findById(req,res){
    job_seeker.findById(req.params.id)
    .then(dataJobSeeker => {
      res.status(200).json({
        message:`profile job seeker founded`,
        data:dataJobSeeker
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  static update(req,res){
    job_seeker.findOneAndUpdate({
      _id:req.params.id
    },req.body
    )
    .then(dataJobSeeker => {
      res.status(200).json({
        message:`profile job seeker updated succesfully`,
        data:dataJobSeeker
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  static delete(req,res){
    job_seeker.findOneAndRemove({
      _id:req.params.id
    })
    .then(dataJobSeeker => {
      res.status(200).json({
        message:`profile job seeker deleted succesfully`,
        data:dataJobSeeker
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = JobSeeker

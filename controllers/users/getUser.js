const db = require("../../static/db.js")
const {getUserDetails}=require("../../commonFunction/getUserDetails.js")




const getUser= async (req,res)=>{
    // res.json(req.user)
    const userData= await getUserDetails(req.user.username)

    const tempUserData={
        id: userData.id,
        admin: userData.is_superuser,
        username: userData.username,
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        teacher: userData.is_staff,
        active: userData.is_active,
        middleName: userData.middleName,
        dateOfBirth: userData.dob,
        mobileNumber: userData.mobileNumber,
        address: userData.address,
        gender: userData.gender,
        jobLocationSelected: userData.jobLocationSelected,
        batchId: userData.batchId
    }
    res.json(tempUserData)
}

module.exports= {getUser}
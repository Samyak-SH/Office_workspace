const {db} =require('../firebase')
const {doc,addDoc, collection, setDoc} = require( 'firebase/firestore')

const signup = (req,res)=>{
    addDoc(collection(db, 'users'),{
        name : req.body.name,
        email : req.body.email,
        role : req.body.role
    })

}

module.exports = {signup}
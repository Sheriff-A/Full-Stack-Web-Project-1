exports.send = (req, res) => {
    // Validate Request
    // Make sure there is a name
    if(!req.body.name){
        res.status(400).send({
            message: 'name cannot be empty'
        })
        return
    }

    // Make sure there is an email
    if(!req.body.email){
        res.status(400).send({
            message: 'email cannot be empty'
        })
        return
    }

    // Send Email with contact info
    console.log(
        `Name: ${req.body.name} \nEmail: ${req.body.email} \nMessage: ${req.body.description}`
        )
    res.send({
        message: "Email Sent Successfully"
    })
}
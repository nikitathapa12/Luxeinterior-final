const User = require('../Models/authModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const userProfile = require('../Models/userProfile');
const orderModel = require('../Models/orderModel');

dotenv.config();

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password,
      role
    });

    await user.save();


    //create profile for the new user
    const newProfile=new userProfile({user:user._id});
    await newProfile.save();


    // const payload = {
    //   user: {
    //     id: user.id,
    //   },
    // };


    res.status(201)
    .json({mssg: "User registered successfully",
       user:user,
        userProfile:newProfile,
       });


    // jwt.sign(
    //   payload,
    //   process.env.JWT_SECRET,
    //   { expiresIn: '1h' },
    //   (err, token) => {
    //     if (err) throw err;
    //     res.json({mssg: "User registered succeddfully", token, userDetails:user });
    //   }
    // );
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '10h' },
      (err, token) => {
        if (err) throw err;
        res.json({ mssg:"User logged in succssfully", token, userDetails:user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const testController = (req, res) => {
  try {
  res.send('Protected Route');
} catch (error) {
  console.error(error);
  res.send({error});
  }
}

const getOrdersController = async (req, res) =>{
  try{
    const orders= await orderModel.find({buyer:req.user.id})
    .populate("products","-photo")
    .populate("buyer","name")
    res.json(orders)
  }catch(error){
    console.log(error)
    res.status(500).send({
      success: false,
      message:'Error while getting order',
      error
    })
  }

}





module.exports = {
  registerUser,
  loginUser,
  testController,
  getOrdersController
};



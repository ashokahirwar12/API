import "../models/connection.js";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import nodemailer from 'nodemailer';

export const register = async (req, res) => {
  try {
    const { FirstName,LastName,Email, Password } =  req.body;
    const existingUser = await userModel.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(Password, 10);

    const user = new userModel({ FirstName,LastName,Email, Password: hashedPassword });
    await user.save();
    res
      .status(201)
      .json({ msg: "Registration successfully", user: {FirstName, Email } });
  } catch (error) {
    res.status(500).json({ msg: "Server error",error });
  }
};

export const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    
    const user = await userModel.findOne({ Email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    

    
    res
      .status(200)
      .json({
        msg: "Login successful",
        user: { FirstName: user.FirstName, Email: user.Email },
      });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};






const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password",
  },
});

export const forgetPassword = async (req, res) => {
  const { Email } = req.body;

  try {
    const user = await userModel.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: "User with this email does not exist." });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.resetOTP = otp;
    user.resetOTPExpiry = Date.now() + 10 * 60 * 1000;
    await user.save();

    const mailOptions = {
      from: "your-email@gmail.com",
      to: user.Email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${otp}. It is valid for 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "OTP sent to your email for password reset." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later.", error: error.message });
  }
};

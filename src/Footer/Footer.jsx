import { Typography } from "@mui/material"
import React from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'


const Footer = () => {
    return (
        <>
            <footer>
                <div className='container grid2'>
                    <div className='box'>
                        <h1>OnlineStore</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                        <div className='icon d_flex'>
                            <div className='img d_flex'>
                                <i className='fa-brands fa-google-play'></i>
                                <span><a href="https://play.google.com/store/games?pli=1">Google Play</a> </span>
                            </div>
                            <div className='img d_flex'>
                                <i className='fa-brands fa-app-store-ios'></i>
                                <span><a href="https://www.apple.com/app-store/">App Store</a> </span>
                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <h2>About Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Customer Care</h2>
                        <ul>
                            <li>Help Center </li>
                            <li>How to Buy </li>
                            <li>Track Your Order </li>
                            <li>Corporate & Bulk Purchasing </li>
                            <li>Returns & Refunds </li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Baneshowr-2 kathmandu </li>
                            <li>kismatshrestha067@gmail.com</li>
                            <li>Phone: +1 1123 456 780</li>
                        </ul>
                    </div>
                </div>
                <div className="social-icons">
                    <Typography> <a href="https://www.facebook.com/"><FacebookIcon /></a>  </Typography>
                    <Typography> <a href="https://twitter.com/"><TwitterIcon /></a> </Typography>
                    <Typography> <a href="https://www.linkedin.com/feed/"><LinkedInIcon /></a> </Typography>
                    <Typography><a href="https://www.instagram.com/"><InstagramIcon /></a></Typography>
                </div>
                <div className="last-footer">
                    <Typography>{`© ${new Date().getFullYear()} kist collection,`}</Typography>

                </div>
            </footer>
        </>
    )
}

export default Footer
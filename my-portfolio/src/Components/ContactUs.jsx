import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Aos from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })





    return (
        <Container id='contact'>
            <div className='contact'>
                <div className='contactText'>
                    <div>
                        <h1 style={{ color: 'teal' }}>Contact Me</h1>
                    </div>
                    <div className='middleSection'>
                        <div data-aos='fade-right'>
                            <PhoneIcon fontSize="large" />
                            <h1>Phone</h1>
                            <p>Here is My Phone Number</p>
                            <a href="tel:+91-941662426" rel="noreferrer" target="_blank">
                                <p>+91-9467598109</p>
                            </a>
                        </div>
                        <div data-aos='fade-up'>
                            <EmailIcon fontSize="large" />
                            <h1>Email</h1>
                            <p>You can Simply mail me just by clicking on my email</p>
                            <a href='rajato1209@gmail.com' rel="noreferrer" target="_blank"><p>rajato1209@gmail.com</p></a>
                        </div>
                        <div data-aos='fade-up'>

                            <GitHubIcon fontSize="large" />

                            <h1>GitHub</h1>
                            <p>This is my GitHub Account</p>
                            <a href='https://github.com/rajato1209' rel="noreferrer" target="_blank"><p>rajato1209</p></a>
                        </div>
                        <div data-aos='fade-up'>
                            <LinkedInIcon fontSize="large" />
                            <h1>LinkedIn</h1>
                            <p>Connect With me </p>
                            <a href='https://www.linkedin.com/in/rajat-kaswan-8a829a110' rel="noreferrer" target="_blank"><p>Just One Click</p></a>
                        </div>
                        <div data-aos='fade-left'>
                            <LocationOnIcon fontSize="large" />
                            <h1>Location</h1>
                            <p>Sirse,Haryana, India</p>
                            <a href="https://www.google.com/maps/place/Sirsa,+Haryana+125055/@29.5369797,74.9953873,13z/data=!3m1!4b1!4m5!3m4!1s0x39114db0893d723d:0xc51125be998c4f95!8m2!3d29.5320731!4d75.0317734" rel="noreferrer" target="_blank">
                                <p>View on Google map</p>
                            </a>
                        </div>
                    </div>
                </div>
        
                <div className='contactForm'>
                    <form 
                      action="https://getform.io/f/a345721a-f9b5-47cf-8926-32d2cf602048"
                      method="POST"
                    
                    >
                        <div>
                            <input   
                                type="text"
                                name="name"
                                placeholder="Enter Your Name Please"
                            
                            />
                            <input  
                             type="text"
                             name="email"
                             placeholder="Enter Your E-mail Please"
                            
                            
                            />
                            <input  
                             type="text"
                             name="subject"
                             placeholder="Enter Your  Subject"
                            
                            
                            />
                        </div>
                        <div>
                            <textarea    name="massage"    placeholder="Enter Your Massage" />
                            <div>
                                <button  data-aos='flip-left'>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div className='endSection'>
                <p>© 2022 rajat. Design by Me with <FavoriteIcon sx={{ color: '#01a479' }} /></p>
            </div>
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    // background-color:white;
    .contact{
        width:85%;
        margin:auto;
        padding-top:20px;
        display:flex;
        flex-direction:column;
        gap:30px;
        
        
    }

    .middleSection{
        display:flex;
        justify-content:space-around;
    }

    .middleSection>div{
        padding:10px;
    }

    .middleSection>div>h1{
       font-size:x-large;
       margin-top:0px;
       
    }
    .middleSection>div p{
        margin-top:0px;
    }

    .middleSection>div a{
        text-decoration:none;
        color:teal;
     }

    .contactForm>form{
        display:flex;
        gap:10px;
    }
    .contactForm>form>div{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:50%;
    }
    .contactForm>form>div>input{
        width:95%;
        padding:5px 5px 5px 15px;
        border:1px solid #e9ecef;
        border-radius:8px;
    }
    
    .contactForm>form>div:first-child>input{
        height:30px;
        margin-bottom:30px;
    }

    .contactForm>form>div:last-child>textarea{
        width:95%;
        height:175px;
        margin-bottom:30px;
        position:relative;
        padding:5px 5px 5px 10px;
        border:1px solid #e9ecef;
        border-radius:8px;
    }

    .contactForm>form>div:last-child>input::placeholder{
        position:absolute;
        top:15px;
    }

    .contactForm>form>div:last-child>div{
        width:95%;
        display:flex;
        align-items:center;
        justify-content:right;
    }

    .contactForm>form>div:last-child>div>button{
        background-color:teal;
        color:white;
        border:none;
        padding:10px 20px 10px 20px;
        border-radius:10px;
        cursor:pointer;
        font-weight:bold;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .endSection{
        display:flex;
        align-items:center;
        justify-content:center;
        height:70px;
        background-color:black;
        color:white;
        margin-top:20px;
    }
    .endSection>p{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
    }

    .emailSent{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }

    .emailSent>h1,.emailSent>p{
       margin-top:0px;
    }


    @media only screen and (min-width: 768px) and (max-width:1120px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:70%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:90%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
    }
    
    @media only screen and (min-width: 481px) and (max-width:768px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:80%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }

        .emailSent>h1{
            font-size:x-large;
        }

        .emailSent>p{
            width:80%;
            font-size:small;
        }
    }

    @media only screen and (min-width:320px) and (max-width:480px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:80%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }

        .endSection>p{
            font-size:15px;
        }

        .emailSent>h1{
            font-size:large;
        }

        .emailSent>p{
            width:70%;
            font-size:12px;
        }
    }

    @media only screen and (max-width: 320px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:70%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }

        .endSection>p{
            font-size:10px;
        }

        .emailSent>h1{
            font-size:small;
        }

        .emailSent>p{
            width:70%;
            font-size:10px;
        }
    }


    @media only screen and (max-width: 319px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:80%;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }

        .endSection>p{

            font-size:8px;
        }
    }
    

`
export default ContactUs
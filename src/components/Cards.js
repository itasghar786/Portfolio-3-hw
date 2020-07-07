import React from "react";
import pnwpng from "../assets/pnw.png"
import pnwpng1 from "../assets/googleBooks.png"
import pnwpng2 from "../assets/workEasy.jpg"
import pnwpng3 from "../assets/fitnessTracker.jpg"
import pnwpng4 from "../assets/interCraft.jpg"
function Cards() {
  return (
    <div className="container">
      <div className="row center project-section grey-text text-darken-2">
        <div className="col s12 m6">
          <div className="row">
            <h4 className="proj-description-title">Pawty Time!</h4>
            </div>
            <div className="row">
            <a href="https://pawtytime.herokuapp.com/" >
            <img src={pnwpng} alt="description of image" width="200"/>
            </a>
            </div>
            <div>
            <p>
              This application allows dog owners and dog walkers to schedule
              walks for their dogs. Dog owners can add or delete dogs and use or
              cancel appointments. Dog Walkers can add or delete time slots.
            </p>
            

            
          </div>
           
          
          <div className="row">
            <h4 className="proj-description-title">Google Books Api</h4>
            </div>
            <div className="row">
            <a href="https://asgooglebooks.herokuapp.com/" >
            <img src={pnwpng1} alt="description of image" width="200"/>
            </a>
            </div>
            <div>
            <p>
              This application allows users to find any book that they like from the google API books store

            </p>
            

            
          </div>
          <div className="row">
            <h4 className="proj-description-title">Easy Work Scheduler</h4>
            </div>
            <div className="row">
            <a href="https://workeasyscheduler.herokuapp.com/" >
            <img src={pnwpng2} alt="description of image" width="200"/>
            </a>
            </div>
            <div>
            <p>
            Employee Management System. Used for employers and employees to manage schedules.
             

            </p>
            

            
          </div>

          <div className="row">
            <h4 className="proj-description-title">Fitness Tracker </h4>
            </div>
            <div className="row">
            <a href="https://vast-peak-60545.herokuapp.com/?id=5eacd042e53d6400174fdec7" >
            <img src={pnwpng3} alt="description of image" width="200"/>
            </a>
            </div>
            <div>
            <p>
            Fitness Tracker for people who love to work out! This application saves data and shows to the user th progress
            </p>
            

            
          </div>
          <div className="row">
            <h4 className="proj-description-title">Upholstery Site for a Client </h4>
            </div>
          <div className="row">
            <a href="https://intercraftupholstery.com/" >
            <img src={pnwpng4} alt="description of image" width="200"/>
            </a>
            </div>
            <div>
            <p>
            This application was made with React.js as frontend and had react-bootstrap for the library, And we used nodemailer for the contact form for the client.
            Simple but wonderful!
            </p>
            

            
          </div>

        </div>


      </div>
    </div>

  );
}

export default Cards;
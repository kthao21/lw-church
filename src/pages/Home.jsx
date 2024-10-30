//Needed to create a new file in the pages folder to create the new page
import React from 'react';
import { useState } from 'react';
import kingdomMan from '../assets/images/kingdomman.jpeg';
import mount from '../assets/images/mount.jpeg';
import acts from '../assets/images/acts.jpeg';
import baptism from '../assets/images/baptism.jpg';

export default function Home() {
    return (
      <div className='bio'>
        
      <div class="row">
        <div class="col">
          <div class="card">
            <img src={mount} alt=""/>
            <div class="card-body">
              <h2 class="card-title">English Sermon</h2>
              <p class="card-text">Sermon on the Mount by Pastor Chris</p>
              <button class="btn" onclick="togglePage(page1.html)">Watch Sermon</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={acts} alt=""/>
            <div class="card-body">
              <h2 class="card-title">Hmong Sermon</h2>
              <p class="card-text">Book of Acts by Pastor Lazarus</p>
              <button class="btn" onclick="togglePage(page2.html)">Watch Sermon</button>
            </div>
          </div>
        </div>
      </div>

        <div class="card-columns">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Upcoming Events</h3>
                <img class="card-img-top" src="../src/assets/images/familyfunday.jpeg" alt="Card image cap"/>
                <p class="card-text">Join us as we celebrate a day of family fun for kids of all ages. Friends and family are all welcome!</p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src={kingdomMan} alt="Card image cap"/>
              <div class="card-body">
                <h2 class="card-title">Men's bible study</h2>
                <p class="card-text">This bible study is led by Pastor Chris on a book that teaches men how to be a man of God.</p>
                <p class="card-text"><small class="text-muted">Last updated 2 mins ago</small></p>
              </div>
      </div>
      </div>
      </div>
    );
  }
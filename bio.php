<!DOCTYPE html>
<html lang="en" >
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta charset="utf-8">
    <title>jQuery UI Dialog - Default functionality</title>
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script  src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
    <script type="text/javascript" src="/js/scripts.js"></script>
    <link rel='stylesheet' href="/css/vendor/jquery-ui.css"/>
    <link rel="stylesheet" href="/fonts/font.css"/>
    <link rel="stylesheet" href="/css/style.css"/>
</head>
<body>
<div class="wrapper">
    <header>

        <div class="header-top">
            <div class="container">

                <ul class="topMenu">
                    <li><span>|</span><a href="">Home</a></li>
                    <li><span>|</span><a href="">About us</a></li>
                    <li><span>|</span><a href="">Help</a></li>
                    <li><a  href="" >
                            <img class="icon-user" src="img/user.png">
                            <i class="icon-caret"></i>
                            <i class="dropdown-user-menu">Michele M </i></li>
                </ul>
                <a href="">
                    <div class="basket">0</div>
                </a>

            </div>
        </div>
        <div class="container">
            <div class="logo-white"></div>
        </div>
    </header>
    <main>
        <div class="container">
            <ul class="breadcrumbs">
                <li><a href="">Home</a><span class="divider">/</span></li>
                <li><a href="">Handyboy</a><span class="divider">/</span></li>
                <li>Profile</li>
            </ul>
            <div class="bio">
                <div class="leftPart">
                    <h1>Michele M</h1>
                    <h2>San Diego, California</h2>
                    <h3>HANDYBOY <b> #fd4684</b></h3>

                    <div class="accordion">
                        <ul>
                            <li><div class="accordion-title active" id="edit-bio"> <b>-</b> <span> Bio</span></div>
                                <div class="inner-body open" style="display:block;">
                                    <label class="small-label">Height</label>
                                    <p>
                                        <input type="text" class="input-text bio-form-height" placeholder="Inches">
                                        <input type="text" class="input-text bio-form-height-inches">
                                    </p>
                                    <label class="small-label">Ethnicity</label>
                                    <p>
                                        <select class="select-bio">
                                            <option>What ethnicity for you identify...</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </p>

                                    <label class="small-label">Hair color</label>
                                    <p>
                                        <select class="select-bio">
                                            <option>What color's your mop?</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </p>

                                    <label class="small-label">Eye color</label>
                                    <p>
                                        <select class="select-bio">
                                            <option>Lapis Lazuli or Viridian?</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </p>

                                    <label class="small-label">Body type</label>
                                    <p>
                                        <select class="select-bio">
                                            <option>How are you built/sculped?</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </p>
                                    <label class="small-label">Search profile</label>
                                    <textarea  class="textarea" placeholder="Tell about you - have fun and be yourself. This is the first
                                    thing a potential client will read about you!">

                                    </textarea>
                                </div>
                            </li>
                            <li><div class="accordion-title" id="work-schedule"><b>+</b> <span> Work Schedule</span></div>
                                <div class="inner-body">
                                    <p class="small-title-light">Set your work schedule</p>
                                    <p class="bio-text">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                        natoque penatibus et magnis dis parturient montes, nascetur
                                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                                        eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                                        pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.

                                    </p>

                                    <div class="calendar">
                                        <ul class="calendar-week">
                                            <li><a href="">SUN</a></li>
                                            <li class="active"><a href="">MON</a></li>
                                            <li><a href="">TUE</a></li>
                                            <li><a href="">WED</a></li>
                                            <li><a href="">THUR</a></li>
                                            <li><a href="">FRI</a></li>
                                            <li><a href="">SAT</a></li>
                                        </ul>
                                        <div class="calendar-days">
                                            <div class="calendar-days-item">8A</div>
                                            <div class="calendar-days-item">8:30A</div>
                                            <div class="calendar-days-item">9A</div>
                                            <div class="calendar-days-item active">9:30A</div>
                                            <div class="calendar-days-item active">10A</div>
                                            <div class="calendar-days-item active">10:30A</div>
                                            <div class="calendar-days-item active">11A</div>
                                            <div class="calendar-days-item active">11:30A</div>
                                            <div class="calendar-days-item active">12A</div>
                                            <div class="calendar-days-item">12:30A</div>
                                            <div class="calendar-days-item">1P</div>
                                            <div class="calendar-days-item">1:30P</div>
                                            <div class="calendar-days-item">2P</div>
                                            <div class="calendar-days-item">2:30P</div>
                                            <div class="calendar-days-item">3P</div>
                                            <div class="calendar-days-item">3:30P</div>
                                            <div class="calendar-days-item">4P</div>
                                            <div class="calendar-days-item">4:30P</div>
                                            <div class="calendar-days-item">5P</div>
                                            <div class="calendar-days-item">5:30P</div>
                                            <div class="calendar-days-item">6P</div>
                                            <div class="calendar-days-item">6:30P</div>
                                            <div class="calendar-days-item">7P</div>
                                            <div class="calendar-days-item">7:30P</div>
                                            <div class="calendar-days-item">8P</div>
                                            <div class="calendar-days-item">8:30P</div>
                                            <div class="calendar-days-item">9P</div>
                                            <div class="calendar-days-item">9:30P</div>
                                            <div class="calendar-days-item">10P</div>
                                            <div class="calendar-days-item">10:30P</div>
                                            <div class="calendar-days-item">11P</div>
                                            <div class="calendar-days-item">11:30P</div>
                                            <div class="calendar-days-item">12P</div>
                                            <div class="calendar-days-item">12:30P</div>
                                            <div class="calendar-days-item">1A</div>
                                            <div class="calendar-days-item">1:30A</div>
                                            <div class="calendar-days-item">2A</div>
                                            <div class="calendar-days-item">2:30A</div>
                                            <div class="calendar-days-item">3A</div>
                                            <div class="calendar-days-item">3:30A</div>
                                            <div class="calendar-days-item">4A</div>
                                            <div class="calendar-days-item">4:30A</div>
                                            <div class="calendar-days-item">5A</div>
                                            <div class="calendar-days-item">5:30A</div>
                                            <div class="calendar-days-item">6A</div>
                                            <div class="calendar-days-item">6:30A</div>
                                            <div class="calendar-days-item">7A</div>
                                            <div class="calendar-days-item">7:30A</div>
                                        </div>
                                    </div>

                                    <p class="small-title-light">Customize your calendar</p>
                                    <p class="bio-text">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                        natoque penatibus et magnis dis parturient montes, nascetur
                                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                                        eu, pretium quis, sem.

                                    </p>
                                </div>
                            </li>
                            <li><div class="accordion-title" id="job-details"><b>+</b> <span> Job Details</span></div>
                                <div class="inner-body">
                                    <div class="job-details">
                                    <div class="category-jobs">
                                        <p class="category-jobs-item category-jobs-item-1 active"></p>
                                        <p class="category-jobs-item category-jobs-item-2"></p>
                                        <p class="category-jobs-item category-jobs-item-3"></p>
                                        <p class="category-jobs-item category-jobs-item-4"></p>
                                        <p class="category-jobs-item category-jobs-item-5"></p>
                                        <p class="category-jobs-item category-jobs-item-6"></p>
                                        <p class="category-jobs-item category-jobs-item-7"></p>
                                        <p class="category-jobs-item category-jobs-item-8"></p>
                                        <p class="category-jobs-item category-jobs-item-9"></p>
                                        <p class="category-jobs-item category-jobs-item-10"></p>
                                    </div>

                                    <p class="job-details-title">
                                        Personal trainer
                                    </p>
                                    <div class="job-details-hr"></div>
                                        <div class="personal-trainer">
                                            <p>You must be insured to perform this service* </p>
                                            <p>Upload proof of current personal trainer;s insurance(Min 500k) </p>
                                            <div class="upload-file">
                                                <input type="file" style="color:red"/>
                                            </div>
                                            <p class="upload-file-text">(Must be PDF or Jpeg)</p>
                                            <div class="job-details-hr"></div>
                                        </div>
                                        <div class="job-details-info">
                                            <p class="job-details-info-text">
                                                What will you charge?<br>
                                                You can customizethis at any time<br><br>
                                                Price oer Hour
                                            </p>
                                            <p class="job-details-info-price">
                                                <span class="job-details-info-price-small">Total</span><br>
                                                <span class="job-details-info-price-big">50$</span>
                                            </p>
                                        </div>

                                        <div class="slider"></div>

                                        <p class="job-details-info-texts">
                                            We Suggest anywhere between <b>50$ - 70$</b>
                                        </p>

                                        <p class="job-details-info-text-small">
                                            Would you like to add an additional charge<br>
                                            for gigs over 15 miles away?
                                        </p>

                                        <div class="job-details-check">
                                            <input id="one" type="radio" name="one" hidden />
                                            <label for="one" >YES</label>

                                            <input id="two" type="radio" name="one" hidden />
                                            <label for="two" >NO</label>
                                        </div>
                                        <p class="job-details-info-text"> Describe your services </p>


                                        <textarea class="textarea">

                                        </textarea>

                                        <div class="work-place">
                                            <div class="work-place-item">
                                                <input id="three" type="radio" name="two" hidden />
                                                <label for="three" >
                                                    <p class="work-place-item-title">Home</p>
                                                    <p class="work-place-item-text">553 Mocking Bird Lane</p>
                                                </label>

                                            </div>
                                            <div class="work-place-item">
                                                <input id="four" type="radio" name="two" hidden />
                                                <label for="four" >
                                                    <p class="work-place-item-title">Work</p>
                                                    <p class="work-place-item-text">5653 NotSoBad Place</p>
                                                </label>

                                            </div>
                                        </div>

                                        <p class="title-big">+ Add new location</p>
                                        <label class="small-label"><b>What should we call this place?</b></label>
                                        <p>
                                            <input type="text" class="input-text input-text-large"
                                                   placeholder="Home, Work, Friends...">
                                        </p>
                                        <div class="job-details-location">
                                            <div class="job-details-location-input-big">
                                                <label class="small-label"><b>What the Address?</b></label>
                                                <p>
                                                    <input type="text" class="input-text"
                                                           placeholder="848 Bambam Lane">
                                                </p>
                                            </div>
                                            <div class="job-details-location-input-small">
                                                <label class="small-label"><b>City</b></label>
                                                <p>
                                                    <input type="text" class="input-text"
                                                           placeholder="Los Angelos">
                                                </p>
                                            </div>
                                        </div>

                                        <div class="job-details-location">
                                            <div class="job-details-location-input-big">
                                                <label class="small-label" style="opacity: 0;"><b>df</b></label>
                                                <p>
                                                    <input type="text" class="input-text"
                                                           placeholder="15 Apt">
                                                </p>
                                            </div>
                                            <div class="job-details-location-input-small">
                                                <label class="small-label"><b>State</b></label>
                                                <p>
                                                    <select class="select-2">
                                                        <option>CA</option>
                                                        </select>
                                                </p>
                                            </div>
                                        </div>


                                        <div class="job-details-location">
                                            <div class="job-details-location-input-big">
                                                <label class="small-label"><b>Finally, the Zip </b></label>
                                                <p>
                                                    <input type="text" class="input-text"
                                                           placeholder="65648">
                                                </p>
                                            </div>
                                            <div class="job-details-location-input-small">
                                                <span  class="job-details-location-check"> <input id="five" type="radio"  name="three" hidden />
                                                <label for="five">
                                                    <p class="work-place-item-title">Save address</p>
                                                </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="range">
                                        <div class="job-details-info">
                                            <div class="job-details-info-text">
                                                <b>Will you charge a location fee?</b>
                                                        <p class="job-details-info-text-small">
                                                                You can customizethis at any time</p><br>
                                                Price oer Hour
                                            </div>
                                            <div class="job-details-info-price">
                                                <span class="job-details-info-price-small">Total</span><br>
                                                <span class="job-details-info-price-big">10$</span>
                                            </div>
                                        </div>

                                        <div class="slider"></div>

                                        <p class="job-details-info-texts">
                                            We Suggest anywhere between <b>5$ - 15$</b>
                                        </p>



                                        <div class="job-details-info">
                                            <div class="job-details-info-text">
                                                <b>What you consider going shirtless at this location?</b><br>
                                                    <p class="job-details-info-text-small">
                                                            You can customizethis at any time</p><br>
                                                Price oer Hour
                                            </div>
                                            <div class="job-details-info-price">
                                                <span class="job-details-info-price-small">Total</span><br>
                                                <span class="job-details-info-price-big">10$</span>
                                            </div>
                                        </div>

                                        <div class="slider"></div>

                                        <p class="job-details-info-texts">
                                            We Suggest anywhere between <b>5$ - 15$</b>
                                        </p>

                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>


                <div class="rightPart">
                    <div class="users-avatars">
                        <div class="current-image">
                            <img src="/img/user.png">
                        </div>
                        <div class="smalls-avatars">
                            <img src="/img/user.png">
                            <img src="/img/user.png">
                            <img src="/img/user.png">
                            <img src="/img/user.png">
                            <img src="/img/user.png">
                            <button class="add-photo-profile">

                            </button>
                        </div>
                    </div>
                    <div class="user-profile-complete">
                        <div class="user-profile-complete-header">
                            Percent complete <i class="icon-info-white"></i>
                        </div>
                        <p class="user-profile-complete-next-step">
                            Next steps
                        </p>
                        <ul class="user-profile-complete-steps">
                            <li>Add photo +5%</li>
                            <li>Bio +15%</li>
                            <li>Search profile +5%</li>
                            <li>Schedule +20%</li>
                            <li>Job Details +15%</li>
                        </ul>
                    </div>
                </div>


            </div>
            <div class="button-group">
            <button class="btn-dark-standard edit-back"><i class="icon-arrow-back"></i> Back</button>
            <button class="btn-dark-standard work-schedule-next edit-next">Work Schedule<i class="icon-arrow-next"></i></button>
            </div>
        </div>
    </main>
</div>
<footer>
    <div class="container">
        <ul>
            <li><a href="">Blog</a> </li>
            <li><a href="">About</a> </li>
            <li><a href="">Events</a> </li>
            <li><a href="">Help</a> </li>
        </ul>
    </div>
</footer>

<script>

    $( ".select-bio" ).selectmenu({ width: 650 });
    $( ".select-2" ).selectmenu({ width: 225 });

</script>
</body>
</html>
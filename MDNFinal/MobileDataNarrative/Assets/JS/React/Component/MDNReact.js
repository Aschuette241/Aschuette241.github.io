
(() => {
    
    const Filters = (props) => {
        let updateInstrumentType = (clickEvent) => {
            props.updateFormState({
                instrumentType: clickEvent.target.value,
            });
        }

        let updateBestStatus = (clickEvent) => {
            props.updateFormState({
                isTheBest: clickEvent.target.checked,
            });
        }
        let updateRating = (clickEvent) => {
            props.updateFormState({
                Rating: clickEvent.target.value,
            });
        }
        let updateClose = (clickEvent) => {
            props.updateFormState({
                closeTab: clickEvent.target.checked,
            });
        }
        
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                    <div className='col-md-12' id="theTitle">
                    
                            <p>
                                <i className="fa-solid fa-headphones">  </i>
                                         My Music Data 
                                 <i className="fa-solid fa-radio"></i>
                                </p>
                           
                    </div>
                    </div>
                </div>
                <div className='container'>
        <div className='row'>
            
            <div className='col-md-3'>
            
                
                <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/Moneyfornothing2.jpg" className="responsive" alt="MFN"></img>
                <img src="https://i.scdn.co/image/ab67616d0000b273bc9b44e950d5440ff65ea926" className="responsive"alt="HWS"></img>
                <img src="https://i1.sndcdn.com/artworks-000044960850-w29khc-t500x500.jpg" className="responsive"alt="COD"></img>
                <img src="https://cdns-images.dzcdn.net/images/cover/0aeeab7a9ef9dcc03e3c6490f9bf822d/350x350.jpg" className="responsive"alt="HWS"></img>
                
                <i className="fa-solid fa-guitar"></i>
            </div>
            <div className='col-md-6' id="IntroPara">Music has always been a core part of my life and personhood, and I felt it was best that I create something that reflects my taste in music, and what it says about me as a musician. I wanted to know what songs have influenced my journey as a musician, and, to a certain extent, why.
            <br></br>
            <br></br>
             I decided to gather a list of my top songs for the instruments that I play the most, the guitar and the piano, with  50 and 25 respectively.

To collect data, I had to find a lot of songs, based on personal criteria. My goal was to stick to the top 25- 50 songs for guitar and piano that I consider to be the best, the most technically complicated, the most groundbreaking, and of course, my personal favorites. From there, I first thought of songs that I had learned on the selected instruments, as they offered insight into my mentality towards those songs. Choosing a song to play, and attempting to master requires a deeper understanding of how and why one chooses a song to play, especially when chosen out of passion. After this, I scoured through different playlists of mine to find more songs to choose. 
<br/>
<br/>

The first chart that I have here is a table that sorts through all of the songs on both lists, and can filter them based on instrument and rating, as well has a checklist to sort out whether or not the song has both a good guitar and piano part to it. There is also an option to just show and hide the data at will, to make it easier to see the graphs. It is also plotted in a way so that it is possible to see all of the attributes of every song at once.
</div>
            <div className='col-md-3'>
                <img src="https://i.scdn.co/image/ab67616d0000b2739f0d8f5039a572dbfc21e368" className="responsive"></img>
                <img src="https://i.scdn.co/image/ab67616d0000b27313ee90a492fe5c63b6651e06" className="responsive"></img>
                <img src="https://images.genius.com/40840779c2c219a789603b4e1a744b0c.1000x1000x1.jpg" className="responsive"></img>
                <img src="https://www.guitarcommand.com/wp-content/uploads/2014/03/Pat-Metheny-Still-Life-Talking-Review-main.jpg" className="responsive"></img>
                    
                <i className="fa-solid fa-music"></i>

                
            </div>
        </div>
    </div>
    <div className='container'>
                    <div className='row'>
                    <div className='col-md-12'>
                            <h1 id='GTitle'>Music Data Table</h1>
                    </div>
                    </div>
                </div>
                <div className='container' id='dataBar'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <b>Instrument: </b>
                            <select
                                onChange={updateInstrumentType}>
                                <option value=''>&nbsp;</option>
                                <option value='Guitar'>Guitar</option>
                                <option value='Piano'>Piano</option>
                            </select>
                        </div>





                        <div className='col-md-3'>

                            <b>Sort By Rating:  </b>
                            <select
                                onChange={updateRating}>
                                <option value=''>&nbsp;</option>
                                <option value='10'>10</option>
                                <option value='9.5'>9.5</option>
                                <option value='9'>9</option>
                                <option value='8.5'>8.5</option>
                                <option value='8'>8</option>
                                <option value='7.5'>7.5</option>
                                <option value='7'>7</option>
                                



                            </select>
                        </div>
                        <div className='col-md-3'>
                            <b>Both Piano and Guitar Songs: </b>
                            <input
                                type='checkbox'
                                onChange={updateBestStatus}
                            />
                        </div>
                        <div className='col-md-3'>
                            <b>Show/Hide Table: </b>
                            <input
                                type='checkbox'
                                onChange={updateClose}
                            />
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )

    }


    const DataTable = (props) => {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
            <div className="table-responsive" id="theTable">
                <table className="table custom-table">
                    <tbody><tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                        <th>Rating</th>
                        <th>Reason</th>
                    </tr>

                        {props.dataToDisplay.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row.Song}</td>
                                    <td>{row.Artist}</td>
                                    <td>{row.Year}</td>
                                    <td>{row.Rating}</td>
                                    <td>{row.Reason}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className='col-md-1'></div>
            </div>
            </div>
            </div>
            )
    }
    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);
            this.originalData = props.originalData;
            this.state = {
                instrumentType: '',
                Rating:'',
                isTheBest: false,
                closeTab:false,

            };
            this.updateFormState = this.updateFormState.bind(this);

        }
        updateFormState(specification) {
            this.setState(specification);
        }
        render() {
            let filteredData = this.originalData;
            if (this.state.instrumentType !== '') {
                filteredData = filteredData.filter(
                    (row) => row.instrumentType === this.state.instrumentType
                );
            }
            if (this.state.Rating !== '') {
                filteredData = filteredData.filter(
                    (row) => row.Rating === this.state.Rating
                );
            }
            if (true === this.state.isTheBest) {
                filteredData = filteredData.filter(
                    (row) => row.isBest === true
                );
            }
            if (true === this.state.closeTab) {
                filteredData = filteredData.filter(
                    (row) => row.closeTab === true
                );
            }



            return (
                <React.Fragment>
                    <Filters
                        instrumentType={this.state.instrumentType}
                        Rating={this.state.Rating}
                        isTheBest={this.state.isTheBest}
                        closeTab={this.state.closeTab}
                        updateFormState={this.updateFormState} />
                    <hr />
                    <DataTable
                        dataToDisplay={filteredData}
                    />
                </React.Fragment>
            );

        }
    }
    const songData = [
        

    {
        "instrumentType": "Guitar",
        "Song": "Cliffs of Dover",
        "Artist": "Eric Johnson",
        "Year": "1990",
        "Rating": "10",
        "Reason": "Amazing guitar song with a very iconic riff",
        "isBest": false,
        
    },
    {
        "instrumentType": "Guitar",
        "Song": "Sultans of Swing",
        "Artist": "Dire Straits",
        "Year": "1978",
        "Rating": "10",
        "Reason": "One of my personal favorite songs, I spent a lot of time learning this",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Hotel California",
        "Artist": "The Eagles",
        "Year": "1976",
        "Rating": "9.8",
        "Reason": "Great song with not only a very iconic riff on a 12-string guitar but also one of the most iconic guitar solos.",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Highway Star",
        "Artist": "Deep Purple",
        "Year": "1972",
        "Rating": "10",
        "Reason": "I really like both of the solos of this song, and the intro is also really cool",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Money For Nothing",
        "Artist": "Dire Straits",
        "Year": "1985",
        "Rating": "10",
        "Reason": "The main riff is very catchy, powerful, and just has the essence of rock",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Roundabout",
        "Artist": "Yes",
        "Year": "1971",
        "Rating": "9.7",
        "Reason": "I like both the parts where it switches between acoustic and electric guitar, and the opening riff is like no other. It also has a sick E-keyboard part",
        "isBest": true
    },
    {
        "instrumentType": "Guitar",
        "Song": "The Trooper",
        "Artist": "Iron Maiden",
        "Year": "1983",
        "Rating": "9.7",
        "Reason": "I really like the layered guitar part of this one",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Under The Bridge",
        "Artist": "Red Hot Chili Peppers",
        "Year": "1991",
        "Rating": "8.2",
        "Reason": "Iconic song, as well as the switch from the more mellow sound to the second and third parts",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Free Bird",
        "Artist": "Lynyrd Skynyrd",
        "Year": "1973",
        "Rating": "9.3",
        "Reason": "This song is great and energetic, however, its first half is a bit slow",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Tribute",
        "Artist": "Tenacious D",
        "Year": "2001",
        "Rating": "9.2",
        "Reason": "A tribute to the best song in the world does its job well",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Mississippi Queen",
        "Artist": "Mountain",
        "Year": "1970",
        "Rating": "8.3",
        "Reason": "Iconic riff but a bit shorter than I would like it to be",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Dream On",
        "Artist": "Aerosmith",
        "Year": "1973",
        "Rating": "8.2",
        "Reason": "I want to fall off a cliff like Kratos when I hear this",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Kickstart My Heart",
        "Artist": "Mötley Crüe",
        "Year": "1989",
        "Rating": "9.4",
        "Reason": "The way this one sounds like a revving engine at the start and then immediately kicks off is awesome",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Paranoid",
        "Artist": "Black Sabbath",
        "Year": "1970",
        "Rating": "8.3",
        "Reason": "I like the crispy tone of the guitar at the beginning",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Nightmare",
        "Artist": "Avenged Sevenfold",
        "Year": "2010",
        "Rating": "9.5",
        "Reason": "One of my favorite Ax7 songs, I love every part of the guitar on this. There is a nice piano part here, albeit a bit drowned out by the guitar parts.",
        "isBest": true
    },
    {
        "instrumentType": "Guitar",
        "Song": "Buried Alive",
        "Artist": "Avenged Sevenfold",
        "Year": "2010",
        "Rating": "8.5",
        "Reason": "One of the softer Ax7 songs, the guitar intro is very nice and smooth, but also has a lot of emotion to it",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Hail To The King",
        "Artist": "Avenged Sevenfold",
        "Year": "2013",
        "Rating": "8.2",
        "Reason": "This one is sick, but loses points for making me detune half the strings on my guitar",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Unholy Confessions",
        "Artist": "Avenged Sevenfold",
        "Year": "2003",
        "Rating": "7.5",
        "Reason": "Not my favorite song, but the guitar is pretty sick at the beginning",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Beast and the Harlot",
        "Artist": "Avenged Sevenfold",
        "Year": "2005",
        "Rating": "9",
        "Reason": "Some very awesome guitar solos, as well as the background part is nice too",
        "isBest": false
    },
    {

        "instrumentType": "Guitar",
        "Song": "Shepherd of Fire",
        "Artist": "Avenged Sevenfold",
        "Year": "2013",
        "Rating": "9",
        "Reason": "This song very much reminds me of Enter Sandman, but is different enough to be unique and still sounds cool",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Bat Country",
        "Artist": "Avenged Sevenfold",
        "Year": "2005",
        "Rating": "9",
        "Reason": "One of the best Ax7 solos in my opinion",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "One",
        "Artist": "Metallica",
        "Year": "1988",
        "Rating": "8.5",
        "Reason": "The intro is great, with the 3 different guitar parts all harmonizing really well",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Master of Puppets",
        "Artist": "Metallica",
        "Year": "1986",
        "Rating": "9",
        "Reason": "Every part of this song has something different and memorable",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Purple Haze",
        "Artist": "Jimmy Hendrix",
        "Year": "1967",
        "Rating": "7.5",
        "Reason": "I like the main riff of this song",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Johnny B. Goode",
        "Artist": "Chuck Berry",
        "Year": "1958",
        "Rating": "8.5",
        "Reason": "Very iconic, classic rock and roll song, even better when Marty McFly did it",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Chop Suey",
        "Artist": "System of a Down",
        "Year": "2001",
        "Rating": "9.5",
        "Reason": "I love every part of this song, from the more dramatic intro, to the more metal parts, to the chorus. There is a cool piano part here as well",
        "isBest": true
    },
    {
        "instrumentType": "Guitar",
        "Song": "Sugar",
        "Artist": "System of a Down",
        "Year": "1998",
        "Rating": "9",
        "Reason": "I like the part after the intro",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Deer Dance",
        "Artist": "System of a Down",
        "Year": "2001",
        "Rating": "9",
        "Reason": "I really like the winding sounding guitar part",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Thunderstruck",
        "Artist": "AC/DC",
        "Year": "1990",
        "Rating": "8.5",
        "Reason": "Probably my favorite AC/DC song, is also one of the first songs I learned on guitar",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Dirty Deeds Done Dirt Cheap",
        "Artist": "AC/DC",
        "Year": "1976",
        "Rating": "8",
        "Reason": "Very classic rock song, an iconic riff",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Through the Fire and Flames",
        "Artist": "DragonForce",
        "Year": "2005",
        "Rating": "9.5",
        "Reason": "This song could always give me energy if I had none, also reminds me that I suck at guitar hero",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Miserlou",
        "Artist": "Dick Dale",
        "Year": "1962",
        "Rating": "8.5",
        "Reason": "A staple of surf rock songs, never fails to sound cool",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Sommernacht",
        "Artist": "Bernhard Lackner",
        "Year": "2019",
        "Rating": "8.5",
        "Reason": "A great jazz fusion song that I think has a cool guitar part. I like the whimsical sounding piano part too",
        "isBest": true
    },
    {
        "instrumentType": "Guitar",
        "Song": "Crazy train",
        "Artist": "Ozzy Osbourne",
        "Year": "1980",
        "Rating": "8.5",
        "Reason": "Crazy? I was crazy once. They locked me in a train. A train with this song. This song made me crazy.",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Breezin'",
        "Artist": "George Benson",
        "Year": "1976",
        "Rating": "8",
        "Reason": "A chill song with a great guitar part",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Can't Stop",
        "Artist": "Red Hot Chili Peppers",
        "Year": "2002",
        "Rating": "8",
        "Reason": "The guitar part has a cool buildup to it at the beginning",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "(Don't Fear) The Reaper",
        "Artist": "Blue Oyster Cult",
        "Year": "1976",
        "Rating": "8.5",
        "Reason": "A great and iconic riff in a pretty good song",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Go Your Own Way",
        "Artist": "Fleetwood Mac",
        "Year": "1977",
        "Rating": "8",
        "Reason": "Reminds me of Sultans of Swing with the chord progression",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Wanted Dead Or Alive",
        "Artist": "Bon Jovi",
        "Year": "1996",
        "Rating": "9",
        "Reason": "Makes me feel like a cowboy, I like the 12 string intro part",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Snow (Hey Oh)",
        "Artist": "Red Hot Chili Peppers",
        "Year": "2006",
        "Rating": "7",
        "Reason": "Iconic RHCP riff that I think is cool",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Enter Sandman",
        "Artist": "Metallica",
        "Year": "1991",
        "Rating": "8",
        "Reason": "One of the most iconic riffs of all time, better that I could play it endlessly and never start the song.",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Runnin' Down A Dream",
        "Artist": "Tom Petty",
        "Year": "1989",
        "Rating": "8",
        "Reason": "One of my favorite Tom Petty songs, I like its more energetic feel",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Die With Your Boots On",
        "Artist": "Iron Maiden",
        "Year": "1983",
        "Rating": "8",
        "Reason": "I like the sound that Iron Maiden has with the songs on this album",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Hermes",
        "Artist": "Santana",
        "Year": "2005",
        "Rating": "8.6",
        "Reason": "I like the more Latin-esque sound of this song, mixed with a more rock sounding guitar",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Unbound(The Wild Ride)",
        "Artist": "Avenged Sevenfold",
        "Year": "2007",
        "Rating": "9",
        "Reason": "A great mix of both piano and guitar in an amazing song",
        "isBest": true
    },
    {
        "instrumentType": "Guitar",
        "Song": "Seven Nation Army",
        "Artist": "The White Stripes",
        "Year": "2003",
        "Rating": "8",
        "Reason": "A simple, yet iconic song that has some cool guitar",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Truckin",
        "Artist": "Grateful Dead",
        "Year": "1970",
        "Rating": "8.7",
        "Reason": "I like the country-rock-blues fusion feel",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "A Horse With No Name",
        "Artist": "America",
        "Year": "1971",
        "Rating": "8.2",
        "Reason": "Even though it is rather simple, it has a nice deserty sound to it",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Ventura Highway",
        "Artist": "America",
        "Year": "1972",
        "Rating": "8",
        "Reason": "I like the free-sounding nature of this song",
        "isBest": false
    },
    {
        "instrumentType": "Guitar",
        "Song": "Iron Man",
        "Artist": "Black Sabbath",
        "Year": "1970",
        "Rating": "8.5",
        "Reason": "A really cool song with some awesome guitar",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Hungarian Rhapsody No. 2",
        "Artist": "Franz Liszt",
        "Year": "1851",
        "Rating": "10",
        "Reason": "One of the best piano compositions in my opinion, uses the full range of how the piano can be used. There is also a composition of this for guitar, which I also think is great, but did not want to duplicate on this 'Liszt'",
        "isBest": true
    },
    {
        "instrumentType": "Piano",
        "Song": "Maple Leaf Rag",
        "Artist": "Scott Joplin",
        "Year": "1899",
        "Rating": "9.5",
        "Reason": "It's classic and is a great ragtime song",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Molly on the Shore",
        "Artist": "Percy Granger",
        "Year": "1907",
        "Rating": "10",
        "Reason": "One of my favorite piano songs, I like its Irish sound",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "That's All",
        "Artist": "Genesis",
        "Year": "1983",
        "Rating": "9",
        "Reason": "While repetitive, I think the main piano riff is cool",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Virtual Insanity",
        "Artist": "Jamiroquai",
        "Year": "1996",
        "Rating": "9.5",
        "Reason": "A funky feeling song that makes me want to slowly slide across the floor while approaching the camera",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Don’t Stop Believin'",
        "Artist": "Journey",
        "Year": "1981",
        "Rating": "9",
        "Reason": "A song that has a lot of personal meaning to me, with a great piano part",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Take the A Train",
        "Artist": "Duke Ellington",
        "Year": "1939",
        "Rating": "9.5",
        "Reason": "One of my favorite classic jazz piano songs, the intro is also very iconic",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "I can't get started",
        "Artist": "Duke Ellington",
        "Year": "1960",
        "Rating": "9",
        "Reason": "A great Ellington piece that I like a lot",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Caravan",
        "Artist": "Duke Ellington",
        "Year": "1962",
        "Rating": "8.5",
        "Reason": "While not the first or last rendition of this song, this one has Duke Ellington playing the piano for the main part of the song.",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "How Deep Is The Ocean",
        "Artist": "Bill Evans Trio",
        "Year": "1959",
        "Rating": "8.5",
        "Reason": "A great and relaxing song that has some great piano",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Giant Steps",
        "Artist": "John Coltrane",
        "Year": "1960",
        "Rating": "9",
        "Reason": "A song that so fast, yet great, the piano player can't even keep up",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Straight, No Chaser",
        "Artist": "Thelonious Monk",
        "Year": "1967",
        "Rating": "8.5",
        "Reason": "A nice jazz song with a cool piano intro",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Isn't This a Lovely Day",
        "Artist": "Ella Fitzgerald and Louis Armstrong",
        "Year": "1935",
        "Rating": "8",
        "Reason": "A peaceful, yet complex piano song",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Piano Concerto No. 1 in C Major",
        "Artist": "Ludwig van Beethoven",
        "Year": "1798",
        "Rating": "9",
        "Reason": "One of the most intense piano songs I have ever heard",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Skating in Central Park",
        "Artist": "Bill Evans & Jim Hall",
        "Year": "1962",
        "Rating": "8.5",
        "Reason": "A magical piano and guitar song that gives off a nice, cozy, wintery vibe",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Splanky",
        "Artist": "Count Basie",
        "Year": "1958",
        "Rating": "8.5",
        "Reason": "A great song that has a lot of the iconic Count Basie sound",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Autumn Leaves",
        "Artist": "Bill Evans Trio",
        "Year": "1980",
        "Rating": "8.5",
        "Reason": "A very nice sounding song with some great piano playing",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Minuano (Six Eight)",
        "Artist": "Pat Metheny Group",
        "Year": "1987",
        "Rating": "9",
        "Reason": "One of my favorite jazz fusion songs with a great second part to it",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Killer Queen",
        "Artist": "Queen",
        "Year": "1974",
        "Rating": "9",
        "Reason": "One of the most iconic Queen songs, this one has a great piano sound",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Head Over Heels",
        "Artist": "Tears For Fears",
        "Year": "1985",
        "Rating": "8",
        "Reason": "The intro is very iconic and powerful",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Bad Company",
        "Artist": "Bad Company",
        "Year": "1974",
        "Rating": "8",
        "Reason": "Bad Company (sorry just had to keep the naming scheme)",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "The Entertainer",
        "Artist": "Scott Joplin",
        "Year": "1902",
        "Rating": "8.5",
        "Reason": "One of the most iconic ragtime songs, it has great syncopation",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Piano Concerto No.5 \"Egyptian\" in F major, po 103 II Andante",
        "Artist": "Camille Saint-Saëns",
        "Year": "1896",
        "Rating": "8.5",
        "Reason": "A very unique sounding piece by one of my favorite classical composers",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Minuet in G",
        "Artist": "Christian Petzold",
        "Year": "1725",
        "Rating": "7.5",
        "Reason": "A classical piano song that taught me some good piano technique",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Rondo Alla Turca",
        "Artist": "Wolfgang Amadeus Mozart",
        "Year": "1784",
        "Rating": "8",
        "Reason": "Not only one of the most iconic piano songs, but classical piano as well",
        "isBest": false
    },
    {
        "instrumentType": "Piano",
        "Song": "Piano Sonata No.16 in C Major",
        "Artist": "Wolfgang Amadeus Mozart",
        "Year": "1788",
        "Rating": "8",
        "Reason": "One of my favorite piano songs for when I was learning",
        "isBest": false
    },

    ];
    
    const container = document.getElementById(`react-data-table`);
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={songData} />);


})();

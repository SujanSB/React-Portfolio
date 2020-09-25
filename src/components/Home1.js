import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Home extends Component {
    state = {}

    render() {
        return (<div className="Home">

          {/* <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='Sidebox'>
            <h4>{data.homepageData[0]} </h4><br/><span>{data.homepageData[1]}</span><br></br>
            {data.homepageData[2]}
               <br></br>
                    <button><a href="/">DownloadCV</a></button>
                </p>
            </Fade> */}
            <section ClassName="home">
			<img src={require('./images/1 .png')} data-speed="-5" class="layer"/>
			<img src={require('./images/2.png')} data-speed="5" class="layer"/>
			<img src={require('./images/3.png')} data-speed="2" class="layer"/>
			<img src={require('./images/4.png')} data-speed="6" class="layer"/>
			<img src={require('./images/5.png')} data-speed="8" class="layer"/>
			<img src={require('./images/6.png')} data-speed="2" class="layer"/>
			<img src={require('./images/7.png')} data-speed="4" class="layer"/>
			<img src={require('./images/8.png')} data-speed="-9" class="layer"/>
			<img src={require('./images/9.png')} data-speed="6" class="layer"/>
			<img src={require('./images/10.png')} data-speed="-7" class="layer"/>
			<img src={require('./images/11.png')} data-speed="-5" class="layer"/>
			<img src={require('./images/12.png')} data-speed="5" class="layer"/>
			<div id="bichko" class="layer" data-speed="2">
				<h2>Hello you found me .....</h2>
			
				<h3>Wellcome !!!</h3>
				
				<h1>I'm <spam>Sujan Bhattarai</spam></h1>
			</div>
		</section>




        </div>);
    }
}

export default Home;
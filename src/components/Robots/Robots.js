import React, {useState, useEffect} from 'react';
import './Robots.css';


function Robots (){
     const [robot, setRobot]=useState("/public/Robots");
     const [type, setType]=useState("");
     const [datei, setDatei]=useState("");

     const [robotFiles, setRobotFiles]=useState([]);
     const [dateiFiles, setDateiFiles]=useState([]);
     const [robotSelect, setRobotSelect]=useState('');
     const [dateiSelect, setDateiSelect]=useState('');
     const [dateiTypSelect, setDateiTypSelect]=useState('');
     const [textAreaValue, setTextAreaValue]=useState('');


    function getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
    }

    const changeRoboter=(e)=>{
        setRobotSelect(e.target.value);
    }

    const changeDatei=(e)=>{
        setDateiSelect(e.target.value);
        console.log(dateiSelect);
    }

    const changeDateiTyp=(e)=>{
        setDateiTypSelect(e.target.value);
        console.log(dateiTypSelect);
    }

    let pathRoboter='';
    let pahtDatei='';
    React.useEffect(()=>{
        fetch(`http://localhost:3000/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                path: robot
            })
        })
            .then(res => getResponseData(res))
            .then((data)=>{
                Object.values(data.test);
                setRobotFiles(data.test)
                pathRoboter=data.test[0];
            })
            .then(()=>{
                fetch(`http://localhost:3000/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        path: `/public/Robots/${pathRoboter}/colorsystem`
                    })
                })
                    .then(res => getResponseData(res))
                    .then((data)=>{
                        Object.values(data.test);
                        setDateiFiles(data.test);
                        pahtDatei=data.test[0];
                        fetch(`http://localhost:3000/viewprogramm`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                path: `/public/Robots/${pathRoboter}/colorsystem/${pahtDatei}`
                            })
                        })
                            .then(res => getResponseData(res))
                            .then((res)=>{
                                var array = res.data;
                                setTextAreaValue(array);
                            })
                    })

            })
            .catch((err)=>{console.log(err)})

    },[])

    return (
        <section className="list">
            <div className="list__contaioner">
                <div className="list__title">
                    <img className="list__save-icon" src='../images/save.png' alt="save" />
                        <div className="list__roboter">
                            <div className="list__roboter-title">Roboter:</div>
                            <select type="file" id="roboter" className="list__roboter-title" value={robotSelect} onChange={changeRoboter}>
                                {robotFiles.map((option) => (
                                    <option value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        <div className="list__roboter">
                            <div className="list__roboter-title">Dateityp:</div>
                            <select id="dateityp" className="list__roboter-title" value={dateiTypSelect} onChange={changeDateiTyp}>
                                <option value="colorsystem">colorsystem</option>
                                <option value="program">program</option>
                            </select>
                        </div>

                        <div className="list__roboter">
                            <div className="list__roboter-title">Datei:</div>
                            <select id="datei" className="list__roboter-title" value={dateiSelect} onChange={changeDatei}>
                                {dateiFiles.map((option) => (
                                    <option value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div className="list__farbcode">

                        </div>
                </div>
                <div className="list__file">
                    <textarea className="list__filecode" name="inhalt" rows="20" cols="16" value={textAreaValue}></textarea>
                </div>
            </div>

            <div className="list__contaioner list__contaioner_type_display">
                <div className="list__title list__title2">
                    <img className="list__save-icon list__save-icon2" src='./../images/save.png' alt="save" />
                        <div className="list__roboter">
                            <div className="list__roboter-title">Roboter:</div>
                            <select id="roboter2" className="list__roboter-title">
                                {robotFiles.map((option) => (
                                    <option value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        <div className="list__roboter">
                            <div className="list__roboter-title">Dateityp:</div>
                            <select id="dateitypkopie" className="list__roboter-title">
                                <option value="colorsystem">colorsystem</option>
                                <option value="program">program</option>
                            </select>
                        </div>

                        <div className="list__roboter">
                            <div className="list__roboter-title">Datei:</div>
                            <select id="datei2" className="list__roboter-title">
                                {dateiFiles.map((option) => (
                                    <option value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div className="list__farbcode2">
                        </div>
                </div>
                <div className="list__file">
                    <textarea className="list__filecode list__filecode2" name="inhalt" rows="20" cols="16" value={textAreaValue}></textarea>
                </div>
            </div>
        </section>
    )
}

export default Robots;
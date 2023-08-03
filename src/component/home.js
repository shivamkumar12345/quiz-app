import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import {storage} from './firebase';
import {v4} from "uuid";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import "./style.css"
const Home =()=> {
    const [uploadedFile,setUpload] = useState();
    const [fileList, setfileList] = useState([]);
    const fileListRef=  ref(storage, 'file/');

    const handleClick = () => {
        if(uploadedFile == null) return;
        const imageRef= ref(storage, `file/${uploadedFile.name+ "^" + v4()}`);
        uploadBytes(imageRef, uploadedFile).then((snapshot)=>{
            getDownloadURL(snapshot.ref).then(url =>{
                setfileList((prev)=>[...prev, {name:uploadedFile.name, path: url}]);
            });
        });
    }
    const setFile = (event) => { console.log(event);
        if(event.target.files[0] == null){
            alert("no file choosen");
        }
        setUpload(event.target.files[0]);
    }
    useEffect(()=> {
        listAll(fileListRef).then( (res) => {
            //console.log(res);
            res.items.forEach(item => {
                getDownloadURL(item).then((url)=> {
                    setfileList((prev)=>[...prev, {name:item.name.split("^")[0], path: url}]);
                });
            });
        });
    },[]);

    const DownloadFile = (item) => {
        fetch(item.path).then(res => res.blob()).then((blob)=>{
            const blobUrl = window.URL.createObjectURL(new Blob([blob]));
            const aTag = document.createElement("a");
            aTag.href = blobUrl;
            aTag.setAttribute("download", item.name);
            document.body.appendChild(aTag);
            aTag.click(); 
            aTag.remove();
        });
    }
    return(<>
        <div className="home_cont">
            <h1>upload the file</h1>
            <div>
                <input type="file" name="fileupload" onChange={setFile}/>
                
                <button onClick={handleClick}>Upload</button>
            </div>
        </div>
        <div className="home_list_cont">
            {
                fileList?.map((item,id) => 
                    <ul key={id} onClick={()=> DownloadFile(item)}>
                        <DownloadForOfflineIcon style={{marginBottom: "-5px"}}/> <span>{item.name} </span>
                    </ul>
                )
            }
        </div>
    </>);
}
export default Home;
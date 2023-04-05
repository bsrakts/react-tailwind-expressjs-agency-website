import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProjectDetail = () => {

    const { id } = useParams();
  const [projectDetail, setProjectDetail] = useState(null);

    useEffect(()=> {
        axios.get(`http://localhost:5000/api/projects/${id}`)
        .then((response) => {
            setProjectDetail(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id])

    if (!projectDetail){
        return <div>Loading.. Projects Detail</div>
    }

  return (
    <div>
        <img src={projectDetail.projectsİmg}/>
        <h1>{projectDetail.projectsName}</h1>
    </div>
  )
}
import React from 'react'
import { useParams } from 'react-router-dom'
import projectList from '../projectList'

const ProjectDetails = () => {

    const {projectID} = useParams()
    console.log(projectID,"*********")

    const PROJECT = projectList.find((p)=>p.id == projectID)

console.log(PROJECT)


  return (
    <>
    <h2>{PROJECT.title}</h2>
    <div>{PROJECT.description}</div>
    </>
  )
}

export default ProjectDetails
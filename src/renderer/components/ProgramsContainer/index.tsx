import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
// import sass
import styles from "./index.module.scss";

const programs = [
  {
    id: 1,
    name: "Digital Ocean",
    path: "/digitalOcean",
  },
  {
    id: 2,
    name: "Kraken",
    path: "/kraken",
  },
]


export function ProgramsContainer() {

  return (
    <div className={styles.programsContainer}>
      {programs.map((program) => (
        <ProgramCard  key={program.id} name={program.name} path={program.path}/>
      ))}
    </div>
  )
}


interface  ProgramCardProps {
  name: string ;
  path: string ;
}

function ProgramCard(props: ProgramCardProps) {
  const navigate = useNavigate()
  return <div className={styles.programCard}>
    <h3 onClick={() => {
      navigate(props.path)
    }}>{props.name}</h3>
  </div>
}

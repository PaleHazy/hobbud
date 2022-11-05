import { PropsWithChildren } from "react";


const programs = [
  {
    id: 1,
    name: "Digital Ocean",
  },
  {
    id: 2,
    name: "Kraken",
  },
]


export function ProgramsContainer() {

  return (
    <div className={'container'}>
      {programs.map((program) => (
        <ProgramCard key={program.id} name={program.name} />
      ))}
    </div>
  )
}


interface  ProgramCardProps {
  name: string ;
}

function ProgramCard(props: ProgramCardProps) {
  return <div className="program-card">
    <h3>{props.name}</h3>
  </div>
}

import Image from "next/image"
import Link from "next/link"

type teamProps = {
    title: string,
    name: string,
    position: string,
    photo: string,
    id: string,
    about: string,
}

const Team = ({ team }: {team: teamProps}) => {
  return (
    <Link href={`/team#${team.id}`}>
      <div className="bg-grey-600/5 w-64 h-72 lg:w-[300px] xl:w-[360px] lg:h-96 lg:gap-4 2xl:w-[488px] 2xl:h-[498px] flex flex-col gap-3 2xl:gap-8 justify-center items-center rounded-md hover:scale-110 hover:shadow-2xl hover:shadow-red-100 transform transition-all">
        <Image src={team.photo} alt={team.name} width={128} height={128} className="lg:w-48 2xl:w-64" />
        <p className="p-bold-16 uppercase 2xl:text-2xl">{team.name}</p>
        <div className="flex flex-col justify-center items-center">
            <p className="p-semibold-14">{team.title}</p>
            <p className="p-regular-14">{team.position}</p>
        </div>
      </div>
    </Link>
  )
}

export default Team
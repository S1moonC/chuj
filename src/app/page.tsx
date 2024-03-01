import prisma from "../prisma"


export default async function Home( promenna : any, ) {
    const users = await prisma.user.findMany();

    return (
        < main className="bg-color" >
            < div className="text-3xl" >Title< /div >
            < div className="todo-container" >
                < h1 >Moje to-do list< /h1 >
                < ul className="todo-list" >
                    {users.map((user)=>(
                        // Výpis usera
                        < li key={user.index}>{user.name}</li >
                    ))}
                < /ul >
            < /div >
        < /main >
    );
}

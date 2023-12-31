import Link from "next/link";

export default function NavBar({active}){
    return(
        <nav className="bg-slate-900 flex justify-between items-start py-3 px-4 ">
        <ul id="links" className="flex gap-11 items-baseline text-slate-500">
          <li>
            <Link href="/" className="text-slate-100">
              <h1 className="azul-claro-fundo-texto text-2xl">YourCalendar</h1>
            </Link>
          </li>
          <li><Link href="/proxEventos" className={active=="eventos" && "text-slate-100"}>Próximos eventos</Link></li>
          <li><Link href="/meses" className={active=="meses" && "text-slate-100"}>Meses</Link></li>
        </ul>
    
        <div className="flex items-center gap-2">
                <span>{user?.email}</span>

                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
                </div>

                <Button onClick={handleLogout} type="button">logout</Button>
            </div>
      </nav>
    )
}
import Nav from "../components/Nav";

export default function index(){
    const people = [
        {
          name: 'Leonardo da Silva Fortunato',
          role: 'Dev Front-End',
          imageUrl:
            'https://avatars.githubusercontent.com/u/105468535?v=4',
        }, {
          name: 'Raphael Santos Lopes Da Silva',
          role: 'Dev Back-End',
          imageUrl:
            'https://avatars.githubusercontent.com/u/105462948?v=4',
        },
        {
          name: 'Raul Ferreira Silva',
          role: 'Dev Front-End',
          imageUrl:
            'https://avatars.githubusercontent.com/u/105366476?v=4',
        },
        {
          name: 'Victor França Bussioli',
          role: 'Dev Back-End',
          imageUrl:
            'https://avatars.githubusercontent.com/u/68936164?v=4',
        }
        // More people...
    ]

    return(
        <>
            <Nav/>
            <div className="container">
                
            </div>
        </>
    );
}
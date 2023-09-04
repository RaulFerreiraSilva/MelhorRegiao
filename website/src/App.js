import logo from "./logo.svg";
import "./App.css";
import "./output.css";

function App() {
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

  return (
    <div className="bg-red-500">
      <header>
        <h1 className="text-3xl font-bold underline">Site Região</h1>
      </header>
      <section>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nossa Equipe
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

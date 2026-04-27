export default function Home() {

  return (

    <main className="min-h-screen bg-white text-black flex items-center justify-center p-10">

      <div className="max-w-2xl w-full">

        

        <h1 className="text-4xl font-bold">

          Привет, я Дмитрий 👋

        </h1>

        <p className="mt-4 text-gray-600 text-lg">

          Я frontend-разработчик. Делаю сайты и интерфейсы на React / Next.js.

        </p>

        <div className="mt-8">

          <h2 className="text-2xl font-semibold">Обо мне</h2>

          <p className="mt-2 text-gray-600">

            Люблю чистый код, быстрые интерфейсы и простые решения.

          </p>

        </div>

        <div className="mt-8">

          <h2 className="text-2xl font-semibold">Проекты</h2>

          <ul className="mt-2 space-y-2 text-gray-600">

            <li>• Портфолио сайт (этот сайт)</li>

            <li>• UI дашборды</li>

            <li>• Pet-проекты на Next.js</li>

          </ul>

        </div>

        <div className="mt-8">

          <h2 className="text-2xl font-semibold">Контакты</h2>

          <p className="mt-2 text-gray-600">

            Telegram: @yourname<br />

            Email: you@example.com

          </p>

        </div>

      </div>

    </main>

  );

}
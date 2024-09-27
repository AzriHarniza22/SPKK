import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Choice from "./components/Choice";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
      <div className="absolute top-0 w-full bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Flifestyle.kompas.com%2Fread%2F2022%2F05%2F24%2F064520520%2Fjangan-teledor-hapus-5-data-ini-dari-komputer-kantor-sebelum-resign%3Fpage%3Dall&psig=AOvVaw0ZIh7712lkwpsYexmvHoh-&ust=1727540336878000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjbw7PD44gDFQAAAAAdAAAAABAE')] bg-cover bg-no-repeat bg-center">
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <Navbar />
            <h1 className="w-full flex justify-center lg text-3xl font-semibold px-4 leading-relaxed text-white dark:text-white">
              Sistem Penilaian Kinerja Karyawan
            </h1>
            <div className="w-full flex justify-center py-24">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

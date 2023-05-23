const Colección = () => {
  return (
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        
¡Ordena tu comida con anticipación y ahorra tiempo esperando!
      </h2>

      <p className="mt-4 max-w-md text-gray-500">
      ¡No pierdas tiempo en la fila! Anticipa tu pedido de comida y evita largas esperas. Pensado especialmente para estudiantes como tú, te ofrecemos la oportunidad de solicitar tus comidas con anticipación, asegurando así que estén listas y esperándote cuando llegues.
      </p>
    </header>

    <div className="mt-8 sm:flex sm:items-center sm:justify-between">
      <div className="block sm:hidden">
        <button
          className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
        >
          <span className="text-sm font-medium"> Filters & Sorting </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="hidden sm:flex sm:gap-4">
        <div className="relative">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
            >
              <span className="text-sm font-medium"> Disponibilidad </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div
              className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
            >
              <div className="w-96 rounded border border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700"> 0 Seleccionados </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Resetear
                  </button>
                </header>

                <ul className="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label
                      htmlFor="FilterInStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Listo para comer
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterPreOrder"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Para preparar
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterOutOfStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterOutOfStock"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        No disponible
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div className="relative">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
            >
              <span className="text-sm font-medium"> Precio </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div
              className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
            >
              <div className="w-96 rounded border border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700">
                    El precio más alto es $55
                  </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Resetear
                  </button>
                </header>

                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between gap-4">
                    <label
                      htmlFor="FilterPriceFrom"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="De"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>

                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="A"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>

      <div className="hidden sm:block">
        <label htmlFor="SortBy" className="sr-only">SortBy</label>

        <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
          <option>Ordenar por</option>
          <option value="Nombre, DESC">Nombre, DESC</option>
          <option value="Nombre, ASC">Nombre, ASC</option>
          <option value="Precio, DESC">Precio, DESC</option>
          <option value="Precio, ASC">Precio, ASC</option>
        </select>
      </div>
    </div>

    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/cfdtopiy/da3fee42-2e96-4d49-952d-18097a3ec44a.jpeg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />



          <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Torta de carne asada
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $55</span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://houseofyumm.com/wp-content/uploads/2021/06/Taco-Meat-8.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Órden de tacos
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $40</span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/755f697272cbcdc6e5df2adb44b1b705.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Ensalada César
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $35</span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://therecipecritic.com/wp-content/uploads/2022/10/chili-750x1000-1.jpeg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Chilaquiles
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $30  </span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

</div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/b77383acd0bfd906b71a14a7abbe480e.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Burrito
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $25</span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://cdn7.kiwilimon.com/recetaimagen/30158/640x640/32804.jpg.webp"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Ensalada rusa
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $25 </span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://therecipecritic.com/wp-content/uploads/2020/04/easy-empanada.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Empanada
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $15 </span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://hispanickitchen.com/wp-content/uploads/2017/07/Torta-de-Salchichas_3-2.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Torta de salchicha
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $50 </span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://grupolaflorida.com/wp-content/uploads/2021/10/receta-pastes-dulces.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

      <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Pastes dulces
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $20</span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://juliemarieeats.com/wp-content/uploads/2023/01/Chocolate-and-Vanilla-Cupcakes-11-scaled.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Cupcakes de chocolate
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $20 </span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://www.cardamomo.news/__export/1619896247521/sites/debate/img/2021/05/01/6b829973-fd32-4087-a3db-54c4c542ad5a_crop1619895872793.jpg_423682103.jpg"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Manzanas con chamoy
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $10 </span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://www.vvsupremo.com/wp-content/uploads/2017/11/Lime-Tart-Recipe-2.png"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3
              className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Pay de limón
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> $20 </span>
            </p>
            <a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Añadir
  </span>
</a>

          </div>
        </a>
      </li>
    </ul>
  </div>
</section> 
  )
}

export default Colección
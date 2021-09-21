"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          post_title: "Medir perfomance de tu PC",
          userId: 21,
          status: true,
          post_text:
            "Los procesadores de la empresa dirigida por Lisa Su tienen un problema de seguridad que podría afectar a centenares de millones de usuarios. Dicho problema da acceso a claves privadas almacenadas en el sistema y a credenciales de los usuarios, pero ¿cómo de grave es la brecha de seguridad provocada por una actualización reciente de AMD? \n No hay duda que la comunicación entre personas ha dado un cambio enorme con internet, no solo de cara a la comunicación con otros y por tanto a la transmisión de información, sino también de cara al comercio electrónico donde los datos bancarios de cientos de millones de personas circulan por la red y se hace necesario el uso de sistemas de protección mucho más avanzados de lo habitual como son los módulos de hardware de computación confiable. \n Tener nuestros datos almacenados en un espacio de memoria que se puede acceder desde la CPU no es seguro desde el momento en que existen métodos para evitar los métodos de seguridad de protección del procesador central del PC. Es por ello que se hace necesario almacenar los datos privados en memorias en las que no sea fácil acceder por la unidad central de proceso y por tanto tengan un guardián. Hoy sabemos que un fallo en una actualización de seguridad de AMD ha puesto a sus procesadores en jaque. Veamos qué ha ocurrido.\n No, no estamos alarmando a nadie ni lanzando ninguna especulación, sino que esto viene del propio fabricante de los procesadores Ryzen, quienes acaban de lanzar información sobre una vulnerabilidad en sus CPUs como efecto de una actualización reciente en los drivers. La vulnerabilidad fue descubierta por el investigador en seguridad informática Kyriakos Economou, cofundador de ZeroPeril. \n El propio Kyriakos Economou ha descrito la vulnerabilidad con las siguientes palabras: \n Durante nuestras pruebas hemos conseguido filtrar varios gigabytes de páginas físicas no inicializadas, volviendo a localizar y liberando bloques de cientos de localizaciones de esta de manera continua hasta que el sistema no ha sido capaz de devolver el búfer de la página contigua. \n Los contenidos de esas páginas físicas varían desde objetos del kernel hasta pozos de direcciones arbitrarios que se pueden utilizar para evitar métodos de mitigación a la explotación como el KASLR, e incluso elementos del registro (de Windows) como las claves almacenadas en Registry Machine SAM que contiene hashes NTLM de credenciales de autenticación de usuario que se pueden utilizar en las etapas posteriores del ataque. \n Por ejemplo, (dichas credenciales) pueden usarse para robar las credenciales de un usuario con privilegios administrativos o en ataques de estilo pass-the-hash para obtener más acceso dentro de una red. \n Por lo que como podéis ver se trata de un problema bastante grave, ahora bien, pese a su magnitud este ya se ha solucionado, veamos cómo. \n ¿Esta mi PC con CPU AMD en peligro, existe alguna solución? \n A través de un trabajo conjunto entre ambas compañías han podido resolver el problema en los drivers más nuevos de la CPU, los cuales también están incluidos en la última versión de Windows Update. Es más, el parche ya lleva varios días online, la diferencia es que AMD lo lanzó actualizando módulos y ahora lo ha reconocido recientemente. El fallo de seguridad en la actualización de las CPU de AMD se debe a la explotación del actual hardware, la cual ha sido comprometido varias veces en el pasado como le ocurrió a su máximo rival. \n ¿Y qué procesadores y chipsets de AMD se han visto afectados? Pues las APU y CPU equipadas con el AMD Platform Security Processor, lo que incluye los AMD Ryzen en todas sus generaciones: desde las gamas 1000 a los 5000 independientemente de si hablamos de CPU o APU y sean estos para portátiles o sobremesa. Además, no solo afecta a las CPU con arquitectura Zen, sino a todo procesador de AMD que haya salido desde 2012 en adelante. \n AMD tiene planes para reemplazar su Platform Security Processor a partir de 2022 con el lanzamiento de las APU y CPU Ryzen 7000 que será el momento en que integrarán por primera el procesador de seguridad HSP/Plutón desarrollado en conjunto entre Intel, AMD, Microsoft y Qualcomm. El motivo de ello es que piezas de hardware como el Intel Management Engine o el AMD PSP no se han demostrado lo suficientemente buenas para ofrecer un entorno lo suficientemente confiable. \n Por lo tanto, la solución a esta vulnerabilidad de AMD se ha corregido mediante sus últimos drivers de chipset, en concreto con la versión 3.08.17.735, la cual podéis descargar desde la web del fabricante siguiendo este enlace.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_title: "News one",
          userId: 21,
          status: true,
          post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          post_title: "News two",
          userId: 21,
          status: true,
          post_text: "Lorem ipsum dolor sit amet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

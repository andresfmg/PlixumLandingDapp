# PLIXUM --- Especificación del servicio, alcance y marco conceptual

**Documento:** Especificación de servicio y alcance contractual\
**Jurisdicción de referencia:** Colombia\
**Versión:** 1.0 --- septiembre de 2026\
**Estado:** Borrador para revisión jurídica y regulatoria

> **Importante:** este documento es una especificación de producto y un
> borrador de lenguaje contractual/compliance. No constituye concepto
> jurídico. Antes de publicar Términos y Condiciones, deberá ser
> revisado por abogado colombiano con experiencia en activos virtuales,
> derecho financiero, SAGRILAFT/PTEE, protección al consumidor y
> protección de datos.

------------------------------------------------------------------------

## 1. Objetivo

PLIXUM es una plataforma tecnológica que proporciona una interfaz para
que los usuarios interactúen con activos digitales y protocolos basados
en blockchain, principalmente sobre la red Solana.

PLIXUM no pretende operar como banco, establecimiento de crédito,
entidad financiera, custodio tradicional, bolsa de valores, asesor
financiero ni contraparte de las operaciones realizadas mediante
protocolos de terceros.

La plataforma permite al usuario:

1.  crear e interactuar con una estructura de smart contract/PDA en
    Solana;
2.  depositar activos digitales en dicha estructura conforme a las
    reglas del programa;
3.  solicitar operaciones sobre sus activos digitales;
4.  confirmar las operaciones mediante mecanismos de autenticación y
    autorización;
5.  interactuar con protocolos de terceros, incluyendo servicios de
    swap, lending y rampas fiat/cripto;
6.  consultar información y estado de sus operaciones desde la interfaz
    de PLIXUM.

------------------------------------------------------------------------

## 2. Naturaleza del servicio

PLIXUM presta principalmente servicios de:

-   interfaz tecnológica;
-   orquestación de instrucciones;
-   integración tecnológica con protocolos y proveedores terceros;
-   interacción con smart contracts;
-   visualización de información de operaciones;
-   gestión de autenticación, autorización y seguridad de acceso;
-   facilitación de operaciones instruidas por el usuario.

La función de PLIXUM debe entenderse como una **capa tecnológica de
acceso y orquestación**, mientras que determinadas operaciones
subyacentes son ejecutadas por protocolos blockchain o proveedores
terceros.

PLIXUM no adquiere para sí los activos digitales del usuario por el solo
hecho de que el usuario utilice la plataforma.

------------------------------------------------------------------------

## 3. Modelo non-custodial

### 3.1 Principio general

PLIXUM no mantiene ni administra una billetera custodial tradicional en
nombre del usuario y no pretende adquirir la propiedad de los activos
digitales del usuario.

Los activos digitales utilizados mediante la plataforma se mantienen
mediante estructuras blockchain y smart contracts desplegados o
utilizados en la red Solana.

### 3.2 PDA / Smart Contract

Cuando el producto lo requiera, PLIXUM permite al usuario crear una
**Program Derived Address (PDA)** o estructura equivalente controlada
por las reglas de un programa desplegado en Solana.

La PDA:

-   no constituye una cuenta bancaria;
-   no constituye dinero de curso legal;
-   no representa por sí misma un depósito bancario;
-   no constituye una cuenta financiera tradicional;
-   opera conforme a las instrucciones y reglas codificadas en el smart
    contract.

La existencia de una PDA no debe describirse por sí sola como garantía
de ausencia de custodia. La caracterización non-custodial depende de las
capacidades efectivas del programa y de quién puede disponer de los
activos.

### 3.3 Control efectivo

El diseño de PLIXUM debe procurar que PLIXUM no tenga capacidad
unilateral para:

-   retirar arbitrariamente los activos del usuario;
-   transferir activos a una dirección elegida unilateralmente por
    PLIXUM;
-   apropiarse de los activos;
-   cambiar unilateralmente las reglas económicas esenciales del
    contrato;
-   utilizar los activos del usuario para fines propios.

Las operaciones deberán estar limitadas por las reglas del smart
contract y por las autorizaciones previstas para el usuario.

------------------------------------------------------------------------

## 4. Autorización de operaciones

Una operación iniciada desde PLIXUM requiere una instrucción del
usuario.

El flujo de autorización podrá incluir:

1.  selección de la operación;
2.  identificación del activo de origen;
3.  identificación del activo de destino;
4.  cantidad;
5.  condiciones relevantes de ejecución;
6.  cálculo o presentación de las condiciones disponibles;
7.  autenticación del usuario;
8.  código de confirmación enviado al correo electrónico o mecanismo
    equivalente;
9.  ejecución de la operación.

El código OTP constituye un mecanismo de autenticación y autorización de
la instrucción.

El OTP no debe presentarse como una firma criptográfica de blockchain.
Cuando una operación requiera una firma criptográfica adicional, dicha
firma deberá distinguirse expresamente del mecanismo de autenticación
utilizado por PLIXUM.

------------------------------------------------------------------------

# 5. Servicios integrados

## 5.1 Swap de activos digitales

PLIXUM puede proporcionar una interfaz para que el usuario solicite el
intercambio de un activo digital por otro.

Ejemplos:

-   USDC → USDT
-   USDC → EURC
-   USDT → USDC
-   USDC → activos tokenizados
-   USDC → xStocks
-   otros pares soportados por los protocolos integrados.

PLIXUM no debe presentarse como contraparte económica del intercambio
cuando la operación sea ejecutada por un protocolo tercero.

### Jupiter

Cuando se utilice Jupiter, PLIXUM podrá:

-   recibir la instrucción del usuario;
-   solicitar o construir la información necesaria para la operación;
-   presentar al usuario las condiciones disponibles;
-   obtener una ruta de ejecución;
-   enviar la operación al mecanismo correspondiente;
-   ejecutar la transacción conforme a las autorizaciones del usuario.

Jupiter y los protocolos/DEX subyacentes son responsables de las
funciones que efectivamente presten dentro de su infraestructura.

PLIXUM no garantiza:

-   precio;
-   liquidez;
-   ejecución;
-   ausencia de slippage;
-   disponibilidad de rutas;
-   ausencia de MEV;
-   continuidad de un protocolo tercero.

------------------------------------------------------------------------

# 6. Activos digitales

Para efectos de estos servicios, **Activos Digitales** significa, de
manera amplia, representaciones digitales de valor, derechos o activos
que pueden ser almacenadas, transferidas o ejecutadas mediante
blockchain, tecnologías de registro distribuido, smart contracts u otras
tecnologías criptográficas.

La categoría puede incluir, dependiendo de la disponibilidad y del
tratamiento jurídico aplicable:

### Stablecoins

-   USDC
-   USDT
-   EURC
-   otros tokens referenciados a monedas fiduciarias.

### Criptoactivos

-   SOL
-   BTC
-   ETH
-   otros criptoactivos compatibles.

### Activos tokenizados

-   oro tokenizado;
-   activos financieros tokenizados;
-   tokens que proporcionen exposición económica a acciones o ETFs;
-   otros activos tokenizados.

### xStocks

Los xStocks o productos similares deberán describirse específicamente
como **activos tokenizados** y no deberán presentarse automáticamente
como equivalentes jurídicos a acciones, valores tradicionales o
participaciones societarias.

La naturaleza jurídica de cada activo deberá determinarse de acuerdo con
el emisor, sus términos, derechos asociados, jurisdicción y estructura
de tokenización.

------------------------------------------------------------------------

# 7. Lending / DeFi

PLIXUM puede proporcionar una interfaz para que el usuario interactúe
con protocolos DeFi de terceros.

Por ejemplo:

**Usuario → PLIXUM → Jupiter Lend → protocolo correspondiente**

En este modelo:

-   PLIXUM no presta necesariamente los fondos;
-   PLIXUM no actúa necesariamente como prestatario;
-   PLIXUM no garantiza APY;
-   PLIXUM no garantiza liquidez;
-   PLIXUM no garantiza recuperación de fondos;
-   el rendimiento, tasa, disponibilidad y condiciones dependen del
    protocolo tercero.

El usuario debe aceptar los riesgos propios del protocolo antes de
ejecutar la operación.

------------------------------------------------------------------------

# 8. On-ramp y Off-ramp

PLIXUM puede integrar proveedores terceros especializados en entrada y
salida de activos digitales.

### Ejemplo

**COP / moneda fiduciaria → proveedor tercero → activo digital**

o

**Activo digital → proveedor tercero → moneda fiduciaria**

Cuando se utilice Bridge.xyz, Bridge será el proveedor tercero
responsable de las funciones que efectivamente preste bajo sus propios
términos y condiciones.

PLIXUM no deberá presentarse como entidad bancaria ni como emisor de
moneda fiduciaria.

La disponibilidad de monedas, países, rails, cuentas, límites, KYC,
tiempos y costos dependerá del proveedor correspondiente.

------------------------------------------------------------------------

# 9. Mandato de ejecución

## 9.1 Naturaleza

Cuando el modelo jurídico elegido por PLIXUM utilice un mandato, el
usuario podrá otorgar a PLIXUM un **mandato específico de ejecución**,
limitado a las operaciones y servicios expresamente disponibles en la
plataforma.

El mandato tendrá por objeto permitir que PLIXUM, directamente o
mediante terceros tecnológicos y proveedores especializados, realice las
gestiones necesarias para ejecutar las instrucciones del usuario.

## 9.2 Limitación

El mandato no debe interpretarse como:

-   transferencia de propiedad de los activos digitales a PLIXUM;
-   autorización general e ilimitada para disponer de los activos;
-   autorización para utilizar los activos del usuario para fines
    propios;
-   autorización para decidir discrecionalmente qué activos comprar;
-   autorización para asumir posiciones por cuenta propia.

La ejecución deberá permanecer vinculada a las instrucciones concretas
del usuario y a las funcionalidades habilitadas.

## 9.3 Terceros

El usuario autoriza a PLIXUM, cuando corresponda, a utilizar proveedores
y protocolos terceros para ejecutar las instrucciones.

Estos terceros pueden incluir:

-   agregadores de liquidez;
-   protocolos DeFi;
-   exchanges descentralizados;
-   proveedores de infraestructura blockchain;
-   proveedores de KYC;
-   proveedores de on-ramp/off-ramp;
-   proveedores de custodia de terceros, únicamente cuando un producto
    específico lo requiera;
-   proveedores de servicios tecnológicos.

------------------------------------------------------------------------

# 10. No captación

PLIXUM no deberá estructurar su producto como recepción de dinero del
público para:

-   pagar intereses;
-   remunerar depósitos;
-   administrar recursos con obligación de restitución;
-   otorgar créditos con recursos captados del público.

Los activos digitales depositados en una estructura blockchain del
usuario no deben presentarse como depósitos bancarios.

Si un flujo fiat es recibido por un tercero, la documentación
contractual debe identificar claramente al proveedor que recibe,
mantiene, procesa o dispersa dichos fondos y bajo qué relación
contractual.

------------------------------------------------------------------------

# 11. No prestación de servicios financieros

PLIXUM no se presenta como entidad financiera ni como establecimiento de
crédito.

La plataforma no debe utilizar expresiones que puedan inducir a creer
que:

-   los saldos son depósitos bancarios;
-   los activos están cubiertos por seguro de depósitos;
-   PLIXUM garantiza rendimientos;
-   PLIXUM garantiza el valor de los activos;
-   PLIXUM ofrece asesoría financiera personalizada;
-   PLIXUM es una bolsa de valores;
-   PLIXUM es una entidad vigilada por la Superintendencia Financiera.

La SFC ha señalado públicamente que en Colombia los criptoactivos no
cuentan actualmente con una definición legal específica y que la
negociación u operaciones con criptoactivos no están reguladas ni
supervisadas por la SFC como actividad financiera. Esto no equivale a
una autorización general ni elimina otras obligaciones legales
aplicables.

------------------------------------------------------------------------

# 12. No asesoría financiera

PLIXUM proporciona información tecnológica y transaccional.

No recomienda al usuario:

-   qué activo comprar;
-   qué activo vender;
-   qué estrategia utilizar;
-   qué protocolo utilizar para obtener un determinado rendimiento;
-   qué nivel de riesgo asumir.

El usuario toma sus propias decisiones.

La interfaz debe diferenciar:

**información objetiva**

de

**recomendación personalizada.**

------------------------------------------------------------------------

# 13. Riesgos de activos digitales

Antes de utilizar los servicios, el usuario deberá reconocer
expresamente riesgos como:

-   volatilidad;
-   pérdida parcial o total;
-   pérdida de paridad de stablecoins;
-   riesgo de smart contract;
-   riesgo de protocolo DeFi;
-   riesgo de blockchain;
-   riesgo de congestión;
-   riesgo de pérdida de claves;
-   riesgo de phishing;
-   riesgo de terceros;
-   riesgo de liquidez;
-   riesgo de slippage;
-   riesgo de MEV;
-   riesgo de oracle;
-   riesgo regulatorio;
-   riesgo de emisor;
-   riesgo de tokenización;
-   riesgo de contraparte;
-   riesgo de pérdida de acceso.

------------------------------------------------------------------------

# 14. Riesgo específico de xStocks y activos tokenizados

Los activos tokenizados requieren información adicional.

PLIXUM deberá indicar que:

1.  un token que representa exposición económica a un activo subyacente
    no necesariamente es jurídicamente equivalente al activo subyacente;
2.  los derechos del titular dependen de los términos del emisor;
3.  puede existir riesgo de emisor;
4.  puede existir riesgo de contraparte;
5.  puede existir riesgo regulatorio;
6.  puede existir diferencia entre el precio del token y el activo de
    referencia;
7.  la disponibilidad del activo puede depender de jurisdicción y
    restricciones del proveedor.

PLIXUM no debe describir un xStock como "una acción estadounidense"
salvo que el producto jurídico concreto permita esa descripción.

------------------------------------------------------------------------

# 15. Propiedad de los activos

En la medida en que la arquitectura técnica y contractual así lo
permita, los activos digitales pertenecen al usuario y no a PLIXUM.

PLIXUM no adquiere la propiedad económica de los activos simplemente
por:

-   permitir su visualización;
-   facilitar una operación;
-   ejecutar una instrucción;
-   interactuar con un smart contract;
-   integrar un protocolo tercero.

La documentación definitiva deberá ser consistente con la estructura
jurídica y técnica de las cuentas/PDA.

------------------------------------------------------------------------

# 16. Terceros y protocolos

PLIXUM integra servicios de terceros.

Cada tercero puede tener:

-   sus propios términos;
-   política de privacidad;
-   requisitos KYC;
-   límites;
-   tarifas;
-   restricciones geográficas;
-   riesgos tecnológicos;
-   procedimientos de suspensión;
-   procedimientos de recuperación.

El usuario podrá estar sujeto simultáneamente a:

1.  los T&C de PLIXUM;
2.  los términos del proveedor tercero;
3.  las reglas del smart contract;
4.  las reglas de la blockchain.

Cuando el usuario abandone una interfaz controlada por PLIXUM o
interactúe directamente con un tercero, deberá informarse de forma
visible.

------------------------------------------------------------------------

# 17. KYC / AML / SAGRILAFT

PLIXUM deberá implementar controles proporcionales al modelo de negocio
y a las obligaciones que le resulten aplicables.

Los controles podrán incluir:

-   identificación del usuario;
-   verificación de identidad;
-   validación de información;
-   monitoreo transaccional;
-   screening de sanciones;
-   análisis de wallets;
-   identificación de operaciones inusuales;
-   conservación de información;
-   reporte a las autoridades cuando corresponda;
-   gestión de riesgos LA/FT/FPADM.

La Superintendencia de Sociedades contempla actualmente un régimen
específico para empresas que realizan determinadas actividades
relacionadas con activos virtuales, incluyendo intercambio entre activos
virtuales, transferencia, custodia y otros servicios relacionados,
sujeto a los umbrales y condiciones establecidos en el Capítulo X.

Por ello, PLIXUM deberá realizar un análisis formal de aplicabilidad de
SAGRILAFT/Régimen de Medidas Mínimas con base en:

-   ingresos;
-   activos;
-   volumen de operaciones;
-   naturaleza exacta de las actividades;
-   CIIU;
-   condición societaria;
-   operaciones realizadas por cuenta de terceros.

No deberá afirmarse simplemente que "por ser non-custodial no aplica
SAGRILAFT".

------------------------------------------------------------------------

# 18. Protección de datos personales

PLIXUM deberá cumplir las normas colombianas aplicables sobre protección
de datos personales.

La plataforma deberá contar, como mínimo, con:

-   Política de Tratamiento de Datos;
-   aviso de privacidad;
-   mecanismos de autorización;
-   procedimiento para consultas y reclamos;
-   medidas de seguridad;
-   gestión de encargados;
-   reglas para transferencias/transmisiones internacionales;
-   conservación y eliminación de información.

Cuando se utilicen proveedores internacionales, deberá documentarse la
relación de tratamiento correspondiente.

------------------------------------------------------------------------

# 19. Seguridad

PLIXUM deberá aplicar controles de seguridad adecuados al nivel de
riesgo de la plataforma.

Como mínimo:

-   autenticación multifactor;
-   OTP;
-   protección de sesiones;
-   rate limiting;
-   control de acceso;
-   registro de eventos;
-   trazabilidad;
-   monitoreo;
-   gestión de incidentes;
-   segregación de ambientes;
-   gestión de secretos;
-   auditoría del smart contract;
-   controles sobre programas de actualización;
-   mecanismos de recuperación.

Los logs deberán permitir reconstruir:

**usuario → instrucción → autorización → operación → transacción
blockchain → resultado.**

------------------------------------------------------------------------

# 20. Inmutabilidad y reversibilidad

Las operaciones confirmadas y ejecutadas en blockchain pueden ser
irreversibles.

PLIXUM no garantiza la reversión de una operación una vez confirmada
on-chain.

Un error del usuario en:

-   dirección;
-   activo;
-   cantidad;
-   red;
-   destino;
-   operación;

puede generar pérdida irreversible.

------------------------------------------------------------------------

# 21. Responsabilidad

PLIXUM responderá por los servicios tecnológicos que efectivamente
presta conforme a la legislación aplicable.

PLIXUM no asumirá como propios los riesgos originados exclusivamente
por:

-   fallas de una blockchain;
-   hackeo de un protocolo tercero;
-   vulnerabilidades de un smart contract tercero;
-   insolvencia o suspensión de un proveedor tercero;
-   pérdida de liquidez;
-   variaciones de mercado;
-   slippage;
-   MEV;
-   congestión de red;
-   información incorrecta suministrada por el usuario.

Las limitaciones de responsabilidad deberán estar redactadas de manera
compatible con las normas imperativas de protección al consumidor y no
podrán utilizarse para excluir responsabilidades que legalmente no
puedan excluirse.

------------------------------------------------------------------------

# 22. Transparencia de tarifas

Antes de confirmar una operación, PLIXUM deberá mostrar, cuando sea
técnicamente posible:

-   monto de entrada;
-   activo de entrada;
-   activo de salida;
-   precio o cotización disponible;
-   slippage esperado o máximo;
-   network fee;
-   fee del protocolo;
-   fee de PLIXUM;
-   fee del proveedor tercero;
-   monto estimado de recepción.

El usuario deberá confirmar la operación con conocimiento de los costos
relevantes.

------------------------------------------------------------------------

# 23. Prohibiciones de uso

PLIXUM podrá bloquear o rechazar operaciones relacionadas con:

-   lavado de activos;
-   financiación del terrorismo;
-   financiación de proliferación;
-   fraude;
-   evasión de sanciones;
-   actividades ilícitas;
-   utilización de servicios para ocultar el origen de fondos;
-   utilización de protocolos o wallets identificados como de alto
    riesgo conforme a la metodología de cumplimiento.

Las decisiones deberán seguir políticas internas objetivas y
documentadas.

------------------------------------------------------------------------

# 24. Arquitectura conceptual de PLIXUM

``` text
                         USUARIO
                            │
                            │
                  ┌─────────▼─────────┐
                  │      PLIXUM       │
                  │ Frontend + API +  │
                  │ Orquestación      │
                  └─────────┬─────────┘
                            │
                            ▼
                  ┌───────────────────┐
                  │ Smart Contract /  │
                  │ PDA en Solana     │
                  └─────────┬─────────┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
       JUPITER          JUPITER LEND       BRIDGE
         SWAP              DEFI           ON/OFF-RAMP
          │                 │                 │
          ▼                 ▼                 ▼
       Liquidez          Lending          Fiat Rails
       / DEX             Protocol          / Payment
```

------------------------------------------------------------------------

# 25. Posicionamiento jurídico-operativo recomendado

La descripción corta de PLIXUM debería ser consistente con esta idea:

> **PLIXUM es una plataforma tecnológica que facilita, mediante una
> interfaz digital y mecanismos de autorización del usuario, la
> interacción con activos digitales y protocolos basados en blockchain.
> PLIXUM puede actuar como mandatario de ejecución respecto de
> instrucciones específicas del usuario y utilizar proveedores
> tecnológicos y protocolos terceros para ejecutar dichas instrucciones.
> PLIXUM no custodia los activos digitales de los usuarios ni actúa como
> contraparte de las operaciones ejecutadas por protocolos terceros,
> sujeto a la arquitectura técnica y contractual aplicable a cada
> servicio.**

------------------------------------------------------------------------

# 26. Lo que PLIXUM NO debería decir

Evitar:

-   "Somos un banco digital."
-   "Tu cuenta bancaria en blockchain."
-   "Tus depósitos están seguros."
-   "Garantizamos tus fondos."
-   "Tu dinero genera X%."
-   "Compra acciones de EE. UU." cuando jurídicamente se trate de tokens
    de exposición.
-   "Somos un exchange regulado."
-   "Estamos autorizados por la Superintendencia Financiera."
-   "Somos una entidad financiera."
-   "Tus activos están asegurados."
-   "Tus activos están bajo custodia de PLIXUM."

------------------------------------------------------------------------

# 27. Lo que PLIXUM sí puede enfatizar

Siempre que corresponda técnicamente:

-   infraestructura blockchain;
-   activos digitales;
-   interacción directa con protocolos;
-   ejecución por instrucción del usuario;
-   transparencia de operaciones;
-   trazabilidad on-chain;
-   smart contracts;
-   ausencia de custodia tradicional;
-   proveedores terceros especializados;
-   control y autorización del usuario;
-   interoperabilidad con protocolos DeFi.

------------------------------------------------------------------------

# 28. Referencia comparativa: Plenti y Littio

El modelo propuesto toma como referencia conceptual ciertas prácticas
observables en fintech colombianas.

**Plenti** declara actualmente que actúa como proveedor tecnológico y,
cuando corresponde, como mandatario; sus T&C contemplan operaciones de
compra/venta de activos digitales por cuenta y orden del usuario y
utilización de terceros. Sin embargo, Plenti también contempla custodia
a través de aliados, por lo que su arquitectura no debe asumirse
idéntica a la de PLIXUM. citeturn1search0

**Littio** actualmente se presenta en Colombia como proveedor que actúa
como "mandatario de ejecución", declara que no presta servicios
financieros ni realiza captación y describe sus operaciones colombianas
como operaciones sobre activos digitales.
citeturn1search3turn1search4

PLIXUM debe adaptar estos conceptos a su propia arquitectura,
especialmente porque su modelo pretende ser **non-custodial y basado en
smart contracts/PDA**, lo que requiere que los términos contractuales
sean coherentes con las capacidades reales del programa on-chain.

------------------------------------------------------------------------

# 29. Principio de consistencia técnica-jurídica

La documentación legal debe coincidir con el código.

Si los T&C dicen:

> "PLIXUM no puede retirar unilateralmente los activos"

el programa debe impedir técnicamente dicha operación.

Si los T&C dicen:

> "La operación requiere autorización del usuario"

el backend y el smart contract deben exigir esa autorización.

Si los T&C dicen:

> "PLIXUM no custodia"

la arquitectura debe evitar que PLIXUM tenga control unilateral sobre
los activos.

La política jurídica no debe utilizar "non-custodial" como una etiqueta
comercial sin verificar previamente las capacidades efectivas de:

-   PDA;
-   programa Anchor;
-   authorities;
-   upgrade authority;
-   signer seeds;
-   instrucciones administrativas;
-   wallets de administración;
-   backend;
-   servicios de terceros.

------------------------------------------------------------------------

# 30. Checklist previo al lanzamiento

## Jurídico

-   [ ] Términos y Condiciones
-   [ ] Contrato de mandato específico
-   [ ] Política de privacidad
-   [ ] Política de tratamiento de datos
-   [ ] Política de cookies, si aplica
-   [ ] Política de riesgos
-   [ ] Política de proveedores terceros
-   [ ] Política de activos digitales
-   [ ] Política de SAGRILAFT/RMM, según aplicabilidad
-   [ ] PTEE, según aplicabilidad
-   [ ] Matriz regulatoria Colombia
-   [ ] Concepto sobre captación
-   [ ] Concepto sobre custodia/control
-   [ ] Concepto sobre xStocks/activos tokenizados

## Técnico

-   [ ] Auditoría del smart contract
-   [ ] Revisión de authorities
-   [ ] Revisión de upgrade authority
-   [ ] Revisión de signer seeds
-   [ ] Prueba de imposibilidad de retiro unilateral
-   [ ] Prueba de autorización por operación
-   [ ] Logs de auditoría
-   [ ] Gestión de OTP
-   [ ] Gestión de incidentes
-   [ ] Disaster recovery

## Compliance

-   [ ] KYC
-   [ ] Screening
-   [ ] Wallet screening
-   [ ] Transaction monitoring
-   [ ] Travel Rule assessment, si aplica
-   [ ] SAGRILAFT/RMM applicability assessment
-   [ ] PTEE applicability assessment
-   [ ] SARLAFT/AML risk assessment, según actividad y contraparte
-   [ ] Procedimientos de congelamiento/bloqueo
-   [ ] Gestión de sanciones

------------------------------------------------------------------------

## 31. Nota regulatoria final

Este documento **no debe interpretarse como una conclusión de que PLIXUM
está exento de regulación por ser tecnológico o non-custodial**.

La SFC indica actualmente que los criptoactivos no son moneda de curso
legal y que sus operaciones no están reguladas o supervisadas por la SFC
como actividad financiera. citeturn0search0turn0search2

Por su parte, la Superintendencia de Sociedades contempla expresamente
dentro de su marco de Servicios de Activos Virtuales actividades como
intercambio entre activos virtuales, intercambio con fiat,
transferencia, custodia y otros servicios relacionados, junto con
criterios de umbral para la aplicación de determinadas obligaciones de
cumplimiento. citeturn0search8turn0search4

Por ello, la posición regulatoria definitiva de PLIXUM debe determinarse
a partir de **las actividades efectivamente realizadas, los flujos de
fondos, el control sobre los activos, el modelo contractual, los
proveedores utilizados, los volúmenes y la estructura societaria**, y no
únicamente a partir de la etiqueta "proveedor tecnológico" o
"non-custodial".

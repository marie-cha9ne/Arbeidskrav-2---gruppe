import Example from "@/app/components/CodeExample";

export default function subjectJs() {
  return (
    <article>
      <section>
        <h2>Hva er JavaScript?</h2>
        <p>
          Javascript er et av de mest brukte programmeringsspråkene i verden,
          spesielt for utvikling av nettsider. Det gjør nettsteder interaktive,
          dynamiske og responsive. JavaScript brukes til alt fra å validere
          skjemaer til å lage avanserte applikasjoner i nettleseren.
        </p>
        <ul>
          <p>
            <strong>
              Sammen med HTML & CSS utgjør JavaScript kjærnen av webutvikling:
            </strong>
          </p>
          <li>HTML definerer struktur og innhold</li>
          <li>CSS tar seg av utseende og layout</li>
          <li>JavaScript håndterer logikk og interaktivitet</li>
        </ul>
        <p>
          Med moderne JavaScript-rammeverk som React og Next.js kan man også
          bruke JavaScript til å bygge hele applikasjoner!
        </p>
      </section>
      <section>
        <h2>Objekter</h2>
        <p>
          Et objekt er en måte å samle informasjon på i små pakker. Du kan tenke
          på det som en perm med faner, der hver fane har et navn (nøkkel) og
          inneholder en verdi (informasjonen). <br />
          et eksempel på et Objekt:
        </p>
        <Example
          code={`const user = {
        name: "Jane Doe",
        age: 26,
        isStudent: true, 
        };`}
        />
        <p>her har vi tre faner:</p>
        <ul>
          <li>navn - "Jane Doe"</li>
          <li>alder - 25</li>
          <li>isStudent - true (boolsk verdi ja/nei)</li>
        </ul>
        <p>
          for å hente ut denne informasjonen kan vi bruke console.log() som
          dette:
        </p>
        <Example code={`console.log(user.name)`} />
        <p>
          for å se den uthentede informasjonen høyreklikker du på siden - klikk
          på inspiser/inspect og gå til console. der vil du se at navnet gitt i
          objektet vises.
        </p>
        <p>
          Objekter er veldig nyttige når vi skal representere ting som finnes i
          virkeligheten - f.eks en bruker, en vare i en nettbutikk eller en
          artikkel.
        </p>
      </section>
      <section>
        <h2>Arrays</h2>
        <p>
          Et array er en liste med ting, som ligger etter hverandre i en bestemt
          rekkefølge. Tenk på det som en handleliste: først står melk, så brød,
          så ost. <br />
          eksempel:
        </p>
        <Example code={`const shoppingList = ["melk", "brød", "ost"];`} />
        <p>
          Når noe i javascript skal telles starter tellingen alltid på 0 så i
          eksempelet over er rekkefølgen på listen:{" "}
        </p>
        <ul>
          <li>Første element [0] er "melk"</li>
          <li>Andre element [1] er "brød"</li>
          <li>Tredje element [2] er "ost"</li>
        </ul>
        <p>
          Arrays er nyttige når du skal bruke flere verdier av samme type - for
          eksempel en liste med brukere, tall eller produkter.
        </p>
        <h3>Nyttige array metoder:</h3>
        <p>
          Ofte når vi må jobbe med lister kan vi bruke spesielle metoder som
          gjør utførelsen av koden enklere. Her er noen metoder som du kanskje
          kan få bruk for senere:
        </p>
        <h4>Map()</h4>
        <p>
          Med <strong>map</strong> kan vi lage et nytt array basert på en
          endring av hvert element i det opprinelige arrayet. map-metoden
          returnerer et nytt array med resultatet av en funksjon for hvert
          element. <br />
          <strong>Eksempel:</strong>
        </p>
        <Example
          code={`
            const numbers = [1, 2, 3];
            const doubled = numbers.map((number)=> number * 2);

            console.log(doubled); 
            
            //Output: [2, 4, 6]
            `}
        />
        <p>
          Her brukes map() for å gå gjennom listen og gange verdiene inni
          arrayet med 2.
        </p>
        <h4>filter()</h4>
        <p>
          Med <strong>filter</strong> kan vi lage et nytt array som bare
          inneholder elementer som oppfyller en bestemt betingelse.{" "}
          <strong>Eksempel:</strong>
        </p>
        <Example
          code={`
            const animals = ["Hund", "Katt", "Høne", "Pappegøye", "Undulat", "Hest"];

            const animalContainingH = animals.filter((animal) => animal.includes("h"));

            console.log(animalContainingH);

            //Output: ["Hund", "Høne", "Hest"]
            `}
        />
        <p>
          Her brukes filter() for å gå gjennom arrayer og finne verdiene som har
          bokstaven "H" i seg. Deretter returneres et nytt array med verdiene
          som tilfredstiller betingelsen.
        </p>
        <h4>push()</h4>
        <p>
          <strong>push</strong> brukes til å legge til nye elementer på slutten
          av et array.
        </p>
        <Example
          code={`
            const food = ["Burger", "Pizza"];
            food.push("Pasta");

            console.log(food);
            //Output: ["buger", "Pizza", "Pasta"]
            `}
        />
        <p>Her legger vi til en ny matrett i slutten av listen. </p>
        <h4>concat()</h4>
        <p>
          Med <strong>concat</strong> kan vi slå sammen to lister.
        </p>
        <Example
          code={`
            const list1 = ["a", "b"];
            const list2 = ["c", "d"];

            const combined = list1.concat(list2);

            console.log(combined);
            //Output: ["a", "b", "c", "d"]
            `}
        />
        <p>
          Her legger vi sammen array nr1 med nr2. der array nr 2 blir lagt i
          slutten av den nye listen.
        </p>
      </section>
      <section>
        <h2>if-statements</h2>
        <p>
          if-statements er som små veiskilt i koden. Hvis noe er sant, gå denne
          veien. Hvis ikke, gå en annen vei.
        </p>
        <Example
          code={`const age = 17;
            if (age >= 18){
            console.log("Du er myndig");
            }else{
              console.log("Du er ikke myndig enda");
            }
            `}
        />
        <p>
          <strong>Forklaring:</strong>
          <br />
        </p>
        <ul>
          <li>Koden sjekker først: er alder større eller lik 18?</li>
          <li>Hvis ja -- skriv ut "Du er myndig"</li>
          <li>
            Hvis nei -- gå videre i funksjonen til else og skriv ut "Du er ikke
            myndig enda."
          </li>
        </ul>
        <p>
          Dette er grunnlaget for logikk i koden - vi kan bestemme hva som skal
          skje, basert på situasjonen.
        </p>
      </section>
      <section>
        <h2>Loops (Løkker)</h2>
        <p>
          En loop brukes når du vil gjøre samme handlingen flere ganger, for
          eksempel gå gjennom alle elementene i et array. I stedet for å skrive
          samme kode gjentatte ganger, kan man lage en loop. Det finnes
          forskjellige typer loops man kan bruke. som blant annet:
        </p>
        <h3>For-loop</h3>
        <p>
          For-loop er den mest klassiske løkken, den er fin å bruke når du vet
          hvor mange ganger noe skal gjentas. <br />
          <strong>Eksempel:</strong>
        </p>
        <Example
          code={`
          for(let i = 0; i < 5; i++){
          console.log(i)
          };

          //Output: 0 1 2 3 4
          `}
        />
        <p>
          Denne for-loopen sier at: "i" starter på 0. så lenge "i" er mindre enn
          5 skal den kjøre på nytt, og for hver loop øker "i" med 1.
        </p>
        <h3>While-loop</h3>
        <p>
          <strong>While-loop</strong> er nyttige når vi vil at koden skal
          fortsette til en bestemt tilstand er oppnådd.
        </p>
        <Example
          code={`
            let counter = 0;
            
            while(counter <= 5){
            console.log(counter);
            counter++;
            }

            //Output: 0 1 2 3 4 5
            `}
        />
        <p>
          Her lager vi en counter som starter på 0. while-løkken sier: så lenge
          counter er mindre enn eller lik 5, vil løkken kjøre. console kjører ut
          verdien av counter og counter++ øker med 1 etter hver runde til den
          når 5. Når counter blir 6 er ikke lenger betingelsen sann, og løkken
          avsluttes.
        </p>
      </section>
    </article>
  );
}

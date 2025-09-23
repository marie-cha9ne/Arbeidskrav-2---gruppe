import type { ArticleSection } from "../data/types";

export const subMainContent: ArticleSection[] = [
  {
    title:"Hva lærer du her?",
    body:[
      "På denne siden jobber vi med grunnleggende teknologier og prinsipper innnen moderne webutvikling. Målet er å bygge en god forståelse for hvordan man utvikler brukervennlige, tilgjenglige og funksjonelle nettsider ved hjelp av verktøy som JavaScript, React og designprinsipper."
    ],
    subSections:[
      {
        title:"Innholdet på siden som du kommer til å finne dekker:",
        list:[
          "En introduksjon til JavaScript og sentrale konsepter som objekter, arrays, if-setninger og nyttige metoder som blant annet: map(), find() og mer.",
          "En oversikt over designprinsipper, med fokus på universell utforming, farger og kontraster, samt typografi og enhetlig bruk av skriftstørrelser.",
          "En innføring i React -  et av de mest brukte rammeverkene for å bygge interaktive brukergrensesnitt - hvor vi ser nærmere på konsepter som komponenter, props, state og den virtuelle DOM",
        ],
        note:"Denne siden er for deg som ønsker å forstå både det tekniske og det visuelle ved webutvikling."
      },
    ],
  },
  {
    title:"Utfordre deg selv",
    body:[
      "Her finner du noe av det du trenger for å forstå noen av de viktige temaene innen moderde webutvikling. Enten du er helt ny eller trenger å friske opp kunnskapen din,er denne siden lager for å gi deg en litt mer lettfattelig innføring i emner som Javascript, design og React. Etter å ha lest deg opp på faginnholdet, kan du teste kunnskapen din med noen av våre flervalgsspørsmål. Det er en fin måte å se hva du har fått med deg og kanskje oppdage hva du kan lære mer om.",
      "Skal du også bli en av the wizards of the web? Da er det bare en ting å gjøre:",
    ],
    button:{
      text:"Test kunnskapen din",
      href:"./tasks"
    }
  }
]